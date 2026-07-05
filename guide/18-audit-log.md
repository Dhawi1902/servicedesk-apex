# Step 18 — Audit Log (p17) (SHOULD)

> Admin-action transparency for the **System Admin**. Distinct from ticket history (page 4):
> that trail records *ticket* state changes; this one records changes to *admin entities* —
> companies, projects, users, departments, categories, team mappings, invitations and SLA
> policies. It is a **cross-tenant** view by design (the System Admin oversees every company),
> so it reads the base `ADMIN_AUDIT_LOG` table and is gated `IS_SYSTEM_ADMIN`.

---

## Step 1: The Audit Table (already created by `sql/01_schema.sql`)

`TICKET_HISTORY` only covers ticket lifecycle events (its `ACTION` is a fixed enum), so admin
actions need their own table. **`ADMIN_AUDIT_LOG` is created by [`sql/01_schema.sql`](../sql/01_schema.sql)**
(**[SQL Workshop]** — it's part of the schema run, not Page Designer; nothing extra to run here).
For reference, its columns:

| Column | Purpose |
|--------|---------|
| `LOG_ID` | identity PK |
| `USER_ID` | actor → `APP_USERS` (`NV('APP_USER_ID')`) |
| `ACTION` | `CREATE` / `UPDATE` / `VISIBILITY_CHANGE` / `RESET_PASSWORD` / `TEAM_ADD` / `TEAM_REMOVE` / `INVITE` / `REVOKE` |
| `ENTITY` | `Company` / `Project` / `User` / `Department` / `Category` / `Agent-Project` / `User-Project` / `SLA Policy` / `Project SLA Policy` |
| `RECORD_KEY` | human-readable label of the affected record |
| `OLD_VALUE` / `NEW_VALUE` | before/after (VARCHAR2 4000, escaped on render) |
| `LOGGED_AT` | when (TZ-aware, newest-first) |

The `ACTION` / `ENTITY` value sets are exactly the ones the mockup's **Action** and **Entity** filter
dropdowns list — keep any audit `INSERT`s consistent with them so the filters stay meaningful.

---

## Step 2: Add Audit Writes to the Admin Pages

Wherever an admin DML process **creates or changes** one of the audited entities (the company,
project, user, department, category, team-mapping, invitation and SLA-policy pages), add a matching
`INSERT` **in the same process / transaction** as the change. This is edited on **those other admin
pages**, not this one: open each page and add it to the existing DML process at `[Left ▸ Processing]`
→ `[Right ▸ Source ▸ PL/SQL Code]`. Examples that mirror the mockup's log:

```sql
-- Company create
INSERT INTO ADMIN_AUDIT_LOG (USER_ID, ACTION, ENTITY, RECORD_KEY, OLD_VALUE, NEW_VALUE)
VALUES (NV('APP_USER_ID'), 'CREATE', 'Company', :P8_COMPANY_NAME, NULL, :P8_STATUS);

-- Project visibility change (Open ⇄ Restricted, decision Q)
INSERT INTO ADMIN_AUDIT_LOG (USER_ID, ACTION, ENTITY, RECORD_KEY, OLD_VALUE, NEW_VALUE)
VALUES (NV('APP_USER_ID'), 'VISIBILITY_CHANGE', 'Project', :P11_PROJECT_NAME,
        :P11_OLD_VISIBILITY, :P11_VISIBILITY);

-- Agent added to a project team at a tier (AGENT_PROJECTS)
INSERT INTO ADMIN_AUDIT_LOG (USER_ID, ACTION, ENTITY, RECORD_KEY, OLD_VALUE, NEW_VALUE)
VALUES (NV('APP_USER_ID'), 'TEAM_ADD', 'Agent-Project',
        :P19_AGENT_NAME || ' -> ' || :P19_PROJECT_KEY, NULL, :P19_TIER);
```

Always bind `NV('APP_USER_ID')` for the actor and `:Pn_*` items for values — never concatenate
raw input into the SQL text.

---

## Step 3: Create the Page

**App Builder → Create Page → Interactive Report** (the mockup labels this page an *APEX
Interactive Report, read-only*).

- Page Number: `17`
- Name: `Audit Log`
- Breadcrumb / title: **Administration / Audit Log**, page heading **Audit Log**
- **Authorization Scheme:** `IS_SYSTEM_ADMIN` (whole page) — once in Page Designer, select the page
  root node in `[Left ▸ Rendering]` and set `[Right ▸ Security ▸ Authorization Scheme]` = `IS_SYSTEM_ADMIN`.

**Region Source** — select the IR region in `[Left ▸ Rendering]` and paste this into
`[Right ▸ Source ▸ SQL Query]` (base table — cross-tenant by design; no `V_MY_*` here because those
views are ticket-scoped and this log spans admin entities across every company):

```sql
SELECT al.LOGGED_AT              AS "Timestamp",
       u.FULL_NAME               AS "User",
       al.ACTION                 AS "Action",
       al.ENTITY                 AS "Entity",
       al.RECORD_KEY             AS "Record",
       al.OLD_VALUE              AS "Old Value",
       al.NEW_VALUE              AS "New Value"
  FROM ADMIN_AUDIT_LOG al
  JOIN APP_USERS u ON u.USER_ID = al.USER_ID
 WHERE (:P17_ACTION IS NULL OR al.ACTION = :P17_ACTION)
   AND (:P17_ENTITY IS NULL OR al.ENTITY = :P17_ENTITY)
   AND (:P17_DATE_FROM IS NULL OR al.LOGGED_AT >= :P17_DATE_FROM)
   AND (:P17_DATE_TO   IS NULL OR al.LOGGED_AT <  :P17_DATE_TO + 1)
 ORDER BY al.LOGGED_AT DESC
```

Read-only report. `OLD_VALUE` / `NEW_VALUE` render **escaped** (leave the columns' *Escape special
characters* = Yes, the IR default) so logged text can't inject markup.

### Columns (exact order — matches the mockup table)

Each column is a node under the region in `[Left ▸ Rendering]`; set its heading/appearance at
`[Right ▸ Heading]` and the escape flag (cols 6–7) at `[Right ▸ Security ▸ Escape special characters]`.

| # | Heading | Source | Notes |
|---|---------|--------|-------|
| 1 | Timestamp | `LOGGED_AT` | most-recent first (`ORDER BY … DESC`) |
| 2 | User | `FULL_NAME` | the actor (`USER_ID` → `APP_USERS`) |
| 3 | Action | `ACTION` | show raw value (badge is cosmetic) |
| 4 | Entity | `ENTITY` | show raw value |
| 5 | Record | `RECORD_KEY` | human-readable label of the affected record |
| 6 | Old Value | `OLD_VALUE` | escaped; blank shows as `—` |
| 7 | New Value | `NEW_VALUE` | escaped; blank shows as `—` |

---

## Step 4: Filters (match the mockup toolbar)

The mockup toolbar, left → right: **Search · Action · Entity · From · To · Clear Filters ·
row count**. Reproduce it with the IR search bar plus four page items that feed the region
`WHERE` above. Drag each item from `[Gallery ▸ Items]` onto `[Central ▸ Layout]`, set its
`[Right ▸ Identification ▸ Type]` and (for the two Select Lists) its `[Right ▸ List of Values]` from
the table below. A Dynamic Action *Refresh* on change of each keeps it declarative — create it at
`[Left ▸ Dynamic Actions]` (Event **Change**, True action **Refresh** targeting the IR region):

| Control | Item | Type | Default / LOV |
|---------|------|------|---------------|
| Search | *(IR search bar)* | built-in | searches all columns |
| Action | `P17_ACTION` | Select List | null-display **All Actions**; LOV = `SELECT DISTINCT ACTION d, ACTION r FROM ADMIN_AUDIT_LOG ORDER BY 1` |
| Entity | `P17_ENTITY` | Select List | null-display **All Entities**; LOV = `SELECT DISTINCT ENTITY d, ENTITY r FROM ADMIN_AUDIT_LOG ORDER BY 1` |
| From | `P17_DATE_FROM` | Date Picker | inclusive lower bound |
| To | `P17_DATE_TO` | Date Picker | inclusive upper bound (`< To + 1`) |

- **Clear Filters** — drag a button from `[Gallery ▸ Buttons]` onto `[Central ▸ Layout]` (it then
  lives under `[Left ▸ Rendering]`) that resets the four items and refreshes the report (mirrors the
  mockup's *Clear Filters*).
- **Row count** — the IR already shows an *N rows* count; leave *Pagination → show row count* on
  (select the region → `[Right ▸ Attributes ▸ Pagination]`) so it reads like the mockup's `N rows`.
- **Empty state** — set the report's *No Data Found* message at `[Right ▸ Attributes ▸ Messages]` to:
  `No admin actions logged yet. Try adding or editing a company or user.`

---

## Step 5: Test It

| Test | Expected |
|------|----------|
| System Admin creates a company on the admin page | A `CREATE / Company` row appears at the top of the log |
| Change a project's visibility Open ⇄ Restricted | A `VISIBILITY_CHANGE / Project` row is logged with old → new |
| Pick **Company** in the Entity filter | Only Company rows remain; row count updates |
| Set From/To to today | Only today's entries show |
| Anna (Client User) URL-jumps to page 17 | Authorization error — page is `IS_SYSTEM_ADMIN` only |
| Client Admin URL-jumps to page 17 | Authorization error — cross-tenant log is System-Admin-only |

---

## Isolation Checklist

- [ ] **Whole page gated `IS_SYSTEM_ADMIN`** — this is an intentionally **cross-tenant** view;
      no other role may reach it (verify by URL-tampering as a Client Admin and an Agent).
- [ ] Reads the base `ADMIN_AUDIT_LOG` (correct: admin entities aren't ticket-scoped, so
      `V_MY_*` doesn't apply) — but *only* because the page is System-Admin-gated.
- [ ] Audit `INSERT` runs in the **same transaction** as the audited change (no orphan / missing rows).
- [ ] Actor is `NV('APP_USER_ID')`; all values bound (`:Pn_*`), never string-concatenated.
- [ ] `OLD_VALUE` / `NEW_VALUE` escaped on render (IR *Escape special characters* = Yes).

---

**You're done with all 18 pages!** Run the `tenant-isolation-auditor` agent over each page before demoing.
