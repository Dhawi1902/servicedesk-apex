# Step 4 — Ticket Detail (p4) (MUST)

> *The hub of the app: one ticket's full story. The mockup lays it out in **two columns** — a wide left column (the ticket summary card + the **Conversation**) and a 300px right sidebar (**Properties** + **Activity History**). A single action bar across the header holds every button (assign, self-assign, escalate, set priority, the lifecycle transitions, comment). All fields are read-only on the page itself; every change happens through a button or a dialog.*

---

## Step 1: Create the Page

> *This page is a **Form** (one editable record — the ticket) shown as a full page.*
> *If page 4 already exists as a blank page, skip the wizard and open it in Page Designer. Add a **Form** region manually (`[Central Pane ▸ Gallery ▸ Regions]` → `[Right Pane ▸ Identification ▸ Type]` = Form) on **`V_MY_TICKETS`**, PK `TICKET_ID`. Note that adding it manually won't auto-generate the items, but you can add them based on the query in Step 2.*

1. Open your app in **App Builder**, click **Create Page** (top-right), and select **Form**.
2. Wizard **screen 1** — fill this table, then click **Next**:

   | Field | Set to | Notes |
   |-------|--------|-------|
   | Page Number | `4` | The Ticket Detail page. |
   | Name | `Ticket Detail` | Also becomes the page Title. |
   | Page Mode | `Normal` | Full page, not a dialog. |
   | Data Source | `Local Database` | Data lives in this workspace's schema. |
   | Source Type | `Table` | We point at a named object; the field below accepts a view. |
   | Table / View Owner | *your workspace schema* | Leave the default. |
   | Table / View Name | `V_MY_TICKETS` | The tenant-scoped view — never base `TICKETS`. |
   | Use Breadcrumb | **Off** | Nav is built later (Step 19). |
   | Use Navigation | **Off** | Same — skip for now. |

3. Wizard **screen 2** — fill this table, then click **Create Page**:

   | Field | Set to | Notes |
   |-------|--------|-------|
   | Primary Key Column 1 | `TICKET_ID (Number)` | The key `V_MY_TICKETS` exposes. |
   | Primary Key Column 2 | *(leave `- Select -`)* | Single-column key. |
   | Branch Here on Submit | `4` | Reload this page after a save. |
   | Cancel and Go To Page | `3` | Cancel returns to the Ticket Queue. |

> *APEX drops you into Page Designer with a Form region on `V_MY_TICKETS`, one item per column (`P4_TICKET_ID`, `P4_SUBJECT`, etc.), and an automatic **Process Form** DML process. Steps 2–11 will reshape this into the two-column hub.*

4. Under `[Left Pane ▸ Processing]`, select the automatic **Process Form** process.
5. Set `[Right Pane ▸ Settings ▸ Lost Update Type]` to **Checksum**.
6. Add an IDOR visibility guard: under `[Left Pane ▸ Processing]`, right-click **Before Header** → **Create Process**.
7. Set its properties:
   - `[Right Pane ▸ Identification ▸ Type]`: **PL/SQL Code**
   - `[Right Pane ▸ Source ▸ PL/SQL Code]`:
     ```sql
     DECLARE l_ok PLS_INTEGER;
     BEGIN
       SELECT COUNT(*) INTO l_ok FROM V_MY_TICKETS WHERE TICKET_ID = :P4_TICKET_ID;
       IF l_ok = 0 THEN
         raise_application_error(-20010, 'Ticket not found.');
       END IF;
     END;
     ```

---

## Step 2: Fetch the row (with lookup names)

> *The form fetches `V_MY_TICKETS` by PK, but the card and sidebar show **names**, not IDs. We use this as the page's source query so every display item is populated in one round-trip.*

