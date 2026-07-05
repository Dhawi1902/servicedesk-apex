# Step 17 — Agent-Project Mapping (p16) (SHOULD)

> **Who covers what** — a read-only, exceptions-first coverage overview of which agents cover
> which projects and at what tier. Coverage gaps show by default. Team changes do **not** happen
> here — they live on each project's **Support Team** tab (page 11), where the project context is
> fixed so you can't map an agent to the wrong company. Droppable if short on time — page 11 covers
> the MUST need; this page is the global rollup that makes the L1 gate and tier coverage visible at a
> glance. System Admin only.

---

## Step 1: Create the Page

**App Builder → Create Page → Blank Page**
- Page Number: `16`
- Name: `Agent-Project Mapping`
- Breadcrumb entry: `Administration / Agent Mapping`
- **Authorization:** `IS_SYSTEM_ADMIN`

The page carries three stacked regions in this order (matching the mockup top-to-bottom):
1. **Coverage KPIs** — a 5-tile stat strip (also the quick filters).
2. **Filters** — a Needs attention / All projects toggle + Company and Project selects.
3. **Coverage by project** — the grouped agent/tier list (the "cards").

---

## Step 2: Coverage KPIs (Region 1)

Drag a new region `[Gallery ▸ Regions]` onto `[Central ▸ Layout]`; set it to a **Cards** region (or a
simple stat strip) via `[Right ▸ Identification ▸ Type]` = Cards, title *Coverage* in
`[Right ▸ Identification ▸ Title]`, and source type **SQL Query** in `[Right ▸ Source ▸ Type]` (query in
`[Right ▸ Source ▸ SQL Query]`). One row of five values — tile order and labels match the mockup exactly:

| # | Tile | Value | Meaning (tooltip) |
|---|------|-------|-------------------|
| 1 | Active projects | `ACTIVE_PROJECTS` | Every active project |
| 2 | Missing L1 | `MISSING_L1` | Clients can assign **L1 only** — these projects are broken for clients (FR-10) |
| 3 | No agents mapped | `NO_AGENTS` | Tickets in these projects have nobody to work them |
| 4 | No L2+ — escalation dead-end | `NO_L2PLUS` | Auto-escalation has no higher tier to go to (FR-35) |
| 5 | Single agent | `SINGLE_AGENT` | One agent covers the whole project — single point of failure |

```sql
SELECT COUNT(*)                                              AS ACTIVE_PROJECTS,
       SUM(CASE WHEN L1_CT    = 0 THEN 1 ELSE 0 END)         AS MISSING_L1,   -- no-agents counts here too
       SUM(CASE WHEN AGENT_CT = 0 THEN 1 ELSE 0 END)         AS NO_AGENTS,
       SUM(CASE WHEN L1_CT > 0 AND HIGHER_CT = 0 THEN 1 ELSE 0 END) AS NO_L2PLUS,
       SUM(CASE WHEN AGENT_CT = 1 THEN 1 ELSE 0 END)         AS SINGLE_AGENT
  FROM (
        SELECT p.PROJECT_ID,
               COUNT(u.USER_ID)                          AS AGENT_CT,
               COUNT(CASE WHEN ap.TIER =  'L1' THEN 1 END) AS L1_CT,
               COUNT(CASE WHEN ap.TIER <> 'L1' THEN 1 END) AS HIGHER_CT
          FROM PROJECTS p
          LEFT JOIN AGENT_PROJECTS ap ON ap.PROJECT_ID = p.PROJECT_ID
          LEFT JOIN APP_USERS      u  ON u.USER_ID = ap.USER_ID AND u.STATUS = 'ACTIVE'
         WHERE p.IS_ACTIVE = 'Y'
         GROUP BY p.PROJECT_ID
       )
```

> The mockup makes each tile a one-click filter on the list below. Declarative equivalent: give each
> card a **Link** (`[Right ▸ Link ▸ Target]`) that sets a page item `:P16_VIEW`
> (`all` / `no-l1` / `no-agents` / `no-l2` / `single`) and refreshes Region 3 (a Refresh dynamic action
> under `[Left ▸ Dynamic Actions]`). Optional polish — the read-only rollup works without it.

