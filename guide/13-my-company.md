# Step 13 — My Company (p12) (SHOULD)

> *One page, two hats: clients see their **own** company (read-only); System Admin opens **any**
> company (editable, via the Manage/View link on page 9 Companies). Support Agents don't get this page.
> Mirrors the mockup Company Detail (page 17): a stat header + three tabs — **Projects**,
> **Departments**, **Client Admins**.*

---

## Step 1: Create the Page

This page is a **Blank Page** — an empty canvas we fill by hand (no data-source wizard, because it's a
tabbed hub, not a single report or form). Open your app in **App Builder** and click the green
**Create Page** button (top-right), then pick the **Blank Page** tile. The **Create Blank Page** wizard is
a **single screen**:

> **Page already blank?** This page is a Blank Page anyway. If page 12 already exists, open it in Page
> Designer and skip the create step — set the page **Condition** below, then continue.

**Wizard screen — Create Blank Page:**

| Field | Set to | Notes |
|-------|--------|-------|
| Page Number | `12` | The My Company page (also opened from page 9 Companies via Manage/View). |
| Name | `My Company` | Also becomes the page Title. |
| Page Mode | `Normal` | Full page, not a dialog. |
| Use Breadcrumb | **Off** | Breadcrumb / title text is set below and wired with nav in Step 19. |
| Use Navigation | **Off** | The nav entry (clients only) is added in Step 19. |

There is **no data-source screen** — a Blank Page has no region yet.

Click **Create Page**. APEX drops you into Page Designer with an **empty** page 12 (no regions). Every
tile and tab is added by hand in the Steps that follow (Step 3 the stat header, Steps 4–6 the three
tabs). First, set the **page-level Condition** so Support Agents never load it: select the page root node
in `[Left Pane ▸ Rendering]` and set `[Right Pane ▸ Server-side Condition ▸ Type]` to *Expression* (PL/SQL) with
`:APP_ROLE != 'SUPPORT_AGENT'` (also summarised in Step 7).

Add hidden items (`[Central Pane ▸ Gallery ▸ Items]` drag a Hidden item onto `[Central Pane ▸ Layout]`):
- `P12_COMPANY_ID` — the company being viewed (locked below).

Breadcrumb / title text (Title region or page title):
- System Admin: `Administration / Companies / &P12_COMPANY_NAME.`
- Client: `My Company / &P12_COMPANY_NAME.`

---

## Step 2: Lock the Company

**Before Header** process — non-admins can only ever see their own company. `[Left Pane ▸ Processing]` create a **Process**, Point = *Before Header*; PL/SQL goes in `[Right Pane ▸ Source ▸ PL/SQL Code]`:

```sql
BEGIN
  IF :APP_ROLE = 'SYSTEM_ADMIN' THEN
    NULL;                                   -- keep the URL value (from page 9 Manage)
  ELSE
    :P12_COMPANY_ID := NV('APP_COMPANY_ID');-- overwrite any tampered URL value
  END IF;
END;
```

**Before Header** process — fetch the company header (name + status), fail-closed. A second `[Left Pane ▸ Processing]` Process (Point = *Before Header*, sequenced after the lock); PL/SQL in `[Right Pane ▸ Source ▸ PL/SQL Code]`:

```sql
BEGIN
  SELECT COMPANY_NAME, STATUS
    INTO :P12_COMPANY_NAME, :P12_STATUS
    FROM COMPANIES
   WHERE COMPANY_ID = :P12_COMPANY_ID
     AND ( :APP_ROLE = 'SYSTEM_ADMIN'
           OR COMPANY_ID = NV('APP_COMPANY_ID') );   -- belt-and-braces
EXCEPTION
  WHEN NO_DATA_FOUND THEN
    apex_error.add_error(
      p_message          => 'Company not available.',
      p_display_location  => apex_error.c_inline_in_notification);
END;
```

(Add hidden items `P12_COMPANY_NAME`, `P12_STATUS` for the header.)

---

## Step 3: Header Stats (Static Content / Cards region)

Five stat tiles across the top, matching the mockup header. `[Central Pane ▸ Gallery ▸ Regions]` drag a **Cards**
region (or a Classic Report) onto `[Central Pane ▸ Layout]` and set `[Right Pane ▸ Identification ▸ Type]` = Cards.
**SLA Breached** shows only when the count > 0 — put its `> 0` rule in
`[Right Pane ▸ Server-side Condition ▸ Type]`.

