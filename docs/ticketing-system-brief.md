# Service Desk Ticketing System — Project Brief

**Prepared for:** Hackathon team kickoff meeting
**Date:** 2026-06-30
**Status:** Draft for team discussion — nothing here is final until the team agrees
**Timebox:** Hackathon demo on **16 July 2026** · Continues as a **production system** afterward · Platform: Oracle APEX 26.1 (company instance)
**Framework:** ITIL 4 (Incident Management + Service Request Management practices)

---

## How to use this document

This brief is the agenda for our first working session. We discuss it in this order, because each part feeds the next:

1. **Functional requirements** — *what* the system must let people do (the contract)
2. **Workflow** — the behavior those requirements demand: what happens to a ticket from birth to death
3. **Database** — the tables that store everything the requirements and workflow need (APEX is database-first; this is the foundation)
4. **Goals & task distribution** — only after 1–3 are agreed, we split the work

> **Why this order:** requirements tell us what to build; the workflow shows how the main entity behaves; only then do we know exactly what the database must hold. Design tables too early and we model for features we won't build — or miss columns for ones we will.

> **Ground rule for the meeting:** we are not trying to design a perfect Jira replacement. We are designing the *smallest system that fully works and demos well* for the 16 July hackathon, then hardening it into a production system following ITIL best practices. Protecting a working demo beats adding features. Every time.

---

## 1. The Big Picture (read this first)

### What we're building
A **multi-tenant service desk** — a self-hosted alternative to expensive tools like Jira Service Management / Zendesk — for our company to adopt. Built following **ITIL 4 Incident Management and Service Request Management** best practices.

Our company is the **service provider** that provides support and services to **multiple customer companies** — including itself (internal apps used by our own staff are supported through the same system). This system is where:

- **Customers** (external and internal) raise support tickets and track them
- **Our support staff** triage, assign, and resolve those tickets
- **Management** oversees everything across all clients

### Why this is a strong project
- **Clear business value:** replaces an expensive third-party tool with something we own.
- **Plays to APEX's strengths:** APEX has built-in authentication, role-based access control, and reporting — exactly what this app needs. We build *with* the platform, not against it.
- **Demos beautifully:** the "each client sees only their own tickets, but we see everything" contrast is a 30-second wow moment for judges.

### What the judges explicitly asked for (non-negotiable)
1. **Role-based access** — different users can do different things
2. **Multiple companies** — multi-tenancy: clients are isolated from each other
3. **Ticket assignment** — assign a ticket to a support agent
4. **Dashboard** — visual overview of tickets

### Our context & constraints
| Factor | Reality | Implication |
|---|---|---|
| **Team** | Mixed — some developers, some non-devs | Split work so non-devs own real, valuable declarative pieces (forms, reports, UI, test data, testing) |
| **APEX experience** | All new to APEX | Budget time for learning. Keep techniques simple and proven. |
| **Environment** | Company APEX instance ready | No setup delay — we can build day one |
| **Timeline** | Hackathon demo: **16 July 2026**; system continues as **production** afterward | Working core first, breadth second, polish third for the demo. Production hardening follows. |
| **Framework** | ITIL 4 (Incident + Service Request Management) | Terminology, lifecycle, SLA, and escalation follow ITIL best practices |
| **Judged on** | Working end-to-end demo · feature breadth · UI/UX polish | In that priority order. A broken feature scores worse than a missing one. |

### Scope — what's in, what's out
We organize features by priority so we **always have a working demo**, even if later items slip.

