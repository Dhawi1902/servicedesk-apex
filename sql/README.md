# Database & Auth setup — service desk

Build-ready scripts for the multi-tenant ticketing system. Schema and conventions
come from `docs/ticketing-system-brief.md` (the source of truth, design locked
2026-07-04: projects layer, named SLA policies, per-project agent tiers); auth
guidance is grounded in `reference/plsql/061-APEX_UTIL.md` and `018-APEX_CUSTOM_AUTH.md`.
The seed **mirrors `docs/mockups/assets/demo-data.js`** — the APEX build demos
exactly what the team signed off in the clickable prototype.

## Run order (SQL Workshop → SQL Scripts)

| Step | Script | Required? | What it does |
|---|---|---|---|
| 1 | `01_schema.sql` | ✅ | 13 core tables — projects layer (`PROJECTS`, `AGENT_PROJECTS` with L1–L4 tier, `USER_PROJECTS`), named SLA policies (`SLA_POLICIES` + policy-keyed `SLA_TARGETS`), `USER_ROLES`, hybrid `CATEGORIES`, `TKT-` sequence + trigger, FKs, checks, indexes |
| 2 | `02_seed_data.sql` | ✅ | 5 companies, 7 departments, 18 users (roles in `USER_ROLES`, dual-role Northwind staff), 8 projects, 4 SLA policies (16 targets), 27 agent-project tier mappings, 1 restricted-project invitation, 7 categories, 14 tickets (mockup refs), comments, history — ends with a **count-assert block** that fails loudly on any mis-resolved key |
| 3 | `03_attachments.sql` | ✅ (FR-25) | `TICKET_ATTACHMENTS` BLOB table + tenant-key enforcement trigger — must run before `05` so `V_MY_ATTACHMENTS` builds |
| 4 | `05_isolation_views.sql` | ✅ | Tenant-scoped views (`V_MY_PROJECTS`, `V_MY_TICKETS`, …) — the isolation firewall pages build on |
| 5 | `04_apex_accounts.sql` | ✅ (auth) | Creates one APEX Accounts login per seeded user (password `demo`) |
| 6 | `06_auth_context.sql` | ✅ (auth) | Creates `STAMP_TENANT_CONTEXT` — the post-auth procedure that stamps the tenant/role app items. Then wire its name into the auth scheme (below) |
| — | `00_drop_all.sql` | reset only | Drops everything (including the legacy pre-projects `AGENT_COMPANIES` and `STAMP_TENANT_CONTEXT`) so you can re-run from step 1 |

To start over: `00 → 01 → 02 → 03 → 05 → 04 → 06`. (Run `03_attachments.sql`
before `05_isolation_views.sql` so the `V_MY_ATTACHMENTS` view is created; `04` and
`06` can run any time after `02`.)
`02_seed_data.sql` must print **“Seed OK: all counts match.”** — anything else is a failed seed.

## Accounts (all password `demo`)

