# Role-Switching Design — Multi-Role Users via `USER_ROLES` Table

**Date:** 2026-07-03
**Status:** Approved
**Scope:** Northwind Support (service-provider company) initially; schema is generic for any tenant

## Problem

Internal staff at the service-provider company (Northwind) need to act as both Support Agent
and Client User — raising tickets as a client and working tickets as an agent. The current
schema stores a single `ROLE` on `APP_USERS`, forcing a choice of one role per account.

The rejected alternative (dual accounts per person) breaks audit trails, doubles SSO burden,
and creates admin overhead. This design replaces it with a single account that holds multiple
roles, switchable at runtime without re-login.

## Decision

**Approach B — `USER_ROLES` junction table.** Fully normalized; `APP_USERS.ROLE` is removed
and replaced by one-to-many rows in `USER_ROLES`. A nav-bar toggle swaps the active role
in session state. Isolation views and authorization schemes are untouched — they already
read `V('APP_ROLE')`.

---

## 1. Schema Changes

### 1.1 New table: `USER_ROLES`

```sql
CREATE TABLE USER_ROLES (
  USER_ID  NUMBER       NOT NULL,
  ROLE     VARCHAR2(20) NOT NULL,
  CONSTRAINT USER_ROLES_PK      PRIMARY KEY (USER_ID, ROLE),
  CONSTRAINT USER_ROLES_U_FK    FOREIGN KEY (USER_ID) REFERENCES APP_USERS (USER_ID),
  CONSTRAINT USER_ROLES_ROLE_CK CHECK (ROLE IN ('CLIENT_USER','CLIENT_ADMIN','SUPPORT_AGENT','SYSTEM_ADMIN'))
);
```

### 1.2 Modify `APP_USERS`

- **Drop** the `ROLE` column and its CHECK constraint (`APP_USERS_ROLE_CK`).
- **Add** `DEFAULT_ROLE VARCHAR2(20)` — the role the user lands on at login. Nullable;
  if null, post-auth picks the highest-privilege role.

```sql
ALTER TABLE APP_USERS DROP COLUMN ROLE;
ALTER TABLE APP_USERS ADD DEFAULT_ROLE VARCHAR2(20);
```

### 1.3 No other table changes

`TICKETS`, `TICKET_HISTORY`, `TICKET_COMMENTS`, `AGENT_COMPANIES`, etc. reference `USER_ID`,
not `ROLE`. The role is only ever read from session state (`V('APP_ROLE')`).

---

## 2. Seed Data Migration

Each existing user's role moves from `APP_USERS` to `USER_ROLES`:

| User | Current ROLE | USER_ROLES rows | DEFAULT_ROLE |
|------|-------------|-----------------|--------------|
| sara@northwind.example | SYSTEM_ADMIN | SYSTEM_ADMIN | SYSTEM_ADMIN |
| mike@northwind.example | SUPPORT_AGENT | SUPPORT_AGENT, CLIENT_USER | SUPPORT_AGENT |
| lena@northwind.example | SUPPORT_AGENT | SUPPORT_AGENT, CLIENT_USER | SUPPORT_AGENT |
| tom@northwind.example | SUPPORT_AGENT | SUPPORT_AGENT, CLIENT_USER | SUPPORT_AGENT |
| nora@northwind.example | CLIENT_ADMIN | CLIENT_ADMIN | CLIENT_ADMIN |
| nick@northwind.example | CLIENT_USER | CLIENT_USER | CLIENT_USER |
| anna@acme.example | CLIENT_USER | CLIENT_USER | CLIENT_USER |
| aaron@acme.example | CLIENT_ADMIN | CLIENT_ADMIN | CLIENT_ADMIN |
| amy@acme.example | CLIENT_USER | CLIENT_USER | CLIENT_USER |
| george@globex.example | CLIENT_USER | CLIENT_USER | CLIENT_USER |
| gina@globex.example | CLIENT_ADMIN | CLIENT_ADMIN | CLIENT_ADMIN |
| ivan@initech.example | CLIENT_USER | CLIENT_USER | CLIENT_USER |

Northwind agents (Mike, Lena, Tom) get a second `CLIENT_USER` role so they can raise
internal tickets. All other users keep a single role — no behavior change for them.

---

## 3. Post-Authentication Process

Runs after successful login (APEX Accounts or SSO). Replaces the current single-role lookup.

```
1. SELECT USER_ID, COMPANY_ID, DEFAULT_ROLE
   FROM   APP_USERS
   WHERE  UPPER(EMAIL) = UPPER(:APP_USER)    -- :APP_USER = login username
   AND    STATUS = 'ACTIVE';

2. Stamp APP_USER_ID   = USER_ID
   Stamp APP_COMPANY_ID = COMPANY_ID

3. Count roles:
   SELECT COUNT(*) INTO l_role_count
   FROM   USER_ROLES WHERE USER_ID = :APP_USER_ID;

4. Pick active role:
   IF DEFAULT_ROLE IS NOT NULL THEN
     active_role := DEFAULT_ROLE;
   ELSE
     -- Priority: SYSTEM_ADMIN > SUPPORT_AGENT > CLIENT_ADMIN > CLIENT_USER
     SELECT ROLE INTO active_role
     FROM   USER_ROLES
     WHERE  USER_ID = :APP_USER_ID
     ORDER BY DECODE(ROLE, 'SYSTEM_ADMIN',1, 'SUPPORT_AGENT',2, 'CLIENT_ADMIN',3, 4)
     FETCH FIRST 1 ROW ONLY;
   END IF;

5. Stamp APP_ROLE           = active_role
   Stamp APP_HAS_MULTI_ROLE = CASE WHEN l_role_count > 1 THEN 'Y' ELSE 'N' END
```

