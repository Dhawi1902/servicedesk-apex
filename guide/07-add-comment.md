# Step 7 — Add Comment (p7) (MUST)

> *Small page, three important behaviors: internal-note flag, first-response tracking, and comment notifications.*

---

## Step 1: Create the Page

> *This page is a **Modal Form** — it opens as a dialog over the Ticket Detail page.*

Open your app in **App Builder**, click the green **Create Page** button (top-right), and pick the **Form** tile to launch
the **Create Form** wizard — two screens.

> **Page already blank?** If page 7 already exists as a blank page, skip the wizard (creating on an
> existing page number clashes). Open **page 7** in Page Designer and set **Page Mode = Modal Dialog**.
> The items are all added by hand below, so a blank start loses nothing. The wizard route below still works
> when building from scratch.

**Wizard screen 1 — Page Definition + Data Source:**

| Field | Set to | Notes |
|-------|--------|-------|
| Page Number | `7` | The Add Comment page. |
| Name | `Add Comment` | Also becomes the page title. |
| Page Mode | **Modal Dialog** | Opens as a dialog, not a full page. |
| Data Source | `Local Database` | Data lives in this workspace's schema. |
| Source Type | `Table` | The modal inserts one comment row. |
| Table / View Owner | *your workspace schema* | Leave the default — do not hardcode a schema name. |
| Table / View Name | `TICKET_COMMENTS` | The table a new comment is inserted into. |
| Use Breadcrumb | **Off** | Nav is built later (Step 19). |
| Use Navigation | **Off** | Same — skip for now. |

Click **Next**.

**Wizard screen 2 — Primary Key + Branch Pages:**

| Field | Set to | Notes |
|-------|--------|-------|
| Primary Key Column 1 | `COMMENT_ID (Number)` | Auto-detected PK of `TICKET_COMMENTS`. |
| Primary Key Column 2 | *(leave `- Select -`)* | Single-column key. |
| Branch Here on Submit | *(leave blank)* | A Modal Dialog closes via the wizard's **Close Dialog** process (Step 4), not a page branch. A stray page branch throws *"Page Number is required"* on Save. |
| Cancel and Go To Page | `4` | Back to Ticket Detail. |

Click **Create Page**. APEX opens Page Designer with a Modal Dialog page and a Form region on
`TICKET_COMMENTS`. This build ignores the wizard's generated column items and its automatic DML
process — Step 2 adds just the Comment textarea, the staff-only Internal-note switch, and the File
Browse item by hand, and Step 3 inserts the comment with a manual PL/SQL process (so it can also stamp
first-response, history, and attachments). Delete the auto-generated items and the automatic DML
process, then add the hidden key item next.

Add a hidden item `P7_TICKET_ID` (passed from page 4). Set its `[Right Pane ▸ Security ▸ Session State Protection]` to **Restricted — may not be set from browser** so the value can't be tampered on the way in.

### Before-Header IDOR guard

> *Fail closed if the dialog is opened for a ticket the caller can't see. Consistent with pages 4/6/12 and required by this guide's checklist. The Step 3 Create process re-checks too — this is the belt to that braces.*

Under `[Left Pane ▸ Processing]`, right-click **Before Header** → **Create Process**, set `[Right Pane ▸ Identification ▸ Type]` = **Execute Code** (older APEX: *PL/SQL Code*), and paste into `[Right Pane ▸ Source ▸ PL/SQL Code]`:

```sql
DECLARE l_ok PLS_INTEGER;
BEGIN
  SELECT COUNT(*) INTO l_ok FROM V_MY_TICKETS WHERE TICKET_ID = :P7_TICKET_ID;
  IF l_ok = 0 THEN raise_application_error(-20010, 'Ticket not found.'); END IF;
END;
```

---

## Step 2: Add Form Items

> *Match the mockup modal: one required **Comment** textarea, and — for staff only — an **Internal note** switch.*

> *Create each item by dragging from `[Central Pane ▸ Gallery ▸ Items]` onto `[Central Pane ▸ Layout]`, then set its **Type** in `[Right Pane ▸ Identification ▸ Type]` and its **Label** in `[Right Pane ▸ Label ▸ Label]`.*

| Item | Type | Label | Notes |
|------|------|-------|-------|
| `P7_COMMENT_TEXT` | Textarea | `Comment` | Required. Placeholder `Type your reply…` — set Required in `[Right Pane ▸ Validation ▸ Value Required]` = Yes. |
| `P7_IS_INTERNAL` | Switch (Y/N) | `Internal note (hidden from client)` | **Condition:** `:APP_ROLE IN ('SUPPORT_AGENT','SYSTEM_ADMIN')` — only staff (Support Agent / System Admin) see this switch, matching the mockup's `canInternalNote`. Default `N`. Put the condition in `[Right Pane ▸ Server-side Condition ▸ Type]` (PL/SQL Expression); set the default in `[Right Pane ▸ Default]`. |
| `P7_ATTACH` | **File Browse…** | `Attach file or screenshot` | **Optional** (FR-25) — matches the mockup's `attachZoneHtml` drop-zone. Files persist against **this comment** (`COMMENT_ID`). See the settings note below. |