1. In `[Left Pane ▸ Rendering]`, select the form region.
2. Set `[Right Pane ▸ Source ▸ SQL Query]` to:

   ```sql
   SELECT t.TICKET_REF, t.SUBJECT, t.DESCRIPTION, t.TICKET_TYPE, t.STATUS,
          t.SEVERITY, t.PRIORITY, t.SLA_DUE_DATE, t.FIRST_RESPONSE_AT,
          t.REOPEN_COUNT, t.RESOLUTION_CODE, t.RESOLUTION_SUMMARY, t.CSAT_SCORE,
          t.COMPANY_ID, t.PROJECT_ID, t.DEPARTMENT_ID, t.CATEGORY_ID,
          t.ASSIGNED_TO, t.CREATED_BY, t.CREATED_AT, t.UPDATED_AT,
          cat.CATEGORY_NAME     AS CATEGORY_NAME,
          cby.FULL_NAME         AS RAISED_BY,
          co.COMPANY_NAME       AS COMPANY_NAME,
          pr.PROJECT_NAME       AS PROJECT_NAME,
          dep.DEPARTMENT_NAME   AS DEPARTMENT_NAME,
          ato.FULL_NAME         AS ASSIGNEE_NAME
     FROM V_MY_TICKETS t
     LEFT JOIN CATEGORIES  cat ON cat.CATEGORY_ID   = t.CATEGORY_ID
     LEFT JOIN APP_USERS   cby ON cby.USER_ID       = t.CREATED_BY
     LEFT JOIN COMPANIES   co  ON co.COMPANY_ID     = t.COMPANY_ID
     LEFT JOIN PROJECTS    pr  ON pr.PROJECT_ID     = t.PROJECT_ID
     LEFT JOIN DEPARTMENTS dep ON dep.DEPARTMENT_ID = t.DEPARTMENT_ID
     LEFT JOIN APP_USERS   ato ON ato.USER_ID       = t.ASSIGNED_TO
    WHERE t.TICKET_ID = :P4_TICKET_ID
   ```

---

## Step 3: Ticket Summary card (left column, top)

> *Header shows the ref plus status/severity/priority/type/SLA values. Body shows the description, then a 4-up detail row.*

1. From `[Central Pane ▸ Gallery ▸ Regions]`, drag a **Static Content** region onto `[Central Pane ▸ Layout]` (left column, top).
2. Configure the **Header line** display items for: `TICKET_REF`, `TICKET_TYPE`, `STATUS`, `SEVERITY`, `PRIORITY`, and `SLA_DUE_DATE`.
3. Configure the **Detail row** display items inside the region:
   - `CATEGORY_NAME`
   - `RAISED_BY`
   - `COMPANY_NAME`
   - `PROJECT_NAME`
4. Set the `DESCRIPTION` item to appear above the detail row.
5. Escape the user-entered description text: select `P4_DESCRIPTION` and set `[Right Pane ▸ Security ▸ Escape special characters]` to **Yes**.

---

## Step 4: Conversation region (left column, below summary)

> *Comments are shown **oldest-first** (chat order). Internal notes are hidden from clients by the view, not by the page.*

1. From `[Central Pane ▸ Gallery ▸ Regions]`, drag a **Classic Report** region onto `[Central Pane ▸ Layout]` (below the summary).
2. Set its title: `[Right Pane ▸ Identification ▸ Title]` = `Conversation`.
3. Set `[Right Pane ▸ Appearance ▸ No Data Found Message]` to `No comments yet.`.
4. Paste the query into `[Right Pane ▸ Source ▸ SQL Query]`:

   ```sql
   SELECT u.FULL_NAME               AS AUTHOR,
          u.DEFAULT_ROLE            AS AUTHOR_ROLE,
          c.COMMENT_TEXT,
          c.IS_INTERNAL,
          c.CREATED_AT
     FROM V_MY_COMMENTS c
     JOIN APP_USERS u ON u.USER_ID = c.USER_ID
    WHERE c.TICKET_ID = :P4_TICKET_ID
    ORDER BY c.CREATED_AT ASC
   ```

5. Select the `COMMENT_TEXT` column in `[Left Pane ▸ Rendering]` and set `[Right Pane ▸ Security ▸ Escape special characters]` to **Yes**.
6. Add an **"＋ Add Comment"** button in the region header (`[Right Pane ▸ Layout ▸ Slot]` = `Edit`).
7. Configure the button to open the modal:
   - `[Right Pane ▸ Behavior ▸ Action]`: **Redirect to Page in this Application**
   - `[Right Pane ▸ Behavior ▸ Target]`: Page `7`, passing `P7_TICKET_ID` = `&P4_TICKET_ID.`

> *🔒 **Why internal-note files stay hidden:** Rule: every visibility rule for a file must live in `V_MY_ATTACHMENTS`, never in region SQL. A declarative Download BLOB column serves the file from a separate GET keyed only by `ATTACHMENT_ID`. It does not run this page's Before-Header guard.*

