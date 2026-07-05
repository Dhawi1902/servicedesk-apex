# Step 4 — Ticket Detail (p4) (MUST)

> The hub of the app: one ticket's full story. The mockup lays it out in **two columns** —
> a wide left column (the ticket summary card + the **Conversation**) and a 300px right
> sidebar (**Properties** + **Activity History**). A single action bar across the header holds
> every button (assign, self-assign, escalate, set priority, the lifecycle transitions, comment).
> All fields are read-only on the page itself; every change happens through a button or a dialog.

---

## Step 1: Create the Page

**App Builder → Create Page → Form**
- Page Number: `4`
- Name: `Ticket Detail`
- Data Source: `V_MY_TICKETS`
- Primary Key: `TICKET_ID`

Set **Lost Update Detection = Checksum** — `[Left ▸ Processing]` select the automatic **Process Form** DML process, then `[Right ▸ Settings ▸ Lost Update Type]`.

> **Before-Header visibility guard (IDOR backstop).** `[Left ▸ Processing]` add a Before-Header
> PL/SQL process (`[Right ▸ Execution ▸ Point]` = Before Header, `[Right ▸ Identification ▸ Type]` =
> PL/SQL Code, code into `[Right ▸ Source ▸ PL/SQL Code]`) so a
> tampered/deep-linked `P4_TICKET_ID` for another tenant fails immediately — before any region
> renders — instead of showing an empty shell:
> ```sql
> DECLARE l_ok PLS_INTEGER;
> BEGIN
>   SELECT COUNT(*) INTO l_ok FROM V_MY_TICKETS WHERE TICKET_ID = :P4_TICKET_ID;
>   IF l_ok = 0 THEN
>     raise_application_error(-20010, 'Ticket not found.');   -- mockup: "Ticket not found."
>   END IF;
> END;
> ```

---

## Step 2: Fetch the row (with lookup names)

The form fetches `V_MY_TICKETS` by PK, but the card and sidebar show **names**, not IDs. Use this
as the page's fetch/source query so every display item is populated in one round-trip — `[Left ▸ Rendering]`
select the form region, then `[Right ▸ Source ▸ SQL Query]`. Reads go
through `V_MY_TICKETS`; the lookups are joined for labels only.

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
  LEFT JOIN COMPANIES   co  ON co.COMPANY_ID      = t.COMPANY_ID
  LEFT JOIN PROJECTS    pr  ON pr.PROJECT_ID      = t.PROJECT_ID
  LEFT JOIN DEPARTMENTS dep ON dep.DEPARTMENT_ID  = t.DEPARTMENT_ID
  LEFT JOIN APP_USERS   ato ON ato.USER_ID        = t.ASSIGNED_TO
 WHERE t.TICKET_ID = :P4_TICKET_ID
```

---

## Step 3: Ticket Summary card (left column, top)

`[Gallery ▸ Regions]` drag a **Static Content** region onto `[Central ▸ Layout]` (left column, top);
the fields below are Display-Only items sourced from the Step 2 fetch.
Header shows the ref plus the **status/severity/priority/type/SLA** values as badges (badges are a
later styling pass — show the raw value now). Body shows the description, then a 4-up detail row.

**Header line:** `TICKET_REF` · Ticket Type · Status · Severity · Priority · SLA Due.

**Detail row (4 columns, in this order):**

| Label | Source |
|-------|--------|
| Category | `CATEGORY_NAME` (display only) |
| Raised by | `RAISED_BY` (creator's full name) |
| Company | `COMPANY_NAME` |
| Project | `PROJECT_NAME` |

Description (`DESCRIPTION`) sits above this row. **Escape it** with `APEX_ESCAPE.HTML` — it is
user-entered ticket text (on a Display-Only item, `[Right ▸ Security ▸ Escape special characters]` = Yes,
or wrap the value with `APEX_ESCAPE.HTML` if rendered via `[Right ▸ Source ▸ SQL Query]`).

---

## Step 4: Conversation region (left column, below summary)

`[Gallery ▸ Regions]` drag a **Classic Report** region onto `[Central ▸ Layout]` (below the summary);
set `[Right ▸ Identification ▸ Title]` = Conversation and paste the query into `[Right ▸ Source ▸ SQL Query]`.
An **"＋ Add Comment"** button sits in the region header (top-right — create it at `[Right ▸ ... ▸ Region Position]`
of the header, or add a button with `[Right ▸ Layout ▸ Slot]` = Edit/region header).
Comments are shown **oldest-first** (chat order), each line: author name · role · *(Internal note)*
badge if internal · time. Internal notes are hidden from clients by the view, not by the page.

```sql
SELECT u.FULL_NAME               AS AUTHOR,
       u.DEFAULT_ROLE            AS AUTHOR_ROLE,
       c.COMMENT_TEXT,
       c.IS_INTERNAL,
       c.CREATED_AT
  FROM V_MY_COMMENTS c
  JOIN APP_USERS u ON u.USER_ID = c.USER_ID
 WHERE c.TICKET_ID = :P4_TICKET_ID
 ORDER BY c.CREATED_AT ASC          -- oldest first, like a chat thread