**File Browse item (`P7_ATTACH`) settings** — select it in `[Left Pane ▸ Rendering]` and set:
- `[Right Pane ▸ Settings ▸ Storage Type]` = **Table APEX_APPLICATION_TEMP_FILES** (Step 3 moves the file into `TICKET_ATTACHMENTS` after the comment exists and has a `COMMENT_ID`).
- `[Right Pane ▸ Settings ▸ Allow Multiple Files]` = **On** (item value = colon-separated temp-file names).
- `[Right Pane ▸ Settings ▸ File Types]` = `image/*,application/pdf` — **client-side convenience only**; the real allowlist is the server-side Validation in Step 2a.

> *The mockup titles the dialog **Add Comment · <ticket ref>**; APEX shows the page Name (`Add Comment`) as the modal title. Show the ticket reference in a read-only sub-label or the dialog subtitle if you want the exact wording — cosmetic only.*

---

## Step 2a: Attachment Validation (server-side allowlist)

> *The `File Types` accept filter is client-side only. Re-check mime type and size on the
> server in a page Validation — identical to Raise Ticket Step 3a.*

Under `[Left Pane ▸ Processing ▸ Validating]`, right-click **Validations** → **Create Validation** (Validations live under the **Validating** group). Set `[Right Pane ▸ Identification ▸ Name]` = `Attachments Are Allowed Types`, and `[Right Pane ▸ Validation ▸ Type]` = **Function Body (returning Error Text)**, Language **PL/SQL**:

```sql
DECLARE
  l_err VARCHAR2(4000);
BEGIN
  FOR f IN (
    SELECT filename, mime_type,
           DBMS_LOB.GETLENGTH(blob_content) AS file_size
      FROM apex_application_temp_files
     WHERE name IN (SELECT column_value
                      FROM TABLE(APEX_STRING.SPLIT(:P7_ATTACH, ':')))
  ) LOOP
    IF NVL(f.mime_type,'x') NOT LIKE 'image/%'
       AND f.mime_type <> 'application/pdf' THEN
      l_err := 'File "'||f.filename||'" is not an allowed type (images or PDF only).';
    END IF;
    IF f.file_size > 10 * 1024 * 1024 THEN
      l_err := 'File "'||f.filename||'" exceeds the 10 MB limit.';
    END IF;
  END LOOP;
  RETURN l_err;   -- NULL = valid; a NULL :P7_ATTACH yields no rows (no-op)
END;
```

> `apex_application_temp_files` has **no `doc_size` column** (raises `ORA-00904: "DOC_SIZE": invalid identifier`). Size comes from `DBMS_LOB.GETLENGTH(blob_content)`.

---

## Step 3: Add the Create Process

> *It re-checks visibility against `V_MY_TICKETS` before inserting the comment (the write guard), then persists any uploaded files against the **new comment**.*

Create it in `[Left Pane ▸ Processing]` (a Process, After Submit) and paste the PL/SQL into `[Right Pane ▸ Source ▸ PL/SQL Code]`.

