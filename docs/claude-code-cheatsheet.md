# Claude Code Cheat Sheet — one page, no jargon

You don't need to be a developer. Claude Code is an AI assistant you talk to in plain English.
It already knows this project (the brief, the database design, the APEX rulebook, and the full
official APEX docs). You ask, it explains or builds, and it asks your **yes/no** before changing
any file.

---

## Start it (30 seconds)

1. Open a terminal **in the project folder** (`...\2026\APEX`).
2. Type `claude` and press Enter.
3. Type what you want. Press Enter. Read the reply.

Nothing changes on disk until you approve it. Unsure? Ask **"what would this change?"** first.

---

## Say this → to get this

| Type this (reword freely) | What you get |
|---|---|
| "Explain what we're building in simple terms." | A plain-English overview |
| "What are the 4 roles and what can each do?" | The access model, simply |
| "Walk me through a ticket from raised to closed." | The workflow, step by step |
| "Create the database tables from the brief." | The APEX tables built |
| "Build the login page with the 4 roles." | A working login page |
| "Make sure a client only sees their own tickets." | Tenant-safe ticket list |
| "Add the dashboard with counts and avg resolution time." | The dashboard |
| "Add email when a ticket is assigned." | Assignment notifications |
| "Can APEX do file attachments? How?" | A real answer from the docs (no guessing) |
| "Make the dashboard look more professional." | Nicer colours, spacing, tiles |
| "I changed the brief — update the other docs." (or `/sync-docs`) | Slides + sheet + HTML kept in sync |

---

## Before EVERY demo — the one check that matters

Type: **"Check this page for tenant-isolation leaks — can one client see another client's tickets?"**

A client seeing another client's tickets is the single mistake that sinks the project. Always run
this on any page, report, or chart that shows ticket data before you show it to anyone.

---

## Three good habits

1. **Small steps.** "Build the tickets table" beats "build the whole app." Easier to check.
2. **Ask, don't assume.** "Can APEX do X?" — it looks up the real docs instead of guessing.
3. **Read the reply.** It tells you what it did and why. Confused? Ask "why that way?"

---

## Helpers (Claude picks these for you — no need to name them)

- **apex-expert** — answers "how/can APEX do X" from the real docs.
- **tenant-isolation-auditor** — the safety inspector (run before demos).
- **apex-ui-stylist** — makes pages look good.
- **`/sync-docs`** — one command keeps all project documents agreeing.

---

More detail: **[../README.md](../README.md)** · The design: **[ticketing-system-brief.md](ticketing-system-brief.md)**
