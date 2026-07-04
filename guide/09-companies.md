# Page 9 — Companies (manage) (MUST)

> Mockup: `docs/mockups/09-companies.html` · APEX type: Interactive Grid · **System Admin only**

## Purpose

CRUD for client companies (tenants). Judge non-negotiable "multiple companies" is proven here
plus on the queue/dashboard.

## 1. Page & region

- Page-level **Authorization Scheme = `IS_SYSTEM_ADMIN`** (nav hiding alone is not security).
- Interactive Grid on `COMPANIES`: name, status (Active/Inactive switch), created date,
  plus useful read-only counts (projects, users, open tickets) as query columns.
- A **Manage** link column → page 13 (`P13_COMPANY_ID`) opens the company hub
  (projects / departments / client admins per company).

## 2. Rules

- **Deactivate, don't delete** — companies with tickets/users must never be hard-deleted
  (history + FKs). Make Delete disabled in the IG toolbar; use the status column.
- New company → remind (help text) to create at least one **project** (tickets need one,
  decision O) and a **Client Admin** user, or the company can't self-serve.
- Company name renders on client-facing pages — escape it where rendered via HTML expressions.

## Isolation checklist

- [ ] Page authorization = `IS_SYSTEM_ADMIN`; verify by URL-jumping to the page as Anna → must get the APEX authorization error.
- [ ] No LOV elsewhere in the app exposes the full company list to non-admins (company picker is admin-only).