```

- **Escape `COMMENT_TEXT`** with `APEX_ESCAPE.HTML` (column `[Right ▸ Security ▸ Escape special characters]` = Yes).
- Empty state text: **"No comments yet."** — `[Right ▸ Appearance ▸ No Data Found Message]`.
- The header button and an equivalent bottom action (both `[Left ▸ Rendering]` buttons) open **page 7**
  (Add Comment modal) via `[Right ▸ Behavior ▸ Action]` = Redirect to Page, with
  `P7_TICKET_ID` = `&P4_TICKET_ID.` in `[Right ▸ Behavior ▸ Target]`.
- `V_MY_COMMENTS.IS_INTERNAL='Y'` rows only appear for `SUPPORT_AGENT`/`SYSTEM_ADMIN` — the internal
  note stays invisible to clients even if they tamper with the URL.

> **Comment-level files.** Files attached on the Add Comment modal (page 7) carry a `COMMENT_ID`.
> Show them inline under their comment by adding a Download BLOB column to *this* Conversation report,
> joined `LEFT JOIN V_MY_ATTACHMENTS a ON a.COMMENT_ID = c.COMMENT_ID` and selecting
> `DBMS_LOB.GETLENGTH(a.FILE_BLOB)` (same view-scoped Download BLOB config as Step 4a).
>
> 🔒 **Why internal-note files stay hidden — and where the guard lives.** `V_MY_ATTACHMENTS` is
> tightened (`sql/05_isolation_views.sql`) to hide files on **internal** comments from clients,
> mirroring `V_MY_COMMENTS`. **This is essential, not optional:** a declarative Download BLOB column /
> `GET_BLOB_FILE_SRC` preview serves the file from a **separate GET keyed only by `ATTACHMENT_ID`** —
> it does **not** run this page's Before-Header guard or any region `COMMENT_ID`/`V_MY_COMMENTS`
> predicate. So the display-layer filters below are **defense-in-depth only**; the real wall is the
> view behind the column's *Table Name*. Rule: **every visibility rule for a file must live in
> `V_MY_ATTACHMENTS`**, never in region SQL. (The Step 4a `COMMENT_ID IS NULL` filter and the
> `V_MY_COMMENTS` join here are still worth keeping — they just aren't what stops a forged-PK download.)

---

## Step 4a: Attachments region (FR-25)

`[Gallery ▸ Regions]` drag a **Classic Report** region onto `[Central ▸ Layout]` (left column,
below the Conversation); set `[Right ▸ Identification ▸ Title]` = Attachments and paste the query
into `[Right ▸ Source ▸ SQL Query]`. **Reads go through `V_MY_ATTACHMENTS`** — the view inherits
the full role matrix from `V_MY_TICKETS`, so a forged `P4_TICKET_ID` (or a forged attachment PK in
the download URL) fetches nothing. `DBMS_LOB.GETLENGTH(FILE_BLOB)` is what drives the declarative
download link (a zero-length/absent BLOB renders no link).

```sql
SELECT a.ATTACHMENT_ID,
       a.FILE_NAME,
       a.MIME_TYPE,
       u.FULL_NAME                       AS UPLOADED_BY_NAME,
       a.UPLOADED_AT,
       DBMS_LOB.GETLENGTH(a.FILE_BLOB)   AS FILE_BLOB   -- length → download link
  FROM V_MY_ATTACHMENTS a
  LEFT JOIN APP_USERS u ON UPPER(u.EMAIL) = UPPER(a.UPLOADED_BY)   -- label only
 WHERE a.TICKET_ID = :P4_TICKET_ID
   AND a.COMMENT_ID IS NULL          -- ticket-level here; comment-level render under comments
 ORDER BY a.UPLOADED_AT