```sql
DECLARE
  l_ok           PLS_INTEGER;
  l_is_internal  TICKET_COMMENTS.IS_INTERNAL%TYPE;
  l_first_resp   TICKETS.FIRST_RESPONSE_AT%TYPE;
  l_comment_id   TICKET_COMMENTS.COMMENT_ID%TYPE;
BEGIN
  SELECT COUNT(*) INTO l_ok FROM V_MY_TICKETS WHERE TICKET_ID = :P7_TICKET_ID;
  IF l_ok = 0 THEN raise_application_error(-20030, 'Ticket not found.'); END IF;

  IF :APP_ROLE IN ('CLIENT_USER','CLIENT_ADMIN') THEN
    l_is_internal := 'N';
  ELSE
    l_is_internal := NVL(:P7_IS_INTERNAL, 'N');
  END IF;

  INSERT INTO TICKET_COMMENTS (TICKET_ID, USER_ID, COMMENT_TEXT, IS_INTERNAL, CREATED_AT)
  VALUES (:P7_TICKET_ID, NV('APP_USER_ID'), :P7_COMMENT_TEXT, l_is_internal, SYSTIMESTAMP)
  RETURNING COMMENT_ID INTO l_comment_id;

  -- Persist uploaded files against THIS comment. COMPANY_ID is stamped by the
  -- TICKET_ATTACH_COMP_BI trigger from the parent ticket (never from the browser).
  INSERT INTO TICKET_ATTACHMENTS (TICKET_ID, COMMENT_ID, FILE_NAME, MIME_TYPE, FILE_BLOB)
  SELECT :P7_TICKET_ID, l_comment_id, f.filename, f.mime_type, f.blob_content
    FROM apex_application_temp_files f
   WHERE f.name IN (SELECT column_value
                      FROM TABLE(APEX_STRING.SPLIT(:P7_ATTACH, ':')));

  IF :APP_ROLE IN ('SUPPORT_AGENT','SYSTEM_ADMIN') AND l_is_internal = 'N' THEN
    SELECT FIRST_RESPONSE_AT INTO l_first_resp
      FROM TICKETS WHERE TICKET_ID = :P7_TICKET_ID;
    IF l_first_resp IS NULL THEN
      UPDATE TICKETS SET FIRST_RESPONSE_AT = SYSTIMESTAMP WHERE TICKET_ID = :P7_TICKET_ID;
    END IF;
  END IF;

  UPDATE TICKETS SET UPDATED_AT = SYSTIMESTAMP WHERE TICKET_ID = :P7_TICKET_ID;

  INSERT INTO TICKET_HISTORY (TICKET_ID, USER_ID, ACTION, OLD_VALUE, NEW_VALUE, CREATED_AT)
  VALUES (:P7_TICKET_ID, NV('APP_USER_ID'), 'COMMENT',
    NULL, CASE WHEN l_is_internal = 'Y' THEN '[Internal note]' ELSE 'Comment added' END, SYSTIMESTAMP);
END;
```

---

## Step 4: Buttons + Close Dialog After Submit

> *Match the mockup's modal footer — two buttons.*

Drag each from `[Central Pane ▸ Gallery ▸ Buttons]` onto `[Central Pane ▸ Layout]` and set its **Action** in `[Right Pane ▸ Behavior ▸ Action]`:

| Button | Label | Action |
|--------|-------|--------|
| `CANCEL` | `Cancel` | Close Dialog (no submit) |
| `CREATE` | `Post Comment` | Submit page → runs the Create process |

The dialog is closed by the wizard's **Close Dialog** *process* (a Process type, **not** a Branch in this APEX version) — confirm it exists under `[Left Pane ▸ Processing ▸ Processes]` and runs after your Create process; it refreshes the parent Ticket Detail (page 4) so the new comment appears. Delete any stray branch (red ✕) under `[Left Pane ▸ Processing ▸ Branches]`, which would otherwise block Save with *"Page Number is required"*.

---

## Step 5: Test It

| Test | Expected |
|------|----------|
| As Anna | No "Internal note" switch. Comment added as public. |
| As Mike | Internal switch visible. Can post internal notes. |
| Public agent comment on ticket with no prior response | `FIRST_RESPONSE_AT` gets stamped |
| Internal note | `FIRST_RESPONSE_AT` NOT stamped |
| Anna views ticket after Mike's internal note | Internal note invisible |
| Forge `P7_TICKET_ID` with foreign ticket | Write guard blocks it |
| Post a comment with an image attached | File saved in `TICKET_ATTACHMENTS` with this comment's `COMMENT_ID`; shows on page 4 |
| Attach a `.exe` (past the accept filter) | Step 2a validation blocks Post |

---

## Isolation Checklist

- [ ] Client roles cannot set `IS_INTERNAL` (switch hidden by Condition **and** forced to `'N'` server-side)
- [ ] On-load visibility guard — a foreign `P7_TICKET_ID` can't even open the dialog (mockup's `canSee` gate): re-check `SELECT COUNT(*) FROM V_MY_TICKETS WHERE TICKET_ID = :P7_TICKET_ID` in a Before-Header process (`[Left Pane ▸ Processing]` → Pre-Rendering ▸ Before Header), redirect/stop if 0
- [ ] Write guard blocks commenting on foreign tickets (`V_MY_TICKETS` count in the Create process)
- [ ] Comment text escaped everywhere it renders (page 4 thread)
- [ ] Internal notes never appear for client roles (`V_MY_COMMENTS` hides `IS_INTERNAL='Y'` from clients)
- [ ] Attachment mime **and** size re-validated server-side (Step 2a) — the `accept` filter is not trusted
- [ ] Files persist only **after** the comment insert, keyed to the real `COMMENT_ID` (and its `TICKET_ID`); `COMPANY_ID` comes from the trigger
- [ ] Comment-level files render through `V_MY_ATTACHMENTS` on page 4 (never base `TICKET_ATTACHMENTS`)

---

**Next:** move to `08-dashboard.md`.
