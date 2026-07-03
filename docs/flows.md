# System Flows — visual reference

One place for every user/system flow in the service desk, as diagrams. Companion to the
[brief](ticketing-system-brief.md) (still the source of truth for requirements) — this file shows
*how things move*, the brief says *what must exist*.

> Diagrams are Mermaid — rendered automatically on GitHub and in VS Code (`Ctrl+Shift+V`).
>
> ⚠️ **Three decisions live here first** (made 2026-07-03, not yet folded into the brief — pending the
> batched finalization pass): the **project support-team flow** (Flow 4), the **removal rule**
> (block until reassigned), and the **no-default project rule on Raise Ticket** (Flow 6 — never
> pre-select a project the user didn't choose or navigate through). Everything else restates the
> brief and the
> [internal-use/visibility spec](superpowers/specs/2026-07-03-internal-use-project-visibility-design.md).

**Index**

| # | Flow | Main actor |
|---|---|---|
| 1 | [Login & role landing](#1-login--role-landing) | Everyone |
| 2 | [Account creation](#2-account-creation) | System Admin (+ Client Admin) |
| 3 | [Project creation](#3-project-creation--support-team-setup) | System Admin |
| 4 | [Support team changes](#4-support-team-changes-agent_projects) | System Admin |
| 5 | [Project visibility & invitations](#5-project-visibility--invitations) | Client Admin |
| 6 | [Raise a ticket](#6-raise-a-ticket) | Client User / Client Admin |
| 7 | [Assignment (three doors)](#7-assignment-three-doors) | All roles |
| 8 | [Ticket lifecycle](#8-ticket-lifecycle) | Support Agent |
| 9 | [Auto-escalation on SLA risk](#9-auto-escalation-on-sla-risk) | System (scheduler) |
| 10 | [Manual reassign to higher tier](#10-manual-reassign-to-higher-tier) | Support Agent |
| 11 | [Notifications map](#11-notifications-map) | System |
| 12 | [Admin console map](#12-admin-console-map) | System Admin |

---

## 1. Login & role landing

Post-auth stamps the session (`APP_COMPANY_ID`, `APP_USER_ID`, `APP_ROLE`), then lands the user in
their default role. Multi-role users (decision P) switch roles from the nav bar without re-login.

```mermaid
flowchart TD
    A[Login via Microsoft SSO] --> B[Post-auth: stamp APP_COMPANY_ID / APP_USER_ID]
    B --> C{default_role set?}
    C -- yes --> E[Land in default_role]
    C -- "no (NULL)" --> D["Highest work role held:<br/>SYSTEM_ADMIN > SUPPORT_AGENT ><br/>CLIENT_ADMIN > CLIENT_USER"]
    D --> E
    E --> F{Holds more than one role?}
    F -- yes --> G[Nav-bar role switcher shown]
    F -- no --> H[No switcher]
    G --> I{"Client mode but zero<br/>accessible projects?"}
    I -- yes --> J[Hide client mode in switcher]
    I -- no --> K[Switch = re-stamp APP_ROLE, no re-login]
```

**Rules:** landing precedence `SYSTEM_ADMIN > SUPPORT_AGENT > CLIENT_ADMIN > CLIENT_USER` (decision P) ·
switcher hides client mode while the accessible-project set is empty (decision Q).

---

## 2. Account creation

One flow; the chosen role shapes the form (decisions P/Q). System Admin creates any account;
a Client Admin can onboard plain client users for their own company.

```mermaid
flowchart TD
    A[Admin opens Create User] --> B[Pick company + full name + email]
    B --> C{Primary role?}
    C -- "Client User" --> D[Department picked - metadata]
    C -- "Client Admin" --> E[No extra fields]
    C -- "Support Agent<br/>(provider company only)" --> F[Tier L1-L4 required +<br/>map AGENT_PROJECTS]
    C -- "System Admin<br/>(provider company only)" --> G[No extra fields]
    D --> H{Provider company?}
    E --> H
    F --> H
    G --> H
    H -- yes --> I[Auto-grant CLIENT_USER role silently - decision Q]
    H -- no --> J[Roles as picked]
    I --> K[Create APEX account + APP_USERS + USER_ROLES rows]
    J --> K
    K --> L[default_role = the primary role picked]
```

**Rules:** every provider-company user can always *be* a requester (auto-granted CLIENT_USER);
what they *see* is governed by project visibility (Flow 5) · agent creation is incomplete without
tier + at least the intended `AGENT_PROJECTS` mapping (Flow 4 covers changes later).

---

## 3. Project creation & support team setup

Creating the engagement and staffing it happen in one continuous flow, so a project can never go
live in a broken state (empty client-assignment LOV, dead escalation chain).

```mermaid
flowchart TD
    A[System Admin: Create Project] --> B[Name + key + company + description]
    B --> C{Visibility?}
    C -- "OPEN (default)" --> D[Whole company sees it]
    C -- RESTRICTED --> E[Invitation-only<br/>e.g. app in testing, HR/payroll]
    D --> F[Step 2: Assign support team]
    E --> F
    F --> G["Agent picker: name + tier + current load (FR-33)"]
    G --> H{At least one L1 agent mapped?}
    H -- no --> I[BLOCKED: cannot activate<br/>clients could assign nobody - FR-10]
    I --> G
    H -- yes --> J{Any L2+ agent mapped?}
    J -- no --> K[WARN: auto-escalation will hit<br/>ESCALATION_BLOCKED immediately - FR-35]
    J -- yes --> L[OK]
    K --> M[Define SLA targets per severity - FR-23]
    L --> M
    M --> N[Project active]
```

**Rules:** ≥1 L1 is a **hard gate** (prevents FR-10's empty-LOV edge) · missing higher tiers is a
**soft warning** (small projects may accept it) · SLA targets per severity per project (FR-23)
complete the setup.

---

## 4. Support team changes (AGENT_PROJECTS)

Two doors into the same table; System Admin only. **Removal rule (decided 2026-07-03): block while
the agent holds open tickets in that project** — reassign first, then remove.

```mermaid
flowchart TD
    A1[Door 1: Project page → Team tab<br/>who covers this project?] --> C
    A2[Door 2: Agent page → Projects section<br/>what does this agent cover?] --> C
    C{Add or remove?}
    C -- add --> D[Pick agent - shows tier + workload]
    D --> E[Insert AGENT_PROJECTS row]
    E --> F[Notify agent + write audit log]
    C -- remove --> G{Agent holds open tickets<br/>in this project?}
    G -- yes --> H[BLOCKED: reassign those tickets first<br/>Flow 10 / admin reassign]
    H --> G
    G -- no --> I[Delete AGENT_PROJECTS row]
    I --> J{Was this the last L1<br/>on an active project?}
    J -- yes --> K[BLOCKED: project must keep one L1]
    J -- no --> L[Removed + audit log]
```

**Rules:** removal can never orphan open work (option A — block) · the ≥1-L1 gate from Flow 3
holds for the project's whole life, not just at creation.

---

## 5. Project visibility & invitations

What a client-side user can access, under decision Q. `USER_PROJECTS` is an **invitation list** —
rows grant access to Restricted projects; Open projects need no setup.

```mermaid
flowchart TD
    A[Client-side user] --> B{Project visibility?}
    B -- OPEN --> C[Visible automatically to every<br/>user of that company]
    B -- RESTRICTED --> D{USER_PROJECTS row exists<br/>for this user + project?}
    D -- yes --> E[Visible - invited]
    D -- no --> F[Invisible - not in LOVs,<br/>lists, or dashboards]
    G[Client Admin] -- invites / revokes --> D
    H[App goes live after pilot] -- "flip RESTRICTED → OPEN" --> B
```

**Rules:** Client Admin sees all company tickets regardless (by role) · agents are ordinary
requesters here — Open projects visible, Restricted keep them out like everyone else ·
one flag flip at go-live replaces per-user cleanup.

---

## 6. Raise a ticket

The project question comes first, and the system **never guesses it** — a ticket lands in a
project only through an explicit choice or context the user visibly navigated through
(prevents mis-filed tickets; decided 2026-07-03).

```mermaid
flowchart TD
    A[Client clicks Raise Ticket] --> B{"How many accessible<br/>projects (Flow 5)?"}
    B -- "1" --> C["Auto-selected — shown read-only<br/>in the 'Filed under' banner"]
    B -- "2+" --> D{"Arrived from a project-scoped place?<br/>(home tile / filtered list passes ?project=)"}
    D -- yes --> E[That project pre-filled — still editable]
    D -- no --> F["NO default — '— Select a project —'<br/>blocks submit until chosen"]
    C --> G["Category LOV, agent LOV and SLA<br/>all cascade from the project"]
    E --> G
    F --> G
    G --> H[Type: INCIDENT or SERVICE_REQUEST - FR-30]
    H --> I["Category (required) + severity with<br/>guidance text (FR-34): Critical/Major/Minor/Low"]
    I --> J[Subject + description]
    J --> K[Submit]
    K --> L[TKT-ref generated - FR-8]
    L --> M[sla_due_date stamped from SLA_TARGETS<br/>by project + severity - FR-23]
    M --> N[Status = New · history row written]
    N --> O["Auto-ack email to requester<br/>names the project - FR-29"]
```

**Rules:** never default to "first project in the list" — pre-fill only from explicit navigation
context (`?project=`) or when exactly one project is accessible · the cascade makes a wrong pick
self-evident (wrong categories/agents = immediate error signal) · the ack email naming the project
lets the requester catch a mis-file within minutes · severity = client's business impact; priority
stays NULL until support triages (FR-7/K) · `company_id` + `project_id` + `department_id`
(metadata) stamped at creation.

---

## 7. Assignment (three doors)

```mermaid
flowchart TD
    subgraph SA[System Admin]
        A1[Pick ANY active agent<br/>regardless of AGENT_PROJECTS]
    end
    subgraph AG[Support Agent]
        A2[Self-assign from open queue<br/>decision A]
    end
    subgraph CL[Client User / Client Admin]
        A3["LOV = L1 agents only, mapped to the<br/>ticket's project (decisions J/L) + workload shown (FR-33)"]
    end
    A1 --> B[assigned_to set · status New → Assigned]
    A2 --> B
    A3 --> B
    B --> C[TICKET_HISTORY: ASSIGN row]
    C --> D[Assignment email to agent - FR-21]
    A3 -.-> E{No L1 mapped to project?}
    E -- "can't happen" --> F[Flow 3/4 hard gate guarantees ≥1 L1]
```

**Rules:** clients reach *first-line* support only; higher tiers via reassignment (Flow 10) ·
a Client User can assign on tickets they can see; a Client Admin on any company ticket (FR-10).

---

## 8. Ticket lifecycle

The core state machine (decision B). Every transition writes `TICKET_HISTORY` (FR-12).

```mermaid
stateDiagram-v2
    [*] --> New: client raises (Flow 6)
    New --> Assigned: assign (Flow 7)
    Assigned --> InProgress: agent starts work
    InProgress --> OnHold: waiting on client / third party
    OnHold --> InProgress: resume
    InProgress --> Resolved: resolution code + summary required (FR-36)
    Resolved --> Closed: client or System Admin only (FR-11)
    Resolved --> InProgress: REOPEN (client, reopen_count++)
    Closed --> [*]

    note right of Assigned
        Triage gate (FR-37):
        priority P1-P4 must be set
        before In Progress
    end note

    note right of Closed
        After close: requester rates
        CSAT 1-5, one time only (FR-27)
    end note
```

**Rules:** agent **cannot** close — only the client (or System Admin) confirms the fix (FR-11) ·
first agent response stamps `first_response_at` (FR-31) · resolution codes:
`FIXED / WORKAROUND / KNOWN_ERROR / CANNOT_REPRODUCE / DUPLICATE / USER_EDUCATION / NOT_AN_INCIDENT`.

---

## 9. Auto-escalation on SLA risk

System-driven (FR-35, decision G). Scheduler runs every 5 minutes.

```mermaid
flowchart TD
    A[Scheduler: every 5 min] --> B{Open ticket past<br/>75% of SLA?}
    B -- no --> A
    B -- yes --> C[WARNING: notify agent + admin<br/>history: SLA_WARNING]
    C --> D{Past 90% of SLA?<br/>threshold per project:<br/>SLA_TARGETS.escalation_pct}
    D -- no --> A
    D -- yes --> E{Higher-tier agent mapped<br/>to this project?}
    E -- yes --> F[Auto-reassign to next tier,<br/>lowest open-ticket count<br/>history: ESCALATION]
    F --> G[Notify customer - FR-35]
    E -- "no (L4 / none mapped)" --> H[Hierarchical escalation:<br/>notify System Admin + Client Admin<br/>flag ESCALATION_BLOCKED, keep assignee]
```

**Rules:** functional escalation stays *within the ticket's project team* — which is why Flow 3
warns when a project has no L2+ · thresholds are per project/severity.

---

## 10. Manual reassign to higher tier

FR-26 — an agent hands a ticket up when it exceeds their tier.

```mermaid
flowchart TD
    A[Agent on ticket detail: Reassign] --> B["LOV = agents at SAME or HIGHER tier,<br/>mapped to the ticket's project<br/>(an L1 sees L1-L4; an L3 sees L3-L4)"]
    B --> C[Optionally raise priority]
    C --> D[assigned_to updated<br/>history: REASSIGN]
    D --> E[Notify new agent - FR-21]
```

**Rules:** downward reassignment is not offered in the LOV · System Admin is unconstrained
(any agent, any direction).

---

## 11. Notifications map

All via `APEX_MAIL`; each event also lands in `TICKET_HISTORY`.

| Event | Who is notified | FR |
|---|---|---|
| Ticket created | Requester (auto-ack) | FR-29 |
| Ticket assigned / reassigned | The agent | FR-21 |
| Status changed | Requester | FR-22 |
| Comment added by client | Assigned agent | FR-38 |
| Comment added by agent (non-internal) | Requester | FR-38 |
| SLA 75% warning | Agent + System Admin | FR-35 |
| SLA 90% auto-escalation | New agent + customer | FR-35 |
| Escalation blocked | System Admin + Client Admin | FR-35 |
| Added to a project's support team | The agent | Flow 4 |

---

## 12. Admin console map

How the ADMINISTRATION pages relate to the tables and to each other
(full rationale: [admin-console spec](superpowers/specs/2026-07-03-admin-console-design.md)).
Guiding idea: **flat pages browse, the Project Detail hub configures.**

```mermaid
flowchart LR
    subgraph NAV[ADMINISTRATION menu]
        CO[Companies]
        PR[Projects]
        US[Users]
        CA[Categories - global registry]
        SL[SLA Targets - overview]
        AM[Agent-Project Mapping<br/>grouped-by-project cards]
        AU[Audit Log - read only]
    end
    CO -- Manage --> CD[Company Detail<br/>projects · users · departments]
    PR -- Manage --> PD[PROJECT DETAIL HUB]
    subgraph PD_TABS[Project Detail tabs]
        T1[Details<br/>visibility flip · active flag]
        T2[Support Team<br/>= AGENT_PROJECTS]
        T3[SLA Targets<br/>= SLA_TARGETS]
        T4[Categories<br/>project-scoped rows]
        T5[Invitations - Restricted only<br/>= USER_PROJECTS]
    end
    PD --> T1 & T2 & T3 & T4 & T5
    AM <-. same table, two doors .-> T2
    SL <-. same table, two doors .-> T3
    CA <-. same table, two doors .-> T4
    US -- create/edit/deactivate<br/>reset password · role chips --> UT[(APP_USERS + USER_ROLES)]
    T1 & T2 & T3 & T4 & T5 & US & CO -. every action writes .-> AU
```

**Key rules:** project `company` is immutable after creation · users are deactivated,
never deleted · the L1 hard gate and open-ticket removal block (Flows 3/4) are enforced in
both doors to `AGENT_PROJECTS` · audit log page design unchanged — its event vocabulary grows
(visibility flips, team changes, invitations, SLA edits, role changes, password resets).

---

*Living document — update alongside the brief; fold Flow 3/4/12 decisions into the brief at the
finalization pass (with `/sync-docs`).*
