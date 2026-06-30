# CLAUDE.md

Guidance for Claude Code (and teammates) working in this repository.

## What this workspace is

Two things live here:

1. **An offline Oracle APEX 26.1 API reference** — a faithful local copy of the official
   docs, so APEX capabilities can be **looked up, not assumed**. Entry point:
   [`CAPABILITIES.md`](CAPABILITIES.md) (task-oriented map → links to full API files under `reference/`).
2. **A hackathon project** — building a **multi-tenant service desk / ticketing system** in
   Oracle APEX. All planning artifacts are in [`docs/`](docs/). Start with
   [`docs/ticketing-system-brief.md`](docs/ticketing-system-brief.md).

## The hard rule: look up APEX APIs, don't guess

Before claiming APEX can or cannot do something, **check the reference**:

- Start at `CAPABILITIES.md` ("to do X, use API Y") → open the linked file for signatures/params.
- PL/SQL packages: `reference/plsql/` · JavaScript: `reference/javascript/` · APEXlang: `reference/apexlang/`.
- This is **version 26.1**. Confirm the running instance's version before relying on newer APIs.
- Most PL/SQL APIs need an APEX session/workspace context (set `APEX_UTIL.SET_WORKSPACE` outside a session).

Do not edit `_backup/` (source HTML caches, used to regenerate the reference).

---

## The project at a glance

A vendor (our company) runs a support desk for **multiple client companies** (tenants).
Self-hosted alternative to Jira Service Management. Judged on: **working demo → feature
breadth → UI polish**, in that order. Timebox: **3 weeks**. Team: **mixed (some non-devs),
all new to APEX**. Environment: **company APEX instance**.

**Judge's non-negotiables:** role-based access · multiple companies · ticket assignment · dashboard.

### The one rule that cannot break: tenant isolation
A client must **never** see another client's tickets. Every tenant-scoped table carries
`company_id`; every client-facing query filters on it. A cross-tenant data leak invalidates
the entire "production-level" claim. Test this harder than anything else.

### Roles (4)
- **Client User** — sees only their own tickets; raises/comments.
- **Client Admin** — sees all of their own company's tickets.
- **Support Agent** — works assigned tickets (status/comments/resolve); no user/company admin.
- **System Admin** — everything across all companies; manages users/companies; **assigns** tickets.

### Data model (6 tables)
`COMPANIES` · `APP_USERS` · `TICKETS` · `TICKET_COMMENTS` · `TICKET_HISTORY` · `CATEGORIES`.
`TICKETS.company_id` is the tenant key. Full schema + ERD in the brief.

### Ticket lifecycle
`New → Assigned → In Progress → Resolved → Closed` (optional `On Hold`, `Reopen`).
Every state change is written to `TICKET_HISTORY` (who/what/when).

### Scope (MoSCoW) — protect the demo over adding features
- **MUST (17):** companies/users/roles, login + isolation, ticket CRUD + lifecycle, assignment, comments + history, dashboard.
- **SHOULD (8):** categories/priorities + filtering, branded theme, assignment notification, CSAT rating (Star Rating item), dashboard analytics (avg resolution time + per-agent counts), auto-acknowledgement email (`APEX_MAIL`), escalate action (reassign + raise priority, logged).
- **COULD (4, do not commit):** SLA breach *highlight* only (declarative, no timers), AI category suggest (`APEX_AI`), attachments, knowledge base.

## APEX APIs most relevant to this build
Look these up in the reference before implementing:

| Need | API | Where |
|---|---|---|
| Role-based access control (assign/check roles) | `APEX_ACL`, `APEX_AUTHORIZATION` | `reference/plsql/` |
| Authentication / custom login | `APEX_AUTHENTICATION`, `APEX_CUSTOM_AUTH` | `reference/plsql/` |
| Read/set session state (e.g. current `company_id`) | `APEX_SESSION_STATE`, `APEX_UTIL` | `reference/plsql/` |
| Prevent XSS on user-entered ticket text | `APEX_ESCAPE` | `reference/plsql/` |
| Generate sample/test data | `APEX_DG_DATA_GEN` | `reference/plsql/` |
| Email notifications | `APEX_MAIL` | `reference/plsql/` |
| Export dashboard/report data | `APEX_DATA_EXPORT` | `reference/plsql/` |
| (Stretch) AI category/priority suggestion | `APEX_AI` | `reference/plsql/` |

