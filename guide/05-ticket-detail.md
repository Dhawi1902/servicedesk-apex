# Page 5 — Ticket Detail (MUST)

> Mockup: `docs/mockups/05-ticket-detail.html` · APEX type: Form + Comments/History regions + status-action dialogs · All roles (buttons gated)

## Purpose

The hub of the app: one ticket's full story. Status transitions are **buttons + processes on
this page** (not separate pages); comments and history are embedded regions.

## 1. Form region

- **Source:** Form on `V_MY_TICKETS` (fetch through the view = can't fetch a foreign ticket),
  primary key `TICKET_ID`.
- **Lost Update Detection = Checksum** (brief §6.2) — prevents two agents silently overwriting each other.
- Field editability by role: clients edit nothing after creation except via actions; agents edit
  priority/category; severity stays client-owned. Gate with authorization schemes per item.

## 2. Embedded regions

| Region | Source | Notes |
|--------|--------|-------|
| Comments | `V_MY_COMMENTS WHERE ticket_id = :P5_TICKET_ID` | View already hides internal notes from clients. "Add comment" button → page 8. |
| History timeline | `V_MY_HISTORY WHERE ticket_id = :P5_TICKET_ID` | Read-only; every transition below writes here. |
| Related tickets | `V_MY_TICKETS` same company/requester, last 90 days | SHOULD — recurring-incident spotting. |

## 3. Status buttons + processes

Lifecycle: `New → Assigned → In Progress → On Hold → Resolved → Closed` (+ Reopen:
Resolved → In Progress). One button per legal transition, shown by **server-side condition on
current status + role**:

| Button | Who | Transition |
|--------|-----|-----------|
| Assign / Reassign | System Admin, Client Admin, agents (tier rules) → opens page 7 | New → Assigned (or re-assign) |
| Start Progress | assigned agent | Assigned → In Progress |
| Put On Hold / Resume | assigned agent | In Progress ↔ On Hold |
| Resolve | assigned agent | In Progress → Resolved (dialog below) |
| Close | client roles + admins | Resolved → Closed (dialog below) |
| Reopen | client roles | Resolved → In Progress (`reopen_count + 1`) |

Every process: (1) **write-guard** — `SELECT COUNT(*) FROM V_MY_TICKETS WHERE TICKET_ID =
:P5_TICKET_ID` must be > 0, else `raise_application_error`; (2) update base `TICKETS`;
(3) insert a `TICKET_HISTORY` row (who/what/when). Status-change notification email (FR-22)
via `APEX_MAIL` hangs off these same processes.

## 4. The two combined dialogs (brief §6.2)

- **Resolve dialog** (FR-36 + FR-11): inline dialog with `resolution_code` LOV +
  `resolution_summary` textarea + optional comment — one transaction. Validation: both required.
- **Close dialog** (FR-27 + FR-11): confirmation + optional comment + **CSAT star rating inline**
  (one-time — disable if already rated), one transaction.

## 5. Triage gate (FR-37)

Validation on "Start Progress": `:P5_PRIORITY IS NOT NULL` — an agent cannot move
Assigned → In Progress until priority is set. Friendly message: "Set a priority (triage) first."

## Isolation checklist

- [ ] Form fetches through `V_MY_TICKETS`; deep-link with a foreign ticket ID must show "not found", not data.
- [ ] Every write process starts with the `V_MY_TICKETS` count guard.
- [ ] Comments region uses `V_MY_COMMENTS` — log in as Anna and confirm internal notes are absent.
- [ ] `SUBJECT`/`DESCRIPTION`/comment text escaped on any HTML-expression render path.
- [ ] Buttons are gated server-side (condition/authorization), not just hidden by CSS/JS.
