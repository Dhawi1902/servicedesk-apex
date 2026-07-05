--------------------------------------------------------------------------------
-- 06_auth_context.sql  —  Post-authentication tenant-context procedure
--------------------------------------------------------------------------------
-- Creates STAMP_TENANT_CONTEXT: the procedure APEX runs after a successful
-- login. Auth route is APEX Accounts — APEX verifies the password; THIS derives
-- tenant context. It looks up the APP_USERS profile, blocks non-ACTIVE accounts
-- (FR-6), picks the active role from USER_ROLES (DEFAULT_ROLE if set, else
-- highest-privilege), and stamps the session app items every isolation view and
-- page reads.
--
-- WHY THIS IS A SCRIPT (not pasted into the Builder): the auth scheme's
-- "Post-Authentication Procedure Name" attribute takes the NAME of a callable
-- procedure — so the procedure itself is a real DB object and belongs here in
-- sql/ with the rest of the foundation: versioned, re-runnable, testable in
-- SQL Commands. Only the one-line wiring (typing the name into the scheme) is
-- done in App Builder. (An inline anonymous block on the login page is a valid
-- alternative — see sql/README.md — but then the code lives in the app, not here.)
--
-- WIRING (App Builder, once): Shared Components > Authentication Schemes >
--   (current scheme) > Login Processing > Post-Authentication Procedure Name
--   = STAMP_TENANT_CONTEXT
--
-- PREREQUISITES: the 6 restricted application items must exist first —
--   APP_USER_ID, APP_COMPANY_ID, APP_COMPANY_NAME, APP_ROLE, APP_ROLE_DISP,
--   APP_HAS_MULTI_ROLE (see sql/README.md "Authentication wiring").
--   APP_COMPANY_NAME + APP_ROLE_DISP are display helpers for the combined
--   banner/role-switcher nav entry (guide/02-home.md).
--
-- RUN: SQL Workshop > SQL Scripts, any time after 01_schema.sql.
-- Reference-verified: APEX_UTIL.SET_SESSION_STATE (reference/plsql/061-APEX_UTIL.md).
--------------------------------------------------------------------------------
CREATE OR REPLACE PROCEDURE stamp_tenant_context
AS
    l_user_id      APP_USERS.USER_ID%TYPE;
    l_company_id   APP_USERS.COMPANY_ID%TYPE;
    l_company_name COMPANIES.COMPANY_NAME%TYPE;
    l_default_role APP_USERS.DEFAULT_ROLE%TYPE;
    l_status       APP_USERS.STATUS%TYPE;
    l_active_role  USER_ROLES.ROLE%TYPE;
    l_role_count   PLS_INTEGER;
BEGIN
    -- 1. Look up the profile (+ company name for the banner)
    SELECT a.USER_ID, a.COMPANY_ID, a.DEFAULT_ROLE, a.STATUS, c.COMPANY_NAME
      INTO l_user_id, l_company_id, l_default_role, l_status, l_company_name
      FROM APP_USERS a
      JOIN COMPANIES c ON c.COMPANY_ID = a.COMPANY_ID
     WHERE UPPER(a.EMAIL) = UPPER(V('APP_USER'));   -- V('APP_USER') = the authenticated login

    IF l_status <> 'ACTIVE' THEN
        raise_application_error(-20001, 'Account is not active.');
    END IF;

    -- 2. Count roles (drives the role-switch nav visibility)
    SELECT COUNT(*) INTO l_role_count
      FROM USER_ROLES WHERE USER_ID = l_user_id;

    -- 3. Pick active role: DEFAULT_ROLE if set, else highest-privilege
    IF l_default_role IS NOT NULL THEN
        l_active_role := l_default_role;
    ELSE
        SELECT ROLE INTO l_active_role
          FROM USER_ROLES
         WHERE USER_ID = l_user_id
         ORDER BY DECODE(ROLE,'SYSTEM_ADMIN',1,'SUPPORT_AGENT',2,'CLIENT_ADMIN',3,4)
         FETCH FIRST 1 ROW ONLY;
    END IF;

    -- 4. Stamp session (SET_SESSION_STATE, not :ITEM := — runs before item binding)
    APEX_UTIL.SET_SESSION_STATE('APP_USER_ID',        l_user_id);
    APEX_UTIL.SET_SESSION_STATE('APP_COMPANY_ID',     l_company_id);
    APEX_UTIL.SET_SESSION_STATE('APP_COMPANY_NAME',   l_company_name);
    APEX_UTIL.SET_SESSION_STATE('APP_ROLE',           l_active_role);
    APEX_UTIL.SET_SESSION_STATE('APP_ROLE_DISP',
        INITCAP(REPLACE(l_active_role, '_', ' ')));   -- "System Admin", not "SYSTEM_ADMIN"
    APEX_UTIL.SET_SESSION_STATE('APP_HAS_MULTI_ROLE',
        CASE WHEN l_role_count > 1 THEN 'Y' ELSE 'N' END);
EXCEPTION
    WHEN NO_DATA_FOUND THEN
        raise_application_error(-20002, 'No application profile for this user.');
END stamp_tenant_context;
/
