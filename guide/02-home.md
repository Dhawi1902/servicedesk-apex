# Step 2 — Home (p1) & App Shell (MUST)

> *Page 1 already exists. This step adds the tenant banner and role switcher that every other page uses. The **left navigation menu** is built **last**.*

---

## Step 1: Left Navigation Menu → built last

> *The left nav menu's entries link to pages **by number**, so building it now would create links to pages that don't exist yet. It's the **final build step** — see [`19-navigation.md`](19-navigation.md). Continue here with the role switcher and banner.*

---

## Step 2: Build the Role Switcher (Page 20)

> *This lets multi-role users switch roles without re-logging in.*
> *If page 20 is already a blank modal, skip the wizard and open it in Page Designer instead.*

1. From **App Builder**, click **Create Page** and select **Blank Page**.
2. Set the properties:
   - Page Number: `20`
   - Name: `Switch Role`
   - Page Mode: **Modal Dialog**
3. Open **Page 20** in Page Designer.
4. From `[Central Pane ▸ Gallery ▸ Items]`, drag a **Select List** item into the Content Body region.
5. Set its properties:
   - `[Right Pane ▸ Identification ▸ Name]`: `P20_NEW_ROLE`
   - `[Right Pane ▸ Label ▸ Label]`: `Switch to`
   - `[Right Pane ▸ List of Values ▸ Type]`: **SQL Query**
   - `[Right Pane ▸ List of Values ▸ SQL Query]`:
     ```sql
     SELECT REPLACE("ROLE", '_', ' ') AS d, "ROLE" AS r
       FROM USER_ROLES
      WHERE USER_ID = NV('APP_USER_ID')
     ```
   - `[Right Pane ▸ Default ▸ Type]`: **Item**
   - `[Right Pane ▸ Default ▸ Item]`: `APP_ROLE`
   - `[Right Pane ▸ List of Values ▸ Display Null Value]`: **No**
6. From `[Central Pane ▸ Gallery ▸ Buttons]`, drag a button below the select list.
7. Set the button properties:
   - `[Right Pane ▸ Identification ▸ Name]`: `SWITCH`
   - `[Right Pane ▸ Identification ▸ Label]`: `Switch`
   - `[Right Pane ▸ Behavior ▸ Action]`: **Submit Page**
8. Under `[Left Pane ▸ Processing]`, right-click **Processes** → **Create Process**.
9. Set the process properties:
   - `[Right Pane ▸ Identification ▸ Name]`: `Apply Role Switch`
   - `[Right Pane ▸ Identification ▸ Type]`: **PL/SQL Code**
   - `[Right Pane ▸ Source ▸ PL/SQL Code]`:
     ```sql
     DECLARE l_ok PLS_INTEGER;
     BEGIN
       SELECT COUNT(*) INTO l_ok FROM USER_ROLES
        WHERE USER_ID = NV('APP_USER_ID') AND "ROLE" = :P20_NEW_ROLE;
       IF l_ok = 0 THEN
         raise_application_error(-20003, 'Role not granted.');
       END IF;
       APEX_UTIL.SET_SESSION_STATE('APP_ROLE', :P20_NEW_ROLE);
       APEX_UTIL.SET_SESSION_STATE('APP_ROLE_DISP',
         INITCAP(REPLACE(:P20_NEW_ROLE, '_', ' ')));
     END;
     ```
   - `[Right Pane ▸ Server-side Condition ▸ When Button Pressed]`: `SWITCH`
10. Under `[Left Pane ▸ Processing]`, right-click **After Processing** branches → **Create Branch**.
11. Set the branch target:
    - `[Right Pane ▸ Behavior ▸ Target]`: Page `1`

---

## Step 3: Combine the Banner + Role Switcher into One Nav-Bar Entry

> *Rather than a separate tenant banner and a separate "Switch Role" button, we make **one** Navigation Bar entry that shows the company + role and opens the switcher modal when clicked.*

1. Go to **Shared Components → Navigation Bar List**.
2. Delete any old "Switch Role" entry if it exists.
3. Add two new entries with the identical label `&APP_COMPANY_NAME. · &APP_ROLE_DISP.` (use literal `·` U+00B7).
4. Configure **Entry 1** (for multi-role users):
   - **Target Type**: Page in this Application
   - **Page**: `20`
   - **Condition Type**: Expression
   - **Condition Expression**: `:APP_HAS_MULTI_ROLE = 'Y'`
5. Configure **Entry 2** (for single-role users):
   - **Target Type**: URL
   - **URL Target**: `#`
   - **Condition Type**: Expression
   - **Condition Expression**: `NVL(:APP_HAS_MULTI_ROLE,'N') != 'Y'`

> *If you already added a Tenant Banner region on Page 0 (Global Page), delete it — the nav-bar entry now carries that text on every page.*

---

## Step 4: Test It

> *The per-role **left-nav** click-through is tested in [`19-navigation.md`](19-navigation.md).*

### Role switcher test

1. Log in as `mike@northwind.example`
2. Click the **banner** (top-right nav bar, shows `Northwind IT · Support Agent`) → switcher modal opens
3. Select **Client User** → click **Switch**
4. Nav changes: "Raise a Ticket" and "My Company" appear; admin entries stay hidden
5. Banner now reads `Northwind IT · Client User`
6. Switch back to **Support Agent** → nav and banner revert

### Tenant banner test

| User | Banner shows |
|------|-------------|
| Sara | `Northwind IT · System Admin` |
| Anna | `Acme Corp · Client User` |
| Mike | `Northwind IT · Support Agent` (then `Northwind IT · Client User` after switch) |

---

## Isolation Checklist

- [ ] Role switch validates against `USER_ROLES` server-side (try tampering `P20_NEW_ROLE` to `SYSTEM_ADMIN` as Anna — must fail)
- [ ] Switching role **never** changes `APP_COMPANY_ID` — company comes from the profile only
- [ ] Tenant banner shows correct company + role for each test user

---

**Next:** move to `03-ticket-queue.md`.
