# Page 12 — Project Detail hub (MUST)

> Mockup: `docs/mockups/19-project-detail.html` · APEX type: header stats + **Region Display Selector tabs** · All roles read; System Admin configures; Client Admin manages invitations

## Purpose

One door for everything about a project: **Details · Support Team · SLA Targets · Categories ·
Access (invitations)**. This page absorbs the brief's "Project Invitations" MUST page (decision Q)
and the per-project agent/tier mapping (decision M revised).

## 1. Access guard (first thing on the page)

Before-header PL/SQL process (or page-read authorization) — same matrix as page 11's query:
System Admin: any; Client Admin: own company; Agent: mapped via `AGENT_PROJECTS`;
Client User: Open in own company, or invited via `USER_PROJECTS`. Fail → redirect to page 11
with "Project not found" (don't confirm the project exists).

## 2. Header

Project name, key, company, visibility badge + stat cards: open tickets, SLA-breached,
team size, invited users (Restricted only) — ticket stats `FROM V_MY_TICKETS WHERE project_id = :P12_PROJECT_ID`.

## 3. Tabs (Region Display Selector over 5 regions)

| Tab | Content | Who edits |
|-----|---------|-----------|
| **Details** | name/key/description/visibility/status/SLA policy form | System Admin |
| **Support Team** | IG on `AGENT_PROJECTS` for this project: agent + **tier L1–L4** (decision M revised). Add/remove agents, set tier | System Admin |
| **SLA Targets** | read-only view of the project's effective policy (`SLA_POLICIES` → `SLA_TARGETS` per severity); note "default policy" when `sla_policy_id` is null | System Admin (policy pick on Details; targets edited on page 16) |
| **Categories** | categories in use / applicable | System Admin |
| **Access** | shown for **Restricted** projects: IG on `USER_PROJECTS` — the invitation list. Invite/remove own-company users | **Client Admin (own company) + System Admin** |

## 4. Invitation rules (decision Q)

- Rows in `USER_PROJECTS` **grant** access, never restrict — Open projects need no rows.
- Invitee LOV = active users of the **project's company** only.
- Insert/delete processes re-verify: caller is System Admin, or Client Admin of that company.
- Uninviting a user doesn't touch their existing tickets' history — they just lose visibility.

## Isolation checklist

- [ ] URL-tamper `P12_PROJECT_ID` to a foreign/Restricted-uninvited project as each role → "not found".
- [ ] Ticket stats read `V_MY_TICKETS` (a client viewing an Open project still sees only counts within their own visibility).
- [ ] Invitation DML validates company ownership server-side (Client Admin of Acme cannot invite into a Globex project, nor invite a Globex user).
- [ ] Tier edits (`AGENT_PROJECTS`) are `IS_SYSTEM_ADMIN` only — tier drives assignment rights (page 7), so treat it as security data.
