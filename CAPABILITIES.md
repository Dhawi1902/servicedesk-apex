# Oracle APEX 26.1 — Capability Map

**Purpose:** a task-oriented index of what APEX 26.1 can actually do, so you look up
the real API instead of assuming one exists (or assuming one doesn't). Every row
links to the full reference. PL/SQL = server-side, JS = client-side (browser).

- Full PL/SQL package list: [reference/plsql/README.md](reference/plsql/README.md)
- Full JavaScript API list: [reference/javascript/README.md](reference/javascript/README.md)
- App component model (APEXlang): [reference/apexlang/README.md](reference/apexlang/README.md)

> Note: most PL/SQL APIs require a valid APEX session/workspace context. Outside an
> APEX session, set the workspace first (`APEX_UTIL.SET_WORKSPACE` /
> `APEX_UTIL.SET_SECURITY_GROUP_ID`).

---

## Authentication, authorization & security

| To… | Use | Ref |
|---|---|---|
| Manage application access control roles (add/remove/replace user roles) | `APEX_ACL` | [plsql](reference/plsql/002-APEX_ACL.md) |
| Build/login through authentication plug-ins | `APEX_AUTHENTICATION` | [plsql](reference/plsql/010-APEX_AUTHENTICATION.md) |
| Check / query access rights (authorization schemes) | `APEX_AUTHORIZATION` | [plsql](reference/plsql/011-APEX_AUTHORIZATION.md) |
| Custom authentication + session management | `APEX_CUSTOM_AUTH` | [plsql](reference/plsql/018-APEX_CUSTOM_AUTH.md) |
| Store/retrieve credentials (for web services, OAuth, etc.) | `APEX_CREDENTIAL` | [plsql](reference/plsql/016-APEX_CREDENTIAL.md) |
| LDAP authentication / directory lookups | `APEX_LDAP` | [plsql](reference/plsql/042-APEX_LDAP.md) |
| Create/verify JSON Web Tokens (JWT) | `APEX_JWT` | [plsql](reference/plsql/040-APEX_JWT.md) |
| Escape strings to prevent XSS / unsafe output | `APEX_ESCAPE` | [plsql](reference/plsql/027-APEX_ESCAPE.md) |

## Sessions & session state

| To… | Use | Ref |
|---|---|---|
| Configure/create APEX sessions (e.g. for jobs, REST) | `APEX_SESSION` | [plsql](reference/plsql/053-APEX_SESSION.md) |
| Read/assign session state (item values) | `APEX_SESSION_STATE` | [plsql](reference/plsql/054-APEX_SESSION_STATE.md) |
| Get/set session state + many general utilities | `APEX_UTIL` | [plsql](reference/plsql/061-APEX_UTIL.md) |
| Browser-side storage (cookies, session/local storage) | `apex.storage` | [js](reference/javascript/apex.storage.md) |

## Data access, processing & movement

| To… | Use | Ref |
|---|---|---|
| Execute SQL/DML against any data source (the modern abstraction) | `APEX_EXEC` | [plsql](reference/plsql/028-APEX_EXEC.md) |
| Temporarily store rows/columns in session (scratch tables) | `APEX_COLLECTION` | [plsql](reference/plsql/015-APEX_COLLECTION.md) |
| Parse XML / JSON / CSV / XLSX files | `APEX_DATA_PARSER` | [plsql](reference/plsql/022-APEX_DATA_PARSER.md) |
| Export data → PDF, XLSX, HTML, CSV, XML, JSON | `APEX_DATA_EXPORT` | [plsql](reference/plsql/020-APEX_DATA_EXPORT.md) |
| Load data via a data loading definition | `APEX_DATA_LOADING` | [plsql](reference/plsql/019-APEX_DATA_LOADING.md) |
| Migrate data between environments | `APEX_DATA_INSTALL` | [plsql](reference/plsql/021-APEX_DATA_INSTALL.md) |
| Generate synthetic/test data | `APEX_DG_DATA_GEN` | [plsql](reference/plsql/025-APEX_DG_DATA_GEN.md) |
| Sync rows between tables / from REST sources (instant or scheduled) | `APEX_REST_SOURCE_SYNC` | [plsql](reference/plsql/051-APEX_REST_SOURCE_SYNC.md) |
| Use Oracle Locator / Spatial features | `APEX_SPATIAL` | [plsql](reference/plsql/056-APEX_SPATIAL.md) |
| Parse/generate JSON | `APEX_JSON` | [plsql](reference/plsql/039-APEX_JSON.md) |

## Web services & integration

| To… | Use | Ref |
|---|---|---|
| Call REST/SOAP web services from PL/SQL | `APEX_WEB_SERVICE` | [plsql](reference/plsql/062-APEX_WEB_SERVICE.md) |
| Download files over HTTP | `APEX_HTTP` | [plsql](reference/plsql/031-APEX_HTTP.md) |
| Invoke extension applications | `APEX_EXTENSION` | [plsql](reference/plsql/030-APEX_EXTENSION.md) |
| Ajax from the browser back to the APEX server | `apex.server` | [js](reference/javascript/apex.server.md) |

## Email, messaging & notifications

| To… | Use | Ref |
|---|---|---|
| Send email from an application | `APEX_MAIL` | [plsql](reference/plsql/043-APEX_MAIL.md) |
| PWA push notifications (subscribe/send) | `APEX_PWA` (server), `apex.pwa` (client) | [plsql](reference/plsql/049-APEX_PWA.md) · [js](reference/javascript/apex.pwa.md) |
| Show client-side messages / notifications / errors | `apex.message` | [js](reference/javascript/apex.message.md) |

## Strings, text, formatting & files

| To… | Use | Ref |
|---|---|---|
| String split/join, table-of-string types, manipulation | `APEX_STRING`, `APEX_STRING_UTIL` | [plsql](reference/plsql/057-APEX_STRING.md) · [plsql](reference/plsql/058-APEX_STRING_UTIL.md) |
| Convert Markdown → HTML (in the database) | `APEX_MARKDOWN` | [plsql](reference/plsql/044-APEX_MARKDOWN.md) |
| Translate messages / localize text | `APEX_LANG` (server), `apex.lang` (client) | [plsql](reference/plsql/041-APEX_LANG.md) · [js](reference/javascript/apex.lang.md) |
| Format numbers/dates by locale (client) | `apex.locale`, `apex.date` | [js](reference/javascript/apex.locale.md) · [js](reference/javascript/apex.date.md) |
| Generate barcodes (SVG or PNG) | `APEX_BARCODE` | [plsql](reference/plsql/014-APEX_BARCODE.md) |
| Zip / unzip files | `APEX_ZIP` | [plsql](reference/plsql/064-APEX_ZIP.md) |

## UI components (server-side region/page/item APIs)

| To… | Use | Ref |
|---|---|---|
| Handle regions programmatically | `APEX_REGION` (server), `apex.region` (client) | [plsql](reference/plsql/050-APEX_REGION.md) · [js](reference/javascript/apex.region.md) |
| Handle pages | `APEX_PAGE` (server), `apex.page` (client) | [plsql](reference/plsql/045-APEX_PAGE.md) · [js](reference/javascript/apex.page.md) |
| Work with Interactive Grids | `APEX_IG` (server), `interactiveGrid` widget (client) | [plsql](reference/plsql/035-APEX_IG.md) · [js](reference/javascript/interactiveGrid.md) |
| Work with Interactive Reports | `APEX_IR` | [plsql](reference/plsql/036-APEX_IR.md) |
| Add application/global search | `APEX_SEARCH` | [plsql](reference/plsql/052-APEX_SEARCH.md) |
| Work with themes / theme styles | `APEX_THEME` (server), `apex.theme` (client) | [plsql](reference/plsql/059-APEX_THEME.md) · [js](reference/javascript/apex.theme.md) |
| Client-side item access/validation | `apex.item` | [js](reference/javascript/apex.item.md) |
| Dynamic Actions (client) | `apex.da`, `apex.event` | [js](reference/javascript/apex.da.md) · [js](reference/javascript/apex.event.md) |

## Plug-in development

| To… | Use | Ref |
|---|---|---|
| Plug-in interface declarations + helpers | `APEX_PLUGIN`, `APEX_PLUGIN_UTIL` | [plsql](reference/plsql/046-APEX_PLUGIN.md) · [plsql](reference/plsql/047-APEX_PLUGIN_UTIL.md) |
| Emit CSS to HTTP output (plug-ins) | `APEX_CSS` | [plsql](reference/plsql/017-APEX_CSS.md) |
| Emit JavaScript to HTTP output (plug-ins) | `APEX_JAVASCRIPT` | [plsql](reference/plsql/038-APEX_JAVASCRIPT.md) |

## App lifecycle, admin & deployment

| To… | Use | Ref |
|---|---|---|
| Rendering-engine globals (g_request, g_user, item arrays…) | `APEX_APPLICATION` | [plsql](reference/plsql/006-APEX_APPLICATION.md) |
| Modify attributes of installed apps | `APEX_APPLICATION_ADMIN` | [plsql](reference/plsql/007-APEX_APPLICATION_ADMIN.md) |
| Modify attributes during app install | `APEX_APPLICATION_INSTALL` | [plsql](reference/plsql/008-APEX_APPLICATION_INSTALL.md) |
| Manage the APEX runtime instance | `APEX_INSTANCE_ADMIN` | [plsql](reference/plsql/033-APEX_INSTANCE_ADMIN.md) |
| Export app / file / workspace / feedback definitions | `APEX_EXPORT` | [plsql](reference/plsql/029-APEX_EXPORT.md) |
| Read/write application settings (shared component) | `APEX_APP_SETTING` | [plsql](reference/plsql/005-APEX_APP_SETTING.md) |
| Report on DB object dependencies | `APEX_APP_OBJECT_DEPENDENCY` | [plsql](reference/plsql/004-APEX_APP_OBJECT_DEPENDENCY.md) |
| Work with shared components | `APEX_SHARED_COMPONENT` | [plsql](reference/plsql/055-APEX_SHARED_COMPONENT.md) |
| Manage UI defaults (from SQLcl/SQL Developer) | `APEX_UI_DEFAULT_UPDATE` | [plsql](reference/plsql/060-APEX_UI_DEFAULT_UPDATE.md) |

## Workflow, automation & background work

| To… | Use | Ref |
|---|---|---|
| Manage Workflows | `APEX_WORKFLOW` | [plsql](reference/plsql/063-APEX_WORKFLOW.md) |
| Query-triggered automations (monitor data → act) | `APEX_AUTOMATION` | [plsql](reference/plsql/012-APEX_AUTOMATION.md) |
| Human tasks & approvals | `APEX_HUMAN_TASK` | [plsql](reference/plsql/032-APEX_HUMAN_TASK.md) |
| Report/cancel long-running background processes | `APEX_BACKGROUND_PROCESS` | [plsql](reference/plsql/013-APEX_BACKGROUND_PROCESS.md) |

## AI & generative features

| To… | Use | Ref |
|---|---|---|
| Call APEX Generative AI APIs | `APEX_AI` | [plsql](reference/plsql/003-APEX_AI.md) |
| LLM-friendly database metadata descriptions | `APEX_DB_DICTIONARY` | [plsql](reference/plsql/023-APEX_DB_DICTIONARY.md) |

## Debugging, errors & diagnostics

| To… | Use | Ref |
|---|---|---|
| Instrument/log debug messages | `APEX_DEBUG` (server), `apex.debug` (client) | [plsql](reference/plsql/024-APEX_DEBUG.md) · [js](reference/javascript/apex.debug.md) |
| Raise/handle errors, custom error handler | `APEX_ERROR` | [plsql](reference/plsql/026-APEX_ERROR.md) |
| Instance-level debug (administrators) | `APEX_INSTANCE_DEBUG` | [plsql](reference/plsql/034-APEX_INSTANCE_DEBUG.md) |

## Printing & document generation

| To… | Use | Ref |
|---|---|---|
| Invoke print servers / generate templated documents | `APEX_PRINT` | [plsql](reference/plsql/048-APEX_PRINT.md) |
| (also) Export data to PDF/XLSX | `APEX_DATA_EXPORT` | [plsql](reference/plsql/020-APEX_DATA_EXPORT.md) |

## Client-side (JavaScript) — quick orientation

| Area | Namespace(s) |
|---|---|
| Top-level entry point | `apex` |
| Server Ajax | `apex.server` |
| Items / regions / pages | `apex.item`, `apex.region`, `apex.page` |
| Messages / notifications | `apex.message` |
| Navigation (dialogs, popups, redirects) | `apex.navigation` (`.dialog`, `.popup`) |
| Dynamic Actions & events | `apex.da`, `apex.event` |
| Client data models (MVVM, for grids/reports) | `apex.model` |
| Actions facility (commands/shortcuts) | `apex.actions` |
| Utilities / dates / locale / lang | `apex.util` (`.delayLinger`), `apex.date`, `apex.locale`, `apex.lang` |
| Theme / widgets / PWA / debug / storage | `apex.theme`, `apex.widget`, `apex.pwa`, `apex.debug`, `apex.storage` |

Component **interfaces** (e.g. `interactiveGridView`, `model`, `region`, `item`, `mapRegion`)
and **widgets** (`grid`, `interactiveGrid`, `menu`, `treeView`, …) are documented in
[reference/javascript/README.md](reference/javascript/README.md).

## Deprecated / legacy (avoid in new code)

- `APEX_APPROVAL` (Deprecated) → use `APEX_HUMAN_TASK` / `APEX_WORKFLOW`
- `APEX_ITEM` (Legacy) → use declarative items / `apex.item`
