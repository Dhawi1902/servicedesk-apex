# Page 16 — SLA Policies & Targets (SHOULD)

> Mockup: `docs/mockups/13-sla-targets.html` · APEX type: Master-detail (IG + IG) · **System Admin only**

## Purpose

Named SLA policies (decision S: Gold / Standard / Bronze / Internal) with per-severity target
rows. Projects are *assigned* a policy (on page 12 Details); a project with no policy uses the
`is_default` one. Feeds FR-23 (targets), FR-32 (compliance KPI), FR-35 (auto-escalation).

## 1. Master — `SLA_POLICIES`

IG columns: name, description, `is_default` flag, `effective_from`, `approved_by`, notes,
read-only "projects using" count.

- Exactly **one** default: when a row is set default, clear the others in the same process
  (or a validation that rejects a second default).
- Don't delete a policy in use — deactivate/replace.

## 2. Detail — `SLA_TARGETS` (per selected policy)

Keyed `(sla_policy_id, severity)` — one row per severity:

| Column | Meaning |
|--------|---------|
| `severity` | Critical / Major / Minor / Low |
| `response_hours` | first-response target (FR-31 measures against this) |
| `resolution_days` | drives `TICKETS.sla_due_date` stamped at creation (page 6) |
| `escalation_pct` | % of target consumed that triggers auto-escalation (FR-35) |

Validation: all four severities present per policy, values positive, `escalation_pct` 1–100.

## 3. Where the values get used (so changes are understood)

- **Page 6** stamps `sla_due_date` at creation from the ticket's project → policy → severity row.
  Changing a policy affects **new** tickets only — say so in help text.
- **FR-35 auto-escalation** is an **Automation** (Shared Components → Automations, scheduled):
  finds open tickets past `escalation_pct` of their SLA, bumps priority / flags escalation,
  writes `TICKET_HISTORY`, emails via `APEX_MAIL`. Document it here since this page owns the knobs.

## Isolation checklist

- [ ] Page gated `IS_SYSTEM_ADMIN`.
- [ ] SLA tables are global config (no `company_id`) — tenancy applies to tickets, not policies.
- [ ] The escalation automation writes through the same guarded patterns (history rows, no client-visible internal data in emails).
