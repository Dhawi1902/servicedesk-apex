# Step 14 — Categories (p13) (SHOULD)

> Small page. Categories are global (shared by all tenants).

---

## Step 1: Create the Page

**App Builder → Create Page → Interactive Grid**
- Page Number: `13`
- Name: `Categories`
- Table: `CATEGORIES`
- **Authorization:** `IS_SYSTEM_ADMIN`

---

## Step 2: Configure the Grid

| Column | Notes |
|--------|-------|
| `CATEGORY_NAME` | Editable |
| `DESCRIPTION` | Editable |
| `ACTIVE` | Switch Y/N |
| `DISPLAY_ORDER` | Number |
| Usage count | Read-only subquery |

Disable Delete — deactivate instead.

---

## Step 3: Test It

| Test | Expected |
|------|----------|
| Sara | All categories with counts |
| Anna URL-jumps to page 13 | Authorization error |

---

## Isolation Checklist

- [ ] Page gated `IS_SYSTEM_ADMIN`
- [ ] No `company_id` — global by design

---

**Next:** move to `15-profile.md`.
