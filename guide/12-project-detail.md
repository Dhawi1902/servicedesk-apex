# Step 12 — Project Detail Hub (p11) (MUST)

> One door for everything about a project: **Details · Support Team · SLA Policy · Categories · Access**. Flat pages browse; this hub configures.

---

## Step 1: Create the Page

**App Builder → Create Page → Blank Page**
- Page Number: `11`
- Name: `Project Detail`
- Breadcrumb entry: `<Company> / Projects / <Project Name>`

Add a hidden item `P11_PROJECT_ID` (passed from page 10) — `[Gallery ▸ Items]` drag a Hidden item onto `[Central ▸ Layout]`, then `[Right ▸ Identification ▸ Type]` = Hidden. Add a **Back to Projects** button (top-right) — `[Gallery ▸ Buttons]` onto `[Central ▸ Layout]`, then `[Right ▸ Behavior ▸ Action]` = Redirect to Page in this Application → page 10.

---

## Step 2: Add the Access Guard

`[Left ▸ Processing]` add a Before-Header PL/SQL process (`[Right ▸ Execution ▸ Point]` = Before Header, `[Right ▸ Identification ▸ Type]` = PL/SQL Code, code into `[Right ▸ Source ▸ PL/SQL Code]`) — anyone who can't see this project in `V_MY_PROJECTS` is bounced. This covers URL-tampering for every role (System Admin all, Client Admin own company, Agent via `AGENT_PROJECTS`, Client User via Open + invited Restricted):

```sql
DECLARE l_ok PLS_INTEGER;
BEGIN
  SELECT COUNT(*) INTO l_ok FROM V_MY_PROJECTS WHERE PROJECT_ID = :P11_PROJECT_ID;
  IF l_ok = 0 THEN
    APEX_UTIL.REDIRECT_URL(APEX_PAGE.GET_URL(p_page => 10));
  END IF;
END;
```

---

## Step 3: Add the Header (stats region)

`[Gallery ▸ Regions]` drag a region onto `[Central ▸ Layout]`, `[Right ▸ Source ▸ SQL Query]` = the query below. Breadcrumb `<Company> / Project`, then the project name + key, a **visibility** badge (Open / Restricted) and an **active** badge, followed by stat cards.

```sql
SELECT p.PROJECT_NAME, p.PROJECT_KEY, c.COMPANY_NAME, p.VISIBILITY, p.IS_ACTIVE,
       (SELECT COUNT(*) FROM V_MY_TICKETS WHERE PROJECT_ID = :P11_PROJECT_ID
          AND STATUS NOT IN ('Resolved','Closed'))                    AS OPEN_TICKETS,
       (SELECT COUNT(*) FROM V_MY_TICKETS WHERE PROJECT_ID = :P11_PROJECT_ID
          AND STATUS NOT IN ('Resolved','Closed')
          AND SLA_DUE_DATE < SYSTIMESTAMP)                            AS SLA_BREACHED,
       (SELECT COUNT(*) FROM AGENT_PROJECTS WHERE PROJECT_ID = :P11_PROJECT_ID) AS TEAM_AGENTS,
       (SELECT COUNT(*) FROM USER_PROJECTS  WHERE PROJECT_ID = :P11_PROJECT_ID) AS INVITED_USERS
  FROM PROJECTS p JOIN COMPANIES c ON c.COMPANY_ID = p.COMPANY_ID
 WHERE p.PROJECT_ID = :P11_PROJECT_ID
```

Stat cards, in mockup order: **Open Tickets** · **SLA Breached** (show only when `> 0` — `[Right ▸ Server-side Condition ▸ Type]`) · **Team Agents** · **Invited Users** (show only when visibility = `RESTRICTED` — `[Right ▸ Server-side Condition ▸ Type]`).

---

## Step 4: Add Tabs (Region Display Selector)

`[Gallery ▸ Regions]` drag a parent region onto `[Central ▸ Layout]` and set `[Right ▸ Appearance ▸ Template]` = Region Display Selector; each tab below is a child region under it. Five tabs, exactly as the mockup: **Details · Support Team · SLA Policy · Categories · Access**.

