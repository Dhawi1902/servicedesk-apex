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
   - `[Right Pane ▸ Identification ▸ Type]`: **Execute Code** (the anonymous-PL/SQL process type; older APEX labelled it *PL/SQL Code*)
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

## Step 3: Show the Home page title (breadcrumb)

> *Page 1 already existed before this guide, so it never went through the Create Page wizard's **Use Breadcrumb** toggle — which is why its title bar is blank. Add the breadcrumb by hand so Home matches every other Normal page (see the [breadcrumb convention](README.md)).*

1. Open **page 1** in Page Designer.
2. Under `[Left Pane ▸ Rendering]`, right-click the **Breadcrumb Bar** position → **Create Region**.
3. Set the region:
   - `[Right Pane ▸ Identification ▸ Type]`: **Breadcrumb**
   - `[Right Pane ▸ Settings ▸ Breadcrumb]`: **Breadcrumb** (the app-default component). *If the list is empty, no page has created it yet — go to **Shared Components → Breadcrumbs**, create one named `Breadcrumb`, then come back.*
4. Create this page's entry: **Shared Components → Breadcrumbs → Breadcrumb → Create Breadcrumb Entry** — **Page** = `1`, **Entry Name** = `Home`, **Parent Entry** = *(none)*.
5. Save. The Home page now shows **Home** in the breadcrumb bar.

---

## Step 4: Combine the Banner + Role Switcher into One Nav-Bar Entry

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

## Step 5: Welcome Region

> *A short greeting at the top of the page, personalised with the user's first name and a role-contextual subtitle.*

1. Open **page 1** in Page Designer.
2. Under `[Left Pane ▸ Rendering]`, right-click **Content Body** → **Create Region**.
3. Set the region:
   - `[Right Pane ▸ Identification ▸ Title]`: `Welcome`
   - `[Right Pane ▸ Identification ▸ Type]`: **Static Content**
   - `[Right Pane ▸ Source ▸ HTML Code]`:
     ```html
     <p class="u-textLead">Welcome back, &APP_USER_DISPLAY.!</p>
     <p class="u-textSecondary" style="margin-top:0;">
       Your workspace &mdash; pick a project to drill into its tickets.
     </p>
     ```
   - `[Right Pane ▸ Appearance ▸ Template]`: **Blank with Attributes** (no chrome — just text)
   - `[Right Pane ▸ Layout ▸ Sequence]`: `10`

> *`&APP_USER_DISPLAY.` is a built-in substitution that resolves to the logged-in user's display name (set automatically by the APEX Accounts auth scheme).*

---

## Step 6: Project Cards

> *The centrepiece of the Home page — a grid of Cards, one per project the user can access. Each card shows the project name, company, and ticket counts. Clicking a card navigates to the Ticket Queue filtered to that project.*

1. Under `[Left Pane ▸ Rendering]`, right-click **Content Body** → **Create Region**.
2. Set the region:
   - `[Right Pane ▸ Identification ▸ Title]`: `My Projects`
   - `[Right Pane ▸ Identification ▸ Type]`: **Cards**
   - `[Right Pane ▸ Layout ▸ Sequence]`: `20` (below the Welcome region)
   - `[Right Pane ▸ Source ▸ Type]`: **SQL Query**
   - `[Right Pane ▸ Source ▸ SQL Query]`:
     ```sql
     SELECT p.PROJECT_ID,
            p.PROJECT_KEY,
            p.PROJECT_NAME,
            c.COMPANY_NAME,
            SUBSTR(p.PROJECT_NAME, 1, 2)                      AS INITIALS,
            ( SELECT COUNT(*)
                FROM V_MY_TICKETS t
               WHERE t.PROJECT_ID = p.PROJECT_ID
                 AND t.STATUS NOT IN ('Resolved','Closed') )   AS OPEN_COUNT,
            ( SELECT COUNT(*)
                FROM V_MY_TICKETS t
               WHERE t.PROJECT_ID = p.PROJECT_ID
                 AND t.ASSIGNED_TO IS NULL
                 AND t.STATUS != 'Closed' )                    AS UNASSIGNED_COUNT,
            ( SELECT COUNT(*)
                FROM V_MY_TICKETS t
               WHERE t.PROJECT_ID = p.PROJECT_ID )             AS TOTAL_COUNT
       FROM V_MY_PROJECTS p
       JOIN COMPANIES c ON c.COMPANY_ID = p.COMPANY_ID
      WHERE p.IS_ACTIVE = 'Y'
      ORDER BY OPEN_COUNT DESC NULLS LAST, p.PROJECT_NAME
     ```
