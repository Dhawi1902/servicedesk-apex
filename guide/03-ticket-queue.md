# Step 3 — Ticket Queue (p3) (MUST)

> The main browse/filter screen. Same page, same SQL for all roles — `V_MY_TICKETS`
> handles the scoping. The title, quick-filters, and the Company/Project columns adapt
> to the logged-in role, but every row a user sees is one the view already allowed.

---

## Step 1: Create the Page

**App Builder → Create Page → Faceted Search**
- Page Number: `3`
- Name: `Ticket Queue`
- Table / View: pick `V_MY_TICKETS` (or use the custom SQL query in Step 2)

**Role-based title.** Once the page exists, open it in Page Designer. Select the search
region `[Left ▸ Rendering]` and set its title from the role so clients see their own
tickets and staff see the shared queue:
- Title expression `[Right ▸ Identification ▸ Title]`: `My Tickets` when
  `:APP_ROLE IN ('CLIENT_USER','CLIENT_ADMIN')`, otherwise `Ticket Queue`.
  (Breadcrumb: `Tickets / Queue`.)

> If Faceted Search isn't available or gives trouble, fall back to an **Interactive Report**
> (facets → IR filters, quick-filter chips → a `P3_QUICK` item + WHERE clause).

---

## Step 2: Set the Region Source

Select the region `[Left ▸ Rendering]` and set `[Right ▸ Source ▸ SQL Query]`. Names come straight from `TICKETS` /
`sql/05_isolation_views.sql`; the joins only add display labels (assignee, project,
company) for tickets the view already returns.

```sql
SELECT t.TICKET_ID,
       t.TICKET_REF,
       t.SUBJECT,
       t.TICKET_TYPE,
       t.SEVERITY,
       t.PRIORITY,
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

A chip row above the results, exactly like the mockup — different chips per role, each
showing a live count, one active at a time. Drive it with a page item `P3_QUICK`
(create it from `[Gallery ▸ Items]`, dragging onto `[Central ▸ Layout]` above the results;
`[Right ▸ Identification ▸ Type]` = Radio Group / Static Values) and a
WHERE-clause predicate (declarative "Static Values" chips styled later).

| Role | Chips (in order) | Default |
|------|------------------|---------|
| Client User / Client Admin | `Open` · `All` | `Open` |
| Support Agent | `Assigned to me` · `Unassigned` · `All` | `Assigned to me` |
| System Admin | `Assigned to me` · `Unassigned` · `All` | `All` |

Set `P3_QUICK`'s default with a computation `[Left ▸ Processing]` (Computation on the item,
PL/SQL Function Body):
`RETURN CASE WHEN :APP_ROLE = 'SUPPORT_AGENT' THEN 'MINE'
            WHEN :APP_ROLE = 'SYSTEM_ADMIN'  THEN 'ALL'
            ELSE 'OPEN' END;`

Add this predicate to the region WHERE clause — back on the region, `[Right ▸ Source ▸ SQL Query]`
(append to the SQL in Step 2):

```sql
 WHERE ( :P3_QUICK = 'ALL'
      OR (:P3_QUICK = 'OPEN'       AND t.STATUS <> 'Closed')
      OR (:P3_QUICK = 'MINE'       AND t.ASSIGNED_TO = :APP_USER_ID)
      OR (:P3_QUICK = 'UNASSIGNED' AND t.ASSIGNED_TO IS NULL AND t.STATUS <> 'Closed') )
```

> Counts: render each chip's number with a small scalar sub-select over `V_MY_TICKETS`
> using the same predicate (or a companion "Filter counts" region). The count reflects the
> user's scope automatically — it runs through the view.

---

## Step 4: Configure Report Columns

Columns and **order** match the mockup's table exactly. Each column is a node under the
region in `[Left ▸ Rendering]`; select one and edit it in the Property Editor. Company and
Project are role-conditional via `[Right ▸ Server-side Condition ▸ Type]` on `:APP_ROLE`.

| # | Column | Notes |
|---|--------|-------|
| 1 | `TICKET_REF` | **Link to page 4** via `[Right ▸ Link]` (`P4_TICKET_ID` = `#TICKET_ID#`). Labelled "Ref". |
| 2 | `SUBJECT` | Main display. |
| 3 | `TICKET_TYPE` | Incident / Service Request (raw value; badge later). |
| 4 | `COMPANY_NAME` | **Condition:** `:APP_ROLE IN ('SYSTEM_ADMIN','SUPPORT_AGENT')` (staff only). |
| 5 | `PROJECT_NAME` | **Condition:** staff always; clients only when they can see 2+ projects — see note. |
| 6 | `SEVERITY` | Client-set business impact. |
| 7 | `PRIORITY` | Show `NVL(PRIORITY,'Untriaged')`. |
| 8 | `STATUS` | Raw value; badge later. |
| 9 | `ASSIGNEE_NAME` | Blank/"Unassigned" when null. |
| 10 | `AGE` | Already formatted (`<1d` / `Nd`). |
| 11 | `SLA_STATUS` | Raw value; badge later. |

