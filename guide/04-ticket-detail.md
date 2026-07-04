# Step 4 — Ticket Detail (p4) (MUST)

> The hub of the app: one ticket's full story. Status transitions, comments, and history all live here.

---

## Step 1: Create the Page

**App Builder → Create Page → Form**
- Page Number: `4`
- Name: `Ticket Detail`
- Data Source: `V_MY_TICKETS`
- Primary Key: `TICKET_ID`

Set **Lost Update Detection = Checksum**.

---

## Step 2: Configure Form Fields

| Field | Editable by | Notes |
|-------|-------------|-------|
| Ticket Number | nobody | Display Only |
| Subject | nobody | Display Only |
| Description | nobody | Display Only |
| Ticket Type | nobody | Display Only |
| Status | nobody (changed via buttons) | Display Only |
| Severity | nobody | Display Only (client-set at creation) |
| Priority | agents + System Admin | Select List: P1–P4. **Condition:** `:APP_ROLE IN ('SUPPORT_AGENT','SYSTEM_ADMIN')` |
| Category | agents + System Admin | LOV on `CATEGORIES WHERE ACTIVE = 'Y'` |
| Assigned To | Display Only | Shows assignee name |
| Project, Company | Display Only | |
| SLA Due Date | Display Only | |
| Created / Updated | Display Only | |

---

## Step 3: Add Comments Region

Classic Report or Cards region:

```sql
SELECT c.COMMENT_TEXT, u.FULL_NAME AS AUTHOR, c.CREATED_AT, c.IS_INTERNAL
  FROM V_MY_COMMENTS c
  JOIN APP_USERS u ON u.USER_ID = c.AUTHOR_ID
 WHERE c.TICKET_ID = :P4_TICKET_ID
 ORDER BY c.CREATED_AT DESC
```

Add an **"Add Comment"** button → opens **page 7** (modal) with `P7_TICKET_ID` = `&P4_TICKET_ID.`

**Escape comment text** with `APEX_ESCAPE.HTML`.

---

## Step 4: Add History Timeline Region

```sql
SELECT h.CHANGED_BY, u.FULL_NAME, h.FIELD_NAME,
       h.OLD_VALUE, h.NEW_VALUE, h.CHANGED_AT
  FROM V_MY_HISTORY h
  JOIN APP_USERS u ON u.USER_ID = h.CHANGED_BY
 WHERE h.TICKET_ID = :P4_TICKET_ID
 ORDER BY h.CHANGED_AT DESC
```

---

## Step 5: Add Status Buttons

| Button | Who sees it (Condition) | Transition |
|--------|------------------------|-----------|
| **Assign / Reassign** | System Admin, Client Admin, agents | Opens **page 6** (modal) |
| **Start Progress** | `STATUS = 'Assigned' AND ASSIGNED_TO = NV('APP_USER_ID')` | Assigned → In Progress |
| **Put On Hold** | `STATUS = 'In Progress' AND ASSIGNED_TO = NV('APP_USER_ID')` | In Progress → On Hold |
| **Resume** | `STATUS = 'On Hold' AND ASSIGNED_TO = NV('APP_USER_ID')` | On Hold → In Progress |
| **Resolve** | `STATUS = 'In Progress' AND ASSIGNED_TO = NV('APP_USER_ID')` | In Progress → Resolved (dialog) |
| **Close** | `STATUS = 'Resolved'` and client roles + admins | Resolved → Closed (dialog) |
| **Reopen** | `STATUS = 'Resolved'` and client roles | Resolved → In Progress (`REOPEN_COUNT + 1`) |

---

## Step 6: Add Button Processes

Every process follows this pattern:

```sql
DECLARE l_ok PLS_INTEGER;
BEGIN
  -- 1. Write guard
  SELECT COUNT(*) INTO l_ok FROM V_MY_TICKETS WHERE TICKET_ID = :P4_TICKET_ID;
  IF l_ok = 0 THEN raise_application_error(-20010, 'Ticket not found.'); END IF;

  -- 2. Update status
  UPDATE TICKETS SET STATUS = 'In Progress', UPDATED_AT = SYSDATE
   WHERE TICKET_ID = :P4_TICKET_ID;

  -- 3. Write history
  INSERT INTO TICKET_HISTORY (TICKET_ID, CHANGED_BY, FIELD_NAME, OLD_VALUE, NEW_VALUE, CHANGED_AT)
  VALUES (:P4_TICKET_ID, NV('APP_USER_ID'), 'STATUS', :P4_STATUS, 'In Progress', SYSDATE);
END;
```

Adjust status values per button. Set **When Button Pressed** on each process.

---

## Step 7: Add the Resolve Dialog (FR-36)

Inline Dialog with:
- `P4_RESOLUTION_CODE` — Select List (Fixed, Workaround, Cannot Reproduce, Duplicate, Not a Bug)
- `P4_RESOLUTION_SUMMARY` — Textarea (required)
- **Validation:** both required

Process:
```sql
DECLARE l_ok PLS_INTEGER;
BEGIN
  SELECT COUNT(*) INTO l_ok FROM V_MY_TICKETS WHERE TICKET_ID = :P4_TICKET_ID;
  IF l_ok = 0 THEN raise_application_error(-20010, 'Ticket not found.'); END IF;

  UPDATE TICKETS
     SET STATUS = 'Resolved', RESOLVED_AT = SYSDATE,
         RESOLUTION_CODE = :P4_RESOLUTION_CODE,
         RESOLUTION_SUMMARY = :P4_RESOLUTION_SUMMARY,
         UPDATED_AT = SYSDATE
   WHERE TICKET_ID = :P4_TICKET_ID;

  INSERT INTO TICKET_HISTORY (TICKET_ID, CHANGED_BY, FIELD_NAME, OLD_VALUE, NEW_VALUE, CHANGED_AT)
  VALUES (:P4_TICKET_ID, NV('APP_USER_ID'), 'STATUS', :P4_STATUS, 'Resolved', SYSDATE);
END;
```

---

## Step 8: Add the Close Dialog (FR-27)

Inline Dialog with confirmation + optional CSAT star rating (1–5, one-time).

---

## Step 9: Add the Triage Gate (FR-37)

Validation on "Start Progress":
- Expression: `:P4_PRIORITY IS NOT NULL`
- Error: `Set a priority (triage) before starting progress.`

---

## Step 10: Test It

| Test | Expected |
|------|----------|
| Open a ticket as Anna | See ticket, comments (no internal notes), history. No agent buttons. |
| Deep-link to a Globex ticket as Anna | "Ticket not found" |
| Click "Start Progress" without priority | Triage gate blocks it |
| Resolve a ticket | Dialog requires resolution code + summary |

---

## Isolation Checklist

- [ ] Form fetches through `V_MY_TICKETS` — foreign ticket ID shows "not found"
- [ ] Every write process has the `V_MY_TICKETS` count guard
- [ ] Comments use `V_MY_COMMENTS` — internal notes hidden from clients
- [ ] Buttons gated server-side, not just hidden by CSS/JS

---

**Next:** move to `05-raise-ticket.md`.
