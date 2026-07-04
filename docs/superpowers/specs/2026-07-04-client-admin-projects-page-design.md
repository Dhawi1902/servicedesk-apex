# Design: Reusable Projects page — Client Admin gets the same list/detail hub, fewer actions

**Date:** 2026-07-04
**Status:** Approved (brainstorming session with project lead)
**Builds on:** decision Q (Open/Restricted visibility, `USER_PROJECTS` = invitation list),
admin-console design (2026-07-03: Projects list + Project Detail hub)
**Retires:** mockup page 18 (`18-user-projects.html`, flat "Project Invitations" table)

## Problem

The System Admin has a rich Projects experience — list (page 11) → Project Detail hub
(page 19: Details · Support Team · SLA Targets · Categories · Invitations). The Client
Admin only has a flat invitation table (page 18). That means:

1. Two divergent UIs over the same data — more code, more drift.
2. The Client Admin has no view of their engagements (who supports them, what SLA
   targets apply) even though nothing there is secret from them — agent names already
   appear in the L1 assignment LOV, and `sla_due_date` already appears on tickets.

Goal (stated by project lead): **one reusable page pair** — the same Projects list and
Project Detail hub rendered for both roles, with the Client Admin getting a scoped,
mostly read-only version.

## Approaches considered

- **A. One role-aware page pair (chosen)** — `renderProjects` / `renderProjectDetail`
  gate scope and actions on the current role. Matches the APEX build (one page,
  authorization schemes + server conditions hide write actions, region query already
  tenant-scoped) and the RBAC demo story ("same page, different role").
- **B. Shared render helpers, separate pages** — less disruption, but keeps two entry
  points over the same data; duplication returns over time.
- **C. Grow page 18 into its own hub** — near-duplicate of page 19; rejected outright.

## Design (approach A)

### Navigation

- Client Admin nav: **"Project Invitations" → "Projects"**, linking to
  `11-projects.html` (nav key `projects` so active-page highlighting works; same
  Administration section; icon 📁 to match admin).
- System Admin nav unchanged.
- `18-user-projects.html` is deleted; `renderUserProjects` removed from `app.js`.

### Projects list (page 11) by role

| | System Admin | Client Admin |
|---|---|---|
| Rows | all companies | own company only (`companyId === u.companyId`) |
| Company column | shown | hidden |
| Create Project | yes | no |
| Row actions | Manage · Edit · Deactivate | **View** (opens same hub) |
| Other columns | Name · Key · Description · Visibility · Status · Tickets · Agents — identical for both |

Other roles (Client User, Support Agent) still have no access to this page.

### Project Detail hub (page 19) by role

| Tab | System Admin | Client Admin |
|---|---|---|
| Details | edit, visibility flip, active flag | read-only |
| Support Team | add/remove agents, change tier (≥1-L1 gate, open-ticket block) | read-only — agent names + tiers |
| SLA Targets | edit targets | read-only |
| Categories | manage project-scoped rows | read-only |
| **Access** (new) | Open: read-only company-user list · Restricted: invite/revoke | same as System Admin |

**The Access tab** replaces the Restricted-only "Invitations" tab and is shown on
**every** project for **both** roles:

- **Open project** → banner "Open — visible to everyone at {company} ({n} users)" +
  read-only list of the company's active users (name, roles, department). No actions.
- **Restricted project** → the existing invite/revoke UI (`USER_PROJECTS` rows),
  unchanged semantics from decision Q. This remains the Client Admin's only write
  power in the hub.

Rationale: the tab is always present, self-explains decision Q (you can *see* what
"Open" means), and gives both admins the company-user directory in project context —
requested during brainstorming ("their company user as well… added into both admin").

### Guard rails

- Client Admin deep-linking a `pid` belonging to another company → not-found shell
  (same pattern as existing role gates in `app.js`). In APEX: the page query filters
  `company_id = :APP_COMPANY_ID` for CLIENT_ADMIN, so a foreign `pid` returns no row.
- Write actions are gated per role at render *and* in the action handlers
  (`sd.showAddUserProject` etc. already company-scoped; team/SLA/category/detail
  editors stay admin-only).
- ≥1-L1 gate and open-ticket removal block: unchanged, admin-side only (Client Admin
  cannot touch the team).
- Audit log: `INVITE` / `REVOKE` events unchanged; no new event types needed.

### Docs impact (deferred sync)

- Brief §7 page table: page 12 "Project Invitations" → "Projects (client view)" —
  same page as 11, role-scoped; Access tab wording.
- `docs/flows.md`: Flow 5 unchanged semantically; Flow 12 admin-console map — tab 5
  becomes "Access — all projects (Open: read-only roster · Restricted: invitations)".
- Per project-lead instruction (2026-07-03), **/sync-docs stays deferred** until the
  design settles; this spec is the interim record.

### APEX mapping (build note)

One Projects report page + one Project Detail page. Authorization scheme
`IS_SYSTEM_ADMIN` on create/edit/team/SLA/category actions; page visible to
`IS_SYSTEM_ADMIN OR IS_CLIENT_ADMIN`; region queries add
`AND (:APP_ROLE = 'SYSTEM_ADMIN' OR company_id = :APP_COMPANY_ID)`. Invite/revoke
processes verify the project belongs to `:APP_COMPANY_ID` for CLIENT_ADMIN.

## Out of scope

- Client Admin editing anything beyond invitations (no visibility-flip requests,
  no category management) — parked.
- Client User / Support Agent access to these pages.
- Department-based visibility (already parked FUTURE P3, decision Q).