3. Configure the **Cards Attributes** (click the region, then look in the right pane under **Attributes**):
   - `[Right Pane ▸ Attributes ▸ Card ▸ Primary Key Column 1]`: `PROJECT_ID`
   - `[Right Pane ▸ Attributes ▸ Title ▸ Column]`: `PROJECT_NAME`
   - `[Right Pane ▸ Attributes ▸ Subtitle ▸ Column]`: `COMPANY_NAME`
   - `[Right Pane ▸ Attributes ▸ Badge ▸ Column]`: `OPEN_COUNT`
   - `[Right Pane ▸ Attributes ▸ Badge ▸ Label]`: `Open`
   - `[Right Pane ▸ Attributes ▸ Icon ▸ Source]`: **Initials**
   - `[Right Pane ▸ Attributes ▸ Icon ▸ Initials Column]`: `INITIALS`
   - `[Right Pane ▸ Attributes ▸ Card ▸ CSS Classes]`: `u-color-1` *(gives the initials a themed colour)*
4. Set the **card link** so clicking drills into the Ticket Queue:
   - `[Right Pane ▸ Attributes ▸ Card ▸ Link ▸ Type]`: **Redirect to Page in this Application**
   - `[Right Pane ▸ Attributes ▸ Card ▸ Link ▸ Target]`: Page `3`, Set Items — Name: `IR_PROJECT_ID`, Value: `&PROJECT_ID.`

   > *`IR_PROJECT_ID` is the Faceted Search facet item on page 3 (built in [`03-ticket-queue.md`](03-ticket-queue.md)). When page 3 exists, clicking a card pre-filters the queue to that project. Until then the link just opens page 3.*

5. Set the **layout** to a multi-column grid:
   - `[Right Pane ▸ Attributes ▸ Layout ▸ Grid Columns]`: `Auto` *(APEX will tile cards responsively, typically 3–4 per row)*
6. *(Optional)* Add a **Body** column for agents/admins to see the unassigned count:
   - `[Right Pane ▸ Attributes ▸ Body ▸ Column]`: `UNASSIGNED_COUNT`
   - Under `[Right Pane ▸ Attributes ▸ Body ▸ Advanced Formatting]`: **On**
   - `[Right Pane ▸ Attributes ▸ Body ▸ HTML Expression]`:
     ```html
     <span class="u-textSecondary">&UNASSIGNED_COUNT. unassigned &middot; &TOTAL_COUNT. total</span>
     ```

---

## Step 7: Recent Activity Table

> *A Classic Report showing the last 6 updated tickets visible to the logged-in user — a quick-glance "what changed" panel beneath the project cards.*

1. Under `[Left Pane ▸ Rendering]`, right-click **Content Body** → **Create Region**.
2. Set the region:
   - `[Right Pane ▸ Identification ▸ Title]`: `Recent Activity`
   - `[Right Pane ▸ Identification ▸ Type]`: **Classic Report**
   - `[Right Pane ▸ Layout ▸ Sequence]`: `30` (below the project cards)
   - `[Right Pane ▸ Source ▸ Type]`: **SQL Query**
   - `[Right Pane ▸ Source ▸ SQL Query]`:
     ```sql
     SELECT t.TICKET_REF,
            t.SUBJECT,
            p.PROJECT_NAME,
            t.STATUS,
            t.SEVERITY,
            t.UPDATED_AT
       FROM V_MY_TICKETS t
       JOIN PROJECTS p ON p.PROJECT_ID = t.PROJECT_ID
      ORDER BY t.UPDATED_AT DESC
      FETCH FIRST 6 ROWS ONLY
     ```
