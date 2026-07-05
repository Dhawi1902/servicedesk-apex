# Step 11 — Projects List (p10) (MUST)

> Browse service engagements. Flat list only — configuration happens on the Project Detail hub (page 11).
> Breadcrumb reads **Administration / Projects**; page title **Projects**.

---

## Step 1: Create the Page

**App Builder → Create Page → Interactive Report**
- Page Number: `10`
- Name: `Projects`
- Navigation: add to nav menu (all roles)

---

## Step 2: Set the Region Source

Select the Interactive Report region `[Left ▸ Rendering]`, then paste the query into
`[Right ▸ Source ▸ SQL Query]`. Source is `V_MY_PROJECTS` — the isolation view already encodes the whole matrix
(admin = all · client = own-company Open + invited Restricted · agent = `AGENT_PROJECTS`),
so no `company_id` predicate is added here.

```sql
SELECT p.PROJECT_ID,
       p.PROJECT_NAME,
       p.PROJECT_KEY,
       c.COMPANY_NAME,
       p.DESCRIPTION,
       p.VISIBILITY,
       p.IS_ACTIVE,
       (SELECT COUNT(*) FROM V_MY_TICKETS t
          WHERE t.PROJECT_ID = p.PROJECT_ID)          AS TICKET_COUNT,
       (SELECT COUNT(*) FROM AGENT_PROJECTS ap
          WHERE ap.PROJECT_ID = p.PROJECT_ID)         AS AGENT_COUNT
  FROM V_MY_PROJECTS p
  JOIN COMPANIES c ON c.COMPANY_ID = p.COMPANY_ID
```

> Column is `IS_ACTIVE` (`Y`/`N`), not `STATUS` — the schema has no `STATUS` column on `PROJECTS`.
> `TICKET_COUNT` is **all** tickets on the project (the mockup's "Tickets" column), not open-only.

---

## Step 3: Configure Columns

Select each column under the IR region `[Left ▸ Rendering]` and set its Label
`[Right ▸ Heading ▸ Heading]`, per-column visibility `[Right ▸ Server-side Condition ▸ Type]`,
and the row link `[Right ▸ Link ▸ Target]`. Column set + order match the mockup's `<th>` list.

| # | Column | Label | Notes |
|---|--------|-------|-------|
| 1 | `PROJECT_NAME` | Project Name | Link → **page 11** (`P11_PROJECT_ID` = `#PROJECT_ID#`) |
| 2 | `PROJECT_KEY` | Key | e.g. ACME-IT |
| 3 | `COMPANY_NAME` | Company | **Condition:** `:APP_ROLE IN ('SYSTEM_ADMIN','SUPPORT_AGENT')` — shown to staff only (agents span companies) |
| 4 | `DESCRIPTION` | Description | Free text |
| 5 | `VISIBILITY` | Visibility | Badge: Open / Restricted (raw value `OPEN`/`RESTRICTED`) |
| 6 | `IS_ACTIVE` | Status | Display Active (`Y`) / Inactive (`N`) |
| 7 | `TICKET_COUNT` | Tickets | Count |
| 8 | `AGENT_COUNT` | Agents | Count. *(Optional cosmetic warning badge — "⚠ No L1" / "⚠ No L2+" — can be layered later from `AGENT_PROJECTS.tier`; not required for MUST.)* |
| 9 | Actions | Actions | Link column — see Step 4 (label/target vary by role) |

---

## Step 4: Row Actions (link column)

The mockup renders one action link per row into the project hub (page 11):

| Role | Link text | Target |
|------|-----------|--------|
| System Admin | **⚙ Manage** (+ **✎ Edit** modal) | page 11 (`P11_PROJECT_ID`) / edit modal |
| Support Agent · Client Admin · Client User | **👁 View** | page 11 (`P11_PROJECT_ID`) — read-only hub |

Declarative route: select the Actions column `[Left ▸ Rendering]`, set its type to Link
`[Right ▸ Identification ▸ Type]` = Link, put the **Link Text** Case on `:APP_ROLE`
(`Manage` for `SYSTEM_ADMIN`, else `View`) in `[Right ▸ Link ▸ Link Text]`, and point
`[Right ▸ Link ▸ Target]` at page 11. The project-name
column already links to the same hub — keep both (matches the mockup).

---

## Step 5: Toolbar — "Add Row" Button + Company Filter (System Admin Only)

- **＋ Add Row** button — drag from `[Gallery ▸ Buttons]` onto `[Central ▸ Layout]` (region
  toolbar position), gate it via `[Right ▸ Security ▸ Authorization Scheme]` = `IS_SYSTEM_ADMIN`.
  Opens a modal with: Project Name, Key, Company, Description, Visibility, SLA Policy LOV.
- **Company** faceted filter (dropdown `All Companies` + per-company counts) —
  admin-only; an IR faceted search / filter on `COMPANY_NAME`, gated via
  `[Right ▸ Security ▸ Authorization Scheme]` = `IS_SYSTEM_ADMIN`.
- Search box + row count (`N rows`) are standard IR toolbar elements.
- Empty state text: **No projects yet.**

---

## Step 6: Test It

| Test | Expected |
|------|----------|
| Anna (Client User) | Sees Acme's Open projects + invited Restricted. No Globex/Initech. **View** link only; no Company column. |
| Mike (Agent) | Sees his `AGENT_PROJECTS` rows only. Company column visible. **View** link. |
| Sara (System Admin) | Sees all 8 projects; **＋ Add Row** + Company filter visible; **Manage**/**Edit** links. |
| Click a project name (or Manage/View) | Opens page 11 |

---

## Isolation Checklist

- [ ] Source is `V_MY_PROJECTS` (never base `PROJECTS`)
- [ ] Company column + Company filter conditioned to staff / admin
- [ ] ＋ Add Row and Edit gated `IS_SYSTEM_ADMIN`
- [ ] Row link passes only `PROJECT_ID`; page 11 re-scopes via `V_MY_PROJECTS`

---

**Next:** move to `12-project-detail.md`.
