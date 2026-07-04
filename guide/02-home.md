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
END;
```

- Server-side Condition → When Button Pressed: `SWITCH`

### 2d. Add a Branch (redirect after switch)

Still in the **Processing** tab → right-click After Processing → **Create Branch**:
- Target → Page: `1`
- This closes the modal and re-renders the nav with the new role's permissions

### 2e. Add the Navigation Bar Entry

**Shared Components → Navigation Bar List** → add an entry:
- Sequence: `5` (so it appears before the logout entry)
- List Entry Label: `Switch Role`
- Target → Target type: Page in this Application → Page: `20`
- Conditions tab → Condition Type: **Expression**
- Expression 1: `:APP_HAS_MULTI_ROLE = 'Y'`

This entry only appears for users who hold more than one role.

---

## Step 3: Add the Tenant Banner (Page 0)

This shows the active company and role on every page (e.g. "Northwind · System Admin"). It goes on **Page 0 (Global Page)** so it appears on all pages automatically.

### 3a. Open Page 0

In App Builder, click on **0 - Global Page** (or type `0` in the page number field).

### 3b. Add a Static Content Region

In Page Designer → right-click on **Content Body** (or **After Logo** position) → **Create Region**:
- Title: `Tenant Banner`
- Type: **PL/SQL Dynamic Content**
- PL/SQL Code:

```sql
HTP.P(
  '<span style="font-size:12px; color:#ccc;">' ||
  APEX_ESCAPE.HTML(
    (SELECT COMPANY_NAME FROM COMPANIES WHERE COMPANY_ID = NV('APP_COMPANY_ID'))
  ) ||
  ' &middot; ' ||
  REPLACE(:APP_ROLE, '_', ' ') ||
  '</span>'
);
```

- Template: **Blank with Attributes** (so it doesn't add extra padding/borders)
- Position: try **After Logo** or **Before Navigation Bar** — pick whatever looks cleanest

### 3c. Save and Run

You should see something like `Northwind · System Admin` near the top of every page.

---

## Step 4: Test It

### Navigation menu test

| User | Expected Nav Entries | Switch Role visible? |
|------|---------------------|---------------------|
| `sara@northwind.example` (System Admin) | All 13 entries | Yes (top-right nav bar) |
| `anna@acme.example` (Client User) | Home, Dashboard, Ticket Queue, Raise a Ticket, Projects, My Company, My Profile | No |
| `bob@acme.example` (Client Admin) | Same as Anna + Users | No |
| `mike@northwind.example` (Agent) | Home, Dashboard, Ticket Queue, Projects, My Profile | Yes |

### Role switcher test

1. Log in as `mike@northwind.example`
2. Click **Switch Role** (top-right nav bar) → modal opens
3. Select **Client User** → click **Switch**
4. Nav changes: "Raise a Ticket" and "My Company" appear; admin entries stay hidden
5. Tenant banner still shows **Northwind** (company never changes on role switch)
6. Switch back to **Support Agent** → nav reverts

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
