--------------------------------------------------------------------------------
-- 00_drop_all.sql  —  Tear down the service-desk schema (safe to run repeatedly)
--------------------------------------------------------------------------------
-- Run this ONLY when you want a clean slate before re-running 01_schema.sql.
-- Ignores "table/sequence does not exist" so it never errors on a fresh workspace.
-- Drops in reverse-dependency order.
--------------------------------------------------------------------------------
BEGIN
  FOR o IN (
    SELECT 'VIEW'     AS otype, 'V_MY_ATTACHMENTS'  AS oname FROM dual UNION ALL
    SELECT 'VIEW',     'V_MY_HISTORY'      FROM dual UNION ALL
    SELECT 'VIEW',     'V_MY_COMMENTS'     FROM dual UNION ALL
    SELECT 'VIEW',     'V_MY_TICKETS'      FROM dual UNION ALL
    SELECT 'TABLE',    'TICKET_HISTORY'    FROM dual UNION ALL
    SELECT 'TABLE',    'TICKET_COMMENTS'   FROM dual UNION ALL
    SELECT 'TABLE',    'TICKET_ATTACHMENTS' FROM dual UNION ALL
    SELECT 'TABLE',    'TICKETS'           FROM dual UNION ALL
    SELECT 'TABLE',    'AGENT_COMPANIES'   FROM dual UNION ALL
    SELECT 'TABLE',    'APP_USERS'         FROM dual UNION ALL
    SELECT 'TABLE',    'CATEGORIES'        FROM dual UNION ALL
    SELECT 'TABLE',    'COMPANIES'         FROM dual UNION ALL
    SELECT 'SEQUENCE', 'TICKET_REF_SEQ'    FROM dual
  ) LOOP
    BEGIN
      CASE o.otype
        WHEN 'TABLE'    THEN EXECUTE IMMEDIATE 'DROP TABLE '    || o.oname || ' CASCADE CONSTRAINTS PURGE';
        WHEN 'VIEW'     THEN EXECUTE IMMEDIATE 'DROP VIEW '     || o.oname;
        WHEN 'SEQUENCE' THEN EXECUTE IMMEDIATE 'DROP SEQUENCE ' || o.oname;
      END CASE;
    EXCEPTION
      WHEN OTHERS THEN
        IF SQLCODE NOT IN (-942, -2289, -4043) THEN RAISE; END IF;  -- ignore "does not exist"
    END;
  END LOOP;
END;
/
