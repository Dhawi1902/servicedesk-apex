# Step 17 — Agent-Project Mapping (p16) (SHOULD)

> ***Who covers what** — a read-only, exceptions-first coverage overview of which agents cover
> which projects and at what tier. Coverage gaps show by default. Team changes do **not** happen
> here — they live on each project's **Support Team** tab (page 11), where the project context is
> fixed so you can't map an agent to the wrong company. Droppable if short on time — page 11 covers
> the MUST need; this page is the global rollup that makes the L1 gate and tier coverage visible at a
> glance. System Admin only.*

---

## Step 1: Create the Page

This page is a **Blank Page** — a read-only rollup we hand-build from three regions, **not** an
Interactive Grid (there is no single table to edit; Step 5 confirms it stays read-only). Open your app
in **App Builder** and click the green **Create Page** button (top-right), then pick the **Blank Page**
tile. That opens the **Create Blank Page** wizard — a **single** screen (a Blank Page has no Data
Source step and no second screen):

> ***Page already blank?** This page is a Blank Page anyway. If page 16 already exists, open it in Page
> Designer and skip the create step — set the **Authorization** below, then build the three regions.*

**Wizard screen 1 — Page Definition + Navigation:**

| Field | Set to | Notes |
|-------|--------|-------|
| Page Number | `16` | The Agent-Project Mapping page. |
| Name | `Agent-Project Mapping` | Also becomes the page Title. |
| Page Mode | `Normal` | Full page, not a dialog. |
| Use Breadcrumb | **On** | Shows the page title in the breadcrumb bar; the nav-menu link is still wired later (Step 19). |
| Breadcrumb Entry Name | `Agent-Project Mapping` | The page name — shown in the breadcrumb bar. |
| Use Navigation | **Off** | Nav menu built later (Step 19). |

Click **Create Page**. Because it's a Blank Page, APEX drops you into Page Designer on an **empty**
page — no region, no data source, no items. You add everything by hand next.

**Then set the page authorization:** `IS_SYSTEM_ADMIN` — select the page root node `[Left Pane ▸ Rendering]`
then `[Right Pane ▸ Security ▸ Authorization Scheme]` (also covered in Step 6). Now build the three regions.

The page carries three stacked regions in this order (matching the mockup top-to-bottom):
1. **Coverage KPIs** — a 5-tile stat strip (also the quick filters).
2. **Filters** — a Needs attention / All projects toggle + Company and Project selects.
3. **Coverage by project** — a card per project with the mapped agents as tier-coloured chips.

---

## Page inventory — name everything exactly (read first)

