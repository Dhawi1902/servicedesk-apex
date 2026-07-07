# Step 3 — Ticket Queue (p3) (MUST)

> *The main browse/filter screen. Same page, same SQL for all roles — `V_MY_TICKETS`
> handles the scoping. The title, quick-filters, and the Company/Project columns adapt
> to the logged-in role, but every row a user sees is one the view already allowed.*

> **Why this guide is long:** the Faceted Search wizard drops you a *generic* page — it
> lists **every** SELECT column (including raw ids) and gives each facet a text-box default.
> Steps 3–6 turn that generic page into the mockup: hide the id columns, make each facet a
> **checkbox list with counts**, and wire **＋ New Ticket** to the modal. Don't stop at the wizard.

---

## Step 1: Create the Page

> **Page already blank?** If page 3 already exists as a blank page, skip the wizard (creating on an
> existing page number clashes). Open **page 3** in Page Designer and add the region by hand instead:
> `[Central Pane ▸ Gallery ▸ Regions]` onto `[Central Pane ▸ Layout]`, `[Right Pane ▸ Identification ▸ Type]` = **Faceted Search**
> (or **Interactive Report** per the fallback note below), `[Right Pane ▸ Source]` = `V_MY_TICKETS`. Then continue
> from Step 2.

> *This page is a **Faceted Search** page (a filterable report with a facet sidebar).*

1. Open your app in **App Builder** and click the green **Create Page** button (top-right).
2. Pick the **Faceted Search** tile.
3. Wizard **screen 1** — fill this table, then click **Create Page**:

   | Field | Set to | Notes |
   |-------|--------|-------|
   | Page Number | `3` | The Ticket Queue page. |
   | Name | `Ticket Queue` | Also becomes the page Title. |
   | Page Mode | `Normal` | Full page, not a dialog. |
   | Data Source | `Local Database` | Data lives in this workspace's schema. |
   | Source Type | `Table / View` | Point at the isolation view; Step 2 swaps in the enriched query. |
   | Table / View Owner | *your workspace schema* | Leave the default. |
   | Table / View Name | `V_MY_TICKETS` | The tenant-scoped view — never base `TICKETS`. |
   | Use Breadcrumb | **On** | Shows the page title in the breadcrumb bar; the nav-menu link is still wired later (Step 19). |
   | Breadcrumb Entry Name | `Ticket Queue` | The page name — shown in the breadcrumb bar. |
   | Use Navigation | **Off** | Same — skip for now. |

> *APEX drops you into Page Designer with **two regions** on this page: a **Faceted Search** region and a **Search Results** classic-report region. Right now both are generic — the report shows every column of the view (raw ids and all) and the facets are plain text boxes. Steps 3 and 5 fix that.*
> *If Faceted Search isn't available or gives trouble, fall back to an **Interactive Report**.*

4. Select the **search results region** in `[Left Pane ▸ Rendering]`.
5. Set its title from the role so clients see their own tickets and staff see the shared queue:
   - `[Right Pane ▸ Identification ▸ Title]`: `My Tickets` when `:APP_ROLE IN ('CLIENT_USER','CLIENT_ADMIN')`, otherwise `Ticket Queue`.

---

## Step 2: Set the Region Source

> *Names come straight from `TICKETS` / `sql/05_isolation_views.sql`; the joins only add display labels. Two columns exist purely so facets can bucket by them cleanly: `TICKET_TYPE_DISP` (friendly "Incident"/"Service Request") and the `NVL(...,'Unassigned')` on the assignee — that `NVL` is what gives the Assignee facet a real **Unassigned** bucket instead of an empty one.*

