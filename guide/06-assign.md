# Step 6 — Assign / Reassign (p6) (MUST)

> One LOV + one process — but the LOV rules encode half the role model, so get them exactly right.
> Mockup: `docs/mockups/07-assign.html` → `renderAssign()`.

---

## Step 1: Create the Page

**App Builder → Create Page → Form**
- Page Number: `6`
- Name: `Assign Ticket`
- Page Mode: **Modal Dialog**
- Dialog Title: `Assign &middot; &P6_TICKET_REF.`

Items on the page (the modal, top to bottom, matching the mockup). In Page Designer,
create each with `[Gallery ▸ Items]` dragged onto `[Central ▸ Layout]`, then set its
type at `[Right ▸ Identification ▸ Type]`:

| Item | Type | Purpose |
|------|------|---------|
| `P6_TICKET_ID` | Hidden (value-protected) | Passed from page 5 detail |
| `P6_TICKET_REF` | Display Only | Header + context line |
| `P6_SUBJECT` | Display Only | "Put an agent on **…**" |
| `P6_COMPANY_NAME` | Display Only | Context line |
| `P6_PROJECT_NAME` | Display Only | Context line + client banner |
| `P6_PROJECT_ID` | Hidden (value-protected) | Scopes the agent LOV |
| `P6_SEVERITY` | Display Only | Context line |
| `P6_ASSIGNED_TO` | Select List | The agent to assign (the one required field) |
| `P6_SEND_EMAIL` | Switch (Y/N, default `Y`) | "Send assignment email" (FR-22 hook) |

---

## Step 2: Fetch the Ticket Context (pre-render)

**Pre-Rendering → Before Header → PL/SQL** — `[Left ▸ Processing]` create a Process, set
`[Right ▸ Execution ▸ Point]` = *Before Header* and paste the code at `[Right ▸ Source ▸ PL/SQL Code]`.
It populates the display items and re-checks visibility. Reads `V_MY_*` only, so a forged
`P6_TICKET_ID` for a foreign ticket fetches nothing.

```sql
BEGIN
  SELECT t.TICKET_REF, t.SUBJECT, t.SEVERITY, t.PROJECT_ID,
         p.PROJECT_NAME, c.COMPANY_NAME
    INTO :P6_TICKET_REF, :P6_SUBJECT, :P6_SEVERITY, :P6_PROJECT_ID,
         :P6_PROJECT_NAME, :P6_COMPANY_NAME
    FROM V_MY_TICKETS t
    JOIN V_MY_PROJECTS p ON p.PROJECT_ID = t.PROJECT_ID
    JOIN COMPANIES     c ON c.COMPANY_ID = t.COMPANY_ID
   WHERE t.TICKET_ID = :P6_TICKET_ID;
EXCEPTION
  WHEN NO_DATA_FOUND THEN
    raise_application_error(-20020, 'Ticket not found or not visible to you.');
END;
```

**Context line** — `[Gallery ▸ Regions]` drag a **Static Content** region onto `[Central ▸ Layout]`
under the header (put the blurb in `[Right ▸ Source ▸ HTML Code]`) to render the mockup's blurb:

> Put an agent on **&P6_SUBJECT.** (&P6_COMPANY_NAME. / &P6_PROJECT_NAME., &P6_SEVERITY.).

**Client-only banner** (mockup shows it for Client roles) — another `[Gallery ▸ Regions]` Static
Content region, gated at `[Right ▸ Server-side Condition ▸ Type]` = *Expression* with
`:APP_ROLE IN ('CLIENT_USER','CLIENT_ADMIN')`:

> &#128274; Only agents assigned to project **&P6_PROJECT_NAME.** are shown.

---

## Step 3: Who Can Assign to Whom

| Caller | May assign | Agent LOV shows |
|--------|-----------|-----------------|
| **System Admin** | any ticket, anyone | All agents mapped to the ticket's project, any tier |
| **Client Admin** | any ticket of their company | Agents mapped to the ticket's project, any tier |
| **Client User** | own-scope tickets | Agents whose tier on the ticket's project is **L1 only** |
| **Agent (self-assign)** | unassigned tickets on their projects | Themselves only |
| **Agent (reassign)** | tickets assigned to them | Same project, **same-or-higher tier** (FR-26) |

---

## Step 4: Add the Agent LOV

Select `P6_ASSIGNED_TO` in `[Left ▸ Rendering]`; set `[Right ▸ Identification ▸ Type]` = *Select List*,
`[Right ▸ Label ▸ Label]` = **Assign to agent**, `[Right ▸ Validation ▸ Value Required]` = On. Then at
`[Right ▸ List of Values ▸ Type]` = *SQL Query* paste the query into `[Right ▸ List of Values ▸ SQL Query]`.
Display matches the mockup exactly — `Full Name [Tier] · N open` (FR-33 workload in the LOV). "Open" = any
ticket not `Closed`, same as the mockup.

