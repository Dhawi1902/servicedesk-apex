# Database & Auth setup — service desk

Build-ready scripts for the multi-tenant ticketing system. Schema and conventions
come from `docs/ticketing-system-brief.md` (the source of truth); auth guidance is
grounded in `reference/plsql/061-APEX_UTIL.md` and `018-APEX_CUSTOM_AUTH.md`.

## Run order (SQL Workshop → SQL Scripts)

| Step | Script | Required? | What it does |
|---|---|---|---|
| 1 | `01_schema.sql` | ✅ | 7 core tables, `TKT-` sequence + trigger, FKs, checks, indexes |
| 2 | `02_seed_data.sql` | ✅ | 4 companies, 8 users, agent scoping, 5 categories, 8 tickets, comments, history |
| 3 | `03_attachments.sql` | optional (FR-25) | `TICKET_ATTACHMENTS` BLOB table + tenant-key enforcement trigger |
| 4 | `05_isolation_views.sql` | ✅ | Tenant-scoped views (`V_MY_TICKETS` etc.) — the isolation firewall pages build on |
| 5 | `04_apex_accounts.sql` | ✅ (auth) | Creates one APEX Accounts login per seeded user (password `demo`) |
| — | `00_drop_all.sql` | reset only | Drops everything so you can re-run from step 1 |

To start over: `00 → 01 → 02 → 03 → 05 → 04`. (Run `05_isolation_views.sql`
after `03` so the attachments view is created; `04` can run any time after `02`.)

## Accounts (all password `demo`)

| Email | Role | Company |
|---|---|---|
| `sara@northwind.example` | SYSTEM_ADMIN | Northwind Support (vendor) |
| `mike@northwind.example` | SUPPORT_AGENT | covers Acme + Globex |
| `lena@northwind.example` | SUPPORT_AGENT | covers Globex + Initech |
| `anna@acme.example` | CLIENT_USER | Acme Corp |
| `aaron@acme.example` | CLIENT_ADMIN | Acme Corp |
| `george@globex.example` | CLIENT_USER | Globex Inc |
| `gina@globex.example` | CLIENT_ADMIN | Globex Inc |
| `ivan@initech.example` | CLIENT_USER | Initech |

Isolation test baked in: Initech tickets must be invisible to Mike (he only covers
Acme + Globex). Lena is the only agent who sees Initech.

---

## Authentication wiring (App Builder — not scriptable)

Auth route: **APEX Accounts**. APEX verifies the password; **your app derives tenant
context** (`company_id` / `role`) from `APP_USERS` in a post-auth process. This split
is the whole point — the auth scheme never carries tenant data.

### 1. Set the Authentication Scheme
App Builder → **Shared Components → Authentication Schemes** → create/select
**Application Express Accounts** → make it Current.

### 2. Create 3 Application Items
Shared Components → **Application Items**. For each, set **Session State Protection =
Restricted — may not be set from browser** (stops URL tampering).

| Name | Scope |
|---|---|
| `APP_USER_ID` | Application |
| `APP_COMPANY_ID` | Application |
| `APP_ROLE` | Application |

### 3. Add the Post-Authentication Process
On the authentication scheme, set **Post-Authentication Procedure Name** to a process
running this PL/SQL (looks up the profile and stamps the app items):

```sql
DECLARE
    l_user_id     APP_USERS.USER_ID%TYPE;
    l_company_id  APP_USERS.COMPANY_ID%TYPE;
    l_role        APP_USERS.ROLE%TYPE;
    l_status      APP_USERS.STATUS%TYPE;
BEGIN
    SELECT USER_ID, COMPANY_ID, ROLE, STATUS
      INTO l_user_id, l_company_id, l_role, l_status
      FROM APP_USERS
     WHERE UPPER(EMAIL) = UPPER(:APP_USER);   -- APEX uppercases :APP_USER

    IF l_status <> 'ACTIVE' THEN
        raise_application_error(-20001, 'Account is not active.');
    END IF;

    APEX_UTIL.SET_SESSION_STATE('APP_USER_ID',    l_user_id);
    APEX_UTIL.SET_SESSION_STATE('APP_COMPANY_ID', l_company_id);
    APEX_UTIL.SET_SESSION_STATE('APP_ROLE',       l_role);
EXCEPTION
    WHEN NO_DATA_FOUND THEN
        raise_application_error(-20002, 'No application profile for this user.');
END;
```

> Use `SET_SESSION_STATE`, not `:APP_ITEM := ...` — the post-auth process runs during
> login before normal item binding, and the API commits reliably into session state.

### 4. Create 4 Authorization Schemes (one per role)
Shared Components → **Authorization Schemes**. Type = **PL/SQL Function Body Returning
Boolean**. Reuse these to show/hide pages, buttons, and columns.

| Scheme name | Body |
|---|---|
| `IS_CLIENT_USER` | `RETURN :APP_ROLE = 'CLIENT_USER';` |
| `IS_CLIENT_ADMIN` | `RETURN :APP_ROLE = 'CLIENT_ADMIN';` |
| `IS_AGENT` | `RETURN :APP_ROLE = 'SUPPORT_AGENT';` |
| `IS_SYSTEM_ADMIN` | `RETURN :APP_ROLE = 'SYSTEM_ADMIN';` |

### 5. Build every ticket-data page on the tenant-scoped views
`05_isolation_views.sql` encodes the full role matrix once, so pages can't leak.

| View | Use for |
|---|---|
| `V_MY_TICKETS` | ticket lists, detail region, dashboard counts, ticket LOVs |
| `V_MY_COMMENTS` | comments sub-region (hides internal notes from clients) |
| `V_MY_HISTORY` | history/audit timeline |
| `V_MY_ATTACHMENTS` | attachment list **and** the Download BLOB column's region SQL |

**Read rule:** client-facing regions select `FROM V_MY_*`, never the base tables.
No `WHERE COMPANY_ID` needed — the view already applied it.

**Write rule:** inserts/updates/assign/escalate hit the base tables in a process,
but must first confirm the ticket is visible to the caller:

```sql
SELECT COUNT(*) INTO l_ok FROM V_MY_TICKETS WHERE TICKET_ID = :P5_TICKET_ID;
IF l_ok = 0 THEN raise_application_error(-20010, 'Not authorized'); END IF;
```

Ticket **insert** stamps `COMPANY_ID = NV('APP_COMPANY_ID')` server-side (clients);
a System Admin creating on behalf of a client sets it explicitly. Never map
`COMPANY_ID` from a submittable page item.

**LOVs:** client-facing user LOVs need `WHERE COMPANY_ID = :APP_COMPANY_ID`; a company
picker is System-Admin-only. `CATEGORIES` is global — don't filter it.

**Output:** escape `SUBJECT`/`DESCRIPTION`/`COMMENT_TEXT` with `APEX_ESCAPE.HTML` on any
non-default render path (Cards, HTML expressions, `<img>` previews).

> Re-run the **tenant-isolation-auditor** over every page before demoing. Foundation
> audit (2026-07-01): PASS — no leak in the SQL; findings were build-time guardrails,
> now enforced by these views. A cross-tenant leak invalidates the "production-level" claim.

## Notes
- No password lives in `APP_USERS` — APEX Accounts owns credentials. If you later must
  self-manage passwords (instance forbids APEX Accounts), the fallback is Custom Auth +
  `DBMS_CRYPTO` salted SHA-512 with `PASSWORD_HASH`/`PASSWORD_SALT` columns.
- `04_apex_accounts.sql` skips users that already exist, so it's safe to re-run.