**MUST — this IS the product. The demo dies without these. (18 FRs)**
- Companies (tenants), **projects** (service engagements per company), and Users with roles
- Login + role-based access with **strict tenant isolation** (clients see only their own company's projects)
- Create / view / edit a ticket (scoped to a **project**), with full status lifecycle (including On Hold + Reopen — decision B)
- **Ticket type** (Incident / Service Request) — the foundational ITIL distinction (FR-30)
- **Assign** a ticket to a support agent (scoped to the ticket's project)
- Comments + activity history on each ticket
- **Dashboard** (judge-requested)
- **SSO / Microsoft login** — Social Sign-In with Microsoft Entra ID (Azure AD) via APEX's declarative OAuth2/OpenID Connect scheme. Company uses M365; SSO-only auth (no dual-auth needed for demo). Post-auth process stamps `APP_COMPANY_ID`/`APP_ROLE`/`APP_USER_ID` as before. *(Promoted from P3 FUTURE.)*

**SHOULD — this is where we earn "breadth + polish" points. (18 FRs)**
- Categories & priorities with filtering and search
- Clean, branded UI theme
- Email (or in-app) notification when a ticket is assigned
- **Status-change notification** to client on every lifecycle transition (FR-22, ITIL)
- **CSAT rating** after a ticket is closed (native APEX *Star Rating* item)
- **Dashboard analytics:** average resolution time + tickets handled per agent + **SLA Compliance %** (FR-32)
- **Auto-acknowledgement email** when a ticket is raised (`APEX_MAIL.SEND`)
- **"Reassign" action** on a ticket — reassign to higher-tier agent + optionally raise priority, written to history (FR-26)
- **Auto-escalation** on SLA breach — two-stage (warning at 75%, reassign at 90%), per-company threshold via `SLA_TARGETS.escalation_pct`, functional + hierarchical escalation, workload-based agent selection, 5-min scheduler interval (FR-35)
- **SLA per severity, per project** with breach highlighting — `SLA_TARGETS` table keyed on `(project_id, severity)`, colour-coded indicators (FR-23)
- **First-response tracking** with response SLA breach indicator (FR-31)
- **Workload visibility** in assignment LOV (FR-33)
- **Severity guidance** text on Create Ticket form (FR-34)
- **Resolution code + summary** required when resolving a ticket (FR-36) — records *how* it was resolved (ITIL closure verification)
- **Triage gate** — priority required before moving to In Progress (FR-37) — enforces ITIL categorization/prioritization step
- **Category required** at ticket creation (FR-7 update) — prevents uncategorized tickets from breaking reports
- **Comment notification** — notify the other party when a comment is added (FR-38, deferred until FR-21/22 are working)

**COULD — only if we finish MUST + SHOULD early. Do NOT commit to these.**
- AI assist (APEX has a built-in `APEX_AI` package — e.g. auto-suggest a ticket's category/priority). Strong demo moment *if* time allows.
- **File / screenshot attachments** on tickets (proof/evidence) — almost entirely declarative; build-ready DDL + isolation plan in §5.1
- Knowledge base

> **Lead's recommendation:** cut AI entirely. SLA breach highlighting is promoted to **SHOULD** — it's cheap (a lookup table + a computed column + conditional formatting) and gives the demo a production feel. The SHOULD items above are all verified feasible in APEX 26.1 and low-cost, so they're worth committing to.

**FUTURE / WON'T (this time) — explicitly out of scope for the hackathon demo; recorded for the production roadmap.**
*The MoSCoW "Won't-have-this-time" tier: not built before the 16 July demo, but captured so the vision is on record and the ideas don't leak into the build. Unlike a typical hackathon, this system continues as a **production product** — these items form the real backlog, prioritized by ITIL importance.*

**P1 — Critical (first production sprint after hackathon):**
- **Separate Incident and Service Request workflows** — distinct lifecycles and approval gates per ticket type (the MUST adds the field; this adds the differentiated process). ITIL's foundational distinction.
- **SLA pause on On Hold + business-hours calendar** — stop the SLA clock when waiting on the client; measure SLA in business hours, not wall-clock time. Without these, SLA metrics are inaccurate. Include On Hold reason classification LOV (`PENDING_CUSTOMER`, `PENDING_THIRD_PARTY`, `PENDING_INTERNAL`).
- **Production-grade tenant isolation via VPD / RLS** — graduate from app-item + `WHERE company_id` (§5) to database-enforced row security.
- **SLA agreement documentation** — add `effective_from`, `effective_to`, `approved_by`, `notes` to `SLA_TARGETS` (or a companion table) for ISO 20000 §8.6.3 compliance. Add an SLA target change audit trail.

**P2 — High:**
- **Knowledge base / known error database** — searchable, agent-facing KB with article-to-incident linking. Reduces resolution time for known issues and satisfies ISO 20000 §8.7.1 (Problem Management — known errors). Suggest articles on the Create Ticket form for ticket deflection. *(Promoted from P4 — ISO 20000 clause 8.7.1 makes this mandatory for certification.)*
- **Email-to-ticket intake + reply-via-email** — clients raise tickets by emailing a support address (inbound mail → `TICKETS`); replies to notification emails append as comments. Without inbound email, 40-60% of support requests are lost. *(Promoted from P4 — essential for real-world adoption.)*
- **Hierarchical escalation** — management notification when SLA is at risk or a major incident occurs (distinct from functional escalation / reassignment). Separate thresholds from functional escalation (e.g. notify at 50% SLA, reassign at 80%).
- **Major Incident process** — dedicated workflow for Critical/P1 issues: separate communication cadence, post-incident review (PIR), ability to link child/related tickets to a major incident parent. Includes **duplicate/related ticket linking** (`TICKET_RELATIONS` table or `duplicate_of` FK).
- **Two-level categorization** — `parent_category_id` self-referential FK on CATEGORIES for Category → Subcategory hierarchy. Composes naturally with the hybrid model (a company-specific subcategory can hang off a global parent). Enables trend analysis and feeds problem management.
- **Service Request catalog / ticket templates** — pre-defined request types with pre-populated fields and specific SLAs. Reduces ticket creation time, standardizes requests.
- **Auto-close after timeout** — tickets in "Resolved" for >5 business days auto-close with notification. Configurable period.
- **Advanced SLA engine** — business-hours calendars, configurable escalation policies per tier, SLA reporting by client (per-client SLA compliance breakdown, response vs. resolution SLA split, breach count by severity). The SHOULD items cover per-company targets + auto-escalation; this is the full enterprise engine. Include SLA review scheduling for ISO 20000 §8.6.3.
- **Canned responses / response templates** — `RESPONSE_TEMPLATES` table + LOV on Add Comment form. Standardizes agent replies and reduces repetitive typing. Biggest agent productivity win per effort.
- **Configurable email templates** — admin-manageable notification templates with placeholder substitution (`{TICKET_REF}`, `{STATUS}`, `{AGENT_NAME}`), replacing hardcoded `APEX_MAIL` text.
- **Time tracking / work log** — `time_spent_minutes` on `TICKET_COMMENTS` or a separate `WORK_LOG` table. Enables cost-per-ticket analysis, client billing, and capacity planning.
- **Bulk actions** — multi-row select on the Ticket Queue (APEX IR row selector) for bulk assign, bulk close, bulk status change. Essential once ticket volume exceeds demo scale.
- **"Needs Attention" smart queue** — computed facet on Page 4 surfacing SLA-at-risk, awaiting-response, and stale tickets. Gives agents a pre-breach intervention window.

**P3 — Medium:**
- **CSAT enhancement** — free-text comment field alongside score, low-score alerts to management, CSAT trend reporting on dashboard, aggregate per-company CSAT for relationship management.
- **Full ITIL KPI dashboard** — reopen rate, backlog aging, first-response time chart, CSAT average, incident volume trend (sparkline/time-series), top-N categories over time, repeat-incident identification.
- **Urgency field + Impact × Urgency = Priority matrix** — the textbook ITIL priority model; auto-suggests priority from severity (impact) + urgency. Removes subjectivity.
- **Department-based project visibility** — map projects to departments (`PROJECT_DEPARTMENTS`) so a new hire in Finance automatically sees Finance apps, instead of per-person invitations. Would reverse "departments are metadata only" (decision N), so it needs its own review. *(Parked from decision Q — the Open/Restricted flag covers v1.)*
- **Visibility-flip request UI** — a "Request change" link on the Client Admin's project Details tab that pre-fills a Service Request ticket ("flip HR Pilot to Open"). The flip itself stays System Admin-only; v1 answer is simply "raise a Service Request" through the normal intake — no parallel approval workflow. *(Parked 2026-07-04.)*
- **Incident ownership** — `owner_id` on TICKETS (the person accountable from start to finish, distinct from current assignee). When reassigned, original owner retains oversight.
- **Problem Management** — Problem records, known errors, link recurring incidents to root causes. First step toward proactive service. Include resolution knowledge capture for KB seeding. *(KB now at P2; this adds the process layer.)*
- **Auto-assignment rules** — round-robin, load-balanced, or skill-based routing. Scales assignment beyond manual selection.
- **Exportable / scheduled management reports** — periodic PDF/Excel reports via `APEX_DATA_EXPORT` + `DBMS_SCHEDULER`. Include per-client monthly service reports (ISO 20000 §8.2).
- **Customer relationship management fields** — `PRIMARY_CONTACT_ID`, `ESCALATION_CONTACT_EMAIL`, `ACCOUNT_MANAGER_ID` on COMPANIES (ISO 20000 §8.2).
- **Client incident history on ticket detail** — "Related Tickets" region on Page 5 showing recent tickets from the same company/requester. Supports ITIL recurring incident identification and faster agent diagnosis.
- **Ticket merge** — merge duplicate tickets into one, consolidating comments and notifying all requesters from the parent. Related to duplicate linking (P2).
- **Rich text editor** — swap textarea to APEX Rich Text Editor on description/comments. Sanitize with `APEX_ESCAPE`. Improves readability for technical issues.
- **Announcement banner** — `SYSTEM_ANNOUNCEMENTS` table + region on landing page. Proactive communication during major incidents reduces duplicate ticket submissions.
- **@mentions in comments** — `@agent_name` in internal notes triggers a notification to the mentioned agent without reassigning the ticket.
- **Agent handoff notes** — pinned `agent_notes` field on tickets (support-staff-only, shown at top of detail page). Supports shift handoff and multi-agent collaboration.
- **Recurring tickets** — auto-create tickets on a schedule via `DBMS_SCHEDULER` (e.g. monthly server patching, quarterly access reviews).
- **Custom fields per ticket type or company** — EAV pattern or JSON column for client-specific data capture (e.g. "Server Name" for infrastructure tickets).
- **REST API via ORDS** — expose `V_MY_TICKETS` and ticket CRUD as RESTful endpoints for monitoring tool integration and management reporting.

**P4 — Low:**
- **Incident Manager role separation** from System Admin — only needed when team grows beyond a handful of agents.
- **Attachments at scale** — OCI Object Storage instead of DB BLOBs, plus virus/malware scanning (the COULD item is the DB-BLOB MVP; see §5.1).
- **Project Lead role** — the deferred `is_lead` flag on `AGENT_PROJECTS` (§2): assign teammates' work within a project *and* work tickets.
- **Self-service knowledge base & portal** — public-facing help centre (distinct from the agent-facing KB at P2).
- **Change Management linkage** — link incident resolution to formal change records when a fix requires a change.
- **CMDB / Service Catalog integration** — link incidents to affected configuration items / services.
- **Chat / integrations** — Slack/Teams webhooks, native mobile app.
- **Continual Improvement register** — structured review of incident trends + improvement tracking (process/governance, not technology). ISO 20000 §10.2.
- **Data retention & disposal policy** — ticket archival after configurable retention period, personal data anonymization for deactivated users, data export for data subject access requests (GDPR/ISO 20000 §6.6).
- **Security event logging** — dedicated `ADMIN_AUDIT_LOG` table for user/company management actions (CREATE, DEACTIVATE, ROLE_CHANGE) beyond APEX's built-in `APEX_ACTIVITY_LOG`.
- **Multi-language / i18n** — APEX XLIFF-based translation support for non-English client companies.
- **Client User mini-dashboard** — simplified summary cards on the landing page for client users ("3 open, 1 awaiting your action").

> **Why have this tier at all:** it's the firewall against scope creep before the demo. Every "ooh, could we also…" idea gets parked here instead of derailing the July 16 milestone — and it doubles as the slide that answers a judge's "where would you take this next?" Post-hackathon, these become the real production backlog, prioritized by ITIL importance (P1–P4 above).

---

## 2. Roles & Access (the backbone)

Two sides: the **customer side** (external and internal users) and the **service provider side** (our support staff). Each role answers: *who are they, what can they see, what can they do.*

| Role | Who they are | Can **see** | Can **do** |
|---|---|---|---|
| **Client User** | Everyday employee at a client company (has the problem) | Tickets in **projects they can access**: all **Open** projects of their company + any **Restricted** projects they're invited to via `USER_PROJECTS` (decision Q) — never other companies' | Raise a ticket, comment, view status, **assign an L1 agent** from agents mapped to their project (decision J/L) |
| **Client Admin** | Coordinator/manager at a client company | **All tickets for their own company** across all projects — never other companies' | Everything a Client User can + manage **Restricted-project invitations** (`USER_PROJECTS`, decision Q), raise on behalf of staff, see company-wide dashboard & reports, **assign/reassign agents** for any company ticket, manage company users & departments |
| **Support Agent** | Our support staff who do the work (tiered L1–L4, decision M) | Tickets in **their assigned projects** via `AGENT_PROJECTS` — never projects they're not on | Work tickets: change status, comment, resolve, **reassign to higher tier**. Cannot manage users/companies |
| **System Admin** | Our manager/lead (likely the team lead) | **Everything**, across all companies and projects | Manage companies, projects & users, **assign/reassign** tickets, configure system, see global dashboard |

- **Multi-company isolation** lives in the jump from *Client Admin* (one company) to *System Admin* (all companies).
- **Assignment** can come from three sources: *System Admin* (any agent), *Support Agent* self-assign (from the open queue), or *Client User / Client Admin* (from **L1 agents only** mapped to their project via `AGENT_PROJECTS` — decisions J/L).

> **Decision (A) — ✅ confirmed:** A Support Agent **can self-assign** from the open queue, **and** the System Admin assigns/reassigns anyone. (Self-assign = an `IS_AGENT`-gated button on the queue/detail that sets `assigned_to = :APP_USER_ID`, moves status to *Assigned*, and writes a `TICKET_HISTORY` row — the same process the Admin's assign action uses.)

> **Decision (I) — ✅ confirmed (revised): agents are scoped to their projects.** Our staff each work specific service engagements (projects), not all of them. So a Support Agent only sees tickets for the **projects they're assigned to** via `AGENT_PROJECTS` — never projects they're not on. This kills cross-project "noise". Mechanism: a join table **`AGENT_PROJECTS`** (`user_id` + `project_id`); the queue/dashboard filter `WHERE project_id IN (the agent's covered projects)`. System Admin is exempt (sees every project by role). *Within* a covered project an agent sees the whole project's tickets (team visibility), but can only change status on tickets assigned to them or unassigned.

> **Decision (L) — ✅ confirmed: clients assign L1 agents only.** Clients (Client User / Client Admin) can assign from agents mapped to their company, but the LOV is filtered to agents whose tier **on that project** is `'L1'` (tier lives on `AGENT_PROJECTS`, decision M revised). Higher tiers are reached via reassignment by support staff. Rationale: clients go to first-line support, not directly to senior specialists.

> **Decision (M) — ✅ confirmed (revised 2026-07-04): agents have explicit L1–L4 tiers, **per project**.** The `tier` field (L1/L2/L3/L4) lives on **`AGENT_PROJECTS`** — an agent's tier is set per project mapping, so the same agent can be L3 on one engagement and L1 on another (tier = proficiency in that service, not a global rank). L1 = first-line (general triage), L2 = specialist, L3 = senior/escalation, L4 = expert/external. Tiers drive assignment visibility (customers see L1 only) and reassignment flow — always evaluated against the **ticket's project**. *(History: 2026-07-02 reversed earlier Decision I's "no per-agent level field" and put `tier` on `APP_USERS`; 2026-07-04 moved it onto `AGENT_PROJECTS` for per-project proficiency.)*

> **Decision (N) — ✅ revised: client visibility is project-scoped.** A Client User sees tickets from **projects they can access**; a Client Admin sees all company tickets across all projects. Rationale: projects (service engagements) are the natural ITIL-aligned visibility boundary; department-scoping was demoted to metadata per ITIL 4, ISO 20000, and industry analysis. The `DEPARTMENTS` table and `department_id` columns remain for routing/reporting but are **not used for visibility filtering**. *What "can access" means was revised by decision Q: all **Open** projects of the company + invited **Restricted** projects (`USER_PROJECTS` is an invitation list, not a restriction list).*

> **Decision (P) — ✅ confirmed: users can hold multiple roles (role-switching without re-login).** Roles live in **`USER_ROLES`** (one-to-many), not on `APP_USERS`. `APP_USERS.default_role` (nullable) is the landing role at login; when NULL, land in the highest work role held — `SYSTEM_ADMIN > SUPPORT_AGENT > CLIENT_ADMIN > CLIENT_USER`. Multi-role users get a nav-bar role switcher; the switcher hides "client mode" while a user's accessible project set is empty. This is what lets provider staff be both support-side workers and internal requesters.

> **Decision (Q) — ✅ decided (2026-07-03): internal use runs through the same machinery; projects carry an Open/Restricted visibility flag.**
> - **Provider = tenant zero.** Our own company (Northwind) is an ordinary `COMPANIES` row; internal tickets are ordinary tickets with `company_id = Northwind`. No special-case code.
> - **Auto-grant CLIENT_USER.** Every provider-company account gets the `CLIENT_USER` role at creation, silently — every employee is a potential internal requester. Agents therefore always hold `SUPPORT_AGENT` + `CLIENT_USER`.
> - **`PROJECTS.visibility` = `OPEN` (default) or `RESTRICTED`.** *Open*: every user of that company sees it and can raise tickets in it (e.g. `Internal Apps` / IT helpdesk). *Restricted*: invisible except to users **invited** via `USER_PROJECTS` (e.g. an app still in testing — flip to Open at go-live — or a permanently sensitive system like HR/payroll). Applies uniformly to customer companies too.
> - **`USER_PROJECTS` semantic flip:** it is now an **invitation list** (rows *grant* access to Restricted projects), replacing the old "empty = all, rows restrict" model. Client Admin manages invitations for their company.
> - **Agents are ordinary requesters:** on the client side they see Open internal projects like any employee; Restricted projects keep them out like everyone else. No agent-specific visibility rule needed.
> - **Parked (FUTURE P3):** department-based project visibility.

> **Decision (O) — ✅ confirmed: service engagements are modeled as projects.** Each client company can have one or more **projects** (service engagements) — e.g., "IT Support" and "HR Systems Support." Projects are the service-provider-side unit of service delivery: they scope agent assignment (`AGENT_PROJECTS`), SLA targets (`SLA_TARGETS`), and optionally categories. The `PROJECTS` table sits between `COMPANIES` and `TICKETS`. Tenant isolation remains at `company_id` (hard wall); projects subdivide within a tenant. Aligns with ITIL 4 Service Catalogue / Service Offering and ISO 20000-1 clause 8.1/8.6.

> **Four roles are enough — these are *not* extra roles:**
> - **Manager** (sees everything, never works tickets) = a System Admin/overseer who simply doesn't use the action buttons. We don't hard-block them, so no separate role is needed.
> - **L1 / L2 / L3 / L4 tiers** = a `tier` column on `AGENT_PROJECTS` (decision M revised — per project mapping, not on the user). Reassignment between tiers is a manual action (FR-26); automatic escalation on SLA breach is system-driven (FR-35). Both compare tiers **on the ticket's project**.
> - **Project Lead** (assigns teammates' work within a project *and* works tickets) = deferred. For v1, assigning is the System Admin's job (plus agents self-assign). If wanted later, it returns as a **"lead" flag on `AGENT_PROJECTS`**, not a new role.

---

## 3. FUNCTIONAL REQUIREMENTS (discuss first)

Concrete "the system must…" statements, grouped by area. In the meeting, confirm each tag as **MUST / SHOULD / COULD**. These requirements are what the workflow (§4) and database (§5) must then support.

### Authentication & access
- FR-1: A user can log in via **Microsoft SSO** (Entra ID / Azure AD) using APEX Social Sign-In. *(MUST)* ← promoted from P3 FUTURE; SSO-only for demo (company uses M365)
- FR-2: After login, the system knows the user's role and company. *(MUST)*
- FR-3: A user only sees pages and actions allowed for their role. *(MUST)*
- FR-4: A client user only sees data belonging to their own company, scoped to **projects they can access** (decisions N/O/Q): all **Open** projects of their company + **Restricted** projects they're invited to via `USER_PROJECTS`. A Client Admin sees all company data across all projects. *(MUST)*

### Companies & users (admin)
- FR-5: System Admin can create/edit/deactivate companies **and projects** (service engagements per company). Each project carries a **visibility** setting — `OPEN` (default: whole company sees it) or `RESTRICTED` (invitation-only, decision Q) — e.g. for apps still in a testing phase or sensitive systems. *(MUST)*
- FR-6: System Admin can create/edit/deactivate users and assign each a role + company (agent creation additionally requires at least one `AGENT_PROJECTS` mapping, **each carrying a tier** — decision M revised; provider-company users are **auto-granted CLIENT_USER**, decision Q). Client Admin can manage **Restricted-project invitations** (`USER_PROJECTS`) within their company. *(MUST)*

### Tickets — core
- FR-7: A client can raise a ticket (**project**, subject, description, **category**, **severity**). The client selects the **project** (service engagement) the ticket belongs to; if the company has only one project, it is auto-selected. **Severity** (Critical/Major/Minor/Low) is set by the client to describe business impact; **Priority** (P1–P4) is set by the support team to determine work order. Both fields live on the ticket; project, severity, **and category** are required at creation. *(MUST)*
- FR-8: Each ticket gets a unique human-friendly reference (e.g. TKT-00001). *(MUST)*
- FR-9: A user can view a ticket's full detail, including its comments and history. *(MUST)*
- FR-10: A ticket can be assigned/reassigned to a support agent. System Admin can assign **any active agent** (regardless of `AGENT_PROJECTS`); **clients (Client User or Client Admin) can assign from L1 agents only** mapped to the ticket's **project** via `AGENT_PROJECTS` (decisions J/L); Support Agents can self-assign from the open queue (decision A). **Edge cases:** if no L1 agents are mapped to the ticket's project, the assignment LOV is empty and a message directs them to contact support. A Client User can assign tickets visible to them (their accessible projects); a Client Admin can assign any company ticket. *(MUST)*
- FR-11: A support agent can change a ticket's status per the workflow rules. **Close permission:** only the Client (User or Admin) or System Admin can transition Resolved → Closed; a Support Agent cannot close a ticket. *(MUST)*
- FR-12: Any state change is recorded in ticket history (who/what/when). *(MUST)*
- FR-13: Users can add comments to a ticket. *(MUST)*
- FR-14: Agents can mark a comment as internal (not visible to the client). *(SHOULD)*
- FR-26: A support agent/lead can **reassign** a ticket to a higher-tier agent (e.g. L1→L2) and optionally raise priority; the reassignment is written to history. **Tier direction:** the reassignment LOV shows agents at the **same or higher tier** (e.g. an L1 sees L1–L4; an L3 sees L3–L4). Tiers are per project (decision M revised): both sides of the comparison use each agent's tier **on the ticket's project** from `AGENT_PROJECTS`. Downward reassignment is not exposed in the LOV. *(SHOULD)*

### Feedback & closure
- FR-27: After a ticket is **Closed**, the **requester** (`created_by`) can rate the support experience (CSAT, 1–5 stars). **One-time only** — the rating cannot be changed once submitted. The `CSAT` action in `TICKET_HISTORY` records the event for auditability. *(SHOULD)*

### Finding & filtering
- FR-15: Agents/admins can see a list of all tickets they're allowed to see, filterable by status, priority, severity, company, **project**, assignee. The list includes a computed **ticket age** column (`SYSDATE − created_at`) and, when FR-23 is built, the **SLA breach indicator**. *(MUST)*
- FR-16: Users can search tickets by reference or keyword. *(SHOULD)*

### Dashboard (judge-requested)
- FR-17: A dashboard shows ticket counts by status. *(MUST)*
- FR-18: The dashboard shows counts by priority and by client company. *(MUST)*
- FR-19: The dashboard respects the viewer's role (a Client Admin sees only their company; System Admin sees all). *(MUST)*
- FR-20: The dashboard shows simple charts (bar/pie), not just numbers. *(SHOULD)*
- FR-28: The dashboard shows operational analytics — **average resolution time** and **tickets handled per agent** (JET chart + KPI regions over plain SQL). *(SHOULD)*

### Notifications (breadth)
- FR-21: When a ticket is assigned, the agent is notified (email or in-app). *(SHOULD)*
- FR-29: When a ticket is **created**, the requester receives an automatic acknowledgement email (`APEX_MAIL.SEND`). *(SHOULD)*
- FR-22: When a client's ticket changes status, they are notified via email (`APEX_MAIL`). Promoted from COULD per ITIL: communication at every lifecycle touchpoint. *(SHOULD)*
- FR-38: When a **comment is added** to a ticket, the other party is notified via email — if a client comments, the assigned agent is notified; if an agent comments (non-internal), the requester is notified. Completes the communication lifecycle alongside FR-21/22/29. *(SHOULD)*  ← build only after FR-21 and FR-22 are working

### ITIL alignment (added 2026-07-02 — ITIL 4 audit recommendations)
- FR-30: Each ticket has a **ticket type** field: `INCIDENT` (unplanned interruption / break-fix) or `SERVICE_REQUEST` (pre-defined request — e.g. new account, access, information). Default `INCIDENT`. Exposed on the Create Ticket form and the dashboard (separate counts per type). This is the **foundational ITIL distinction** between Incident Management and Service Request Management. *(MUST)*  ← promoted from SHOULD 2026-07-02; near-zero cost, high ITIL credibility
- FR-31: **First-response time tracking.** A `first_response_at` timestamp on TICKETS is stamped when a support agent first comments or moves the ticket from New/Assigned to In Progress — whichever comes first. The ticket list shows a **response SLA breach indicator** (comparing `first_response_at − created_at` against `SLA_TARGETS.response_hours`). *(SHOULD)*
- FR-32: The dashboard includes an **SLA Compliance % KPI card** — `COUNT(tickets resolved before sla_due_date) / COUNT(resolved tickets) × 100`. The single most important ITIL metric. *(SHOULD)*
- FR-33: The assignment LOV shows each agent's **open ticket count** (workload visibility) so assigners can load-balance. *(SHOULD)*
- FR-34: The Create Ticket form shows a **one-line severity guidance** next to each option (e.g. "Critical — Complete service outage affecting all users") to reduce severity inflation. *(SHOULD)*
- FR-36: **Resolution code + summary required on Resolve.** When an agent resolves a ticket, they must select a `resolution_code` (`FIXED`, `WORKAROUND`, `KNOWN_ERROR`, `CANNOT_REPRODUCE`, `DUPLICATE`, `USER_EDUCATION`, `NOT_AN_INCIDENT`) and provide a `resolution_summary` (free text). Records *how* it was resolved, not just *that* it was — feeds trend analysis and future knowledge base. *(SHOULD)*
- FR-37: **Triage gate — priority required before In Progress.** When a support agent moves a ticket from Assigned → In Progress, `priority` must not be null. Enforces ITIL's categorization/prioritization step within the existing workflow (no new state). A page-level validation on Ticket Detail (Page 5). *(SHOULD)*

### SLA & aging
- FR-23: **SLA target per severity, per project** with declarative breach highlighting (computed at query time). The `SLA_TARGETS` table maps each `project_id` + `severity` combination to `response_hours` and `resolution_days`; on ticket creation, `sla_due_date` is stamped (`created_at + resolution_days` from the matching target for the ticket's project). The ticket list shows a colour-coded breach indicator (🟢 On track / 🟡 At risk / 🔴 Breached). Admin-managed (System Admin configures per project). *(SHOULD)*
- FR-35: **Auto-escalation on SLA breach.** A scheduled job (`DBMS_SCHEDULER`, **runs every 5 minutes**) checks open tickets against their `sla_due_date`. Two-stage escalation with per-project configurable thresholds (stored in `SLA_TARGETS.escalation_pct`, default 80%). **Stage 1 — Warning** (75% SLA elapsed): notify assigned agent + System Admin, log `SLA_WARNING`. **Stage 2 — Auto-reassign** (90% SLA elapsed): functional escalation to next-tier agent (tier read from `AGENT_PROJECTS` for the ticket's project — decision M revised) by lowest open-ticket count (FR-33 alignment), notify System Admin + ticket requester (ITIL: tell customer before they chase), log `ESCALATION`. **Hierarchical fallback:** if no higher tier exists (L4 / none mapped in the project), notify System Admin + Client Admin, flag `ESCALATION_BLOCKED`, keep current assignee (ITIL 4 + ISO 20000-1 §8.6.3 require a defined path — no dead ends). System-driven (distinct from manual reassignment in FR-26). *(SHOULD)*

### Stretch (do not commit)
- FR-24: AI auto-suggests category/priority from the description (`APEX_AI`). *(COULD)*
- FR-25: **File / screenshot attachments** on a ticket (and optionally on a comment) as proof/evidence, so an agent can view or download them while working the ticket. Uploaded via a declarative *File Browse* item, stored in a `TICKET_ATTACHMENTS` BLOB table, displayed as a download link (and inline preview for images). **Subject to the same `company_id` tenant scoping as everything else** (see §5.1). *(COULD)*

---

## 4. WORKFLOW — the ticket lifecycle

The requirements above center on one entity: the ticket. It moves through **states**, and only certain roles can trigger certain moves. This is the heart of the app.

### The states
| State | Meaning |
|---|---|
| **New** | Just raised by a client. Not yet assigned. |
| **Assigned** | An agent has been put on it, but work hasn't started. |
| **In Progress** | The agent is actively working on it. |
| **On Hold** | Paused — waiting on the client, a third party, or parts. |
| **Resolved** | Agent believes it's fixed; awaiting client confirmation. |
| **Closed** | Confirmed done. The end. |

### The lifecycle (state diagram)
```mermaid
stateDiagram-v2
    [*] --> New: Client raises ticket
    New --> Assigned: Admin assigns agent
    Assigned --> InProgress: Agent starts work
    InProgress --> OnHold: Agent pauses (waiting)
    OnHold --> InProgress: Agent resumes
    InProgress --> Resolved: Agent marks fixed
    Resolved --> Closed: Client confirms / auto-close
    Resolved --> InProgress: Client reopens (not fixed)
    Closed --> [*]
```

### Who can do each transition
| Transition | From → To | Who triggers it |
|---|---|---|
| Raise ticket | — → New | Client User, Client Admin |
| Assign | New → Assigned | System Admin, Support Agent self-assign *(decision A)*, **or** Client User / Client Admin from agents mapped to their company *(decision J)* |
| Start work | Assigned → In Progress | Support Agent |
| Put on hold | In Progress → On Hold | Support Agent |
| Resume | On Hold → In Progress | Support Agent |
| Resolve | In Progress → Resolved | Support Agent |
| Close | Resolved → Closed | Client (confirm) or System Admin |
| Reopen | Resolved → In Progress | Client User, Client Admin |
| **Reassign (tier transfer)** | In Progress → In Progress *(reassign to higher tier + optionally raise priority)* | Support Agent / System Admin *(FR-26)* |
| **Escalation (auto)** | Any open state *(two-stage: SLA_WARNING at 75%, functional reassign at 90%, hierarchical fallback if no higher tier)* | System (`DBMS_SCHEDULER` job every 5 min, FR-35) |

> **Reassign** (FR-26) is a manual action — a support agent or admin moves a ticket to a higher-tier agent (e.g. L1→L2), optionally raising priority. It writes a `TICKET_HISTORY` row with action `REASSIGN`. **Escalation** (FR-35) is system-driven with two stages: **warning** (75% SLA elapsed — notify agent + admin, log `SLA_WARNING`) and **auto-reassign** (90% — functional escalation to next tier within the ticket's project by lowest workload, log `ESCALATION`). If functional escalation is exhausted (L4 / no higher tier mapped in the project), **hierarchical escalation** kicks in: notify System Admin + Client Admin, flag as `ESCALATION_BLOCKED`, keep current assignee. Thresholds are per-project via `SLA_TARGETS.escalation_pct`. Agent selection uses lowest open-ticket count (FR-33 alignment). Scheduler runs every 5 minutes (ISO 20000-1 §8.6.3 "timely" requirement — critical SLAs can be as short as 1 hour).

> **Decision (B) — ✅ confirmed:** Include **On Hold** and **Reopen** in v1. Both are already in the schema and workflow diagram. On Hold is essential for SLA accuracy; Reopen is required by ITIL when a fix doesn't work. The full lifecycle is `New → Assigned → In Progress → On Hold → Resolved → Closed` with a Reopen path from Resolved → In Progress.

> **Key rule:** *every* state change is written to the ticket history (who, what, when). That history powers both the activity log (FR-12) and the dashboard.

---

## 5. DATABASE — the data model

Now that we know the requirements and workflow, we can model the data to support them. APEX is database-first: get these tables right and the screens almost build themselves. Get them wrong and we rebuild everything. **This is the most important technical decision in the meeting.**

### The tables (entities)
| Table | What it holds | Key columns |
|---|---|---|
| **COMPANIES** | Every company — the service provider *and* each customer (all are tenants) | `company_id` (PK), `company_name`, `status` |
| **PROJECTS** | Service engagements per client company (decision O) — e.g. "IT Support", "HR Systems Support" | `project_id` (PK), `company_id` (FK), `project_name`, `project_key` (VARCHAR2(10), unique per company — e.g. "ITSUP"), `description`, **`visibility`** (`OPEN`/`RESTRICTED`, default `OPEN` — decision Q: Open = whole company sees it; Restricted = invitation-only via `USER_PROJECTS`), `is_active` (Y/N), `created_at` |
| **DEPARTMENTS** | Departments within a company — **metadata only** (routing/reporting, not visibility scoping; decision N revised) | `department_id` (PK), `company_id` (FK), `department_name` |
| **APP_USERS** | Every person who logs in | `user_id` (PK), `company_id` (FK), `department_id` (FK, nullable — organizational metadata), `full_name`, `email`, `default_role` (nullable — landing role at login; NULL = highest-privilege from `USER_ROLES`), `status` |
| **USER_ROLES** | Roles per user — one-to-many (decision P: multi-role support) | `user_id` (FK), `role` (CLIENT_USER/CLIENT_ADMIN/SUPPORT_AGENT/SYSTEM_ADMIN); together the PK. Enables role-switching in the nav bar without re-login. **Every provider-company (Northwind) user is auto-granted CLIENT_USER at creation** (decision Q) — agents therefore hold SUPPORT_AGENT + CLIENT_USER. |
| **TICKETS** | The support requests | `ticket_id` (PK), `ticket_ref` (e.g. TKT-00001), `company_id` (FK — *the tenant key, denormalized for isolation*), **`project_id`** (FK — which service engagement this ticket belongs to, decision O), `department_id` (FK, nullable — stamped from creator's department, metadata only), **`ticket_type`** (`INCIDENT` / `SERVICE_REQUEST` — default `INCIDENT`, FR-30), `subject`, `description`, `category_id` (FK, **required** — prevents uncategorized tickets), **`severity`** (Critical/Major/Minor/Low — client-set at creation), **`priority`** (P1–P4 — support-set, nullable until triaged; **required before In Progress** per FR-37), `status`, `created_by` (FK user), `assigned_to` (FK user, nullable), `created_at`, `updated_at`, **`first_response_at`** (TIMESTAMP — stamped on first agent response, FR-31), `resolved_at`, `closed_at`, **`resolution_code`** (VARCHAR2 — required on Resolve, FR-36: `FIXED`/`WORKAROUND`/`KNOWN_ERROR`/`CANNOT_REPRODUCE`/`DUPLICATE`/`USER_EDUCATION`/`NOT_AN_INCIDENT`), **`resolution_summary`** (VARCHAR2(4000) — required on Resolve, FR-36), **`reopen_count`** (NUMBER DEFAULT 0 — incremented on Reopen), `csat_score` (NUMBER, nullable — set at closure, one-time only, FR-27), **`sla_due_date`** (DATE — stamped at creation from `SLA_TARGETS` based on project + severity, FR-23) |
| **TICKET_COMMENTS** | The conversation on a ticket | `comment_id` (PK), `ticket_id` (FK), `user_id` (FK), `comment_text`, `is_internal` (Y/N — internal note vs client-visible), `created_at` |
| **TICKET_HISTORY** | Audit trail of every change | `history_id` (PK), `ticket_id` (FK), `user_id` (FK, **NOT NULL** — system actions use a designated system user), `action`, `old_value`, `new_value`, `created_at` |
| **CATEGORIES** | Ticket categories — global (admin-managed), per-company, or per-project (hybrid model) | `category_id` (PK), `category_name`, `company_id` (FK, **nullable** — `NULL` = global/standard category visible to all), `project_id` (FK, **nullable** — `NULL` = available to all projects under the company; set = project-specific category), `description` (VARCHAR2(500) — guidance text shown in the LOV) |
| **AGENT_PROJECTS** | Which projects each support agent covers, and at what tier — *the agent-scoping key (decision I revised)* | `user_id` (FK), `project_id` (FK); together the PK. **`tier`** (`L1`/`L2`/`L3`/`L4` — the agent's support line **on this project**, decision M revised: per-project proficiency, so one agent can be L3 on one engagement and L1 on another). *(Optional later: `is_lead` Y/N for the deferred Project Lead.)* |
| **USER_PROJECTS** | Invitations into **Restricted** projects — *the client-side visibility key (decisions N/Q)* | `user_id` (FK), `project_id` (FK); together the PK. **Invitation list (decision Q):** a client user sees all **Open** projects of their company automatically, plus any **Restricted** projects they have a row for. Rows **grant** (never restrict) access. Managed by the Client Admin. |
| **SLA_TARGETS** | SLA resolution targets per severity **per project** — admin-managed (FR-23) | `sla_target_id` (PK), `project_id` (FK — each project gets its own targets), `severity` (matches `TICKETS.severity`), `response_hours` (NUMBER), `resolution_days` (NUMBER), **`escalation_pct`** (NUMBER, default 80 — % of SLA elapsed that triggers auto-escalation, per-project/severity, FR-35); unique on `(project_id, severity)` |
| **TICKET_ATTACHMENTS** *(COULD — FR-25)* | Files/screenshots attached to a ticket as evidence | `attachment_id` (PK), `ticket_id` (FK), `company_id` (FK — *tenant key, denormalized on purpose; see §5.1*), `comment_id` (FK, nullable — null = ticket-level), `file_name`, `mime_type`, `file_blob` (BLOB), `uploaded_by`, `uploaded_at` |

> **Severity vs Priority (ITIL-aligned, Decision K):** Severity (Critical/Major/Minor/Low) maps to ITIL's **Impact** — the client's assessment of business disruption, set at ticket creation, required. Priority (P1/P2/P3/P4) maps to ITIL's **Priority** — the support team's work-order decision, set during triage, nullable until then. Both can start as simple fixed lists (check constraints). SLA targets key off severity, not priority. *(Post-hackathon: add an **Urgency** dimension to complete the ITIL Impact × Urgency = Priority matrix — see FUTURE P3.)*

> Statuses can start as a simple fixed list (the states in §4). If we have time, promote to lookup tables — cleaner, but not required for the demo.

> **Convention — timestamps & history vocabulary (enables aging / SLA / FRT metrics with no schema change):**
> The derived dashboard metrics — ticket **aging**, **"stale" / time-since-last-activity**, **first-response-time (FRT)**, **backlog trend**, **reopen rate** — are all pure queries over data we already store, *provided* three small rules hold. Decide these now, before the tables are built:
> 1. **One timestamp type everywhere.** `created_at`, `updated_at`, `resolved_at`, `closed_at` on every table use `TIMESTAMP WITH LOCAL TIME ZONE` (matching `TICKET_ATTACHMENTS`, §5.1). Don't mix `DATE` and `TIMESTAMP` — it complicates the age arithmetic and the display formatting.
> 2. **`TICKETS.updated_at` is bumped on *every* change** — every comment insert and every `TICKET_HISTORY` write also touches `updated_at`. "Last activity" = `GREATEST(updated_at, MAX(comment.created_at), MAX(history.created_at))`; keep the `GREATEST` form as a backstop so a ticket that's being actively commented on never falsely reads as *stale*.
> 3. **`TICKET_HISTORY.action` is a fixed enum, not free text** — `STATUS_CHANGE`, `ASSIGN`, `REASSIGN`, `ESCALATION`, `PRIORITY_CHANGE`, `SEVERITY_CHANGE`, `CATEGORY_CHANGE`, `COMMENT`, `CSAT` (extend as needed, but pin the list). A *Reopen* is a `STATUS_CHANGE` transitioning **from** `'Resolved'` back to an active status — detect it via `old_value = 'Resolved'` (matches the Reopen button on Page 5 of the build guide, which sets status to *In Progress*). A fixed vocabulary makes every history-driven metric a single, reliable predicate instead of guessing at spellings.
>
> Metric tiers (build only after the MUST spine demos with real isolation): **stale flag** + **overdue highlight** (age × priority — the declarative cousin of the SLA-highlight COULD) are the recommended picks; **FRT**, **backlog trend**, **reopen rate** are bonus.

### How the tables relate
```mermaid
erDiagram
    COMPANIES ||--o{ PROJECTS : "has"
    COMPANIES ||--o{ DEPARTMENTS : "has"
    COMPANIES ||--o{ APP_USERS : "employs"
    DEPARTMENTS ||--o{ APP_USERS : "contains"
    PROJECTS ||--o{ TICKETS : "contains"
    COMPANIES ||--o{ TICKETS : "owns (tenant key)"
    APP_USERS ||--o{ TICKETS : "creates"
    APP_USERS ||--o{ TICKETS : "is assigned"
    TICKETS ||--o{ TICKET_COMMENTS : "has"
    TICKETS ||--o{ TICKET_HISTORY : "has"
    CATEGORIES ||--o{ TICKETS : "classifies"
    APP_USERS ||--o{ TICKET_COMMENTS : "writes"
    APP_USERS ||--o{ USER_ROLES : "has roles"
    APP_USERS ||--o{ AGENT_PROJECTS : "covers"
    PROJECTS ||--o{ AGENT_PROJECTS : "is covered by"
    APP_USERS ||--o{ USER_PROJECTS : "can access"
    PROJECTS ||--o{ USER_PROJECTS : "is accessible to"
    PROJECTS ||--o{ SLA_TARGETS : "has targets"
    TICKETS ||--o{ TICKET_ATTACHMENTS : "has"
    TICKET_COMMENTS ||--o{ TICKET_ATTACHMENTS : "may carry"
    COMPANIES ||--o{ TICKET_ATTACHMENTS : "owns"
```

> **Note:** `TICKET_ATTACHMENTS` is a COULD feature (FR-25). It carries its **own** `company_id` (copied from the parent ticket at upload) so every BLOB-download query can filter on the tenant key directly — without a join — closing the IDOR gap on file downloads. Build-ready DDL and the full isolation plan are in §5.1.

> **Note:** `AGENT_PROJECTS` is a many-to-many bridge — one agent covers several projects, one project is covered by several agents. It's what scopes an agent's queue to only their assigned projects (decision I). It does **not** weaken tenant isolation: customers are still locked to their own `company_id`; this table only *narrows* what an agent sees on the support side.

> **Note:** `USER_PROJECTS` is a many-to-many bridge for client-side visibility — an **invitation list into Restricted projects** (decision Q). A client user sees all their company's **Open** projects automatically; a `USER_PROJECTS` row **grants** access to a **Restricted** project (a row pointing at an Open project is harmless/redundant). Managed by the Client Admin. This follows the industry pattern (JSM Organization-to-Project linking, ManageEngine per-requester visibility toggle) while keeping "hide a pilot/sensitive project" a one-flag operation on the project itself.

### The single most important technical rule: tenant isolation
Every ticket carries a `company_id`. **A client must only ever see rows where `company_id` = their own company** (this is FR-4). If a Client User from Company A can see Company B's tickets, the "production-level" claim collapses.

How we enforce it (from simplest to most robust — pick based on comfort):
1. **Application item + WHERE clause** *(recommended for the hackathon):* at login, store the user's `company_id` and `role` in an APEX application item. Every client-facing report/form filters `WHERE company_id = :APP_COMPANY_ID`. Simple, visible, easy to test.
2. **Authorization schemes per role:** APEX's built-in feature controlling which pages/buttons each role can access. We use this *on top of* the WHERE-clause filtering.
3. **VPD (Virtual Private Database):** database-enforced row security. Most robust, but advanced — a stretch goal, not a starting point.

> **Decision (C) — ✅ confirmed:** approach **1 + 2** for v1 (application item + WHERE clause + authorization schemes). VPD/RLS is FUTURE P1 for defence-in-depth. (Note for the demo: explicitly *show* a client logging in and seeing only their tickets — that proves the requirement live.)

### 5.1 File / screenshot attachments (FR-25 — COULD, build-ready)

A client raising a ticket — or anyone commenting — can attach a file or screenshot as proof/evidence; a support agent views or downloads it while working the ticket. This is **almost entirely declarative** in APEX (verified against the offline 26.1 reference) and is a **half-day to one-day** build, so it stays a **COULD** — only built if MUST + SHOULD finish early — but is documented here ready to go.

**How it works (declarative path, minimal PL/SQL):**
- **Upload:** a built-in **File Browse** page item. Uploads first land in APEX's session-scoped temp table (`APEX_APPLICATION_TEMP_FILES`, auto-purged at end of session) — so we point the item at a **BLOB column** instead, and APEX persists the file, filename, and mime type into `TICKET_ATTACHMENTS` with **no code** (an Interactive Grid / Form on the table).
- **Download:** a declarative **"Download BLOB" column** in a report/grid (binds filename + mime type; opens inline or forces download). No code.
- **Image preview (optional):** one `CASE` expression emitting an `<img>` via `APEX_UTIL.GET_BLOB_FILE_SRC` for image mime types, falling back to a download link otherwise. (That column must have *Escape special characters = No*, which makes filename escaping mandatory — see below.)

**The DDL** (`company_id` denormalized onto the row — load-bearing for isolation, see below):
```sql
CREATE TABLE TICKET_ATTACHMENTS (
  ATTACHMENT_ID  NUMBER GENERATED BY DEFAULT ON NULL AS IDENTITY PRIMARY KEY,
  TICKET_ID      NUMBER NOT NULL REFERENCES TICKETS(TICKET_ID),
  COMPANY_ID     NUMBER NOT NULL REFERENCES COMPANIES(COMPANY_ID),  -- tenant key, copied from the ticket at upload
  COMMENT_ID     NUMBER REFERENCES TICKET_COMMENTS(COMMENT_ID),     -- null = ticket-level attachment
  FILE_NAME      VARCHAR2(255) NOT NULL,
  MIME_TYPE      VARCHAR2(255),
  FILE_BLOB      BLOB,
  UPLOADED_BY    VARCHAR2(255) DEFAULT SYS_CONTEXT('APEX$SESSION','APP_USER'),
  UPLOADED_AT    TIMESTAMP WITH LOCAL TIME ZONE DEFAULT SYSTIMESTAMP
);
CREATE INDEX TICKET_ATTACH_TICKET_IX  ON TICKET_ATTACHMENTS(TICKET_ID);
CREATE INDEX TICKET_ATTACH_COMPANY_IX ON TICKET_ATTACHMENTS(COMPANY_ID);
```

**The isolation plan — the one rule that cannot break (§5) applied to BLOBs.** A download URL carries the row's PK, and a malicious client can tamper with it to fetch another tenant's file (IDOR). *Hiding the link is not enough — the BLOB-fetch query itself must be tenant-scoped.* Guards, layered:
1. **Filter every attachment region/column on `company_id`** — `WHERE company_id = :APP_COMPANY_ID` (or join to `TICKETS` on its `company_id`). The declarative Download BLOB column derives its fetch from the region's SQL, so this predicate scopes the *actual download*, not just the visible link. **This is the single most important guard.**
2. **Session State Protection on** — so the PK in the URL carries a checksum and can't be freely edited; set the page items holding ticket/attachment IDs to *Restricted — may not be set from browser*.
3. **Authorization scheme per role** layered on top (`IS_CLIENT_USER` / `IS_AGENT` / etc.), consistent with §6.
4. If we use `GET_BLOB_FILE_SRC` for previews, its underlying `FILE` item's query **must also** carry the `company_id` predicate — don't rely on the report filter alone.
5. *(Stretch)* a **VPD/RLS policy** on `TICKET_ATTACHMENTS` keyed to `APP_COMPANY_ID` enforces isolation at the DB regardless of query path — the most robust option.

**Validation & XSS:** re-validate file size and mime type **server-side** in a page Validation (the client-side `accept` filter is convenience only); allowlist types (e.g. `image/*`, `application/pdf`). Filenames are user-controlled and rendered in reports, so escape with `APEX_ESCAPE.HTML(...)` (and `HTML_ATTRIBUTE(...)` inside attributes) — keep *Escape special characters = Yes* on every column except the deliberate `<img>` preview, where you escape each interpolated value yourself.

> **Run the `tenant-isolation-auditor` agent** over the attachment region SQL and every download path before demoing — attachments add a fresh IDOR surface, and a leaked file is as fatal to the "production-level" claim as a leaked ticket.

---

## 6. APEX PAGE ARCHITECTURE — what we'll actually build

Now that the requirements, workflow, and data model are set, we can name the **screens**. This is the bridge from "what the system does" to "who builds which page." (Advisory map, grounded in APEX 26.1 — confirm in the meeting.)

### The one design rule that keeps this small
**One page serves many roles — we do *not* build one page per role.** APEX gives us two declarative levers to make a single page behave differently per role:
- **Authorization schemes** — show/hide whole pages, buttons, and columns by role.
- **Server-side filtering** — `WHERE company_id = :APP_COMPANY_ID` plus role logic in the region's SQL.

So we build the Ticket List *once*: a Client User sees only their tickets, a System Admin sees all — same page. This roughly halves the page count **and** concentrates tenant-isolation logic (§5) in a few well-tested queries instead of scattering it across role-specific clones.

> Two cross-cutting mechanisms make this work (they are *Shared Components*, not pages): **application items** `APP_COMPANY_ID` / `APP_USER_ID` / `APP_ROLE` set once at login, and one **authorization scheme per role** (`IS_CLIENT_USER`, `IS_CLIENT_ADMIN`, `IS_AGENT`, `IS_SYSTEM_ADMIN`).

### The pages (15 total → 12 MUST, 3 SHOULD)

| # | Page | APEX page type | What it's for / who uses it | Shared vs role-specific | Priority |
|---|---|---|---|---|---|
| **Auth & Shell** ||||||
| 1 | **Login** | Login Page (built-in) | **Microsoft SSO** (Social Sign-In / Entra ID); post-auth process stamps company_id/role into app items. *All roles.* | Shared | **MUST** |
| 2 | **Home / Landing** | Blank (redirect) or Cards | Routes user after login; can redirect straight to Dashboard. *All roles.* | Shared | **MUST** |
| **Dashboard** ||||||
| 3 | **Dashboard** | Cards + Chart regions | Ticket counts by status / priority / company + bar/pie charts; role-filtered. *All roles.* | Shared (role-filtered) | **MUST** |
| **Tickets (the core)** ||||||
| 4 | **Ticket List / Queue** | Faceted Search (or IR) | Main browse / filter / search screen; rows scoped by role + company. *All roles.* | Shared (role-filtered) | **MUST** |
| 5 | **Ticket Detail** | Form + Comments & History regions | View/edit one ticket; the hub of the app. Buttons gated by role. *All roles.* | Shared (buttons gated) | **MUST** |
| 6 | **Create / Raise Ticket** | Form (Modal Dialog) | Client raises a ticket (subject, description, category, **severity**). *Client User, Client Admin.* | Role-specific | **MUST** |
| 7 | **Assign / Reassign** | Form (Modal Dialog) | Put an agent on a ticket; writes history + (SHOULD) assignment email. *System Admin assigns/reassigns anyone; agents self-assign from the queue (decision A); clients assign from agents mapped to their company (decision J).* | Shared (agent list scoped by role) | **MUST** |
| 8 | **Add Comment** | Form (Modal Dialog) | Add a comment; internal-note flag for agents. *All roles (internal toggle gated).* | Shared (toggle gated) | **MUST** |
| **Admin** ||||||
| 9 | **Companies (manage)** | Interactive Grid | Create/edit/deactivate client companies (CRUD). *System Admin only.* | Role-specific | **MUST** |
| 10 | **Users (manage)** | Interactive Grid | Create/edit/deactivate users; assign role + company. *System Admin only.* | Role-specific | **MUST** |
| 11 | **Projects (manage)** | Interactive Grid | Create/edit/deactivate projects (service engagements) per company; map agents to projects (`AGENT_PROJECTS`). *System Admin only.* | Role-specific | **MUST** |
| 12 | **Project Invitations** | Interactive Grid | Invite client users into **Restricted** projects (`USER_PROJECTS`, decision Q); Open projects need no setup. *Client Admin only.* | Role-specific | **MUST** |
| **Supporting** ||||||
| 13 | **Categories (manage)** | Interactive Grid | Maintain ticket categories / priorities. *System Admin.* | Role-specific | **SHOULD** |
| 14 | **My Profile** | Form | View/change own details / password. *All roles.* | Shared | **SHOULD** |
| 15 | **SLA Targets (manage)** | Interactive Grid | Configure SLA response/resolution targets per **project** per severity (FR-23). *System Admin only.* | Role-specific | **SHOULD** |

**A working, judge-satisfying demo needs only the 12 MUST pages (1–12).** If time is tight, the irreducible spine is pages **1, 3, 4, 5, 6, 7, 9, 10, 11** — that alone hits all four judge non-negotiables (role-based access, multiple companies/projects, assignment, dashboard).

### Things that are deliberately NOT pages
- **Status transitions** (New→Assigned→In Progress→On Hold→Resolved→Closed→Reopen) = **buttons + declarative processes on Ticket Detail**, each writing a `TICKET_HISTORY` row. Zero extra pages.
- **Comments & History** = **regions embedded in Ticket Detail** (page 5), not standalone pages.
- **Navigation menu, theme/branding, breadcrumbs** = *Shared Components*.
- **Assignment notification email** (FR-21, SHOULD) = a process on the Assign action via `APEX_MAIL`, not a page.

> This 13-page map slots straight into the workstreams below: pages 1–2 + the app-item/auth plumbing → *Data model & security*; pages 4–8 → *Ticket screens & workflow*; page 3 → *Dashboard & reporting*; pages 9–13 + theme → split between *Admin* and *UI/UX*.

### 6.2 Build instructions — UX patterns that existing FRs already require
*(These are NOT new features — they are how the committed FRs should be implemented. Gap analysis confirmed each one maps to an existing FR.)*

| Page | Pattern | Why | Maps to |
|---|---|---|---|
| **5 (Detail)** | **Combined Resolve dialog** — the Resolve button opens a modal with `resolution_code` LOV + `resolution_summary` textarea + optional comment, all saved in one transaction | FR-36 requires resolution code + summary; combining them with the status transition is the natural implementation | FR-36 + FR-11 |
| **5 (Detail)** | **Combined Close dialog** — the Close button (client/admin only) shows a confirmation prompt with optional comment + CSAT star rating inline, saved in one transaction | FR-27 (CSAT) + FR-11 (close) are separate FRs but should be one user action — clients should confirm + rate in one step | FR-27 + FR-11 |
| **5 (Detail)** | **Enable Lost Update Detection** — set the form's "Lost Update Detection" to "Checksum" to prevent two agents overwriting each other | Standard APEX safety feature; prevents silent data loss on concurrent edits | FR-12 (auditability) |
| **4 (Queue)** | **"Last Activity" column** — add `ROUND((SYSDATE - CAST(t.updated_at AS DATE)) * 24, 1) || 'h ago'` as a computed column | Agents need to spot stale tickets; the data already exists via the `updated_at` convention | FR-15 |
| **4 (Queue)** | **Ticket type as a facet/filter** — add `ticket_type` to Faceted Search facets (or IR filter) so agents can separate Incidents from Service Requests | FR-30 adds the type; FR-15 says "filterable by status, priority, severity, company, assignee" — ticket type is the natural extension | FR-30 + FR-15 |
| **4 (Queue)** | **Row-level self-assign button** — an "Assign to me" icon link on unassigned ticket rows, visible only to agents who cover that company, calling the same process as Page 7 | Decision A says agents self-assign "from the open queue" — a row action is faster than opening the detail page | FR-10 + Decision A |
| **4 (Queue)** | **"Awaiting your action" badge** — for client roles, highlight Resolved tickets with a visual badge ("Action needed") so clients know they need to confirm/close | The workflow requires client confirmation before closure; without a visual cue, Resolved tickets sit idle | FR-11 |
| **6 (Create)** | **Hide Priority from clients** — condition the Priority field: `V('APP_ROLE') IN ('SUPPORT_AGENT','SYSTEM_ADMIN')`. Clients set Severity only; agents set Priority during triage | FR-7 is explicit: "Priority is set by the support team." Showing it to clients contradicts the design and confuses them | FR-7 + FR-37 |
| **3 (Dashboard)** | **Chart drill-down** — set each chart segment's Link Target to Page 4 with the appropriate filter pre-applied (e.g. `&P4_STATUS.=New`) | A dashboard that can't be clicked through to the data is incomplete. APEX chart link targets are declarative | FR-17/18/20 |
| **3 (Dashboard)** | **Project breakdown for Client Admin** — a conditional chart region (shown when `V('APP_ROLE') = 'CLIENT_ADMIN'`) grouping tickets by project | The dashboard "respects the viewer's role" (FR-19); for a Client Admin, the company breakdown is useless — they see only one company; project breakdown shows each service engagement | FR-19 + FR-20 |

### 6.1 Clickable prototype (built — review before building in APEX)
A **working, role-aware front-end prototype** of all 12 pages is live. It runs in the browser
only (HTML/CSS/JS) — **no APEX, no real database, no real authentication** — so the team can
agree on layout and flow, and rehearse the demo, *before* a line of APEX is built.

- **Live demo:** <https://apex-demo.dhawilabs.com>  (source in `docs/mockups/`)
- **Sign in:** password is `demo` for every account. Try **anna@acme.example** (Client User)
  then **sara@northwind.example** (System Admin) to see tenant isolation; **mike@northwind.example**
  is a Support Agent.
- **What it proves (the judges' four non-negotiables, live):** role-based access (nav/buttons
  change per role), multi-company isolation (a client sees only their company; admin sees all,
  and a cross-company URL is blocked), ticket assignment, and the dashboard.
- **What you can actually do:** raise → assign → start work → comment (with internal-note
  toggle) → resolve → close, with **history** and **dashboard counts** updating. Changes persist
  in the browser; **Reset demo** (top-right) restores the seed data.
- ⚠️ **This is a mockup, not the product.** The real auth, role checks, and tenant isolation are
  implemented in APEX per §5 (application items + `WHERE company_id` + authorization schemes).
  The prototype's job is to lock the UX and de-risk the build.

---

## 7. GOALS & TASK DISTRIBUTION (discuss last)

Only after the team agrees on §3–§5 do we split work. A suggested division that fits a mixed team:

| Workstream | Good fit for | Rough scope |
|---|---|---|
| **Data model & security** | Strongest dev(s) | Build the tables, relationships, login, roles, tenant isolation. *Everything depends on this — do it first.* |
| **Ticket screens & workflow** | Dev(s) | Create/view/edit ticket, assignment, status changes, comments, history |
| **Dashboard & reporting** | Dev or confident non-dev | Charts and the filtered ticket lists (APEX makes these largely declarative) |
| **UI/UX, theme & test data** | Non-dev(s) | Branding, navigation, realistic sample companies/users/tickets, walking through flows to find bugs |
| **Demo & QA** | Lead + rotating | Build the demo script, test tenant isolation hard, keep scope honest |

> **Sequencing matters more than splitting.** The data model is the dependency for everything else. Recommendation: **everyone helps lock the data model in week 1**, then fan out.

### Team ownership — 5 developers (confirmed)

Balanced by **effort, not page count** (Ticket Detail alone is ~5× a Categories grid), and dependency-aware: the Foundation must land before anyone can build a tenant-filtered page. Step-by-step build instructions per page live in [`page-build-guide.md`](page-build-guide.md).

| Owner | Workstream | Pages | Also owns |
|---|---|---|---|
| **P1 — Foundation Lead** | Foundation & Security → Demo/QA | **1** Login | 11-table schema (incl. `PROJECTS`, `AGENT_PROJECTS`, `USER_PROJECTS`) + `TKT-` ref sequence, 3 app items (`APP_COMPANY_ID/USER_ID/ROLE`), 4 authorization schemes, the login post-auth process, **tenant-isolation audit across every page**, demo script |
| **P2** | Ticket Detail hub (hardest page) | **5** Ticket Detail · **8** Add Comment | Lifecycle buttons/processes (each writes `TICKET_HISTORY`), Escalate action, CSAT capture, internal-note flag, the self-assign button on detail |
| **P3** | Intake, queue & assignment | **4** Ticket List/Queue · **6** Create Ticket · **7** Assign/Reassign | Self-assign process, auto-acknowledgement email + assignment email (`APEX_MAIL`), faceted filtering/search |
| **P4** | Dashboard & data | **2** Home/Landing · **3** Dashboard | Charts + analytics (avg resolution time, per-agent counts), realistic **test data** (feeds everyone's testing) |
| **P5** | Admin & UI | **9** Companies · **10** Users · **11** Projects · **12** Project Invitations · **13** Categories · **14** Profile | Theme/branding, navigation menu, breadcrumbs (Shared Components) |

**Contract between owners:** P1's app items + authorization schemes are frozen once published — everyone else only *consumes* `:APP_COMPANY_ID` and the `IS_*` schemes, never redefines them. This keeps all tenant-isolation logic in one owner's hands (§5's core rule). P2 (Page 5) and P3 (Page 4) share the `TICKETS` table — agree the column list early. P5 owns the new project management pages (11, 12).

**Week 1 is shared:** all five pair with P1 to lock the data model (also how the team learns APEX together); P1 is the critical path. P4 starts test data the moment tables exist. Prove **one end-to-end slice** — Create (P3) → Detail (P2) → login/isolation (P1) — before fanning out in weeks 2–3.

### Timeline to 16 July hackathon demo (2 weeks from 2026-07-02)
- **Week 1 (2–9 Jul) — Foundation + Core:** data model, login, roles, tenant isolation, ticket CRUD, assignment, full workflow, comments, history. Goal: all MUSTs done + one end-to-end slice demoed.
- **Week 2 (9–16 Jul) — Breadth, ITIL polish & demo:** SHOULD items (ITIL FRs 30–34, SLA, CSAT, notifications, categories), UI theme, hard testing, rehearse the demo. Goal: it *looks and feels* production-level, ITIL-aligned, and the demo never breaks.
- **Post-hackathon — Production hardening:** FUTURE items (P1–P4), following ITIL roadmap. The system is real — the hackathon is the launch event, not the finish line.

---

## 8. Decisions we need to make this meeting
- **A.** ✅ **Decided:** agents self-assign from the open queue **and** the System Admin assigns/reassigns.
- **B.** ✅ **Decided (2026-07-02): include On Hold and Reopen in v1.** Both states are already in the schema CHECK constraint and the workflow diagram. On Hold is essential for SLA accuracy (clock should pause when waiting on the client — FUTURE P1); Reopen is required by ITIL when a fix doesn't work. Without these, judges asking "what if you're waiting on the client?" or "what if the fix didn't work?" have no answer.
- **C.** ✅ **Decided (2026-07-02): confirmed approach 1 + 2** (application item + WHERE clause + authorization schemes). The entire `sql/` foundation is already built on this approach. VPD/RLS remains FUTURE P1 as defence-in-depth.
- **D.** Confirm the MUST/SHOULD/COULD scope — anyone want to move an item?
- **E.** Confirm the workstream split and who owns what.
- **F.** Confirm the 3-week milestone shape.
- **G.** ✅ **Decided (revised 2026-07-02): "Reassign" (manual) vs "Escalation" (automatic) — full design confirmed.** Manual tier transfer (FR-26) = agent/admin reassigns to a higher-tier agent + optionally raises priority, logged as `REASSIGN`. Automatic escalation (FR-35) = system-driven, two-stage: warning at 75% SLA → auto-reassign at 90% SLA (functional escalation to next tier within the ticket's project by lowest workload). Hierarchical fallback when functional is exhausted (notify management, flag `ESCALATION_BLOCKED`). Per-project threshold via `SLA_TARGETS.escalation_pct` (default 80%). Scheduler runs every 5 minutes. Grounded in ITIL 4 (functional + hierarchical escalation) and ISO 20000-1 §8.6.3 (documented, timely escalation path).
- **H.** Confirm the SHOULD items (CSAT, dashboard analytics, auto-ack email, reassign, **SLA per severity per project**, auto-escalation) — all verified feasible in APEX 26.1. *(recommend: yes)*
- **I.** ✅ **Decided (revised 2026-07-03): agents are scoped to their projects via `AGENT_PROJECTS`, with explicit L1–L4 tiers (decision M).** A Support Agent sees only tickets for the **projects** they're assigned to (`AGENT_PROJECTS` join + `WHERE project_id IN (...)`). Each `AGENT_PROJECTS` mapping carries a `tier` column (L1/L2/L3/L4 — per project, decision M revised). Four roles stay; **Manager** = an overseer who doesn't take tickets (no separate role), **Project Lead** = deferred (`is_lead` flag later). See §2 and decision M.
- **J.** ✅ **Decided (refined with L, revised 2026-07-03): clients can assign L1 agents directly.** Both Client User and Client Admin can assign a support agent to their ticket — the agent LOV is scoped to `AGENT_PROJECTS` for the ticket's `project_id` **and filtered to the mapping's `tier = 'L1'`** (decision L; tier is per project, decision M revised). Higher tiers are reached via reassignment by support staff. System Admin can still assign/reassign anyone.
- **K.** ✅ **Decided: severity and priority are separate fields.** Severity (Critical/Major/Minor/Low) is set by the client at ticket creation to describe business impact. Priority (P1–P4) is set by the support team during triage to determine work order. SLA targets key off severity. See updated FR-7.
- **L.** ✅ **Decided (2026-07-02): clients assign L1 only.** Client assignment LOV filtered to `tier = 'L1'` (the agent's tier on the ticket's project — decision M revised). See §2 and updated FR-10.
- **M.** ✅ **Decided (2026-07-02, revised 2026-07-04): agents have explicit L1–L4 tiers, per project.** `AGENT_PROJECTS.tier` column — one tier per agent-project mapping (per-project proficiency: the same agent can be L3 on one engagement, L1 on another). L1=first-line, L2=specialist, L3=senior, L4=expert/external. All tier checks (client L1 LOV, FR-26 reassign direction, FR-35 escalation) evaluate against the ticket's project. *(History: 2026-07-02 reversed "no level field" and put tier on `APP_USERS`; 2026-07-04 moved it to `AGENT_PROJECTS`.)* See §2.
- **N.** ✅ **Revised (2026-07-03): client visibility is project-scoped.** Client User sees tickets from projects they can access; Client Admin sees all company tickets across all projects. `DEPARTMENTS` table and `department_id` columns remain as organizational metadata (routing/reporting) — **not used for visibility filtering**. *Access semantics revised by decision Q (Open/Restricted projects; `USER_PROJECTS` = invitation list).* See §2 and FR-4.
- **O.** ✅ **Decided (2026-07-03): service engagements are modeled as projects.** New `PROJECTS` table between `COMPANIES` and `TICKETS`. `AGENT_COMPANIES` renamed to `AGENT_PROJECTS`. `SLA_TARGETS` rekeyed to `(project_id, severity)`. `USER_PROJECTS` added for client-side project access control. See §2 and §5.
- **P.** ✅ **Decided (2026-07-03): multi-role accounts with role-switching.** Roles live in `USER_ROLES` (one-to-many); `APP_USERS.default_role` is the landing role at login (NULL = highest work role held: `SYSTEM_ADMIN > SUPPORT_AGENT > CLIENT_ADMIN > CLIENT_USER`). Multi-role users switch roles via the nav bar without re-login. See §2.
- **Q.** ✅ **Decided (2026-07-03): internal use = tenant zero + Open/Restricted project visibility.** The provider company is an ordinary tenant; every provider-company user is **auto-granted CLIENT_USER** at creation. New `PROJECTS.visibility` flag: **Open** (default — whole company sees it) vs **Restricted** (invitation-only — for apps in testing or sensitive systems like HR/payroll; flip to Open at go-live). `USER_PROJECTS` is re-semanticized as an **invitation list** (rows grant access to Restricted projects), replacing the old "empty = all, rows restrict" model. Agents are ordinary requesters on the client side (no agent-specific visibility rule). Department-based visibility parked at FUTURE P3. See §2, FR-4/5/6, §5, and `docs/superpowers/specs/2026-07-03-internal-use-project-visibility-design.md`.
- **R.** ✅ **Decided (2026-07-03): Raise-Ticket project selection UX (validated against JSM/Zendesk patterns).** (1) **Single accessible project → no question**: auto-select and show read-only ("no default" applies only when there are 2+ choices). (2) **Multiple projects → required pick, no default**, presented plain-language with the project's description as live feedback under the picker. (3) **Classify-first form order**: project + ticket type + category first, then subject/description/severity ("1 · Project & type" / "2 · Issue details" sections). (4) Ticket lists stay **flat** (no project-first landing); Project column/filter shown to clients only when they can see 2+ projects. (5) *Proposed, not yet committed:* a "move ticket to another project" action (agent/Client Admin, history-logged, SLA re-stamped) as the misroute safety net — needs a MoSCoW slot. Implemented in the mockup 2026-07-03.

---

*This is a living document. We update it as decisions are made.*
