# Page 6 — Raise Ticket (MUST)

> Mockup: `docs/mockups/06-create-ticket.html` · APEX type: Form, **Modal Dialog** · Client User, Client Admin, System Admin

## Purpose

Clients raise incidents / service requests. The critical part is what the **server** stamps —
never trust the browser for tenant fields.

## 1. Modal form items

| Item | Notes |
|------|-------|
| Subject, Description | required; plain textarea (rich text is FUTURE scope) |
| Ticket type | radio: `INCIDENT` / `SERVICE_REQUEST` (FR-30) — default Incident, help text explaining the ITIL difference |
| Project | **LOV scoped per role** — see below |
| Category | LOV on `CATEGORIES` (global — don't tenant-filter it) |
| Severity | client-set business impact: Critical/Major/Minor/Low, with **severity guidance help text** (FR-34) |
| Department | optional metadata, default from creator's profile (decision N) |
| On behalf of | `IS_CLIENT_ADMIN` only — LOV of own-company users (FR: raise on behalf of staff) |
| Priority | **NOT on this page for clients** (FR-7): render only when `:APP_ROLE IN ('SUPPORT_AGENT','SYSTEM_ADMIN')` |

## 2. Project LOV (the scoping that matters)

- Client User: **Open** projects of their company + Restricted ones they're invited to
  (`USER_PROJECTS`) — decision Q.
- Client Admin: all their company's active projects.
- System Admin: company select first, then that company's projects (cascading LOV).

## 3. Create process (server-side)

```
INSERT INTO TICKETS (...,
  company_id  = NV('APP_COMPANY_ID'),   -- clients: ALWAYS from session, never a page item
  created_by  = NV('APP_USER_ID'),
  status      = 'New',
  sla_due_date = <computed>)            -- from the project's SLA policy (default policy if none), per severity
```

- System Admin creating on behalf of a client sets `company_id` explicitly from their company
  pick — that's the only role allowed to.
- Verify the chosen `project_id` belongs to the stamped `company_id` **and** the creator can
  access it (re-run the LOV logic as a validation) — LOVs are UI, not security.
- Stamp `sla_due_date` from `SLA_POLICIES`/`SLA_TARGETS` for the ticket's severity (decision S).
- Insert the "Ticket created" `TICKET_HISTORY` row. Auto-ack email (SHOULD) via `APEX_MAIL` here.

## Isolation checklist

- [ ] `COMPANY_ID` is **not** a submittable page item for client roles.
- [ ] Project validation re-checks access server-side (forge a Restricted project ID → must fail).
- [ ] Priority item absent for clients (server-side render condition, not JS hide).
- [ ] "On behalf of" LOV is own-company only and gated `IS_CLIENT_ADMIN`.
