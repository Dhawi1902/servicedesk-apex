# Step 11 — Projects List (p10) (MUST)

> Browse service engagements. Flat list only — configuration happens on the Project Detail hub (page 11).

---

## Step 1: Create the Page

**App Builder → Create Page → Interactive Report**
- Page Number: `10`
- Name: `Projects`
- Navigation: add to nav menu (all roles)

---

## Step 2: Set the Region Source

```sql
SELECT p.PROJECT_ID, p.PROJECT_NAME, p.PROJECT_KEY,
       c.COMPANY_NAME, p.DESCRIPTION,
       p.VISIBILITY, p.STATUS,
       (SELECT COUNT(*) FROM TICKETS t WHERE t.PROJECT_ID = p.PROJECT_ID
          AND t.STATUS NOT IN ('Resolved','Closed')) AS OPEN_TICKETS,
       (SELECT COUNT(*) FROM AGENT_PROJECTS ap WHERE ap.PROJECT_ID = p.PROJECT_ID) AS AGENT_COUNT
  FROM V_MY_PROJECTS p
  JOIN COMPANIES c ON c.COMPANY_ID = p.COMPANY_ID
```

---

## Step 3: Configure Columns

| Column | Notes |
|--------|-------|
| `PROJECT_NAME` | Link → **page 11** (`P11_PROJECT_ID`) |
| `PROJECT_KEY` | e.g. ACME-IT |
| `COMPANY_NAME` | **Condition:** `:APP_ROLE IN ('SYSTEM_ADMIN','SUPPORT_AGENT')` |
| `VISIBILITY` | Badge: Open / Restricted |
| `STATUS` | Active / Inactive |
| `OPEN_TICKETS` | Count |
| `AGENT_COUNT` | Count |

---

## Step 4: Add "Create Project" Button (System Admin Only)

Authorization = `IS_SYSTEM_ADMIN`. Opens a modal with: Project Name, Key, Company, Description, Visibility, SLA Policy LOV.

---

## Step 5: Test It

| Test | Expected |
|------|----------|
| Anna (Client User) | Sees Acme's Open projects + invited Restricted. No Globex/Initech. |
| Mike (Agent) | Sees his `AGENT_PROJECTS` rows only |
| Sara (System Admin) | Sees all 8 projects; "Add Project" button visible |
| Click a project name | Opens page 11 |

---

## Isolation Checklist

- [ ] Source is `V_MY_PROJECTS`
- [ ] Company column hidden for clients
- [ ] Add/Edit gated `IS_SYSTEM_ADMIN`

---

**Next:** move to `12-project-detail.md`.