---

## Step 4a: Attachments region (FR-25)

1. From `[Central Pane ▸ Gallery ▸ Regions]`, drag a **Classic Report** region onto `[Central Pane ▸ Layout]` (below Conversation).
2. Set `[Right Pane ▸ Identification ▸ Title]` = `Attachments`.
3. Set `[Right Pane ▸ Appearance ▸ No Data Found Message]` to `No attachments.`.
4. Paste the query into `[Right Pane ▸ Source ▸ SQL Query]`:

   ```sql
   SELECT a.ATTACHMENT_ID,
          a.FILE_NAME,
          a.MIME_TYPE,
          u.FULL_NAME                       AS UPLOADED_BY_NAME,
          a.UPLOADED_AT,
          DBMS_LOB.GETLENGTH(a.FILE_BLOB)   AS FILE_BLOB
     FROM V_MY_ATTACHMENTS a
     LEFT JOIN APP_USERS u ON UPPER(u.EMAIL) = UPPER(a.UPLOADED_BY)
    WHERE a.TICKET_ID = :P4_TICKET_ID
      AND a.COMMENT_ID IS NULL
    ORDER BY a.UPLOADED_AT
   ```

5. Select the `FILE_BLOB` column and set `[Right Pane ▸ Identification ▸ Type]` to **Download BLOB**.
6. Configure `[Right Pane ▸ BLOB Attributes]`:
   - **Table Name**: `V_MY_ATTACHMENTS` *(must be the view)*
   - **BLOB Column**: `FILE_BLOB`
   - **Primary Key Column 1**: `ATTACHMENT_ID`
   - **MIME Type Column**: `MIME_TYPE`
   - **Filename Column**: `FILE_NAME`
   - **Content Disposition**: `attachment`
7. Ensure the `FILE_NAME` column has `[Right Pane ▸ Security ▸ Escape special characters]` set to **Yes**.

### (Optional) Image Preview Column

1. Add a hidden item `P4_ATTACH_FILE` (`[Right Pane ▸ Identification ▸ Type]` = File Browse).
2. Point its source at `V_MY_ATTACHMENTS`, mapping the BLOB, PK, MIME, and Filename.
3. Add a `PREVIEW` column to the Attachments SQL:
   ```sql
   CASE WHEN a.MIME_TYPE LIKE 'image/%'
        THEN '<img src="'||APEX_UTIL.GET_BLOB_FILE_SRC('P4_ATTACH_FILE', a.ATTACHMENT_ID)||'"'
             ||' alt="'||APEX_ESCAPE.HTML(a.FILE_NAME)||'" style="max-height:96px" />'
        ELSE NULL
   END AS PREVIEW
   ```
4. Set the `PREVIEW` column's `Escape special characters` to **No** (the HTML is manually escaped).

---

## Step 5: Properties card (right sidebar, top)

> *Each row is a Display-Only item placed inside a Static Content region.*

1. From `[Central Pane ▸ Gallery ▸ Regions]`, drag a **Static Content** region onto `[Central Pane ▸ Layout]` (right sidebar, top).
2. Add the following Display-Only items and apply the server-side conditions (`[Right Pane ▸ Server-side Condition ▸ Type]` = **Expression**):

   | # | Label | Source | Server-side Condition |
   |---|-------|--------|-----------------------|
   | 1 | Status | `STATUS` | always |
   | 2 | Ticket Type | `TICKET_TYPE` | always |
   | 3 | Severity | `SEVERITY` | always |
   | 4 | Priority | `PRIORITY` | always |
   | 5 | Assignee | `ASSIGNEE_NAME` | always |
   | 6 | Company | `COMPANY_NAME` | always |
   | 7 | Project | `PROJECT_NAME` | always |
   | 8 | Department | `DEPARTMENT_NAME` | always |
   | 9 | SLA Due | `SLA_DUE_DATE` | always |
   | 10 | First Response | `FIRST_RESPONSE_AT` | `:P4_FIRST_RESPONSE_AT IS NOT NULL` |
   | 11 | Reopen Count | `REOPEN_COUNT` | `:P4_REOPEN_COUNT > 0` |
   | 12 | Resolution Code | `RESOLUTION_CODE` | `:P4_STATUS IN ('Resolved','Closed') AND :P4_RESOLUTION_CODE IS NOT NULL` |
   | 13 | Resolution Summary | `RESOLUTION_SUMMARY` | same as #12 (escape HTML) |
   | 14 | CSAT | `CSAT_SCORE` | `:P4_STATUS = 'Closed'` |

