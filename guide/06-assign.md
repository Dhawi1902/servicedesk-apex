# Step 6 — Assign / Reassign (p6) (MUST)

> *One LOV + one process — but the LOV rules encode half the role model, so get them exactly right. Mockup: `docs/mockups/07-assign.html` → `renderAssign()`.*

---

## Step 1: Create the Page

> *This page is a **Modal Form** — it opens as a dialog over the Ticket Detail page.*
> *If page 6 already exists as a blank page, skip the wizard. Open **page 6** in Page Designer and set **Page Mode = Modal Dialog**. Every item on this modal is added by hand below, so there's no wizard scaffolding to miss.*

1. Open your app in **App Builder**, click **Create Page** (top-right), and select **Form**.
2. Wizard **screen 1** — fill this table, then click **Next**:

   | Field | Set to | Notes |
   |-------|--------|-------|
   | Page Number | `6` | The Assign / Reassign page. |
   | Name | `Assign Ticket` | Also becomes the page title. |
   | Page Mode | **Modal Dialog** | Opens as a dialog, not a full page. |
   | Data Source | `Local Database` | Data lives in this workspace's schema. |
   | Source Type | `Table` | The modal ultimately updates a ticket row. |
   | Table / View Owner | *your workspace schema* | Leave the default. |
   | Table / View Name | `TICKETS` | The table the assignment updates (`ASSIGNED_TO`). |
   | Use Breadcrumb | **Off** | Nav is built later. |
   | Use Navigation | **Off** | Skip for now. |

3. Wizard **screen 2** — fill this table, then click **Create Page**:

   | Field | Set to | Notes |
   |-------|--------|-------|
   | Primary Key Column 1 | `TICKET_ID (Number)` | Auto-detected PK of `TICKETS`. |
   | Primary Key Column 2 | *(leave `- Select -`)* | Single-column key. |
   | Branch Here on Submit | *(leave blank)* | A Modal Dialog closes via the wizard's **Close Dialog** process (Step 7), not a page branch. A stray page branch throws *"Page Number is required"* on Save. |
   | Cancel and Go To Page | `4` | Back to Ticket Detail. |

4. Delete the auto-generated items and the automatic DML process.
5. Set the dialog **Title** to `Assign &middot; &P6_TICKET_REF.` on the page's Dialog attributes.
6. Create the items below by dragging from `[Central Pane ▸ Gallery ▸ Items]` onto `[Central Pane ▸ Layout]`, top to bottom, matching the mockup:

   | Item | Type | Purpose |
   |------|------|---------|
   | `P6_TICKET_ID` | Hidden (value-protected) | Passed from page 4 detail |
   | `P6_TICKET_REF` | Display Only | Header + context line |
   | `P6_SUBJECT` | Display Only | "Put an agent on **…**" |
   | `P6_COMPANY_NAME` | Display Only | Context line |
   | `P6_PROJECT_NAME` | Display Only | Context line + client banner |
   | `P6_PROJECT_ID` | Hidden (value-protected) | Scopes the agent LOV |
   | `P6_SEVERITY` | Display Only | Context line |
   | `P6_ASSIGNED_TO` | Select List | The agent to assign (the one required field) |
   | `P6_SEND_EMAIL` | Switch (Y/N, default `Y`) | "Send assignment email" |

---

## Step 2: Fetch the Ticket Context (pre-render)

> *Populates the display items and re-checks visibility. Reads `V_MY_*` only, so a forged `P6_TICKET_ID` fetches nothing.*

