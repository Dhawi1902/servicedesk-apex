# Step 9 — Companies (p8) (MUST)

> Judge non-negotiable: "multiple companies." This page proves it.

---

## Step 1: Create the Page

**App Builder → Create Page → Interactive Grid**
- Page Number: `8`
- Name: `Companies`
- Table: `COMPANIES`
- Set page-level **Authorization Scheme = `IS_SYSTEM_ADMIN`**

---

## Step 2: Configure the Grid

| Column | Type | Notes |
|--------|------|-------|
| `COMPANY_NAME` | Text | Editable |
| `STATUS` | Switch | Active / Inactive — editable |
| `CREATED_AT` | Date | Read-only |
| Projects count | Read-only | `(SELECT COUNT(*) FROM PROJECTS WHERE COMPANY_ID = COMPANIES.COMPANY_ID)` |
| Users count | Read-only | `(SELECT COUNT(*) FROM APP_USERS WHERE COMPANY_ID = COMPANIES.COMPANY_ID)` |
| Open tickets | Read-only | `(SELECT COUNT(*) FROM TICKETS WHERE COMPANY_ID = COMPANIES.COMPANY_ID AND STATUS NOT IN ('Resolved','Closed'))` |

Add a **Manage** link column → **page 12** (`P12_COMPANY_ID`).

---

## Step 3: Disable Hard Delete

- IG Attributes → Allowed Operations → uncheck Delete
- Use Status column to deactivate instead
- Help text: "New company? Create at least one Project and a Client Admin user."

---

## Step 4: Test It

| Test | Expected |
|------|----------|
| Sara (System Admin) | Grid shows all 5 companies with counts |
| Anna (Client User) URL-jump to page 8 | APEX authorization error |
| Add a new company | Row inserted; counts start at 0 |
| Click Manage → opens page 12 | Company hub loads |

---

## Isolation Checklist

- [ ] Page authorization = `IS_SYSTEM_ADMIN`
- [ ] No LOV elsewhere exposes the full company list to non-admins

---

**Next:** move to `10-users.md`.