> Tenant isolation in v1 = APEX **application item** holding the logged-in user's `company_id` +
> role (set at login), client-facing reports filter `WHERE company_id = :APP_COMPANY_ID`, with
> **authorization schemes** layered per role. (VPD is a more robust stretch option.)

## Documentation map (`docs/`)
| File | Purpose |
|---|---|
| `ticketing-system-brief.md` | Source-of-truth design doc (requirements → workflow → database → plan) |
| `ticketing-system.html` | Interactive, visual version for sharing/screen-share |
| `Ticketing-Kickoff.pptx` | Slide deck to present the kickoff |
| `Ticketing-Requirements.xlsx` | Live requirements tracker (filter by priority, assign owners) |
| `mockups/` | Clickable HTML/JS prototype of all 12 pages (APEX Universal-Theme look) |

When project decisions change (e.g. the A–F open decisions in the brief), **update all four**
so they stay consistent.

## Interactive prototype (`docs/mockups/`)
A working, **simulated** front-end demo of the 12-page architecture — APEX is NOT involved yet.
Use it to agree on layout/flow and to demo RBAC + tenant isolation before building in APEX.

- **Live:** <https://apex-demo.dhawilabs.com> · **Source:** `docs/mockups/` · **Public repo:** `Dhawi1902/servicedesk-mockups` (Pages).
- **Stack:** thin HTML shells (`<body data-page="…">`) rendered by `assets/app.js`; seed data in
  `assets/demo-data.js`; styling `assets/apex-mock.css`. Data persists in browser localStorage.
- **Accounts:** password `demo` for all — e.g. `anna@acme.example` (Client User),
  `sara@northwind.example` (System Admin), `mike@northwind.example` (Support Agent).
- ⚠️ **Client-side simulation only — NOT real auth/security.** Real auth + isolation are built in APEX.
- **Redeploy after editing `docs/mockups/`:** copy folder to a staging dir, keep `CNAME`/`.nojekyll`/`README`, commit + push to the repo.

## Conventions
- **SQL/PLSQL:** UPPER_SNAKE_CASE tables/columns; singular-purpose objects; parameterized
  queries / bind variables always (never string-concatenate user input into SQL).
- **APEX:** prefer declarative (low-code) features over hand-written code where they exist —
  it suits the mixed team and is faster. Reach for PL/SQL only when declarative can't do it.
- **Docs are living documents.** Keep the four `docs/` artifacts in sync with reality.
- **Temp/scratch work** does not belong in the repo — use the session scratchpad.

## Bundled Claude Code tooling (clone-and-go)
This repo ships its own agent and skill under `.claude/`, so they auto-load for anyone
who clones it — no per-machine setup:
- **`apex-expert` agent** (`.claude/agents/apex-expert.md`) — senior APEX engineer wired to
  the offline reference; grounds every capability claim in `reference/` instead of guessing.
  Invoke it for any APEX SQL/PL-SQL, JS, page/flow, or "can APEX do X" question.
- **`tenant-isolation-auditor` agent** (`.claude/agents/tenant-isolation-auditor.md`) —
  adversarial reviewer for the one rule that cannot break. Run it before merging/demoing
  any client-facing SQL, page, process, LOV, chart, or report. Review-only (reports leaks,
  doesn't edit). Covers missing `company_id` filters, IDOR via URL/item tampering, role
  bypass, session-state trust, unscoped sub-objects, and injection-as-isolation-bypass.
- **`apex` skill** (`.claude/skills/apex/`) — the APEXlang low-code generation workflow
  (component registry, templates, generation workflow) used for scaffolding apps/pages.

## Tooling
- `tools/` holds the Python crawlers that (re)generate the reference (Python 3 + pandoc). See `README.md`.
- Generating the docs deck/sheet uses Python with `openpyxl` and `python-pptx`.