1. Under `[Left Pane ▸ Processing]`, right-click **Before Header** → **Create Process**.
2. Set its properties:
   - `[Right Pane ▸ Identification ▸ Type]`: **Execute Code** (the anonymous-PL/SQL process type; older APEX labelled it *PL/SQL Code*)
   - `[Right Pane ▸ Source ▸ PL/SQL Code]`:

   ```sql
   BEGIN
     SELECT t.TICKET_REF, t.SUBJECT, t.SEVERITY, t.PROJECT_ID,
            p.PROJECT_NAME, c.COMPANY_NAME
       INTO :P6_TICKET_REF, :P6_SUBJECT, :P6_SEVERITY, :P6_PROJECT_ID,
            :P6_PROJECT_NAME, :P6_COMPANY_NAME
       FROM V_MY_TICKETS t
       JOIN V_MY_PROJECTS p ON p.PROJECT_ID = t.PROJECT_ID
       JOIN COMPANIES     c ON c.COMPANY_ID = t.COMPANY_ID
      WHERE t.TICKET_ID = :P6_TICKET_ID;
   EXCEPTION
     WHEN NO_DATA_FOUND THEN
       raise_application_error(-20020, 'Ticket not found or not visible to you.');
   END;
   ```

3. From `[Central Pane ▸ Gallery ▸ Regions]`, drag a **Static Content** region onto `[Central Pane ▸ Layout]` (under the header) to act as the context line.
4. Set its `[Right Pane ▸ Source ▸ HTML Code]` to:
   `Put an agent on **&P6_SUBJECT.** (&P6_COMPANY_NAME. / &P6_PROJECT_NAME., &P6_SEVERITY.).`

5. Add another **Static Content** region for the **Client-only banner**.
6. Set its `[Right Pane ▸ Source ▸ HTML Code]` to:
   `&#128274; Only agents assigned to project **&P6_PROJECT_NAME.** are shown.`
7. Restrict the client banner via `[Right Pane ▸ Server-side Condition ▸ Type]` = **Expression**: `:APP_ROLE IN ('CLIENT_USER','CLIENT_ADMIN')`.

---

## Step 3: Who Can Assign to Whom

| Caller | May assign | Agent LOV shows |
|--------|-----------|-----------------|
| **System Admin** | any ticket, anyone | All agents mapped to the ticket's project, any tier |
| **Client Admin** | any ticket of their company | Agents mapped to the ticket's project, any tier |
| **Client User** | own-scope tickets | Agents whose tier on the ticket's project is **L1 only** |
| **Agent (self-assign)** | unassigned tickets on their projects | Themselves only |
| **Agent (reassign)** | tickets assigned to them | Same project, **same-or-higher tier** (FR-26) |

---

## Step 4: Add the Agent LOV

> *The LOV displays the workload per agent. If the LOV returns no rows, the Select List is empty and the validation below blocks the submit.*

1. Select `P6_ASSIGNED_TO` in `[Left Pane ▸ Rendering]`.
2. Set its properties:
   - `[Right Pane ▸ Label ▸ Label]`: **Assign to agent**
   - `[Right Pane ▸ Validation ▸ Value Required]`: **On**
   - `[Right Pane ▸ List of Values ▸ Type]`: **SQL Query**
3. Paste the query into `[Right Pane ▸ List of Values ▸ SQL Query]`:

   ```sql
   SELECT u.FULL_NAME || ' [' || ap.TIER || '] · ' ||
          (SELECT COUNT(*) FROM V_MY_TICKETS t
            WHERE t.ASSIGNED_TO = u.USER_ID
              AND t.STATUS <> 'Closed') || ' open' AS d,
          u.USER_ID AS r
     FROM APP_USERS u
     JOIN AGENT_PROJECTS ap ON ap.USER_ID = u.USER_ID
    WHERE ap.PROJECT_ID = :P6_PROJECT_ID
      AND u.STATUS = 'ACTIVE'
      AND ( :APP_ROLE IN ('SYSTEM_ADMIN','CLIENT_ADMIN')
         OR (:APP_ROLE = 'CLIENT_USER'   AND ap.TIER = 'L1')
         OR (:APP_ROLE = 'SUPPORT_AGENT' AND ap.TIER >= (
               SELECT my.TIER FROM AGENT_PROJECTS my
                WHERE my.USER_ID = NV('APP_USER_ID')
                  AND my.PROJECT_ID = ap.PROJECT_ID)) )
    ORDER BY u.FULL_NAME
   ```