---

## Step 6: Activity History region (right sidebar, below Properties)

> *Rendered as a timeline, newest-first. Maps the fixed enum to a friendly label.*

1. From `[Central Pane ▸ Gallery ▸ Regions]`, drag a **Classic Report** region onto `[Central Pane ▸ Layout]` (right sidebar).
2. Set its properties:
   - `[Right Pane ▸ Identification ▸ Title]`: `Activity History`
   - `[Right Pane ▸ Appearance ▸ Template]`: **Timeline**
3. Paste the query into `[Right Pane ▸ Source ▸ SQL Query]`:

   ```sql
   SELECT u.FULL_NAME AS WHO,
          h.ACTION,
          h.OLD_VALUE,
          h.NEW_VALUE,
          h.CREATED_AT
     FROM V_MY_HISTORY h
     JOIN APP_USERS u ON u.USER_ID = h.USER_ID
    WHERE h.TICKET_ID = :P4_TICKET_ID
    ORDER BY h.CREATED_AT DESC
   ```

---

## Step 7: Action bar buttons

> *Start Work / Put On Hold / Resolve / Resume are gated to admin or the agent working it. Close / Reopen are the client side.*

1. Drag buttons from `[Central Pane ▸ Gallery ▸ Buttons]` into the page header (`Right of Title` position).
2. Set labels, actions, and server-side **Expression** conditions for each:

   | Button | Label | Server-side Condition | Action |
   |--------|-------|-----------------------|--------|
   | **Assign** | "Assign" / "Reassign" | `:APP_ROLE = 'SYSTEM_ADMIN' OR (:APP_ROLE IN ('CLIENT_ADMIN','CLIENT_USER') AND :P4_COMPANY_ID = :APP_COMPANY_ID)` | Open Page 6 |
   | **Self-Assign** | `✎ Self-Assign` | `:APP_ROLE = 'SUPPORT_AGENT' AND :P4_ASSIGNED_TO IS NULL AND :P4_STATUS != 'Closed'` | Submit Page |
   | **Escalate** | `⚠ Escalate` | `:APP_ROLE IN ('SUPPORT_AGENT','SYSTEM_ADMIN') AND :P4_STATUS = 'In Progress'` | Open Page 6 |
   | **Set Priority**| `⚑ Set Priority` | `:APP_ROLE IN ('SUPPORT_AGENT','SYSTEM_ADMIN') AND :P4_PRIORITY IS NULL AND :P4_STATUS != 'Closed'` | Open Priority Dialog |
   | **Start Work** | `▶ Start Work` | `:P4_STATUS = 'Assigned' AND (:APP_ROLE = 'SYSTEM_ADMIN' OR (:APP_ROLE = 'SUPPORT_AGENT' AND (:P4_ASSIGNED_TO = :APP_USER_ID OR :P4_ASSIGNED_TO IS NULL)))` | Submit Page |
   | **Put On Hold** | `⏸ Put On Hold` | `:P4_STATUS = 'In Progress' AND (:APP_ROLE = 'SYSTEM_ADMIN' OR (:APP_ROLE = 'SUPPORT_AGENT' AND (:P4_ASSIGNED_TO = :APP_USER_ID OR :P4_ASSIGNED_TO IS NULL)))` | Submit Page |
   | **Resolve** | `✓ Resolve` | same signer test as above, `:P4_STATUS = 'In Progress'` | Open Resolve Dialog |
   | **Resume** | `▶ Resume` | `:P4_STATUS = 'On Hold' AND (:APP_ROLE = 'SYSTEM_ADMIN' OR (:APP_ROLE = 'SUPPORT_AGENT' AND (:P4_ASSIGNED_TO = :APP_USER_ID OR :P4_ASSIGNED_TO IS NULL)))` | Submit Page |
   | **Close** | `✓ Close` | `:P4_STATUS = 'Resolved' AND (:APP_ROLE = 'SYSTEM_ADMIN' OR (:APP_ROLE IN ('CLIENT_ADMIN','CLIENT_USER') AND :P4_COMPANY_ID = :APP_COMPANY_ID))` | Open Close Dialog |
   | **Reopen** | `↺ Reopen` | same signer test as above, `:P4_STATUS = 'Resolved'` | Submit Page |
   | **Comment** | `💬 Comment` | *any user who can see the ticket* | Open Page 7 |

