# Step 5 — Raise Ticket (p5) (MUST)

> *Clients raise incidents and service requests. The form mirrors the mockup's two sections — **1 · Project & type**, then **2 · Issue details** — but the critical part is what the **server** stamps: company, creator and department come from the session, never from the browser.*

---

## Step 1: Create the Page

> *This page is a **Modal Form** — a Form that opens as a dialog over the ticket list.*
> *If page 5 already exists as a blank page, skip the wizard. Open **page 5** in Page Designer, set **Page Mode = Modal Dialog (Large)**, and add a **Form** region on **`TICKETS`**. The form items are added by hand in Step 2 anyway.*

1. Open your app in **App Builder**, click **Create Page** (top-right), and select **Form**.
2. Wizard **screen 1** — fill this table, then click **Next**:

   | Field | Set to | Notes |
   |-------|--------|-------|
   | Page Number | `5` | The Raise Ticket page. |
   | Name | `Raise a Ticket` | Also becomes the dialog title. |
   | Page Mode | **Modal Dialog** | Set the dialog **Size = Large** in Page Designer after the wizard. |
   | Data Source | `Local Database` | Data lives in this workspace's schema. |
   | Source Type | `Table` | Point at a named table. |
   | Table / View Owner | *your workspace schema* | Leave the default. |
   | Table / View Name | `TICKETS` | The table the new ticket is inserted into. |
   | Use Breadcrumb | **Off** | Nav is built later. |
   | Use Navigation | **Off** | Skip for now. |

3. Wizard **screen 2** — fill this table, then click **Create Page**:

   | Field | Set to | Notes |
   |-------|--------|-------|
   | Primary Key Column 1 | `TICKET_ID (Number)` | Auto-detected PK of `TICKETS`. |
   | Primary Key Column 2 | *(leave `- Select -`)* | Single-column key. |
   | Branch Here on Submit | *(leave blank)* | A Modal Dialog closes via the wizard's **Close Dialog** process (Step 5), not a page branch. A stray page branch throws *"Page Number is required"* on Save. |
   | Cancel and Go To Page | `3` | Back to the Ticket Queue. |

4. Delete the wizard's generated items and its automatic DML process once Steps 2 and 4 are in place (we use manual items and a manual PL/SQL process).
5. From `[Central Pane ▸ Gallery ▸ Regions]`, drag a **Static Content** region onto `[Central Pane ▸ Layout]` (above the form).
6. Set `[Right Pane ▸ Source ▸ HTML Code]` to the following tenant banner HTML:

   ```html
   🔒 Filed under <b>&APP_COMPANY_NAME.</b>.
   ```

   > `APP_COMPANY_NAME` is a trusted app item set at login (safe to substitute directly). Do **not**
   > reference `&APP_DEPARTMENT_NAME.` here — no such session item exists (the login stamps only
   > `APP_USER_ID` / `APP_COMPANY_ID` / `APP_COMPANY_NAME` / `APP_ROLE` / `APP_ROLE_DISP` /
   > `APP_HAS_MULTI_ROLE`); the ticket's department is derived server-side at insert (Step 4).

---

## Step 2: Add Form Items (mockup order)

> *The mockup groups fields under two section headers. We add two **Display-Only / static** sub-headings (`1 · Project & type`, `2 · Issue details`) to match.*
> *Note: There is deliberately no Priority, Department, or "On behalf of" field. These are set via server-side defaults, session metadata, or triage agents.*

1. Add two **Display-Only** items to act as sub-headings: `1 · Project & type` and `2 · Issue details`.
2. Drag items from `[Central Pane ▸ Gallery ▸ Items]` onto `[Central Pane ▸ Layout]`.
3. Set their Type (`[Right Pane ▸ Identification ▸ Type]`), Required flag (`[Right Pane ▸ Validation ▸ Value Required]`), and Help/Placeholder text.

**Section 1 · Project & type**

| Item | Type | Notes |
|------|------|-------|
| `P5_PROJECT_ID` | Select List | **Required.** LOV from `V_MY_PROJECTS` (Step 3). |
| `P5_TICKET_TYPE` | Select List | **Required.** Static LOV: `INCIDENT` / `SERVICE_REQUEST`, default `INCIDENT`. |
| `P5_CATEGORY_ID` | Select List | **Required.** Cascading LOV on `P5_PROJECT_ID` from `V_MY_CATEGORIES` (Step 3). |

**Section 2 · Issue details**

