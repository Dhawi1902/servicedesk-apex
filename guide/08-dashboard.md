# Step 8 — Dashboard (p2) (MUST)

> *Judge non-negotiable. Build this after the ticket spine (pages 3–7) so there's data to show. Mirrors the mockup `Overview / Dashboard` page: an **8-tile KPI row**, a **4-chart row** (Status · Severity · Priority · Type), staff-only **by-Client** and **by-Project** tables, and an **Operational Analytics (FR-28)** card. Every region aggregates `V_MY_TICKETS`, so the role matrix scopes the numbers automatically — zero role-specific WHERE clauses.*

---

## Step 1: Create the Page

> **Page already blank?** This page is a Blank Page anyway. If page 2 already exists, just open it in Page
> Designer and skip the create step — go straight to building the KPI row and charts below.

This page is a **Blank Page** — an empty canvas. There's no data-source screen (the KPI cards,
charts, and tables are added region-by-region in Steps 2–6). Open your app in **App Builder** and
click the green **Create Page** button (top-right), then pick the **Blank Page** tile. That opens
the **Create Blank Page** wizard — a single screen, then Create.

**Wizard screen 1 — Page Definition:**

| Field | Set to | Notes |
|-------|--------|-------|
| Page Number | `2` | The Dashboard page — page numbers follow feature order (Home is p1), so from here the page number no longer matches the guide-file number. |
| Name | `Dashboard` | Also becomes the page Title. |
| Page Mode | `Normal` | Full page, not a dialog. |
| Use Breadcrumb | **On** | Entry `Dashboard` — the page bar shows `Overview / Dashboard`. |
| Breadcrumb Entry Name | `Dashboard` | Text shown in the breadcrumb. |
| Use Navigation | **On** | Add to the nav menu — all roles reach the dashboard. |