---

## Step 8: Button processes (status transitions)

> *Every write process follows this pattern: visibility guard first, update base table, insert history row.*

1. Under `[Left Pane ▸ Processing]`, create one **PL/SQL Code** process per transition button (Start Work, Resume, etc.).
2. Set the `[Right Pane ▸ Server-side Condition ▸ When Button Pressed]` for each.
3. Use the following template, adjusting the `STATUS` value:

   ```sql
   DECLARE l_ok PLS_INTEGER;
   BEGIN
     SELECT COUNT(*) INTO l_ok FROM V_MY_TICKETS WHERE TICKET_ID = :P4_TICKET_ID;
     IF l_ok = 0 THEN raise_application_error(-20010, 'Ticket not found.'); END IF;

     UPDATE TICKETS SET STATUS = 'In Progress', UPDATED_AT = SYSTIMESTAMP
      WHERE TICKET_ID = :P4_TICKET_ID;

     INSERT INTO TICKET_HISTORY (TICKET_ID, USER_ID, ACTION, OLD_VALUE, NEW_VALUE)
     VALUES (:P4_TICKET_ID, :APP_USER_ID, 'STATUS_CHANGE', :P4_STATUS, 'In Progress');
   END;
   ```

4. For **Self-Assign**, use this logic:

   ```sql
   DECLARE l_ok PLS_INTEGER;
   BEGIN
     SELECT COUNT(*) INTO l_ok FROM V_MY_TICKETS WHERE TICKET_ID = :P4_TICKET_ID;
     IF l_ok = 0 THEN raise_application_error(-20010, 'Ticket not found.'); END IF;

     UPDATE TICKETS
        SET ASSIGNED_TO = :APP_USER_ID,
            STATUS      = CASE WHEN STATUS = 'New' THEN 'Assigned' ELSE STATUS END,
            UPDATED_AT  = SYSTIMESTAMP
      WHERE TICKET_ID = :P4_TICKET_ID
        AND ASSIGNED_TO IS NULL;

     INSERT INTO TICKET_HISTORY (TICKET_ID, USER_ID, ACTION, OLD_VALUE, NEW_VALUE)
     VALUES (:P4_TICKET_ID, :APP_USER_ID, 'ASSIGN', NULL, :APP_USER_ID);
   END;
   ```

---

## Step 9: Resolve dialog (FR-36)

1. From `[Central Pane ▸ Gallery ▸ Regions]`, drag an **Inline Dialog** onto `[Central Pane ▸ Layout]`.
2. Add `P4_RESOLUTION_CODE` (Select List) and `P4_RESOLUTION_SUMMARY` (Textarea).
3. Under `[Left Pane ▸ Processing]`, add two **Validations** ensuring both are NOT NULL when the **Resolve** button is pressed.
4. Add the Resolve PL/SQL process:

   ```sql
   DECLARE l_ok PLS_INTEGER;
   BEGIN
     SELECT COUNT(*) INTO l_ok FROM V_MY_TICKETS WHERE TICKET_ID = :P4_TICKET_ID;
     IF l_ok = 0 THEN raise_application_error(-20010, 'Ticket not found.'); END IF;

     UPDATE TICKETS
        SET STATUS = 'Resolved', RESOLVED_AT = SYSTIMESTAMP,
            RESOLUTION_CODE = :P4_RESOLUTION_CODE,
            RESOLUTION_SUMMARY = :P4_RESOLUTION_SUMMARY,
            UPDATED_AT = SYSTIMESTAMP
      WHERE TICKET_ID = :P4_TICKET_ID;

     INSERT INTO TICKET_HISTORY (TICKET_ID, USER_ID, ACTION, OLD_VALUE, NEW_VALUE)
     VALUES (:P4_TICKET_ID, :APP_USER_ID, 'STATUS_CHANGE', :P4_STATUS, 'Resolved');
   END;
   ```

---

## Step 10: Close dialog + CSAT (FR-27)

