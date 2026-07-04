# Page 10 — Users (manage) (MUST)

> Mockup: `docs/mockups/10-users.html` · APEX type: Interactive Grid + role management · System Admin (all) · Client Admin (own company)

## Purpose

Create/edit/deactivate users, grant roles (`USER_ROLES`, decision P — a user can hold several),
set company + department metadata, and create the matching APEX account.

## 1. Region & scoping

Interactive Grid on `APP_USERS`, one page, two scopes:

```sql
SELECT ... FROM APP_USERS
 WHERE :APP_ROLE = 'SYSTEM_ADMIN'
    OR (:APP_ROLE = 'CLIENT_ADMIN' AND company_id = NV('APP_COMPANY_ID'))
```

Page authorization: condition `:APP_ROLE IN ('SYSTEM_ADMIN','CLIENT_ADMIN')`.
Column rules: company column editable by System Admin only (Client Admin's rows are always
their own company — force it server-side on insert); department LOV cascades from company.

## 2. Roles (`USER_ROLES`)

- Roles are rows, not a column: checkboxes / shuttle per user writing `USER_ROLES`, plus
  `default_role` select (landing role at login).
- **Client Admin may grant client roles only** (CLIENT_USER / CLIENT_ADMIN) and only within
  their company. SUPPORT_AGENT / SYSTEM_ADMIN grants are System-Admin-only — validate
  server-side, not just by hiding options.
- Granting SUPPORT_AGENT should prompt to map projects + tiers (page 17 / project hub) —
  an unmapped agent sees an empty queue.

## 3. APEX account creation

New app user needs an APEX Accounts login. In the insert process call
`APEX_UTIL.CREATE_USER` (reference-verified; same pattern as `04_apex_accounts.sql`) with a
temp password + require-change, wrapped so an already-existing account doesn't kill the insert.
Deactivating a user sets `APP_USERS.status = 'INACTIVE'` — the post-auth process then blocks login.

## Isolation checklist

- [ ] Client Admin URL-tampering another company's user ID → row not in scope, update rejected (add the same scope predicate to the IG's automatic row processing or a validation).
- [ ] `company_id` forced to `NV('APP_COMPANY_ID')` on Client-Admin inserts.
- [ ] Role-grant validation server-side: Client Admin posting SYSTEM_ADMIN must fail.
- [ ] No password data anywhere in `APP_USERS` — credentials live in APEX Accounts only.
