# Design: System Admin console (Administration pages)

**Date:** 2026-07-03
**Status:** Approved (brainstorming session with project lead)
**Builds on:** [internal-use & project-visibility design](2026-07-03-internal-use-project-visibility-design.md) (decisions P/Q) and `docs/flows.md` (Flows 2–5)
**Not yet in the brief** — folds in at the batched finalization pass, with `/sync-docs`.

## The organizing idea

Flat admin pages are for **browsing**; a per-project hub is for **configuring**.
Everything project-scoped (team, SLA, categories, invitations) is managed from one
**Project Detail** page with tabs — the same "Manage" drill-down pattern Companies
already has. The flat pages stay as cross-cutting overviews.

```
ADMINISTRATION
├── Companies        → thin list · Manage → Company Detail (projects/users/departments)
├── Projects         → list (+ visibility column) · Manage → PROJECT DETAIL HUB
│                        tabs: Details | Support Team | SLA Targets | Categories | Invitations*
│                        (*only when visibility = RESTRICTED)
├── Users            → global list, role chips, company/status filters
├── Categories       → global registry (all scopes: global / company / project)
├── SLA Targets      → cross-project overview (was missing from nav)
├── Agent-Project Mapping → grouped-by-project team cards (reshaped)
└── Audit Log        → unchanged (read-only IR); event vocabulary grows
```

## Per-page decisions

### 1. Companies — keep thin
Name + status + counts + Manage drill-down. **Deactivating a company**: its users
can't log in; its projects freeze (no new tickets). Company is the tenant container,
not a settings surface. FUTURE (P3): CRM fields (primary contact, account manager).

### 2. Projects — the settings live here
List: name, key, company, description, **visibility (Open/Restricted — decision Q)**,
status, ticket/agent counts, **Manage → Project Detail hub**.

Project Detail tabs:
- **Details** — name, key, description, visibility flip, active flag.
  `company_id` is **immutable after creation** (moving a project between tenants
  would rewrite the tenant key under historical tickets).
- **Support Team** — `AGENT_PROJECTS` for this project (Flow 3/4 gates enforced here).
- **SLA Targets** — the per-severity grid (response h / resolution d / escalation %),
  seeded with defaults at creation, fine-tuned here (FR-23).
- **Categories** — this project's project-scoped category rows (same table as the
  global registry; two-doors pattern).
- **Invitations** — only visible when RESTRICTED: invited users (`USER_PROJECTS`).

**Deactivating a project**: no new tickets; existing tickets workable to closure.

### 3. Users — global list, lifecycle actions
- Admin can: create (role-shaped form, Flow 2), edit, **deactivate — never delete**
  (TICKET_HISTORY/comments FK users forever), **reset password / unlock** (APEX
  account action), manage roles + `default_role`.
- Display: **role chips** (decision P — a user can hold several: `Support Agent ·
  Client User`), tier for agents, company/status filters, last login.
- Show all users: yes (System Admin is global); default filter = Active.
- Client Admin has a separate company-scoped users page (not this one).

### 4. Categories — one registry, two doors
The hybrid model is one table; scope = which columns are filled
(`company_id` NULL = global; `project_id` set = project-specific). The global page
manages all scopes and stays the master view; the Project Detail Categories tab is
a filtered second door into the same rows. Severity/priority reference lists stay
read-only on this page (fixed check constraints, not admin-editable in v1).

### 5. Agent-Project Mapping — reshape, don't keep the DB-style grid
The flat one-row-per-mapping grid can't answer "who covers project X?" and can't
enforce the gates. New shape — **one card per project with agent chips**:

> **ACME / IT Support** — `Nora (L1) ×` `Raj (L2) ×` `+ Add agent` ⚠️ no L3+ mapped

- Project with **no L1** → red badge (the Flow 3 hard gate made visible).
- No L2+ → soft warning (escalation chain dead-ends, FR-35).
- Removing a chip is **blocked** while that agent holds open tickets in the project,
  or when they're the **last L1** on an active project (Flow 4).
- Same data as the Project Detail Support Team tab (two doors).
- In APEX: report grouped by project + modal — still declarative.

### 6. SLA per project — creation seeds, admin tunes
`SLA_TARGETS` rows (4 severities × response/resolution/escalation%) are
**auto-seeded from defaults at project creation** (Flow 3 final step), then edited
on the SLA Targets page (grouped-by-project cards — already right in the mockup)
or the Project Detail SLA tab. Nav gap fixed: SLA Targets joins the
ADMINISTRATION menu.

### 7. Audit Log — leave as is; grow coverage
Page design unchanged (read-only Interactive Report, old/new values, filters).
New admin actions that must write rows: project visibility flip, team add/remove,
invitation add/revoke, SLA target edit, role grant/revoke, password reset,
company/project deactivation.

## Out of scope

- Client Admin's scoped console (their users/departments/invitations) — same
  patterns, company-locked; only the invitations page changes semantics (decision Q).
- Departments page — unchanged (metadata only, decision N).
- KPI / SLA-compliance reporting pages — reporting, not administration.
