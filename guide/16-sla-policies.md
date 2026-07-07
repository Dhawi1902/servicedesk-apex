# Step 16 — SLA Policies (p15) (SHOULD)

> *Named SLA policies (Gold/Standard/Bronze/Internal) with per-severity targets, assigned to projects.
> Two sections: the **policy editing surface** (define targets once per policy) and a read-only
> **Project Assignments** rollup (which project runs on which policy). System Admin only.*

---

## Step 1: Create the Page

This page is built on a **Blank Page** — a master Interactive Grid (SLA policies) stacked above a detail
Interactive Grid (per-severity targets), both added **by hand in Step 2**. The Create Page wizard just
makes the empty page. Open your app in **App Builder**, click the green **Create Page** button (top-right),
and pick the **Blank Page** tile. The **Create Blank Page** wizard is a single screen:

> ***Page already blank?** If page 15 already exists as a blank page, skip the wizard and open it in Page
> Designer — set the **Authorization** below, then continue from Step 2.*

**Wizard screen — Page Definition:**

| Field | Set to | Notes |
|-------|--------|-------|
| Page Number | `15` | The SLA Policies page. |
| Name | `SLA Policies` | Also becomes the page Title. |
| Page Mode | `Normal` | Full page, not a dialog. |
| Use Breadcrumb | **On** | Shows the page title in the breadcrumb bar; the nav-menu link is still wired later (Step 19). |
| Breadcrumb Entry Name | `SLA Policies` | The page name — shown in the breadcrumb bar. |
| Use Navigation | **Off** | Same — skip for now. |

Click **Create Page**. You land on an **empty** page — no data source, no regions. Step 2 builds the two
Interactive Grids (master SLA policies + detail targets) and Step 3 adds the Project Assignments rollup.

**Then set the page authorization** — select the page root node in `[Left Pane ▸ Rendering]` and set
`[Right Pane ▸ Security ▸ Authorization Scheme]` = `IS_SYSTEM_ADMIN` (System Admin only; this is the
**Authorization** the fallback callout above refers to).

> **Faster alternative (optional):** APEX's **Master Detail → Stacked** wizard can auto-generate the two
> linked grids for you (master `SLA_POLICIES`, detail `SLA_TARGETS`, foreign key
> `SLA_TARGETS.SLA_POLICY_ID`) — it wires the master→detail link so you don't have to. The catch: you'd
> then replace each generated grid's Source SQL and columns to match Step 2, so it only helps if you're
> comfortable adapting the wizard's output. The Blank Page route above stays consistent with Steps 2–3.

Now in **Page Designer**, add a **Static Content** region at the top (intro card) —
`[Central Pane ▸ Gallery ▸ Regions]` drag onto `[Central Pane ▸ Layout]`, then `[Right Pane ▸ Identification ▸ Type]` = Static Content:

> **Named policies, assigned to projects** (industry pattern — service tiers). Targets are defined
> once per policy; each project is assigned a policy on its SLA tab. Response = max time to first
> agent response · Resolution = max time to resolve · Escalation = % of SLA elapsed before
> auto-escalation (FR-35). Projects with no assignment use the **Default** policy.

---

## Step 2: Section 1 — Policy Editing Surface (master/detail)

> *The mockup renders a card per policy, each with its severity grid and a governance footer. Build
> this as a **master Interactive Grid** on `SLA_POLICIES` plus a **detail Interactive Grid** on
> `SLA_TARGETS` filtered to the selected policy.*

### Master IG — SLA Policies

Create it from `[Central Pane ▸ Gallery ▸ Regions]` (drag onto `[Central Pane ▸ Layout]`), then `[Right Pane ▸ Identification ▸ Type]` = Interactive Grid. Region Source SQL goes in `[Right Pane ▸ Source ▸ SQL Query]`:

```sql
SELECT p.SLA_POLICY_ID,
       p.POLICY_NAME,
       p.IS_DEFAULT,
       p.DESCRIPTION,
       p.EFFECTIVE_FROM,
       p.APPROVED_BY,
       u.FULL_NAME AS APPROVED_BY_NAME,
       p.NOTES,
       ( SELECT COUNT(*)
           FROM PROJECTS pr
          WHERE pr.IS_ACTIVE = 'Y'
            AND ( pr.SLA_POLICY_ID = p.SLA_POLICY_ID
                  OR ( pr.SLA_POLICY_ID IS NULL AND p.IS_DEFAULT = 'Y' ) )
       ) AS USED_BY_COUNT
  FROM SLA_POLICIES p
  LEFT JOIN APP_USERS u ON u.USER_ID = p.APPROVED_BY
 ORDER BY p.IS_DEFAULT DESC, p.POLICY_NAME
```