> ⚠️ **The rename trap.** When you drag a Select List / Button onto the page, APEX auto-names it
> `P16_NEW`, `P16_NEW_1`, etc. If you leave those names, every reference to a nice name (`:P16_COMPANY`
> in the SQL, `P16_VIEW` in a Set-Value action, the region's *Page Items to Submit*) fails at runtime
> with **`ERR-1002 Unable to find item ID for item "P16_COMPANY"`** — and because that error is thrown
> during an AJAX refresh, the whole thing surfaces only as a *"One or more errors have occurred"* JS
> popup with dead filters. **Rename each item the moment you create it** (`[Right Pane ▸ Identification ▸ Name]`).
> This table is the source of truth for every name on the page.

**Regions (3, top to bottom):**

| Region Title | Type | Role |
|---|---|---|
| `Coverage KPIs` | Cards | Region 1 — the 5 KPI tiles |
| `Filters` | Static Content | Region 2 — the toolbar |
| `Coverage by project` | Cards | Region 3 — **the refresh target** of every filter |

**Page items** (create all three inside the **Filters** region):

| Item Name | Type | Critical setting |
|---|---|---|
| `P16_VIEW` | **Hidden** | **Value Protected = Off** (the toggle sets it client-side; On blocks that) |
| `P16_COMPANY` | Select List | LOV in Step 3 |
| `P16_PROJECT` | Select List | LOV in Step 3 |

**Buttons** (inside the **Filters** region — set each button's `[Behavior ▸ Action]` = *Defined by Dynamic Action*):

| Button Name | Label |
|---|---|
| `NEEDS_ATTENTION` | `⚠ Needs attention` |
| `ALL_PROJECTS` | `All projects` |

**Dynamic Actions:**

| DA Name | On | Event | True actions (in order) |
|---|---|---|---|
| `Set view – needs` | `NEEDS_ATTENTION` | Click | **Set Value** (Static) `needs` → `P16_VIEW`; **Refresh** → region `Coverage by project` |
| `Set view – all` | `ALL_PROJECTS` | Click | **Set Value** (Static) `all` → `P16_VIEW`; **Refresh** → region `Coverage by project` |
| `Filter – company` | `P16_COMPANY` | Change | **Refresh** → region `Coverage by project` |
| `Filter – project` | `P16_PROJECT` | Change | **Refresh** → region `Coverage by project` |

**SQL column aliases — do NOT rename these** (the card attribute mappings bind to them by name):

| Region | Aliases |
|---|---|
| Coverage KPIs (Region 1) | `SEQ`, `LABEL`, `VAL`, `VIEW_KEY` |
| Coverage by project (Region 3) | `PROJECT_ID`, `CARD_TITLE`, `CARD_SUBTITLE`, `COVERAGE_BADGE`, `AGENT_CHIPS` |

And on **Region 3**, set **`[Source ▸ Page Items to Submit]` = `P16_VIEW,P16_COMPANY,P16_PROJECT`** — without it, a refresh sends none of the filter values and the binds arrive NULL (cards never filter).

---

## Step 2: Coverage KPIs (Region 1)

Drag a new region `[Central Pane ▸ Gallery ▸ Regions]` onto `[Central Pane ▸ Layout]`; set it to a **Cards** region
via `[Right Pane ▸ Identification ▸ Type]` = Cards, name *Coverage KPIs* and title *Coverage* in
`[Right Pane ▸ Identification]`, and source type **SQL Query** in `[Right Pane ▸ Source ▸ Type]` (query in
`[Right Pane ▸ Source ▸ SQL Query]`). Five tiles — order and labels match the mockup exactly:

| # | Tile | `VIEW_KEY` | Meaning (tooltip) |
|---|------|-----------|-------------------|
| 1 | Active projects | `all` | Every active project |
| 2 | Missing L1 | `no-l1` | Clients can assign **L1 only** — these projects are broken for clients (FR-10) |
| 3 | No agents mapped | `no-agents` | Tickets in these projects have nobody to work them |
| 4 | No L2+ — escalation dead-end | `no-l2` | Auto-escalation has no higher tier to go to (FR-35) |
| 5 | Single agent | `single` | One agent covers the whole project — single point of failure |

> ⚠️ **A Cards region renders one card per _row_, not per column.** The KPIs are computed as five
> aggregates, so the query must **pivot them into five rows** (one per tile) with a `LABEL` + `VAL`
> pair — feeding a Cards region a single 5-column row yields **one blank card, not five tiles**. The
> `WITH … UNION ALL` below does exactly that. (Column is `VAL`, not `VALUE` — `VALUE` is reserved.)

```sql
WITH cov AS (
        SELECT p.PROJECT_ID,
               COUNT(u.USER_ID)                            AS AGENT_CT,
               COUNT(CASE WHEN ap.TIER =  'L1' THEN 1 END) AS L1_CT,
               COUNT(CASE WHEN ap.TIER <> 'L1' THEN 1 END) AS HIGHER_CT
          FROM PROJECTS p
          LEFT JOIN AGENT_PROJECTS ap ON ap.PROJECT_ID = p.PROJECT_ID
          LEFT JOIN APP_USERS      u  ON u.USER_ID = ap.USER_ID AND u.STATUS = 'ACTIVE'
         WHERE p.IS_ACTIVE = 'Y'
         GROUP BY p.PROJECT_ID
),
agg AS (
        SELECT COUNT(*)                                              AS ACTIVE_PROJECTS,
               SUM(CASE WHEN L1_CT    = 0 THEN 1 ELSE 0 END)         AS MISSING_L1,   -- no-agents counts here too
               SUM(CASE WHEN AGENT_CT = 0 THEN 1 ELSE 0 END)         AS NO_AGENTS,
               SUM(CASE WHEN L1_CT > 0 AND HIGHER_CT = 0 THEN 1 ELSE 0 END) AS NO_L2PLUS,
               SUM(CASE WHEN AGENT_CT = 1 THEN 1 ELSE 0 END)         AS SINGLE_AGENT
          FROM cov
)
SELECT 1 AS SEQ, 'Active projects'              AS LABEL, ACTIVE_PROJECTS AS VAL, 'all'       AS VIEW_KEY FROM agg
UNION ALL
SELECT 2, 'Missing L1',                   MISSING_L1,   'no-l1'     FROM agg
UNION ALL
SELECT 3, 'No agents mapped',             NO_AGENTS,    'no-agents' FROM agg
UNION ALL
SELECT 4, 'No L2+ — escalation dead-end', NO_L2PLUS,    'no-l2'     FROM agg
UNION ALL
SELECT 5, 'Single agent',                 SINGLE_AGENT, 'single'    FROM agg
ORDER BY SEQ
```

**Then map the columns to card slots** — this is the step that makes the tiles appear. Select the
region's **Attributes** child node `[Left Pane ▸ Rendering ▸ Coverage KPIs ▸ Attributes]` (or the
**Attributes** tab at the top of the right pane) and set:

| Group ▸ Property | Set to |
|---|---|
| **Primary Key ▸ Primary Key Column 1** | `SEQ` |
| **Title ▸ Column** | `VAL` (the big KPI number) |
| **Body ▸ Advanced Formatting** | Off |
| **Body ▸ Column** | `LABEL` (the tile caption) |

Back on the region node, set **Source ▸ Order By Column** = `SEQ` so the tiles keep mockup order 1→5.

> *The mockup makes each tile a one-click filter on the list below. Declarative equivalent: give the
> **Title** or **Card** a **Link** (`[Attributes ▸ Link ▸ Target]`) that sets a page item `:P16_VIEW`
> to `#VIEW_KEY#` (`all` / `no-l1` / `no-agents` / `no-l2` / `single`) and refreshes Region 3 (a Refresh
> dynamic action under `[Left Pane ▸ Dynamic Actions]`). Optional polish — the read-only rollup works
> without it.*

---

## Step 3: Filters (Region 2)

Drag a new region `[Central Pane ▸ Gallery ▸ Regions]` onto `[Central Pane ▸ Layout]`, set it to Static Content via
`[Right Pane ▸ Identification ▸ Type]`, and name it **`Filters`**. It holds three items, two buttons, and a
hidden state item — **rename each one immediately** per the inventory above (the ERR-1002 trap).

**3.1 — the hidden view-state item.** The toggle buttons have nowhere to store their value on their own,
so create a hidden item to hold it. Right-click the `Filters` region → **Create Page Item**:
- **Name** = `P16_VIEW` · **Type** = **Hidden** · **Settings ▸ Value Protected** = **Off**
  (Hidden defaults this On, which blocks the button from setting it client-side.)

**3.2 — Company select.** Drag a **Select List** `[Central Pane ▸ Gallery ▸ Items]` into `Filters`:
- **Name** = `P16_COMPANY` (rename it — it comes in as `P16_NEW`)
- `[List of Values ▸ Type]` = **SQL Query**:
  `SELECT COMPANY_NAME d, COMPANY_ID r FROM COMPANIES WHERE STATUS = 'ACTIVE' ORDER BY COMPANY_NAME`
- `[List of Values ▸ Display Extra/Null values]`: **Display null value = On**, Null Display Value = `All Companies`, Null Return Value = *(leave empty)*

**3.3 — Project select.** Drag another **Select List** into `Filters`:
- **Name** = `P16_PROJECT`
- `[List of Values ▸ Type]` = **SQL Query**:
  `SELECT PROJECT_KEY || ' — ' || PROJECT_NAME d, PROJECT_ID r FROM PROJECTS WHERE IS_ACTIVE = 'Y' ORDER BY PROJECT_KEY`
- **Display null value = On**, Null Display Value = `All Projects`

**3.4 — View toggle buttons.** Drag two buttons `[Central Pane ▸ Gallery ▸ Buttons]` into `Filters`:
- Button `NEEDS_ATTENTION`, Label `⚠ Needs attention`; Button `ALL_PROJECTS`, Label `All projects`.
- On **each** button set `[Behavior ▸ Action]` = **Defined by Dynamic Action** (a button with no action
  and no DA does nothing).

**3.5 — wire the Dynamic Actions** (`[Left Pane ▸ Dynamic Actions]`). All four refresh region
`Coverage by project`:

- **On each toggle button** — right-click → *Create Dynamic Action* (Event defaults to **Click**), then give it **two** true actions in order:
  1. **Set Value** — `[Settings ▸ Set Type]` = **Static Assignment**, `[Value]` = `needs` (on `NEEDS_ATTENTION`) / `all` (on `ALL_PROJECTS`); `[Affected Elements ▸ Selection Type]` = **Item(s)**, `[Item(s)]` = `P16_VIEW`.
     ⚠️ Set Type **must** be Static Assignment — *JavaScript Expression* would read `needs` as an undefined JS variable → `ReferenceError`.
  2. **Refresh** — `[Selection Type]` = **Region**, `[Region]` = `Coverage by project`.
- **On `P16_COMPANY`** and **on `P16_PROJECT`** — a Dynamic Action, Event = **Change**, single true action **Refresh** → region `Coverage by project`.

> **Simpler alternative to the two buttons:** make `P16_VIEW` a **Radio Group** item (static values
> `needs` / `all`) instead of Hidden, and put one **Change → Refresh** DA on it. One item, one DA, no
> per-button Set-Value wiring. The build above uses buttons to match the mockup's look.

---

## Step 4: Coverage by project (Region 3)

This region is a **Cards region** — one card per project, agents shown as tier-coloured chips inside
each card. (An Interactive Report with a control break *looks* like a grouped table, not the mockup's
cards; a Cards region is what actually reproduces the mockup. Verified against the offline reference
2026-07-07.)

Drag a new region `[Central Pane ▸ Gallery ▸ Regions]`, set `[Identification ▸ Type]` = **Cards**, name it
**`Coverage by project`**, and set `[Source ▸ Type]` = **SQL Query**.

**Region Source SQL** — paste into `[Source ▸ SQL Query]`. One row per active project; the agent chips
are built as HTML in `AGENT_CHIPS`, with each name run through `APEX_ESCAPE.HTML` so it is XSS-safe:

```sql
SELECT
    p.PROJECT_ID,
    p.PROJECT_NAME                                    AS CARD_TITLE,
    c.COMPANY_NAME || ' · ' || p.PROJECT_KEY          AS CARD_SUBTITLE,
    -- Warning badge: NULL = fully covered (no badge shown). Mutually exclusive.
    CASE
        WHEN COUNT(CASE WHEN u.USER_ID IS NOT NULL AND ap.TIER =  'L1' THEN 1 END) = 0
            THEN 'No L1'
        WHEN COUNT(CASE WHEN u.USER_ID IS NOT NULL AND ap.TIER <> 'L1' THEN 1 END) = 0
            THEN 'No L2+'
    END                                               AS COVERAGE_BADGE,
    -- Agent pill chips, tier-then-name order. Names HTML-escaped (XSS-safe).
    NVL(
      LISTAGG(
        CASE WHEN u.USER_ID IS NOT NULL THEN
            '<span class="agent-chip agent-chip--' || LOWER(ap.TIER) || '">'
            || APEX_ESCAPE.HTML(u.FULL_NAME) || ' (' || ap.TIER || ')</span>'
        END, ' '
      ) WITHIN GROUP (ORDER BY ap.TIER, u.FULL_NAME)
    , '<span class="agent-chip agent-chip--empty">No agents mapped</span>') AS AGENT_CHIPS
FROM PROJECTS  p
JOIN COMPANIES c            ON c.COMPANY_ID = p.COMPANY_ID
LEFT JOIN AGENT_PROJECTS ap ON ap.PROJECT_ID = p.PROJECT_ID
LEFT JOIN APP_USERS      u  ON u.USER_ID = ap.USER_ID AND u.STATUS = 'ACTIVE'
WHERE p.IS_ACTIVE = 'Y'
  AND (:P16_COMPANY IS NULL OR p.COMPANY_ID = :P16_COMPANY)
  AND (:P16_PROJECT IS NULL OR p.PROJECT_ID = :P16_PROJECT)
GROUP BY p.PROJECT_ID, p.PROJECT_NAME, c.COMPANY_NAME, p.PROJECT_KEY
HAVING NVL(:P16_VIEW,'all') = 'all'
    OR ( NVL(:P16_VIEW,'all') = 'needs'
         AND ( COUNT(CASE WHEN u.USER_ID IS NOT NULL AND ap.TIER =  'L1' THEN 1 END) = 0
            OR COUNT(CASE WHEN u.USER_ID IS NOT NULL AND ap.TIER <> 'L1' THEN 1 END) = 0 ))
ORDER BY p.PROJECT_KEY
```

Notes baked in: `NVL(:P16_VIEW,'all')` stops the page rendering blank before the toggle sets the item;
the `HAVING` is what makes **Needs attention** show only gap projects. **Do not** add
`LISTAGG(... ON OVERFLOW TRUNCATE ...)` — this instance's DB rejects that clause with
`ORA-00909: invalid number of arguments`; the default 4000-char LISTAGG is plenty for a project team.

Then set `[Source ▸ Page Items to Submit]` = `P16_VIEW,P16_COMPANY,P16_PROJECT` (see inventory).

**4.1 — map the columns to card slots** (`[Left Pane ▸ Rendering ▸ Coverage by project ▸ Attributes]`):

| Group ▸ Property | Set to |
|---|---|
| **Card ▸ Primary Key Column 1** | `PROJECT_ID` |
| **Title ▸ Column** | `CARD_TITLE` |
| **Subtitle ▸ Column** | `CARD_SUBTITLE` |
| **Body ▸ Advanced Formatting** | **On** |
| **Body ▸ HTML Expression** | `&AGENT_CHIPS!RAW.` |
| **Icon and Badge ▸ Badge Column** | `COVERAGE_BADGE` |
| **Icon and Badge ▸ Badge CSS Classes** | `cov-badge` |

> ⚠️ **Two escaping gotchas that make the chips show as literal `<span>` text:**
> 1. The Body must be **Advanced Formatting = On → HTML Expression** — plain *Body ▸ Column* HTML-escapes.
> 2. In the HTML Expression, reference the column as **`&AGENT_CHIPS!RAW.`** — a plain `&AGENT_CHIPS.`
>    is still escaped by APEX; the **`!RAW`** filter renders it as HTML. (Safe here because the names
>    were escaped in SQL.)

**4.2 — the "Manage Team" button** is a **card Action**, *not* a button dropped on the region (you
cannot drop an APEX Button into card/report rows). Under the region → **Actions** node → right-click →
**Create Action**:

| Action property | Set to |
|---|---|
| Identification ▸ **Type** | `Button` *(eyeball the enum label in your instance — Button / Menu / Full Card)* |
| Identification ▸ **Label** | `Manage Team` |
| Link ▸ **Target** | Page **11**, this app |
| Link ▸ **Set Items** | `P11_PROJECT_ID` = `&PROJECT_ID.` |
| Link ▸ **Clear Cache** | `11` |

This is the mockup's per-project button — the **only** door to editing the team (one door, one truth).
Page 16 stays read-only.

**4.3 — chip CSS.** `t-Badge` is the KPI-tile class (Region 1's), **not** an inline pill — there is no
built-in pill class, so define your own. Paste into `[Left Pane ▸ Rendering ▸ page root ▸ CSS ▸ Inline]`:

```css
.agent-chip{ display:inline-block; margin:2px; padding:2px 9px;
  border-radius:12px; font-size:11px; font-weight:600; line-height:18px;
  background:#e0f2fe; color:#0369a1; }
.agent-chip--l1{ background:#dcfce7; color:#15803d; }
.agent-chip--l2{ background:#e0f2fe; color:#0369a1; }
.agent-chip--l3{ background:#fef9c3; color:#92740a; }
.agent-chip--l4{ background:#ffedd5; color:#c2410c; }
.agent-chip--empty{ background:#f3f4f6; color:#6b7280; font-style:italic; }
.cov-badge{ background:#fee2e2; color:#b91c1c; font-weight:700; }
```

> **Honest layout limits of native Cards** (accept for the demo; a Classic Report with a custom row
> template is the only 100%-faithful alternative, at the cost of hand-written HTML): the slots stack
> **vertically** (Title → Subtitle → Body → footer button), so the Manage Team button sits in the card
> footer (not up on the header row as the mockup draws it), the subtitle can't sit inline beside the
> title, and the native badge is a **single colour** for the whole region (both "No L1" and "No L2+"
> share one colour — fine, both are warnings). Cards gets ~90% of the mockup declaratively.

---

## Step 5: Buttons / Processes / Validations

**None.** This page is a read-only rollup — no add/edit/delete, no processes. All team edits (map an
agent, change a tier, remove an agent) happen on the **Support Team** tab of Project Detail (page 11),
which enforces the "keep ≥1 L1 on an active project" and "reassign open tickets before removal" rules.
Reaching for an editable grid here would duplicate that logic and risk mapping an agent to the wrong
company — deliberately omitted, matching the mockup.

---

## Step 6: Authorization

- Page-level **Authorization Scheme:** select the page (root) node `[Left Pane ▸ Rendering]` and set
  `[Right Pane ▸ Security ▸ Authorization Scheme]` = `IS_SYSTEM_ADMIN` (the whole page — KPIs, filters, list).
- No tenant filter: System Admin sees **all** companies and projects by design, so the KPI and
  open-ticket counts intentionally span every tenant. This is the one place base tables are read
  directly, and it is safe precisely because the page is gated to the global-admin role.

---

## Step 7: Test It

| Test | Expected |
|------|----------|
| Sara (System Admin) | One card per active project; title = project name, subtitle = *company · key*, agents as tier-coloured chips |
| A project with no L1 mapped | Appears under **Needs attention**; **Missing L1** KPI counts it; red `No L1` badge on its card |
| A project with no agents | Card shows with a *No agents mapped* empty chip; counts in **Missing L1** and **No agents mapped** |
| Mike's chips | Appears (as `Mike Ops (L2)`) on ACME-IT, GLBX-IT, NW-APPS, NW-INFRA — never on an Initech card |
| Company filter = Northwind | Only Northwind projects' cards remain (verify `P16_COMPANY` in Session state after selecting) |
| Toggle **Needs attention** | Only gap projects show; **All projects** shows all — no *"one or more errors"* JS popup |
| Change a tier on page 11 | Immediately reflected here and in page 6's agent LOV |
| Log in as an agent/client | Page 16 not reachable (authorization blocks it) |

---

## Isolation Checklist

- [ ] Page + all three regions gated `IS_SYSTEM_ADMIN`
- [ ] Page is **read-only** — no add/edit/delete; team edits only via page 11's Support Team tab
- [ ] `Manage Team` card action targets page 11 with `PROJECT_ID` only — no tenant override
- [ ] Agent names in `AGENT_CHIPS` pass through `APEX_ESCAPE.HTML` (chips are raw HTML — never inject an unescaped name)
- [ ] Company/Project filters bind `:P16_COMPANY` / `:P16_PROJECT` (never string-concatenated)
- [ ] Global counts are intentional (System-Admin scope) and never exposed on any client-facing page
- [ ] Changes take effect immediately on pages 6 and 11

---

**Next:** move to `18-audit-log.md`.
