# Page 1 — Login & Security Foundation (MUST)

> Mockup: `docs/mockups/01-login.html` · APEX type: Login page (created with the app) · All roles

## Purpose

The built-in login page needs almost no work — the real job here is the **security foundation**
every other page consumes: authentication scheme, application items, post-auth process, and the
four authorization schemes. Build this once, then never redefine it — pages only *consume*
`:APP_COMPANY_ID` and the `IS_*` schemes.

## 1. Authentication scheme

Shared Components → **Authentication Schemes** → Create → **Application Express Accounts** →
set **Current**. APEX verifies passwords (salted hashing + lockout built in);
`04_apex_accounts.sql` already created a `demo`-password account per seeded user.

> The brief mentions Microsoft SSO (Entra ID Social Sign-In) as the eventual production route —
> that is a later swap of the authentication scheme only; nothing else on any page changes,
> because tenant context never lives in the auth scheme.

## 2. Application items (4)

Shared Components → **Application Items**. For **each one** set
**Session State Protection = Restricted — may not be set from browser** (blocks URL tampering).

| Item | Purpose |
|------|---------|
| `APP_USER_ID` | Logged-in user's `APP_USERS` PK |
| `APP_COMPANY_ID` | Tenant key — the isolation views read this |
| `APP_ROLE` | Active role, from `USER_ROLES` (decision P) |
| `APP_HAS_MULTI_ROLE` | `Y`/`N` — shows/hides the nav-bar role switcher |

## 3. Post-authentication process

On the authentication scheme, set **Post-Authentication Procedure** to the PL/SQL block in
`sql/README.md` §3. What it does: looks up the `APP_USERS` profile by `:APP_USER` email,
rejects inactive accounts, picks the active role (`DEFAULT_ROLE` if set, else
highest-privilege from `USER_ROLES`), and stamps all four app items with
`APEX_UTIL.SET_SESSION_STATE` (not `:ITEM :=` — binding isn't reliable during login).

## 4. Authorization schemes (4)

Shared Components → **Authorization Schemes** → Create, type
**PL/SQL Function Body Returning Boolean**:

| Scheme | Body |
|--------|------|
| `IS_CLIENT_USER` | `RETURN :APP_ROLE = 'CLIENT_USER';` |
| `IS_CLIENT_ADMIN` | `RETURN :APP_ROLE = 'CLIENT_ADMIN';` |
| `IS_AGENT` | `RETURN :APP_ROLE = 'SUPPORT_AGENT';` |
| `IS_SYSTEM_ADMIN` | `RETURN :APP_ROLE = 'SYSTEM_ADMIN';` |

These gate pages, buttons, columns, and nav entries everywhere else. Where a page needs
"client roles" or "staff roles", combine with a condition (`:APP_ROLE IN (...)`) rather than
creating more schemes.

## 5. The login page itself

Keep the default page 9999 layout; apply branding later (logo, app name "Service Desk",
background) via Theme Roller / login page template options — see `apex-ui-stylist` for polish.

## Isolation checklist

- [ ] All 4 app items are **Restricted — may not be set from browser**.
- [ ] Post-auth raises an error for missing/inactive `APP_USERS` rows (no half-logged-in state).
- [ ] No page, process, or LOV ever *sets* `APP_COMPANY_ID` outside the post-auth process
      and the role switcher (page 2).
- [ ] Log in as each of the 4 test users and check the app items in Session State
      (developer toolbar → Session) — company and role must match the seed table.
