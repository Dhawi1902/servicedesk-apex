# Design: Read-only Projects hub for all roles + "My Company" for client roles

**Date:** 2026-07-04
**Status:** Approved (brainstorming session with project lead)
**Builds on:** reusable-projects-page spec (2026-07-04), decision Q (Open/Restricted),
decision I (AGENT_PROJECTS scoping), admin-console design (2026-07-03)

## Problem

After the 2026-07-04 reusable-projects work, the Projects list (page 11) and Project
Detail hub (page 19) serve System Admin and Client Admin. Support Agents and Client
Users still have no project-information view, and client-side roles have no view of
their own company record. Project lead: "this project page and its hub should display
for support agent and client users as well — just information, can't adjust anything;
and for client users and admin, add a companies entry but show the hub only, read-only."

## Approach

Extend the existing role-aware renderers (`renderProjects`, `renderProjectDetail`,
`renderCompanyDetail`) with per-role scope + zero write actions for the new roles.
No new pages. Rejected: separate "lite" pages (duplication), hub-only without a list
(no entry point).

## Design

### 1. Project visibility scope per role (the load-bearing rule)

| Role | List & hub scope | Write powers |
|---|---|---|
| System Admin | all projects | full (unchanged) |
| Client Admin | all own-company projects | invitations only (unchanged) |
| Client User | **accessible only** — Open projects of their company + Restricted they're invited to (decision Q: non-invited Restricted projects stay completely invisible) | none |
| Support Agent | **assigned only** — projects with an `AGENT_PROJECTS` row (decision I) | none |

- Projects list (page 11): Client User/Agent get the same read-only table as Client
  Admin (no Add/Edit, row action **View**). Company column: hidden for client roles,
  **shown for Support Agents** (their projects span companies). Client Admin rendering
  unchanged from the 2026-07-04 spec.
- Project Detail hub (page 19) URL guard extends per the table: out-of-scope `pid`
  (foreign company, non-invited Restricted, unassigned agent project) → not-found shell.

### 2. Project Detail hub for Client User / Support Agent

All five tabs render (Details · Support Team · SLA Policy · Categories · Access),
read-only — same panels the Client Admin sees, minus the invitation powers:

- Access tab is visible to all four roles (decided in brainstorm, default on user's
  behalf: show read-only). Open → company roster; Restricted → invited list.
- **Invite/Revoke buttons appear only for System Admin + Client Admin.** Client
  User/Agent see the same lists with no action column/buttons.
- Breadcrumb for non-admin roles stays "My Company / Projects / {name}" (client roles)
  and "My Projects / {name}" for agents.

### 3. "My Company" hub for client roles

- New nav entry **My Company** for CLIENT_USER and CLIENT_ADMIN →
  `17-company-detail.html` (no `id` needed; see guard).
- **Guard:** client roles always resolve to their own company — a missing or foreign
  `id` param is ignored and replaced by `u.companyId`. System Admin behavior unchanged
  (requires `id`, any company). Support Agents do **not** get this page (out of scope
  per project lead).
- Read-only for both client roles:
  - **Projects tab** — rows scoped per §1 (Client User: accessible only); row action
    **View** → project hub; no "+ Add Project", no "✎ Edit".
  - **Departments tab** — list only; no "+ Add Department", no per-row Edit.
  - **Client Admins tab** — visible unchanged (useful: "who do I ask for access"),
    but without the "Manage on Users page →" link.
- **Header stats:** for Client Users, Open Tickets / SLA Breached / Projects counts
  are computed from accessible projects only (consistent with FR-4); Client Admin
  keeps company-wide counts. Users / Client Admins counts stay as-is for both.
- Breadcrumb: "My Company / {name}" for client roles; no "Back to Companies" button.

### 4. Navigation

- **Client User:** new "Workspace" section between Tickets and Account → Projects,
  My Company.
- **Support Agent:** "Workspace" section → Projects.
- **Client Admin:** existing Administration section gains **My Company** (after
  Projects).
- System Admin nav unchanged.

### Guard rails

- All scoping is enforced in the render functions AND the action handlers already
  gate writes (invite/revoke check role); read-only roles get no onclick surface.
- In APEX: page authorization opens to all roles; region queries filter per role
  (`AGENT_PROJECTS` join for agents, accessible-projects subquery for client users —
  same predicate set as `V_MY_TICKETS`); all write processes keep their existing
  `IS_SYSTEM_ADMIN` / `IS_CLIENT_ADMIN` authorization schemes.

### Docs impact (deferred sync)

Brief §7 page table: pages 11/17/19 audience widens ("All roles (scoped, read-only
below admin)"); flows.md Flow 12 note. **/sync-docs remains deferred** per project
lead (2026-07-03); this spec is the interim record.

## Out of scope

- Support Agents seeing My Company.
- Any new write power for any role (visibility-flip request already parked FUTURE P3).
- Ticket-list drill-through changes from these pages.
