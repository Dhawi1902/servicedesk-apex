# Page 4 — Ticket Queue / List (MUST)

> Mockup: `docs/mockups/04-ticket-list.html` · APEX type: **Faceted Search** (Interactive Report is the fallback) · All roles (rows role-scoped)

## Purpose

The main browse/filter screen. Clients see "My Tickets", staff see the working queue —
same page, same SQL, scoped entirely by `V_MY_TICKETS`.

## 1. Region

Create page → **Faceted Search** → source:

```sql
SELECT t.*,
       ROUND((SYSDATE - CAST(t.updated_at AS DATE)) * 24, 1) AS hours_since_activity
  FROM V_MY_TICKETS t
```

Report columns: ticket number (link to page 5), subject, ticket type, status, severity,
priority, company (staff only — see below), project, assignee, created, **Last Activity**
(`hours_since_activity || 'h ago'`, FR-15 stale-spotting).

## 2. Facets (FR-15 + FR-30)

`status` · `priority` · `severity` · `ticket_type` (Incident vs Service Request) ·
`project_id` (LOV on project name) · `assigned_to` · `company_id` — the company facet and
column get **condition `:APP_ROLE IN ('SYSTEM_ADMIN','SUPPORT_AGENT')`**; clients only have one.

Add a search facet on subject/ticket number.

## 3. Row actions & badges (brief §6.2)

- **"Assign to me"** (agents): a link column shown when `assigned_to IS NULL AND
  :APP_ROLE = 'SUPPORT_AGENT'` — calls the same assignment process as page 7 (self-assign,
  decision A). Implement as a link column → page process, or redirect to page 7 pre-filled.
- **"Action needed" badge** (clients): when `status = 'Resolved'`, render a badge so the
  client knows to confirm/close (FR-11). Use an HTML expression — escape all substituted
  data columns (`APEX_ESCAPE` semantics apply to anything user-entered).
- **"Needs Attention" smart facet** (agents, SHOULD): a computed facet flagging SLA-at-risk
  (`sla_due_date < SYSDATE + 1`), awaiting-response, and stale (`hours_since_activity > 24`) tickets.

## 4. Entry points to keep working

Dashboard drill-downs land here with a facet pre-set (e.g. status=New) — test each chart
segment after building page 3.

## Isolation checklist

- [ ] Source is `V_MY_TICKETS` — no base `TICKETS` anywhere on the page, including LOVs and facet counts.
- [ ] Company facet/column hidden for client roles (and harmless if shown — the view scopes rows anyway).
- [ ] "Assign to me" process re-checks visibility server-side (`V_MY_TICKETS` guard) — a forged ticket ID must fail.
- [ ] Anna sees only her scope; Aaron (Client Admin) sees all Acme; Mike never sees Initech rows **or counts**.
