# Step 5 — Raise Ticket (p5) (MUST)

> Clients raise incidents and service requests. The form mirrors the mockup's two
> sections — **1 · Project & type**, then **2 · Issue details** — but the critical
> part is what the **server** stamps: company, creator and department come from the
> session, never from the browser.

---

## Step 1: Create the Page

**App Builder → Create Page → Form**
- Page Number: `5`
- Name: `Raise a Ticket`
- Page Mode: **Modal Dialog** (Size: Large — the form is two-column)

Above the items add a **Static Content** region as the tenant banner (matches the
mockup's "Filed under …" strip). `[Gallery ▸ Regions]` drag a region onto
`[Central ▸ Layout]` above the form; `[Right ▸ Identification ▸ Type]` = Static
Content; put the HTML in `[Right ▸ Source ▸ HTML Code]`:

```
🔒 Filed under <b>&APP_COMPANY_NAME.</b> / <b>&APP_DEPARTMENT_NAME.</b>.
```

---

## Step 2: Add Form Items (mockup order)

The mockup groups fields under two section headers. Add two **Display-Only /
static** sub-headings (`1 · Project & type`, `2 · Issue details`) between the items
so the page reads like the mockup. Each item below is `[Gallery ▸ Items]` dragged
onto `[Central ▸ Layout]`; set its name via `[Right ▸ Identification ▸ Name]`, its
Type via `[Right ▸ Identification ▸ Type]`, the **Required** flag via
`[Right ▸ Validation ▸ Value Required]` = On, and any help/placeholder text via
`[Right ▸ Help ▸ Help Text]` / `[Right ▸ Appearance ▸ Placeholder]`.

**Section 1 · Project & type**

| Item | Type | Notes |
|------|------|-------|
| `P5_PROJECT_ID` | Select List | **Required.** LOV from `V_MY_PROJECTS` — see Step 3. Help text = "Pick the system or service this ticket concerns — it decides which support team, categories and SLA apply." |
| `P5_TICKET_TYPE` | Select List | **Required.** `INCIDENT` / `SERVICE_REQUEST`, default `INCIDENT`. Display: *Incident* / *Service Request*. Help text = "Incident = something is broken. Service Request = a standard request." |
| `P5_CATEGORY_ID` | Select List | **Required.** Cascading LOV on `P5_PROJECT_ID` from `V_MY_CATEGORIES` — see Step 3. |

**Section 2 · Issue details**

| Item | Type | Notes |
|------|------|-------|
| `P5_SUBJECT` | Text Field | **Required.** Placeholder "Short summary". |
| `P5_DESCRIPTION` | Textarea | **Required.** Placeholder "Describe the issue…". |
| `P5_SEVERITY` | Select List | **Required.** Critical / Major / Minor / Low, **default Minor**. Severity guidance help text (FR-34): "Critical = complete outage affecting all users. Major = significant impact, workaround possible. Minor = limited impact. Low = cosmetic or nice-to-have." |
| `P5_ASSIGNED_TO` | Select List | **Optional** ("Assign to"). LOV of agents covering the chosen project — see Step 3. Null display value `— Unassigned —`. Help text = "Pick a support agent (optional)." |
| `P5_ATTACH` | **File Browse…** | **Optional** ("Attach file or screenshot"). Matches the mockup's drop-zone (FR-25). See the File Browse settings note below. |

**File Browse item (`P5_ATTACH`) settings** — select it in `[Left ▸ Rendering]` and set:
- `[Right ▸ Settings ▸ Storage Type]` = **Table APEX_APPLICATION_TEMP_FILES** (the form writes to `TICKETS`, not to a BLOB column, so the upload lands in the session temp table; Step 4 moves it into `TICKET_ATTACHMENTS` after the ticket exists and has a `TICKET_ID`). It is **purge at end of session**.
- `[Right ▸ Settings ▸ Allow Multiple Files]` = **On** (the item value becomes a colon-separated list of temp-file names).
- `[Right ▸ Settings ▸ File Types]` = `image/*,application/pdf` — this is the **client-side `accept` convenience filter only**; the real allowlist is the server-side Validation in Step 3a. Never trust it for security.

For the Select Lists, set the default (`INCIDENT`, `Minor`) via
`[Right ▸ Default ▸ Type]` = Static + `[Right ▸ Default ▸ Static Value]`, and the
`— Unassigned —` null display via `[Right ▸ List of Values ▸ Display Null Value]`.
The `INCIDENT`/`SERVICE_REQUEST` and severity values are a **Static** LOV set in
`[Right ▸ List of Values ▸ Type]` = Static Values; the data-driven LOVs come next.

**Not on this form (deliberately, to match the mockup):**
- **No Priority field** — priority is support-set (P1–P4) and stays NULL until an
  agent triages the ticket (FR-37). Clients never set it.
- **No Department field** — department is metadata, stamped server-side from the
  creator's profile and only *shown* in the banner (decision N revised).
- **No "On behalf of" field** — the mockup's create form does not implement it;
  `CREATED_BY` is always the logged-in user.

---

## Step 3: Set Up the LOVs

Each LOV is set on its item: `[Left ▸ Rendering]` select the item, then
`[Right ▸ List of Values ▸ Type]` = SQL Query and paste the query into
`[Right ▸ List of Values ▸ SQL Query]`. For the two cascading LOVs, also set the
parent via `[Right ▸ List of Values ▸ Cascading LOV Parent Item(s)]`.

**Project** (`P5_PROJECT_ID`) — select from the isolation view, active only. The
view already encodes the full role matrix (System Admin → all; Client Admin → own
company; Client User → Open projects + invited Restricted), so no role SQL here:

```sql
SELECT PROJECT_NAME AS d, PROJECT_ID AS r
  FROM V_MY_PROJECTS
 WHERE IS_ACTIVE = 'Y'
 ORDER BY PROJECT_NAME
```

**Category** (`P5_CATEGORY_ID`) — cascading LOV, Parent Item = `P5_PROJECT_ID`.
Scoped through `V_MY_CATEGORIES` (never the base table); shows the project's own
categories plus global ones:

```sql
SELECT CATEGORY_NAME AS d, CATEGORY_ID AS r
  FROM V_MY_CATEGORIES
 WHERE :P5_PROJECT_ID IS NOT NULL
   AND (PROJECT_ID = :P5_PROJECT_ID OR PROJECT_ID IS NULL)
 ORDER BY CATEGORY_NAME
```

**Assign to** (`P5_ASSIGNED_TO`) — cascading LOV, Parent Item = `P5_PROJECT_ID`.
Agents who cover the selected project, with tier + open-workload in the label
(FR-33). Client **Users** see only **L1** agents; Client **Admins** see every tier
(decisions J/L, M revised):

```sql
SELECT au.FULL_NAME || ' [' || ap.TIER || '] · '
       || (SELECT COUNT(*) FROM V_MY_TICKETS t   -- V_MY_*, not base TICKETS: a client must not
            WHERE t.ASSIGNED_TO = au.USER_ID      -- see an agent's cross-tenant workload total
              AND t.STATUS <> 'Closed')
       || ' open'                              AS d,
       au.USER_ID                              AS r
  FROM AGENT_PROJECTS ap
  JOIN APP_USERS au ON au.USER_ID = ap.USER_ID
 WHERE ap.PROJECT_ID = :P5_PROJECT_ID
   AND au.STATUS = 'ACTIVE'
   AND ( :APP_ROLE = 'CLIENT_ADMIN' OR ap.TIER = 'L1' )
 ORDER BY au.FULL_NAME
```

> The LOV is a convenience filter, not the security boundary — Step 4 re-verifies
> the chosen agent server-side so a tampered `P5_ASSIGNED_TO` can't slip through.

---

## Step 3a: Attachment Validation (server-side allowlist)

The `File Types` accept filter (Step 2) is client-side only — a crafted request can
POST any file. Re-check **mime type and size on the server** in a page Validation.
`[Left ▸ Processing]` add a Validation; `[Right ▸ Identification ▸ Type]` = **PL/SQL
Function Body (returning Error Text)**; paste into `[Right ▸ Source ▸ PL/SQL Code]`.
It returns an error string (which fails the page) only when a temp file breaks the
allowlist; NULL passes.

```sql
DECLARE
  l_err VARCHAR2(4000);
BEGIN
  FOR f IN (
    SELECT filename, mime_type, doc_size
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
    IF f.doc_size > 10 * 1024 * 1024 THEN
      l_err := 'File "'||f.filename||'" exceeds the 10 MB limit.';
    END IF;
  END LOOP;
  RETURN l_err;   -- NULL = valid
END;
```

Set `[Right ▸ Execution ▸ Always Execute]` off if you only want it when a file is
present; `APEX_STRING.SPLIT` over a NULL `:P5_ATTACH` yields no rows, so the loop is
a no-op when nothing is attached. (`apex_application_temp_files` columns verified in
`reference/plsql/019-APEX_DATA_LOADING.md`.)

---

## Step 4: Add the Create Process

`[Left ▸ Processing]` create a Process (the gear tab, 3rd from left);
`[Right ▸ Identification ▸ Type]` = PL/SQL Code; set it to run **After Submit** via
`[Right ▸ Execution ▸ Point]` = Processing; paste the block into
`[Right ▸ Source ▸ PL/SQL Code]`. Derives company from the project, stamps creator +
department from the session, validates category and agent, computes the SLA due
date, inserts the ticket, then writes the history rows.

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
  -- 1. Project must be visible to the caller; derive company from it (never trust
  --    a submitted company). V_MY_PROJECTS enforces the role/visibility matrix.
  SELECT COUNT(*) INTO l_ok
    FROM V_MY_PROJECTS WHERE PROJECT_ID = :P5_PROJECT_ID AND IS_ACTIVE = 'Y';
  IF l_ok = 0 THEN raise_application_error(-20011, 'Invalid or inaccessible project.'); END IF;

  SELECT COMPANY_ID INTO l_company_id FROM PROJECTS WHERE PROJECT_ID = :P5_PROJECT_ID;

  -- 2. Category must be offerable within this project (fail-closed via the view).
  SELECT COUNT(*) INTO l_ok
    FROM V_MY_CATEGORIES
   WHERE CATEGORY_ID = :P5_CATEGORY_ID
     AND (PROJECT_ID = :P5_PROJECT_ID OR PROJECT_ID IS NULL);
  IF l_ok = 0 THEN raise_application_error(-20012, 'Invalid category.'); END IF;

  -- 3. Department = creator's own department (metadata; composite FK needs same company).
  SELECT DEPARTMENT_ID INTO l_dept_id
    FROM APP_USERS WHERE USER_ID = l_created_by AND COMPANY_ID = l_company_id;

  -- 4. If an agent was chosen, they must cover this project (L1 only for Client Users).
  IF :P5_ASSIGNED_TO IS NOT NULL THEN
    SELECT COUNT(*) INTO l_ok
      FROM AGENT_PROJECTS
     WHERE USER_ID = :P5_ASSIGNED_TO AND PROJECT_ID = :P5_PROJECT_ID
       AND (:APP_ROLE = 'CLIENT_ADMIN' OR TIER = 'L1');
    IF l_ok = 0 THEN raise_application_error(-20013, 'Agent cannot be assigned to this project.'); END IF;
  END IF;

  l_status := CASE WHEN :P5_ASSIGNED_TO IS NULL THEN 'New' ELSE 'Assigned' END;

  -- 5. Stamp SLA due date from the project's policy (default policy if none set).
  BEGIN
    SELECT SYSTIMESTAMP + NUMTODSINTERVAL(st.RESOLUTION_DAYS, 'DAY') INTO l_sla_due
      FROM PROJECTS p
      JOIN SLA_POLICIES sp ON sp.SLA_POLICY_ID = NVL(p.SLA_POLICY_ID,
           (SELECT SLA_POLICY_ID FROM SLA_POLICIES WHERE IS_DEFAULT = 'Y' FETCH FIRST 1 ROW ONLY))
      JOIN SLA_TARGETS st ON st.SLA_POLICY_ID = sp.SLA_POLICY_ID AND st.SEVERITY = :P5_SEVERITY
     WHERE p.PROJECT_ID = :P5_PROJECT_ID;
  EXCEPTION WHEN NO_DATA_FOUND THEN l_sla_due := NULL;
  END;

  -- 6. Insert (TICKET_REF is generated by the BEFORE-INSERT trigger; PRIORITY stays NULL).
  INSERT INTO TICKETS (COMPANY_ID, PROJECT_ID, DEPARTMENT_ID, TICKET_TYPE, SUBJECT,
    DESCRIPTION, CATEGORY_ID, SEVERITY, STATUS, CREATED_BY, ASSIGNED_TO, SLA_DUE_DATE)
  VALUES (l_company_id, :P5_PROJECT_ID, l_dept_id, :P5_TICKET_TYPE, :P5_SUBJECT,
    :P5_DESCRIPTION, :P5_CATEGORY_ID, :P5_SEVERITY, l_status, l_created_by,
    :P5_ASSIGNED_TO, l_sla_due)
  RETURNING TICKET_ID INTO l_ticket_id;

  -- 7. History: the "raised" event is a status change to New (ACTION check has no
  --    'RAISED' value); add an ASSIGN row when created pre-assigned.
  INSERT INTO TICKET_HISTORY (TICKET_ID, USER_ID, ACTION, NEW_VALUE)
  VALUES (l_ticket_id, l_created_by, 'STATUS_CHANGE', l_status);

  IF :P5_ASSIGNED_TO IS NOT NULL THEN
    INSERT INTO TICKET_HISTORY (TICKET_ID, USER_ID, ACTION, NEW_VALUE)
    VALUES (l_ticket_id, l_created_by, 'ASSIGN', TO_CHAR(:P5_ASSIGNED_TO));
  END IF;

  -- 8. Persist any uploaded files as TICKET-LEVEL attachments (COMMENT_ID = NULL).
  --    Files landed in the session temp table (Step 2); move them onto the new
  --    ticket now that it has a TICKET_ID. COMPANY_ID is stamped by the
  --    TICKET_ATTACH_COMP_BI trigger from the parent ticket (never trusted from the
  --    browser); UPLOADED_BY defaults to the session's APEX user.
  INSERT INTO TICKET_ATTACHMENTS (TICKET_ID, COMMENT_ID, FILE_NAME, MIME_TYPE, FILE_BLOB)
  SELECT l_ticket_id, NULL, f.filename, f.mime_type, f.blob_content
    FROM apex_application_temp_files f
   WHERE f.name IN (SELECT column_value
                      FROM TABLE(APEX_STRING.SPLIT(:P5_ATTACH, ':')));
END;
```

> The mime/size allowlist already ran server-side (Step 3a) before this process, so
> only vetted files reach `TICKET_ATTACHMENTS`. The `TICKET_ATTACHMENTS` DDL lives in
> `sql/03_attachments.sql` (now a **required** setup step).

---

## Step 5: Close Dialog After Submit

`[Left ▸ Processing]` create a Branch; `[Right ▸ Identification ▸ Type]` **Close
Dialog** → refresh the parent page (ticket list / dashboard).

---

## Step 6: Authorization

- **Page Authorization:** define a `Can Raise Tickets` scheme = `:APP_ROLE IN
  ('CLIENT_USER','CLIENT_ADMIN','SYSTEM_ADMIN')` under `[Shared Components ▸
  Authorization Schemes]`, then apply it to this page: `[Left ▸ Rendering]` select
  the root **page** node → `[Right ▸ Security ▸ Authorization Scheme]` (mockup gates
  the create page to client users).
- No item is authorized to carry `COMPANY_ID` / `CREATED_BY` / `DEPARTMENT_ID` —
  all three are session-derived in Step 4.

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