(No **Data Source** section appears for a Blank Page — that's expected; regions bring their own SQL.)

Click **Create Page**. APEX drops you into Page Designer on an **empty page** — no regions yet.
Everything the mockup shows is built by hand from here: the KPI row (Step 2), the four charts
(Step 3), the staff tables (Steps 4–5), and the analytics card (Step 6).

---

## Step 2: KPI Row (8 tiles)

Add one region at the top — create it from `[Central Pane ▸ Gallery ▸ Regions]` dragged onto `[Central Pane ▸ Layout]`,
then make it a **Cards** region via `[Right Pane ▸ Identification ▸ Type]` = Cards (or Static Content styled
as value tiles) laid out **4 across, 2 rows** via `[Right Pane ▸ Layout]`. These are the exact tiles the
mockup shows, in order:

| # | Tile label | Meaning | FR |
|---|------------|---------|----|
| 1 | **Open Tickets** | status not Resolved/Closed | — |
| 2 | **Unassigned** | `ASSIGNED_TO` null and not Closed | — |
| 3 | **In Progress** | status = In Progress | — |
| 4 | **Resolved / Closed** | status Resolved or Closed | — |
| 5 | **SLA Compliance** | % resolved on/before `SLA_DUE_DATE` | FR-32 |
| 6 | **Avg First Response** | avg `FIRST_RESPONSE_AT − CREATED_AT` | FR-31 |
| 7 | **Reopen Rate** | % of resolved/closed with `REOPEN_COUNT > 0` | — |
| 8 | **CSAT Average** | avg `CSAT_SCORE` (out of 5) | FR-27 |

One query returns all eight values — paste it into the selected region's `[Right Pane ▸ Source ▸ SQL Query]`
(bind to Cards columns, or eight Static-content substitutions):

```sql
SELECT
  SUM(CASE WHEN STATUS NOT IN ('Resolved','Closed') THEN 1 ELSE 0 END)                    AS open_tickets,
  SUM(CASE WHEN ASSIGNED_TO IS NULL AND STATUS <> 'Closed' THEN 1 ELSE 0 END)             AS unassigned,
  SUM(CASE WHEN STATUS = 'In Progress' THEN 1 ELSE 0 END)                                 AS in_progress,
  SUM(CASE WHEN STATUS IN ('Resolved','Closed') THEN 1 ELSE 0 END)                        AS resolved_closed,
  -- FR-32 SLA Compliance %: resolved on time / all resolved-with-a-due-date (100 if none)
  NVL(ROUND(100 * SUM(CASE WHEN STATUS IN ('Resolved','Closed')
                            AND SLA_DUE_DATE IS NOT NULL
                            AND COALESCE(RESOLVED_AT, CLOSED_AT) <= SLA_DUE_DATE
                           THEN 1 ELSE 0 END)
       / NULLIF(SUM(CASE WHEN STATUS IN ('Resolved','Closed') AND SLA_DUE_DATE IS NOT NULL
                         THEN 1 ELSE 0 END), 0)), 100)                                    AS sla_compliance_pct,
  -- FR-31 Avg first response, in whole hours (front-end may render as “Nd” when ≥ 24h)
  ROUND(AVG(CASE WHEN FIRST_RESPONSE_AT IS NOT NULL
                 THEN (CAST(FIRST_RESPONSE_AT AS DATE) - CAST(CREATED_AT AS DATE)) * 24 END), 1) AS avg_first_response_hrs,
  -- Reopen rate % among resolved/closed
  NVL(ROUND(100 * SUM(CASE WHEN STATUS IN ('Resolved','Closed') AND REOPEN_COUNT > 0 THEN 1 ELSE 0 END)
       / NULLIF(SUM(CASE WHEN STATUS IN ('Resolved','Closed') THEN 1 ELSE 0 END), 0)), 0) AS reopen_pct,
  -- FR-27 CSAT average out of 5
  ROUND(AVG(CSAT_SCORE), 1)                                                               AS csat_avg
FROM V_MY_TICKETS
```

> *Every tile reads `FROM V_MY_TICKETS` — the view handles all role scoping. No `WHERE company_id` anywhere. Format tiles declaratively (append `%` to 5/7, `/5` to 8, `h`/`d` to 6). Tile icons/colours are cosmetic — a later UI pass handles them.*

---

## Step 3: Chart Row (4 charts)

A second region row, **4 across**, in this exact order and with these titles. Build each chart the
same way: drag a region from `[Central Pane ▸ Gallery ▸ Regions]` onto `[Central Pane ▸ Layout]`, set `[Right Pane ▸ Identification ▸ Type]`
= Chart, choose Bar/Donut on the chart's `[Right Pane ▸ Attributes ▸ Type]`, name it via
`[Right Pane ▸ Identification ▸ Title]`, then select the chart's **Series** node `[Left Pane ▸ Rendering]` and paste
its query into `[Right Pane ▸ Source ▸ SQL Query]` (map `label` → Label, `value` → Value).

### Chart 1 — Tickets by Status (Bar)
Region Type = Chart, `[Right Pane ▸ Attributes ▸ Type]` = Bar; Series SQL in `[Right Pane ▸ Source ▸ SQL Query]`:
```sql
SELECT STATUS AS label, COUNT(*) AS value
  FROM V_MY_TICKETS
 GROUP BY STATUS
 ORDER BY DECODE(STATUS,'New',1,'Assigned',2,'In Progress',3,'On Hold',4,'Resolved',5,'Closed',6)
```

### Chart 2 — Tickets by Severity (Bar or Donut)
Client-set business impact — the four severities, ordered Critical → Low (`[Right Pane ▸ Attributes ▸ Type]`
= Bar or Donut; Series SQL in `[Right Pane ▸ Source ▸ SQL Query]`):
```sql
SELECT SEVERITY AS label, COUNT(*) AS value
  FROM V_MY_TICKETS
 GROUP BY SEVERITY
 ORDER BY DECODE(SEVERITY,'Critical',1,'Major',2,'Minor',3,'Low',4)
```

### Chart 3 — Tickets by Priority (Bar or Donut)
Support-set P1–P4, with **Untriaged** for nulls (FR-37 — priority is null until triaged)
(`[Right Pane ▸ Attributes ▸ Type]` = Bar or Donut; Series SQL in `[Right Pane ▸ Source ▸ SQL Query]`):
```sql
SELECT NVL(PRIORITY, 'Untriaged') AS label, COUNT(*) AS value
  FROM V_MY_TICKETS
 GROUP BY NVL(PRIORITY, 'Untriaged')
 ORDER BY DECODE(NVL(PRIORITY,'Untriaged'),'Untriaged',0,'P1',1,'P2',2,'P3',3,'P4',4)
```

### Chart 4 — Tickets by Type (Bar or Donut) · FR-30
ITIL distinction — Incident vs Service Request (`[Right Pane ▸ Attributes ▸ Type]` = Bar or Donut;
Series SQL in `[Right Pane ▸ Source ▸ SQL Query]`):
```sql
SELECT CASE TICKET_TYPE WHEN 'INCIDENT' THEN 'Incidents'
                        WHEN 'SERVICE_REQUEST' THEN 'Service Requests'
       END AS label, COUNT(*) AS value
  FROM V_MY_TICKETS
 GROUP BY TICKET_TYPE
```

> The mockup renders 2–4 as a labelled legend with counts/percentages; any APEX chart type
> (bar/donut) carrying the same group-by and title is a faithful match. Titles must read exactly:
> *Tickets by Status*, *Tickets by Severity*, *Tickets by Priority*, *Tickets by Type*.

---

## Step 4: Tickets by Client (staff only)

The mockup shows a per-company breakdown table **for staff only**. Add a **Classic Report** region —
drag from `[Central Pane ▸ Gallery ▸ Regions]` onto `[Central Pane ▸ Layout]`, then `[Right Pane ▸ Identification ▸ Type]` = Classic Report.

**Title (server-side, by role)** — set the title expression in `[Right Pane ▸ Identification ▸ Title]`:
- System Admin → `Tickets by Client Company` *(cross-tenant view)*
- Support Agent → `Tickets by Client`

**Server-side Condition (region)** — `[Right Pane ▸ Server-side Condition ▸ Type]` = *PL/SQL Expression* → `:APP_ROLE IN ('SYSTEM_ADMIN','SUPPORT_AGENT')`

**Columns (exact order):** `Company · Open · In Progress · Resolved/Closed · SLA Breach · SLA Compliance`

Paste the query into `[Right Pane ▸ Source ▸ SQL Query]`:

```sql
SELECT c.COMPANY_NAME AS company,
       SUM(CASE WHEN t.STATUS NOT IN ('Resolved','Closed') THEN 1 ELSE 0 END) AS open_tickets,
       SUM(CASE WHEN t.STATUS = 'In Progress' THEN 1 ELSE 0 END)              AS in_progress,
       SUM(CASE WHEN t.STATUS IN ('Resolved','Closed') THEN 1 ELSE 0 END)     AS resolved_closed,
       SUM(CASE WHEN t.SLA_DUE_DATE < SYSTIMESTAMP
                 AND t.STATUS NOT IN ('Resolved','Closed') THEN 1 ELSE 0 END) AS sla_breach,
       NVL(ROUND(100 * SUM(CASE WHEN t.STATUS IN ('Resolved','Closed')
                                 AND t.SLA_DUE_DATE IS NOT NULL
                                 AND COALESCE(t.RESOLVED_AT, t.CLOSED_AT) <= t.SLA_DUE_DATE
                                THEN 1 ELSE 0 END)
            / NULLIF(SUM(CASE WHEN t.STATUS IN ('Resolved','Closed')
                              AND t.SLA_DUE_DATE IS NOT NULL THEN 1 ELSE 0 END), 0)), 100) AS sla_compliance_pct
  FROM V_MY_TICKETS t
  JOIN COMPANIES c ON c.COMPANY_ID = t.COMPANY_ID
 GROUP BY c.COMPANY_NAME
 ORDER BY c.COMPANY_NAME
```

> **Why this is isolation-safe for both roles:** the report groups **`V_MY_TICKETS`**, which is
> already role-scoped. A System Admin sees every company; a Support Agent's rows only ever contain
> their assigned projects' companies — so the same query yields the admin's cross-tenant view *and*
> the agent's "my clients" view with **no cross-tenant leak**. (Companies with zero visible tickets
> won't appear. **Do not** switch to `RIGHT JOIN COMPANIES` to show the full roster — this region is
> shared with Support Agents, so a RIGHT JOIN would surface **every** active company name to an agent as a
> zero-count row: a cross-tenant leak. Keep the INNER `JOIN`.)
> Append `%` to SLA Compliance declaratively.