| Tile | Value SQL (bind on `:P12_COMPANY_ID`) |
|------|----------------------------------------|
| **Open Tickets** | `SELECT COUNT(*) FROM V_MY_TICKETS WHERE COMPANY_ID = :P12_COMPANY_ID AND STATUS NOT IN ('Resolved','Closed')` |
| **SLA Breached** | `SELECT COUNT(*) FROM V_MY_TICKETS WHERE COMPANY_ID = :P12_COMPANY_ID AND SLA_DUE_DATE < SYSTIMESTAMP AND STATUS NOT IN ('Resolved','Closed')` — server condition: value `> 0` |
| **Projects** | `SELECT COUNT(*) FROM V_MY_PROJECTS WHERE COMPANY_ID = :P12_COMPANY_ID` |
| **Users** | `SELECT COUNT(*) FROM APP_USERS WHERE COMPANY_ID = :P12_COMPANY_ID` |
| **Client Admins** | `SELECT COUNT(DISTINCT ur.USER_ID) FROM USER_ROLES ur JOIN APP_USERS u ON u.USER_ID = ur.USER_ID WHERE u.COMPANY_ID = :P12_COMPANY_ID AND ur.ROLE = 'CLIENT_ADMIN'` |

> *The ticket/project tiles read `V_MY_*`, so a Client User's counts already exclude uninvited
> Restricted projects (isolation stays in the view, not the tile). `Users`/`Client Admins` are
> company-metadata counts and are safe to read from base tables once `P12_COMPANY_ID` is locked.*

---

## Step 4: Tab — Projects (default)

`[Central Pane ▸ Gallery ▸ Regions]` drag a **Classic Report** (or Interactive Report) onto `[Central Pane ▸ Layout]`;
`[Right Pane ▸ Appearance ▸ Template]` = *Tabs Container* child (or place under a Tabs region) with **Tab: Projects**.

Region Source (`[Right Pane ▸ Source ▸ SQL Query]`):

```sql
SELECT p.PROJECT_ID,
       p.PROJECT_NAME,
       p.PROJECT_KEY,
       p.VISIBILITY,
       (SELECT COUNT(*) FROM V_MY_TICKETS t WHERE t.PROJECT_ID = p.PROJECT_ID)        AS TICKETS,
       (SELECT COUNT(*) FROM AGENT_PROJECTS ap WHERE ap.PROJECT_ID = p.PROJECT_ID) AS AGENTS
  FROM V_MY_PROJECTS p
 WHERE p.COMPANY_ID = :P12_COMPANY_ID
 ORDER BY p.PROJECT_NAME
```

Columns, in this order:

| Column | Source | Notes |
|--------|--------|-------|
| Project Name | `PROJECT_NAME` | bold |
| Key | `PROJECT_KEY` | |
| Visibility | `VISIBILITY` | show raw value `OPEN` / `RESTRICTED` (badge styling later) |
| Tickets | `TICKETS` | count |
| Agents | `AGENTS` | count |
| Actions | link column | see below |

**Actions** (per-row links):
- System Admin: **⚙ Manage** → `19-project-detail.html` equivalent (Project Detail page, `id = PROJECT_ID`) **and** **✎ Edit** (project edit modal).
- Client: **👁 View** → Project Detail page (read-only), `id = PROJECT_ID`.
  Express as two link columns, each gated at `[Right Pane ▸ Server-side Condition ▸ Type]` on `:APP_ROLE`.

**Region button** (top-right, System Admin only): `[Central Pane ▸ Gallery ▸ Buttons]` drag a button into the region
header, **+ Add Project** → project create modal, pre-set company = `:P12_COMPANY_ID`. Gate it at
`[Right Pane ▸ Security ▸ Authorization Scheme]` = `System Admin`.

Empty state (`[Right Pane ▸ Appearance ▸ No Data Found Message]`): `No projects for this company.`

Footer note (static): *Support team, SLA policy, categories and invitations are configured per
project — use ⚙ Manage (one door, one truth).*

---

## Step 5: Tab — Departments

`[Central Pane ▸ Gallery ▸ Regions]` drag a **Classic Report** onto `[Central Pane ▸ Layout]`, **Tab: Departments**.
Departments are **metadata only** (decision N) — routing/reporting, never a visibility filter.

Region Source (`[Right Pane ▸ Source ▸ SQL Query]`):

```sql
SELECT d.DEPARTMENT_ID,
       d.DEPARTMENT_NAME,
       (SELECT COUNT(*) FROM APP_USERS u WHERE u.DEPARTMENT_ID = d.DEPARTMENT_ID) AS USERS
  FROM DEPARTMENTS d
 WHERE d.COMPANY_ID = :P12_COMPANY_ID
 ORDER BY d.DEPARTMENT_NAME
```

Columns:

| Column | Source | Notes |
|--------|--------|-------|
| Department | `DEPARTMENT_NAME` | bold |
| Users | `USERS` | count |
| Actions | link column | System Admin only — **✎ Edit** (department edit modal) |

