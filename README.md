# Oracle APEX 26.1 — API Reference (offline)

Local markdown copy of the official Oracle APEX 26.1 API documentation, converted
faithfully from source HTML (signatures, parameter tables, and examples preserved).
This exists so APEX capabilities can be **looked up, not assumed**.

Source landing page: <https://docs.oracle.com/en/database/oracle/apex/26.1/api-references.html>

## Start here

➡️ **[CAPABILITIES.md](CAPABILITIES.md)** — task-oriented map ("to do X, use API Y").
Use this first to find the right API, then open its file for full detail.

## Layout

```
APEX/
  CAPABILITIES.md         ← capability map (read this first)
  reference/
    plsql/        64 APEX_* packages (server-side PL/SQL) — 1,304 procs/functions
    javascript/   23 namespaces + 13 interfaces + 9 widgets (client-side JS)
    apexlang/     app component-model reference (single-page doc)
  _backup/        source HTML caches + crawl manifest/log (for rebuilds; do not edit)
  tools/          crawl + conversion scripts
```

| Set | Index |
|---|---|
| PL/SQL API Reference | [reference/plsql/README.md](reference/plsql/README.md) |
| JavaScript API Reference | [reference/javascript/README.md](reference/javascript/README.md) |
| APEXlang API Reference | [reference/apexlang/README.md](reference/apexlang/README.md) |

## Notes for use

- Most PL/SQL APIs need an APEX session/workspace context. Outside a session, call
  `APEX_UTIL.SET_WORKSPACE` / `APEX_UTIL.SET_SECURITY_GROUP_ID` first.
- Relative links in the docs are rewritten to absolute Oracle URLs, so they stay valid.
- This is **26.1**. Confirm the running instance's version before relying on newer APIs.

## Regenerating

Raw HTML is cached under `_backup/`. Scripts in `tools/` (require Python 3 + pandoc):

- `tools/crawl2.py`         — concurrent crawler for the PL/SQL book → `_backup/raw_html/` + `_backup/manifest.json`
- `tools/build_md.py`       — builds `reference/plsql/`
- `tools/build_js_apxln.py` — downloads + builds `reference/javascript/` and `reference/apexlang/`
