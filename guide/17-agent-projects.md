# Page 17 — Agent–Project Mapping (SHOULD)

> Mockup: `docs/mockups/14-agent-companies.html` (nav label "Agent-Project Mapping") · APEX type: Interactive Grid · **System Admin only**

## Purpose

The global view of `AGENT_PROJECTS` — which agents cover which projects **and at what tier**
(decisions I / M revised). Page 12's Support Team tab edits the same table per project; this
page answers "what does Mike cover?" across all projects. Build it as the one-stop grid;
if time is short it's droppable (page 12 covers the MUST need).

## 1. Build

IG on `AGENT_PROJECTS` joined to `APP_USERS` + `PROJECTS` + `COMPANIES`:
agent (LOV: users holding SUPPORT_AGENT in `USER_ROLES`), project (LOV: active projects,
display `key — name (company)`), **tier** (LOV: L1/L2/L3/L4), read-only open-ticket count
on that project for that agent.

Validations:
- unique `(user_id, project_id)` — one tier per agent per project;
- agent must hold the SUPPORT_AGENT role;
- warn on removing a mapping while the agent still has open tickets on the project
  (require reassignment first, or the tickets orphan).

## 2. Why tier is security data

The tier on **the ticket's project** decides: which agents clients may assign (L1 only),
and who an agent may reassign to (same-or-higher tier, FR-26). Treat edits here like role
grants — System Admin only, and page 7 re-validates against this table on every assignment.

## Isolation checklist

- [ ] Page gated `IS_SYSTEM_ADMIN`.
- [ ] Mapping changes take effect on page 7's LOV immediately (no cached per-session copies).
- [ ] Seed-data spot check: Mike = Acme L1 + Globex L2, no Initech row.