| Item | Type | Notes |
|------|------|-------|
| `P5_SUBJECT` | Text Field | **Required.** Placeholder "Short summary". |
| `P5_DESCRIPTION` | Textarea | **Required.** Placeholder "Describe the issue…". |
| `P5_SEVERITY` | Select List | **Required.** Static LOV: Critical / Major / Minor / Low, default `Minor`. |
| `P5_ASSIGNED_TO` | Select List | **Optional.** LOV of agents (Step 3). Null display value `— Unassigned —`. |
| `P5_ATTACH` | File Browse… | **Optional.** Matches mockup drop-zone. See settings below. |

4. For the `P5_ATTACH` File Browse item, set the following properties:
   - `[Right Pane ▸ Settings ▸ Storage Type]`: **Table APEX_APPLICATION_TEMP_FILES**
   - `[Right Pane ▸ Settings ▸ Allow Multiple Files]`: **On**
   - `[Right Pane ▸ Settings ▸ File Types]`: `image/*,application/pdf` *(client-side filter only)*

5. **Static-value Select Lists** (`P5_TICKET_TYPE`, `P5_SEVERITY`) — set `[Right Pane ▸ List of Values ▸ Type]` = **Static Values**, click into the editor, and fill the **Display Value** (what the user sees) / **Return Value** (what is stored) rows. The Return Value must match the DB exactly — Step 4 writes `:P5_TICKET_TYPE`/`:P5_SEVERITY` straight into the column, and the SLA lookup joins `SLA_TARGETS.SEVERITY = :P5_SEVERITY`.

   **`P5_TICKET_TYPE`:**

   | Display Value | Return Value |
   |---------------|--------------|
   | `Incident` | `INCIDENT` |
   | `Service Request` | `SERVICE_REQUEST` |

   **`P5_SEVERITY`:**

   | Display Value | Return Value |
   |---------------|--------------|
   | `Critical` | `Critical` |
   | `Major` | `Major` |
   | `Minor` | `Minor` |
   | `Low` | `Low` |

6. For each static-value list, back in the item panel:
   - `[Right Pane ▸ Default ▸ Type]` = **Static**, Default value = `INCIDENT` (ticket type) / `Minor` (severity).
   - `[Right Pane ▸ List of Values ▸ Display Null Value]` = **Off** — these are required and defaulted, so no blank `- Select -` option.
   - `[Right Pane ▸ List of Values ▸ Display Extra Values]` = **Off**.

---

## Step 3: Set Up the LOVs

> *Each LOV is set on its item via `[Right Pane ▸ List of Values ▸ Type]` = SQL Query.*

1. Set the LOV for **Project** (`P5_PROJECT_ID`):

   ```sql
   SELECT PROJECT_NAME AS d, PROJECT_ID AS r
     FROM V_MY_PROJECTS
    WHERE IS_ACTIVE = 'Y'
    ORDER BY PROJECT_NAME
   ```

2. Set the cascading LOV for **Category** (`P5_CATEGORY_ID`). Set `[Right Pane ▸ List of Values ▸ Cascading LOV Parent Item(s)]` to `P5_PROJECT_ID`.

   ```sql
   SELECT CATEGORY_NAME AS d, CATEGORY_ID AS r
     FROM V_MY_CATEGORIES
    WHERE :P5_PROJECT_ID IS NOT NULL
      AND (PROJECT_ID = :P5_PROJECT_ID OR PROJECT_ID IS NULL)
    ORDER BY CATEGORY_NAME
   ```

3. Set the cascading LOV for **Assign to** (`P5_ASSIGNED_TO`). Set the parent item to `P5_PROJECT_ID`.

   ```sql
   SELECT au.FULL_NAME || ' [' || ap.TIER || '] · '
          || (SELECT COUNT(*) FROM V_MY_TICKETS t
               WHERE t.ASSIGNED_TO = au.USER_ID
                 AND t.STATUS <> 'Closed')
          || ' open'                              AS d,
          au.USER_ID                              AS r
     FROM AGENT_PROJECTS ap
     JOIN APP_USERS au ON au.USER_ID = ap.USER_ID
    WHERE ap.PROJECT_ID = :P5_PROJECT_ID
      AND ap.PROJECT_ID IN (SELECT PROJECT_ID FROM V_MY_PROJECTS)
      AND au.STATUS = 'ACTIVE'
      AND ( :APP_ROLE = 'CLIENT_ADMIN' OR ap.TIER = 'L1' )
    ORDER BY au.FULL_NAME
   ```

   > **Isolation (critical):** the `AND ap.PROJECT_ID IN (SELECT PROJECT_ID FROM V_MY_PROJECTS)` line is not optional. `P5_PROJECT_ID` is a submittable item, and this cascading LOV's AJAX callback runs server-side against whatever `project_id` is posted — the `V_MY_PROJECTS` scope on the *parent dropdown* does **not** carry into this query. Without the gate, a client can tamper the posted `project_id` and enumerate another tenant's agent roster (names + tiers). This matches the project rule: every LOV selects through `V_MY_*`, never bare base tables.

