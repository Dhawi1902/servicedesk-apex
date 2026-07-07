# Step 14 — Categories (p13) (SHOULD)

> *Admin-only page (System Admin). `CATEGORIES` is a **hybrid** table:
> global rows (`COMPANY_ID` NULL) shared by every tenant, plus company- and
> project-specific rows. This page also shows read-only **Severities** and
> **Priorities** reference panels (the values behind the ticket dropdowns).*

---

## Step 1: Create the Page

This page is an **Interactive Grid** (an editable, spreadsheet-like table). Open your app in
**App Builder** and click the green **Create Page** button (top-right), then pick the **Interactive
Grid** tile. That opens the **Create Interactive Grid** wizard — two screens:

> **Page already blank?** If page 13 already exists as a blank page, skip the wizard (creating on an
> existing page number clashes). Open **page 13** in Page Designer and add an **Interactive Grid** region
> (`[Central Pane ▸ Gallery ▸ Regions]` → `[Right Pane ▸ Identification ▸ Type]` = Interactive Grid; source set in Step 2), then
> set the page **Authorization Scheme = `IS_SYSTEM_ADMIN`** as below. The wizard route below still works when
> building from scratch.

**Wizard screen 1 — Page Definition + Data Source + Navigation:**

| Field | Set to | Notes |
|-------|--------|-------|
| Page Number | `13` | The Categories page. |
| Name | `Categories` | Also becomes the page Title. |
| Page Mode | `Normal` | Full page, not a dialog. |
| Data Source | `Local Database` | Data lives in this workspace's schema. |
| Source Type | `Table` | Point at a table now; Step 2 swaps in a SQL Query for the Open-count column. |
| Table / View Owner | *your workspace schema* | e.g. `WKSP_DHAWIWORKSPACE` — leave the default. |
| Table / View Name | `CATEGORIES` | The **base** table (admin sees all rows); not `V_MY_CATEGORIES` — see Step 2. |
| Use Breadcrumb | **On** | Shows the page title in the breadcrumb bar; the nav-menu link is still wired later (Step 19). |
| Breadcrumb Entry Name | `Categories` | The page name — shown in the breadcrumb bar. |
| Use Navigation | **Off** | Same — skip for now. |

Click **Next**.

**Wizard screen 2 — Interactive Grid attributes:**

| Field | Set to | Notes |
|-------|--------|-------|
| Editing → Enabled | **On** | Admins add/edit categories inline — the Add Row / Save toolbar (Step 3) and the Save process (Step 4) need it. |
| Primary Key Column 1 | `CATEGORY_ID (Number)` | Auto-detected PK — **must** be set or inline edits can't save (re-confirmed as the Edit target in Step 2). |
| Primary Key Column 2 | *(leave `- Select -`)* | Single-column key. |

Click **Create Page**. APEX drops you into Page Designer with an editable Interactive Grid region on
`CATEGORIES`, one column per table column, the standard IG toolbar, and an auto row-DML (Save) process.
Step 2 swaps the region source for the query with the Open-count sub-select and retypes the columns.

