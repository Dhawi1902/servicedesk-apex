# Step 15 — My Profile (p14) (SHOULD)

> *Every user's own account details. Agents also see their per-project support tiers.
> Strictly own record — one user can only ever view or edit their own row.*

---

## Step 1: Create the Page

> *A Form = one editable record. The wizard builds the region, one item per column, 4 buttons, and 2
> processes — later steps only adjust them, never rebuild them.*

1. Click **Create Page** (green button, top-right) → pick the **Form** tile.
2. Wizard **screen 1** — fill this table, then **Next**:

   | Field | Set to | Notes |
   |-------|--------|-------|
   | Page Number | `14` | — |
   | Name | `My Profile` | — |
   | Page Mode | `Normal` | — |
   | Data Source | `Local Database` | — |
   | Source Type | `Table` | — |
   | Table / View Owner | *your workspace schema* (leave default) | — |
   | Table / View Name | `APP_USERS` | — |
   | Use Breadcrumb | **On** | Shows the page title in the breadcrumb bar; the nav-menu link is still wired later (Step 19). |
   | Breadcrumb Entry Name | `My Profile` | The page name — shown in the breadcrumb bar. |
   | Use Navigation | **Off** | — |

3. Wizard **screen 2** — fill this table, then **Create Page**:

   | Field | Set to | Notes |
   |-------|--------|-------|
   | Primary Key Column 1 | `USER_ID (Number)` | — |
   | Primary Key Column 2 | *(leave `- Select -`)* | — |
   | Branch Here on Submit | `14` — **change from `1`** (reload this page after Save) | — |
   | Cancel and Go To Page | `1` | — |

4. Delete the **CREATE** and **DELETE** buttons (right-click → **Delete**). Keep **SAVE** and **CANCEL**.
5. Add the role·company sub-header — from `[Central Pane ▸ Gallery ▸ Regions]`,
   drag a **Static Content** region into `BODY`, dropped **above** the My Profile form. Then set:
   - `[Right Pane ▸ Identification ▸ Title]` → *(clear it — blank)*
   - `[Right Pane ▸ Appearance ▸ Template]` → **Blank with Attributes**
   - `[Right Pane ▸ Source ▸ HTML Code]` → `&APP_ROLE_DISP. · &APP_COMPANY_NAME.`

> `APP_ROLE_DISP` / `APP_COMPANY_NAME` are trusted app items set at login — safe to substitute directly.
> **Shortcut for step 5:** skip the region and instead set the form region's
> `[Right Pane ▸ Appearance ▸ Region Description]` to `&APP_ROLE_DISP. · &APP_COMPANY_NAME.`.
> **Page 14 already exists blank?** Skip the wizard; add a **Form** region on `APP_USERS` by hand, then
> do Steps 2–4 (a hand-added region has no auto items — you'll add every field in Step 3).

---

## Step 2: Fetch by Current User Only

> *The key must come only from the session, never from a URL parameter.*

1. Select the **form region** → set `[Right Pane ▸ Source ▸ Where Clause]` → `USER_ID = NV('APP_USER_ID')`.
2. Select `P14_USER_ID` → `[Right Pane ▸ Identification ▸ Type]` → **Hidden**.
3. Set `[Right Pane ▸ Settings ▸ Value Protected]` → **On** _(this switch appears only after Type = Hidden)._
4. **Leave the Source alone** — it must stay `[Right Pane ▸ Source ▸ Column]` = `USER_ID` with **Primary Key = On**
   (the wizard set this). That PK binding is what lets **Save** update the right row — do **not** switch it to
   Expression, or you'll strip the Primary Key toggle and break the update. The key for the *fetch* is supplied
   by the computation in the next step, not by this item's Source.
5. **Populate the key *before* the row fetch (critical — else the form loads blank).** Unlike every other
   form in this build, this page's key comes from the session, not the URL. The row-fetch process runs at
   **After Header**, but an item's *Source* is only evaluated later when the item *renders* — so at fetch
   time `P14_USER_ID` is still null and the fetch matches no row. Fix it with a computation that runs first:
   right-click `P14_USER_ID` under `[Left Pane ▸ Rendering]` → **Create Computation**, then set
   `[Right Pane ▸ Identification ▸ Computation Point]` → **Before Header**,
   `[Right Pane ▸ Computation ▸ Type]` → **Expression** (Language **PL/SQL**) → `NV('APP_USER_ID')`.

> **Symptom if you skip step 5:** the page renders with the banner filled in but every field (Full name,
> Email, …) blank. That means the fetch ran with a null key — add the Before-Header computation above.
> Quick check: Developer Toolbar ▸ **Session** should show `APP_USER_ID` populated; if it's empty instead,
> the post-auth `STAMP_TENANT_CONTEXT` proc isn't wired into the auth scheme (see `00-database-setup.md`).

---

## Step 3: Fields

> *Only **Full name** is editable; everything else is Display Only. The wizard made an item per column, so
> you hide the extras and add three items that aren't columns.*

1. Hide the columns the mockup omits — set each to `[Right Pane ▸ Identification ▸ Type]` → **Hidden**:
   `P14_COMPANY_ID`, `P14_DEPARTMENT_ID`, `P14_DEFAULT_ROLE`, `P14_STATUS`.
2. Add the 3 non-column items — for each: right-click the **My Profile** region → **Create Page Item**,
   rename it `[Right Pane ▸ Identification ▸ Name]`, set **Type = Display Only**:
   `P14_ROLE`, `P14_COMPANY`, `P14_TIER`.
3. Set every field's Label + Source per this table. **Items 1–2 already have their Source** (the wizard bound
   `P14_FULL_NAME`/`P14_EMAIL` to their columns — leave those). **Only items 3–5 need a Source set** — they're
   the ones you added by hand, so each shows a **⚠️** until you set it:

   | # | Item | Label | Type | Source |
   |---|------|-------|------|--------|
   | 1 | `P14_FULL_NAME` | Full name | **Text Field** (editable) | `APP_USERS.FULL_NAME` |
   | 2 | `P14_EMAIL` | Email | Display Only | `APP_USERS.EMAIL` |
   | 3 | `P14_ROLE` | Roles | Display Only | SQL Query (below) |
   | 4 | `P14_COMPANY` | Company | Display Only | SQL Query (below) |
   | 5 | `P14_TIER` | Tier (per project) | Display Only | SQL Query (below) |

