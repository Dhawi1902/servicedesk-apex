# Step 5 — Raise Ticket (p5) (MUST)

> Clients raise incidents and service requests. The critical part is what the **server** stamps — never trust the browser for tenant fields.

---

## Step 1: Create the Page

**App Builder → Create Page → Form**
- Page Number: `5`
- Name: `Raise Ticket`
- Page Mode: **Modal Dialog**

---

## Step 2: Add Form Items

| Item | Type | Notes |
|------|------|-------|
| `P5_SUBJECT` | Text Field | Required |
| `P5_DESCRIPTION` | Textarea | Required |
| `P5_TICKET_TYPE` | Radio Group | `INCIDENT` / `SERVICE_REQUEST` — default Incident |
| `P5_PROJECT_ID` | Select List | **LOV scoped per role** — see Step 3 |
| `P5_CATEGORY_ID` | Select List | LOV: `SELECT NAME, CATEGORY_ID FROM CATEGORIES WHERE ACTIVE = 'Y'` |
| `P5_SEVERITY` | Select List | Critical / Major / Minor / Low. Add severity guidance help text (FR-34). |
| `P5_DEPARTMENT_ID` | Select List | Optional metadata, default from creator's profile |
| `P5_ON_BEHALF_OF` | Select List | **Condition:** `:APP_ROLE = 'CLIENT_ADMIN'` — LOV of own-company active users |
| `P5_PRIORITY` | Select List | **Condition:** `:APP_ROLE IN ('SUPPORT_AGENT','SYSTEM_ADMIN')` — clients do NOT set priority |

---

## Step 3: Set Up the Project LOV

```sql
SELECT p.PROJECT_NAME AS d, p.PROJECT_ID AS r
  FROM PROJECTS p
 WHERE p.STATUS = 'ACTIVE'
   AND (
     :APP_ROLE = 'SYSTEM_ADMIN'
     OR (:APP_ROLE = 'CLIENT_ADMIN' AND p.COMPANY_ID = NV('APP_COMPANY_ID'))
     OR (:APP_ROLE = 'CLIENT_USER' AND p.COMPANY_ID = NV('APP_COMPANY_ID')
         AND (p.VISIBILITY = 'OPEN'
              OR p.PROJECT_ID IN (SELECT PROJECT_ID FROM USER_PROJECTS
                                   WHERE USER_ID = NV('APP_USER_ID'))))
   )
 ORDER BY p.PROJECT_NAME
```

---

## Step 4: Add the Create Process

```sql
DECLARE
  l_company_id   TICKETS.COMPANY_ID%TYPE;
  l_created_by   TICKETS.CREATED_BY%TYPE;
  l_sla_due      TICKETS.SLA_DUE_DATE%TYPE;
  l_project_ok   PLS_INTEGER;
BEGIN
  IF :APP_ROLE = 'SYSTEM_ADMIN' THEN
    SELECT COMPANY_ID INTO l_company_id FROM PROJECTS WHERE PROJECT_ID = :P5_PROJECT_ID;
  ELSE
    l_company_id := NV('APP_COMPANY_ID');
  END IF;

  IF :APP_ROLE = 'CLIENT_ADMIN' AND :P5_ON_BEHALF_OF IS NOT NULL THEN
    l_created_by := :P5_ON_BEHALF_OF;
  ELSE
    l_created_by := NV('APP_USER_ID');
  END IF;

  SELECT COUNT(*) INTO l_project_ok FROM PROJECTS
   WHERE PROJECT_ID = :P5_PROJECT_ID AND COMPANY_ID = l_company_id AND STATUS = 'ACTIVE';
  IF l_project_ok = 0 THEN raise_application_error(-20011, 'Invalid project.'); END IF;

  BEGIN
    SELECT SYSDATE + st.RESOLUTION_DAYS INTO l_sla_due
      FROM PROJECTS p
      JOIN SLA_POLICIES sp ON sp.SLA_POLICY_ID = NVL(p.SLA_POLICY_ID,
           (SELECT SLA_POLICY_ID FROM SLA_POLICIES WHERE IS_DEFAULT = 'Y' FETCH FIRST 1 ROW ONLY))
      JOIN SLA_TARGETS st ON st.SLA_POLICY_ID = sp.SLA_POLICY_ID AND st.SEVERITY = :P5_SEVERITY
     WHERE p.PROJECT_ID = :P5_PROJECT_ID;
  EXCEPTION WHEN NO_DATA_FOUND THEN l_sla_due := NULL;
  END;

  INSERT INTO TICKETS (COMPANY_ID, PROJECT_ID, SUBJECT, DESCRIPTION,
    TICKET_TYPE, SEVERITY, PRIORITY, CATEGORY_ID, DEPARTMENT_ID,
    CREATED_BY, ASSIGNED_TO, STATUS, SLA_DUE_DATE, CREATED_AT, UPDATED_AT)
  VALUES (l_company_id, :P5_PROJECT_ID, :P5_SUBJECT, :P5_DESCRIPTION,
    :P5_TICKET_TYPE, :P5_SEVERITY, :P5_PRIORITY, :P5_CATEGORY_ID, :P5_DEPARTMENT_ID,
    l_created_by, NULL, 'New', l_sla_due, SYSDATE, SYSDATE);
END;
```

---

## Step 5: Close Dialog After Submit

Branch → Close Dialog → refresh parent page.

---

## Step 6: Test It

| Test | Expected |
|------|----------|
| As Anna | Sees only Acme's Open projects; no Priority field; no "On behalf of" |
| As Bob (Client Admin) | Sees all Acme projects; has "On behalf of" |
| Submit a ticket | Created with correct company, status = New, SLA stamped |
| Forge a Restricted project ID | Process rejects it |

---

## Isolation Checklist

- [ ] `COMPANY_ID` not a submittable item for clients — comes from session
- [ ] Project validation re-checks access server-side
- [ ] Priority absent for clients (server-side condition)
- [ ] "On behalf of" LOV is own-company only

---

**Next:** move to `06-assign.md`.
