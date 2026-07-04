# Step 17 — Agent-Project Mapping (p16) (SHOULD)

> Global view of which agents cover which projects at what tier. Droppable if short on time — page 11's Support Team tab covers the MUST need.

---

## Step 1: Create the Page

**App Builder → Create Page → Interactive Grid**
- Page Number: `16`
- Name: `Agent-Project Mapping`
- **Authorization:** `IS_SYSTEM_ADMIN`

---

## Step 2: Region Source

```sql
SELECT ap.USER_ID, u.FULL_NAME,
       ap.PROJECT_ID, p.PROJECT_KEY, p.PROJECT_NAME,
       c.COMPANY_NAME, ap.TIER,
       (SELECT COUNT(*) FROM TICKETS t
         WHERE t.ASSIGNED_TO = ap.USER_ID AND t.PROJECT_ID = ap.PROJECT_ID
           AND t.STATUS NOT IN ('Resolved','Closed')) AS OPEN_TICKETS
  FROM AGENT_PROJECTS ap
  JOIN APP_USERS u ON u.USER_ID = ap.USER_ID
  JOIN PROJECTS p ON p.PROJECT_ID = ap.PROJECT_ID
  JOIN COMPANIES c ON c.COMPANY_ID = p.COMPANY_ID
 ORDER BY u.FULL_NAME, p.PROJECT_KEY
```

---

## Step 3: Test It

| Test | Expected |
|------|----------|
| Sara | All 27 mappings with tiers |
| Mike's rows | ACME-IT L2, GLBX-IT L2, NW-APPS L2, NW-INFRA L2 — no Initech |
| Change a tier | Immediately affects page 6's agent LOV |

---

## Isolation Checklist

- [ ] Page gated `IS_SYSTEM_ADMIN`
- [ ] Changes take effect immediately on page 6

---

**Next:** move to `18-audit-log.md` — the last page!