3. Make the **TICKET_REF** column a link to the Ticket Detail page:
   - Under `[Left Pane ▸ Rendering]`, expand the **Recent Activity** region → **Columns** → click `TICKET_REF`.
   - `[Right Pane ▸ Identification ▸ Type]`: **Link**
   - `[Right Pane ▸ Link ▸ Target]`: Page `4`, Set Items — Name: `P4_TICKET_ID`, Value: `#TICKET_ID#`

   > *If you don't have `TICKET_ID` in the SELECT, add it as a hidden column:*
   > ```sql
   > SELECT t.TICKET_ID,   -- add this line
   >        t.TICKET_REF,
   >        ...
   > ```
   > *Then set `TICKET_ID` column → `[Right Pane ▸ Identification ▸ Type]`: **Hidden Column**.*

4. Format the `UPDATED_AT` column:
   - Click the `UPDATED_AT` column → `[Right Pane ▸ Appearance ▸ Format Mask]`: `SINCE` *(APEX built-in — displays "5 minutes ago", "2 hours ago", etc.)*
   - `[Right Pane ▸ Heading ▸ Heading]`: `Updated`
5. Apply colour badges to the `STATUS` column:
   - Click the `STATUS` column → `[Right Pane ▸ Identification ▸ Type]`: **Plain Text**
   - `[Right Pane ▸ HTML Expression]`:
     ```html
     <span class="u-badge">#STATUS#</span>
     ```
6. Under `[Right Pane ▸ Attributes]` for the region (click the region name), set:
   - `[Right Pane ▸ Attributes ▸ Pagination ▸ Type]`: **No Pagination** *(the query already limits to 6 rows)*
   - `[Right Pane ▸ Appearance ▸ Template]`: **Standard** *(or **Cards Container** if you prefer the card look)*

---

## Step 8: Test It

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

### Project cards test

| User | Expected cards |
|------|---------------|
| Sara (System Admin) | All active projects across all companies |
| Mike (Support Agent) | Only projects listed in `AGENT_PROJECTS` for Mike |
| Anna (Client User) | Acme's OPEN projects + any RESTRICTED project she has a `USER_PROJECTS` invitation for |
| Bob (Client Admin) | All Acme projects |

1. Log in as Sara → verify cards show projects from **both** Northwind and Acme
2. Log in as Anna → verify **only** Acme projects appear, no Northwind projects
3. Click a project card → lands on page 3 (Ticket Queue) filtered to that project
4. Verify each card's **Open** badge matches the actual open ticket count for that project

### Recent activity test

1. As any user, verify the table shows at most 6 rows
2. Verify the rows are ordered by most recently updated first
3. Verify the TICKET_REF links open page 4 (Ticket Detail)
4. As Anna (Client User), verify **no** Northwind tickets appear in the table

---

## Isolation Checklist

- [ ] Role switch validates against `USER_ROLES` server-side (try tampering `P20_NEW_ROLE` to `SYSTEM_ADMIN` as Anna — must fail)
- [ ] Switching role **never** changes `APP_COMPANY_ID` — company comes from the profile only
- [ ] Tenant banner shows correct company + role for each test user
- [ ] Project cards use `V_MY_PROJECTS` — Anna sees only her company's projects
- [ ] Recent Activity uses `V_MY_TICKETS` — Anna sees only her company's tickets
- [ ] No base-table query on page 1 (search the page SQL for `FROM TICKETS` or `FROM PROJECTS` without the `V_MY_` prefix — must find none)

---

**Next:** move to `03-ticket-queue.md`.
