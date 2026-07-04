# 00 — Database Setup (SQL Workshop)

Everything the app sits on: schema, seed data, isolation views, and APEX login accounts.
The scripts live in [`sql/`](../sql/) — full technical detail in [`sql/README.md`](../sql/README.md).
This doc is the "just get it running" version.

## ⚠️ Before you start — scripts lag the locked design

The SQL scripts currently implement the **pre-lock 10-table model** (`AGENT_COMPANIES`,
per-company tiers, no projects layer). The design locked on 2026-07-04 is the **13-table
projects model**: `PROJECTS`, `AGENT_PROJECTS` (tier per project), `USER_PROJECTS`
(Restricted-project invitations), `SLA_POLICIES` + reworked `SLA_TARGETS`.

**The scripts must be migrated to the 13-table model before page-building starts.**
Until then, treat this doc's run order as correct but the table list as the old one.
(Track this as the first build task; update this note when the migration lands.)

## How to run the scripts

1. Log in to the APEX workspace → **SQL Workshop → SQL Scripts**.
2. **Upload** each `.sql` file from `sql/` (Upload button → choose file → Upload).
3. **Run** them in the order below (Run button → Run Now). Check the results page for errors —
   a script that half-ran usually means re-running from `00_drop_all.sql`.

## Run order & what each script does

| Step | Script | Required? | What it does |
|------|--------|-----------|--------------|
| 1 | `01_schema.sql` | ✅ | Creates all tables, the `TKT-` ticket-number sequence + trigger, foreign keys, check constraints, and indexes. No data. |
| 2 | `02_seed_data.sql` | ✅ | Demo data: 4 companies, departments, 12 users with roles in `USER_ROLES` (Northwind agents get dual roles), agent scoping + tiers, categories, SLA targets, ~10 tickets with comments and history. Built so isolation tests are demoable out of the box. |
| 3 | `03_attachments.sql` | optional | `TICKET_ATTACHMENTS` BLOB table + a trigger that force-stamps the tenant key (FR-25, COULD scope — skip unless attachments are in play). |
| 4 | `05_isolation_views.sql` | ✅ | **The isolation firewall.** Creates `V_MY_TICKETS`, `V_MY_COMMENTS`, `V_MY_HISTORY`, `V_MY_ATTACHMENTS` — tenant-scoped views that encode the whole role matrix once. Every page reads through these, never base tables. |
| 5 | `04_apex_accounts.sql` | ✅ | Creates one **APEX Accounts** login per seeded user, all with password `demo`. Safe to re-run (skips existing users). |
| — | `00_drop_all.sql` | reset only | Drops everything. To start over: `00 → 01 → 02 → (03) → 05 → 04`. |

> Run `05` **before** `04` and **after** `03` (the attachments view needs the table to exist).

## Demo logins (all password `demo`)

The full account table is in `sql/README.md`. The ones you'll use constantly:

| Login | Role | Use to test |
|-------|------|-------------|
| `sara@northwind.example` | System Admin | sees everything |
| `mike@northwind.example` | Support Agent (+ Client User) | project scoping + role switcher; must NOT see Initech |
| `anna@acme.example` | Client User | own-scope only |
| `aaron@acme.example` | Client Admin | all Acme tickets, invitations |

## Baked-in isolation tests — verify after seeding

- **Cross-company:** log in as Mike → Initech tickets must be invisible (he doesn't cover Initech).
- **Client scope:** Anna (Acme) must never see Globex/Initech/Northwind tickets.
- **Tier scoping:** a client's assign list shows only agents who are **L1 on that project**.

A 30-second sanity check in SQL Workshop → SQL Commands (no APEX session, so views must
return **0 rows** — they fail closed):

```sql
SELECT COUNT(*) FROM V_MY_TICKETS;  -- expect 0 outside an APEX session
```

## What is deliberately NOT in the scripts

- **Passwords** — APEX Accounts owns credentials; `APP_USERS` has no password column.
- **App Builder wiring** — the authentication scheme, application items, post-auth process,
  and authorization schemes are set up by hand in App Builder. That's covered in
  [`01-login.md`](01-login.md) (and documented in `sql/README.md` §"Authentication wiring").