---

## Step 3a: Attachment Validation (server-side allowlist)

> *The client-side `accept` filter is not a security boundary. We must check mime type and size on the server in a page Validation.*

1. In `[Left Pane ▸ Processing]` (the third tab), expand the **Validating** group, right-click **Validations** → **Create Validation**. (Validations sit under **Validating**, not under the *Processing* group below it.)
2. Set `[Right Pane ▸ Identification ▸ Name]` to `Attachments Are Allowed Types` (it defaults to `New`).
3. Set `[Right Pane ▸ Validation ▸ Type]` to **Function Body (returning Error Text)** and leave **Language = PL/SQL**.
4. Paste the following into `[Right Pane ▸ Validation ▸ PL/SQL Function Body Returning Error Text]`:

   ```sql
   DECLARE
     l_err VARCHAR2(4000);
   BEGIN
     FOR f IN (
       SELECT filename, mime_type,
              DBMS_LOB.GETLENGTH(blob_content) AS file_size
         FROM apex_application_temp_files
        WHERE name IN (SELECT column_value
                         FROM TABLE(APEX_STRING.SPLIT(:P5_ATTACH, ':')))
     ) LOOP
       -- Allowlist: images and PDF only.
       IF NVL(f.mime_type,'x') NOT LIKE 'image/%'
          AND f.mime_type <> 'application/pdf' THEN
         l_err := 'File "'||f.filename||'" is not an allowed type (images or PDF only).';
       END IF;
       -- Size cap: 10 MB per file.
       IF f.file_size > 10 * 1024 * 1024 THEN
         l_err := 'File "'||f.filename||'" exceeds the 10 MB limit.';
       END IF;
     END LOOP;
     RETURN l_err;   -- NULL = valid
   END;
   ```

   > `apex_application_temp_files` has **no `doc_size` column** (that raises `ORA-00904: "DOC_SIZE": invalid identifier`). File size comes from `DBMS_LOB.GETLENGTH(blob_content)`.

5. Turn `[Right Pane ▸ Execution ▸ Always Execute]` **Off** to skip this when no file is attached.

---

## Step 4: Add the Create Process

> *Derives company from the project, stamps creator + department from the session, validates category and agent, computes the SLA due date, inserts the ticket, then writes the history rows.*

