# Step 6 — Assign / Reassign (p6) (MUST)

> One LOV + one process — but the LOV rules encode half the role model, so get them exactly right.

---

## Step 1: Create the Page

**App Builder → Create Page → Form**
- Page Number: `6`
- Name: `Assign Ticket`
- Page Mode: **Modal Dialog**

Add a hidden item `P6_TICKET_ID` (passed from page 3 or 4).

---

## Step 2: Who Can Assign to Whom

| Caller | May assign | Agent LOV shows |
|--------|-----------|-----------------|
| **System Admin** | any ticket, anyone | All agents mapped to the ticket's project, any tier |
| **Client Admin** | any ticket of their company | Agents mapped to the ticket's project, any tier |
| **Client User** | own-scope tickets | Agents whose tier on the ticket's project is **L1 only** |
| **Agent (self-assign)** | unassigned tickets on their projects | Themselves only |
| **Agent (reassign)** | tickets assigned to them | Same project, **same-or-higher tier** (FR-26) |

---

## Step 3: Add the Agent LOV

Create `P6_ASSIGNED_TO` as a Select List:

```sql
SELECT u.FULL_NAME || ' - ' || ap.TIER || ' (' ||
       (SELECT COUNT(*) FROM TICKETS t
         WHERE t.ASSIGNED_TO = u.USER_ID
           AND t.STATUS NOT IN ('Resolved','Closed')) || ' open)' AS d,
       u.USER_ID AS r
  FROM APP_USERS u
  JOIN AGENT_PROJECTS ap ON ap.USER_ID = u.USER_ID
 WHERE ap.PROJECT_ID = (SELECT PROJECT_ID FROM V_MY_TICKETS WHERE TICKET_ID = :P6_TICKET_ID)
   AND u.STATUS = 'ACTIVE'
   AND ( :APP_ROLE IN ('SYSTEM_ADMIN','CLIENT_ADMIN')
      OR (:APP_ROLE = 'CLIENT_USER' AND ap.TIER = 'L1')
      OR (:APP_ROLE = 'SUPPORT_AGENT' AND ap.TIER >= (
            SELECT my.TIER FROM AGENT_PROJECTS my
             WHERE my.USER_ID = NV('APP_USER_ID')
               AND my.PROJECT_ID = ap.PROJECT_ID)) )
```

---

## Step 4: Add the Assignment Process

```sql
DECLARE
  l_ok         PLS_INTEGER;
  l_agent_ok   PLS_INTEGER;
  l_old_status TICKETS.STATUS%TYPE;
  l_old_agent  TICKETS.ASSIGNED_TO%TYPE;
BEGIN
  SELECT COUNT(*) INTO l_ok FROM V_MY_TICKETS WHERE TICKET_ID = :P6_TICKET_ID;
  IF l_ok = 0 THEN raise_application_error(-20020, 'Ticket not found.'); END IF;

  SELECT COUNT(*) INTO l_agent_ok
    FROM APP_USERS u
    JOIN AGENT_PROJECTS ap ON ap.USER_ID = u.USER_ID
   WHERE u.USER_ID = :P6_ASSIGNED_TO
     AND u.STATUS = 'ACTIVE'
     AND ap.PROJECT_ID = (SELECT PROJECT_ID FROM TICKETS WHERE TICKET_ID = :P6_TICKET_ID)
     AND ( :APP_ROLE IN ('SYSTEM_ADMIN','CLIENT_ADMIN')
        OR (:APP_ROLE = 'CLIENT_USER' AND ap.TIER = 'L1')
        OR (:APP_ROLE = 'SUPPORT_AGENT' AND ap.TIER >= (
              SELECT my.TIER FROM AGENT_PROJECTS my
               WHERE my.USER_ID = NV('APP_USER_ID')
                 AND my.PROJECT_ID = ap.PROJECT_ID)) );
  IF l_agent_ok = 0 THEN raise_application_error(-20021, 'Agent not eligible.'); END IF;

  SELECT STATUS, ASSIGNED_TO INTO l_old_status, l_old_agent
    FROM TICKETS WHERE TICKET_ID = :P6_TICKET_ID;

  UPDATE TICKETS
     SET ASSIGNED_TO = :P6_ASSIGNED_TO,
         STATUS = CASE WHEN l_old_status = 'New' THEN 'Assigned' ELSE l_old_status END,
         UPDATED_AT = SYSDATE
   WHERE TICKET_ID = :P6_TICKET_ID;

  INSERT INTO TICKET_HISTORY (TICKET_ID, CHANGED_BY, FIELD_NAME, OLD_VALUE, NEW_VALUE, CHANGED_AT)
  VALUES (:P6_TICKET_ID, NV('APP_USER_ID'), 'ASSIGNED_TO',
          (SELECT FULL_NAME FROM APP_USERS WHERE USER_ID = l_old_agent),
          (SELECT FULL_NAME FROM APP_USERS WHERE USER_ID = :P6_ASSIGNED_TO), SYSDATE);

  IF l_old_status = 'New' THEN
    INSERT INTO TICKET_HISTORY (TICKET_ID, CHANGED_BY, FIELD_NAME, OLD_VALUE, NEW_VALUE, CHANGED_AT)
    VALUES (:P6_TICKET_ID, NV('APP_USER_ID'), 'STATUS', 'New', 'Assigned', SYSDATE);
  END IF;
END;
```

---

## Step 5: Close Dialog After Submit

Branch → Close Dialog → refresh parent page.

---

## Step 6: Test It

| Test | Expected |
|------|----------|
| As Anna (Client User) | LOV shows only L1 agents on the ticket's project |
| On a GLBX-CRM ticket as client | LOV empty (no L1 agent) — show message |
| As Mike (Agent), reassign his ticket | LOV shows same-or-higher tier agents |
| Forge `P6_ASSIGNED_TO` with wrong-tier agent | Process rejects it |
| Forge `P6_TICKET_ID` with foreign ticket | Write guard error |

---

## Isolation Checklist

- [ ] LOV and validation both enforce the tier matrix
- [ ] Forged agent value rejected by process validation
- [ ] Forged ticket ID → write-guard error
- [ ] Mike gets different reassign options per project (different tiers)

---

**Next:** move to `07-add-comment.md`.