```

> `UPLOADED_BY` stores the APEX username (the column default `SYS_CONTEXT('APEX$SESSION','APP_USER')`),
> which in this build is the user's email — the APEX Accounts login `04_apex_accounts.sql` created.
> The `UPPER(...)` join is a case-insensitive match (APEX may fold usernames). It is a label only —
> the BLOB fetch never depends on it, so display `a.UPLOADED_BY` raw if you prefer.

**Declarative Download BLOB column** — select the `FILE_BLOB` column in `[Left ▸ Rendering]`, then
`[Right ▸ Identification ▸ Type]` = **Download BLOB** and set `[Right ▸ BLOB Attributes]`:

| Attribute | Value |
|-----------|-------|
| **Table Name** | `V_MY_ATTACHMENTS` ⚠️ **the view, not `TICKET_ATTACHMENTS`** — this makes the actual download query tenant-scoped (brief §5.1 guard #1). A forged PK returns no row. |
| BLOB Column | `FILE_BLOB` |
| Primary Key Column 1 | `ATTACHMENT_ID` |
| MIME Type Column | `MIME_TYPE` |
| Filename Column | `FILE_NAME` |
| Content Disposition | `attachment` (force download) or `inline` |
| Download Text | use the filename column, or a static "Download" |

The `FILE_NAME` column keeps the report default `[Right ▸ Security ▸ Escape special characters]` =
**Yes** — filenames are user-controlled, so this stops stored XSS in the list.

**Optional image preview column.** Add a column (`PREVIEW`) that emits an `<img>` for image mimes
and nothing otherwise, using `APEX_UTIL.GET_BLOB_FILE_SRC` (signature verified in
`reference/plsql/061-APEX_UTIL.md` §61.44). This column **must** have
`[Right ▸ Security ▸ Escape special characters]` = **No**, which makes escaping `FILE_NAME` yourself
mandatory — do it with `APEX_ESCAPE.HTML`:

```sql
       CASE WHEN a.MIME_TYPE LIKE 'image/%'
            THEN '<img src="'||APEX_UTIL.GET_BLOB_FILE_SRC('P4_ATTACH_FILE', a.ATTACHMENT_ID)||'"'
                 ||' alt="'||APEX_ESCAPE.HTML(a.FILE_NAME)||'" style="max-height:96px" />'
            ELSE NULL
       END                               AS PREVIEW
```

`GET_BLOB_FILE_SRC` needs a **FILE-type page item** it can reference. Add a hidden item
`P4_ATTACH_FILE` (`[Gallery ▸ Items]`, `[Right ▸ Identification ▸ Type]` = File Browse, or a
dedicated item whose `[Right ▸ Source ▸ Type]` = Database Column). Point its source at
**`V_MY_ATTACHMENTS`** (again the view, so the preview fetch is tenant-scoped — brief §5.1 guard #4),
BLOB Column `FILE_BLOB`, Primary Key `ATTACHMENT_ID`, MIME `MIME_TYPE`, Filename `FILE_NAME`. On a
modal page, if you ever pass the URL through `APEX_UTIL.PREPARE_URL`, set `p_plain_url => TRUE`
(reference §61.44).

- Empty state: **"No attachments."** — `[Right ▸ Appearance ▸ No Data Found Message]`.

---

## Step 5: Properties card (right sidebar, top)

`[Gallery ▸ Regions]` drag a **Static Content** region onto `[Central ▸ Layout]` (right sidebar, top);
each row below is a Display-Only item (`[Gallery ▸ Items]`) placed inside it.
Read-only field list, **in the mockup's order**. The last four blocks are **conditional** — set each
per-item `[Right ▸ Server-side Condition ▸ Type]` = Expression with the Condition shown (server-side,
not CSS hiding).

| # | Label | Source | Condition |
|---|-------|--------|-----------|
| 1 | Status | `STATUS` | always |
| 2 | Ticket Type | `TICKET_TYPE` | always |
| 3 | Severity | `SEVERITY` | always |
| 4 | Priority | `PRIORITY` (blank until triaged) | always |
| 5 | Assignee | `ASSIGNEE_NAME` (else "Unassigned") | always |
| 6 | Company | `COMPANY_NAME` | always |
| 7 | Project | `PROJECT_NAME` | always |
| 8 | Department | `DEPARTMENT_NAME` (else "—") | always |
| 9 | SLA Due | `SLA_DUE_DATE` | always |
| 10 | First Response | `FIRST_RESPONSE_AT` | `:P4_FIRST_RESPONSE_AT IS NOT NULL` |
| 11 | Reopen Count | `REOPEN_COUNT` | `:P4_REOPEN_COUNT > 0` |
| 12 | Resolution Code | `RESOLUTION_CODE` | `:P4_STATUS IN ('Resolved','Closed') AND :P4_RESOLUTION_CODE IS NOT NULL` |
| 13 | Resolution Summary | `RESOLUTION_SUMMARY` (escape) | same as #12 |
| 14 | Customer Satisfaction (CSAT) | `CSAT_SCORE` stars | `:P4_STATUS = 'Closed'` (see Step 10) |

---

## Step 6: Activity History region (right sidebar, below Properties)

`[Gallery ▸ Regions]` drag a **Classic Report** region onto `[Central ▸ Layout]` (right sidebar, below
Properties); set `[Right ▸ Identification ▸ Title]` = Activity History, template Timeline via
`[Right ▸ Appearance ▸ Template]`, and the query into `[Right ▸ Source ▸ SQL Query]`.
Rendered as a timeline, **newest-first**. Each entry: who · action
label · old → new · time.

```sql
SELECT u.FULL_NAME AS WHO,
       h.ACTION,
       h.OLD_VALUE,
       h.NEW_VALUE,
       h.CREATED_AT
  FROM V_MY_HISTORY h
  JOIN APP_USERS u ON u.USER_ID = h.USER_ID
 WHERE h.TICKET_ID = :P4_TICKET_ID
 ORDER BY h.CREATED_AT DESC          -- newest first
