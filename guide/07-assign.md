# Page 7 — Assign / Reassign (MUST)

> Mockup: `docs/mockups/07-assign.html` · APEX type: Form, **Modal Dialog** · All roles, with per-role agent lists

## Purpose

Put an agent on a ticket. The whole page is one LOV + one process — but the LOV rules encode
half the role model, so get them exactly right. **All tier checks evaluate on the ticket's
project** (decision M revised).

## 1. Who may assign, and to whom (decisions A/J/L, FR-26)

| Caller | May assign | Agent LOV |
|--------|-----------|-----------|
| System Admin | any ticket, anyone | all agents mapped to the ticket's project (`AGENT_PROJECTS`), any tier |
| Client Admin | any ticket of their company | agents mapped to the ticket's project, any tier |
| Client User | own-scope tickets | agents whose tier on the ticket's project is **L1** only |
| Support Agent (self-assign) | unassigned tickets on their projects | themselves (decision A — row action on page 4 uses this same process) |
| Support Agent (reassign) | tickets assigned to them | agents on the same project with **same-or-higher tier** than their own (FR-26 escalation) |

## 2. Agent LOV with workload (FR-33)

One LOV query, role-branched, showing open-ticket workload so choosers pick sensibly:

```sql
SELECT u.full_name || ' — ' || ap.tier || ' (' ||
       (SELECT COUNT(*) FROM TICKETS t
         WHERE t.assigned_to = u.user_id
           AND t.status NOT IN ('Resolved','Closed')) || ' open)' AS d,
       u.user_id AS r
  FROM APP_USERS u
  JOIN AGENT_PROJECTS ap ON ap.user_id = u.user_id
 WHERE ap.project_id = (SELECT project_id FROM V_MY_TICKETS WHERE ticket_id = :P7_TICKET_ID)
   AND u.status = 'ACTIVE'
   AND ( :APP_ROLE IN ('SYSTEM_ADMIN','CLIENT_ADMIN')
      OR (:APP_ROLE = 'CLIENT_USER' AND ap.tier = 'L1')
      OR (:APP_ROLE = 'SUPPORT_AGENT' AND ap.tier >= (SELECT my.tier FROM AGENT_PROJECTS my
             WHERE my.user_id = NV('APP_USER_ID') AND my.project_id = ap.project_id)) )
```

(Tier comparison works lexically for 'L1'–'L4'. Note the ticket's project comes via
`V_MY_TICKETS` — a foreign ticket yields an empty LOV.)

## 3. Assignment process

1. **Write-guard:** ticket visible in `V_MY_TICKETS`, else error.
2. **Re-validate the chosen agent** against the same rules as the LOV (LOV ≠ security).
3. Update `TICKETS.assigned_to`; if status is `New`, move to `Assigned`.
4. Insert `TICKET_HISTORY` row ("Assigned to X by Y" / "Reassigned …").
5. **Assignment notification** (FR-21, SHOULD): `APEX_MAIL.SEND` to the agent + push queue.

## Isolation checklist

- [ ] LOV and validation both enforce the tier matrix — test Anna sees only L1-on-that-project agents.
- [ ] Forged `assigned_to` value (valid agent, wrong tier/project) rejected by the process validation.
- [ ] Forged ticket ID → write-guard error, no update.
- [ ] Mike (L1 on Acme, L2 on Globex) gets different reassign options per project — the seed data is built to demo exactly this.