### Tab 1 — Details
`[Gallery ▸ Regions]` drag a child region onto `[Central ▸ Layout]`, `[Right ▸ Source ▸ SQL Query]` = the query below. Read-only display fields, in mockup order: **Project Name · Key · Company · Created · Description**. Add an **✎ Edit** button (`[Gallery ▸ Buttons]`; Authorization via `[Right ▸ Security ▸ Authorization Scheme]` = `IS_SYSTEM_ADMIN`) that opens the project edit modal (Name, Key, Description, Visibility, Active, SLA Policy LOV). Below the fields, a note explaining Open vs Restricted (decision Q).

```sql
SELECT p.PROJECT_NAME, p.PROJECT_KEY, c.COMPANY_NAME,
       TO_CHAR(p.CREATED_AT,'YYYY-MM-DD') AS CREATED, p.DESCRIPTION, p.VISIBILITY
  FROM PROJECTS p JOIN COMPANIES c ON c.COMPANY_ID = p.COMPANY_ID
 WHERE p.PROJECT_ID = :P11_PROJECT_ID
```

### Tab 2 — Support Team
`[Gallery ▸ Regions]` drag a child region onto `[Central ▸ Layout]`, `[Right ▸ Identification ▸ Type]` = Classic Report (or Interactive Grid), `[Right ▸ Source ▸ SQL Query]` = the query below. Classic Report / IG on `AGENT_PROJECTS` for this project.

```sql
SELECT u.FULL_NAME, ap.TIER, u.STATUS,
       (SELECT COUNT(*) FROM V_MY_TICKETS t
         WHERE t.ASSIGNED_TO = ap.USER_ID AND t.PROJECT_ID = :P11_PROJECT_ID
           AND t.STATUS NOT IN ('Resolved','Closed'))        AS OPEN_HERE,
       (SELECT COUNT(*) FROM AGENT_PROJECTS x WHERE x.USER_ID = ap.USER_ID) AS PROJECTS_COVERED,
       ap.USER_ID
  FROM AGENT_PROJECTS ap JOIN APP_USERS u ON u.USER_ID = ap.USER_ID
 WHERE ap.PROJECT_ID = :P11_PROJECT_ID
```

| Column | Notes |
|--------|-------|
| `FULL_NAME` | Agent (avatar cosmetic) |
| `TIER` | L1–L4, per-project (decision M) |
| `STATUS` | Active / Inactive |
| `OPEN_HERE` | Open tickets this agent holds **on this project** |
| `PROJECTS_COVERED` | How many projects the agent covers total |
| Actions | **✕ Remove** button — Authorization `IS_SYSTEM_ADMIN` (`[Right ▸ Security ▸ Authorization Scheme]`) |

- Button **+ Add Agent** (`[Gallery ▸ Buttons]`; Authorization `[Right ▸ Security ▸ Authorization Scheme]` = `IS_SYSTEM_ADMIN`) opens the map-agent modal (agent + tier).
- Region header carries the coverage warnings (cosmetic badges): **⚠ No L1** (clients could assign nobody, FR-10) and **⚠ No L2+** (auto-escalation has nowhere to go, FR-35).
- Empty state: *"No agents mapped — this project is in a broken state (FR-10)."*
- **Remove** validation (`[Left ▸ Processing]` a Validation, or a guard in the Remove process): block when the agent still holds open tickets here, and keep ≥1 active **L1** on an active project (Flows 3/4 gates).

### Tab 3 — SLA Policy (FR-23)
`[Gallery ▸ Regions]` drag a child region onto `[Central ▸ Layout]`. The **one door** for changing a project's SLA. A select assigns the policy (System Admin), then a read-only targets table shows that policy's per-severity rows.

- **Assign policy** (Authorization `[Right ▸ Security ▸ Authorization Scheme]` = `IS_SYSTEM_ADMIN`): a Select item `P11_SLA_POLICY_ID` (`[Gallery ▸ Items]`; `[Right ▸ Identification ▸ Type]` = Select List, `[Right ▸ List of Values ▸ Type]` = SQL Query from `SLA_POLICIES`, first option *"— Default policy (<name>) —"* = NULL). Its change process (`[Left ▸ Processing]`, `[Right ▸ Source ▸ PL/SQL Code]`) updates `PROJECTS.SLA_POLICY_ID` after re-checking the project is visible. Non-admins see the assigned policy name as read-only.
- **Manage policies →** link to the SLA Policies page (page 16).

