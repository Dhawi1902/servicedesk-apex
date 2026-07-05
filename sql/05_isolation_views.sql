--------------------------------------------------------------------------------
-- 05_isolation_views.sql  —  Tenant-scoped views (the isolation firewall)
--------------------------------------------------------------------------------
-- Purpose: concentrate ALL tenant + role scoping in a few tested objects, so page
-- authors physically cannot write the leaky "WHERE ticket_id = :P5_TICKET_ID"
-- query the tenant-isolation-auditor flagged (CRITICAL-1/2, HIGH-1). This is the
-- brief's stated goal: isolation logic in a few well-tested queries.
--
-- HOW IT WORKS
--   V_MY_PROJECTS encodes the FULL role matrix once, using the APEX session
--   functions verified in reference/plsql/061-APEX_UTIL.md:
--     * V('APP_ROLE')        = APEX_UTIL.GET_SESSION_STATE          (varchar)
--     * NV('APP_COMPANY_ID') = APEX_UTIL.GET_NUMERIC_SESSION_STATE  (number)
--     * NV('APP_USER_ID')    = APEX_UTIL.GET_NUMERIC_SESSION_STATE  (number)
--   These read the app items stamped by the post-auth process. Outside an APEX
--   session they return NULL, so every view returns ZERO rows — fail-closed.
--   V_MY_TICKETS derives from V_MY_PROJECTS; the child views (comments/history/
--   attachments) scope themselves to V_MY_TICKETS — one matrix, inherited by all.
--
-- ROLE MATRIX (decisions N revised / O / Q / I / M revised — locked 2026-07-04)
--   SYSTEM_ADMIN  -> every project and ticket
--   CLIENT_ADMIN  -> all projects/tickets of own company
--   CLIENT_USER   -> own company's OPEN projects + RESTRICTED projects they have
--                    a USER_PROJECTS invitation for (rows GRANT, never restrict)
--   SUPPORT_AGENT -> only projects in AGENT_PROJECTS for me (any tier)
--   Departments are METADATA ONLY — never a visibility filter (decision N revised).
--
-- USAGE RULES (tell the whole team)
--   * READS: every client-facing region/report/chart/LOV/Download-BLOB that
--     touches ticket data selects FROM these views, NEVER the base tables.
--     Project lists and the ticket-create project picker select FROM
--     V_MY_PROJECTS (add WHERE IS_ACTIVE='Y' when raising new tickets).
--     Category LOVs select FROM V_MY_CATEGORIES (never the base table — scoped
--     rows would leak other tenants' category labels).
--   * WRITES: insert/update/assign/escalate run against the BASE tables in a
--     process, but must first confirm the target ticket is visible to the caller:
--         SELECT COUNT(*) INTO l_ok FROM V_MY_TICKETS WHERE TICKET_ID = :P5_TICKET_ID;
--         IF l_ok = 0 THEN raise_application_error(-20010,'Not authorized'); END IF;
--     (These views are not simply-updatable, so don't build editable grids on
--     them; use the base table + this guard.)
--   * Ticket INSERT: validate PROJECT_ID against V_MY_PROJECTS, then derive
--     COMPANY_ID from the project SERVER-SIDE (the composite FK on TICKETS
--     rejects a mismatch anyway). Never map COMPANY_ID from a submittable item.
--
-- Run AFTER 01_schema.sql (and 03_attachments.sql if using attachments).
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
-- V_MY_PROJECTS — the single source of truth for "which projects can I access".
-- Every other view derives from this, so the role matrix lives in ONE place.
--------------------------------------------------------------------------------
CREATE OR REPLACE VIEW V_MY_PROJECTS AS
SELECT p.*
FROM   PROJECTS p
WHERE  CASE
         WHEN V('APP_ROLE') = 'SYSTEM_ADMIN'
              THEN 1
         WHEN V('APP_ROLE') = 'CLIENT_ADMIN'
              AND p.COMPANY_ID = NV('APP_COMPANY_ID')
              THEN 1
         WHEN V('APP_ROLE') = 'CLIENT_USER'
              AND p.COMPANY_ID = NV('APP_COMPANY_ID')
              AND ( p.VISIBILITY = 'OPEN'
                    OR p.PROJECT_ID IN (SELECT up.PROJECT_ID
                                        FROM   USER_PROJECTS up
                                        WHERE  up.USER_ID = NV('APP_USER_ID')) )
              THEN 1
         WHEN V('APP_ROLE') = 'SUPPORT_AGENT'
              AND p.PROJECT_ID IN (SELECT ap.PROJECT_ID
                                   FROM   AGENT_PROJECTS ap
                                   WHERE  ap.USER_ID = NV('APP_USER_ID'))
              THEN 1
         ELSE 0
       END = 1;

--------------------------------------------------------------------------------
-- V_MY_CATEGORIES — categories offerable to me: global rows, plus company/project
-- rows within my project scope (via V_MY_PROJECTS, so the matrix stays in one
-- place). Use for every category LOV and validate the submitted CATEGORY_ID
-- against it on ticket insert. Fail-closed: no session -> no rows (even globals).
--------------------------------------------------------------------------------
CREATE OR REPLACE VIEW V_MY_CATEGORIES AS
SELECT c.*
FROM   CATEGORIES c
WHERE  V('APP_ROLE') = 'SYSTEM_ADMIN'
   OR  ( V('APP_ROLE') IN ('CLIENT_USER','CLIENT_ADMIN','SUPPORT_AGENT')
         AND ( c.COMPANY_ID IS NULL
               OR ( c.PROJECT_ID IS NULL
                    AND c.COMPANY_ID IN (SELECT COMPANY_ID FROM V_MY_PROJECTS) )
               OR c.PROJECT_ID IN (SELECT PROJECT_ID FROM V_MY_PROJECTS) ) );

--------------------------------------------------------------------------------
-- V_MY_TICKETS — tickets in projects I can access. The company predicate is a
-- redundant second lock for client roles (defence-in-depth on top of the
-- TICKETS (PROJECT_ID, COMPANY_ID) composite FK).
--------------------------------------------------------------------------------
CREATE OR REPLACE VIEW V_MY_TICKETS AS
SELECT t.*
FROM   TICKETS t
WHERE  t.PROJECT_ID IN (SELECT PROJECT_ID FROM V_MY_PROJECTS)
AND    ( V('APP_ROLE') IN ('SYSTEM_ADMIN','SUPPORT_AGENT')
         OR t.COMPANY_ID = NV('APP_COMPANY_ID') );

--------------------------------------------------------------------------------
-- V_MY_COMMENTS — comments only for visible tickets; internal notes hidden
-- from clients (TICKET_COMMENTS.IS_INTERNAL).
--------------------------------------------------------------------------------
CREATE OR REPLACE VIEW V_MY_COMMENTS AS
SELECT c.*
FROM   TICKET_COMMENTS c
WHERE  c.TICKET_ID IN (SELECT TICKET_ID FROM V_MY_TICKETS)
AND    ( c.IS_INTERNAL = 'N'
         OR V('APP_ROLE') IN ('SUPPORT_AGENT','SYSTEM_ADMIN') );

--------------------------------------------------------------------------------
-- V_MY_HISTORY — audit trail only for visible tickets.
--------------------------------------------------------------------------------
CREATE OR REPLACE VIEW V_MY_HISTORY AS
SELECT h.*
FROM   TICKET_HISTORY h
WHERE  h.TICKET_ID IN (SELECT TICKET_ID FROM V_MY_TICKETS);

--------------------------------------------------------------------------------
-- V_MY_ATTACHMENTS — files only for visible tickets. Inherits the ticket role
-- matrix via V_MY_TICKETS (closing the cross-tenant BLOB-download IDOR) AND hides
-- files on INTERNAL comments from clients — mirroring V_MY_COMMENTS.
-- WHY the internal-note clause is here and NOT in the page's region SQL: a
-- declarative Download-BLOB column / GET_BLOB_FILE_SRC preview serves the file
-- from a separate GET request keyed only by ATTACHMENT_ID — it does NOT run the
-- page's Before-Header guard or the region's COMMENT_ID/V_MY_COMMENTS predicate.
-- The ONLY thing protecting that endpoint is this view, so every visibility rule
-- for a file must live here. (Client could otherwise forge a PK to pull an
-- internal note's screenshot off a ticket they can legitimately see.)
-- Guard the base against runtime errors if the attachments table isn't installed.
--------------------------------------------------------------------------------
DECLARE
  l_exists NUMBER;
BEGIN
  SELECT COUNT(*) INTO l_exists FROM USER_TABLES WHERE TABLE_NAME = 'TICKET_ATTACHMENTS';
  IF l_exists = 1 THEN
    EXECUTE IMMEDIATE q'[
      CREATE OR REPLACE VIEW V_MY_ATTACHMENTS AS
      SELECT a.*
      FROM   TICKET_ATTACHMENTS a
      WHERE  a.TICKET_ID IN (SELECT TICKET_ID FROM V_MY_TICKETS)
      AND    ( a.COMMENT_ID IS NULL                                    -- ticket-level: ticket already visible
               OR V('APP_ROLE') IN ('SUPPORT_AGENT','SYSTEM_ADMIN')    -- staff see all
               OR a.COMMENT_ID IN (SELECT COMMENT_ID FROM V_MY_COMMENTS) )  -- client: only files on comments they can see (internal hidden)
    ]';
  END IF;
END;
/
