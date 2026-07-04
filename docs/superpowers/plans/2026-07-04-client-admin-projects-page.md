# Reusable Projects Page (Client Admin) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** The System Admin's Projects list (page 11) and Project Detail hub (page 19) also render for the Client Admin — company-scoped, read-only except invitations — with a new always-present **Access** tab replacing the Restricted-only Invitations tab; mockup page 18 is deleted.

**Architecture:** All changes live in the single-file renderer `docs/mockups/assets/app.js` (vanilla ES5, string-built HTML, `DB` in localStorage). Role gating is done inside each render function via `isAdmin(u)` / `isClientAdmin(u)`. No new files; one HTML shell deleted.

**Tech Stack:** Vanilla JS mockup (no framework, no test harness — verification is via browser). Spec: `docs/superpowers/specs/2026-07-04-client-admin-projects-page-design.md`.

## Global Constraints

- Mockup only — no APEX/SQL changes.
- No test framework exists in `docs/mockups`; each task verifies by loading the page in a browser (Playwright MCP or manual) and checking rendered DOM.
- Keep existing audit events `INVITE` / `REVOKE` — no new event types.
- ES5 style (`var`, string concat) to match the file.
- `/sync-docs` stays deferred — do NOT touch brief/HTML/XLSX/PPTX.
- Demo login password is `demo`; a Client Admin seed account exists in the Acme tab of `01-login.html` (pick from the login page's grouped list).

---

### Task 1: Client Admin nav points at the shared Projects page

**Files:**
- Modify: `docs/mockups/assets/app.js:531-533` (navModel)

**Interfaces:**
- Produces: Client Admin nav item `{ key: 'projects', href: '11-projects.html' }` — Task 2 relies on `renderShell(u, 'projects', …)` highlighting it.

- [ ] **Step 1: Replace the Project Invitations nav item**

In `navModel`, replace:

```js
    if (isClientAdmin(u)) {
      items.push({ key: 'user-projects', label: 'Project Invitations', icon: '&#9993;&#65039;', href: '18-user-projects.html', section: 'Administration' });
    }
```

with:

```js
    if (isClientAdmin(u)) {
      items.push({ key: 'projects', label: 'Projects', icon: '&#128194;', href: '11-projects.html', section: 'Administration' });
    }
```

- [ ] **Step 2: Verify in browser**

Open `docs/mockups/01-login.html`, sign in as a Client Admin (Acme group, password `demo`). Expected: sidebar shows **Projects** (📂) under Administration; no "Project Invitations" item.

- [ ] **Step 3: Commit**

```bash
git add docs/mockups/assets/app.js
git commit -m "feat(mockups): client admin nav points at shared Projects page"
```

### Task 2: Role-aware Projects list (page 11)

**Files:**
- Modify: `docs/mockups/assets/app.js:1362-1405` (`renderProjects`)

**Interfaces:**
- Consumes: nav key `projects` from Task 1.
- Produces: Client Admin row action **View** linking to `19-project-detail.html?id=<pid>` — Task 3 must accept Client Admin on that page.

- [ ] **Step 1: Rewrite `renderProjects` with role gating**

Replace the whole function with:

```js
  function renderProjects(u) {
    if (!isAdmin(u) && !isClientAdmin(u)) { renderShell(u, 'home', notFound('System Admin or Client Admin only.'), ''); return; }
    var admin = isAdmin(u);
    var allProjects = (DB.projects || []).filter(function (p) { return admin || p.companyId === u.companyId; });
    var companySelect = '<select id="proj-company-filter" class="ig-filter-select" onchange="sd.filterProjectsByCompany(this.value)">' +
      '<option value="all">All Companies</option>' +
      DB.companies.filter(function (c) { return c.status === 'Active'; }).map(function (c) {
        var count = allProjects.filter(function (p) { return p.companyId === c.id; }).length;
        return '<option value="' + c.id + '">' + esc(c.name) + ' (' + count + ')</option>';
      }).join('') + '</select>';

    var rows = allProjects.map(function (p) {
      var c = company(p.companyId);
      var tk = DB.tickets.filter(function (t) { return t.projectId === p.id; }).length;
      var agCount = (DB.agentProjects || []).filter(function (ap) { return ap.projectId === p.id; }).length;
      var statusClass = p.isActive ? 'tag-active' : 'tag-inactive';
      var visBadge = (p.visibility || 'OPEN') === 'RESTRICTED'
        ? '<span class="tag-inactive" title="Invitation-only (decision Q)">&#128274; Restricted</span>'
        : '<span class="tag-active" title="Visible to the whole company">&#127758; Open</span>';
      var actions = admin
        ? '<a class="btn btn-sm btn-primary" href="19-project-detail.html?id=' + p.id + '">&#9881; Manage</a> ' +
          '<button class="btn btn-sm" onclick="sd.showEditProject(\'' + p.id + '\')">&#9998; Edit</button>'
        : '<a class="btn btn-sm btn-primary" href="19-project-detail.html?id=' + p.id + '">&#128065; View</a>';
      return '<tr data-proj-company="' + esc(p.companyId) + '"><td><span class="ig-row-check"></span></td>' +
        '<td><b>' + esc(p.projectName) + '</b></td><td>' + esc(p.projectKey) + '</td>' +
        (admin ? '<td>' + esc(c.name) + '</td>' : '') +
        '<td class="muted" style="font-size:12px;">' + esc(p.description || '') + '</td>' +
        '<td>' + visBadge + '</td>' +
        '<td><span class="' + statusClass + '">&#9679; ' + (p.isActive ? 'Active' : 'Inactive') + '</span></td>' +
        '<td>' + tk + '</td><td>' + agCount + teamCoverageBadges(p.id) + '</td>' +
        '<td>' + actions + '</td></tr>';
    }).join('');
    if (!rows) rows = '<tr><td colspan="' + (admin ? 10 : 9) + '" class="muted">No projects yet.</td></tr>';
    var html = pageBar('Administration / Projects', 'Projects', '') +
      '<div class="content"><div class="card" style="overflow:hidden;" id="ig-projects-wrap">' +
      '<div class="ig-toolbar">' +
        (admin ? '<button class="ir-btn primary" onclick="sd.showAddProject()">+ Add Row</button>' : '') +
        '<div class="ir-search">&#128270; <input placeholder="Search…" oninput="sd.igSearch(\'ig-projects\')"></div>' +
        (admin ? '<div style="margin-left:8px;display:flex;align-items:center;gap:6px;"><label style="font-size:12px;white-space:nowrap;">Company:</label>' + companySelect + '</div>' : '') +
        '<div class="ir-actions" style="margin-left:auto;">' +
          '<button class="ir-btn">Actions &#9662;</button>' +
          '<span class="ir-count" id="projects-row-count">' + allProjects.length + ' rows</span>' +
        '</div>' +
      '</div>' +
      '<table class="t ig-table" id="ig-projects"><thead><tr><th style="width:30px;"></th><th class="sortable">Project Name</th><th class="sortable">Key</th>' +
      (admin ? '<th class="sortable">Company</th>' : '') +
      '<th>Description</th><th class="sortable">Visibility</th><th class="sortable">Status</th><th class="sortable">Tickets</th><th class="sortable">Agents</th><th>Actions</th></tr></thead><tbody>' + rows + '</tbody></table></div>' +
      (admin
        ? '<p class="muted" style="font-size:11.5px;margin-top:12px;">Decision O — PROJECTS layer between COMPANIES and TICKETS. Decision Q — visibility: Open (whole company) vs Restricted (invitation-only). Manage opens the Project Detail hub (team, SLA, categories, access).</p>'
        : '<p class="muted" style="font-size:11.5px;margin-top:12px;">Your company’s service engagements. View opens the project hub — support team, SLA targets and categories are read-only; you manage <b>invitations</b> for Restricted projects there (decision Q).</p>') +
      '</div>';
    renderShell(u, 'projects', html, tenantBanner(u));
  }
```

- [ ] **Step 2: Verify in browser**

As Client Admin: open `11-projects.html`. Expected: only own-company rows; no Company column; no "+ Add Row"; no company filter; row button is **View**. As System Admin: page unchanged (Company column, Add Row, Manage + Edit).

- [ ] **Step 3: Commit**

```bash
git add docs/mockups/assets/app.js
git commit -m "feat(mockups): projects list renders company-scoped read-only view for client admin"
```

### Task 3: Role-aware Project Detail hub (page 19) — gate + read-only tabs

**Files:**
- Modify: `docs/mockups/assets/app.js:1802-1951` (`renderProjectDetail`)

**Interfaces:**
- Consumes: `19-project-detail.html?id=<pid>` links from Task 2.
- Produces: local `var admin = isAdmin(u)` used again by Task 4's Access tab.

- [ ] **Step 1: Open the gate and add the foreign-company guard**

Replace:

```js
    if (!isAdmin(u)) { renderShell(u, 'home', notFound('System Admin only.'), ''); return; }
```

with:

```js
    if (!isAdmin(u) && !isClientAdmin(u)) { renderShell(u, 'home', notFound('System Admin or Client Admin only.'), ''); return; }
    var admin = isAdmin(u);
```

Then after the existing `if (!p) { … return; }` line add the deep-link guard:

```js
    if (!admin && p.companyId !== u.companyId) { renderShell(u, 'projects', notFound('Project "' + esc(pid) + '" not found.'), ''); return; }
```

- [ ] **Step 2: Hide the write actions from Client Admin**

All in `renderProjectDetail`, using the `admin` flag:

Details panel — the Edit button becomes conditional. Replace:

```js
      '<div class="card"><div class="card-hd"><span>Project Details</span>' +
      '<button class="btn btn-sm" style="float:right;margin:-4px 0;" onclick="sd.showEditProject(\'' + pid + '\')">&#9998; Edit</button></div>' +
```

with:

```js
      '<div class="card"><div class="card-hd"><span>Project Details</span>' +
      (admin ? '<button class="btn btn-sm" style="float:right;margin:-4px 0;" onclick="sd.showEditProject(\'' + pid + '\')">&#9998; Edit</button>' : '') + '</div>' +
```

Support Team — remove the Remove column and Add Agent for Client Admin. Replace the `teamRows` row-closing part:

```js
        '<td>' + openN + '</td><td>' + totalProjects + '</td>' +
        '<td><button class="btn btn-sm" style="color:#b91c1c;" onclick="sd.removeTeamAgent(\'' + pid + '\',\'' + a.id + '\')">&#10005; Remove</button></td></tr>';
```

with:

```js
        '<td>' + openN + '</td><td>' + totalProjects + '</td>' +
        (admin ? '<td><button class="btn btn-sm" style="color:#b91c1c;" onclick="sd.removeTeamAgent(\'' + pid + '\',\'' + a.id + '\')">&#10005; Remove</button></td>' : '') + '</tr>';
```

and the empty-state colspan `colspan="6"` with `colspan="' + (admin ? 6 : 5) + '"`. In `teamPanel`, make the Add button and Actions header conditional — replace:

```js
      '<button class="btn btn-sm btn-primary" style="float:right;margin:-4px 0;" onclick="sd.showAddTeamAgent(\'' + pid + '\')">+ Add Agent</button></div>' +
      '<table class="t"><thead><tr><th>Agent</th><th>Tier</th><th>Status</th><th>Open here</th><th>Projects covered</th><th>Actions</th></tr></thead><tbody>' + teamRows + '</tbody></table>' +
      '<p class="muted" style="padding:8px 12px;font-size:11.5px;margin:0;">Flow 3/4 gates: an active project keeps &ge;1 L1 (clients assign L1 only, FR-10); removal is blocked while an agent holds open tickets here.</p>' +
```

with:

```js
      (admin ? '<button class="btn btn-sm btn-primary" style="float:right;margin:-4px 0;" onclick="sd.showAddTeamAgent(\'' + pid + '\')">+ Add Agent</button>' : '') + '</div>' +
      '<table class="t"><thead><tr><th>Agent</th><th>Tier</th><th>Status</th><th>Open here</th><th>Projects covered</th>' + (admin ? '<th>Actions</th>' : '') + '</tr></thead><tbody>' + teamRows + '</tbody></table>' +
      (admin
        ? '<p class="muted" style="padding:8px 12px;font-size:11.5px;margin:0;">Flow 3/4 gates: an active project keeps &ge;1 L1 (clients assign L1 only, FR-10); removal is blocked while an agent holds open tickets here.</p>'
        : '<p class="muted" style="padding:8px 12px;font-size:11.5px;margin:0;">The support team covering this engagement — tiers are per-project (decision M). Read-only: team changes are made by the service provider.</p>') +
```

SLA tab — Client Admin gets the policy name as text, not a selector. Replace:

```js
      '<label style="font-weight:600;font-size:13px;">Assigned policy for <b>' + esc(p.projectKey) + '</b> — ' + esc(c.name || '') + ':</label>' +
      '<select class="ig-filter-select" onchange="sd.changeProjectSlaPolicy(\'' + pid + '\', this.value)">' + polOptions + '</select>' +
      '<a class="btn btn-sm" href="13-sla-targets.html">Manage policies &rarr;</a></div>' +
```

with:

```js
      '<label style="font-weight:600;font-size:13px;">Assigned policy for <b>' + esc(p.projectKey) + '</b> — ' + esc(c.name || '') + ':</label>' +
      (admin
        ? '<select class="ig-filter-select" onchange="sd.changeProjectSlaPolicy(\'' + pid + '\', this.value)">' + polOptions + '</select>' +
          '<a class="btn btn-sm" href="13-sla-targets.html">Manage policies &rarr;</a>'
        : '<b style="font-size:13px;">' + esc((assignedPol || {}).name || '—') + '</b>') + '</div>' +
```

and make the SLA footer note role-aware — replace the `'<p class="muted" style="padding:8px 12px;font-size:11.5px;margin:0;">Targets shown are …'` paragraph with:

```js
      (admin
        ? '<p class="muted" style="padding:8px 12px;font-size:11.5px;margin:0;">Targets shown are the <b>' + esc((assignedPol || {}).name || '—') + '</b> policy&rsquo;s — edit them on the SLA Policies page (affects every project on that policy). New tickets stamp their due date from the policy at creation; existing tickets keep their stamped dates.</p>'
        : '<p class="muted" style="padding:8px 12px;font-size:11.5px;margin:0;">Your contracted response/resolution targets per severity (FR-23). Tickets stamp their due date from these at creation.</p>') +
```

Categories tab — hide the add button and per-row Edit. Replace in `catRows` (own categories):

```js
        '<td><button class="btn btn-sm" onclick="sd.showEditCategory(\'' + x.id + '\')">&#9998; Edit</button></td></tr>';
```

with:

```js
        '<td>' + (admin ? '<button class="btn btn-sm" onclick="sd.showEditCategory(\'' + x.id + '\')">&#9998; Edit</button>' : '<span class="muted" style="font-size:11px;">read-only</span>') + '</td></tr>';
```

and in `catsPanel` replace:

```js
      '<button class="btn btn-sm btn-primary" style="float:right;margin:-4px 0;" onclick="sd.showAddCategoryPD(\'' + pid + '\')">+ Add Project Category</button></div>' +
```

with:

```js
      (admin ? '<button class="btn btn-sm btn-primary" style="float:right;margin:-4px 0;" onclick="sd.showAddCategoryPD(\'' + pid + '\')">+ Add Project Category</button>' : '') + '</div>' +
```

Page bar + footer — replace the `pageBar('Administration / Projects / …')` breadcrumb string with `(admin ? 'Administration' : 'My Company') + ' / Projects / ' + esc(p.projectName)` and the closing footer `<p>` with:

```js
      (admin
        ? '<p class="muted" style="font-size:11.5px;margin-top:12px;">Page 19 &mdash; Project-centric admin hub (admin-console spec 2026-07-03). Flat pages browse; this hub configures: team (Flows 3/4), SLA (FR-23), categories (hybrid), access (decision Q).</p>'
        : '<p class="muted" style="font-size:11.5px;margin-top:12px;">Page 19 &mdash; same hub, Client Admin view (spec 2026-07-04): team/SLA/categories read-only; you manage invitations on the Access tab (decision Q).</p>') +
```

- [ ] **Step 3: Verify in browser**

As Client Admin: View a project → no Edit/Add Agent/Remove/policy selector/Add Category buttons; all data visible. Deep-link `19-project-detail.html?id=<other company's pid>` → "not found" shell. As System Admin: hub unchanged.

- [ ] **Step 4: Commit**

```bash
git add docs/mockups/assets/app.js
git commit -m "feat(mockups): project detail hub opens read-only for client admin with company guard"
```

### Task 4: Access tab on every project, both roles

**Files:**
- Modify: `docs/mockups/assets/app.js` — `renderProjectDetail` tabs/panel (1810-1843, 1924-1943) and handlers `doInvitePD` (3094), `revokeInvitePD` (3106)

**Interfaces:**
- Consumes: `admin` flag from Task 3; existing `sd.showInvitePD/doInvitePD/revokeInvitePD` handlers.
- Produces: tab key `access` (replaces `invites`) stored in `window._projectDetailTab`.

- [ ] **Step 1: Make the tab unconditional and rename it**

Replace:

```js
    var activeTab = window._projectDetailTab || 'details';
    if (activeTab === 'invites' && !isRestricted) activeTab = 'details';
```

with:

```js
    var activeTab = window._projectDetailTab || 'details';
    if (activeTab === 'invites') activeTab = 'access';
```

In the tab strip, replace:

```js
      (isRestricted ? '<button class="cd-tab' + (activeTab === 'invites' ? ' cd-tab-active' : '') + '" data-tab="invites" onclick="sd.projectTab(\'invites\')">&#9993;&#65039; Invitations</button>' : '') +
```

with:

```js
      '<button class="cd-tab' + (activeTab === 'access' ? ' cd-tab-active' : '') + '" data-tab="access" onclick="sd.projectTab(\'access\')">&#128101; Access</button>' +
```

- [ ] **Step 2: Replace the invitations panel with the Access panel**

Replace the whole `--- Invitations tab (Restricted only) ---` block (the `var invitesPanel = ''; if (isRestricted) { … }` section) with:

```js
    // --- Access tab (decision Q, spec 2026-07-04): who can see this project ---
    var accessPanel;
    if (isRestricted) {
      var invRows = invited.map(function (r) {
        var x = user(r.userId);
        if (!x) return '';
        var dept = department(x.departmentId);
        return '<tr><td><span class="avatar-sm">' + initials(x.name) + '</span> <b>' + esc(x.name) + '</b></td><td>' + esc(x.email) + '</td>' +
          '<td>' + (dept.name ? esc(dept.name) : '<span class="muted">—</span>') + '</td>' +
          '<td><button class="btn btn-sm" style="color:#b91c1c;" onclick="sd.revokeInvitePD(\'' + pid + '\',\'' + x.id + '\')">&#10005; Revoke</button></td></tr>';
      }).join('');
      if (!invRows) invRows = '<tr><td colspan="4" class="muted">Nobody invited yet — this project is invisible to all ' + esc(c.name || '') + ' users.</td></tr>';
      accessPanel = '<div class="cd-panel" data-panel="access"' + (activeTab !== 'access' ? ' style="display:none;"' : '') + '>' +
        '<div class="card" style="overflow:hidden;">' +
        '<div class="card-hd"><span>&#128274; Restricted — invited users only (USER_PROJECTS, decision Q)</span>' +
        '<button class="btn btn-sm btn-primary" style="float:right;margin:-4px 0;" onclick="sd.showInvitePD(\'' + pid + '\')">+ Invite User</button></div>' +
        '<table class="t"><thead><tr><th>User</th><th>Email</th><th>Department</th><th>Actions</th></tr></thead><tbody>' + invRows + '</tbody></table>' +
        '<p class="muted" style="padding:8px 12px;font-size:11.5px;margin:0;">Only invited users see this Restricted project. ' + (admin ? 'Flip the project to Open (Details &rarr; Edit) at go-live — no per-user cleanup needed.' : 'Ask the service provider to flip it to Open at go-live — no per-user cleanup needed.') + '</p>' +
        '</div></div>';
    } else {
      var roster = DB.users.filter(function (x) { return x.companyId === p.companyId && x.status === 'Active'; });
      var rosterRows = roster.map(function (x) {
        var dept = department(x.departmentId);
        return '<tr><td><span class="avatar-sm">' + initials(x.name) + '</span> <b>' + esc(x.name) + '</b></td><td>' + esc(x.email) + '</td>' +
          '<td><span class="role-pill">' + esc(x.role) + '</span></td>' +
          '<td>' + (dept.name ? esc(dept.name) : '<span class="muted">—</span>') + '</td></tr>';
      }).join('');
      if (!rosterRows) rosterRows = '<tr><td colspan="4" class="muted">No active users at ' + esc(c.name || '') + '.</td></tr>';
      accessPanel = '<div class="cd-panel" data-panel="access"' + (activeTab !== 'access' ? ' style="display:none;"' : '') + '>' +
        '<div class="card" style="overflow:hidden;">' +
        '<div class="card-hd">&#127758; Open — visible to everyone at ' + esc(c.name || '') + ' (' + roster.length + ' users)</div>' +
        '<table class="t"><thead><tr><th>User</th><th>Email</th><th>Landing Role</th><th>Department</th></tr></thead><tbody>' + rosterRows + '</tbody></table>' +
        '<p class="muted" style="padding:8px 12px;font-size:11.5px;margin:0;">Open projects need no invitations (decision Q) — every active ' + esc(c.name || '') + ' user sees this project automatically. Read-only roster.</p>' +
        '</div></div>';
    }
```

In the final `html` assembly, replace `invitesPanel` with `accessPanel`. Also update the Details-panel Restricted note text `…except invited users (Invitations tab)…` → `…except invited users (Access tab)…`.

- [ ] **Step 3: Point the invite/revoke handlers at the new tab key**

In `doInvitePD` and `revokeInvitePD`, replace both occurrences of:

```js
      window._projectDetailTab = 'invites';
```

with:

```js
      window._projectDetailTab = 'access';
```

- [ ] **Step 4: Verify in browser**

Open a project hub as each role. Open project → Access tab shows read-only roster (both roles, no buttons). Restricted project → Access tab shows invite/revoke; as Client Admin invite a user (toast + audit event), revoke it. Stats card "Invited Users" still appears only on Restricted.

- [ ] **Step 5: Commit**

```bash
git add docs/mockups/assets/app.js
git commit -m "feat(mockups): always-on Access tab replaces restricted-only Invitations tab"
```

### Task 5: Delete page 18 and its dead code

**Files:**
- Delete: `docs/mockups/18-user-projects.html`
- Modify: `docs/mockups/assets/app.js` — remove `renderUserProjects` (1407-1449), handlers `showAddUserProject`/`doAddUserProject`/`removeUserProject` (2780-2825), router case (3350)

**Interfaces:**
- Consumes: nothing — Tasks 1-4 removed every caller/link.

- [ ] **Step 1: Remove dead code**

Delete the whole `renderUserProjects` function (comment block `/* ---------- page: PROJECT INVITATIONS (Page 18) ---------- */` through its closing brace). Delete the three handlers from the `sd` object (the block starting `// User-Project access CRUD (Client Admin)` through the end of `removeUserProject`). Delete the router line:

```js
      case 'user-projects': renderUserProjects(u); break;
```

- [ ] **Step 2: Verify no dangling references**

Run: `grep -n "renderUserProjects\|user-projects\|showAddUserProject\|removeUserProject\|doAddUserProject" docs/mockups/assets/app.js docs/mockups/*.html`
Expected: no matches (or only `18-user-projects.html` itself, which is deleted next).

- [ ] **Step 3: Delete the shell**

```bash
git rm docs/mockups/18-user-projects.html
```

- [ ] **Step 4: Full-flow browser verification**

Reset demo (header button). As Client Admin: nav → Projects → View a Restricted project → Access tab → invite + revoke. As System Admin: Projects unchanged, hub has Access tab on Open projects. No console errors on any visited page.

- [ ] **Step 5: Commit**

```bash
git add -A docs/mockups
git commit -m "feat(mockups): retire page 18 — invitations live in the shared project hub"
```
