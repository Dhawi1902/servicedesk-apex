# APEX Build Guide — Multi-Tenant Service Desk

Step-by-step documentation for building the locked design (2026-07-04) in the APEX workspace.
The design source of truth is `docs/ticketing-system-brief.md`; the visual reference is the
mockup prototype (<https://apex-demo.dhawilabs.com>, source `docs/mockups/`). This guide is the
bridge: **what to click and build in App Builder, page by page**.

## How to use this guide

1. Start with [`00-database-setup.md`](00-database-setup.md) — schema, seed data, auth, isolation views.
2. Build pages in the order below. Page 1 (Login) also sets up the security foundation
   (app items, post-auth, authorization schemes) that every other page consumes — **do not skip it**.
3. Each page doc ends with an **isolation checklist**. A cross-tenant leak invalidates the whole
   "production-level" claim — run the `tenant-isolation-auditor` agent over each page before demoing.

## The pages — 18 total (12 MUST + 6 SHOULD)

| # | Page | Guide | Mockup | APEX type | Priority |
|---|------|-------|--------|-----------|----------|
| 1 | Login + security foundation | [`01-login.md`](01-login.md) | `01-login.html` | Login page (built-in) | **MUST** |
| 2 | Home + app shell (nav, role switcher) | [`02-home.md`](02-home.md) | `02-home.html` | Cards / redirect | **MUST** |
| 3 | Dashboard | [`03-dashboard.md`](03-dashboard.md) | `03-dashboard.html` | Cards + Charts | **MUST** |
| 4 | Ticket Queue / List | [`04-ticket-queue.md`](04-ticket-queue.md) | `04-ticket-list.html` | Faceted Search | **MUST** |
| 5 | Ticket Detail | [`05-ticket-detail.md`](05-ticket-detail.md) | `05-ticket-detail.html` | Form + regions | **MUST** |
| 6 | Raise Ticket | [`06-raise-ticket.md`](06-raise-ticket.md) | `06-create-ticket.html` | Modal form | **MUST** |
| 7 | Assign / Reassign | [`07-assign.md`](07-assign.md) | `07-assign.html` | Modal form | **MUST** |
| 8 | Add Comment | [`08-add-comment.md`](08-add-comment.md) | `08-add-comment.html` | Modal form | **MUST** |
| 9 | Companies (manage) | [`09-companies.md`](09-companies.md) | `09-companies.html` | Interactive Grid | **MUST** |
| 10 | Users (manage) | [`10-users.md`](10-users.md) | `10-users.html` | Interactive Grid | **MUST** |
| 11 | Projects (list) | [`11-projects.md`](11-projects.md) | `11-projects.html` | Interactive Report | **MUST** |
| 12 | Project Detail hub (team / SLA / categories / invitations) | [`12-project-detail.md`](12-project-detail.md) | `19-project-detail.html` | Tabbed detail page | **MUST** |
| 13 | My Company hub | [`13-my-company.md`](13-my-company.md) | `17-company-detail.html` | Tabbed detail page | SHOULD |
| 14 | Categories (manage) | [`14-categories.md`](14-categories.md) | `11-categories.html` | Interactive Grid | SHOULD |
| 15 | My Profile | [`15-profile.md`](15-profile.md) | `12-profile.html` | Form | SHOULD |
| 16 | SLA Policies + Targets | [`16-sla-policies.md`](16-sla-policies.md) | `13-sla-targets.html` | Master-detail | SHOULD |
| 17 | Agent–Project Mapping | [`17-agent-projects.md`](17-agent-projects.md) | `14-agent-companies.html` | Interactive Grid | SHOULD |
| 18 | Audit Log | [`18-audit-log.md`](18-audit-log.md) | `16-audit-log.html` | Interactive Report | SHOULD |

> The brief's §6 table lists 15 pages; the locked mockups grew that to 18 — the Project Detail hub
> absorbs the brief's "Project Invitations" page, and My Company / Audit Log / the global
> Agent–Project grid were added at design lock. **File numbers here = recommended APEX page numbers.**

## Recommended build order

| Phase | Pages | Why first |
|-------|-------|-----------|
| 0. Foundation | DB setup → 1 → 2 | Everything consumes the app items + authorization schemes |
| 1. Ticket spine | 4 → 5 → 6 → 7 → 8 | The demo core; hits assignment + lifecycle non-negotiables |
| 2. Dashboard | 3 | Needs ticket data flowing to look alive |
| 3. Admin | 9 → 10 → 11 → 12 | Companies / users / projects management non-negotiables |
| 4. Polish | 13 → 18 | SHOULD pages, in whatever order time allows |

**Irreducible demo spine if time gets tight:** 1, 3, 4, 5, 6, 7, 9, 10, 11 — that alone covers all
four judge non-negotiables (role-based access, multiple companies, assignment, dashboard).

## The two rules every page obeys

1. **Read rule** — every region showing ticket data selects `FROM V_MY_TICKETS / V_MY_COMMENTS /
   V_MY_HISTORY / V_MY_ATTACHMENTS`, never the base tables. The views encode the whole role matrix.
2. **Write rule** — every process that inserts/updates ticket data first verifies visibility:
   `SELECT COUNT(*) FROM V_MY_TICKETS WHERE TICKET_ID = :Pn_TICKET_ID` must be `> 0`.

Plus: one page serves many roles (authorization schemes + server-side conditions — never
role-specific page clones), and prefer declarative APEX features over hand-written code.
