# Page 13 — My Company hub (SHOULD)

> Mockup: `docs/mockups/17-company-detail.html` · APEX type: header stats + tabs · Client roles (own company, read-only) + System Admin (any company, editable — reached from page 9's Manage link)

## Purpose

One page, two hats: for **client roles** it's the read-only "My Company" hub (spec 2026-07-04);
for the **System Admin** it's the company drill-down from page 9. Tabs:
**Projects · Departments · Client Admins**.

## 1. Company resolution (the tenant lock)

```
:P13_COMPANY_ID := CASE WHEN :APP_ROLE = 'SYSTEM_ADMIN'
                        THEN <url parameter>            -- admin picks any company
                        ELSE NV('APP_COMPANY_ID') END;  -- clients are LOCKED to their own
```

Compute this in a before-header process and **ignore any URL value for non-admins** — this is
the page's whole isolation story. Agents don't get this page (nav + authorization:
`:APP_ROLE != 'SUPPORT_AGENT'`).

## 2. Header stats

Open tickets (`V_MY_TICKETS` — a plain Client User's counts respect their project access),
SLA breached, projects, users, client admins.

## 3. Tabs

| Tab | Content | Editable by |
|-----|---------|-------------|
| **Projects** | company's projects (Client User: only ones they can access) with visibility badge, ticket/agent counts; Manage/View → page 12 | System Admin adds/edits here; clients read-only |
| **Departments** | departments + user counts. Help text: **metadata only** (decision N) — routing/reporting, never visibility | System Admin (and Client Admin per CLAUDE.md "manages company users & departments") |
| **Client Admins** | who runs this company's side: name, email, status, last login. Empty-state warning: "No Client Admin — this company cannot self-manage" | read-only (grants happen on page 10) |

## Isolation checklist

- [ ] As Anna, edit the URL to another company ID → still renders Acme (value ignored), never an error revealing the other company exists.
- [ ] Client User's Projects tab excludes uninvited Restricted projects.
- [ ] All edit buttons (add project/department) authorization-gated, DML re-checks role + company.
