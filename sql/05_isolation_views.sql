--------------------------------------------------------------------------------
-- 05_isolation_views.sql  —  Tenant-scoped views (the isolation firewall)
--------------------------------------------------------------------------------
-- Purpose: concentrate ALL tenant + role scoping in a few tested objects, so page
-- authors physically cannot write the leaky "WHERE ticket_id = :P5_TICKET_ID"
-- query the tenant-isolation-auditor flagged (CRITICAL-1/2, HIGH-1). This is the
-- brief's stated goal: isolation logic in a few well-tested queries (brief §330).
--
-- HOW IT WORKS
--   V_MY_TICKETS encodes the FULL role matrix once, using the APEX session
--   functions verified in reference/plsql/061-APEX_UTIL.md:
--     * V('APP_ROLE')        = APEX_UTIL.GET_SESSION_STATE          (varchar)
--     * NV('APP_COMPANY_ID') = APEX_UTIL.GET_NUMERIC_SESSION_STATE  (number)
--     * NV('APP_USER_ID')    = APEX_UTIL.GET_NUMERIC_SESSION_STATE  (number)
--   These read the app items stamped by the post-auth process. Outside an APEX
--   session they return NULL, so every view returns ZERO rows — fail-closed.
--   The child views (comments/history/attachments) scope themselves to
--   V_MY_TICKETS, so they inherit the exact same matrix automatically.
--
-- ROLE MATRIX (who sees which tickets)
--   CLIENT_USER   -> own company AND created_by = me     (my tickets only)
--   CLIENT_ADMIN  -> own company (all of it)
--   SUPPORT_AGENT -> only companies in AGENT_COMPANIES for me (decision I)
--   SYSTEM_ADMIN  -> everything
--
-- USAGE RULES (tell the whole team)
--   * READS: every client-facing region/report/chart/LOV/Download-BLOB that
--     touches ticket data selects FROM these views, NEVER the base tables.
--   * WRITES: insert/update/assign/escalate run against the BASE tables in a
--     process, but must first confirm the target ticket is visible to the caller:
--         SELECT COUNT(*) INTO l_ok FROM V_MY_TICKETS WHERE TICKET_ID = :P5_TICKET_ID;
--         IF l_ok = 0 THEN raise_application_error(-20010,'Not authorized'); END IF;
--     (These views are not simply-updatable, so don't build editable grids on
--     them; use the base table + this guard. Covers auditor CRITICAL-3.)
--   * Ticket INSERT stamps COMPANY_ID = NV('APP_COMPANY_ID') server-side for
--     clients; a System Admin creating on behalf of a client sets it explicitly.
--     Never map COMPANY_ID from a submittable page item.
--
-- Run AFTER 01_schema.sql (and 03_attachments.sql if using attachments).
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
-- V_MY_TICKETS — the single source of truth for "which tickets can I see".
--------------------------------------------------------------------------------
CREATE OR REPLACE VIEW V_MY_TICKETS AS
SELECT t.*
FROM   TICKETS t
WHERE  CASE
         WHEN V('APP_ROLE') = 'SYSTEM_ADMIN'
              THEN 1
         WHEN V('APP_ROLE') = 'CLIENT_ADMIN'
              AND t.COMPANY_ID = NV('APP_COMPANY_ID')
              THEN 1
         WHEN V('APP_ROLE') = 'CLIENT_USER'
              AND t.COMPANY_ID = NV('APP_COMPANY_ID')
              AND t.CREATED_BY = NV('APP_USER_ID')
              THEN 1
         WHEN V('APP_ROLE') = 'SUPPORT_AGENT'
              AND t.COMPANY_ID IN (SELECT ac.COMPANY_ID
                                   FROM   AGENT_COMPANIES ac
                                   WHERE  ac.USER_ID = NV('APP_USER_ID'))
              THEN 1
         ELSE 0
       END = 1;

--------------------------------------------------------------------------------
-- V_MY_COMMENTS — comments only for visible tickets; internal notes hidden
-- from clients (auditor MEDIUM: TICKET_COMMENTS.IS_INTERNAL).
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
-- V_MY_ATTACHMENTS — files only for visible tickets. Inherits the role matrix
-- via V_MY_TICKETS, closing the BLOB-download IDOR (auditor CRITICAL-2).
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
    ]';
  END IF;
END;
/