1. In `[Left Pane ▸ Processing]`, expand the **Processing** group, right-click **Processes** → **Create Process**.
2. Set `[Right Pane ▸ Identification ▸ Name]` to `Create Ticket`, and `[Right Pane ▸ Identification ▸ Type]` to **Execute Code** (older APEX labelled this *PL/SQL Code*). Leave `[Right Pane ▸ Source ▸ Language]` = **PL/SQL**.
3. Set `[Right Pane ▸ Execution ▸ Point]` to **Processing** (runs After Submit).
4. Paste the block into `[Right Pane ▸ Source ▸ PL/SQL Code]`:

   ```sql
   DECLARE
     l_company_id   TICKETS.COMPANY_ID%TYPE;
     l_created_by   TICKETS.CREATED_BY%TYPE   := NV('APP_USER_ID');
     l_dept_id      TICKETS.DEPARTMENT_ID%TYPE;
     l_status       TICKETS.STATUS%TYPE;
     l_sla_due      TICKETS.SLA_DUE_DATE%TYPE;
     l_ok           PLS_INTEGER;
     l_ticket_id    TICKETS.TICKET_ID%TYPE;
   BEGIN
     -- 1. Project must be visible to the caller
     SELECT COUNT(*) INTO l_ok
       FROM V_MY_PROJECTS WHERE PROJECT_ID = :P5_PROJECT_ID AND IS_ACTIVE = 'Y';
     IF l_ok = 0 THEN raise_application_error(-20011, 'Invalid or inaccessible project.'); END IF;

     SELECT COMPANY_ID INTO l_company_id FROM PROJECTS WHERE PROJECT_ID = :P5_PROJECT_ID;

     -- 2. Category must be offerable within this project
     SELECT COUNT(*) INTO l_ok
       FROM V_MY_CATEGORIES
      WHERE CATEGORY_ID = :P5_CATEGORY_ID
        AND (PROJECT_ID = :P5_PROJECT_ID OR PROJECT_ID IS NULL);
     IF l_ok = 0 THEN raise_application_error(-20012, 'Invalid category.'); END IF;

     -- 3. Department = creator's own department
     SELECT DEPARTMENT_ID INTO l_dept_id
       FROM APP_USERS WHERE USER_ID = l_created_by AND COMPANY_ID = l_company_id;

     -- 4. Agent coverage check
     IF :P5_ASSIGNED_TO IS NOT NULL THEN
       SELECT COUNT(*) INTO l_ok
         FROM AGENT_PROJECTS
        WHERE USER_ID = :P5_ASSIGNED_TO AND PROJECT_ID = :P5_PROJECT_ID
          AND (:APP_ROLE = 'CLIENT_ADMIN' OR TIER = 'L1');
       IF l_ok = 0 THEN raise_application_error(-20013, 'Agent cannot be assigned to this project.'); END IF;
     END IF;

     l_status := CASE WHEN :P5_ASSIGNED_TO IS NULL THEN 'New' ELSE 'Assigned' END;

     -- 5. Stamp SLA due date
     BEGIN
       SELECT SYSTIMESTAMP + NUMTODSINTERVAL(st.RESOLUTION_DAYS, 'DAY') INTO l_sla_due
         FROM PROJECTS p
         JOIN SLA_POLICIES sp ON sp.SLA_POLICY_ID = NVL(p.SLA_POLICY_ID,
              (SELECT SLA_POLICY_ID FROM SLA_POLICIES WHERE IS_DEFAULT = 'Y' FETCH FIRST 1 ROW ONLY))
         JOIN SLA_TARGETS st ON st.SLA_POLICY_ID = sp.SLA_POLICY_ID AND st.SEVERITY = :P5_SEVERITY
        WHERE p.PROJECT_ID = :P5_PROJECT_ID;
     EXCEPTION WHEN NO_DATA_FOUND THEN l_sla_due := NULL;
     END;

     -- 6. Insert
     INSERT INTO TICKETS (COMPANY_ID, PROJECT_ID, DEPARTMENT_ID, TICKET_TYPE, SUBJECT,
       DESCRIPTION, CATEGORY_ID, SEVERITY, STATUS, CREATED_BY, ASSIGNED_TO, SLA_DUE_DATE)
     VALUES (l_company_id, :P5_PROJECT_ID, l_dept_id, :P5_TICKET_TYPE, :P5_SUBJECT,
       :P5_DESCRIPTION, :P5_CATEGORY_ID, :P5_SEVERITY, l_status, l_created_by,
       :P5_ASSIGNED_TO, l_sla_due)
     RETURNING TICKET_ID INTO l_ticket_id;

     -- 7. History
     INSERT INTO TICKET_HISTORY (TICKET_ID, USER_ID, ACTION, NEW_VALUE)
     VALUES (l_ticket_id, l_created_by, 'STATUS_CHANGE', l_status);

     IF :P5_ASSIGNED_TO IS NOT NULL THEN
       INSERT INTO TICKET_HISTORY (TICKET_ID, USER_ID, ACTION, NEW_VALUE)
       VALUES (l_ticket_id, l_created_by, 'ASSIGN', TO_CHAR(:P5_ASSIGNED_TO));
     END IF;

     -- 8. Persist uploaded files as ticket-level attachments
     INSERT INTO TICKET_ATTACHMENTS (TICKET_ID, COMMENT_ID, FILE_NAME, MIME_TYPE, FILE_BLOB)
     SELECT l_ticket_id, NULL, f.filename, f.mime_type, f.blob_content
       FROM apex_application_temp_files f
      WHERE f.name IN (SELECT column_value
                         FROM TABLE(APEX_STRING.SPLIT(:P5_ATTACH, ':')));
   END;
   ```

---

## Step 5: Close Dialog After Submit

> *In this APEX version, **Close Dialog is a Process type, not a Branch type** — so there's nothing to create here. The Modal Dialog wizard already added a `Close Dialog` process for you.*

