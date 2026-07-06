# Step 10 — Users (p9) (MUST)

> *Create, edit and deactivate users, and grant roles — never delete (history keeps its authors). **System Admin** manages everyone across all companies; **Client Admin** manages their own company only.*

---

## Step 1: Create the Page

This page is an **Interactive Grid** (an editable, spreadsheet-like table). Open your app in
**App Builder** and click the green **Create Page** button (top-right), then pick the **Interactive
Grid** tile. That opens the **Create Interactive Grid** wizard — two screens:

> **Page already blank?** If page 9 already exists as a blank page, skip the wizard (creating on an
> existing page number clashes). Open **page 9** in Page Designer and add an **Interactive Grid** region
> (`[Central Pane ▸ Gallery ▸ Regions]` → `[Right Pane ▸ Identification ▸ Type]` = Interactive Grid); its source is set in
> Step 2. The wizard route below still works when building from scratch.

**Wizard screen 1 — Page Definition + Data Source + Navigation:**

| Field | Set to | Notes |
|-------|--------|-------|
| Page Number | `9` | Guide file number = APEX page number. |
| Name | `Users` | Also becomes the page Title and the region title. |
| Page Mode | `Normal` | Full page, not a dialog. |
| Data Source | `Local Database` | Data lives in this workspace's schema. |
| Source Type | `Table` | Point at a table now; **Step 2 replaces this with the full SQL join** (roles/company/dept). |
| Table / View Owner | *your workspace schema* | e.g. `WKSP_DHAWIWORKSPACE` — leave the default. |
| Table / View Name | `APP_USERS` | The base table; Step 2 joins in `COMPANIES`, `DEPARTMENTS`, `USER_ROLES`. |
| Use Breadcrumb | **Off** | Nav is built later (Step 19). |
| Use Navigation | **Off** | Same — skip for now. |

Click **Next**.

**Wizard screen 2 — Interactive Grid attributes:**

| Field | Set to | Notes |
|-------|--------|-------|
| Editing → Enabled | **On** | Admins add/edit users inline — the Add Row / Save toolbar and the DML processes (Steps 6–7) need it. |
| Primary Key Column 1 | `USER_ID (Number)` | Auto-detected PK of `APP_USERS` — **must** be set or inline edits can't save. |
| Primary Key Column 2 | *(leave `- Select -`)* | Single-column key. |

Click **Create Page**. APEX drops you into Page Designer with an editable Interactive Grid region on
`APP_USERS` (region title **Users**), the standard IG toolbar, and an auto row-DML (Save) process.
Step 2 swaps the region source for the role-scoped join; Step 3 trims and retypes the columns.

