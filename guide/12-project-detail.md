# Step 12 — Project Detail Hub (p11) (MUST)

> One door for everything about a project: Details, Support Team, SLA Targets, Categories, and Access (invitations).

---

## Step 1: Create the Page

**App Builder → Create Page → Blank Page**
- Page Number: `11`
- Name: `Project Detail`

Add a hidden item `P11_PROJECT_ID` (passed from page 10).

---

## Step 2: Add the Access Guard

Before Header PL/SQL process:

```sql
DECLARE l_ok PLS_INTEGER;
BEGIN
  SELECT COUNT(*) INTO l_ok FROM V_MY_PROJECTS WHERE PROJECT_ID = :P11_PROJECT_ID;
  IF l_ok = 0 THEN
    APEX_UTIL.REDIRECT_URL(APEX_PAGE.GET_URL(p_page => 10));
  END IF;
END;
```

---

## Step 3: Add the Header

Stats region:

```sql
SELECT p.PROJECT_NAME, p.PROJECT_KEY, c.COMPANY_NAME, p.VISIBILITY,
       (SELECT COUNT(*) FROM V_MY_TICKETS WHERE PROJECT_ID = :P11_PROJECT_ID
          AND STATUS NOT IN ('Resolved','Closed')) AS OPEN_TICKETS,
       (SELECT COUNT(*) FROM AGENT_PROJECTS WHERE PROJECT_ID = :P11_PROJECT_ID) AS TEAM_SIZE,
       (SELECT COUNT(*) FROM USER_PROJECTS WHERE PROJECT_ID = :P11_PROJECT_ID) AS INVITED_USERS
  FROM PROJECTS p JOIN COMPANIES c ON c.COMPANY_ID = p.COMPANY_ID
 WHERE p.PROJECT_ID = :P11_PROJECT_ID
```

---

## Step 4: Add Tabs (Region Display Selector)

### Tab 1 — Details
Form: name, key, description, visibility, status, SLA policy LOV. **Authorization:** `IS_SYSTEM_ADMIN`.

### Tab 2 — Support Team
IG on `AGENT_PROJECTS WHERE PROJECT_ID = :P11_PROJECT_ID`: agent, **tier L1–L4**, open tickets. **Authorization:** `IS_SYSTEM_ADMIN`.

### Tab 3 — SLA Targets
Read-only report of the project's effective policy + per-severity targets.

### Tab 4 — Categories
Categories applicable to this project (read-only for now).

### Tab 5 — Access (Invitations)
**Condition:** project visibility = `RESTRICTED`. IG on `USER_PROJECTS WHERE PROJECT_ID = :P11_PROJECT_ID`. Editable by Client Admin (own company) + System Admin.

---

## Step 5: Test It

| Test | Expected |
|------|----------|
| Anna opens an Acme Open project | Read-only tabs |
| Anna URL-tampers to Globex project | Redirected to page 10 |
| Sara (System Admin) | All tabs editable |
| Bob (Client Admin) on Restricted Acme project | Can manage invitations |

---

## Isolation Checklist

- [ ] URL-tamper → redirected to page 10
- [ ] Ticket stats use `V_MY_TICKETS`
- [ ] Invitation DML validates company ownership
- [ ] Tier edits are `IS_SYSTEM_ADMIN` only

---

**Next:** you've finished all MUST pages! Move to `13-my-company.md` for SHOULD pages.