---

## Step 5: Tickets by Project (staff only)

Second staff-only **Classic Report** (`[Central Pane ▸ Gallery ▸ Regions]` → `[Right Pane ▸ Identification ▸ Type]` = Classic Report),
directly below the client table.

**Title** — `[Right Pane ▸ Identification ▸ Title]`: `Tickets by Project`
**Server-side Condition** — `[Right Pane ▸ Server-side Condition ▸ Type]` (PL/SQL Expression): `:APP_ROLE IN ('SYSTEM_ADMIN','SUPPORT_AGENT')`
**Columns (exact order):** `Project · Company · Open · Total · SLA Breach`

Query into `[Right Pane ▸ Source ▸ SQL Query]`:

```sql
SELECT p.PROJECT_NAME AS project,
       c.COMPANY_NAME AS company,
       SUM(CASE WHEN t.STATUS NOT IN ('Resolved','Closed') THEN 1 ELSE 0 END) AS open_tickets,
       COUNT(*)                                                                AS total,
       SUM(CASE WHEN t.SLA_DUE_DATE < SYSTIMESTAMP
                 AND t.STATUS NOT IN ('Resolved','Closed') THEN 1 ELSE 0 END) AS sla_breach
  FROM V_MY_TICKETS t
  JOIN PROJECTS  p ON p.PROJECT_ID = t.PROJECT_ID
  JOIN COMPANIES c ON c.COMPANY_ID = t.COMPANY_ID
 GROUP BY p.PROJECT_NAME, c.COMPANY_NAME
 ORDER BY c.COMPANY_NAME, p.PROJECT_NAME
```

> *Same guarantee: grouping `V_MY_TICKETS` means an agent only ever sees their `AGENT_PROJECTS` projects here; the admin sees all. Never join `PROJECTS`/`TICKETS` base tables directly.*

