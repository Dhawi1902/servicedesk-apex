# Step 11 — Projects List (p10) (MUST)

> *Browse service engagements. Flat list only — configuration happens on the Project Detail hub (page 11).*

---

## Step 1: Create the Page

> *This page is an **Interactive Report** (a searchable, sortable, filterable list).*

Open your app in **App Builder** and click the green **Create Page** button (top-right), then pick the **Interactive Report** tile. That opens the **Create Interactive Report** wizard — two screens:

> *__Page already blank?__ If page 10 already exists as a blank page, skip the wizard (creating on an existing page number clashes). Open **page 10** in Page Designer and add an **Interactive Report** region (`[Central Pane ▸ Gallery ▸ Regions]` → `[Right Pane ▸ Identification ▸ Type]` = Interactive Report); its source is set in Step 2. The wizard route below still works when building from scratch.*

**Wizard screen 1 — Page Definition + Data Source + Navigation:**

| Field | Set to | Notes |
|-------|--------|-------|
| Page Number | `10` | The Projects list page. |
| Name | `Projects` | Also becomes the page Title. |
| Page Mode | `Normal` | Full page, not a dialog. |
| Data Source | `Local Database` | Data lives in this workspace's schema. |
| Source Type | `SQL Query` | Not Table — this report joins the isolation view to `COMPANIES`, so it's a query, not one table. |
| SQL Query | *(paste the Step 2 query — or leave blank now)* | Source view is `V_MY_PROJECTS`; the full query and why is set in Step 2. |
| Use Breadcrumb | **Off** | Nav is built later (Step 19). |
| Use Navigation | **Off** | Same — the nav entry (all roles) is added in Step 19. |

Click **Next**.

**Wizard screen 2 — Report Attributes:**

| Field | Set to | Notes |
|-------|--------|-------|
| Report Type | `Interactive Report` | Confirms the tile — end-user searchable/sortable report. |
| Include Form Page? | **Off** (No) | Read-only list — no auto-generated edit form. Add Row / Edit run in modals (Steps 4–5). |

Click **Create Page**.

> *APEX drops you into Page Designer with a single **Interactive Report** region on page 10; its columns are inferred from the query. It's a generic report right now — Step 2 sets the `V_MY_PROJECTS` source, Step 3 labels/scopes the columns, Step 4 adds the row-action link, and Step 5 adds the System-Admin-only toolbar.*

---

## Step 2: Set the Region Source

> *Source is `V_MY_PROJECTS` — the isolation view already encodes the whole matrix (admin = all · client = own-company Open + invited Restricted · agent = `AGENT_PROJECTS`), so no `company_id` predicate is added here.*

Select the Interactive Report region `[Left Pane ▸ Rendering]`, then paste the query into `[Right Pane ▸ Source ▸ SQL Query]`.

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

> *Column is `IS_ACTIVE` (`Y`/`N`), not `STATUS` — the schema has no `STATUS` column on `PROJECTS`.*
> *`TICKET_COUNT` is **all** tickets on the project (the mockup's "Tickets" column), not open-only.*

---

## Step 3: Configure Columns

> *Column set + order match the mockup's `<th>` list.*

Select each column under the IR region `[Left Pane ▸ Rendering]` and set its Label `[Right Pane ▸ Heading ▸ Heading]`, per-column visibility `[Right Pane ▸ Server-side Condition ▸ Type]`, and the row link `[Right Pane ▸ Link ▸ Target]`.

> **Hide the raw id first.** `PROJECT_ID` is selected only to feed the row link (`#PROJECT_ID#`) — set its `[Right Pane ▸ Identification ▸ Type]` = **Hidden Column** so it doesn't render as a raw *Project Id* column. A Hidden Column still substitutes in the link Target. (An Interactive Report shows every query column by default; the PK is the one you almost always hide.)

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

> *The mockup renders one action link per row into the project hub (page 11).*

| Role | Link text | Target |
|------|-----------|--------|
| System Admin | **⚙ Manage** (+ **✎ Edit** modal) | page 11 (`P11_PROJECT_ID`) / edit modal |
| Support Agent · Client Admin · Client User | **👁 View** | page 11 (`P11_PROJECT_ID`) — read-only hub |

Declarative route: select the Actions column `[Left Pane ▸ Rendering]`, set its type to Link `[Right Pane ▸ Identification ▸ Type]` = Link, put the **Link Text** Case on `:APP_ROLE` (`Manage` for `SYSTEM_ADMIN`, else `View`) in `[Right Pane ▸ Link ▸ Link Text]`, and point `[Right Pane ▸ Link ▸ Target]` at page 11. The project-name column already links to the same hub — keep both (matches the mockup).

---

## Step 5: Toolbar — "Add Row" Button + Company Filter (System Admin Only)

- **＋ Add Row** button — drag from `[Central Pane ▸ Gallery ▸ Buttons]` onto `[Central Pane ▸ Layout]` (region
  toolbar position), gate it via `[Right Pane ▸ Security ▸ Authorization Scheme]` = `IS_SYSTEM_ADMIN`.
  Opens a modal with: Project Name, Key, Company, Description, Visibility, SLA Policy LOV.
- **Company** faceted filter (dropdown `All Companies` + per-company counts) —
  admin-only; an IR faceted search / filter on `COMPANY_NAME`, gated via
  `[Right Pane ▸ Security ▸ Authorization Scheme]` = `IS_SYSTEM_ADMIN`.
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