1. Confirm the wizard's **Close Dialog** process exists under `[Left Pane ▸ Processing ▸ Processes]`. This is what closes the dialog and refreshes the parent Ticket Queue — leave it in place.
2. Make sure it runs **after** your `Create Ticket` process: `Create Ticket` should have a lower `[Right Pane ▸ Execution ▸ Sequence]` than `Close Dialog` (e.g. 60 vs the wizard default). If needed, drag it above `Close Dialog` in the tree.
3. **Delete any stray branch** you may have created following an earlier version of this step: `[Left Pane ▸ Processing ▸ Branches]` → right-click the extra branch (the one with the red ✕) → **Delete**. A branch with no Page Number blocks Save with *"Page Number is required"*.

> If the `Close Dialog` process is somehow missing, create it: right-click **Processes** → **Create Process**, set `[Right Pane ▸ Identification ▸ Type]` to **Close Dialog**.

---

## Step 6: Authorization

> *This scheme is also created in `01-login.md` Step 5. If you built that page first, it already exists — skip to step 4. Otherwise create it here (steps 1–3); it's idempotent, the two guides define it identically.*

1. Go to **Shared Components → Authorization Schemes → Create** → **From Scratch**.
2. Set:
   - `[Identification ▸ Name]`: `Can Raise Tickets`
   - `[Identification ▸ Scheme Type]`: **PL/SQL Function Body Returning Boolean**
   - `[Settings ▸ PL/SQL Function Body]`:
     ```sql
     RETURN :APP_ROLE IN ('CLIENT_USER','CLIENT_ADMIN','SYSTEM_ADMIN');
     ```
   - `[Evaluation Point ▸ …]`: set to **Once per page view**. Decision-P role-switching changes `APP_ROLE` without a re-login, so a "Once per session" cached result can lag a switch (a user could keep/lose the Raise page across a toggle). Per-page-view keeps the scheme in step with the active role. (No tenant leak either way — raising is still gated by `V_MY_PROJECTS` at query time — but this avoids stale authorization.)
3. Click **Create**.
4. Back in Page Designer, select the root **page** node in `[Left Pane ▸ Rendering]`.
5. Set `[Right Pane ▸ Security ▸ Authorization Scheme]` to `Can Raise Tickets`.

---

## Step 7: Test It

| Test | Expected |
|------|----------|
| As Anna (Client User) | Sees only Acme's Open + invited projects; category empties until a project is picked; **Assign to** lists only **L1** agents on that project |
| As Bob (Client Admin) | Sees all Acme projects; **Assign to** lists **all tiers** covering the project |
| Submit unassigned | Ticket created — company = project's company, department = creator's, status **New**, SLA stamped, Priority NULL |
| Submit pre-assigned to an L1 | Status **Assigned**; one `STATUS_CHANGE` + one `ASSIGN` history row |
| Forge a Restricted project ID | Step 4 rejects it (`-20011`) |
| Forge an L2 agent as Anna | Step 4 rejects it (`-20013`) |
| Attach a PNG + a PDF, submit | Both saved as ticket-level rows in `TICKET_ATTACHMENTS` (COMMENT_ID NULL); `COMPANY_ID` = the ticket's, set by trigger |
| Attach a `.exe` (bypassing the accept filter) | Step 3a validation blocks submit with the allowlist error |
| Attach an 11 MB image | Step 3a validation blocks submit with the size error |

---

## Isolation Checklist

- [ ] Project LOV + validation both go through `V_MY_PROJECTS` (role matrix, active only)
- [ ] Category LOV + validation both go through `V_MY_CATEGORIES` (no cross-tenant labels leak)
- [ ] `COMPANY_ID` derived from the project server-side — never a submittable item
- [ ] `CREATED_BY` and `DEPARTMENT_ID` come from the session, not the browser
- [ ] `P5_ASSIGNED_TO` re-verified against `AGENT_PROJECTS` (L1-only for Client Users)
- [ ] `PRIORITY` left NULL for clients (support-set at triage, FR-37)
- [ ] Attachment mime **and** size re-validated server-side (Step 3a) — the `accept` filter is not trusted
- [ ] `TICKET_ATTACHMENTS.COMPANY_ID` comes from the trigger (parent ticket), never a page item
- [ ] Files persist only **after** the ticket insert, keyed to the real `TICKET_ID`, `COMMENT_ID = NULL`

---

**Next:** move to `06-assign.md`.