1. Select the **search results** region in `[Left Pane ▸ Rendering]`.
2. Set `[Right Pane ▸ Source ▸ SQL Query]` to:

   ```sql
   SELECT t.TICKET_ID,
          t.TICKET_REF,
          t.SUBJECT,
          t.TICKET_TYPE,
          CASE WHEN t.TICKET_TYPE = 'SERVICE_REQUEST'
               THEN 'Service Request' ELSE 'Incident' END    AS TICKET_TYPE_DISP,
          t.SEVERITY,
          NVL(t.PRIORITY, 'Untriaged')                       AS PRIORITY,
          t.STATUS,
          t.COMPANY_ID,
          c.COMPANY_NAME,
          t.PROJECT_ID,
          p.PROJECT_NAME,
          t.ASSIGNED_TO,
          NVL(a.FULL_NAME, 'Unassigned')                     AS ASSIGNEE_NAME,
          t.CREATED_AT,
          t.SLA_DUE_DATE,
          -- Age since raised (mirrors the mockup's "<1d" / "Nd")
          CASE WHEN SYSDATE - CAST(t.CREATED_AT AS DATE) < 1
               THEN '<1d'
               ELSE FLOOR(SYSDATE - CAST(t.CREATED_AT AS DATE)) || 'd'
          END                                                AS AGE,
          -- SLA status (raw value; a later CSS pass turns it into a badge)
          CASE
            WHEN t.STATUS = 'Closed'        THEN 'Closed'
            WHEN t.SLA_DUE_DATE IS NULL     THEN NULL
            WHEN t.SLA_DUE_DATE <= SYSTIMESTAMP THEN 'Breached'
            WHEN (CAST(t.SLA_DUE_DATE AS DATE) - SYSDATE)
                 / NULLIF(CAST(t.SLA_DUE_DATE AS DATE) - CAST(t.CREATED_AT AS DATE), 0) <= 0.25
                 THEN 'At risk'
            ELSE 'On track'
          END                                                AS SLA_STATUS
     FROM V_MY_TICKETS t
     LEFT JOIN COMPANIES c ON c.COMPANY_ID = t.COMPANY_ID
     LEFT JOIN PROJECTS  p ON p.PROJECT_ID = t.PROJECT_ID
     LEFT JOIN APP_USERS a ON a.USER_ID    = t.ASSIGNED_TO
   ```

> The `WHERE` clause for the quick-filter chips is appended in **Step 4** (it binds `:P3_QUICK`). Add the chips item first so the bind resolves.

---

## Step 3: Configure & Hide Report Columns

> *The wizard created a report column for **every** column in the SELECT — that's why the raw
> **Ticket ID / Company ID / Project ID** boxes showed up in your first render. Set the ids and the
> raw timestamps to **Hidden Column** (they stay available for links/conditions), then relabel and
> order the visible ones to match the mockup.*

1. In `[Left Pane ▸ Rendering]`, expand the search results region's **Columns** node.
2. **Hide the raw columns.** Select each column below and set `[Right Pane ▸ Identification ▸ Type]` = **Hidden Column**:

   | Column | Why hidden |
   |--------|-----------|
   | `TICKET_ID` | PK — kept for the Ref link (`#TICKET_ID#` still substitutes from a Hidden Column). |
   | `TICKET_TYPE` | Raw `INCIDENT`/`SERVICE_REQUEST`; we show the friendly `TICKET_TYPE_DISP` instead. |
   | `COMPANY_ID` | We display `COMPANY_NAME`. |
   | `PROJECT_ID` | We display `PROJECT_NAME`. |
   | `ASSIGNED_TO` | We display `ASSIGNEE_NAME`; still referenced by the "Assign to Me" condition (Step 6). |
   | `CREATED_AT` | We show the derived `AGE`. |
   | `SLA_DUE_DATE` | We show the derived `SLA_STATUS`. |

   > **`Hidden Column`, not "display off" or CSS.** A Hidden Column is still emitted into the row data,
   > so `#TICKET_ID#` resolves in a Link Target and `ASSIGNED_TO` resolves in a server-side column
   > condition. Hiding via CSS would break links; deleting the column would break them too.