4. Set `[Right Pane ▸ List of Values ▸ Display Null Value]` to **On**.
5. Set `[Right Pane ▸ List of Values ▸ Null Display Value]` to `No eligible agent on this project`.

> *Tier is `L1`–`L4`, so `ap.TIER >= my.TIER` is a safe lexical compare (`L2 >= L2`, `L3 >= L2` true; `L1 >= L2` false) — an agent may reassign to their own tier or higher.*

---

## Step 5: Add the Send-Email Switch

> *This is the FR-22 assignment-notification hook. The process only fires APEX_MAIL when it is `Y`, so the switch stays declarative.*

1. Select `P6_SEND_EMAIL` in `[Left Pane ▸ Rendering]`.
2. Set its properties:
   - `[Right Pane ▸ Settings ▸ On Value]`: `Y`
   - `[Right Pane ▸ Settings ▸ Off Value]`: `N`
   - `[Right Pane ▸ Default ▸ Value]`: `Y`
   - `[Right Pane ▸ Label ▸ Label]`: **Send assignment email**

---

## Step 6: Add the Assignment Process

> *Re-runs the full tier check server-side, guards the ticket via `V_MY_TICKETS`, updates the base table, and writes history.*

1. Under `[Left Pane ▸ Processing]`, right-click **Processes** → **Create Process**.
2. Set `[Right Pane ▸ Identification ▸ Type]` to **Execute Code** (the anonymous-PL/SQL process type; older APEX labelled it *PL/SQL Code*). Leave `[Right Pane ▸ Source ▸ Language]` = **PL/SQL**.
3. Set `[Right Pane ▸ Execution ▸ Point]` to **Processing** (After Submit).
4. Paste the code into `[Right Pane ▸ Source ▸ PL/SQL Code]`:

   ```sql
   DECLARE
     l_ok         PLS_INTEGER;
     l_agent_ok   PLS_INTEGER;
     l_old_status TICKETS.STATUS%TYPE;
     l_old_agent  TICKETS.ASSIGNED_TO%TYPE;
   BEGIN
     -- Guard: ticket must be visible to the caller.
     SELECT COUNT(*) INTO l_ok FROM V_MY_TICKETS WHERE TICKET_ID = :P6_TICKET_ID;
     IF l_ok = 0 THEN raise_application_error(-20020, 'Ticket not found.'); END IF;

     -- Guard: chosen agent must be tier-eligible for THIS ticket's project.
     SELECT COUNT(*) INTO l_agent_ok
       FROM APP_USERS u
       JOIN AGENT_PROJECTS ap ON ap.USER_ID = u.USER_ID
      WHERE u.USER_ID = :P6_ASSIGNED_TO
        AND u.STATUS = 'ACTIVE'
        AND ap.PROJECT_ID = (SELECT PROJECT_ID FROM TICKETS WHERE TICKET_ID = :P6_TICKET_ID)
        AND ( :APP_ROLE IN ('SYSTEM_ADMIN','CLIENT_ADMIN')
           OR (:APP_ROLE = 'CLIENT_USER'   AND ap.TIER = 'L1')
           OR (:APP_ROLE = 'SUPPORT_AGENT' AND ap.TIER >= (
                 SELECT my.TIER FROM AGENT_PROJECTS my
                  WHERE my.USER_ID = NV('APP_USER_ID')
                    AND my.PROJECT_ID = ap.PROJECT_ID)) );
     IF l_agent_ok = 0 THEN raise_application_error(-20021, 'Agent not eligible.'); END IF;

     SELECT STATUS, ASSIGNED_TO INTO l_old_status, l_old_agent
       FROM TICKETS WHERE TICKET_ID = :P6_TICKET_ID;

     UPDATE TICKETS
        SET ASSIGNED_TO = :P6_ASSIGNED_TO,
            STATUS      = CASE WHEN l_old_status = 'New' THEN 'Assigned' ELSE l_old_status END,
            UPDATED_AT  = SYSTIMESTAMP
      WHERE TICKET_ID = :P6_TICKET_ID;

     -- History: ASSIGN if it had no agent, REASSIGN if it changed hands.
     INSERT INTO TICKET_HISTORY (TICKET_ID, USER_ID, ACTION, OLD_VALUE, NEW_VALUE, CREATED_AT)
     VALUES (:P6_TICKET_ID, NV('APP_USER_ID'),
             CASE WHEN l_old_agent IS NULL THEN 'ASSIGN' ELSE 'REASSIGN' END,
             (SELECT FULL_NAME FROM APP_USERS WHERE USER_ID = l_old_agent),
             (SELECT FULL_NAME FROM APP_USERS WHERE USER_ID = :P6_ASSIGNED_TO), SYSTIMESTAMP);

     IF l_old_status = 'New' THEN
       INSERT INTO TICKET_HISTORY (TICKET_ID, USER_ID, ACTION, OLD_VALUE, NEW_VALUE, CREATED_AT)
       VALUES (:P6_TICKET_ID, NV('APP_USER_ID'), 'STATUS_CHANGE', 'New', 'Assigned', SYSTIMESTAMP);
     END IF;

     -- FR-22 assignment notification
     IF :P6_SEND_EMAIL = 'Y' THEN
       NULL;  -- APEX_MAIL.SEND to the assignee
     END IF;
   END;
   ```

