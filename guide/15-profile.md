# Page 15 — My Profile (SHOULD)

> Mockup: `docs/mockups/12-profile.html` · APEX type: Form · All roles (own record only)

## Purpose

The user's own details. Mostly read-only; the interesting bit is showing an agent their
**per-project tiers** (decision M revised — tier is a property of the mapping, not the person).

## 1. Build

Form on `APP_USERS` fetched by `NV('APP_USER_ID')` — **never** from a URL parameter.

| Field | Editable? |
|-------|-----------|
| Full name | yes |
| Email | no (it's the login) |
| Active role, Company, Department | no (display only) |
| **Tier (per project)** | display only, agents: `ACME-IT: L1, GLX-OPS: L2` from `AGENT_PROJECTS` join `PROJECTS` |
| Roles held | display `USER_ROLES` list; multi-role users switch via the nav-bar switcher (page 2), not here |

Save process updates only the editable columns, keyed `WHERE user_id = NV('APP_USER_ID')`.

**Password change:** APEX Accounts owns credentials — link to the built-in change-password
page (`APEX_UTIL.CHANGE_CURRENT_USER_PW` under the hood) rather than building one.

## Isolation checklist

- [ ] No `P15_USER_ID` item that can be tampered — the key is always `NV('APP_USER_ID')`.
- [ ] Update statement cannot touch role/company/tier columns (whitelist the SET list).