1. Add an **Inline Dialog** region for the Close confirmation and CSAT rating.
2. Set the CSAT star item `[Right Pane ▸ Server-side Condition ▸ Type]` to Expression:
   `:APP_ROLE IN ('CLIENT_USER','CLIENT_ADMIN') AND :P4_COMPANY_ID = :APP_COMPANY_ID AND :P4_CREATED_BY = :APP_USER_ID AND :P4_CSAT_SCORE IS NULL`
3. Add the **Close** PL/SQL process to set `STATUS='Closed'`, log history, and write the `CSAT_SCORE` if provided.
4. Add the **Reopen** PL/SQL process:

   ```sql
   UPDATE TICKETS
      SET STATUS = 'In Progress', REOPEN_COUNT = REOPEN_COUNT + 1, UPDATED_AT = SYSTIMESTAMP
    WHERE TICKET_ID = :P4_TICKET_ID;
   -- Make sure to include the V_MY_TICKETS guard first!
   ```

---

## Step 11: Set Priority dialog + Triage gate (FR-37)

1. Add an **Inline Dialog** for setting priority (`P4_PRIORITY` Select List).
2. Add its PL/SQL process to update the table and insert `PRIORITY_CHANGE` history.
3. Under `[Left Pane ▸ Processing]`, add a **Validation** tied to the **Start Work** button:
   - `[Right Pane ▸ Identification ▸ Type]`: **PL/SQL Expression**
   - Expression: `:P4_PRIORITY IS NOT NULL`
   - `[Right Pane ▸ Error ▸ Error Message]`: `Set a priority (triage) before starting work.`

---

## Step 12: Test It

| Test | Expected |
|------|----------|
| Open a ticket as Anna (Client User) | See summary, Conversation (no internal notes), Properties, Activity History. Only client-side buttons (Comment; Close/Reopen when Resolved). |
| Deep-link to a Globex ticket as Anna | "Ticket not found" (Before-Header guard) |
| Open the same ticket as its agent | Self-Assign / Start Work / Escalate / Set Priority appear per status |
| Click "Start Work" with no priority | Triage gate blocks it |
| Click Resolve | Dialog requires resolution code + summary |
| Close a ticket, then rate as the raiser | CSAT stars accept one rating; disappear as rateable afterward |
| View an internal note as an agent, then as the client | Visible to agent, hidden from client (`V_MY_COMMENTS`) |
| Open a ticket with attachments | Attachments region lists ticket-level files; images preview, others show a download link |
| Download a file, then hand-edit the attachment PK in the download URL to another tenant's | Fetches **nothing** (Download BLOB column reads `V_MY_ATTACHMENTS`) |

---

## Isolation Checklist

- [ ] Before-Header guard raises "Ticket not found" for a foreign/tampered `P4_TICKET_ID`
- [ ] Fetch query and every region select **`FROM V_MY_TICKETS / V_MY_COMMENTS / V_MY_HISTORY`** — never base tables
- [ ] Every write process (transitions, self-assign, resolve, close, reopen, priority, CSAT) runs the `V_MY_TICKETS` count guard first
- [ ] Comments come from `V_MY_COMMENTS` — internal notes stay hidden from clients even via URL tampering
- [ ] Every action button has a **server-side Condition** on `:APP_ROLE` / `:APP_USER_ID` / status — not CSS/JS hiding
- [ ] `COMPANY_ID` for a write is never taken from a submittable item — it is the ticket's own, re-verified through the view
- [ ] `DESCRIPTION`, `COMMENT_TEXT`, and `RESOLUTION_SUMMARY` are escaped with `APEX_ESCAPE.HTML`
- [ ] Attachments region SQL **and** the Download BLOB column's **Table Name** both point at `V_MY_ATTACHMENTS` (never base `TICKET_ATTACHMENTS`)
- [ ] The `P4_ATTACH_FILE` FILE item (image preview) also sources from `V_MY_ATTACHMENTS`
- [ ] `FILE_NAME` escaped: Escape=Yes on the filename column; the `<img>` preview column is Escape=No, so `FILE_NAME` is wrapped in `APEX_ESCAPE.HTML` inside it
- [ ] `P4_TICKET_ID` has Session State Protection = **Restricted — may not be set from browser**
- [ ] Comment-level files are listed via the `V_MY_COMMENTS` join (which hides internal notes)

---

**Next:** move to `05-raise-ticket.md`.