```

`ACTION` is the fixed enum from the schema (`STATUS_CHANGE`, `ASSIGN`, `REASSIGN`, `ESCALATION`,
`PRIORITY_CHANGE`, `SEVERITY_CHANGE`, `CATEGORY_CHANGE`, `COMMENT`, `CSAT`). Map it to a friendly
label in the column (e.g. `STATUS_CHANGE` → "Changed status", `ASSIGN` → "Assigned",
`ESCALATION` → "Escalated", `PRIORITY_CHANGE` → "Set priority", `CSAT` → "Rated support").

---

## Step 7: Action bar buttons

`[Gallery ▸ Buttons]` drag each button onto `[Central ▸ Layout]`; all live in the page header
(**Region Position: Right of Title** — `[Right ▸ Layout ▸ Slot]` / Position). Set each label at
`[Right ▸ Identification ▸ Label]`, and the redirect/dialog target at `[Right ▸ Behavior ▸ Action]` +
`[Right ▸ Behavior ▸ Target]`. Each carries a **server-side Condition** — `[Right ▸ Server-side Condition ▸ Type]`
= Expression with the expression in the table; never rely on CSS to hide a control. Bind `:APP_ROLE`,
`:APP_USER_ID`, and the page items.

| Order | Button | Label | Server-side Condition | Action |
|-------|--------|-------|-----------------------|--------|
| 1 | **Assign / Reassign** | "Assign" if `ASSIGNED_TO` null, else "Reassign" | `:APP_ROLE = 'SYSTEM_ADMIN' OR (:APP_ROLE IN ('CLIENT_ADMIN','CLIENT_USER') AND :P4_COMPANY_ID = :APP_COMPANY_ID)` | Opens **page 6** (Assign modal), `P6_TICKET_ID = &P4_TICKET_ID.` |
| 2 | **Self-Assign** | `✎ Self-Assign` | `:APP_ROLE = 'SUPPORT_AGENT' AND :P4_ASSIGNED_TO IS NULL AND :P4_STATUS != 'Closed'` | Process (Step 8a) |
| 3 | **Escalate** | `⚠ Escalate` | `:APP_ROLE IN ('SUPPORT_AGENT','SYSTEM_ADMIN') AND :P4_STATUS = 'In Progress'` | Opens **page 6** in reassign-to-higher-tier mode (FR-26/FR-35) |
| 4 | **Set Priority** | `⚑ Set Priority` | `:APP_ROLE IN ('SUPPORT_AGENT','SYSTEM_ADMIN') AND :P4_PRIORITY IS NULL AND :P4_STATUS != 'Closed'` | Opens the Set Priority dialog (Step 11) |
| 5 | **Start Work** | `▶ Start Work` | `:P4_STATUS = 'Assigned' AND (:APP_ROLE = 'SYSTEM_ADMIN' OR (:APP_ROLE = 'SUPPORT_AGENT' AND (:P4_ASSIGNED_TO = :APP_USER_ID OR :P4_ASSIGNED_TO IS NULL)))` | Assigned → In Progress |
| 6 | **Put On Hold** | `⏸ Put On Hold` | `:P4_STATUS = 'In Progress' AND (:APP_ROLE = 'SYSTEM_ADMIN' OR (:APP_ROLE = 'SUPPORT_AGENT' AND (:P4_ASSIGNED_TO = :APP_USER_ID OR :P4_ASSIGNED_TO IS NULL)))` | In Progress → On Hold |
| 7 | **Resolve** | `✓ Resolve` | same signer test as #6, `:P4_STATUS = 'In Progress'` | In Progress → Resolved (dialog, Step 9) |
| 8 | **Resume** | `▶ Resume` | `:P4_STATUS = 'On Hold' AND (:APP_ROLE = 'SYSTEM_ADMIN' OR (:APP_ROLE = 'SUPPORT_AGENT' AND (:P4_ASSIGNED_TO = :APP_USER_ID OR :P4_ASSIGNED_TO IS NULL)))` | On Hold → In Progress |
| 9 | **Close** | `✓ Close` | `:P4_STATUS = 'Resolved' AND (:APP_ROLE = 'SYSTEM_ADMIN' OR (:APP_ROLE IN ('CLIENT_ADMIN','CLIENT_USER') AND :P4_COMPANY_ID = :APP_COMPANY_ID))` | Resolved → Closed (dialog, Step 10) |
| 10 | **Reopen** | `↺ Reopen` | same signer test as #9, `:P4_STATUS = 'Resolved'` | Resolved → In Progress (`REOPEN_COUNT + 1`) |
| 11 | **Comment** | `💬 Comment` | any user who can see the ticket | Opens **page 7** (Add Comment modal) |

> Start Work / Put On Hold / Resolve / Resume are gated to **admin or the agent working it**
> (assignee or unassigned-on-their-project). Close / Reopen are the **client side** (admin or a
> client of the ticket's company). This mirrors the mockup's `transitions()` + `canAssign` logic.

---

## Step 8: Button processes (status transitions)

`[Left ▸ Processing]` create one **Process** per button (`[Right ▸ Identification ▸ Type]` = PL/SQL Code,
body into `[Right ▸ Source ▸ PL/SQL Code]`). Every write process follows this pattern —
**visibility guard first**, then the base-table update,
then a `TICKET_HISTORY` row with the real `ACTION` enum and `USER_ID`:

```sql
DECLARE l_ok PLS_INTEGER;
BEGIN
  -- 1. Write guard (re-check visibility server-side)
  SELECT COUNT(*) INTO l_ok FROM V_MY_TICKETS WHERE TICKET_ID = :P4_TICKET_ID;
  IF l_ok = 0 THEN raise_application_error(-20010, 'Ticket not found.'); END IF;

  -- 2. Update status
  UPDATE TICKETS SET STATUS = 'In Progress', UPDATED_AT = SYSTIMESTAMP
   WHERE TICKET_ID = :P4_TICKET_ID;

  -- 3. Write history (ACTION enum + old/new value)
  INSERT INTO TICKET_HISTORY (TICKET_ID, USER_ID, ACTION, OLD_VALUE, NEW_VALUE)
  VALUES (:P4_TICKET_ID, :APP_USER_ID, 'STATUS_CHANGE', :P4_STATUS, 'In Progress');