3. **Configure the visible columns** — set each column's **Heading** and any link/condition per the table (top-to-bottom is the display order; drag columns in the tree to reorder):

   | # | Column | Heading | Notes |
   |---|--------|---------|-------|
   | 1 | `TICKET_REF` | `Ref` | `[Right Pane ▸ Link]`: Target Page `4`, `P4_TICKET_ID` = `#TICKET_ID#`. |
   | 2 | `SUBJECT` | `Subject` | |
   | 3 | `TICKET_TYPE_DISP` | `Type` | Friendly label from Step 2. |
   | 4 | `SEVERITY` | `Severity` | |
   | 5 | `PRIORITY` | `Priority` | Shows **Untriaged** when null — handled by the `NVL` in Step 2. (Don't try this in an HTML Expression: that field takes `#COLUMN#` substitutions, not SQL functions like `NVL`.) |
   | 6 | `STATUS` | `Status` | |
   | 7 | `COMPANY_NAME` | `Company` | `[Right Pane ▸ Server-side Condition ▸ Type]` = **PL/SQL Expression** `:APP_ROLE IN ('SYSTEM_ADMIN','SUPPORT_AGENT')` (the `:` is required — a bare `APP_ROLE` is read as an undeclared PL/SQL identifier → `PLS-00201`). |
   | 8 | `PROJECT_NAME` | `Project` | `[Right Pane ▸ Server-side Condition ▸ Type]` = **PL/SQL Function Body returning Boolean** (see below). |
   | 9 | `ASSIGNEE_NAME` | `Assignee` | Shows **Unassigned** for null — handled by the `NVL` in Step 2. |
   | 10| `AGE` | `Age` | |
   | 11| `SLA_STATUS` | `SLA` | |

4. For the `PROJECT_NAME` condition body, use this. **A scalar `(SELECT …)` can't sit inside a PL/SQL
   expression (raises PLS-00405) — fetch the count with `SELECT … INTO` first, then `RETURN`:**
   ```sql
   DECLARE
     l_ok PLS_INTEGER;
   BEGIN
     IF :APP_ROLE IN ('SYSTEM_ADMIN','SUPPORT_AGENT') THEN
       RETURN TRUE;
     END IF;
     SELECT COUNT(*) INTO l_ok FROM V_MY_PROJECTS;
     RETURN l_ok > 1;
   END;
   ```

---

## Step 4: Quick-Filter Chips

> *A radio row above the results, like the mockup — different chips per role, one active at a time.
> The wizard's Static-Values editor pre-fills two placeholder rows (`Display1` / `Display2`); if you
> don't delete them you get the "Display1 Display2 …" chips you saw in the first render.*

1. From `[Central Pane ▸ Gallery ▸ Items]`, drag a new item onto `[Central Pane ▸ Layout]` above the results.
2. Set its properties:
   - `[Right Pane ▸ Identification ▸ Name]`: `P3_QUICK`
   - `[Right Pane ▸ Identification ▸ Type]`: **Radio Group**
   - `[Right Pane ▸ Settings ▸ Number of Columns]`: `4` (lays the options out as a horizontal chip row).
   - `[Right Pane ▸ List of Values ▸ Type]`: **Static Values** — click **Edit Static Values**. **Delete the two pre-filled `Display1` / `Display2` rows**, then add these four. **Display Value** is the chip label; **Return Value** is what the Step 4 predicate matches (must be exact):

     | Display Value | Return Value |
     |---------------|--------------|
     | `Open` | `OPEN` |
     | `Assigned to me` | `MINE` |
     | `Unassigned` | `UNASSIGNED` |
     | `All` | `ALL` |
   - `[Right Pane ▸ List of Values ▸ Display Null Value]`: **Off** (a chip is always active).

> *All four options live in the list; the predicate + default computation decide which are relevant per role:*
> - *Client User / Admin:* `Open` · `All`
> - *Support / System Admin:* `Assigned to me` · `Unassigned` · `All`

3. Set `P3_QUICK`'s default via a computation. Under `[Left Pane ▸ Processing]`, right-click **Computations** → **Create Computation**:
   - `[Right Pane ▸ Identification ▸ Item Name]`: `P3_QUICK`
   - `[Right Pane ▸ Execution ▸ Point]`: **Before Header**
   - `[Right Pane ▸ Execution ▸ Type]`: **PL/SQL Function Body**
   - `[Right Pane ▸ Source ▸ PL/SQL Function Body]`:
     ```sql
     RETURN CASE WHEN :APP_ROLE = 'SUPPORT_AGENT' THEN 'MINE'
                 WHEN :APP_ROLE = 'SYSTEM_ADMIN'  THEN 'ALL'
                 ELSE 'OPEN' END;
     ```

4. Select the **search results** region and append this predicate to `[Right Pane ▸ Source ▸ SQL Query]` (after the joins from Step 2):

   ```sql
    WHERE ( :P3_QUICK = 'ALL'
         OR (:P3_QUICK = 'OPEN'       AND t.STATUS <> 'Closed')
         OR (:P3_QUICK = 'MINE'       AND t.ASSIGNED_TO = :APP_USER_ID)
         OR (:P3_QUICK = 'UNASSIGNED' AND t.ASSIGNED_TO IS NULL AND t.STATUS <> 'Closed') )
   ```

5. **Make the chips actually refilter.** A Radio Group change does *not* refresh a report on its own — wire it:
   - On the **search results** region, set `[Right Pane ▸ Source ▸ Page Items to Submit]` = `P3_QUICK` (so the new value reaches session state before the SQL re-runs).
   - Under `[Left Pane ▸ Rendering]`, right-click `P3_QUICK` → **Create Dynamic Action**:
     - `[Right Pane ▸ When ▸ Event]`: **Change**
     - True action `[Right Pane ▸ Identification ▸ Action]`: **Refresh**
     - `[Right Pane ▸ Affected Elements ▸ Selection Type]`: **Region** → **Region** = the **search results** region.

---

## Step 5: Add & Configure Facets

> *The facet sidebar in the mockup is a stack of **checkbox lists, each value showing a live count**
> (Status, Severity, Priority, Type, [Company], [Project], Assignee) plus a keyword search. The wizard's
> default facet Type is a plain text/Range box — that's why your first render showed input boxes with
> **Go** buttons. Set every categorical facet to **Checkbox Group** explicitly.*

**5a. Turn on region-level counts.** Select the **Faceted Search** region → `[Right Pane ▸ Attributes]`:
- **Feedback** = **On** (the master switch for the count badges; if it's off, no facet shows counts).
- **Batch Changes**: leave **On** for an **Apply** button (results wait until the user clicks Apply), or set **Off** for instant refresh on each tick (snappier for the demo — matches the mockup). Pick one deliberately; the default (Apply button) surprises people expecting live filtering.

**5b. Create each facet.** In `[Left Pane ▸ Rendering]`, right-click the **Facets** node under the Faceted Search region → **Create Facet**. For each row set `[Right Pane ▸ Identification ▸ Type]`, `[Right Pane ▸ Source ▸ Database Column]`, and the settings noted:

   | Facet (Label) | Type | Database Column | Notes |
   |---------------|------|-----------------|-------|
   | Status | **Checkbox Group** | `STATUS` | |
   | Severity | **Checkbox Group** | `SEVERITY` | |
   | Priority | **Checkbox Group** | `PRIORITY` | Buckets include **Untriaged** (from the Step 2 `NVL`). |
   | Type | **Checkbox Group** | `TICKET_TYPE_DISP` | Friendly "Incident" / "Service Request" buckets. |
   | Company | **Checkbox Group** | `COMPANY_NAME` | `[Right Pane ▸ Server-side Condition ▸ Type]` = **PL/SQL Expression** `:APP_ROLE IN ('SYSTEM_ADMIN','SUPPORT_AGENT')`. |
   | Project | **Checkbox Group** | `PROJECT_NAME` | `[Right Pane ▸ Server-side Condition]` = the **same PL/SQL Boolean body** as the Project column (Step 3.4). |
   | Assignee | **Checkbox Group** | `ASSIGNEE_NAME` | Includes an **Unassigned** bucket automatically (from the Step 2 `NVL`). Higher cardinality — optionally set `[Settings ▸ Display Filter Initially]` = **On** for a value-search box. |

For every facet above set `[Right Pane ▸ Settings]`:
- **List of Values ▸ Type** = **Distinct Values** (the default — derives the buckets from the report query).
- **Show Counts** = **On** (the per-value count badge).
- **Hide Empty Values** = **On** (keep this consistent across *all* facets — a mix of hidden vs. greyed 0-count rows looks broken).

**5c. Keyword search facet.** Right-click **Facets** → **Create Facet**:
- `[Right Pane ▸ Identification ▸ Type]` = **Search**
- `[Right Pane ▸ Source ▸ Database Columns]` = `TICKET_REF,SUBJECT` (comma-separated; a term must match one of them)
- `[Right Pane ▸ Appearance ▸ Placeholder]` = `Search reference or keyword…`

> **Why facet on the display columns, not the ids?** Distinct-Values facets derive their buckets
> **from the report query**, which is `FROM V_MY_TICKETS` — so faceting on `COMPANY_NAME` /
> `ASSIGNEE_NAME` is inherently tenant-scoped and shows names, not ids. **Do not** switch a facet to a
> **SQL Query** LOV that selects from base `TICKETS`/`APP_USERS` — that's a *separate* query the view
> no longer protects, and it would leak other tenants' company/assignee names into the sidebar even
> though the rows stay hidden. If you ever need a SQL-Query facet LOV, source it from a `V_MY_*` view.

---

## Step 6: The ＋ New Ticket Button & Modal

> *Adds **＋ New Ticket** (opens the Raise-a-Ticket modal and refreshes the queue on close).*
>
> *There is deliberately **no** per-row "Assign to Me" action here — matching the mockup, the queue is a
> pure browse/filter screen. Agents self-assign from the **ticket detail page** (the `✎ Self-Assign`
> button in `04-ticket-detail.md`), where the write runs the `V_MY_TICKETS` guard. Click a ticket's Ref
> to get there.*

1. From `[Central Pane ▸ Gallery ▸ Buttons]`, drag a button onto the search results region's title bar (the **Copy/Create** position).
2. Set:
   - `[Right Pane ▸ Identification ▸ Label]`: `＋ New Ticket`
   - `[Right Pane ▸ Identification ▸ Button Name]`: `NEW_TICKET`
   - `[Right Pane ▸ Server-side Condition ▸ Type]`: **PL/SQL Expression** `:APP_ROLE IN ('CLIENT_USER','CLIENT_ADMIN')`
   - `[Right Pane ▸ Behavior ▸ Action]`: **Redirect to Page in this Application**
   - `[Right Pane ▸ Behavior ▸ Target]`: Page `5`

   > **It opens as a modal automatically** — page 5 (Raise a Ticket) has **Page Mode = Modal Dialog**,
   > and that's what makes APEX render the redirect as a dialog. There is no extra "open as modal"
   > setting on the button; just keep the Action as **Redirect to Page in this Application** (not
   > *Redirect to URL*, which would bypass the dialog machinery).

3. **Refresh the queue when the dialog closes** (so a newly-raised ticket appears without a full reload):
   - In `[Left Pane ▸ Rendering]`, right-click the **NEW_TICKET** button → **Create Dynamic Action**.
   - `[Right Pane ▸ When ▸ Event]`: **Dialog Closed** *(fires for both the Close-Dialog process and submit-then-close)*.
   - True action `[Right Pane ▸ Identification ▸ Action]`: **Refresh**
   - `[Right Pane ▸ Affected Elements ▸ Selection Type]`: **Region** → the **search results** region.

   > The **Dialog Closed** event only fires on the element that *launched* the dialog — so the DA lives
   > on the **button**, not on the region. Refreshing the results region also recomputes the facet counts.

---

## Step 7: Test It

| Test | Expected |
|------|----------|
| Log in as `anna@acme.example` (Client User) | Title reads **My Tickets**; chips **Open / All** (Open active); no Company column/facet; **＋ New Ticket** visible; **no raw id columns** |
| Log in as `bob@acme.example` (Client Admin) | Sees all Acme tickets across all projects; Project column + facet show (2+ projects); **＋ New Ticket** visible |
| Log in as `mike@northwind.example` (Agent) | Title **Ticket Queue**; chips **Assigned to me / Unassigned / All** (mine active); tickets from his assigned projects only — no Initech; no New Ticket button; the Ref link opens the detail page where **Self-Assign** lives |
| Log in as `sara@northwind.example` (System Admin) | Sees everything; Company + Project columns/facets visible; chips default to **All** |
| Tick a **Status** facet | Results filter; each facet value shows a live count badge |
| Change a quick-filter chip | Results refilter immediately (no stale rows) |
| Click **＋ New Ticket** | Raise-a-Ticket opens **as a modal**; on save the queue **refreshes** and shows the new ticket |
| Click a ticket Ref | Opens page 4 with that ticket |

---

## Isolation Checklist

- [ ] Source is `V_MY_TICKETS` — no base `TICKETS` table anywhere; joins are label-only lookups on already-visible rows
- [ ] Raw id columns (`TICKET_ID`/`COMPANY_ID`/`PROJECT_ID`/`ASSIGNED_TO`) are **Hidden Column**, not displayed
- [ ] Company column **and** facet hidden for client roles (`:APP_ROLE` condition)
- [ ] Project column/facet condition runs through `V_MY_PROJECTS` (count > 1), never a raw project list
- [ ] Every facet uses **Distinct Values** off the `V_MY_TICKETS` query — **no facet has a SQL-Query LOV hitting base `TICKETS`/`APP_USERS`** (that would leak other tenants' names into the sidebar)
- [ ] Quick-filter predicate binds `:P3_QUICK` / `:APP_USER_ID` — no string-concatenation
- [ ] Anna sees only her scope; Mike never sees Initech

---

**Next:** move to `04-ticket-detail.md`.
