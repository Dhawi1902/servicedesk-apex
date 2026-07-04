# Page 11 — Projects (list) (MUST)

> Mockup: `docs/mockups/11-projects.html` · APEX type: Interactive Report (grid look) · All roles, rows role-scoped

## Purpose

Browse service engagements (decision O). Flat list only — configuration happens on the
Project Detail hub (page 12): "flat pages browse, the hub configures".

## 1. Region & role scoping

One report, scoped in SQL (there is no V_MY_PROJECTS view yet — this page's query IS the scope,
mirror `userAccessibleProjectIds` from the mockup):

```sql
SELECT p.*, c.company_name, <ticket count>, <agent count>
  FROM PROJECTS p JOIN COMPANIES c ON c.company_id = p.company_id
 WHERE :APP_ROLE = 'SYSTEM_ADMIN'
    OR (:APP_ROLE = 'SUPPORT_AGENT' AND p.project_id IN
         (SELECT project_id FROM AGENT_PROJECTS WHERE user_id = NV('APP_USER_ID')))
    OR (:APP_ROLE = 'CLIENT_ADMIN' AND p.company_id = NV('APP_COMPANY_ID'))
    OR (:APP_ROLE = 'CLIENT_USER' AND p.company_id = NV('APP_COMPANY_ID')
        AND (p.visibility = 'OPEN' OR p.project_id IN
             (SELECT project_id FROM USER_PROJECTS WHERE user_id = NV('APP_USER_ID'))))
```

(Consider promoting this to a `V_MY_PROJECTS` view in `05_isolation_views.sql` so page 6's LOV,
this page, and page 12's guard share one definition.)

## 2. Columns & actions

Name, **key** (`project_key`, globally unique, company-prefixed e.g. ACME-IT),
company (System Admin + agents only — agents span companies), description,
**visibility badge** (🌐 Open / 🔒 Restricted, decision Q), status, ticket count, agent count.

- **Manage** (System Admin) / **View** (everyone else) link → page 12 with `P12_PROJECT_ID`.
- **+ Add Project** button + company filter: `IS_SYSTEM_ADMIN`. Create/edit via a small modal
  (name, key, company, description, visibility, SLA policy LOV — nullable = default policy).

## Isolation checklist

- [ ] Anna sees Acme's Open projects + her invited Restricted ones — nothing else.
- [ ] Mike sees exactly his `AGENT_PROJECTS` rows (no Initech project).
- [ ] Company column hidden for client roles.
- [ ] Add/Edit actions authorization-gated `IS_SYSTEM_ADMIN`, and the DML process re-checks it.