END;
```

Set **When Button Pressed** on each process (`[Right ▸ Server-side Condition ▸ When Button Pressed]`)
and adjust the target status per button (Put On Hold → `'On Hold'`, Resume → `'In Progress'`, etc.).

**Step 8a — Self-Assign** (agent claims an unassigned ticket on their project) — `[Left ▸ Processing]`
process, When Button Pressed = Self-Assign:

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
     AND ASSIGNED_TO IS NULL;      -- lose-the-race safety

  INSERT INTO TICKET_HISTORY (TICKET_ID, USER_ID, ACTION, OLD_VALUE, NEW_VALUE)
  VALUES (:P4_TICKET_ID, :APP_USER_ID, 'ASSIGN', NULL, :APP_USER_ID);
END;
```

---

## Step 9: Resolve dialog (FR-36)

`[Gallery ▸ Regions]` drag an **Inline Dialog** region onto `[Central ▸ Layout]`, opened by **Resolve**;
`[Gallery ▸ Items]` add these items inside it:
- `P4_RESOLUTION_CODE` — Select List (`[Right ▸ Identification ▸ Type]`). **Return values match the schema
  enum**, display friendly (`[Right ▸ List of Values]`): `FIXED`→Fixed, `WORKAROUND`→Workaround,
  `KNOWN_ERROR`→Known Error, `CANNOT_REPRODUCE`→Cannot
  Reproduce, `DUPLICATE`→Duplicate, `USER_EDUCATION`→User Education, `NOT_AN_INCIDENT`→Not an Incident.