---

## Step 6: Operational Analytics (FR-28) — all roles

A final card the mockup shows to **every role** — so leave `[Right Pane ▸ Security ▸ Authorization Scheme]`
empty (no server-side condition). Two stat values plus a per-agent table.

**Title** — `[Right Pane ▸ Identification ▸ Title]`: `Operational Analytics`

**6a — two stats** (one small query) — a Cards/Static Content region with SQL in `[Right Pane ▸ Source ▸ SQL Query]`:
```sql
SELECT ROUND(AVG(CASE WHEN RESOLVED_AT IS NOT NULL
                      THEN (CAST(RESOLVED_AT AS DATE) - CAST(CREATED_AT AS DATE)) * 24 END)) AS avg_resolution_hrs,
       SUM(CASE WHEN RESOLVED_AT IS NOT NULL THEN 1 ELSE 0 END)                             AS resolved_tickets
  FROM V_MY_TICKETS
```
- **Avg Resolution Time** — render as hours, or `/24` days when ≥ 24 (cosmetic).
- **Resolved Tickets** — count with a `RESOLVED_AT`.

**6b — Tickets per Agent** table — a **Classic Report** (`[Central Pane ▸ Gallery ▸ Regions]` → `[Right Pane ▸ Identification ▸ Type]`
= Classic Report), query in `[Right Pane ▸ Source ▸ SQL Query]`.
**Columns (exact order):** `Agent · Tier · Open · Resolved/Closed · Total`

```sql
SELECT u.FULL_NAME AS agent,
       (SELECT LISTAGG(ap.TIER, '/') WITHIN GROUP (ORDER BY ap.TIER)
          FROM (SELECT DISTINCT TIER FROM AGENT_PROJECTS WHERE USER_ID = u.USER_ID) ap) AS tier,
       SUM(CASE WHEN t.STATUS NOT IN ('Resolved','Closed') THEN 1 ELSE 0 END) AS open_tickets,
       SUM(CASE WHEN t.STATUS IN ('Resolved','Closed') THEN 1 ELSE 0 END)     AS resolved_closed,
       COUNT(*)                                                                AS total
  FROM V_MY_TICKETS t
  JOIN APP_USERS    u ON u.USER_ID = t.ASSIGNED_TO
 GROUP BY u.FULL_NAME, u.USER_ID
 ORDER BY u.FULL_NAME
```

> Grouping assigned tickets from `V_MY_TICKETS` means only agents with tickets *the caller can see*
> appear — a client viewing this card sees only the agent(s) on their own tickets, no one else.
> **Tier** is per-project (`AGENT_PROJECTS.TIER`, L1–L4); the sub-select rolls an agent's distinct
> tiers into e.g. `L1/L2`. Confirm `APP_USERS.FULL_NAME` matches your column name.

---

## Step 7: Chart Drill-Downs (optional polish)

Each of the four charts can link a segment to the Ticket Queue (page 3) with a filter pre-set — select
the chart's **Series** node `[Left Pane ▸ Rendering]`, then set `[Right Pane ▸ Link ▸ Target]`:
- Link Target: Page `3`
- Set item, e.g. `P3_STATUS` = `&STATUS.` (or `P3_SEVERITY`, `P3_PRIORITY`, `P3_TICKET_TYPE`)

Keep drill-downs optional — the KPI/chart/table content above is what the mockup guarantees.

---

## Step 8: Test It

| Test | Expected |
|------|----------|
| Sara (System Admin) | All 8 KPIs; all 4 charts; **Tickets by Client Company** (all companies) + **Tickets by Project** (all) + Analytics |
| Anna (Client User) | Her scope only; 4 charts + KPIs reflect her tickets; **client/project tables hidden**; Analytics shows only agents on her tickets |
| Mike (Agent) | His `AGENT_PROJECTS` scope only (excludes Initech); staff tables show only his clients/projects |
| SLA Compliance tile | Equals on-time resolved ÷ resolved-with-due-date × 100 for the caller's scope |

---

## Isolation Checklist

- [ ] Every KPI, chart and table aggregates `V_MY_TICKETS` — no base `TICKETS`/`COMPANIES`/`PROJECTS` as the driving table
- [ ] No extra `WHERE company_id = :something` (the view already scopes)
- [ ] **Tickets by Client** and **Tickets by Project** are region-conditioned on `:APP_ROLE IN ('SYSTEM_ADMIN','SUPPORT_AGENT')` and still group `V_MY_TICKETS` (an agent sees only their own clients — safe)
- [ ] Per-agent table groups `V_MY_TICKETS` (a client sees only agents on their own tickets)
- [ ] Anna's counts match her scope exactly; Mike's exclude Initech

---

**Next:** move to `09-companies.md`.
