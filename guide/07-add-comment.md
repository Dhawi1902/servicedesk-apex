# Step 7 — Add Comment (p7) (MUST)

> Small page, three important behaviors: internal-note flag, first-response tracking, and comment notifications.

---

## Step 1: Create the Page

**App Builder → Create Page → Form**
- Page Number: `7`
- Name: `Add Comment`
- Page Mode: **Modal Dialog**

Add a hidden item `P7_TICKET_ID` (passed from page 4).

---

## Step 2: Add Form Items

| Item | Type | Notes |
|------|------|-------|
| `P7_COMMENT_TEXT` | Textarea | Required |
| `P7_IS_INTERNAL` | Switch (Y/N) | **Condition:** `:APP_ROLE IN ('SUPPORT_AGENT','SYSTEM_ADMIN')` — only staff see this. Default `N`. |

---

## Step 3: Add the Create Process

```sql
DECLARE
  l_ok           PLS_INTEGER;
  l_is_internal  TICKET_COMMENTS.IS_INTERNAL%TYPE;
  l_first_resp   TICKETS.FIRST_RESPONSE_AT%TYPE;
BEGIN
  SELECT COUNT(*) INTO l_ok FROM V_MY_TICKETS WHERE TICKET_ID = :P7_TICKET_ID;
  IF l_ok = 0 THEN raise_application_error(-20030, 'Ticket not found.'); END IF;

  IF :APP_ROLE IN ('CLIENT_USER','CLIENT_ADMIN') THEN
    l_is_internal := 'N';
  ELSE
    l_is_internal := NVL(:P7_IS_INTERNAL, 'N');
  END IF;

  INSERT INTO TICKET_COMMENTS (TICKET_ID, AUTHOR_ID, COMMENT_TEXT, IS_INTERNAL, CREATED_AT)
  VALUES (:P7_TICKET_ID, NV('APP_USER_ID'), :P7_COMMENT_TEXT, l_is_internal, SYSDATE);

  IF :APP_ROLE IN ('SUPPORT_AGENT','SYSTEM_ADMIN') AND l_is_internal = 'N' THEN
    SELECT FIRST_RESPONSE_AT INTO l_first_resp
      FROM TICKETS WHERE TICKET_ID = :P7_TICKET_ID;
    IF l_first_resp IS NULL THEN
      UPDATE TICKETS SET FIRST_RESPONSE_AT = SYSDATE WHERE TICKET_ID = :P7_TICKET_ID;
    END IF;
  END IF;

  UPDATE TICKETS SET UPDATED_AT = SYSDATE WHERE TICKET_ID = :P7_TICKET_ID;

  INSERT INTO TICKET_HISTORY (TICKET_ID, CHANGED_BY, FIELD_NAME, OLD_VALUE, NEW_VALUE, CHANGED_AT)
  VALUES (:P7_TICKET_ID, NV('APP_USER_ID'), 'COMMENT',
    NULL, CASE WHEN l_is_internal = 'Y' THEN '[Internal note]' ELSE 'Comment added' END, SYSDATE);
END;
```

---

## Step 4: Close Dialog After Submit

Branch → Close Dialog → refresh parent page (page 4).

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

---

## Isolation Checklist

- [ ] Client roles cannot set `IS_INTERNAL` (hidden AND forced server-side)
- [ ] Write guard blocks commenting on foreign tickets
- [ ] Comment text escaped everywhere it renders (page 4)
- [ ] Internal notes never appear for client roles

---

**Next:** move to `08-dashboard.md` — you've finished the ticket spine!