| Email | Roles (in `USER_ROLES`) | Company / Dept | Projects covered @ tier |
|---|---|---|---|
| `sara@northwind.example` | SYSTEM_ADMIN + CLIENT_USER | Northwind IT | — (admins see everything by role) |
| `mike@northwind.example` | SUPPORT_AGENT + CLIENT_USER | Northwind IT | ACME-IT L2 · GLBX-IT L2 · NW-APPS L2 · NW-INFRA L2 |
| `lee@northwind.example` | SUPPORT_AGENT + CLIENT_USER | Northwind IT | ACME-IT L2 · ACME-ERP L2 · INIT-IT L2 · NW-APPS L2 · NW-INFRA L2 |
| `nora@northwind.example` | SUPPORT_AGENT + CLIENT_USER | Northwind IT | L1 on ACME-IT, ACME-ERP, GLBX-IT, INIT-IT, NW-APPS, NW-INFRA, NW-HR (the first-line agent) |
| `raj@northwind.example` | SUPPORT_AGENT + CLIENT_USER | Northwind IT | GLBX-IT L2 · GLBX-CRM L2 · **INIT-IT L3** (per-project tier demo) |
| `kim@northwind.example` | SUPPORT_AGENT + CLIENT_USER | Northwind IT | ACME-IT L3 · GLBX-IT L3 · INIT-IT L3 |
| `omar@northwind.example` | SUPPORT_AGENT + CLIENT_USER | Northwind IT | L4 on ACME-IT, ACME-ERP, GLBX-IT, GLBX-CRM, INIT-IT |
| `nora-int@northwind.example` | CLIENT_ADMIN + CLIENT_USER | Northwind IT / Internal Systems | internal Client Admin |
| `nick@northwind.example` | CLIENT_USER | Northwind IT / Internal Systems | invited tester on **NW-HR** (Restricted) |
| `anna@acme.example` | CLIENT_USER | Acme Corp / Finance | all Open Acme projects |
| `bob@acme.example` | CLIENT_ADMIN | Acme Corp / IT | all Acme projects |
| `fay@acme.example` | CLIENT_USER | Acme Corp / IT | all Open Acme projects |
| `carla@globex.example` | CLIENT_ADMIN | Globex Ltd / Operations | all Globex projects |
| `dan@globex.example` | CLIENT_USER | Globex Ltd / HR | all Open Globex projects |
| `tom@globex.example` | CLIENT_USER | Globex Ltd / Operations | **INACTIVE** — login blocked by post-auth check (FR-6 demo) |
| `eve@initech.example` | CLIENT_USER | Initech / Engineering | all Open Initech projects |
| `lily@initech.example` | CLIENT_ADMIN | Initech / Engineering | all Initech projects |
| `zack@initech.example` | CLIENT_USER | Initech / Support | all Open Initech projects |

Isolation tests baked in (run these before demoing):
- **Cross-tenant:** Anna (Acme) must never see Globex, Initech, or Northwind tickets.
- **Agent project scoping (decision I):** Mike covers ACME-IT, GLBX-IT, NW-APPS, NW-INFRA —
  he must NOT see ACME-ERP tickets (e.g. `TKT-00051`) or GLBX-CRM.
- **Restricted project (decision Q):** Nick sees NW-HR (invited); other Northwind
  client-side users don't; Northwind agents in client mode don't either.
- **L1 gate (decisions J/L):** the client assignment LOV lists only agents whose tier
  on the ticket's project is L1 (Nora on most projects). **GLBX-CRM has NO L1 agent**
  → the gate message shows; a Client Admin or System Admin assigns instead.
- **Per-project tier (decision M revised):** Raj is L3 on INIT-IT but L2 on GLBX-IT /
  GLBX-CRM — reassign-to-higher-tier targets (FR-26) differ per project.

---

## Authentication wiring (App Builder — not scriptable)

Auth route: **APEX Accounts**. APEX verifies the password; **your app derives tenant
context** (`company_id` / `role`) from `APP_USERS` in a post-auth process. This split
is the whole point — the auth scheme never carries tenant data.

### 1. Set the Authentication Scheme
App Builder → **Shared Components → Authentication Schemes** → create/select
**Application Express Accounts** → make it Current.

### 2. Create 6 Application Items
Shared Components → **Application Items**. For each, set **Session State Protection =
Restricted — may not be set from browser** (stops URL tampering).

| Name | Scope | Purpose |
|---|---|---|
| `APP_USER_ID` | Application | Logged-in user's PK |
| `APP_COMPANY_ID` | Application | Tenant key for isolation views |
| `APP_COMPANY_NAME` | Application | Display: company name for the banner |
| `APP_ROLE` | Application | Active role (from `USER_ROLES`) |
| `APP_ROLE_DISP` | Application | Display: `INITCAP` of the active role for the banner |
| `APP_HAS_MULTI_ROLE` | Application | `Y`/`N` — controls nav-bar role-switch visibility |

`APP_COMPANY_NAME` and `APP_ROLE_DISP` feed the combined banner/role-switcher nav entry
(`guide/02-home.md`); they're derived from the restricted items, so mark them Restricted too.