---

## Step 3: Filters (Region 2)

Drag a new region `[Gallery ▸ Regions]` onto `[Central ▸ Layout]`, set it to Static Content via
`[Right ▸ Identification ▸ Type]` — a toolbar region holding, left to right:

- **View toggle** — two buttons dragged from `[Gallery ▸ Buttons]`: `⚠ Needs attention (N)` and
  `All projects (N)`. Default to **Needs attention** when any gap exists, else **All projects**
  (set `:P16_VIEW` accordingly on load).
- **Company** — a Select List item `[Gallery ▸ Items]`, type set in `[Right ▸ Identification ▸ Type]`,
  LOV in `[Right ▸ List of Values]`: `All Companies` + one entry per **Active** company
  (`SELECT COMPANY_NAME d, COMPANY_ID r FROM COMPANIES WHERE STATUS = 'ACTIVE' ORDER BY COMPANY_NAME`).
- **Project** — a Select List item `[Gallery ▸ Items]`, `All Projects` + one entry per **active**
  project, shown as `PROJECT_KEY — PROJECT_NAME`
  (`SELECT PROJECT_KEY || ' — ' || PROJECT_NAME d, PROJECT_ID r FROM PROJECTS WHERE IS_ACTIVE = 'Y' ORDER BY PROJECT_KEY`).

Wire each item's **Change** to a Dynamic Action `[Left ▸ Dynamic Actions]` that refreshes Region 3.

---

## Step 4: Coverage by project (Region 3)

Drag a new region `[Gallery ▸ Regions]` onto `[Central ▸ Layout]` and set it to **Interactive Report**
via `[Right ▸ Identification ▸ Type]`. Add a **Control Break on `PROJECT_KEY`** at runtime (Actions →
Format → Control Break) — save it as the report default. The control break gives the mockup's
"grouped-by-project card" effect: each project is a group header, its mapped agents listed beneath with
their tier and open-ticket count.

**Region Source SQL** — select the IR region `[Left ▸ Rendering]` and paste into
`[Right ▸ Source ▸ SQL Query]` (`LEFT JOIN` so a project with no agents still shows a group — the
*No agents mapped* case):

```sql
SELECT p.PROJECT_KEY,
       p.PROJECT_NAME,
       c.COMPANY_NAME,
       u.FULL_NAME  AS AGENT_NAME,
       ap.TIER,
       (SELECT COUNT(*) FROM TICKETS t
         WHERE t.ASSIGNED_TO = u.USER_ID
           AND t.PROJECT_ID  = p.PROJECT_ID
           AND t.STATUS NOT IN ('Resolved','Closed')) AS OPEN_IN_PROJECT,
       -- per-project coverage flags (same value on every agent row of the project)
       CASE WHEN COUNT(CASE WHEN ap.TIER = 'L1' THEN 1 END) OVER (PARTITION BY p.PROJECT_ID) = 0
            THEN 'No L1' END AS FLAG_NO_L1,
       CASE WHEN COUNT(CASE WHEN ap.TIER =  'L1' THEN 1 END) OVER (PARTITION BY p.PROJECT_ID) > 0
             AND COUNT(CASE WHEN ap.TIER <> 'L1' THEN 1 END) OVER (PARTITION BY p.PROJECT_ID) = 0
            THEN 'No L2+' END AS FLAG_NO_L2PLUS,
       p.PROJECT_ID
  FROM PROJECTS  p
  JOIN COMPANIES c  ON c.COMPANY_ID = p.COMPANY_ID
  LEFT JOIN AGENT_PROJECTS ap ON ap.PROJECT_ID = p.PROJECT_ID
  LEFT JOIN APP_USERS      u  ON u.USER_ID = ap.USER_ID AND u.STATUS = 'ACTIVE'
 WHERE p.IS_ACTIVE = 'Y'
   AND (:P16_COMPANY IS NULL OR c.COMPANY_ID = :P16_COMPANY)
   AND (:P16_PROJECT IS NULL OR p.PROJECT_ID = :P16_PROJECT)
 ORDER BY p.PROJECT_KEY, ap.TIER, u.FULL_NAME
```

