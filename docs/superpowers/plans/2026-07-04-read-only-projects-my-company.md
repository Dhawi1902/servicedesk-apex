# Read-only Projects + My Company Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Open the Projects list (page 11) and Project Detail hub (page 19) to Support Agents and Client Users read-only with per-role scoping, and give client roles a read-only "My Company" view of the Company Detail hub (page 17).

**Architecture:** All changes in `docs/mockups/assets/app.js` (vanilla ES5, string-built HTML). Scoping uses existing helpers: `agentProjectIds(u)` / `agentCoversProject(uid,pid)` (decision I) and `userAccessibleProjectIds(u)` (decision Q). Write actions stay keyed on `isAdmin` (full) and `isClientAdmin` (invitations only).

**Tech Stack:** Vanilla JS mockup, no test harness — verify via browser (Playwright MCP against `python -m http.server`). Spec: `docs/superpowers/specs/2026-07-04-read-only-projects-and-my-company-design.md`.

## Global Constraints

- Mockup only; ES5 style; no new pages/files.
- Decision Q hard rule: a Client User must never see a Restricted project they're not invited to — not in lists, hubs, counts, or via deep-link.
- Support Agents scope to `AGENT_PROJECTS`; they do NOT get My Company.
- Invite/Revoke stays System Admin + Client Admin (own company) only.
- `/sync-docs` stays deferred — don't touch brief/HTML/XLSX/PPTX.
- Commit only `docs/mockups/assets/app.js` per task (other mockup files carry unrelated uncommitted changes).
- Role helpers (app.js:451-466): `isAdmin` = System Admin, `isAgent` = Support Agent, `isClientAdmin` = Client Admin, `isClient` = Client User OR Client Admin. "Client User only" = `isClient(u) && !isClientAdmin(u)`.

---

### Task 1: Navigation — Workspace section + My Company entries

**Files:**
- Modify: `docs/mockups/assets/app.js:531-533` (navModel)

**Interfaces:**
- Produces: nav keys `projects` (existing) and `my-company` (new) — Task 4 calls `renderShell(u, 'my-company', …)` for client roles so highlighting works.

- [ ] **Step 1: Replace the Client Admin nav block**

Replace:

```js
    if (isClientAdmin(u)) {
      items.push({ key: 'projects', label: 'Projects', icon: '&#128194;', href: '11-projects.html', section: 'Administration' });
    }
```

with:

```js
    if (isClientAdmin(u)) {
      items.push({ key: 'projects', label: 'Projects', icon: '&#128194;', href: '11-projects.html', section: 'Administration' });
      items.push({ key: 'my-company', label: 'My Company', icon: '&#127970;', href: '17-company-detail.html', section: 'Administration' });
    }
    if (isClient(u) && !isClientAdmin(u)) {
      items.push({ key: 'projects', label: 'Projects', icon: '&#128194;', href: '11-projects.html', section: 'Workspace' });
      items.push({ key: 'my-company', label: 'My Company', icon: '&#127970;', href: '17-company-detail.html', section: 'Workspace' });
    }
    if (isAgent(u)) {
      items.push({ key: 'projects', label: 'Projects', icon: '&#128194;', href: '11-projects.html', section: 'Workspace' });
    }
```

(Insertion order puts Workspace after Tickets and before Account — `renderShell` builds sections in first-seen order.)

- [ ] **Step 2: Verify in browser** — log in as `anna@acme.example` (Client User): Workspace section shows Projects + My Company. As `mike@northwind.example` (Support Agent): Workspace shows Projects only. As `bob@acme.example` (Client Admin): Administration shows Projects + My Company.

- [ ] **Step 3: Commit**

```bash
git add docs/mockups/assets/app.js
git commit -m "feat(mockups): workspace nav — projects for agents/users, my company for client roles"
```

### Task 2: Projects list scoped per role

**Files:**
- Modify: `docs/mockups/assets/app.js` (`renderProjects`, ~1362)

**Interfaces:**
- Consumes: `agentProjectIds(u)`, `userAccessibleProjectIds(u)`.
- Produces: View links to `19-project-detail.html?id=<pid>` for every non-admin role — Task 3 must admit them.

- [ ] **Step 1: Replace the gate + scope + company-column logic**

Replace:

```js
    if (!isAdmin(u) && !isClientAdmin(u)) { renderShell(u, 'home', notFound('System Admin or Client Admin only.'), ''); return; }
    var admin = isAdmin(u);
    var allProjects = (DB.projects || []).filter(function (p) { return admin || p.companyId === u.companyId; });
```

with:

```js
    var admin = isAdmin(u);
    var agentScope = isAgent(u) ? agentProjectIds(u) : null;
    var userScope = (isClient(u) && !isClientAdmin(u)) ? userAccessibleProjectIds(u) : null;
    var allProjects = (DB.projects || []).filter(function (p) {
      if (admin) return true;
      if (agentScope) return agentScope.indexOf(p.id) >= 0;
      if (userScope) return userScope.indexOf(p.id) >= 0;
      return p.companyId === u.companyId; // Client Admin
    });
    var showCompany = admin || isAgent(u); // agents span companies
```

Then swap every `admin ?` that controls the Company column to `showCompany ?` (row cell `(admin ? '<td>' + esc(c.name) + '</td>' : '')` and header `(admin ? '<th class="sortable">Company</th>' : '')`), and the empty-state colspan to `(showCompany ? 10 : 9)`. The toolbar Add-Row button and company filter stay on `admin ?`. Finally replace the two-branch footer with:

```js
      (admin
        ? '<p class="muted" style="font-size:11.5px;margin-top:12px;">Decision O — PROJECTS layer between COMPANIES and TICKETS. Decision Q — visibility: Open (whole company) vs Restricted (invitation-only). Manage opens the Project Detail hub (team, SLA, categories, access).</p>'
        : (isAgent(u)
          ? '<p class="muted" style="font-size:11.5px;margin-top:12px;">Your assigned projects (AGENT_PROJECTS, decision I) — View opens the read-only project hub: team, SLA targets, categories, access.</p>'
          : (isClientAdmin(u)
            ? '<p class="muted" style="font-size:11.5px;margin-top:12px;">Your company’s service engagements. View opens the project hub — support team, SLA targets and categories are read-only; you manage <b>invitations</b> for Restricted projects there (decision Q).</p>'
            : '<p class="muted" style="font-size:11.5px;margin-top:12px;">Projects you can access (decision Q: Open projects + Restricted ones you’re invited to) — View opens the read-only project hub.</p>'))) +
```

- [ ] **Step 2: Verify in browser** — Anna (Client User, Acme): sees Acme's Open projects only, View buttons, no Company column, no Add Row. Mike (agent): only his assigned projects, Company column present. Sara (System Admin): unchanged.

- [ ] **Step 3: Commit**

```bash
git add docs/mockups/assets/app.js
git commit -m "feat(mockups): projects list opens read-only to agents and client users, per-role scope"
```

### Task 3: Project Detail hub — per-role guard + invite gating

**Files:**
- Modify: `docs/mockups/assets/app.js` (`renderProjectDetail`, ~1768)

**Interfaces:**
- Consumes: `agentCoversProject(u.id, pid)`, `userAccessibleProjectIds(u)`; `admin` flag already gates all non-invitation write buttons (previous spec).
- Produces: `canInvite` local controlling the Access tab's buttons.

- [ ] **Step 1: Replace the gate and guard**

Replace:

```js
    if (!isAdmin(u) && !isClientAdmin(u)) { renderShell(u, 'home', notFound('System Admin or Client Admin only.'), ''); return; }
    var admin = isAdmin(u);
```

with:

```js
    var admin = isAdmin(u);
```

and replace:

```js
    if (!admin && p.companyId !== u.companyId) { renderShell(u, 'projects', notFound('Project "' + esc(pid) + '" not found.'), ''); return; }
```

with:

```js
    var canView = admin ||
      (isClientAdmin(u) && p.companyId === u.companyId) ||
      (isAgent(u) && agentCoversProject(u.id, pid)) ||
      (isClient(u) && !isClientAdmin(u) && userAccessibleProjectIds(u).indexOf(pid) >= 0);
    if (!canView) { renderShell(u, 'projects', notFound('Project "' + esc(pid) + '" not found.'), ''); return; }
    var canInvite = admin || (isClientAdmin(u) && p.companyId === u.companyId);
```

- [ ] **Step 2: Gate the Access tab's write surface on `canInvite`**

In the Restricted branch of the Access panel, replace the row action cell:

```js
          '<td><button class="btn btn-sm" style="color:#b91c1c;" onclick="sd.revokeInvitePD(\'' + pid + '\',\'' + x.id + '\')">&#10005; Revoke</button></td></tr>';
```

with:

```js
          (canInvite ? '<td><button class="btn btn-sm" style="color:#b91c1c;" onclick="sd.revokeInvitePD(\'' + pid + '\',\'' + x.id + '\')">&#10005; Revoke</button></td>' : '') + '</tr>';
```

the empty-state `colspan="4"` with `colspan="' + (canInvite ? 4 : 3) + '"`, the Invite button:

```js
        '<button class="btn btn-sm btn-primary" style="float:right;margin:-4px 0;" onclick="sd.showInvitePD(\'' + pid + '\')">+ Invite User</button></div>' +
```

with:

```js
        (canInvite ? '<button class="btn btn-sm btn-primary" style="float:right;margin:-4px 0;" onclick="sd.showInvitePD(\'' + pid + '\')">+ Invite User</button>' : '') + '</div>' +
```

and the table header `<th>Actions</th>` with `' + (canInvite ? '<th>Actions</th>' : '') + '`.

- [ ] **Step 3: Role-aware breadcrumb + footer**

Replace the pageBar crumb `(admin ? 'Administration' : 'My Company')` with `(admin ? 'Administration' : (isAgent(u) ? 'My Projects' : 'My Company'))`. Replace the footer's non-admin branch:

```js
        : '<p class="muted" style="font-size:11.5px;margin-top:12px;">Page 19 &mdash; same hub, Client Admin view (spec 2026-07-04): team/SLA/categories read-only; you manage invitations on the Access tab (decision Q).</p>') + '</div>';
```

with:

```js
        : (isClientAdmin(u)
          ? '<p class="muted" style="font-size:11.5px;margin-top:12px;">Page 19 &mdash; same hub, Client Admin view (spec 2026-07-04): team/SLA/categories read-only; you manage invitations on the Access tab (decision Q).</p>'
          : '<p class="muted" style="font-size:11.5px;margin-top:12px;">Page 19 &mdash; read-only project view (spec 2026-07-04): team, SLA targets, categories and access are information only.</p>')) + '</div>';
```

- [ ] **Step 4: Verify in browser** — Anna opens an accessible project: all 5 tabs, zero buttons anywhere (including Access). Anna deep-links a Restricted project she's not invited to → "not found". Mike opens an assigned project: same read-only view; an unassigned `pid` → "not found". Bob (Client Admin) still gets Invite/Revoke on Restricted Access.

- [ ] **Step 5: Commit**

```bash
git add docs/mockups/assets/app.js
git commit -m "feat(mockups): project hub admits agents and client users read-only with access-scope guard"
```

### Task 4: My Company — client-role view of the Company Detail hub

**Files:**
- Modify: `docs/mockups/assets/app.js` (`renderCompanyDetail`, ~1660)

**Interfaces:**
- Consumes: nav key `my-company` from Task 1; `userAccessibleProjectIds(u)`.
- Produces: nothing downstream.

- [ ] **Step 1: Gate + forced own-company id**

Replace:

```js
    if (!isAdmin(u)) { renderShell(u, 'home', notFound('System Admin only.'), ''); return; }
    var cid = qs('id');
    if (!cid) { renderShell(u, 'companies', notFound('No company id in the URL — this page expects 17-company-detail.html?id=Cn. Open it via a Manage button on the Companies page.'), ''); return; }
```

with:

```js
    if (!isAdmin(u) && !isClient(u)) { renderShell(u, 'home', notFound('System Admin or client roles only.'), ''); return; }
    var admin = isAdmin(u);
    var cid = admin ? qs('id') : u.companyId; // client roles are locked to their own company
    if (!cid) { renderShell(u, 'companies', notFound('No company id in the URL — this page expects 17-company-detail.html?id=Cn. Open it via a Manage button on the Companies page.'), ''); return; }
```

- [ ] **Step 2: Scope stats + projects for Client Users**

Replace:

```js
    var companyTickets = DB.tickets.filter(function (t) { return t.companyId === cid; });
```

with:

```js
    var accIds = (isClient(u) && !isClientAdmin(u)) ? userAccessibleProjectIds(u) : null;
    var companyTickets = DB.tickets.filter(function (t) { return t.companyId === cid && (!accIds || accIds.indexOf(t.projectId) >= 0); });
```

and replace `var cProjs = companyProjects(cid);` with:

```js
    var cProjs = companyProjects(cid).filter(function (p) { return !accIds || accIds.indexOf(p.id) >= 0; });
```

- [ ] **Step 3: Read-only Projects tab for client roles**

Replace the project row actions:

```js
        '<td><a class="btn btn-sm btn-primary" href="19-project-detail.html?id=' + p.id + '">&#9881; Manage</a> ' +
        '<button class="btn btn-sm" onclick="sd.showEditProject(\'' + p.id + '\')">&#9998; Edit</button></td></tr>';
```

with:

```js
        '<td>' + (admin
          ? '<a class="btn btn-sm btn-primary" href="19-project-detail.html?id=' + p.id + '">&#9881; Manage</a> ' +
            '<button class="btn btn-sm" onclick="sd.showEditProject(\'' + p.id + '\')">&#9998; Edit</button>'
          : '<a class="btn btn-sm btn-primary" href="19-project-detail.html?id=' + p.id + '">&#128065; View</a>') + '</td></tr>';
```

and the Add Project button:

```js
      '<button class="btn btn-sm btn-primary" style="float:right;margin:-4px 0;" onclick="sd.showAddProjectCD(\'' + cid + '\')">+ Add Project</button></div>' +
```

with:

```js
      (admin ? '<button class="btn btn-sm btn-primary" style="float:right;margin:-4px 0;" onclick="sd.showAddProjectCD(\'' + cid + '\')">+ Add Project</button>' : '') + '</div>' +
```

- [ ] **Step 4: Read-only Departments tab for client roles**

Replace the dept row:

```js
      return '<tr><td><b>' + esc(d.name) + '</b></td><td>' + userCount + '</td>' +
        '<td><button class="btn btn-sm" onclick="sd.showEditDept(\'' + d.id + '\')">&#9998; Edit</button></td></tr>';
```

with:

```js
      return '<tr><td><b>' + esc(d.name) + '</b></td><td>' + userCount + '</td>' +
        (admin ? '<td><button class="btn btn-sm" onclick="sd.showEditDept(\'' + d.id + '\')">&#9998; Edit</button></td>' : '') + '</tr>';
```

the empty-state `colspan="3"` with `colspan="' + (admin ? 3 : 2) + '"`, the header `<th>Actions</th>` with `' + (admin ? '<th>Actions</th>' : '') + '`, and the Add Department button:

```js
      '<button class="btn btn-sm btn-primary" style="float:right;margin:-4px 0;" onclick="sd.showAddDeptCD(\'' + cid + '\')">+ Add Department</button></div>' +
```

with:

```js
      (admin ? '<button class="btn btn-sm btn-primary" style="float:right;margin:-4px 0;" onclick="sd.showAddDeptCD(\'' + cid + '\')">+ Add Department</button>' : '') + '</div>' +
```

- [ ] **Step 5: Client Admins tab link, page bar, nav key**

Replace:

```js
      '<a class="btn btn-sm" style="float:right;margin:-4px 0;" href="10-users.html">Manage on Users page &rarr;</a></div>' +
```

with:

```js
      (admin ? '<a class="btn btn-sm" style="float:right;margin:-4px 0;" href="10-users.html">Manage on Users page &rarr;</a>' : '') + '</div>' +
```

Replace:

```js
    var html = pageBar('Administration / Companies / ' + esc(c.name), c.name, '<a class="btn btn-sm" href="09-companies.html">&larr; Back to Companies</a>') +
```

with:

```js
    var html = pageBar(admin ? 'Administration / Companies / ' + esc(c.name) : 'My Company / ' + esc(c.name), c.name,
      admin ? '<a class="btn btn-sm" href="09-companies.html">&larr; Back to Companies</a>' : '') +
```

Replace the closing `renderShell(u, 'companies', html, tenantBanner(u));` with:

```js
    renderShell(u, admin ? 'companies' : 'my-company', html, tenantBanner(u));
```

- [ ] **Step 6: Verify in browser** — Anna: My Company opens Acme with her accessible-project counts, View-only rows, no Add/Edit anywhere, no Back to Companies; `17-company-detail.html?id=C2` still shows Acme (forced own id). Bob: company-wide counts, invitation powers still only in the project hub. Sara: page 17 unchanged.

- [ ] **Step 7: Commit**

```bash
git add docs/mockups/assets/app.js
git commit -m "feat(mockups): my company — read-only company hub for client roles"
```

### Task 5: Full-flow verification

- [ ] **Step 1: Serve mockups** — `python -m http.server 8321` in `docs/mockups` (background), Playwright against `http://localhost:8321`.
- [ ] **Step 2: Sweep all four roles** — Sara (System Admin): pages 9/11/17/19 unchanged with full actions. Bob (Client Admin): Projects + My Company in Administration, invite/revoke works. Anna (Client User): Workspace nav, scoped lists, zero write buttons, Restricted-not-invited project invisible AND deep-link blocked. Mike (agent): Workspace → assigned projects only, unassigned deep-link blocked, no My Company entry (and direct URL `17-company-detail.html` → not found).
- [ ] **Step 3: Console check** — no JS errors on any visited page (favicon 404 is acceptable).
- [ ] **Step 4: Stop server**; nothing further to commit unless fixes were needed.