```sql
SELECT u.FULL_NAME || ' [' || ap.TIER || '] · ' ||
       (SELECT COUNT(*) FROM V_MY_TICKETS t     -- V_MY_*, not base TICKETS: a client/Client Admin
         WHERE t.ASSIGNED_TO = u.USER_ID         -- must not see an agent's cross-tenant workload total
           AND t.STATUS <> 'Closed') || ' open' AS d,
       u.USER_ID AS r
  FROM APP_USERS u
  JOIN AGENT_PROJECTS ap ON ap.USER_ID = u.USER_ID
 WHERE ap.PROJECT_ID = :P6_PROJECT_ID
   AND u.STATUS = 'ACTIVE'
   AND ( :APP_ROLE IN ('SYSTEM_ADMIN','CLIENT_ADMIN')
      OR (:APP_ROLE = 'CLIENT_USER'   AND ap.TIER = 'L1')
      OR (:APP_ROLE = 'SUPPORT_AGENT' AND ap.TIER >= (
            SELECT my.TIER FROM AGENT_PROJECTS my
             WHERE my.USER_ID = NV('APP_USER_ID')
               AND my.PROJECT_ID = ap.PROJECT_ID)) )
 ORDER BY u.FULL_NAME
```

> Tier is `L1`–`L4`, so `ap.TIER >= my.TIER` is a safe lexical compare (`L2 >= L2`, `L3 >= L2`
> true; `L1 >= L2` false) — an agent may reassign to their own tier or higher (FR-26).

If the LOV returns no rows (e.g. a client on a project with no L1 agent), the Select List is
empty — set `[Right ▸ List of Values ▸ Display Null Value]` = On with `[Right ▸ List of Values ▸
Null Display Value]` = "No eligible agent on this project", and let the validation below block submit.

---

## Step 5: Add the Send-Email Switch

Select `P6_SEND_EMAIL` in `[Left ▸ Rendering]`; set `[Right ▸ Identification ▸ Type]` = *Switch*,
`[Right ▸ Settings ▸ On Value]` = `Y` / `[Right ▸ Settings ▸ Off Value]` = `N`,
`[Right ▸ Default ▸ Value]` = `Y`, and `[Right ▸ Label ▸ Label]` = **Send assignment email**.
This is the FR-22 assignment-notification hook (a SHOULD feature); the process below only fires
`APEX_MAIL` when it is `Y`, so the switch stays declarative and the MUST path works without email.

---

## Step 6: Add the Assignment Process

**Processing → After Submit → PL/SQL.** `[Left ▸ Processing]` create a Process, leave
`[Right ▸ Execution ▸ Point]` = *Processing* (After Submit), and paste the code at
`[Right ▸ Source ▸ PL/SQL Code]`. Re-runs the full tier check server-side (never trust the
posted `P6_ASSIGNED_TO`), guards the ticket via `V_MY_TICKETS`, updates the base table, and writes
history with the **real** `TICKET_HISTORY` columns (`USER_ID` / `ACTION` / `CREATED_AT`) and valid
`ACTION` values (`ASSIGN` / `REASSIGN` / `STATUS_CHANGE`).

