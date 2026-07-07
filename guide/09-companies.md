# Step 9 — Companies (p8) (MUST)

> *Judge non-negotiable: "multiple companies." This is the cross-tenant admin page that proves it —* **System Admin only, by design.**

---

## Step 1: Create the Page

This page is an **Interactive Grid** (an editable, spreadsheet-like table). Open your app in
**App Builder** and click the green **Create Page** button (top-right), then pick the **Interactive
Grid** tile. That opens the **Create Interactive Grid** wizard — two screens:

> **Page already blank?** If page 8 already exists as a blank page, skip the wizard (creating on an
> existing page number clashes). Open **page 8** in Page Designer, add an **Interactive Grid** region
> (`[Central Pane ▸ Gallery ▸ Regions]` → `[Right Pane ▸ Identification ▸ Type]` = Interactive Grid) sourced from the
> **`COMPANIES`** table, then set the page **Authorization Scheme = `IS_SYSTEM_ADMIN`** as below. The wizard
> route below still works when building from scratch.

**Wizard screen 1 — Page Definition + Data Source + Navigation:**

| Field | Set to | Notes |
|-------|--------|-------|
| Page Number | `8` | The Companies page (page ≠ guide-file number here). |
| Name | `Companies` | Also becomes the page Title. |
| Page Mode | `Normal` | Full page, not a dialog. |
| Data Source | `Local Database` | Data lives in this workspace's schema. |
| Source Type | `Table` | Point at a table now; Step 2 swaps in a SQL Query for the count columns. |
| Table / View Owner | *your workspace schema* | e.g. `WKSP_DHAWIWORKSPACE` — leave the default. |
| Table / View Name | `COMPANIES` | The tenant table — read as a **base table** on purpose (see below). |
| Use Breadcrumb | **On** | Shows the page title in the breadcrumb bar; the nav-menu link is still wired later (Step 19). |
| Breadcrumb Entry Name | `Companies` | The page name — shown in the breadcrumb bar. |
| Use Navigation | **Off** | Same — skip for now. |

Click **Next**.

**Wizard screen 2 — Interactive Grid attributes:**

| Field | Set to | Notes |
|-------|--------|-------|
| Editing → Enabled | **On** | Admins add/edit companies inline — the Step 3 toolbar (Add Row, Save) and the Status switch need it. |
| Primary Key Column 1 | `COMPANY_ID (Number)` | Auto-detected PK — **must** be set or inline edits can't save. |
| Primary Key Column 2 | *(leave `- Select -`)* | Single-column key. |

Click **Create Page**. APEX drops you into Page Designer with an editable Interactive Grid region on
`COMPANIES`, one column per table column, the standard IG toolbar, and an auto row-DML (Save) process.
Steps 2–3 replace the source with the count query and trim the columns to the mockup set.

**Then set the page authorization** — select the page root node `[Left Pane ▸ Rendering]`, then set
`[Right Pane ▸ Security ▸ Authorization Scheme]` = `IS_SYSTEM_ADMIN` (this page is cross-tenant on purpose).

> *This is one of the few pages that reads a **base table** rather than a `V_MY_*` view — cross-tenant visibility is the whole point, and it is fenced off by the page authorization above.*

---

## Step 2: Configure the Grid Columns

Match the mockup's column set and order exactly: **Company · Projects · Tickets · Users · Status · Actions**.

