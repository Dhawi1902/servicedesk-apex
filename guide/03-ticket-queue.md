# Step 3 — Ticket Queue (p3) (MUST)

> *The main browse/filter screen. Same page, same SQL for all roles — `V_MY_TICKETS`
> handles the scoping. The title, quick-filters, and the Company/Project columns adapt
> to the logged-in role, but every row a user sees is one the view already allowed.*

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
   | Use Breadcrumb | **Off** | Nav is built later (Step 19). |
   | Use Navigation | **Off** | Same — skip for now. |

> *APEX drops you into Page Designer with **two regions** on this page: a **Faceted Search** region and a **Search Results** classic-report region. Right now both are generic.*
> *If Faceted Search isn't available or gives trouble, fall back to an **Interactive Report**.*

4. Select the **search results region** in `[Left Pane ▸ Rendering]`.
5. Set its title from the role so clients see their own tickets and staff see the shared queue:
   - `[Right Pane ▸ Identification ▸ Title]`: `My Tickets` when `:APP_ROLE IN ('CLIENT_USER','CLIENT_ADMIN')`, otherwise `Ticket Queue`.

---

## Step 2: Set the Region Source

> *Names come straight from `TICKETS` / `sql/05_isolation_views.sql`; the joins only add display labels.*

1. Select the region in `[Left Pane ▸ Rendering]`.
2. Set `[Right Pane ▸ Source ▸ SQL Query]` to:

   ```sql
   SELECT t.TICKET_ID,
          t.TICKET_REF,
          t.SUBJECT,
          t.TICKET_TYPE,
          t.SEVERITY,
          NVL(t.PRIORITY, 'Untriaged')                  AS PRIORITY,
          t.STATUS,
          t.COMPANY_ID,
          c.COMPANY_NAME,
          t.PROJECT_ID,
          p.PROJECT_NAME,
          t.ASSIGNED_TO,
          a.FULL_NAME                                   AS ASSIGNEE_NAME,
          t.CREATED_AT,
          t.SLA_DUE_DATE,
          -- Age since raised (mirrors the mockup's "<1d" / "Nd")
          CASE WHEN SYSDATE - CAST(t.CREATED_AT AS DATE) < 1
               THEN '<1d'
               ELSE FLOOR(SYSDATE - CAST(t.CREATED_AT AS DATE)) || 'd'
          END                                           AS AGE,
          -- SLA status (raw value; a later CSS pass turns it into a badge)
          CASE
            WHEN t.STATUS = 'Closed'        THEN 'Closed'
            WHEN t.SLA_DUE_DATE IS NULL     THEN NULL
            WHEN t.SLA_DUE_DATE <= SYSTIMESTAMP THEN 'Breached'
            WHEN (CAST(t.SLA_DUE_DATE AS DATE) - SYSDATE)
                 / NULLIF(CAST(t.SLA_DUE_DATE AS DATE) - CAST(t.CREATED_AT AS DATE), 0) <= 0.25
                 THEN 'At risk'
            ELSE 'On track'
          END                                           AS SLA_STATUS
     FROM V_MY_TICKETS t
     LEFT JOIN COMPANIES c ON c.COMPANY_ID = t.COMPANY_ID
     LEFT JOIN PROJECTS  p ON p.PROJECT_ID = t.PROJECT_ID
     LEFT JOIN APP_USERS a ON a.USER_ID    = t.ASSIGNED_TO
   ```

---

## Step 3: Quick-Filter Chips (with counts)

> *A chip row above the results, exactly like the mockup — different chips per role, each showing a live count, one active at a time.*

1. From `[Central Pane ▸ Gallery ▸ Items]`, drag a new item onto `[Central Pane ▸ Layout]` above the results.
2. Set its properties:
   - `[Right Pane ▸ Identification ▸ Name]`: `P3_QUICK`
   - `[Right Pane ▸ Identification ▸ Type]`: **Radio Group**
   - `[Right Pane ▸ List of Values ▸ Type]`: **Static Values** — click into the editor and add these rows. **Display Value** is the chip label; **Return Value** is what the Step 5 predicate matches on (must be exact):

     | Display Value | Return Value |
     |---------------|--------------|
     | `Open` | `OPEN` |
     | `Assigned to me` | `MINE` |
     | `Unassigned` | `UNASSIGNED` |
     | `All` | `ALL` |