**Columns** — select each column under the IR region `[Left ▸ Rendering]` and set its label in
`[Right ▸ Heading ▸ Heading]` (in mockup order; the group header carries the project identity, the rows
carry the agents):

| Column | Source | Notes |
|--------|--------|-------|
| *(group header)* Project | `PROJECT_KEY` (break) + `PROJECT_NAME` | Break label shows `PROJECT_NAME` · `COMPANY_NAME` · `PROJECT_KEY` |
| Company | `COMPANY_NAME` | Repeated in the break header; hide at row level |
| Agent | `AGENT_NAME` | The chip name. `NULL` row = *No agents mapped* (empty-state text) |
| Tier | `TIER` | The chip's `(L1…L4)`. Show the raw value |
| Open | `OPEN_IN_PROJECT` | Open tickets this agent holds **in this project** |
| Coverage | `FLAG_NO_L1`, `FLAG_NO_L2PLUS` | Warning chips on the group; show raw text (a later CSS pass styles them) |

- Optionally add a **Link column** `Manage Team`: select the column `[Left ▸ Rendering]`, set
  `[Right ▸ Identification ▸ Type]` = Link and point `[Right ▸ Link ▸ Target]` at page **11**
  (Project Detail) with `P11_PROJECT_ID = #PROJECT_ID#`, label `⚙ Manage Team`. This is the mockup's per-project button — the
  **only** door to editing the team (one door, one truth). This page stays read-only.
- For the `:P16_VIEW` quick-filter, add a WHERE branch keyed off the flags (e.g. `no-l1` →
  `FLAG_NO_L1 IS NOT NULL`, `single` → `COUNT(*) OVER (PARTITION BY p.PROJECT_ID) = 1`).

---

## Step 5: Buttons / Processes / Validations

**None.** This page is a read-only rollup — no add/edit/delete, no processes. All team edits (map an
agent, change a tier, remove an agent) happen on the **Support Team** tab of Project Detail (page 11),
which enforces the "keep ≥1 L1 on an active project" and "reassign open tickets before removal" rules.
Reaching for an editable grid here would duplicate that logic and risk mapping an agent to the wrong
company — deliberately omitted, matching the mockup.

---

## Step 6: Authorization

- Page-level **Authorization Scheme:** select the page (root) node `[Left ▸ Rendering]` and set
  `[Right ▸ Security ▸ Authorization Scheme]` = `IS_SYSTEM_ADMIN` (the whole page — KPIs, filters, list).
- No tenant filter: System Admin sees **all** companies and projects by design, so the KPI and
  open-ticket counts intentionally span every tenant. This is the one place base tables are read
  directly, and it is safe precisely because the page is gated to the global-admin role.

---

## Step 3: Test It

| Test | Expected |
|------|----------|
| Sara (System Admin) | Every active project as a group, its agents listed with tier + open count |
| A project with no L1 mapped | Appears under **Needs attention**; **Missing L1** KPI counts it; `No L1` chip on its header |
| A project with no agents | Group shows with a *No agents mapped* empty row; counts in **Missing L1** and **No agents mapped** |
| Mike's rows | ACME-IT L2, GLBX-IT L2, NW-APPS L2, NW-INFRA L2 — no Initech |
| Company filter = Northwind | Only Northwind projects' groups remain |
| Change a tier on page 11 | Immediately reflected here and in page 6's agent LOV |
| Log in as an agent/client | Page 16 not reachable (authorization blocks it) |

---

## Isolation Checklist

- [ ] Page + all three regions gated `IS_SYSTEM_ADMIN`
- [ ] Page is **read-only** — no add/edit/delete; team edits only via page 11's Support Team tab
- [ ] `Manage Team` link (if added) targets page 11 with `PROJECT_ID` only — no tenant override
- [ ] Company/Project filters bind `:P16_COMPANY` / `:P16_PROJECT` (never string-concatenated)
- [ ] Global counts are intentional (System-Admin scope) and never exposed on any client-facing page
- [ ] Changes take effect immediately on pages 6 and 11

---

**Next:** move to `18-audit-log.md` — the last page!
