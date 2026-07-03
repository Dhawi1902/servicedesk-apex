# Design: Internal use & project visibility

**Date:** 2026-07-03
**Status:** Approved (brainstorming session with project lead)
**Supersedes:** the "open default / restriction list" semantics of decision N (2026-07-03)
**Brief decisions:** formalizes **P** (multi-role accounts), adds **Q** (project visibility)

## Problem

The service provider (Northwind) uses the same system for its own internal apps —
it is a tenant like any customer. That raised two unresolved questions:

1. **Account creation:** what roles does an internal user get, and what view do they
   land in at login?
2. **Visibility:** not every internal project should be visible to every employee —
   e.g. an app still in its testing phase, or a sensitive system (HR/payroll).
   The old `USER_PROJECTS` model ("empty = see all projects; rows restrict") made
   hiding a project require per-user configuration for *everyone else*.

## Decisions

### 1. Provider is a normal tenant ("tenant zero") — reconfirmed

Northwind is an ordinary `COMPANIES` row. Internal tickets are ordinary tickets with
`company_id = Northwind`. No special-case code anywhere in isolation, lifecycle, or SLA.

### 2. Everyone at the provider company is auto-granted CLIENT_USER

Every Northwind account gets a `USER_ROLES` row for `CLIENT_USER` at creation —
silently, no checkbox. Agents, admins, and plain staff alike. The role answers
"*may* you ever be a requester?" (always yes for provider staff); what they can
actually see is governed by project visibility (decision 4), not by the role.

### 3. Account creation: one flow, the role shapes the form

System Admin creates accounts (APEX account + `APP_USERS` + `USER_ROLES`).
The chosen role drives the required fields:

| Who | Company | Roles granted | Landing role (`default_role`) | Extra fields |
|---|---|---|---|---|
| Customer staff | customer | CLIENT_USER | CLIENT_USER | department (metadata) |
| Customer coordinator | customer | CLIENT_ADMIN (+CLIENT_USER) | CLIENT_ADMIN | — |
| Support agent | Northwind | SUPPORT_AGENT + CLIENT_USER (auto) | SUPPORT_AGENT | tier L1–L4, `AGENT_PROJECTS` |
| Internal staff | Northwind | CLIENT_USER (auto) | CLIENT_USER | department |
| System Admin | Northwind | SYSTEM_ADMIN (+CLIENT_USER auto) | SYSTEM_ADMIN | — |

**Landing rule:** when `default_role` is NULL, land in the highest work role held:
`SYSTEM_ADMIN > SUPPORT_AGENT > CLIENT_ADMIN > CLIENT_USER`. The nav-bar role
switcher (decision P) handles the rest. Northwind's own Client Admin can onboard
plain internal staff so System Admin isn't a bottleneck.

### 4. Every project is Open or Restricted (new column)

`PROJECTS.visibility` — `OPEN` (default) or `RESTRICTED`:

- **OPEN** — every user of that company automatically sees it and can raise tickets
  in it. Example: `Internal Apps` (IT helpdesk).
- **RESTRICTED** — invisible except to users invited via `USER_PROJECTS`.
  Examples: an app in pilot/testing (flip to OPEN at go-live), permanently
  sensitive systems (HR, payroll).

Applies uniformly to customer companies too — one rule everywhere, no provider
special case. Agents are treated like any other employee on the requester side:
they see OPEN internal projects (broken-laptop tickets) and are kept out of
RESTRICTED ones like everyone else.

### 5. `USER_PROJECTS` becomes an invitation list (semantic flip)

- **Old:** restriction list — empty = all company projects; rows *restrict*.
- **New:** grant list — a client user sees **all OPEN projects of their company
  plus any RESTRICTED projects they're invited to**. Rows *grant* access to
  RESTRICTED projects only (a row pointing at an OPEN project is harmless/redundant).
- Client Admin manages invitations for their company; Client Admin themselves and
  System Admin are unaffected (they see all company / all tickets by role).
- UX note: the role switcher hides "client mode" for a user whose accessible
  project set is empty.

### 6. Schema impact

One new column: `PROJECTS.visibility VARCHAR2(10) DEFAULT 'OPEN' NOT NULL
CHECK (visibility IN ('OPEN','RESTRICTED'))`. `USER_PROJECTS` keeps its shape;
only its interpretation changes (in `V_MY_TICKETS` and the Create Ticket
project LOV).

## Alternatives considered

- **Department-based visibility** (project ↔ departments mapping): better at scale
  (new hire auto-sees their department's apps) but reverses decision N
  ("departments are metadata only") and handles cross-department pilot groups
  poorly. **Parked → FUTURE P3.**
- **Visibility follows project status** (Pilot/Live lifecycle): elegant for the
  testing-phase case but collapses into the flag as soon as one permanently
  sensitive project exists. Rejected.
- **Per-user-type defaults** (agents closed-by-default, staff open): the earlier
  draft. Superseded — the sensitivity lives on the *project*, not the user type.

## Ripple effects (follow-up work, not in this change)

- `sql/05_isolation_views.sql` — `V_MY_TICKETS` client branch must implement
  "OPEN ∪ invited-RESTRICTED"; `01_schema` adds the `visibility` column;
  `02_seed_data` seeds a RESTRICTED example project. *(Note: sql/ is still on the
  pre-projects model and needs the projects migration anyway.)*
- `docs/mockups/` — demo-data + Manage Access page currently encode the old
  restriction-list semantics.
- Re-run `tenant-isolation-auditor` over the revised view logic.
- `/sync-docs` to propagate the brief change to HTML/XLSX/PPTX/CLAUDE.md/memory
  — **deferred at user's request (2026-07-03).**
