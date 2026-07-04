# Step 13 — My Company (p12) (SHOULD)

> One page, two hats: clients see their own company (read-only); System Admin sees any company (editable, from page 8's Manage link).

---

## Step 1: Create the Page

**App Builder → Create Page → Blank Page**
- Page Number: `12`
- Name: `My Company`
- Condition: `:APP_ROLE != 'SUPPORT_AGENT'`

Add a hidden item `P12_COMPANY_ID`.

---

## Step 2: Lock the Company

Before Header process:

```sql
BEGIN
  IF :APP_ROLE = 'SYSTEM_ADMIN' THEN
    NULL;  -- keep the URL value
  ELSE
    :P12_COMPANY_ID := NV('APP_COMPANY_ID');
  END IF;
END;
```

---

## Step 3: Add Header Stats + 3 Tabs

- **Projects** tab — company's projects with visibility badge
- **Departments** tab — departments + user counts (metadata only)
- **Client Admins** tab — who manages this company

---

## Step 4: Test It

| Test | Expected |
|------|----------|
| Anna edits URL to another company | Still renders Acme (overwritten) |
| Sara clicks Manage on page 8 | Opens for that company, fully editable |
| Mike (Agent) | Page not accessible |

---

## Isolation Checklist

- [ ] Non-admins' `P12_COMPANY_ID` always overwritten
- [ ] Client User's Projects tab excludes uninvited Restricted projects
- [ ] Edit buttons authorization-gated

---

**Next:** move to `14-categories.md`.