- `P4_RESOLUTION_SUMMARY` — Textarea.
- **Validation:** both required — `[Left ▸ Processing]` add two Validations (Item is NOT NULL),
  When Button Pressed = Resolve (mockup requires resolution code + summary before Resolve).

Resolve process — `[Left ▸ Processing]`, `[Right ▸ Source ▸ PL/SQL Code]`, When Button Pressed = Resolve:

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

`[Gallery ▸ Regions]` drag an **Inline Dialog** region onto `[Central ▸ Layout]`, opened by **Close**:
confirmation + an optional CSAT star rating (1–5, one-time).
- The CSAT stars also render **read-only in the Properties card** once the ticket is Closed
  (Properties row #14). They become **rateable** only for the ticket's **raiser** when
  `CSAT_SCORE IS NULL` — set the rateable item's `[Right ▸ Server-side Condition ▸ Type]` = Expression:
  `:APP_ROLE IN ('CLIENT_USER','CLIENT_ADMIN') AND :P4_COMPANY_ID = :APP_COMPANY_ID AND :P4_CREATED_BY = :APP_USER_ID AND :P4_CSAT_SCORE IS NULL`.
- Close process (`[Left ▸ Processing]`, `[Right ▸ Source ▸ PL/SQL Code]`) sets `STATUS='Closed'`,
  `CLOSED_AT=SYSTIMESTAMP`, writes a `STATUS_CHANGE` history
  row; a submitted rating writes `CSAT_SCORE` and a `CSAT` history row (guard first, as always).

**Reopen** (Resolved → In Progress) — `[Left ▸ Processing]` process, When Button Pressed = Reopen —
increments the counter:

```sql
UPDATE TICKETS
   SET STATUS = 'In Progress', REOPEN_COUNT = REOPEN_COUNT + 1, UPDATED_AT = SYSTIMESTAMP
 WHERE TICKET_ID = :P4_TICKET_ID;
-- history: ACTION 'STATUS_CHANGE', OLD_VALUE 'Resolved', NEW_VALUE 'In Progress' (guard first)
```

---

## Step 11: Set Priority dialog + Triage gate (FR-37)

**Set Priority** (agents/admin) opens a small dialog — `[Gallery ▸ Regions]` Inline Dialog on
`[Central ▸ Layout]`:
- `P4_PRIORITY` — Select List (`[Gallery ▸ Items]`, `[Right ▸ Identification ▸ Type]`) `P1`, `P2`, `P3`, `P4` (schema values).
- Process (`[Left ▸ Processing]`, `[Right ▸ Source ▸ PL/SQL Code]`) updates `TICKETS.PRIORITY` and writes a `PRIORITY_CHANGE` history row (guard first).

**Triage gate** — `[Left ▸ Processing]` add a **Validation**, When Button Pressed = Start Work:
- `[Right ▸ Identification ▸ Type]` = PL/SQL Expression: `:P4_PRIORITY IS NOT NULL`
- `[Right ▸ Error ▸ Error Message]`: `Set a priority (triage) before starting work.`

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
- [ ] Attachments region SQL **and** the Download BLOB column's **Table Name** both point at `V_MY_ATTACHMENTS` (never base `TICKET_ATTACHMENTS`) — a forged attachment PK in the download URL fetches nothing
- [ ] The `P4_ATTACH_FILE` FILE item (image preview) also sources from `V_MY_ATTACHMENTS` — the preview fetch is tenant-scoped too (guard #4)
- [ ] `FILE_NAME` escaped: Escape=Yes on the filename column; the `<img>` preview column is Escape=No, so `FILE_NAME` is wrapped in `APEX_ESCAPE.HTML` inside it
- [ ] `P4_TICKET_ID` has Session State Protection = **Restricted — may not be set from browser**
- [ ] Comment-level files are listed via the `V_MY_COMMENTS` join (which hides internal notes) — the Step 4a ticket-level region keeps its `COMMENT_ID IS NULL` predicate so internal-note files never surface to clients

---

**Next:** move to `05-raise-ticket.md`.
