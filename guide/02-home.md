# Step 2 — Home (p1) & App Shell (MUST)

> Page 1 already exists. This step adds the navigation menu, tenant banner, and role switcher that every other page uses.

---

## Step 1: Set Up the Navigation Menu

**Shared Components → Navigation Menu** → edit the default list (Desktop Navigation Menu). Delete/replace the auto-generated entries with these (use **Create List Entry** → **Create and Create Another** to go faster):

| Seq | List Entry Label | Image/Class | Page | Authorization | Condition Type | Condition Expression |
|-----|-----------------|-------------|------|---------------|----------------|---------------------|
| 10 | Home | fa-home | 1 | | | |
| 20 | Dashboard | fa-dashboard | 2 | | | |
| 30 | Ticket Queue | fa-list | 3 | | | |
| 40 | Raise a Ticket | fa-ticket | 5 | | Expression | `:APP_ROLE != 'SUPPORT_AGENT'` |
| 50 | Projects | fa-folder | 10 | | | |
| 60 | My Company | fa-building | 12 | | Expression | `:APP_ROLE IN ('CLIENT_USER','CLIENT_ADMIN')` |
| 70 | Companies | fa-building | 8 | `IS_SYSTEM_ADMIN` | | |
| 80 | Users | fa-users | 9 | | Expression | `:APP_ROLE IN ('SYSTEM_ADMIN','CLIENT_ADMIN')` |
| 90 | Categories | fa-tags | 13 | `IS_SYSTEM_ADMIN` | | |
| 100 | SLA Policies | fa-clock | 15 | `IS_SYSTEM_ADMIN` | | |
| 110 | Agent-Project Mapping | fa-link | 16 | `IS_SYSTEM_ADMIN` | | |
| 120 | Audit Log | fa-file-text | 17 | `IS_SYSTEM_ADMIN` | | |
| 130 | My Profile | fa-user | 14 | | | |

For entries with **Condition Expression**: scroll to the Conditions tab, set Condition Type = `Expression`, paste the expression.
For entries with **Authorization**: go to the Authorization tab, pick the scheme from the dropdown.

> Hiding a nav entry is NOT security. Each target page will also carry its own authorization when you build it.

---

## Step 2: Build the Role Switcher (Page 20)

This lets multi-role users (like Mike who has SUPPORT_AGENT + CLIENT_USER) switch roles without re-logging in. Page 20 should already exist as a blank modal.

### 2a. Add the Select List

Go to **Page 20** in Page Designer → add a **Select List** item in the Content Body region:
- Name: `P20_NEW_ROLE`
- Label: `Switch to`
- LOV Type: **SQL Query**
- Query:
  ```sql
  SELECT REPLACE("ROLE", '_', ' ') AS d, "ROLE" AS r
    FROM USER_ROLES
   WHERE USER_ID = NV('APP_USER_ID')
  ```
- Default → Type: Item, Value: `APP_ROLE`
- **List of Values → Display Null Value: No** — a Select List shows a blank entry at the top by default; the user always has a current role, so turn it off (no empty option).

> `"ROLE"` is in double quotes because `ROLE` is a reserved word in Oracle.

### 2b. Add a Submit Button

- Name: `SWITCH`
- Label: `Switch`
- Action: **Submit Page**
- Position: below the select list (or in the dialog footer / Buttons region)

### 2c. Add the Server-Side Process

On page 20 → **Processing** tab → right-click Processes → **Create Process**:
- Name: `Apply Role Switch`
- Type: **PL/SQL Code**
- PL/SQL Code:

```sql
DECLARE l_ok PLS_INTEGER;
BEGIN
  SELECT COUNT(*) INTO l_ok FROM USER_ROLES
   WHERE USER_ID = NV('APP_USER_ID') AND "ROLE" = :P20_NEW_ROLE;
  IF l_ok = 0 THEN
    raise_application_error(-20003, 'Role not granted.');
  END IF;
  APEX_UTIL.SET_SESSION_STATE('APP_ROLE', :P20_NEW_ROLE);
  -- keep the display-formatted role in sync so the banner updates on switch
  APEX_UTIL.SET_SESSION_STATE('APP_ROLE_DISP',
    INITCAP(REPLACE(:P20_NEW_ROLE, '_', ' ')));
END;
```

- Server-side Condition → When Button Pressed: `SWITCH`

### 2d. Add a Branch (redirect after switch)

Still in the **Processing** tab → right-click After Processing → **Create Branch**:
- Target → Page: `1`
- This closes the modal and re-renders the nav with the new role's permissions

### 2e. (moved) — the nav entry is now the combined banner in Step 3

The old standalone "Switch Role" nav entry is replaced by the combined banner below. Skip ahead to Step 3.

---

## Step 3: Combine the Banner + Role Switcher into One Nav-Bar Entry

Rather than a separate tenant banner *and* a separate "Switch Role" button, we make **one** Navigation Bar entry that shows the company + role (e.g. `Northwind · System Admin`) **and** opens the switcher modal when clicked. Because Page 20 is a **Modal Dialog** page, APEX auto-generates the dialog-opening link for any declarative target pointed at it — **no PL/SQL, no JavaScript, no URL/checksum handling**.

