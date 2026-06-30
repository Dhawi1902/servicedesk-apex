# Service Desk Ticketing System — Oracle APEX 26.1

A multi-tenant **service desk / ticketing system** built on Oracle APEX — a self-hosted
alternative to Jira Service Management. This repo is both the **project workspace** and a
**clone-and-go APEX toolkit**: it ships an offline APEX 26.1 API reference and a Claude
Code agent + skill so anyone who clones it can start building with zero setup.

## What's in here

Two things live side by side:

1. **The hackathon project** — a multi-tenant support desk where client companies raise
   tickets and our agents triage, assign, and resolve them, with strict tenant isolation.
   ➡️ Start at **[docs/ticketing-system-brief.md](docs/ticketing-system-brief.md)** (the source-of-truth design doc).
2. **An offline Oracle APEX 26.1 API reference** — a faithful local copy of the official
   docs so APEX capabilities can be **looked up, not assumed**.
   ➡️ Start at **[CAPABILITIES.md](CAPABILITIES.md)** (task-oriented map: "to do X, use API Y").

## Using Claude Code in this workspace (plain-English guide)

**You do not need to be a developer to use this.** Claude Code is an AI assistant that lives
in your terminal. You open this folder in it, type what you want in normal English, and it
reads the project, answers questions, writes the APEX code, and updates the docs for you.
It already knows this project — the brief, the database design, the APEX rulebook, and the
4 000+ pages of official APEX documentation are all loaded automatically.

### How to start (one time)

1. Install Claude Code (ask whoever set up the team, or see <https://claude.com/claude-code>).
2. Open a terminal **in this folder** (`...\2026\APEX`).
3. Type `claude` and press Enter.
4. Now just talk to it. Type a question or a request, press Enter, read the reply.

> Tip: when it suggests a change to a file, it asks for your **yes/no** before doing anything.
> Nothing happens to your files unless you approve it. When in doubt, just ask "what would
> this change?" first.

### What you can ask it to do

Copy any of these, change the wording to fit, and paste it in. You don't have to phrase it
perfectly — plain English is fine.

**Understand the project (great for non-devs / day one)**
- "Explain what we're building in simple terms."
- "What are the 4 user roles and what can each one do?"
- "Walk me through what happens from when a client raises a ticket to when it's closed."
- "Show me the page mockups and explain how a support agent uses them."

**Build the actual APEX app**
- "Create the database tables for the ticketing system from the brief."
- "Build the login page with the 4 roles."
- "Make the ticket list page so a client only ever sees their own company's tickets."
- "Add the dashboard with ticket counts and average resolution time."
- "Add email notification when a ticket is assigned to an agent."

**Check it's safe and correct (do this before any demo)**
- "Check this page for tenant-isolation leaks — can one client see another client's tickets?"
- "Review the SQL I just wrote for security problems."
- "Can APEX do file attachments on a ticket? How?" *(it looks up the real docs, never guesses)*

**Polish the look**
- "Make the dashboard tiles look more professional with our brand colours."
- "Improve the spacing and layout on the ticket detail page."

**Keep the documents in sync**
- "I changed a decision in the brief — update all the other docs to match." (or just type `/sync-docs`)

### Built-in helpers (Claude picks these for you automatically)

You don't have to call these by name — Claude reaches for the right one. But it helps to know
they exist:

| Helper | What it's for |
|---|---|
| **apex-expert** | Any "how do I do X in APEX / can APEX do X" question — answers from the real docs, not guesswork. |
| **tenant-isolation-auditor** | The safety inspector. Hunts for ways one client could see another's data. Run before every demo. |
| **apex-ui-stylist** | Makes pages look good — colours, spacing, dashboard tiles, branded theme. |
| **`/sync-docs`** | One command updates the brief, slides, spreadsheet, and HTML together so they never disagree. |

### Good habits

- **Ask before you assume.** "Can APEX do this?" is always worth asking — it checks the docs.
- **Work in small steps.** "Build the tickets table" beats "build the whole app" — easier to review.
- **Always review before a demo.** Ask the isolation auditor to check client-facing pages; a
  client seeing another client's tickets is the one mistake that sinks the project.
- **Read the reply.** Claude explains what it did and why. If something's unclear, just ask
  "why did you do it that way?".

### Where to read more

New to the project? Read **[docs/ticketing-system-brief.md](docs/ticketing-system-brief.md)**
(the design), skim `docs/`, then browse the clickable mockups in `docs/mockups/`. The live
wireframe demo is at **apex-demo.dhawilabs.com**. For the full rulebook Claude follows, see
**[CLAUDE.md](CLAUDE.md)**.

## Layout

```
servicedesk-apex/
  CLAUDE.md               ← guidance for working in this repo (read if using Claude Code)
  CAPABILITIES.md         ← APEX capability map (read first for API lookups)
  docs/                   ← project design docs, requirements, and page mockups
  reference/
    plsql/        64 APEX_* packages (server-side PL/SQL) — 1,304 procs/functions
    javascript/   23 namespaces + 13 interfaces + 9 widgets (client-side JS)
    apexlang/     app component-model reference (single-page doc)
  .claude/
    agents/       the apex-expert subagent
    skills/apex/  the APEXlang generation skill
  tools/          crawl + conversion scripts that (re)build reference/
```

| API set | Index |
|---|---|
| PL/SQL API Reference | [reference/plsql/README.md](reference/plsql/README.md) |
| JavaScript API Reference | [reference/javascript/README.md](reference/javascript/README.md) |
| APEXlang API Reference | [reference/apexlang/README.md](reference/apexlang/README.md) |

## Notes for use

- This is **26.1**. Confirm the running instance's version before relying on newer APIs.
- Most PL/SQL APIs need an APEX session/workspace context. Outside a session, call
  `APEX_UTIL.SET_WORKSPACE` / `APEX_UTIL.SET_SECURITY_GROUP_ID` first.
- Relative links in the docs are rewritten to absolute Oracle URLs, so they stay valid.

## Regenerating the reference

The reference is built by the scripts in `tools/` (require Python 3 + pandoc). They crawl
the official Oracle docs and write into `reference/`. The raw-HTML crawl cache (`_backup/`)
is **not committed** — it's regenerated locally on the first crawl.

- `tools/crawl2.py`         — concurrent crawler for the PL/SQL book → `_backup/raw_html/` + manifest
- `tools/build_md.py`       — builds `reference/plsql/`
- `tools/build_js_apxln.py` — downloads + builds `reference/javascript/` and `reference/apexlang/`

Source landing page: <https://docs.oracle.com/en/database/oracle/apex/26.1/api-references.html>