Select each column under `[Left Pane ▸ Rendering]` (the IG's column list), then set its type via `[Right Pane ▸ Identification ▸ Type]` and read-only/editable via `[Right Pane ▸ Source]` / `[Right Pane ▸ Appearance]` per the Notes below.

| # | Column | Type | Notes |
|---|--------|------|-------|
| 1 | `COMPANY_NAME` | Text | **Editable.** Shown bold as the row's primary label. |
| 2 | Projects | Number (read-only) | `(SELECT COUNT(*) FROM PROJECTS WHERE COMPANY_ID = COMPANIES.COMPANY_ID AND IS_ACTIVE = 'Y')` — active projects only |
| 3 | Tickets | Number (read-only) | `(SELECT COUNT(*) FROM TICKETS WHERE COMPANY_ID = COMPANIES.COMPANY_ID)` — all tickets for the company |
| 4 | Users | Number (read-only) | `(SELECT COUNT(*) FROM APP_USERS WHERE COMPANY_ID = COMPANIES.COMPANY_ID)` |
| 5 | `STATUS` | Switch (read/write) | `ACTIVE` / `INACTIVE` — editable; deactivate instead of deleting |
| 6 | Actions | Link | **Manage** row link → **page 12** (My Company hub), sets `P12_COMPANY_ID` — select the column, set `[Right Pane ▸ Identification ▸ Type]` = Link, then the target/items under `[Right Pane ▸ Link]` |

> *`COMPANIES` has only `COMPANY_ID`, `COMPANY_NAME`, `STATUS` — there is no `CREATED_AT` column, so the grid has no date column. The three count columns are derived read-only sub-selects in the region source.*

**Region Source** — select the IG region under `[Left Pane ▸ Rendering]`, then paste into `[Right Pane ▸ Source ▸ SQL Query]`:

```sql
SELECT c.COMPANY_ID,
       c.COMPANY_NAME,
       (SELECT COUNT(*) FROM PROJECTS  p WHERE p.COMPANY_ID = c.COMPANY_ID AND p.IS_ACTIVE = 'Y') AS PROJECT_COUNT,
       (SELECT COUNT(*) FROM TICKETS   t WHERE t.COMPANY_ID = c.COMPANY_ID)                        AS TICKET_COUNT,
       (SELECT COUNT(*) FROM APP_USERS u WHERE u.COMPANY_ID = c.COMPANY_ID)                        AS USER_COUNT,
       c.STATUS
FROM   COMPANIES c
ORDER  BY c.COMPANY_NAME
```

---

## Step 3: Toolbar, Create & Delete

The mockup shows a standard Interactive Grid toolbar: **+ Add Row**, **Save**, a **Search** box,
an **Actions** menu, and a live **row count** (`N rows`). The IG gives you all of these out of the box.

These are the grid's **Attributes** node — select it under `[Left Pane ▸ Rendering]` (the child node beneath the IG region), and its groups appear in the Right pane.

- Toolbar → `[Right Pane ▸ Toolbar]` → keep **Add Row**, **Save**, **Search**, **Actions**, and **Row count** on.
- Allowed Operations → `[Right Pane ▸ Edit]` → **uncheck Delete** (no hard delete of a tenant).
  Use the **Status** switch to set `INACTIVE` instead.
- Help text on the region — select the region under `[Left Pane ▸ Rendering]`, set `[Right Pane ▸ Help ▸ Help Text]`: *"New company? Create at least one Project and a Client Admin user."*

The per-row **Manage** link (column 6) is the mockup's row action into the company hub — it opens
**page 12** (My Company) with `P12_COMPANY_ID` set from the row, where an admin edits that one company.

---

## Step 4: Test It

| Test | Expected |
|------|----------|
| Sara (System Admin) opens page 8 | Grid lists **all 5 companies** with Projects / Tickets / Users counts + Status |
| Anna (Client User) URL-jumps to page 8 | APEX **authorization error** (page blocked) |
| Mike (Support Agent) URL-jumps to page 8 | APEX **authorization error** |
| **+ Add Row** → save a new company | Row inserted; all three counts start at `0` |
| Toggle Status → `INACTIVE` → Save | Company deactivated; no row deleted |
| Click **Manage** on a row | Opens **page 12** (My Company) for that company |

---

## Isolation Checklist

- [ ] Page authorization = `IS_SYSTEM_ADMIN` (cross-tenant view is intentional and fenced here)
- [ ] Delete operation is **disabled** — deactivate via Status, never hard-delete a tenant
- [ ] The count sub-selects are **read-only** and never expose ticket/user detail, only totals
- [ ] No LOV or report on **any other page** exposes the full company list to non-admins

---

**Next:** move to `10-users.md`.