### 3. Create the post-auth procedure, then wire it
The post-auth logic is a real DB object — **run `06_auth_context.sql`** (step 6 above) to
create `STAMP_TENANT_CONTEXT`. It looks up the `APP_USERS` profile, blocks non-ACTIVE
accounts, picks the active role from `USER_ROLES`, and stamps the 6 app items.

Then wire the name (the only non-scriptable part): on the authentication scheme set
**Login Processing → Post-Authentication Procedure Name = `STAMP_TENANT_CONTEXT`**.

> **Why a script, not a pasted block?** The "Post-Authentication Procedure Name" attribute
> takes the *name* of a callable procedure, so the procedure belongs in `sql/` with the rest
> of the foundation — versioned and testable — not buried as a Builder code block.
>
> **Inline alternative (no SQL Workshop):** paste the same logic as an anonymous block into a
> login-page "After Authentication" process, or into the auth scheme's **Source (PL/SQL Code)**
> box. Identical effect; the code just lives inside the app instead of as a schema object. If you
> go that way, the snippet in the guide is the source — don't also create `06_auth_context.sql`.
>
> Either way use `SET_SESSION_STATE`, not `:APP_ITEM := …` — the post-auth runs during login
> before normal item binding, and the API commits reliably into session state.

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
`05_isolation_views.sql` encodes the full role matrix **once** — in `V_MY_PROJECTS`
(decisions N revised / Q / I: client users see Open + invited Restricted projects,
agents see their `AGENT_PROJECTS`, departments are metadata only) — so pages can't leak.

| View | Use for |
|---|---|
| `V_MY_PROJECTS` | project lists, project LOVs, the ticket-create project picker (`WHERE IS_ACTIVE='Y'` for new tickets) |
| `V_MY_CATEGORIES` | every category LOV + server-side validation of the submitted `CATEGORY_ID` (global rows + rows in my project scope) |
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

Ticket **insert**: validate `:Pn_PROJECT_ID` against `V_MY_PROJECTS`, then derive
`COMPANY_ID` from the project **server-side** (the composite FK on `TICKETS`
rejects a mismatch anyway). Never map `COMPANY_ID` from a submittable page item.
Stamp `SLA_DUE_DATE` from the project's policy (fall back to the `IS_DEFAULT`
policy when `PROJECTS.SLA_POLICY_ID` is NULL).

**LOVs:** the assignment LOV for clients lists L1 agents **on the ticket's project**
(`AGENT_PROJECTS WHERE PROJECT_ID = … AND TIER = 'L1'`); agent reassignment targets
are same-or-higher tier on that project (FR-26). A company picker is System-Admin-only.
Category LOVs select `FROM V_MY_CATEGORIES` (never the base table — scoped rows
would leak other tenants' category labels), narrowed by the chosen project where
`PROJECT_ID` is set; validate the submitted `CATEGORY_ID` against the same view.

**Output:** escape `SUBJECT`/`DESCRIPTION`/`COMMENT_TEXT` with `APEX_ESCAPE.HTML` on any
non-default render path (Cards, HTML expressions, `<img>` previews).

> Re-run the **tenant-isolation-auditor** over every page before demoing. The
> 2026-07-01 foundation audit covered the pre-projects shape; the projects-model
> views were re-audited 2026-07-04 (see repo history). A cross-tenant leak
> invalidates the "production-level" claim.

## Notes
- No password lives in `APP_USERS` — APEX Accounts owns credentials. If you later must
  self-manage passwords (instance forbids APEX Accounts), the fallback is Custom Auth +
  `DBMS_CRYPTO` salted SHA-512 with `PASSWORD_HASH`/`PASSWORD_SALT` columns.
- `04_apex_accounts.sql` skips users that already exist, so it's safe to re-run. It also
  creates a login for the INACTIVE seed user (`tom@globex.example`) — the post-auth
  process is what blocks that account, which is exactly the FR-6 behaviour to demo.
