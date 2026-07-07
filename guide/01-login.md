# Step 1 — Login & Security Foundation (MUST)

> *This sets up everything every other page depends on. Don't skip anything here.*

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

## Step 3: Create 6 Application Items

**Shared Components → Application Items → Create**. Do this 6 times:

| Name | Session State Protection |
|------|--------------------------|
| `APP_USER_ID` | **Restricted — may not be set from browser** |
| `APP_COMPANY_ID` | **Restricted — may not be set from browser** |
| `APP_COMPANY_NAME` | **Restricted — may not be set from browser** |
| `APP_ROLE` | **Restricted — may not be set from browser** |
| `APP_ROLE_DISP` | **Restricted — may not be set from browser** |
| `APP_HAS_MULTI_ROLE` | **Restricted — may not be set from browser** |

The "Restricted" setting is critical — it blocks URL tampering of your tenant key.

`APP_COMPANY_NAME` and `APP_ROLE_DISP` are **display helpers** — the human-readable company name and role (e.g. "System Admin") used by the combined banner/role-switcher nav entry in `02-home.md`. They're derived from the restricted items, so mark them Restricted too.

---

## Step 4: Create the Post-Authentication Procedure

The procedure is a real DB object, so it lives in a script with the rest of the foundation — not pasted here. **Run [`sql/06_auth_context.sql`](../sql/06_auth_context.sql)** in **SQL Workshop → SQL Scripts** (any time after `01_schema.sql`). It creates `STAMP_TENANT_CONTEXT`, which:

- looks up the `APP_USERS` profile (+ company name), and **blocks non-ACTIVE accounts** (FR-6);
- picks the active role from `USER_ROLES` — `DEFAULT_ROLE` if set, else highest-privilege;
- stamps the 6 app items with `APEX_UTIL.SET_SESSION_STATE` (incl. `APP_COMPANY_NAME` / `APP_ROLE_DISP` for the banner).

Then wire the name (the only non-scriptable part):
**Shared Components → Authentication Schemes** → edit your current scheme → **Login Processing** tab → set **Post-Authentication Procedure Name** to `stamp_tenant_context` → **Apply Changes**.

> **Prefer no SQL Workshop?** You can instead paste the *same* logic as an anonymous block into a login-page "After Authentication" process (or the auth scheme's **Source / PL/SQL Code** box) — identical effect, code lives inside the app. Pick **one** route: script **or** inline, not both, so there's a single source of truth. The scripted route is the project default because it keeps all DB objects in `sql/`.

---

## Step 5: Create 5 Authorization Schemes

**Shared Components → Authorization Schemes → Create**. Do this 5 times. Type = **PL/SQL Function Body Returning Boolean**:

| Scheme Name | PL/SQL Body |
|-------------|-------------|
| `IS_CLIENT_USER` | `RETURN :APP_ROLE = 'CLIENT_USER';` |
| `IS_CLIENT_ADMIN` | `RETURN :APP_ROLE = 'CLIENT_ADMIN';` |
| `IS_AGENT` | `RETURN :APP_ROLE = 'SUPPORT_AGENT';` |
| `IS_SYSTEM_ADMIN` | `RETURN :APP_ROLE = 'SYSTEM_ADMIN';` |
| `Can Raise Tickets` | `RETURN :APP_ROLE IN ('CLIENT_USER','CLIENT_ADMIN','SYSTEM_ADMIN');` |

The four `IS_*` schemes gate pages, buttons, columns, and nav entries everywhere else. `Can Raise Tickets` (everyone except plain support agents) gates the Raise Ticket page (Step 6 of `05-raise-ticket.md`).

---

## Step 6: Test It

Log in as each test user and verify via **Developer Toolbar → Session → Application Items**:

| User | Expected Role | Expected Company | Notes |
|------|--------------|------------------|-------|
| `sara@northwind.example` | SYSTEM_ADMIN | Northwind IT | `APP_HAS_MULTI_ROLE = Y` |
| `anna@acme.example` | CLIENT_USER | Acme Corp | single role |
| `bob@acme.example` | CLIENT_ADMIN | Acme Corp | single role |
| `mike@northwind.example` | SUPPORT_AGENT | Northwind IT | `APP_HAS_MULTI_ROLE = Y` |
| `tom@globex.example` | — | — | **Login must fail** (inactive account) |

---

## Isolation Checklist

- [ ] All 6 app items are **Restricted — may not be set from browser**
- [ ] Inactive user (`tom@globex.example`) is blocked at login
- [ ] No page/process sets `APP_COMPANY_ID` outside the post-auth (and later the role switcher)
- [ ] Session state shows correct values for each test user

---

**Next:** move to `02-home.md`.
