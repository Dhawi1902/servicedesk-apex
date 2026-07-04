# Step 8 — Dashboard (p2) (MUST)

> Judge non-negotiable. Build this after the ticket spine (pages 3–7) so there's data to show.

---

## Step 1: Create the Page

**App Builder → Create Page → Blank Page**
- Page Number: `2`
- Name: `Dashboard`
- Navigation: add to nav menu (all roles)

---

## Step 2: Add KPI Cards

Create a **Cards** region (or Static Content styled as value cards):

```sql
SELECT
  SUM(CASE WHEN STATUS NOT IN ('Resolved','Closed') THEN 1 ELSE 0 END) AS open_tickets,
  SUM(CASE WHEN ASSIGNED_TO IS NULL AND STATUS = 'New' THEN 1 ELSE 0 END) AS unassigned,
  SUM(CASE WHEN SLA_DUE_DATE < SYSDATE AND STATUS NOT IN ('Resolved','Closed') THEN 1 ELSE 0 END) AS sla_breached,
  SUM(CASE WHEN STATUS = 'Resolved' AND TRUNC(RESOLVED_AT,'MM') = TRUNC(SYSDATE,'MM') THEN 1 ELSE 0 END) AS resolved_this_month,
  ROUND(100 * SUM(CASE WHEN STATUS IN ('Resolved','Closed') AND RESOLVED_AT <= SLA_DUE_DATE THEN 1 ELSE 0 END)
    / NULLIF(SUM(CASE WHEN STATUS IN ('Resolved','Closed') THEN 1 ELSE 0 END), 0)) AS sla_compliance_pct
FROM V_MY_TICKETS
```

> Every region reads `FROM V_MY_TICKETS` — the view handles all role scoping. Zero role-specific SQL.

---

## Step 3: Add Charts

### Chart 1 — Tickets by Status (Bar)
```sql
SELECT STATUS AS label, COUNT(*) AS value FROM V_MY_TICKETS GROUP BY STATUS
```

### Chart 2 — Tickets by Priority (Pie/Donut)
```sql
SELECT NVL(PRIORITY, 'Untriaged') AS label, COUNT(*) AS value
  FROM V_MY_TICKETS GROUP BY NVL(PRIORITY, 'Untriaged')
```

### Chart 3 — Tickets by Company (Bar)
```sql
SELECT c.COMPANY_NAME AS label, COUNT(*) AS value
  FROM V_MY_TICKETS t JOIN COMPANIES c ON c.COMPANY_ID = t.COMPANY_ID
 GROUP BY c.COMPANY_NAME
```
**Condition:** `:APP_ROLE IN ('SYSTEM_ADMIN','SUPPORT_AGENT')`

### Chart 4 — Tickets by Project (Bar)
```sql
SELECT p.PROJECT_NAME AS label, COUNT(*) AS value
  FROM V_MY_TICKETS t JOIN PROJECTS p ON p.PROJECT_ID = t.PROJECT_ID
 GROUP BY p.PROJECT_NAME
```

### Chart 5 — Created vs Resolved Over Time (Line)
```sql
SELECT TRUNC(CREATED_AT) AS label,
       SUM(CASE WHEN STATUS NOT IN ('Resolved','Closed') THEN 1 ELSE 0 END) AS created,
       SUM(CASE WHEN STATUS IN ('Resolved','Closed') THEN 1 ELSE 0 END) AS resolved
  FROM V_MY_TICKETS GROUP BY TRUNC(CREATED_AT) ORDER BY 1
```

---

## Step 4: Add Chart Drill-Downs

Every chart segment should link to the Ticket Queue (page 3) with a filter pre-set:
- Link Target: Page `3`
- Set items: e.g. `P3_STATUS` = `&STATUS.`

---

## Step 5: Test It

| Test | Expected |
|------|----------|
| Sara (System Admin) | All KPIs, all charts including "by Company" |
| Anna (Client User) | Her scope only, "by Company" chart hidden |
| Mike (Agent) | His projects only, excludes Initech |

---

## Isolation Checklist

- [ ] Every region uses `V_MY_TICKETS` — no base table names
- [ ] No extra `WHERE company_id = :something` (the view already scopes)
- [ ] Anna's counts match her scope exactly
- [ ] Mike's counts exclude Initech

---

**Next:** move to `09-companies.md` to start the admin pages.
