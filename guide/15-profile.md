# Step 15 — My Profile (p14) (SHOULD)

> User's own details. Agents see their per-project tiers.

---

## Step 1: Create the Page

**App Builder → Create Page → Form**
- Page Number: `14`
- Name: `My Profile`
- Data Source: `APP_USERS`

---

## Step 2: Fetch by Current User Only

Where Clause: `USER_ID = NV('APP_USER_ID')` — **never** from a URL parameter.

---

## Step 3: Fields

| Field | Editable? |
|-------|-----------|
| Full Name | Yes |
| Email | No |
| Active Role, Company, Department | No |
| Tier (per project) | No — agents only. Show `ACME-IT: L2, NW-APPS: L2` |
| Roles Held | No — display from `USER_ROLES` |

Save process: `UPDATE APP_USERS SET FULL_NAME = :P14_FULL_NAME WHERE USER_ID = NV('APP_USER_ID');`

---

## Step 4: Test It

| Test | Expected |
|------|----------|
| Anna | Name, email, role, company. No tier section. |
| Mike (Agent) | Per-project tiers visible |

---

## Isolation Checklist

- [ ] No `P14_USER_ID` tamper — key is always `NV('APP_USER_ID')`
- [ ] Update can't touch role/company/tier

---

**Next:** move to `16-sla-policies.md`.