### New application items

| Item | Type | Purpose |
|------|------|---------|
| `APP_USER_ID` | Number | Already exists |
| `APP_COMPANY_ID` | Number | Already exists |
| `APP_ROLE` | Varchar | Already exists — now set from USER_ROLES |
| `APP_HAS_MULTI_ROLE` | Varchar | **New** — 'Y'/'N', controls nav-bar toggle visibility |

---

## 4. Role-Switch UI (Nav-Bar Entry)

### 4.1 Nav-bar list entry

- **Condition:** `APP_HAS_MULTI_ROLE = 'Y'` (server-side, so single-role users never see it)
- **Label:** Dynamic — shows the *other* role(s) available. E.g. when active role is
  `SUPPORT_AGENT`, label = "Switch to Client"
- **Target:** APEX URL to a switch-role page process (or a zero-page-submit branch)

### 4.2 Switch-role PL/SQL process

```sql
DECLARE
  l_new_role VARCHAR2(20) := :REQUEST;   -- passed from the nav-bar link
BEGIN
  -- Verify the user actually holds this role
  SELECT ROLE INTO l_new_role
  FROM   USER_ROLES
  WHERE  USER_ID = NV('APP_USER_ID')
  AND    ROLE    = l_new_role;

  -- Swap the session role
  APEX_UTIL.SET_SESSION_STATE('APP_ROLE', l_new_role);

  -- Redirect to home page (dashboard renders per role)
END;
```

**Security:** The process validates that the requested role exists in `USER_ROLES` for
the logged-in user before setting it. A tampered request value simply raises NO_DATA_FOUND.

### 4.3 UX behavior on switch

- Page redirects to the application home page (Page 1 / dashboard)
- Authorization schemes immediately reflect the new role (pages/regions the user can no
  longer access become hidden; new ones appear)
- No logout, no re-authentication

---

## 5. What Does NOT Change

| Component | Why unchanged |
|-----------|--------------|
| `V_MY_TICKETS` and other isolation views | Already branch on `V('APP_ROLE')` — source of role is irrelevant |
| Authorization schemes | Already check `V('APP_ROLE')` per page/region |
| `AGENT_COMPANIES` | Scopes agent queue by `USER_ID`, not by role column |
| `TICKETS` / `TICKET_HISTORY` / `TICKET_COMMENTS` | Reference `USER_ID` (FK), not role |
| APEX Accounts (auth scheme) | One account per person — unchanged |

---

## 6. Affected SQL Scripts

| Script | Change |
|--------|--------|
| `01_schema.sql` | Remove `ROLE`/`APP_USERS_ROLE_CK` from `APP_USERS`; add `DEFAULT_ROLE`; add `USER_ROLES` table |
| `02_seed_data.sql` | Remove `ROLE` from `APP_USERS` inserts; add `USER_ROLES` inserts; dual roles for Mike/Lena/Tom |
| `05_isolation_views.sql` | No change |
| `04_apex_accounts.sql` | No change (uses `EMAIL`/`FULL_NAME`, not `ROLE`) |
| `00_drop_all.sql` | Add `DROP TABLE USER_ROLES` (before `APP_USERS`) |

---

## 7. APEX App Builder Wiring

1. Create application item `APP_HAS_MULTI_ROLE` (Session scope, Protection = Restricted)
2. Update post-auth process to the new logic (§3)
3. Add nav-bar list entry with condition + PL/SQL target (§4)
4. Update any page/report that previously joined `APP_USERS.ROLE` to join `USER_ROLES` instead
   (search for `APP_USERS` + `ROLE` in all page SQL)

---

## 8. Migration Path (Existing Data)

If the schema is already deployed with data:

```sql
-- 1. Populate USER_ROLES from existing ROLE column
INSERT INTO USER_ROLES (USER_ID, ROLE)
SELECT USER_ID, ROLE FROM APP_USERS;

-- 2. Add dual roles for Northwind agents
INSERT INTO USER_ROLES (USER_ID, ROLE)
SELECT USER_ID, 'CLIENT_USER'
FROM   APP_USERS
WHERE  ROLE = 'SUPPORT_AGENT'
AND    COMPANY_ID = (SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME = 'Northwind Support')
AND    NOT EXISTS (SELECT 1 FROM USER_ROLES WHERE USER_ID = APP_USERS.USER_ID AND ROLE = 'CLIENT_USER');

-- 3. Set DEFAULT_ROLE = current ROLE before dropping
UPDATE APP_USERS SET DEFAULT_ROLE = ROLE;

-- 4. Drop the column
ALTER TABLE APP_USERS DROP COLUMN ROLE;
```

---

## 9. Constraints & Guardrails

- A user must have **at least one** role in `USER_ROLES`. Enforce via application logic
  (the admin UI for user management must insert a `USER_ROLES` row when creating a user).
- `DEFAULT_ROLE` if set must exist in `USER_ROLES` for that user. Enforce via application
  logic (or a trigger, but keep it simple for the demo).
- The role-switch process must **never** allow setting a role the user doesn't hold —
  the `SELECT ... FROM USER_ROLES WHERE USER_ID = x AND ROLE = y` guard covers this.
