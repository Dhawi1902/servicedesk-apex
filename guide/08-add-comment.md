# Page 8 — Add Comment (MUST)

> Mockup: `docs/mockups/08-add-comment.html` · APEX type: Form, **Modal Dialog** · All roles (internal toggle gated)

## Purpose

Add a comment to a ticket. Small page, three important behaviors: the internal-note flag,
first-response tracking, and comment notifications.

## 1. Items

| Item | Notes |
|------|-------|
| Comment text | required textarea |
| **Internal note** switch | visible only to staff: `:APP_ROLE IN ('SUPPORT_AGENT','SYSTEM_ADMIN')`. Internal notes are invisible to client roles — enforced by `V_MY_COMMENTS`, not by the UI |

## 2. Create process

1. **Write-guard:** `SELECT COUNT(*) FROM V_MY_TICKETS WHERE TICKET_ID = :P8_TICKET_ID` > 0.
2. Force `is_internal = 'N'` server-side when the caller is a client role (never trust the switch).
3. Insert into `TICKET_COMMENTS` with `author_id = NV('APP_USER_ID')`.
4. **First response (FR-31):** if the author is an agent, the comment is public, and
   `TICKETS.first_response_at` is null → stamp it `SYSDATE`.
5. Touch `TICKETS.updated_at` (feeds the queue's Last Activity column).
6. Insert `TICKET_HISTORY` row ("Comment added").
7. **Comment notification (FR-38, SHOULD):** `APEX_MAIL` to the other party — requester when an
   agent comments (public only!), assignee when a client comments. Never email internal notes.

## 3. Display

The comments themselves render on page 5 via `V_MY_COMMENTS`. Escape comment text with
`APEX_ESCAPE.HTML` on any custom render path (comment cards / HTML expressions) — comments are
the most user-controlled string in the app.

## Isolation checklist

- [ ] Client roles cannot set `is_internal` (item hidden AND value forced server-side).
- [ ] Write-guard blocks commenting on foreign tickets by forged ID.
- [ ] Notification for internal notes goes to staff only — never to the client.
- [ ] Comment text is escaped everywhere it renders.