```sql
DECLARE
  l_ok         PLS_INTEGER;
  l_agent_ok   PLS_INTEGER;
  l_old_status TICKETS.STATUS%TYPE;
  l_old_agent  TICKETS.ASSIGNED_TO%TYPE;
BEGIN
  -- Guard: ticket must be visible to the caller.
  SELECT COUNT(*) INTO l_ok FROM V_MY_TICKETS WHERE TICKET_ID = :P6_TICKET_ID;
  IF l_ok = 0 THEN raise_application_error(-20020, 'Ticket not found.'); END IF;

  -- Guard: chosen agent must be tier-eligible for THIS ticket's project.
  SELECT COUNT(*) INTO l_agent_ok
    FROM APP_USERS u
    JOIN AGENT_PROJECTS ap ON ap.USER_ID = u.USER_ID
   WHERE u.USER_ID = :P6_ASSIGNED_TO
     AND u.STATUS = 'ACTIVE'
     AND ap.PROJECT_ID = (SELECT PROJECT_ID FROM TICKETS WHERE TICKET_ID = :P6_TICKET_ID)
     AND ( :APP_ROLE IN ('SYSTEM_ADMIN','CLIENT_ADMIN')
        OR (:APP_ROLE = 'CLIENT_USER'   AND ap.TIER = 'L1')
        OR (:APP_ROLE = 'SUPPORT_AGENT' AND ap.TIER >= (
              SELECT my.TIER FROM AGENT_PROJECTS my
               WHERE my.USER_ID = NV('APP_USER_ID')
                 AND my.PROJECT_ID = ap.PROJECT_ID)) );
  IF l_agent_ok = 0 THEN raise_application_error(-20021, 'Agent not eligible.'); END IF;

  SELECT STATUS, ASSIGNED_TO INTO l_old_status, l_old_agent
    FROM TICKETS WHERE TICKET_ID = :P6_TICKET_ID;

  UPDATE TICKETS
     SET ASSIGNED_TO = :P6_ASSIGNED_TO,
         STATUS      = CASE WHEN l_old_status = 'New' THEN 'Assigned' ELSE l_old_status END,
         UPDATED_AT  = SYSTIMESTAMP
   WHERE TICKET_ID = :P6_TICKET_ID;

  -- History: ASSIGN if it had no agent, REASSIGN if it changed hands.
  INSERT INTO TICKET_HISTORY (TICKET_ID, USER_ID, ACTION, OLD_VALUE, NEW_VALUE, CREATED_AT)
  VALUES (:P6_TICKET_ID, NV('APP_USER_ID'),
          CASE WHEN l_old_agent IS NULL THEN 'ASSIGN' ELSE 'REASSIGN' END,
          (SELECT FULL_NAME FROM APP_USERS WHERE USER_ID = l_old_agent),
          (SELECT FULL_NAME FROM APP_USERS WHERE USER_ID = :P6_ASSIGNED_TO), SYSTIMESTAMP);

  IF l_old_status = 'New' THEN
    INSERT INTO TICKET_HISTORY (TICKET_ID, USER_ID, ACTION, OLD_VALUE, NEW_VALUE, CREATED_AT)
    VALUES (:P6_TICKET_ID, NV('APP_USER_ID'), 'STATUS_CHANGE', 'New', 'Assigned', SYSTIMESTAMP);
  END IF;

  -- FR-22 assignment notification — only when the switch is on.
  IF :P6_SEND_EMAIL = 'Y' THEN
    NULL;  -- APEX_MAIL.SEND to the assignee (built with the SHOULD notification work).
  END IF;
END;
```

Add a **validation** on `P6_ASSIGNED_TO` — `[Left ▸ Processing]` create a Validation, set
`[Right ▸ Validation ▸ Type]` = *Item is NOT NULL* against `P6_ASSIGNED_TO`, with
`[Right ▸ Error ▸ Error Message]` = "Select an eligible agent" — so an empty LOV blocks submit
instead of a NULL assignment.

---

## Step 7: Close Dialog After Submit

`[Left ▸ Processing]` add a Branch with `[Right ▸ Behavior ▸ Type]` = *Close Dialog* → refresh the
parent detail page (page 5). Footer buttons come from `[Gallery ▸ Buttons]` dragged onto the dialog
footer region in `[Central ▸ Layout]` (match the mockup): a **Cancel** button
(`[Right ▸ Behavior ▸ Action]` = Redirect back to `05-ticket-detail.html` / page 5) and a primary
**&#128100; Assign** submit button (`[Right ▸ Behavior ▸ Action]` = Submit Page).

---

## Step 8: Test It

| Test | Expected |
|------|----------|
| As Anna (Client User) | LOV shows only L1 agents on the ticket's project, as `Name [L1] · N open` |
| On a GLBX-CRM ticket as client | LOV empty (no L1 agent) — null message, validation blocks submit |
| As Mike (Agent), reassign his ticket | LOV shows same-or-higher tier agents; history logs `REASSIGN` |
| Assign a `New` ticket | Status flips to `Assigned`, history logs `ASSIGN` + `STATUS_CHANGE` |
| Turn the email switch off | No mail; assignment still succeeds |
| Forge `P6_ASSIGNED_TO` with wrong-tier agent | Process rejects (`Agent not eligible`) |
| Forge `P6_TICKET_ID` with a foreign ticket | Before-Header fetch / write guard errors out |

---

## Isolation Checklist

- [ ] Context fetch and write guard both go through `V_MY_TICKETS` — never base `TICKETS` for reads
- [ ] LOV and the process validation **both** enforce the tier matrix (never trust the posted value)
- [ ] Forged agent value rejected by process validation (`-20021`)
- [ ] Forged / foreign ticket ID → Before-Header or write-guard error (`-20020`)
- [ ] Mike gets different reassign options per project (tier is per `AGENT_PROJECTS` mapping)
- [ ] History rows use real columns (`USER_ID`/`ACTION`/`CREATED_AT`) and valid `ACTION` values

---

**Next:** move to `07-add-comment.md`.