**Then set the page authorization:** `IS_SYSTEM_ADMIN` (page-level — non-admins get an
authorization error, matching the mockup's `isAdmin` gate). Set in the wizard,
or later in Page Designer: select the page root node `[Left Pane ▸ Rendering]` then
`[Right Pane ▸ Security ▸ Authorization Scheme]`.

---

## Step 2: Categories grid — Region Source

Build the editable grid on the **base `CATEGORIES` table** (not `V_MY_CATEGORIES`
— that view is scoped/for LOVs and is not simply-updatable). System Admin sees
every row by design, so no tenant filter here. The **Open** column is a read-only
correlated subquery. Select the IG region `[Left Pane ▸ Rendering]` and paste the
query into `[Right Pane ▸ Source ▸ SQL Query]`.

```sql
SELECT c.CATEGORY_ID,
       c.CATEGORY_NAME,
       c.COMPANY_ID,
       c.PROJECT_ID,
       c.DESCRIPTION,
       ( SELECT COUNT(*)
           FROM   TICKETS t
           WHERE  t.CATEGORY_ID = c.CATEGORY_ID
             AND  t.STATUS <> 'Closed' ) AS OPEN_COUNT
FROM   CATEGORIES c
```

`[Right Pane ▸ Attributes ▸ Edit]` — set the grid's **Edit → Enabled = Yes**, Target
table `CATEGORIES`, PK `CATEGORY_ID`.

### Columns (match the mockup order)

Select each column under the IG region in `[Left Pane ▸ Rendering]` and set its
**Type** via `[Right Pane ▸ Identification ▸ Type]`, its source column via
`[Right Pane ▸ Source ▸ Column]`, and **Required** via `[Right Pane ▸ Validation ▸ Required]`.

| # | Column | Source | Type / Notes |
|---|--------|--------|--------------|
| 1 | Category | `CATEGORY_NAME` | Text field, **Required** |
| 2 | Company | `COMPANY_ID` | Select List (LOV below); empty renders **Global** |
| 3 | Project | `PROJECT_ID` | Select List (LOV below); empty renders **All** |
| 4 | Description | `DESCRIPTION` | Textarea — guidance text shown in the ticket category LOV (FR-34) |
| 5 | Open | `OPEN_COUNT` | **Read-only** (Query Only) — open (non-Closed) tickets using this category |
| 6 | Actions | — | Inline row edit is built into the IG (mockup's ✎ Edit) |

> *The mockup shows a **Status** (Active/Inactive) badge column. The real
> `CATEGORIES` table has **no status/active column** (verified in
> `sql/01_schema.sql`), so it is intentionally omitted rather than bound to a
> non-existent column. See "Deletion" below for the deactivate-vs-delete stance.*

On the `COMPANY_ID` column `[Left Pane ▸ Rendering]`, set `[Right Pane ▸ Identification ▸ Type]`
= Select List, then `[Right Pane ▸ List of Values ▸ Type]` = SQL Query and paste into
`[Right Pane ▸ List of Values ▸ SQL Query]`.

**Company LOV** (allows NULL for a global category):

```sql
SELECT COMPANY_NAME AS d, COMPANY_ID AS r
FROM   COMPANIES
WHERE  STATUS = 'ACTIVE'
ORDER  BY COMPANY_NAME
```

Repeat on the `PROJECT_ID` column `[Left Pane ▸ Rendering]`: `[Right Pane ▸ Identification ▸ Type]`
= Select List, `[Right Pane ▸ List of Values ▸ Type]` = SQL Query, query into
`[Right Pane ▸ List of Values ▸ SQL Query]`.

**Project LOV** (project must belong to the chosen company — the composite FK
`(PROJECT_ID, COMPANY_ID)` + `SCOPE_CK` enforce this in the DB):

```sql
SELECT PROJECT_KEY || ' — ' || PROJECT_NAME AS d, PROJECT_ID AS r
FROM   PROJECTS
WHERE  IS_ACTIVE = 'Y'
ORDER  BY PROJECT_KEY
```

---

## Step 3: Facets / Filters (mockup toolbar)

The mockup toolbar has **Search**, a **Company** filter, a **Project** filter,
and an **+ Add Row** button. In the Interactive Grid these are native (no Page
Designer action needed); the optional `:P13_COMPANY` page-item filter is created
via `[Central Pane ▸ Gallery ▸ Items]` dragged onto `[Central Pane ▸ Layout]`:

| Mockup control | APEX equivalent |
|----------------|-----------------|
| 🔍 Search | IG toolbar Search (on by default) |
| Company dropdown | IG **Control Break / column filter** on `COMPANY_ID`, or a page-item filter `:P13_COMPANY` |
| Project dropdown | IG column filter on `PROJECT_ID` |
| + Add Row | IG **Add Row** button (Edit enabled) |
| `N rows` count | IG row-count badge (native) |

> *The mockup's Project filter shows the *effective* set (project-specific +
> company-wide + global). For the admin grid, a plain column filter is enough;
> the effective-set logic lives in `V_MY_CATEGORIES` for the ticket LOV, not here.*

---

## Step 4: Processes / Validations

All of these live under `[Left Pane ▸ Processing]` (the gear tab).

- **Save** (native IG Save process → target `CATEGORIES`).
- **Validation — scope rule:** `[Left Pane ▸ Processing]` → create a Validation; if
  `PROJECT_ID` is set, `COMPANY_ID` must be set (mirrors `CATEGORIES_SCOPE_CK`).
  Fail with "A project-specific category must also have a company."
- **Uniqueness:** the DB enforces one name per scope via
  `CATEGORIES_NAME_SCOPE_UX` on `(UPPER(CATEGORY_NAME), NVL(COMPANY_ID,-1),
  NVL(PROJECT_ID,-1))`. Surface the ORA-00001 as a friendly "A category with
  that name already exists for this scope."
- **Deletion:** `TICKETS.CATEGORY_ID` FKs to this table, so a category in use
  cannot be hard-deleted. **Disable the IG Delete row action** for safety
  (`[Right Pane ▸ Attributes ▸ Edit]` → Delete = No); if a
  deactivate concept is needed later it requires a new `STATUS`/`ACTIVE` column
  (not in the 24.2 schema today).

---

## Step 5: Severities & Priorities reference (right column)

The mockup's right column shows two small **read-only** reference tables. These
are **not** DB tables — they are the allowed values of `TICKETS.SEVERITY` and
`TICKETS.PRIORITY` (CHECK constraints). Drag a region from `[Central Pane ▸ Gallery ▸ Regions]`
onto `[Central Pane ▸ Layout]` beside the grid and set `[Right Pane ▸ Identification ▸ Type]`
= **Static Content** (or a tiny IG with a `SELECT ... FROM DUAL UNION ALL`):

- **Severities (client-set):** `Critical`, `Major`, `Minor`, `Low`
- **Priorities (support-set):** `P1`, `P2`, `P3`, `P4`

Read-only — editing these values means changing the CHECK constraints, not data.

---

## Step 6: Test It

| Test | Expected |
|------|----------|
| Sara (System Admin) opens page 13 | Grid lists all categories; global rows show **Global / All**, Acme's ERP row shows **Acme / P2** |
| Open column | Shows open (non-Closed) ticket count per category |
| Add a category with a Project but no Company | Blocked by scope validation |
| Add a duplicate name in the same scope | Blocked by uniqueness index |
| Anna (Client User) URL-jumps to page 13 | Authorization error (page gated `IS_SYSTEM_ADMIN`) |

---

## Isolation Checklist

- [ ] Page gated `IS_SYSTEM_ADMIN` (admin-only management surface)
- [ ] Global rows (`COMPANY_ID` NULL) are shared by design — no tenant leak
- [ ] Grid built on base `CATEGORIES` (admin sees all); **ticket category LOVs
      elsewhere must select `FROM V_MY_CATEGORIES`**, never the base table, so
      scoped rows don't leak other tenants' labels
- [ ] Company/Project written only via the constrained LOVs; scope + uniqueness
      re-checked server-side (SCOPE_CK, NVL uniqueness index)

---

**Next:** move to `15-profile.md`.