5. Under `[Left Pane ▸ Processing]`, right-click **Validations** → **Create Validation**.
6. Set its properties:
   - `[Right Pane ▸ Validation ▸ Type]`: **Item is NOT NULL** against `P6_ASSIGNED_TO`
   - `[Right Pane ▸ Error ▸ Error Message]`: `Select an eligible agent`

---

## Step 7: Close Dialog After Submit

> *In this APEX version, **Close Dialog is a Process type, not a Branch type**. The Modal Dialog wizard already added a `Close Dialog` process — don't create a branch for it.*

1. Confirm the wizard's **Close Dialog** process exists under `[Left Pane ▸ Processing ▸ Processes]`, and that it runs **after** your assignment process (lower `[Right Pane ▸ Execution ▸ Sequence]` on the assignment process). If it's missing, right-click **Processes** → **Create Process** and set `[Right Pane ▸ Identification ▸ Type]` to **Close Dialog**.
2. Delete any stray branch (red ✕) under `[Left Pane ▸ Processing ▸ Branches]` — a branch with no Page Number blocks Save with *"Page Number is required"*.
3. Add a **Cancel** button to the dialog footer via `[Central Pane ▸ Gallery ▸ Buttons]`, setting its Action to **Redirect to Page in this Application** (Page `4`).
4. Add a primary **Assign** submit button, setting its Action to **Submit Page**.

---

## Step 8: Test It

| Test | Expected |
|------|----------|
| As Anna (Client User) | LOV shows only L1 agents on the ticket's project, as `Name [L1] · N open` |
| On a GLBX-CRM ticket as client | LOV empty (no L1 agent) — null message, validation blocks submit |
| As Mike (Agent), reassign his ticket | LOV shows same-or-higher tier agents; history logs `REASSIGN` |
| Assign a `New` ticket | Status flips to `Assigned`, history logs `ASSIGN` + `STATUS_CHANGE` |
| Turn the email switch off | No mail; assignment still succeeds |
| Forge `P6_ASSIGNED_TO` with wrong-tier agent | Process rejects (`Agent not eligible`) |
| Forge `P6_TICKET_ID` with a foreign ticket | Before-Header fetch / write guard errors out |

---

## Isolation Checklist

- [ ] Context fetch and write guard both go through `V_MY_TICKETS` — never base `TICKETS` for reads
- [ ] LOV and the process validation **both** enforce the tier matrix (never trust the posted value)
- [ ] Forged agent value rejected by process validation (`-20021`)
- [ ] Forged / foreign ticket ID → Before-Header or write-guard error (`-20020`)
- [ ] Mike gets different reassign options per project (tier is per `AGENT_PROJECTS` mapping)
- [ ] History rows use real columns (`USER_ID`/`ACTION`/`CREATED_AT`) and valid `ACTION` values

---

**Next:** move to `07-add-comment.md`.