Columns (in the mockup's order) — each is a node under the region in `[Left Pane ▸ Rendering]`; set its type/LOV/format via `[Right Pane ▸ Identification ▸ Type]` and the relevant `[Right Pane ▸ …]` groups:

| Column | Source | Notes |
|--------|--------|-------|
| Policy Name | `POLICY_NAME` | required, unique (`SLA_POLICIES_NAME_UK`) |
| Default | `IS_DEFAULT` | switch Y/N — "Default" tag = applies to projects with no policy |
| Description | `DESCRIPTION` | free text |
| Effective From | `EFFECTIVE_FROM` | date picker (ISO 20000 §8.6.3 governance) |
| Approved By | `APPROVED_BY` | LOV on `APP_USERS` (display `FULL_NAME`, return `USER_ID`) |
| Notes | `NOTES` | free text |
| Used By | `USED_BY_COUNT` | display-only — "blast radius" project count |

**Only one default** — a master-IG row process (`[Left Pane ▸ Processing]`) or DA (`[Left Pane ▸ Dynamic Actions]`) that clears others when a row is set default; the PL/SQL goes in `[Right Pane ▸ Source ▸ PL/SQL Code]`:

```sql
UPDATE SLA_POLICIES
   SET IS_DEFAULT = 'N'
 WHERE IS_DEFAULT = 'Y'
   AND SLA_POLICY_ID <> :SLA_POLICY_ID;
```

(The `SLA_POLICIES_ONEDEF_UX` function-based unique index also enforces "at most one default" at the DB.)

### Detail IG — SLA Targets (selected policy)

Add a second `[Central Pane ▸ Gallery ▸ Regions]` Interactive Grid (`[Right Pane ▸ Identification ▸ Type]` = Interactive Grid). Region Source SQL in `[Right Pane ▸ Source ▸ SQL Query]` — filtered to the master's selected policy:

```sql
SELECT SLA_TARGET_ID,
       SLA_POLICY_ID,
       SEVERITY,
       RESPONSE_HOURS,
       RESOLUTION_DAYS,
       ESCALATION_PCT
  FROM SLA_TARGETS
 WHERE SLA_POLICY_ID = :P15_SLA_POLICY_ID
 ORDER BY DECODE(SEVERITY, 'Critical',1, 'Major',2, 'Minor',3, 'Low',4)
```

Wire the master/detail link: create a hidden page item `P15_SLA_POLICY_ID` (`[Central Pane ▸ Gallery ▸ Items]` → `[Right Pane ▸ Identification ▸ Type]` = Hidden), then a `[Left Pane ▸ Dynamic Actions]` on the master IG's **Selection Change [Interactive Grid]** event that sets `P15_SLA_POLICY_ID` to the selected `SLA_POLICY_ID` and refreshes the detail region. Columns (mockup order) — each column node lives under the detail region in `[Left Pane ▸ Rendering]`:

| Column | Source | Display |
|--------|--------|---------|
| Severity | `SEVERITY` | Critical / Major / Minor / Low |
| Response Time | `RESPONSE_HOURS` | number, hours (mockup shows `12h`) |
| Resolution Time | `RESOLUTION_DAYS` | number, days (mockup shows `3d`) |
| Escalation % | `ESCALATION_PCT` | number 1–100 (mockup shows `80%`) |

**Validations (detail IG)** — add each as a Validation under `[Left Pane ▸ Processing]` (set its rule via the `[Right Pane ▸ Validation ▸ …]` attributes):
- All 4 severities present per policy (Critical/Major/Minor/Low).
- `RESPONSE_HOURS`, `RESOLUTION_DAYS` positive.
- `ESCALATION_PCT` between 1 and 100.

---

## Step 3: Section 2 — Project Assignments (read-only rollup)

> *A **Classic Report** showing which project runs on which policy, with live ticket counts. Read-only
> here — policy assignment is changed on each **project's** SLA tab (page 11), not on this page.*

Add it from `[Central Pane ▸ Gallery ▸ Regions]` (drag onto `[Central Pane ▸ Layout]`), `[Right Pane ▸ Identification ▸ Type]` = Classic Report. Region Source SQL in `[Right Pane ▸ Source ▸ SQL Query]`:

```sql
SELECT pr.PROJECT_ID,
       pr.COMPANY_ID,
       pr.PROJECT_KEY,
       pr.PROJECT_NAME,
       c.COMPANY_NAME,
       NVL(sp.POLICY_NAME, def.POLICY_NAME) AS SLA_POLICY_NAME,
       CASE WHEN pr.SLA_POLICY_ID IS NULL THEN 'Y' ELSE 'N' END AS IS_DEFAULT_APPLIED,
       ( SELECT COUNT(*) FROM V_MY_TICKETS t
          WHERE t.PROJECT_ID = pr.PROJECT_ID
            AND t.STATUS NOT IN ('Resolved','Closed') ) AS OPEN_COUNT,
       ( SELECT COUNT(*) FROM V_MY_TICKETS t
          WHERE t.PROJECT_ID = pr.PROJECT_ID
            AND t.SLA_DUE_DATE < SYSDATE
            AND t.STATUS NOT IN ('Resolved','Closed') ) AS BREACHED_COUNT
  FROM PROJECTS pr
  JOIN COMPANIES c            ON c.COMPANY_ID = pr.COMPANY_ID
  LEFT JOIN SLA_POLICIES sp   ON sp.SLA_POLICY_ID = pr.SLA_POLICY_ID
  LEFT JOIN SLA_POLICIES def  ON def.IS_DEFAULT = 'Y'
 WHERE pr.IS_ACTIVE = 'Y'
   AND ( :P15_COMPANY_FILTER = 'all' OR pr.COMPANY_ID = :P15_COMPANY_FILTER )
 ORDER BY c.COMPANY_NAME, pr.PROJECT_KEY
```

> *Ticket counts read `V_MY_TICKETS`, never the base table — the one rule. On this System-Admin-only
> page the view returns all tenants, which is exactly the cross-company overview intended here.*

Columns (mockup order) — each is a column node under the report region in `[Left Pane ▸ Rendering]`; the **Actions** link is set on that column via `[Right Pane ▸ Link ▸ Target]` (page 11, `P11_PROJECT_ID = #PROJECT_ID#`):

| Column | Source | Notes |
|--------|--------|-------|
| Project | `PROJECT_KEY` + `PROJECT_NAME` | key bold, name muted |
| Company | `COMPANY_NAME` | |
| SLA Policy | `SLA_POLICY_NAME` | resolved policy; show "(default)" when `IS_DEFAULT_APPLIED = 'Y'`; "⚠ none" if no policy and no default exists |
| Open | `OPEN_COUNT` | open (non-Resolved/Closed) tickets |
| Breached | `BREACHED_COUNT` | past `SLA_DUE_DATE` and still open |
| Actions | link | **⚙ Manage** → page 11 (Project Detail, SLA tab) with `P11_PROJECT_ID = #PROJECT_ID#` |

**Facet / filter:** a **Company** select — create `P15_COMPANY_FILTER` from `[Central Pane ▸ Gallery ▸ Items]` (`[Right Pane ▸ Identification ▸ Type]` = Select List), positioned above the report on `[Central Pane ▸ Layout]`; set its LOV via `[Right Pane ▸ List of Values ▸ …]` (SQL on `COMPANIES` where `STATUS = 'ACTIVE'`, default `all`); a **N projects** result count. Add a `[Left Pane ▸ Dynamic Actions]` on its Change event to refresh the report region.

The Manage link is the only action — it navigates to the project's own SLA tab; assignment is never
edited on this rollup.

---

## Step 4: Test It

| Test | Expected |
|------|----------|
| Sara (System Admin) opens page | 4 seeded policy cards; Default tagged; each with 4 severity rows + governance footer |
| Select a policy in master IG | Detail grid shows that policy's 4 severity targets |
| Set "Standard" as default | Previous default cleared (one-default rule holds) |
| Project Assignments section | Every active project listed with its resolved policy, Open + Breached counts |
| Project with no policy assigned | SLA Policy shows the Default policy name + "(default)" |
| Filter Company = Acme | Rollup narrows to Acme's projects; count updates |
| Click ⚙ Manage on a row | Navigates to page 11 (Project Detail) for that project |
| Anna (Client User) URL-jumps to page 15 | Authorization error (`IS_SYSTEM_ADMIN`) |

---

## Isolation Checklist

- [ ] Page gated `IS_SYSTEM_ADMIN` (whole page + both regions).
- [ ] `SLA_POLICIES` / `SLA_TARGETS` are global config (no `company_id`) — edited only by System Admin.
- [ ] Project Assignments ticket counts read `FROM V_MY_TICKETS`, never `TICKETS` (cross-tenant view is intentional for the admin-only overview).
- [ ] Company filter bound as `:P15_COMPANY_FILTER` — never string-concatenated.
- [ ] Manage link passes `PROJECT_ID` only; page 11 re-checks access server-side.

---

**Next:** move to `17-agent-projects.md`.