Targets table — `[Gallery ▸ Regions]` a Classic Report, `[Right ▸ Source ▸ SQL Query]` = the query below (resolves to the assigned policy, else the default policy):

```sql
SELECT st.SEVERITY, st.RESPONSE_HOURS, st.RESOLUTION_DAYS, st.ESCALATION_PCT
  FROM SLA_TARGETS st
 WHERE st.SLA_POLICY_ID = NVL(
         (SELECT SLA_POLICY_ID FROM PROJECTS WHERE PROJECT_ID = :P11_PROJECT_ID),
         (SELECT SLA_POLICY_ID FROM SLA_POLICIES WHERE IS_DEFAULT = 'Y'))
 ORDER BY CASE st.SEVERITY WHEN 'Critical' THEN 1 WHEN 'Major' THEN 2
                           WHEN 'Minor' THEN 3 ELSE 4 END
```

| Column | Notes |
|--------|-------|
| `SEVERITY` | Critical / Major / Minor / Low |
| `RESPONSE_HOURS` | Label **Response Time** (display `h`) |
| `RESOLUTION_DAYS` | Label **Resolution Time** (display `d`) |
| `ESCALATION_PCT` | Label **Escalation %** |

Note: targets are the policy's — edit them on the SLA Policies page (affects every project on that policy). New tickets stamp `SLA_DUE_DATE` from the policy at creation; existing tickets keep their stamped dates.

### Tab 4 — Categories
`[Gallery ▸ Regions]` drag a child region (Classic Report / IG) onto `[Central ▸ Layout]`, `[Right ▸ Source ▸ SQL Query]` = the query below. Hybrid model, two doors / one table. Lists project-specific rows plus inherited company-wide / global rows applicable here. Source `V_MY_CATEGORIES` (never the base table).

```sql
SELECT c.CATEGORY_NAME,
       CASE WHEN c.PROJECT_ID = :P11_PROJECT_ID THEN 'Project-specific'
            WHEN c.COMPANY_ID IS NULL           THEN 'Global (inherited)'
            ELSE 'Company-wide (inherited)' END AS SCOPE,
       c.DESCRIPTION,
       'Active' AS STATUS,
       c.CATEGORY_ID
  FROM V_MY_CATEGORIES c
 WHERE c.PROJECT_ID = :P11_PROJECT_ID
    OR ( c.PROJECT_ID IS NULL
         AND ( c.COMPANY_ID IS NULL
               OR c.COMPANY_ID = (SELECT COMPANY_ID FROM PROJECTS
                                   WHERE PROJECT_ID = :P11_PROJECT_ID) ) )
```

| Column | Notes |
|--------|-------|
| `CATEGORY_NAME` | Category (project-specific rows bold in mockup — cosmetic) |
| `SCOPE` | Project-specific / Company-wide (inherited) / Global (inherited) |
| `DESCRIPTION` | Guidance text (FR-34 pattern) |
| `STATUS` | Literal `Active` — `CATEGORIES` has **no status column** in the 13-table schema; flagged as a mockup-only field (do not invent a column) |
| Actions | Project-specific rows: **✎ Edit** (Authorization `[Right ▸ Security ▸ Authorization Scheme]` = `IS_SYSTEM_ADMIN`); inherited rows: read-only, *"managed on Categories page"* |

Button **+ Add Project Category** (`[Gallery ▸ Buttons]`; Authorization `[Right ▸ Security ▸ Authorization Scheme]` = `IS_SYSTEM_ADMIN`). Empty state: *"No categories apply to this project."*

### Tab 5 — Access
`[Gallery ▸ Regions]` drag a child region onto `[Central ▸ Layout]`. Two variants keyed on visibility (both always available; the tab is not hidden) — build each as its own report region with a `[Right ▸ Server-side Condition ▸ Type]` on the project's visibility:

**Restricted** (`VISIBILITY = 'RESTRICTED'` — `[Right ▸ Server-side Condition ▸ Type]`) — invited users only (`USER_PROJECTS`, decision Q); `[Right ▸ Source ▸ SQL Query]` = the query below:

