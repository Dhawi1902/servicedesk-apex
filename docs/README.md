# Project Docs — Service Desk Ticketing System

Planning and presentation artifacts for the APEX hackathon. All four say the same thing in
different formats — keep them in sync when decisions change.

| File | Format | Use it for |
|---|---|---|
| [`ticketing-system-brief.md`](ticketing-system-brief.md) | Markdown | **Source of truth.** Full design: requirements → workflow → database → 3-week plan → open decisions. |
| [`ticketing-system.html`](ticketing-system.html) | Interactive HTML | **Share / screen-share.** Visual, self-contained (works offline); filterable requirements, charts, timeline. Open by double-clicking. |
| `Ticketing-Kickoff.pptx` | PowerPoint | **Present.** 12-slide kickoff deck. |
| `Ticketing-Requirements.xlsx` | Excel | **Track live.** 25 requirements with priority/status dropdowns + auto-filter; tabs for scope, roles, and the A–F decisions. |

## Meeting flow
1. Present the deck (`.pptx`) — it ends on the six decisions (A–F).
2. Capture answers live in the Excel **Decisions** tab.
3. Use the Excel **Requirements** tab for the scope conversation; assign **Owner** as work is split.

## After decisions are made
Update the brief, HTML, deck, and Excel together. Then build the **Week 1** plan
(workspace objects → tables → auth/roles → first end-to-end ticket slice).

> Design reasoning and decision history are summarized in the project memory
> (`apex-ticketing-project`) and in [`../CLAUDE.md`](../CLAUDE.md).
