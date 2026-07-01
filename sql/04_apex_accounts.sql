--------------------------------------------------------------------------------
-- 04_apex_accounts.sql  —  Create APEX Accounts login users from the seed
--------------------------------------------------------------------------------
-- Auth route: APEX Accounts (built-in). APEX owns the password (salted hash +
-- lockout + policy); APP_USERS stays a pure profile/tenant table with no password
-- column. This script creates one login account per seeded APP_USERS row so the
-- credential store and the profile table never drift.
--
-- Username = email (APEX matches case-insensitively). Password = 'demo' for all,
-- matching docs/mockups. Run AFTER 02_seed_data.sql.
--
-- WHERE TO RUN: SQL Workshop > SQL Commands (or SQL Scripts) inside the target
-- workspace — the workspace security-group context is already set there, which
-- APEX_UTIL.CREATE_USER requires. (If you ever run this from SQL Developer / an
-- external session, uncomment the SET_WORKSPACE line and set your workspace name.)
--
-- NOTE: if your workspace enforces a strong password policy, 'demo' may be
-- rejected — swap p_web_password for a compliant value and tell the team.
--------------------------------------------------------------------------------
BEGIN
  -- apex_util.set_workspace(p_workspace => 'YOUR_WORKSPACE_NAME');  -- only if run outside SQL Workshop

  FOR u IN (
    SELECT a.EMAIL, a.FULL_NAME
    FROM   APP_USERS a
    WHERE  NOT EXISTS (                    -- skip accounts that already exist
             SELECT 1 FROM APEX_WORKSPACE_APEX_USERS w
             WHERE  UPPER(w.USER_NAME) = UPPER(a.EMAIL) )
  ) LOOP
    BEGIN
      APEX_UTIL.CREATE_USER(
        p_user_name                    => u.EMAIL,
        p_first_name                   => u.FULL_NAME,
        p_email_address                => u.EMAIL,
        p_web_password                 => 'demo',
        p_change_password_on_first_use => 'N',    -- 'demo' works on first login
        p_developer_privs              => NULL);  -- end user: app access only, no dev tools
    EXCEPTION
      WHEN OTHERS THEN
        -- Don't abort the whole batch if one account is rejected; surface which one.
        DBMS_OUTPUT.PUT_LINE('Skipped ' || u.EMAIL || ': ' || SQLERRM);
    END;
  END LOOP;

  COMMIT;
END;
/
