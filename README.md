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

## For teammates: getting started

Open this folder in **Claude Code** and the bundled tooling loads automatically:

- **`apex-expert` agent** (`.claude/agents/`) — senior APEX engineer that grounds every
  answer in the offline reference. Use it for any APEX SQL/PL-SQL, JS, or "can APEX do X?" question.
- **`apex` skill** (`.claude/skills/apex/`) — APEXlang low-code generation workflow for
  scaffolding apps/pages.

New to the project? Read the brief, skim `docs/`, then browse the mockups in `docs/mockups/`.
The live wireframe demo is published separately at **apex-demo.dhawilabs.com**.

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
