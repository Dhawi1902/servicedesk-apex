# Page 18 — Audit Log (SHOULD)

> Mockup: `docs/mockups/16-audit-log.html` · APEX type: Interactive Report (read-only) · **System Admin only**

## Purpose

Admin-action transparency (ISO 20000 §9.1 talking point for the demo): who changed what, when,
old value → new value. Distinct from `TICKET_HISTORY` (per-ticket timeline, page 5) — this
covers **admin entities**: companies, projects, users, roles, mappings, SLA policies.

## 1. Data

The mockup uses a dedicated admin audit table. Two build options:

- **Simple (recommended for the timeline):** an `ADMIN_AUDIT_LOG` table
  (`log_id, user_id, action, entity, record_key, old_value, new_value, logged_at`) written by
  the admin pages' DML processes (companies, users, projects, mappings, SLA edits).
  Add the DDL to the sql migration when it happens.
- Column-level triggers on the admin tables — more coverage, more code; only if time allows.

## 2. Build

- Page authorization `IS_SYSTEM_ADMIN`.
- Interactive Report ordered `logged_at DESC`; columns: timestamp, user, action, entity,
  record, old value, new value.
- IR's built-in search/filters cover the mockup's Action/Entity/date filters — no custom code.
- Read-only: no DML on this page ever; audit rows are never edited or deleted from the UI.
- Escape old/new values (they can contain user-entered strings).

## Isolation checklist

- [ ] Page gated `IS_SYSTEM_ADMIN` (URL-jump test).
- [ ] Log writes happen inside the same transaction as the audited change (no lost audit on rollback).
- [ ] Values rendered escaped.
