# Step 3 — Ticket Queue (p3) (MUST)

> The main browse/filter screen. Same page, same SQL for all roles — `V_MY_TICKETS` handles the scoping.

---

## Step 1: Create the Page

**App Builder → Create Page → Faceted Search**
- Page Number: `3`
- Name: `Ticket Queue`
- Table: pick `V_MY_TICKETS` (or use a custom SQL query — see Step 2)

> If Faceted Search isn't available or gives trouble, fall back to an **Interactive Report**.

---

## Step 2: Set the Region Source

Edit the region → Source → SQL Query:

```sql
SELECT t.*,
       ROUND((SYSDATE - CAST(t.UPDATED_AT AS DATE)) * 24, 1) AS HOURS_SINCE_ACTIVITY
  FROM V_MY_TICKETS t
```

---

## Step 3: Configure Report Columns

| Column | Notes |
|--------|-------|
| `TICKET_NUMBER` | **Link to page 4** (`P4_TICKET_ID` = `#TICKET_ID#`) |
| `SUBJECT` | Main display |
| `TICKET_TYPE` | Incident / Service Request |
| `STATUS` | |
| `SEVERITY` | |
| `PRIORITY` | Show `NVL(PRIORITY, 'Untriaged')` |
| `COMPANY_NAME` | **Condition:** `:APP_ROLE IN ('SYSTEM_ADMIN','SUPPORT_AGENT')` |
| `PROJECT_NAME` | |
| Assignee name | Join or subquery for `FULL_NAME` |
| `CREATED_AT` | |
| `HOURS_SINCE_ACTIVITY` | Display as `XX h ago` |

---

## Step 4: Add Facets

| Facet | Source Column | Notes |
|-------|-------------|-------|
| Status | `STATUS` | Checkbox group |
| Priority | `PRIORITY` | |
| Severity | `SEVERITY` | |
| Ticket Type | `TICKET_TYPE` | Incident vs Service Request |
| Project | `PROJECT_ID` | LOV on project name |
| Assigned To | `ASSIGNED_TO` | LOV on user full name |
| Company | `COMPANY_ID` | **Condition:** `:APP_ROLE IN ('SYSTEM_ADMIN','SUPPORT_AGENT')` |
| Search | | Search facet on `SUBJECT` and `TICKET_NUMBER` |

---

## Step 5: Add Row Actions

### "Assign to Me" (agents)
- **Condition:** `ASSIGNED_TO IS NULL AND :APP_ROLE = 'SUPPORT_AGENT'`
- **Action:** redirect to page 6 (Assign) with the ticket pre-filled

### "Action Needed" Badge (clients)
When `STATUS = 'Resolved'`, show a badge so the client knows to confirm/close. **Escape all substituted data.**

---

## Step 6: Test It

| Test | Expected |
|------|----------|
| Log in as `anna@acme.example` | Sees only Acme tickets; company facet/column hidden |
| Log in as `bob@acme.example` (Client Admin) | Sees all Acme tickets across all projects |
| Log in as `mike@northwind.example` (Agent) | Sees tickets from his assigned projects only — no Initech |
| Log in as `sara@northwind.example` (System Admin) | Sees everything, company facet visible |
| Click a ticket number | Opens page 4 with that ticket |

---

## Isolation Checklist

- [ ] Source is `V_MY_TICKETS` — no base `TICKETS` table anywhere
- [ ] Company facet/column hidden for client roles
- [ ] "Assign to me" process re-checks visibility server-side
- [ ] Anna sees only her scope; Mike never sees Initech

---

**Next:** move to `04-ticket-detail.md`.
