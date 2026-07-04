# Page 14 — Categories (manage) (SHOULD)

> Mockup: `docs/mockups/11-categories.html` · APEX type: Interactive Grid · **System Admin only**

## Purpose

Maintain the ticket category list (FR: categories + filtering). Small page — the only design
point worth stating is that `CATEGORIES` is **global**, shared by all tenants.

## 1. Build

- Page authorization `IS_SYSTEM_ADMIN`.
- Interactive Grid on `CATEGORIES`: name, description, active flag, display order,
  read-only usage count (`SELECT COUNT(*) FROM TICKETS WHERE category_id = ...`).
- Deactivate instead of delete once a category has tickets (same rule as companies).
- Category LOVs elsewhere (pages 4, 5, 6) filter `active = 'Y'` but are **never**
  tenant-filtered — don't "fix" that during an isolation sweep; it's by design.

## Isolation checklist

- [ ] Page gated `IS_SYSTEM_ADMIN` (URL-jump test as a client).
- [ ] No `company_id` on this table or its LOVs — global by design.
