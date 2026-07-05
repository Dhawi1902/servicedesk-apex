# Step 15 — My Profile (p14) (SHOULD)

> Every user's own account details. Agents also see their per-project support tiers.
> Strictly own record — one user can only ever view or edit their own row.

Breadcrumb: `Account / Profile` · Page title: `My Profile` · Card header: `Personal details`.

---

## Step 1: Create the Page

**App Builder → Create Page → Form**
- Page Number: `14`
- Name: `My Profile`
- Data Source (Table): `APP_USERS`
- Branch back to this same page on submit.

Once the page exists, open it in Page Designer. Under the form heading, add a small
**sub-header** — either drag a Static Content region `[Gallery ▸ Regions]` onto
`[Central ▸ Layout]`, or use the form region's description `[Right ▸ Appearance ▸ Region Description]` —
reading the active role and company, matching the mockup's avatar strip:
`&APP_ROLE. · &company name.`

---

## Step 2: Fetch by Current User Only

Select the form region `[Left ▸ Rendering]` and set its **Where Clause**
`[Right ▸ Source ▸ Where Clause]`: `USER_ID = NV('APP_USER_ID')`

- The key comes **only** from the session item — **never** from a `P14_USER_ID` URL parameter.
- Do not put `USER_ID` in a URL-settable page item. If the form auto-creates a primary-key
  item, select it `[Left ▸ Rendering]`, set it to **Hidden** `[Right ▸ Identification ▸ Type]`
  with *Value Protected = Yes* `[Right ▸ Security ▸ Value Protected]` and source it
  `[Right ▸ Source ▸ Type]` = Expression from `NV('APP_USER_ID')`.

---

## Step 3: Fields

Match the mockup order and labels. Each item lives in the form region `[Left ▸ Rendering]`;
set its editability per row via `[Right ▸ Identification ▸ Type]` (Text Field vs Display Only).
Only **Full name** is editable; everything else is display-only.

| # | Item | Label | Source | Editable? |
|---|------|-------|--------|-----------|
| 1 | `P14_FULL_NAME` | Full name | `APP_USERS.FULL_NAME` | **Yes** (Text Field) |
| 2 | `P14_EMAIL` | Email | `APP_USERS.EMAIL` | No — Display Only |
| 3 | `P14_ROLE` | Role | `:APP_ROLE` (active role) | No — Display Only |
| 4 | `P14_COMPANY` | Company | `COMPANIES.NAME` for the user's `COMPANY_ID` | No — Display Only |
| 5 | `P14_TIER` | Tier (per project) | `AGENT_PROJECTS` + `PROJECTS` — **agents only** | No — Display Only |

**Company name** (`P14_COMPANY`) — not a column on `APP_USERS`, so populate it with a
**Pre-Rendering computation** `[Left ▸ Processing]` (with the PL/SQL/SQL in `[Right ▸ Source]`),
or the item's SQL Query source `[Right ▸ Source ▸ SQL Query]`:

```sql
SELECT C.NAME
  FROM COMPANIES C
  JOIN APP_USERS U ON U.COMPANY_ID = C.COMPANY_ID
 WHERE U.USER_ID = NV('APP_USER_ID')
```

**Tier (per project)** (`P14_TIER`) — mirrors the mockup's `ACME-IT: L2, NW-APPS: L2`.
Populate with a Pre-Rendering computation `[Left ▸ Processing]`:

```sql
SELECT LISTAGG(P.PROJECT_KEY || ': ' || AP.TIER, ', ')
         WITHIN GROUP (ORDER BY P.PROJECT_KEY)
  FROM AGENT_PROJECTS AP
  JOIN PROJECTS P ON P.PROJECT_ID = AP.PROJECT_ID
 WHERE AP.USER_ID = NV('APP_USER_ID')
```

Select `P14_TIER` `[Left ▸ Rendering]` and give it a **server-side Condition**
`[Right ▸ Server-side Condition ▸ Type]` so it only renders for users who have mappings —
*Type = Rows returned*, same query as above (or simply `Item is NOT NULL` on `P14_TIER`). A
client with no `AGENT_PROJECTS` rows sees no tier field, exactly like the mockup.

> Not on this page (mockup does not show them here): **Department** and a **Roles Held**
> list. Role-switching is handled by the nav-bar role toggle (decision P), not the profile.

---

## Step 4: Save Process

Create the save process under `[Left ▸ Processing]`. Automatic Row Processing (DML) is fine,
but constrain it to the editable column only. If you keep a manual process, put this in
`[Right ▸ Source ▸ PL/SQL Code]`:

```sql
UPDATE APP_USERS
   SET FULL_NAME = :P14_FULL_NAME
 WHERE USER_ID = NV('APP_USER_ID');
```

- The `WHERE` re-keys on `NV('APP_USER_ID')` — the update can never touch another row.
- Do **not** include `EMAIL`, `COMPANY_ID`, `DEPARTMENT_ID`, role, or tier in the SET list.
  If using auto-DML, select each of those items `[Left ▸ Rendering]` and mark them
  *Query Only* `[Right ▸ Source ▸ Query Only]` / *Source Used = Only when NULL* so they
  are read but never written.

Add a **Not Null** validation on `P14_FULL_NAME` — create it under `[Left ▸ Processing]`,
*Type = Item is NOT NULL* `[Right ▸ Validation ▸ Type]`.

---

## Step 5: Authorization

Any authenticated user may see their own profile — no role restriction needed. Isolation is
enforced by the `NV('APP_USER_ID')` key, not by an authorization scheme.

---

## Step 6: Test It

| Test | Expected |
|------|----------|
| Anna (Client User) | Full name (editable), email, role, company. **No** Tier field. |
| Mike (Support Agent) | Same four fields **plus** Tier showing `ACME-IT: L2, NW-APPS: L2`. |
| Edit Full name → Save | New name persists; email/company/role/tier unchanged. |
| Tamper URL `?P14_USER_ID=<other>` | Ignored — form still loads the logged-in user's row. |

---

## Isolation Checklist

- [ ] Fetch keys on `NV('APP_USER_ID')` only — no `P14_USER_ID` URL parameter, PK item Hidden + Value Protected.
- [ ] Save `WHERE USER_ID = NV('APP_USER_ID')` — update can reach no other row.
- [ ] Only `FULL_NAME` is writable; email, company, role, and tier are display-only / query-only.
- [ ] `P14_COMPANY` and `P14_TIER` computations both filter on `NV('APP_USER_ID')` — no cross-user leak.

---

**Next:** move to `16-sla-policies.md`.