> **Project column/facet condition (clients).** Staff always see Project. A client sees it
> only when their scope spans 2+ projects (otherwise the column is constant noise). Express
> it at `[Right ▸ Server-side Condition ▸ Type]` = **PL/SQL Function Body returning Boolean**:
> `RETURN :APP_ROLE IN ('SYSTEM_ADMIN','SUPPORT_AGENT')
>        OR (SELECT COUNT(*) FROM V_MY_PROJECTS) > 1;`
> The count runs through `V_MY_PROJECTS`, so it already reflects Open + invited projects.

---

## Step 5: Add Facets

Create each facet under the search region in `[Left ▸ Rendering]` (right-click the **Facets**
node → Create Facet); set its column at `[Right ▸ Source ▸ Column]`, and the Company/Project
conditions at `[Right ▸ Server-side Condition ▸ Type]`. Facet order matches the mockup:
**Status, Severity, Priority, Type, [Company], [Project], Assignee**, plus the keyword search.

| # | Facet | Source Column | Notes |
|---|-------|---------------|-------|
| 1 | Status | `STATUS` | Checkbox group. |
| 2 | Severity | `SEVERITY` | |
| 3 | Priority | `PRIORITY` | Use `NVL(PRIORITY,'Untriaged')`. |
| 4 | Type | `TICKET_TYPE` | Incident vs Service Request. |
| 5 | Company | `COMPANY_ID` | **Condition:** `:APP_ROLE IN ('SYSTEM_ADMIN','SUPPORT_AGENT')`. LOV on company name. |
| 6 | Project | `PROJECT_ID` | **Condition:** same PL/SQL Boolean as the Project column (staff, or client with 2+ projects). LOV on project name. |
| 7 | Assignee | `ASSIGNED_TO` | LOV on user full name; include an "Unassigned" bucket. |
| — | Search | | Keyword search facet over `TICKET_REF` and `SUBJECT`. Placeholder: `Search reference or keyword…`. |

---

## Step 6: Buttons & Row Actions

### "＋ New Ticket" button (clients)
Create it from `[Gallery ▸ Buttons]`, dragging onto `[Central ▸ Layout]`.
- Placement: page-title bar, right-aligned — `[Right ▸ Layout ▸ Region/Position]` = the region's
  title-bar Copy/Create slot (top-right of the region).
- **Condition** `[Right ▸ Server-side Condition ▸ Type]`: `:APP_ROLE IN ('CLIENT_USER','CLIENT_ADMIN')` (only client roles raise tickets).
- **Action** `[Right ▸ Behavior ▸ Action]`: redirect to page 5 (Raise a Ticket); if a Project filter is active, pass it through.

### "Assign to Me" (agents)
A per-row link column — add it under the region in `[Left ▸ Rendering]` (or a "Link" column).
- **Condition** `[Right ▸ Server-side Condition ▸ Type]`: `ASSIGNED_TO IS NULL AND :APP_ROLE = 'SUPPORT_AGENT'`
- **Action** `[Right ▸ Link]`: redirect to page 6 (Assign) with the ticket pre-filled.
- The assign process **re-checks visibility server-side** (see Isolation Checklist).

### "Action Needed" cue (clients)
When `STATUS = 'Resolved'`, surface a cue so the client knows to confirm/close — via the
`STATUS` column's `[Right ▸ Appearance ▸ HTML Expression]`. **Escape all substituted data**
(`APEX_ESCAPE`).

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
