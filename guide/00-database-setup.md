# Step 0 — Database Setup

> *Run these in **SQL Workshop → SQL Scripts** before touching App Builder.*

---

## Step 1: Upload All Scripts

Go to **SQL Workshop → SQL Scripts → Upload**. Upload each `.sql` file from the `sql/` folder in the repo.

---

## Step 2: Run Them in Order

Run each script one at a time, in this exact order:

| # | Script | What it does |
|---|--------|-------------|
| 1 | `01_schema.sql` | Creates all 13 tables, the `TKT-` ticket-number sequence + trigger, foreign keys, check constraints, indexes. No data yet. |
| 2 | `02_seed_data.sql` | Demo data: 5 companies, 7 departments, 18 users with roles, agent-project tier mappings, categories, SLA policies + targets, 14 tickets with comments and history. |
| 3 | `03_attachments.sql` | `TICKET_ATTACHMENTS` BLOB table + tenant-key trigger (FR-25 attachments). Must run **before** `05` — the `V_MY_ATTACHMENTS` view guards on the table existing. |
| 4 | `05_isolation_views.sql` | The isolation firewall: `V_MY_PROJECTS`, `V_MY_TICKETS`, `V_MY_COMMENTS`, `V_MY_HISTORY`, `V_MY_ATTACHMENTS`. Every page reads through these, never base tables. |
| 5 | `04_apex_accounts.sql` | Creates one APEX Accounts login per seeded user, all with password `demo`. |
| 6 | `06_auth_context.sql` | Creates `STAMP_TENANT_CONTEXT`, the post-auth procedure that stamps the tenant/role app items at login. You wire its name into the auth scheme in `01-login.md`. |

> `03` must run **before** `05` (the `V_MY_ATTACHMENTS` view needs the table to exist), and `05` before `04`. `06` can run any time after `01`.

**To start over:** run `00_drop_all.sql` first, then repeat the order above.

---

## Step 3: Verify the Seed

After `02_seed_data.sql` runs, check the results. It must print:

```
Seed OK: all counts match.
```

If you see anything else, the seed failed — run `00_drop_all.sql` and start over.

---

## Step 4: Quick Sanity Check

In **SQL Workshop → SQL Commands**, run:

```sql
SELECT COUNT(*) FROM V_MY_TICKETS;
```

You should get **0 rows** — the views fail closed outside an APEX session. That's correct and intentional.

---

## Demo Logins (all password `demo`)

These are the accounts you'll use constantly during the build:

| Login | Role | Use to test |
|-------|------|-------------|
| `sara@northwind.example` | System Admin | sees everything |
| `mike@northwind.example` | Support Agent (+ Client User) | project scoping + role switcher; must NOT see Initech |
| `anna@acme.example` | Client User | own-scope only |
| `bob@acme.example` | Client Admin | all Acme tickets, invitations |
| `tom@globex.example` | Client User (INACTIVE) | login must be blocked |

Full account table with all 18 users is in `sql/README.md`.

---

## What's NOT in the Scripts

- **Passwords** — APEX Accounts owns credentials; `APP_USERS` has no password column.
- **App Builder wiring** — the auth scheme, application items, post-auth process, and authorization schemes are set up by hand. That's covered in the next step (`01-login.md`).

---

**Next:** move to `01-login.md`.