> *The chips shown will vary by role (all four live in the list; the predicate + default computation drive which is relevant per role):*
> - *Client User / Admin:* `Open` · `All`
> - *Support / System Admin:* `Assigned to me` · `Unassigned` · `All`

3. Set `P3_QUICK`'s default via a computation. Under `[Left Pane ▸ Processing]`, right-click **Computations** → **Create Computation**:
   - `[Right Pane ▸ Identification ▸ Item Name]`: `P3_QUICK`
   - `[Right Pane ▸ Execution ▸ Type]`: **PL/SQL Function Body**
   - `[Right Pane ▸ Source ▸ PL/SQL Function Body]`:
     ```sql
     RETURN CASE WHEN :APP_ROLE = 'SUPPORT_AGENT' THEN 'MINE'
                 WHEN :APP_ROLE = 'SYSTEM_ADMIN'  THEN 'ALL'
                 ELSE 'OPEN' END;
     ```

4. Select the search results region in `[Left Pane ▸ Rendering]`.
5. Append this predicate to `[Right Pane ▸ Source ▸ SQL Query]`:

   ```sql
    WHERE ( :P3_QUICK = 'ALL'
         OR (:P3_QUICK = 'OPEN'       AND t.STATUS <> 'Closed')
         OR (:P3_QUICK = 'MINE'       AND t.ASSIGNED_TO = :APP_USER_ID)
         OR (:P3_QUICK = 'UNASSIGNED' AND t.ASSIGNED_TO IS NULL AND t.STATUS <> 'Closed') )
   ```

---

## Step 4: Configure Report Columns

> *Columns and order match the mockup's table exactly. Company and Project are role-conditional.*

