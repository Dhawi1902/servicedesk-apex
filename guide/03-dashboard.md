# Page 3 — Dashboard (MUST)

> Mockup: `docs/mockups/03-dashboard.html` · APEX type: Cards (KPIs) + Chart regions · All roles (role-filtered)

## Purpose

The judge non-negotiable "dashboard". One page, role-filtered automatically: every region reads
`FROM V_MY_TICKETS`, so a Client User sees their scope, an agent their projects, the System Admin
everything — **zero role-specific SQL on this page**.

## 1. KPI cards row

A Cards region (or several Value cards) over `V_MY_TICKETS`:

- **Open tickets** — `status NOT IN ('Resolved','Closed')`
- **Unassigned** — `assigned_to IS NULL AND status = 'New'`
- **Breached SLA** — `sla_due_date < SYSDATE AND status NOT IN ('Resolved','Closed')`
- **Resolved this month**
- **SLA Compliance %** (FR-32, SHOULD) — of tickets resolved in the period:
  `ROUND(100 * SUM(CASE WHEN resolved_at <= sla_due_date THEN 1 ELSE 0 END) / NULLIF(COUNT(*),0))`

## 2. Charts

Chart regions, all `FROM V_MY_TICKETS`:

| Chart | Type | Group by |
|-------|------|----------|
| Tickets by status | Bar | `status` |
| Tickets by priority | Pie/Donut | `NVL(priority,'Untriaged')` |
| Tickets by company | Bar | `company_id` → join `COMPANIES` for the name — **condition:** `:APP_ROLE IN ('SYSTEM_ADMIN','SUPPORT_AGENT')` (clients see one company; useless) |
| Tickets by project | Bar | `project_id` → `PROJECTS.project_name` — **condition:** `IS_CLIENT_ADMIN` (their per-engagement breakdown, FR-19/20) |
| Created vs resolved over time | Line | `TRUNC(created_at)` |

## 3. Chart drill-down (build instruction, brief §6.2)

Every chart segment must click through to the Queue. On each series set **Link → Target**:
page 4 with the filter pre-set, e.g. `P4_STATUS:&STATUS.` (or set the faceted-search facet via
`P4_S_STATUS`). A dashboard that can't be clicked into the data is incomplete.

## 4. Agent extras (nice, still declarative)

For `IS_AGENT`: a "My open tickets" list region (`assigned_to = NV('APP_USER_ID')`) and a
"Needs attention" count (SLA at-risk / stale) linking into the pre-filtered queue.

## Isolation checklist

- [ ] Every region on this page selects `FROM V_MY_TICKETS` — grep the page's SQL for base-table names; there must be none.
- [ ] No region adds its own `WHERE company_id = :something` from a page item (the view already scopes; extra item-driven filters are tamper surface).
- [ ] Log in as Anna (Acme client) — company chart hidden, counts match her scope exactly.
- [ ] Log in as Mike — counts exclude Initech (he doesn't cover it).
