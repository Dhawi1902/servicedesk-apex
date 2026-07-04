# Step 16 — SLA Policies & Targets (p15) (SHOULD)

> Named SLA policies (Gold/Standard/Bronze/Internal) with per-severity targets.

---

## Step 1: Create the Page

**App Builder → Create Page → Blank Page**
- Page Number: `15`
- Name: `SLA Policies`
- **Authorization:** `IS_SYSTEM_ADMIN`

---

## Step 2: Master Grid — SLA Policies

IG on `SLA_POLICIES`: name, description, `IS_DEFAULT` switch, effective_from, approved_by, notes, projects-using count.

Only one default: clear others when a row is set default.

---

## Step 3: Detail Grid — SLA Targets

IG on `SLA_TARGETS WHERE SLA_POLICY_ID = :P15_SLA_POLICY_ID` (filtered by selected policy):
- Severity (Critical/Major/Minor/Low)
- `RESPONSE_HOURS`, `RESOLUTION_DAYS`, `ESCALATION_PCT`

Validations: all 4 severities present, values positive, escalation 1–100.

---

## Step 4: Test It

| Test | Expected |
|------|----------|
| Sara | 4 seeded policies; select one → 4 severity rows |
| Set "Standard" as default | Previous default cleared |
| Anna URL-jumps to page 15 | Authorization error |

---

## Isolation Checklist

- [ ] Page gated `IS_SYSTEM_ADMIN`
- [ ] SLA tables are global config (no `company_id`)

---

**Next:** move to `17-agent-projects.md`.
