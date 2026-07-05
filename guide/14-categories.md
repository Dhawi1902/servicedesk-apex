# Step 14 — Categories (p13) (SHOULD)

> Admin-only page (System Admin). Breadcrumb **Administration / Categories**,
> heading **Categories, Severities & SLA**. `CATEGORIES` is a **hybrid** table:
> global rows (`COMPANY_ID` NULL) shared by every tenant, plus company- and
> project-specific rows. This page also shows read-only **Severities** and
> **Priorities** reference panels (the values behind the ticket dropdowns).

---

## Step 1: Create the Page

**App Builder → Create Page → Interactive Grid**
- Page Number: `13`
- Name: `Categories`
- **Authorization Scheme:** `IS_SYSTEM_ADMIN` (page-level — non-admins get an
  authorization error, matching the mockup's `isAdmin` gate). Set in the wizard,
  or later in Page Designer: select the page root node `[Left ▸ Rendering]` then
  `[Right ▸ Security ▸ Authorization Scheme]`.

---

## Step 2: Categories grid — Region Source

Build the editable grid on the **base `CATEGORIES` table** (not `V_MY_CATEGORIES`
— that view is scoped/for LOVs and is not simply-updatable). System Admin sees
every row by design, so no tenant filter here. The **Open** column is a read-only
correlated subquery. Select the IG region `[Left ▸ Rendering]` and paste the
query into `[Right ▸ Source ▸ SQL Query]`.

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

`[Right ▸ Attributes ▸ Edit]` — set the grid's **Edit → Enabled = Yes**, Target
table `CATEGORIES`, PK `CATEGORY_ID`.

### Columns (match the mockup order)

Select each column under the IG region in `[Left ▸ Rendering]` and set its
**Type** via `[Right ▸ Identification ▸ Type]`, its source column via
`[Right ▸ Source ▸ Column]`, and **Required** via `[Right ▸ Validation ▸ Required]`.

| # | Column | Source | Type / Notes |
|---|--------|--------|--------------|
| 1 | Category | `CATEGORY_NAME` | Text field, **Required** |
| 2 | Company | `COMPANY_ID` | Select List (LOV below); empty renders **Global** |
| 3 | Project | `PROJECT_ID` | Select List (LOV below); empty renders **All** |
| 4 | Description | `DESCRIPTION` | Textarea — guidance text shown in the ticket category LOV (FR-34) |
| 5 | Open | `OPEN_COUNT` | **Read-only** (Query Only) — open (non-Closed) tickets using this category |
| 6 | Actions | — | Inline row edit is built into the IG (mockup's ✎ Edit) |

> The mockup shows a **Status** (Active/Inactive) badge column. The real
> `CATEGORIES` table has **no status/active column** (verified in
> `sql/01_schema.sql`), so it is intentionally omitted rather than bound to a
> non-existent column. See "Deletion" below for the deactivate-vs-delete stance.

On the `COMPANY_ID` column `[Left ▸ Rendering]`, set `[Right ▸ Identification ▸ Type]`
= Select List, then `[Right ▸ List of Values ▸ Type]` = SQL Query and paste into
`[Right ▸ List of Values ▸ SQL Query]`.

**Company LOV** (allows NULL for a global category):

```sql
SELECT COMPANY_NAME AS d, COMPANY_ID AS r
FROM   COMPANIES
WHERE  STATUS = 'Active'
ORDER  BY COMPANY_NAME
```

Repeat on the `PROJECT_ID` column `[Left ▸ Rendering]`: `[Right ▸ Identification ▸ Type]`
= Select List, `[Right ▸ List of Values ▸ Type]` = SQL Query, query into
`[Right ▸ List of Values ▸ SQL Query]`.

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
via `[Gallery ▸ Items]` dragged onto `[Central ▸ Layout]`:

| Mockup control | APEX equivalent |
|----------------|-----------------|
| 🔍 Search | IG toolbar Search (on by default) |
| Company dropdown | IG **Control Break / column filter** on `COMPANY_ID`, or a page-item filter `:P13_COMPANY` |
| Project dropdown | IG column filter on `PROJECT_ID` |
| + Add Row | IG **Add Row** button (Edit enabled) |
| `N rows` count | IG row-count badge (native) |

> The mockup's Project filter shows the *effective* set (project-specific +
> company-wide + global). For the admin grid, a plain column filter is enough;
> the effective-set logic lives in `V_MY_CATEGORIES` for the ticket LOV, not here.

---

## Step 4: Processes / Validations

All of these live under `[Left ▸ Processing]` (the gear tab).

- **Save** (native IG Save process → target `CATEGORIES`).
- **Validation — scope rule:** `[Left ▸ Processing]` → create a Validation; if
  `PROJECT_ID` is set, `COMPANY_ID` must be set (mirrors `CATEGORIES_SCOPE_CK`).
  Fail with "A project-specific category must also have a company."
- **Uniqueness:** the DB enforces one name per scope via
  `CATEGORIES_NAME_SCOPE_UX` on `(UPPER(CATEGORY_NAME), NVL(COMPANY_ID,-1),
  NVL(PROJECT_ID,-1))`. Surface the ORA-00001 as a friendly "A category with
  that name already exists for this scope."
- **Deletion:** `TICKETS.CATEGORY_ID` FKs to this table, so a category in use
  cannot be hard-deleted. **Disable the IG Delete row action** for safety
  (`[Right ▸ Attributes ▸ Edit]` → Delete = No); if a
  deactivate concept is needed later it requires a new `STATUS`/`ACTIVE` column
  (not in the 26.1 schema today).

---

## Step 5: Severities & Priorities reference (right column)

The mockup's right column shows two small **read-only** reference tables. These
are **not** DB tables — they are the allowed values of `TICKETS.SEVERITY` and
`TICKETS.PRIORITY` (CHECK constraints). Drag a region from `[Gallery ▸ Regions]`
onto `[Central ▸ Layout]` beside the grid and set `[Right ▸ Identification ▸ Type]`
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