4. `P14_ROLE` — set `[Right Pane ▸ Source ▸ Type]` → **SQL Query (return single value)**. Users can hold more
   than one role (`USER_ROLES` is one-to-many, decision P), so list them all rather than only the active one:

   ```sql
   SELECT LISTAGG(INITCAP(REPLACE(ROLE, '_', ' ')), ', ')
            WITHIN GROUP (ORDER BY ROLE)
     FROM USER_ROLES
    WHERE USER_ID = NV('APP_USER_ID')
   ```

5. `P14_COMPANY` — set `[Right Pane ▸ Source ▸ Type]` → **SQL Query (return single value)**:

   ```sql
   SELECT C.COMPANY_NAME
     FROM COMPANIES C
     JOIN APP_USERS U ON U.COMPANY_ID = C.COMPANY_ID
    WHERE U.USER_ID = NV('APP_USER_ID')
   ```

6. `P14_TIER` — set `[Right Pane ▸ Source ▸ Type]` → **SQL Query (return single value)**:

   ```sql
   SELECT LISTAGG(P.PROJECT_KEY || ': ' || AP.TIER, ', ')
            WITHIN GROUP (ORDER BY P.PROJECT_KEY)
     FROM AGENT_PROJECTS AP
     JOIN PROJECTS P ON P.PROJECT_ID = AP.PROJECT_ID
    WHERE AP.USER_ID = NV('APP_USER_ID')
   ```

7. `P14_TIER` — hide it for non-agents. Set **two** fields under `[Right Pane ▸ Server-side Condition]`:
   - `Type` → **Rows returned**
   - `SQL Query` → `SELECT 1 FROM AGENT_PROJECTS WHERE USER_ID = NV('APP_USER_ID')`

   Result: agents with mappings (query returns rows) see the field; clients with none don't.

   > **Do not** use *Item is NOT NULL on `P14_TIER`* here — it's circular. APEX checks the condition to
   > decide whether to render the item, but `P14_TIER`'s value comes from its own SQL source, which only
   > runs *if* the item renders. So at check time the item is always null and the field hides for
   > **everyone**, agents included. Condition on an independent query instead (above).

---

## Step 4: Save Process

> *The wizard already made the save process — leave it. It works as-is for the demo (only Full name is editable).*

1. Add a **Not Null** validation on `P14_FULL_NAME` — under `[Left Pane ▸ Processing]`, create a Validation,
   `[Right Pane ▸ Validation ▸ Type]` → **Item is NOT NULL**.

> **Optional hardening** — to guarantee only `FULL_NAME` is written: delete the auto-DML process and add
> one manual process with `[Right Pane ▸ Source ▸ PL/SQL Code]`:
> ```sql
> UPDATE APP_USERS SET FULL_NAME = :P14_FULL_NAME
>  WHERE USER_ID = NV('APP_USER_ID');
> ```

---

## Step 5: Authorization

> *No action. Any authenticated user sees their own profile; isolation is the `NV('APP_USER_ID')` key, not
> an authorization scheme.*

---

## Step 6: Test It

| Test | Expected |
|------|----------|
| Anna (Client User) | Full name (editable), email, role, company. **No** Tier field. |
| Mike (Support Agent) | Same four fields **plus** Tier showing `ACME-IT: L2, NW-APPS: L2`. |
| Edit Full name → Save | New name persists; email/company/role/tier unchanged. |
| Tamper URL `?P14_USER_ID=<other>` | Ignored — form still loads the logged-in user's row. |

---

## Isolation Checklist

- [ ] Fetch keys on `NV('APP_USER_ID')` only — no `P14_USER_ID` URL parameter, PK item Hidden + Value Protected.
- [ ] Save `WHERE USER_ID = NV('APP_USER_ID')` — update can reach no other row.
- [ ] Only `FULL_NAME` is writable; email, company, role, and tier are display-only.
- [ ] `P14_ROLE`, `P14_COMPANY` and `P14_TIER` queries all filter on `NV('APP_USER_ID')` — no cross-user leak.

---

**Next:** move to `16-sla-policies.md`.
