# Step 1 — Login & Security Foundation (MUST)

> This sets up everything every other page depends on. Don't skip anything here.

---

## Step 1: Create the Application

**App Builder → Create → New Application**
- Name: `Service Desk`
- Leave the default login page (page 9999)
- Click **Create Application**

---

## Step 2: Set the Authentication Scheme

**Shared Components → Authentication Schemes** → select (or create) **Application Express Accounts** → make it **Current**.

This uses the accounts that `04_apex_accounts.sql` already created (all password `demo`).

---

## Step 3: Create 4 Application Items

**Shared Components → Application Items → Create**. Do this 4 times:

| Name | Session State Protection |
|------|--------------------------|
| `APP_USER_ID` | **Restricted — may not be set from browser** |
| `APP_COMPANY_ID` | **Restricted — may not be set from browser** |
| `APP_ROLE` | **Restricted — may not be set from browser** |
| `APP_HAS_MULTI_ROLE` | **Restricted — may not be set from browser** |

The "Restricted" setting is critical — it blocks URL tampering of your tenant key.

---

## Step 4: Create the Post-Authentication Procedure

First, create the stored procedure. Go to **SQL Workshop → SQL Commands** and run:

```sql
CREATE OR REPLACE PROCEDURE stamp_tenant_context
AS
    l_user_id      APP_USERS.USER_ID%TYPE;
    l_company_id   APP_USERS.COMPANY_ID%TYPE;
    l_default_role APP_USERS.DEFAULT_ROLE%TYPE;
    l_status       APP_USERS.STATUS%TYPE;
    l_active_role  USER_ROLES.ROLE%TYPE;
    l_role_count   PLS_INTEGER;
BEGIN
    SELECT USER_ID, COMPANY_ID, DEFAULT_ROLE, STATUS
      INTO l_user_id, l_company_id, l_default_role, l_status
      FROM APP_USERS
     WHERE UPPER(EMAIL) = UPPER(V('APP_USER'));

    IF l_status <> 'ACTIVE' THEN
        raise_application_error(-20001, 'Account is not active.');
    END IF;

    SELECT COUNT(*) INTO l_role_count
      FROM USER_ROLES WHERE USER_ID = l_user_id;

    IF l_default_role IS NOT NULL THEN
        l_active_role := l_default_role;
    ELSE
        SELECT ROLE INTO l_active_role
          FROM USER_ROLES
         WHERE USER_ID = l_user_id
         ORDER BY DECODE(ROLE,'SYSTEM_ADMIN',1,'SUPPORT_AGENT',2,'CLIENT_ADMIN',3,4)
         FETCH FIRST 1 ROW ONLY;
    END IF;

    APEX_UTIL.SET_SESSION_STATE('APP_USER_ID',        l_user_id);
    APEX_UTIL.SET_SESSION_STATE('APP_COMPANY_ID',     l_company_id);
    APEX_UTIL.SET_SESSION_STATE('APP_ROLE',           l_active_role);
    APEX_UTIL.SET_SESSION_STATE('APP_HAS_MULTI_ROLE',
        CASE WHEN l_role_count > 1 THEN 'Y' ELSE 'N' END);
EXCEPTION
    WHEN NO_DATA_FOUND THEN
        raise_application_error(-20002, 'No application profile for this user.');
END stamp_tenant_context;
```

Then wire it up:
**Shared Components → Authentication Schemes** → edit your current scheme → **Login Processing** tab → set **Post-Authentication Procedure Name** to `stamp_tenant_context` → **Apply Changes**.

---

## Step 5: Create 4 Authorization Schemes

**Shared Components → Authorization Schemes → Create**. Do this 4 times. Type = **PL/SQL Function Body Returning Boolean**:

| Scheme Name | PL/SQL Body |
|-------------|-------------|
| `IS_CLIENT_USER` | `RETURN :APP_ROLE = 'CLIENT_USER';` |
| `IS_CLIENT_ADMIN` | `RETURN :APP_ROLE = 'CLIENT_ADMIN';` |
| `IS_AGENT` | `RETURN :APP_ROLE = 'SUPPORT_AGENT';` |
| `IS_SYSTEM_ADMIN` | `RETURN :APP_ROLE = 'SYSTEM_ADMIN';` |

These gate pages, buttons, columns, and nav entries everywhere else.

---

## Step 6: Test It

Log in as each test user and verify via **Developer Toolbar → Session → Application Items**:

| User | Expected Role | Expected Company | Notes |
|------|--------------|------------------|-------|
| `sara@northwind.example` | SYSTEM_ADMIN | Northwind | `APP_HAS_MULTI_ROLE = Y` |
| `anna@acme.example` | CLIENT_USER | Acme Corp | single role |
| `bob@acme.example` | CLIENT_ADMIN | Acme Corp | single role |
| `mike@northwind.example` | SUPPORT_AGENT | Northwind | `APP_HAS_MULTI_ROLE = Y` |
| `tom@globex.example` | — | — | **Login must fail** (inactive account) |

---

## Isolation Checklist

- [ ] All 4 app items are **Restricted — may not be set from browser**
- [ ] Inactive user (`tom@globex.example`) is blocked at login
- [ ] No page/process sets `APP_COMPANY_ID` outside the post-auth (and later the role switcher)
- [ ] Session state shows correct values for each test user

---

**Next:** move to `02-home.md` to build the Home page and app shell (navigation + role switcher).