```sql
SELECT u.FULL_NAME, u.EMAIL, d.DEPARTMENT_NAME, up.USER_ID
  FROM USER_PROJECTS up
  JOIN APP_USERS u    ON u.USER_ID = up.USER_ID
  LEFT JOIN DEPARTMENTS d ON d.DEPARTMENT_ID = u.DEPARTMENT_ID
 WHERE up.PROJECT_ID = :P11_PROJECT_ID
```

Columns **User · Email · Department · Actions** (Actions = **✕ Revoke**). Button **+ Invite User** (`[Gallery ▸ Buttons]`). Empty state: *"Nobody invited yet — this project is invisible to all &lt;Company&gt; users."*

**Open** (`VISIBILITY = 'OPEN'` — `[Right ▸ Server-side Condition ▸ Type]`) — read-only roster; every active company user sees the project automatically; `[Right ▸ Source ▸ SQL Query]` = the query below:

```sql
SELECT u.FULL_NAME, u.EMAIL, u.DEFAULT_ROLE AS LANDING_ROLE, d.DEPARTMENT_NAME
  FROM APP_USERS u
  LEFT JOIN DEPARTMENTS d ON d.DEPARTMENT_ID = u.DEPARTMENT_ID
 WHERE u.COMPANY_ID = (SELECT COMPANY_ID FROM PROJECTS WHERE PROJECT_ID = :P11_PROJECT_ID)
   AND u.STATUS = 'ACTIVE'
```

Columns **User · Email · Landing Role · Department** (all read-only).

**Access authorization** (Invite / Revoke buttons, and the Restricted grid) — apply this as the button/region `[Right ▸ Security ▸ Authorization Scheme]` (or a `[Right ▸ Server-side Condition ▸ Type]` where an authorization scheme isn't reusable): visible when

```
:APP_ROLE = 'SYSTEM_ADMIN'
  OR (:APP_ROLE = 'CLIENT_ADMIN'
      AND (SELECT COMPANY_ID FROM PROJECTS WHERE PROJECT_ID = :P11_PROJECT_ID) = :APP_COMPANY_ID)
```

Invite/Revoke DML (`[Left ▸ Processing]`, `[Right ▸ Source ▸ PL/SQL Code]`) must re-verify server-side: the project is Restricted **and** visible to the caller (`V_MY_PROJECTS`), and the invited user belongs to the project's company.

---

## Step 5: Authorization Summary

| Tab / action | Who |
|--------------|-----|
| View all tabs (read-only) | Anyone who passes the access guard |
| Details **Edit**, Team **Add/Remove**, SLA **Assign policy**, **Add Project Category**, Category **Edit** | `IS_SYSTEM_ADMIN` |
| Access **Invite / Revoke** | System Admin, or Client Admin of the project's company |

---

## Step 6: Test It

| Test | Expected |
|------|----------|
| Anna (Client User) opens an Acme **Open** project | All tabs read-only; Access shows the Acme roster |
| Anna URL-tampers to a Globex project | Redirected to page 10 |
| Mike (Agent) opens a project he covers | Read-only; his row shows in Support Team |
| Sara (System Admin) | All tabs editable; Add/Remove/Assign/Invite visible |
| Bob (Client Admin) on a **Restricted** Acme project | Access tab: can Invite/Revoke Acme users; other tabs read-only |
| Restricted project with no invites | Invited-users stat + Access empty-state shown |

---

## Isolation Checklist

- [ ] URL-tamper → redirected to page 10 (guard on `V_MY_PROJECTS`)
- [ ] Ticket stats (Open / SLA Breached) and Support-Team `OPEN_HERE` use `V_MY_TICKETS`
- [ ] Categories tab sources `V_MY_CATEGORIES`, never the base table
- [ ] Invite/Revoke DML re-checks project visibility + Restricted + invited user's company
- [ ] SLA policy change re-checks project visibility before updating `PROJECTS`
- [ ] Team/SLA/Category edits gated `IS_SYSTEM_ADMIN`; Access gated to admin or same-company Client Admin

---

**Next:** you've finished all MUST pages! Move to `13-my-company.md` for SHOULD pages.