**Then set the page condition** — select the page root node `[Left Pane ▸ Rendering]` and set
`[Right Pane ▸ Server-side Condition ▸ Type]` = *Expression* → `:APP_ROLE IN ('SYSTEM_ADMIN','CLIENT_ADMIN')`
(also covered in Step 8's authorization).

The mockup renders this as an APEX **Interactive Grid** (toolbar: **+ Add Row**, **Save**, **Search…**, a
**Company** picker, an **Actions ▾** menu, and a live **row count**) — all of which the IG gives you declaratively.

---

## Step 2: Set the Region Source

Select the **Users** grid `[Left Pane ▸ Rendering]`, then paste the query into `[Right Pane ▸ Source ▸ SQL Query]`.

> *Users are not ticket data, so there is no `V_MY_*` view — scope the base tables server-side in the WHERE clause (System Admin sees all; Client Admin is pinned to their own `COMPANY_ID`). The **Role** column shows **every role the user holds** (decision P), landing role first, built from `USER_ROLES` with `LISTAGG`.*

```sql
SELECT u.USER_ID,
       u.FULL_NAME,
       u.EMAIL,
       u.DEFAULT_ROLE,
       ( SELECT LISTAGG(r.ROLE, ', ') WITHIN GROUP (
                  ORDER BY CASE WHEN r.ROLE = u.DEFAULT_ROLE THEN 0 ELSE 1 END, r.ROLE)
           FROM USER_ROLES r
          WHERE r.USER_ID = u.USER_ID ) AS ROLES,
       c.COMPANY_NAME,
       u.COMPANY_ID,
       d.DEPARTMENT_NAME,
       u.DEPARTMENT_ID,
       u.STATUS
  FROM APP_USERS u
  JOIN COMPANIES c        ON c.COMPANY_ID    = u.COMPANY_ID
  LEFT JOIN DEPARTMENTS d ON d.DEPARTMENT_ID = u.DEPARTMENT_ID
 WHERE ( :APP_ROLE = 'SYSTEM_ADMIN'
      OR (:APP_ROLE = 'CLIENT_ADMIN' AND u.COMPANY_ID = NV('APP_COMPANY_ID')) )
   AND ( :P9_COMPANY_FILTER IS NULL
      OR u.COMPANY_ID = :P9_COMPANY_FILTER )
```

- `:P9_COMPANY_FILTER` backs the toolbar **Company** picker (Step 4). It only *narrows* within the rows the role
  clause already allows — it can never widen a Client Admin past their own company.

---

## Step 3: Configure Columns

Each column is a node under the grid `[Left Pane ▸ Rendering]`; select one and set its **Type** via `[Right Pane ▸ Identification ▸ Type]` (LOV-backed columns also need `[Right Pane ▸ List of Values]`, hidden ones use Type = Hidden). Match the mockup's column set and **order** — the leading checkbox is the IG's built-in row selector.

| # | Column | Type | Editable by | Notes |
|---|--------|------|-------------|-------|
| — | *(row selector)* | IG built-in | — | Checkbox column |
| 1 | `FULL_NAME` (**Name**) | Text | all | |
| 2 | `EMAIL` | Text | insert only | Login — becomes the APEX account name; read-only after create |
| 3 | `ROLES` (**Role**) | Display Only | — | All roles held; landing role first (decision P). Edited in the Roles sub-region, Step 5 |
| 4 | `COMPANY_NAME` (**Company**) | Display Only | — | Real edit is via `COMPANY_ID` (Step 6) |
| 5 | `DEPARTMENT_NAME` (**Dept**) | Display Only | — | Real edit is via `DEPARTMENT_ID` LOV; `—` when NULL |
| 6 | `STATUS` | Select List | all | `ACTIVE` / `INACTIVE` (deactivate, never delete) |
| 7 | `LAST_LOGIN` (**Last Login**) | Display Only | — | See note below |
| — | `COMPANY_ID` | Hidden LOV | System Admin only | **Condition:** `:APP_ROLE = 'SYSTEM_ADMIN'`; forced for Client Admin (Step 6) |
| — | `DEPARTMENT_ID` | Hidden LOV | all | Cascades from `COMPANY_ID` |
| — | *Actions* | Link/Button col | — | **✎ Edit** + **🔑 Reset** (Step 7) |

**Last Login note:** the locked `APP_USERS` schema has **no** `LAST_LOGIN` column, and 26.1 exposes no queryable
last-login view in the reference. Show **Last Login** as a display-only column for parity with the mockup, populated
from your own audit (e.g. a `LAST_LOGIN` timestamp you stamp in the post-auth process), or leave it blank/"Never" for
the demo. Do **not** invent an APEX view for it.

---

## Step 4: Add the Company Picker + Toolbar

The mockup toolbar (in order): **+ Add Row** (primary) · **Save** · **Search…** · **Company:** select · **Actions ▾** · row count.
IG supplies Add Row, Save, Search, Actions and the count out of the box. Add the **Company** picker as a page item — drag a Select List from `[Central Pane ▸ Gallery ▸ Items]` onto `[Central Pane ▸ Layout]` (drop it into the region so it lands in the toolbar):

- **Item:** `P9_COMPANY_FILTER` — Select List (`[Right Pane ▸ Identification ▸ Type]` = Select List), label `Company`, placed in the IG toolbar (`[Right Pane ▸ Layout ▸ Position]` = *Top of Region*).
- **LOV:** `[Right Pane ▸ List of Values ▸ SQL Query]` = `SELECT COMPANY_NAME d, COMPANY_ID r FROM COMPANIES WHERE STATUS = 'ACTIVE' ORDER BY 1`
  with a *Display Null Value* entry `All Companies` (`[Right Pane ▸ List of Values ▸ Display Null Value]`).
- **Condition:** `[Right Pane ▸ Server-side Condition ▸ Type]` — render only for `:APP_ROLE = 'SYSTEM_ADMIN'` (Client Admin is already pinned to one company).
- **Dynamic Action:** `[Left Pane ▸ Dynamic Actions]` — on *Change* → **Refresh** the Users grid.

---

## Step 5: Roles Sub-Region (decision P — multi-role)

Because a user holds many roles, edit them in a small child region (Interactive Grid or Shuttle over `USER_ROLES`
for the selected `USER_ID`), not in the main grid's Role cell. Create it by dragging a new region from `[Central Pane ▸ Gallery ▸ Regions]` onto `[Central Pane ▸ Layout]`, then point `[Right Pane ▸ Source ▸ SQL Query]` (or Table Name) at `USER_ROLES`.

- Client Admin may grant only: `CLIENT_USER`, `CLIENT_ADMIN`
- System Admin may grant all four: `CLIENT_USER`, `CLIENT_ADMIN`, `SUPPORT_AGENT`, `SYSTEM_ADMIN`
- Every provider-company user is auto-granted `CLIENT_USER` (decision Q).
- **Validate server-side** on every role insert — add a Validation `[Left Pane ▸ Processing]` with the PL/SQL below in its `[Right Pane ▸ Source ▸ PL/SQL Code]`:

```sql
IF :APP_ROLE = 'CLIENT_ADMIN'
   AND :NEW_ROLE NOT IN ('CLIENT_USER','CLIENT_ADMIN') THEN
  raise_application_error(-20040, 'Only System Admin can grant this role.');
END IF;
```

---

## Step 6: Force Company on Client Admin Inserts **and Updates**

Client Admin can never place a user in another tenant — overwrite the company server-side before the row is saved. Put this on **both** the create **and** the update DML process — add it in `[Left Pane ▸ Processing]` on each process (or as a Before-Save process ahead of the IG's row-DML), with the PL/SQL in `[Right Pane ▸ Source ▸ PL/SQL Code]` (a hidden column is still submittable on an UPDATE POST, so an insert-only guard lets a tampered edit move one of their own users to another company):

```sql
IF :APP_ROLE = 'CLIENT_ADMIN' THEN
  :P9_COMPANY_ID := NV('APP_COMPANY_ID');
END IF;
```

Also set `COMPANY_ID` to **read-only / hidden AND value-protected** for Client Admin — select the column `[Left Pane ▸ Rendering]` and use `[Right Pane ▸ Read Only ▸ Type]` plus `[Right Pane ▸ Security ▸ Escape special characters / Session State Protection]` (not just hidden — a plain hidden item can still be forged in the POST) so the mockup's picker can't be tampered with. Belt-and-braces: the server-side override above is the real guard.

---

## Step 7: Row Actions — Create APEX Account & Reset Password

**On new-user save** (auto-create the login) — add a process in `[Left Pane ▸ Processing]` (run it after the IG row-DML, condition it to inserts) with this PL/SQL in `[Right Pane ▸ Source ▸ PL/SQL Code]` — reference-verified `APEX_UTIL.CREATE_USER`
(`reference/plsql/061-APEX_UTIL.md`):

```sql
BEGIN
  APEX_UTIL.CREATE_USER(
    p_user_name                    => :P9_EMAIL,
    p_web_password                 => 'ChangeMe1!',
    p_change_password_on_first_use => 'Y',
    p_email_address                => :P9_EMAIL);
EXCEPTION
  WHEN OTHERS THEN
    IF SQLCODE = -20000 THEN NULL;   -- account already exists
    ELSE RAISE;
    END IF;
END;
```

**🔑 Reset** row action (mockup: "Reset the APEX account password") — wire the row button to a process in `[Left Pane ▸ Processing]` (conditioned on the Reset request), PL/SQL in `[Right Pane ▸ Source ▸ PL/SQL Code]` — reference-verified
`APEX_UTIL.RESET_PW(p_user, p_msg)` resets the account password and emails the user the new one
(`reference/plsql/061-APEX_UTIL.md` §61.112; caller needs workspace-admin privilege):

```sql
APEX_UTIL.RESET_PW(
  p_user => :P9_EMAIL,
  p_msg  => 'Your Service Desk password has been reset. Please sign in and set a new one.');
```

---

## Step 8: Authorization

- **Page:** select the page root `[Left Pane ▸ Rendering]` → `[Right Pane ▸ Security ▸ Authorization Scheme]` (or the page's `[Right Pane ▸ Server-side Condition ▸ Type]`) — condition `:APP_ROLE IN ('SYSTEM_ADMIN','CLIENT_ADMIN')` (Client User URL-jump → blocked).
- **`COMPANY_ID` column / `P9_COMPANY_FILTER`:** each selected `[Left Pane ▸ Rendering]` → `[Right Pane ▸ Server-side Condition ▸ Type]` — condition `:APP_ROLE = 'SYSTEM_ADMIN'`.
- **Role grants:** server-side validation `[Left Pane ▸ Processing]` (Step 5) — the client-side LOV is convenience only.

---

## Step 9: Test It

| Test | Expected |
|------|----------|
| Sara (System Admin) | Sees **all** users across every company; Company picker present |
| Sara filters Company = Acme | Grid narrows to Acme users only |
| Bob (Client Admin) | Sees **only** Acme users; Company column not editable; no Company picker |
| Bob grants `SYSTEM_ADMIN` | Server-side validation rejects (ORA-20040) |
| Bob creates a new user | `COMPANY_ID` forced to Acme; APEX account auto-created |
| Any admin clicks **Reset** | `APEX_UTIL.RESET_PW` runs; user emailed a new password |
| Multi-role user (decision P) | **Role** cell lists all roles, landing role first |
| Anna (Client User) URL-jumps to page 9 | Blocked by page condition |

---

## Isolation Checklist

- [ ] Region WHERE scopes rows by role (`SYSTEM_ADMIN` all; `CLIENT_ADMIN` = `NV('APP_COMPANY_ID')` only)
- [ ] `P9_COMPANY_FILTER` only *narrows* within allowed rows — never widens a Client Admin
- [ ] `COMPANY_ID` forced to the tenant on Client Admin inserts, and read-only for them
- [ ] Role-grant validation is server-side (not just the LOV)
- [ ] Never delete a user — deactivate via `STATUS = 'INACTIVE'` (history keeps its authors)
- [ ] No password data in `APP_USERS` — auth lives in APEX Accounts

---

**Next:** move to `11-projects.md`.
