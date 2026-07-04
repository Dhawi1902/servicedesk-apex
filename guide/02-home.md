# Page 2 — Home & App Shell (MUST)

> Mockup: `docs/mockups/02-home.html` · APEX type: Cards (or straight redirect) · All roles

## Purpose

Lands the user after login and hosts the app-wide **shell**: navigation menu, tenant banner,
and the **role switcher** (decision P). The shell pieces are Shared Components — built once here,
visible everywhere.

## 1. Home page

Two acceptable builds — pick one:

- **Simple (fine for the demo):** a branch/redirect straight to Dashboard (page 3).
- **Mockup-faithful:** a few Cards regions — "My open tickets" count, "Raise a ticket" card,
  recent activity — all sourced `FROM V_MY_TICKETS`. Keep it thin; the Dashboard does the heavy lifting.

## 2. Navigation menu (Shared Components → Navigation Menu)

One list, entries gated by authorization scheme — mirrors the mockup nav exactly:

| Entry | Target | Authorization |
|-------|--------|---------------|
| Home, Dashboard, Ticket Queue, My Profile | pages 2 / 3 / 4 / 15 | (all roles) |
| Raise a Ticket | page 6 | `IS_CLIENT_USER` or `IS_CLIENT_ADMIN` (System Admin too — condition `:APP_ROLE != 'SUPPORT_AGENT'`) |
| Projects | page 11 | (all roles — the page scopes rows per role) |
| My Company | page 13 | `IS_CLIENT_USER` / `IS_CLIENT_ADMIN` |
| Companies, Users, Categories, SLA Policies, Agent–Project Mapping, Audit Log | pages 9 / 10 / 14 / 16 / 17 / 18 | `IS_SYSTEM_ADMIN` (Users also `IS_CLIENT_ADMIN` — page scopes to own company) |

Label "Ticket Queue" for staff vs "My Tickets" for clients if you want mockup parity —
use two list entries with opposite authorizations.

## 3. Role switcher (decision P)

Multi-role users (e.g. Northwind agents holding SUPPORT_AGENT + CLIENT_USER) switch roles
without re-login:

1. **Navigation Bar List** entry "Switch role", **Condition:** `:APP_HAS_MULTI_ROLE = 'Y'`.
2. It opens a small modal (inline dialog or tiny modal page) listing the user's `USER_ROLES` rows.
3. An **Ajax Callback / page process** applies the switch — it MUST re-verify server-side:

```sql
DECLARE l_ok PLS_INTEGER;
BEGIN
  SELECT COUNT(*) INTO l_ok FROM USER_ROLES
   WHERE USER_ID = NV('APP_USER_ID') AND ROLE = :P2_NEW_ROLE;
  IF l_ok = 0 THEN raise_application_error(-20003, 'Role not granted.'); END IF;
  APEX_UTIL.SET_SESSION_STATE('APP_ROLE', :P2_NEW_ROLE);
END;
```

then redirects to Home so the shell re-renders. Never trust the submitted role name without
the `USER_ROLES` check.

## 4. Tenant banner

Mockup shows a subtle banner naming the active company + role. Implement as a small PL/SQL or
static region in the page template / global page (page 0):
`Acme Corp · Client User` from `:APP_COMPANY_ID` + `:APP_ROLE`. Escape the company name with
`APEX_ESCAPE.HTML` if rendered via htp/HTML expression.

## Isolation checklist

- [ ] Every admin nav entry carries `IS_SYSTEM_ADMIN` — hiding by menu alone is NOT security,
      so the target pages must also carry the same authorization scheme (defense in depth).
- [ ] Role switch validates against `USER_ROLES` server-side (try tampering the request).
- [ ] Switching role never changes `APP_COMPANY_ID` — company comes from the profile only.
- [ ] Home cards read `FROM V_MY_TICKETS` only.