**Region button** (top-right, System Admin only): `[Central Pane ▸ Gallery ▸ Buttons]` into the region header,
**+ Add Department** → department create modal, company = `:P12_COMPANY_ID`. Gate it at
`[Right Pane ▸ Security ▸ Authorization Scheme]` = `System Admin`.

Empty state (`[Right Pane ▸ Appearance ▸ No Data Found Message]`): `No departments yet — users and tickets can be filed without one.`

Footer note (static): *Departments are metadata only (decision N) — stamped on users and tickets
for routing/reporting, never a visibility filter. Set a user's department on the Users page (✎ Edit).*

---

## Step 6: Tab — Client Admins

`[Central Pane ▸ Gallery ▸ Regions]` drag a **Classic Report** onto `[Central Pane ▸ Layout]`, **Tab: Client Admins**.
Who manages this company's side of the desk.

Region Source (`[Right Pane ▸ Source ▸ SQL Query]`):

```sql
SELECT u.FULL_NAME,
       u.EMAIL,
       u.STATUS
  FROM APP_USERS u
 WHERE u.COMPANY_ID = :P12_COMPANY_ID
   AND EXISTS (SELECT 1 FROM USER_ROLES ur
                WHERE ur.USER_ID = u.USER_ID
                  AND ur.ROLE = 'CLIENT_ADMIN')
 ORDER BY u.FULL_NAME
```

Columns, in this order:

| Column | Source | Notes |
|--------|--------|-------|
| Name | `FULL_NAME` | with avatar initials (cosmetic) |
| Email | `EMAIL` | |
| Status | `STATUS` | raw `ACTIVE` / `INACTIVE` |
| Last Login | — | mockup shows a Last Login column; `APP_USERS` has no such column in v1. Display `—`, or wire from APEX Accounts (`APEX_WORKSPACE_ACTIVITY_LOG` / access log) if surfaced later. Keep the column to match the mockup; don't add a schema column just for it. |

**Region link** (top-right, System Admin only): `[Central Pane ▸ Gallery ▸ Buttons]` into the region header,
**Manage on Users page →** → page 10 (Users). Gate it at `[Right Pane ▸ Security ▸ Authorization Scheme]` = `System Admin`.

Empty state (`[Right Pane ▸ Appearance ▸ No Data Found Message]`): `⚠ No Client Admin — this company cannot manage its own users or Restricted-project
invitations; assign the CLIENT_ADMIN role on the Users page.`

Footer note (static): *Client Admins see all company tickets, manage company users and
Restricted-project invitations (decision Q), and can assign/reassign agents on any company ticket.*

---

## Step 7: Authorization

The named schemes (`System Admin`, etc.) come from [Shared Components ▸ Authorization Schemes] (built
on page 1). Apply each per element at `[Right Pane ▸ Security ▸ Authorization Scheme]`; the page-level and
link-level rules on `:APP_ROLE` go in `[Right Pane ▸ Server-side Condition ▸ Type]`.

| Element | Authorization Scheme |
|---------|----------------------|
| Page | `:APP_ROLE != 'SUPPORT_AGENT'` (condition) |
| **+ Add Project / + Add Department** buttons | `System Admin` |
| Project **⚙ Manage / ✎ Edit**, Dept **✎ Edit** | `System Admin` |
| Project **👁 View** link | shown when `:APP_ROLE` in (`CLIENT_USER`,`CLIENT_ADMIN`) |
| **Manage on Users page →** link | `System Admin` |

---

## Step 8: Test It

| Test | Expected |
|------|----------|
| Anna (Client User) edits URL to another company's id | `P12_COMPANY_ID` overwritten → still renders Acme |
| Anna's Projects tab | Only Open + invited Restricted Acme projects (via `V_MY_PROJECTS`) |
| Anna sees no + Add / ✎ Edit / Manage buttons | Read-only; only **👁 View** links |
| Sara (System Admin) clicks Manage on page 9 | Opens that company, all buttons visible & editable |
| SLA Breached tile | Hidden when count = 0, red when > 0 |
| Mike (Support Agent) | Page not accessible |

---

## Isolation Checklist

- [ ] Non-admins' `P12_COMPANY_ID` always overwritten to `NV('APP_COMPANY_ID')` before header
- [ ] Company header fetch fails closed for a mismatched company (NO_DATA_FOUND → error)
- [ ] Projects tab reads `V_MY_PROJECTS` (excludes uninvited Restricted projects for Client Users)
- [ ] Ticket/SLA stat tiles read `V_MY_TICKETS` (never base `TICKETS`)
- [ ] Departments/Users/Client-Admins queries all filter `WHERE COMPANY_ID = :P12_COMPANY_ID`
- [ ] Every Add/Edit/Manage action authorization-gated to `System Admin`
- [ ] Project detail links pass `PROJECT_ID` only from rows the view already returned (no IDOR)

---

**Next:** move to `14-categories.md`.