1. In `[Left Pane ▸ Rendering]`, expand the search results region's **Columns** node.
2. Select each column and edit its properties per the table below:

   | # | Column | Notes |
   |---|--------|-------|
   | 1 | `TICKET_REF` | Set `[Right Pane ▸ Link]`: Target Page `4`, `P4_TICKET_ID` = `#TICKET_ID#`. Set Label: `Ref`. |
   | 2 | `SUBJECT` | |
   | 3 | `TICKET_TYPE` | |
   | 4 | `COMPANY_NAME` | Set `[Right Pane ▸ Server-side Condition ▸ Type]`: **PL/SQL Expression** `:APP_ROLE IN ('SYSTEM_ADMIN','SUPPORT_AGENT')` (the `:` is required — a bare `APP_ROLE` is read as an undeclared PL/SQL identifier → `PLS-00201`). |
   | 5 | `PROJECT_NAME` | Set `[Right Pane ▸ Server-side Condition ▸ Type]`: **PL/SQL Function Body returning Boolean** (see below) |
   | 6 | `SEVERITY` | |
   | 7 | `PRIORITY` | Shows **Untriaged** when null — already handled by the `NVL(t.PRIORITY,'Untriaged')` in the Step 2 query. (Don't try to do this in an HTML Expression: that field takes `#COLUMN#` substitutions, not SQL functions like `NVL`.) |
   | 8 | `STATUS` | |
   | 9 | `ASSIGNEE_NAME` | |
   | 10| `AGE` | |
   | 11| `SLA_STATUS` | |

3. For the `PROJECT_NAME` condition body, use this. **A scalar `(SELECT …)` can't sit inside a PL/SQL
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

## Step 5: Add Facets

> *Facet order matches the mockup: Status, Severity, Priority, Type, [Company], [Project], Assignee, plus keyword search.*

1. In `[Left Pane ▸ Rendering]`, right-click the **Facets** node under the search region → **Create Facet**.
2. Repeat for each facet below, setting the target column and any conditions:

   | Facet | Source Column | Notes |
   |-------|---------------|-------|
   | Status | `STATUS` | Checkbox group. |
   | Severity | `SEVERITY` | |
   | Priority | `PRIORITY` | |
   | Type | `TICKET_TYPE` | |
   | Company | `COMPANY_ID` | Condition (PL/SQL Expression): `:APP_ROLE IN ('SYSTEM_ADMIN','SUPPORT_AGENT')`. LOV on company name. |
   | Project | `PROJECT_ID` | Condition: Same PL/SQL Boolean as the column. LOV on project name. |
   | Assignee | `ASSIGNED_TO` | Include an "Unassigned" bucket. **Isolation:** source the LOV from users on the caller's own tickets, not base `APP_USERS` — e.g. `SELECT DISTINCT au.FULL_NAME d, t.ASSIGNED_TO r FROM V_MY_TICKETS t JOIN APP_USERS au ON au.USER_ID = t.ASSIGNED_TO ORDER BY 1`. A raw `FROM APP_USERS` list would leak every tenant's user/agent names into the dropdown. |

3. Add a **Search** facet (keyword search over `TICKET_REF` and `SUBJECT`), with placeholder: `Search reference or keyword…`.

---

## Step 6: Buttons & Row Actions

> *This adds the "New Ticket" button and the row-level "Assign to Me" action.*

1. From `[Central Pane ▸ Gallery ▸ Buttons]`, drag a button onto `[Central Pane ▸ Layout]` (region's title-bar Copy/Create slot).
2. Set the "＋ New Ticket" button properties:
   - `[Right Pane ▸ Server-side Condition ▸ Type]`: **Expression** `:APP_ROLE IN ('CLIENT_USER','CLIENT_ADMIN')`
   - `[Right Pane ▸ Behavior ▸ Action]`: **Redirect to Page in this Application**
   - `[Right Pane ▸ Behavior ▸ Target]`: Page `5`

3. In `[Left Pane ▸ Rendering]`, add a new column to the search results region for "Assign to Me" (Link column).
4. Set the Link column properties:
   - `[Right Pane ▸ Server-side Condition ▸ Type]`: **Expression** `ASSIGNED_TO IS NULL AND :APP_ROLE = 'SUPPORT_AGENT'`
   - `[Right Pane ▸ Link]`: Target Page `6`, `P6_TICKET_ID` = `#TICKET_ID#`.

5. Select the `STATUS` column in `[Left Pane ▸ Rendering]`.
6. Surface a client action cue for Resolved tickets by setting `[Right Pane ▸ Column Formatting ▸ HTML Expression]` (ensure all data is escaped).

---

## Step 7: Test It

| Test | Expected |
|------|----------|
| Log in as `anna@acme.example` (Client User) | Title reads **My Tickets**; chips **Open / All** (Open active); no Company column/facet; **＋ New Ticket** visible |
| Log in as `bob@acme.example` (Client Admin) | Sees all Acme tickets across all projects; Project column shows (2+ projects); **＋ New Ticket** visible |
| Log in as `mike@northwind.example` (Agent) | Title **Ticket Queue**; chips **Assigned to me / Unassigned / All** (mine active); tickets from his assigned projects only — no Initech; no New Ticket button |
| Log in as `sara@northwind.example` (System Admin) | Sees everything; Company + Project columns/facets visible; chips default to **All** |
| Click a ticket Ref | Opens page 4 with that ticket |

---

## Isolation Checklist

- [ ] Source is `V_MY_TICKETS` — no base `TICKETS` table anywhere; joins are label-only lookups on already-visible rows
- [ ] Company column **and** facet hidden for client roles (`:APP_ROLE` condition)
- [ ] Project column/facet condition runs through `V_MY_PROJECTS` (count > 1), never a raw project list
- [ ] Quick-filter predicate binds `:P3_QUICK` / `:APP_USER_ID` — no string-concatenation
- [ ] Chip counts and facet LOVs read from the view/scoped sources, so they can't reveal out-of-scope tickets
- [ ] "Assign to me" process re-checks `SELECT COUNT(*) FROM V_MY_TICKETS WHERE TICKET_ID = :Pn_TICKET_ID` before writing
- [ ] Anna sees only her scope; Mike never sees Initech

---

**Next:** move to `04-ticket-detail.md`.