### 3a. Prerequisite: two display app items

The nav-bar label is built from substitution strings, so we stamp the display values at login. In `01-login.md` these two application items are stamped by the post-auth procedure alongside `APP_COMPANY_ID`:

| Item | Holds |
|------|-------|
| `APP_COMPANY_NAME` | the login user's company name (e.g. `Northwind`) |
| `APP_ROLE_DISP` | the role, formatted for humans — `INITCAP(REPLACE(role,'_',' '))` → "System Admin", not "SYSTEM_ADMIN" |

If you followed an older `01-login.md`, add them now (Step 3 app items + the two `SET_SESSION_STATE` lines in the post-auth procedure). `APP_ROLE_DISP` is also refreshed by the role-switch process in Step 2c, so the banner updates the instant a user switches role.

> Substitution strings can only *inject* a value, not transform it — that's why the role is pre-formatted into `APP_ROLE_DISP` rather than `REPLACE`-d inside the label.

### 3b. Add the two nav-bar entries

**Shared Components → Navigation Bar List** → add these two entries (replacing any old "Switch Role" entry). Same label on both, so the banner is always visible — but only clickable when there's more than one role to switch to:

| Seq | List Entry Label | Target Type | Target | Condition Type | Expression |
|-----|------------------|-------------|--------|----------------|------------|
| 5 | `&APP_COMPANY_NAME. · &APP_ROLE_DISP.` | Page in this Application | Page **20** | Expression | `:APP_HAS_MULTI_ROLE = 'Y'` |
| 6 | `&APP_COMPANY_NAME. · &APP_ROLE_DISP.` | **URL** | URL Target = `#` | Expression | `NVL(:APP_HAS_MULTI_ROLE,'N') != 'Y'` |

- Use the **literal middle-dot** character `·` (U+00B7) in the label — **not** the `&middot;` HTML entity. Nav-bar labels don't decode HTML entities, so `&middot;` would render raw.
- **Entry 5** (multi-role users, like Mike): links to Page 20, so clicking the banner opens the switcher modal. Because Page 20 is Modal Dialog, it opens as a dialog automatically.
- **Entry 6** (single-role users): APEX **requires a target** on a list entry — you can't leave it blank ("Page must be specified"). So set **Target Type = URL** with `#` as the URL: it renders the banner text without navigating anywhere (no dead-end click into a one-option modal).

> **Simpler alternative** — if you don't mind single-role users clicking into a one-option switcher, skip entry 6 entirely and just **remove the condition on entry 5** so the one clickable banner shows for everyone. Fewer moving parts; the modal just lists their single role.

### 3c. Remove the old Page 0 banner (if you built it)

If you already added a **Tenant Banner** region on **Page 0 (Global Page)**, delete it — the nav-bar entry now carries that text on every page. (Nothing to remove if you're building fresh.)

### 3d. Save and Run

You should see `Northwind · System Admin` in the **top-right nav bar** on every page — clickable (opens the switcher) for multi-role users, plain text for everyone else.

---

## Step 4: Test It

### Navigation menu test

| User | Expected Nav Entries | Banner clickable (switcher)? |
|------|---------------------|------------------------------|
| `sara@northwind.example` (System Admin) | All 13 entries | Yes — banner links to the switcher |
| `anna@acme.example` (Client User) | Home, Dashboard, Ticket Queue, Raise a Ticket, Projects, My Company, My Profile | No — banner is plain text |
| `bob@acme.example` (Client Admin) | Same as Anna + Users | No — banner is plain text |
| `mike@northwind.example` (Agent) | Home, Dashboard, Ticket Queue, Projects, My Profile | Yes — banner links to the switcher |

### Role switcher test

1. Log in as `mike@northwind.example`
2. Click the **banner** (top-right nav bar, shows `Northwind · Support Agent`) → switcher modal opens
3. Select **Client User** → click **Switch**
4. Nav changes: "Raise a Ticket" and "My Company" appear; admin entries stay hidden
5. Banner now reads `Northwind · Client User` — company never changes on role switch, only the role
6. Switch back to **Support Agent** → nav and banner revert

### Tenant banner test

| User | Banner shows |
|------|-------------|
| Sara | `Northwind · System Admin` |
| Anna | `Acme Corp · Client User` |
| Mike | `Northwind · Support Agent` (then `Northwind · Client User` after switch) |

---

## Isolation Checklist

- [ ] Every admin nav entry carries `IS_SYSTEM_ADMIN` — **and** target pages will also have authorization when built
- [ ] Role switch validates against `USER_ROLES` server-side (try tampering `P20_NEW_ROLE` to `SYSTEM_ADMIN` as Anna — must fail)
- [ ] Switching role **never** changes `APP_COMPANY_ID` — company comes from the profile only
- [ ] Tenant banner shows correct company + role for each test user

---

**Next:** move to `03-ticket-queue.md` — we build the ticket spine first (pages 3 → 4 → 5 → 6 → 7), then come back for the Dashboard (page 2) once there's data flowing.
