/* =========================================================================
   app.js — interactive demo engine for ServiceDesk.
   Simulated, CLIENT-SIDE only. Session + data live in localStorage.
   NOT real authentication. Demonstrates role-based access, tenant
   isolation, and the ticket lifecycle. Real version is built in APEX.

   Updated to match the latest brief (2026-07-03):
   - Decision O: PROJECTS layer between COMPANIES and TICKETS
   - Decision M revised: tier on APP_USERS (one tier per agent, not per-company)
   - Decision N revised: project-scoped client visibility (not department-scoped)
   - Decision P: multi-role support (userRoles array)
   - AGENT_PROJECTS replaces AGENT_COMPANIES
   - USER_PROJECTS for client access control (empty = all company projects)
   - SLA targets keyed on projectId (not companyId)
   - Severity (client-set) vs Priority (support-set) — Decision K / FR-7
   - Severity values: Critical/Major/Minor/Low
   - SLA per severity per project with breach indicators — FR-23
   - CSAT star rating after closure — FR-27
   - Escalate action (reassign + raise priority, tier-filtered) — FR-26
   - Client can assign from mapped agents — Decision J / FR-10
   - Agent self-assign from open queue — Decision A / FR-10
   - Dashboard analytics (avg resolution time, per-agent counts) — FR-28
   - Ticket age column — FR-15
   - Auto-acknowledgement email on create — FR-29
   - Ticket type INCIDENT / SERVICE_REQUEST — FR-30
   - First-response tracking — FR-31
   - SLA Compliance % KPI — FR-32
   - Severity guidance text — FR-34
   - Resolution code + summary on resolve — FR-36
   - Triage gate (priority required before In Progress) — FR-37
   - Reopen count tracking
   - SLA Targets management page (Page 13)
   - Projects management page (Page 11)
   - User-Projects management page (Page 18)
   ========================================================================= */
(function () {
  'use strict';
  var LS_DATA = 'sd_demo_data_v7', LS_SESSION = 'sd_demo_session_v7';

  /* ---------- store ---------- */
  function clone(o) { return JSON.parse(JSON.stringify(o)); }
  function loadData() {
    var raw = localStorage.getItem(LS_DATA);
    if (raw) { try { return JSON.parse(raw); } catch (e) {} }
    var seed = clone(window.DEMO_SEED);
    localStorage.setItem(LS_DATA, JSON.stringify(seed));
    return seed;
  }
  function save() { localStorage.setItem(LS_DATA, JSON.stringify(DB)); }
  var DB = loadData();

  // Backfill arrays/fields for users with cached data from earlier versions
  if (!DB.attachments) { DB.attachments = []; }
  if (!DB.departments) { DB.departments = []; }
  if (!DB.ticketTypes) { DB.ticketTypes = ['INCIDENT', 'SERVICE_REQUEST']; }
  if (!DB.resolutionCodes) { DB.resolutionCodes = ['FIXED', 'WORKAROUND', 'KNOWN_ERROR', 'CANNOT_REPRODUCE', 'DUPLICATE', 'USER_EDUCATION', 'NOT_AN_INCIDENT']; }
  if (!DB.adminAuditLog) { DB.adminAuditLog = []; }

  // Backfill projects from seed if missing
  if (!DB.projects) { DB.projects = (window.DEMO_SEED && window.DEMO_SEED.projects) ? clone(window.DEMO_SEED.projects) : []; }
  // Backfill userRoles from seed if missing
  if (!DB.userRoles) { DB.userRoles = (window.DEMO_SEED && window.DEMO_SEED.userRoles) ? clone(window.DEMO_SEED.userRoles) : []; }
  // Backfill userProjects from seed if missing
  if (!DB.userProjects) { DB.userProjects = (window.DEMO_SEED && window.DEMO_SEED.userProjects) ? clone(window.DEMO_SEED.userProjects) : []; }

  // Migrate agentCompanies -> agentProjects if needed
  if (!DB.agentProjects) {
    if (DB.agentCompanies && DB.agentCompanies.length) {
      // Best-effort migration: map each agent-company to the first project of that company
      DB.agentProjects = [];
      DB.agentCompanies.forEach(function (ac) {
        var compProjs = (DB.projects || []).filter(function (p) { return p.companyId === ac.companyId && p.isActive; });
        compProjs.forEach(function (p) {
          var exists = DB.agentProjects.some(function (ap) { return ap.userId === ac.userId && ap.projectId === p.id; });
          if (!exists) {
            DB.agentProjects.push({ userId: ac.userId, projectId: p.id });
          }
        });
      });
    } else {
      DB.agentProjects = (window.DEMO_SEED && window.DEMO_SEED.agentProjects) ? clone(window.DEMO_SEED.agentProjects) : [];
    }
  }
  // Remove old agentCompanies
  delete DB.agentCompanies;

  // Backfill tier on users (Decision M revised: tier on user, not per-company)
  DB.users.forEach(function (x) {
    if (x.tier === undefined) x.tier = null;
    if (x.departmentId === undefined) x.departmentId = null;
    if (x.status === undefined) x.status = 'Active';
    if (x.lastLogin === undefined) x.lastLogin = null;
  });

  DB.tickets.forEach(function (t) {
    if (t.ticketType === undefined) t.ticketType = 'INCIDENT';
    if (t.departmentId === undefined) t.departmentId = null;
    if (t.resolutionCode === undefined) t.resolutionCode = null;
    if (t.resolutionSummary === undefined) t.resolutionSummary = null;
    if (t.reopenCount === undefined) t.reopenCount = 0;
    if (t.firstResponseAt === undefined) t.firstResponseAt = null;
    // Backfill projectId on tickets if missing
    if (t.projectId === undefined || t.projectId === null) {
      var compProjs = (DB.projects || []).filter(function (p) { return p.companyId === t.companyId && p.isActive; });
      t.projectId = compProjs.length ? compProjs[0].id : null;
    }
  });

  DB.categories.forEach(function (c) {
    if (c.companyId === undefined) c.companyId = null;
    if (c.projectId === undefined) c.projectId = null;
    if (c.description === undefined) c.description = '';
    if (c.status === undefined) c.status = 'Active';
  });

  (DB.slaTargets || []).forEach(function (s) {
    if (s.effectiveFrom === undefined) s.effectiveFrom = '2026-01-01';
    if (s.approvedBy === undefined) s.approvedBy = 'u1';
    if (s.notes === undefined) s.notes = '';
    // Migrate companyId-keyed SLA to projectId-keyed
    if (s.projectId === undefined && s.companyId) {
      var compProjs = (DB.projects || []).filter(function (p) { return p.companyId === s.companyId && p.isActive; });
      s.projectId = compProjs.length ? compProjs[0].id : null;
    }
  });
  save();

  /* ---------- session ---------- */
  function getSession() { var r = localStorage.getItem(LS_SESSION); return r ? JSON.parse(r) : null; }
  function currentUser() { var s = getSession(); return s ? DB.users.find(function (u) { return u.id === s.userId; }) : null; }

  /* ---------- lookups + utils ---------- */
  function company(id) { return DB.companies.find(function (c) { return c.id === id; }) || {}; }
  function user(id) { return DB.users.find(function (u) { return u.id === id; }) || null; }
  function category(id) { return DB.categories.find(function (c) { return c.id === id; }) || {}; }
  function project(id) { return (DB.projects || []).find(function (p) { return p.id === id; }) || {}; }
  function companyProjects(companyId) { return (DB.projects || []).filter(function (p) { return p.companyId === companyId && p.isActive; }); }

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  function initials(name) { return (name || '?').split(' ').map(function (w) { return w[0]; }).join('').slice(0, 2).toUpperCase(); }
  function qs(k) { return new URLSearchParams(location.search).get(k); }
  function NOW() { return Date.now(); }
  function timeAgo(iso) {
    var d = (NOW() - new Date(iso).getTime()) / 1000;
    if (d < 60) return 'just now';
    if (d < 3600) return Math.floor(d / 60) + 'm ago';
    if (d < 86400) return Math.floor(d / 3600) + 'h ago';
    var days = Math.floor(d / 86400);
    return days === 1 ? 'yesterday' : days + 'd ago';
  }

  // Decision M revised: tier is on user object
  function agentTier(userId) {
    var u = user(userId);
    return u ? u.tier || null : null;
  }

  function ageDays(iso) {
    var d = (NOW() - new Date(iso).getTime()) / (1000 * 86400);
    if (d < 1) return '<1d';
    return Math.floor(d) + 'd';
  }

  /* ---------- Project-scoped agent functions ---------- */
  function agentProjectIds(u) {
    return (DB.agentProjects || []).filter(function (m) { return m.userId === u.id; }).map(function (m) { return m.projectId; });
  }
  function agentCoversProject(userId, projectId) {
    return (DB.agentProjects || []).some(function (m) { return m.userId === userId && m.projectId === projectId; });
  }
  // Derive company coverage from projects
  function agentCompanyIds(u) {
    var projIds = agentProjectIds(u);
    var compIds = [];
    projIds.forEach(function (pid) {
      var p = project(pid);
      if (p.companyId && compIds.indexOf(p.companyId) < 0) compIds.push(p.companyId);
    });
    return compIds;
  }

  // Client user's accessible projects
  function userAccessibleProjectIds(u) {
    var up = (DB.userProjects || []).filter(function (r) { return r.userId === u.id; });
    if (up.length === 0) return companyProjects(u.companyId).map(function (p) { return p.id; });
    return up.map(function (r) { return r.projectId; });
  }

  /* ---------- SLA (FR-23) — now by projectId ---------- */
  function slaTarget(projectId, severity) {
    return (DB.slaTargets || []).find(function (s) { return s.projectId === projectId && s.severity === severity; });
  }
  function slaStatus(ticket) {
    if (!ticket.slaDueDate) return null;
    if (ticket.status === 'Closed') return 'closed';
    var due = new Date(ticket.slaDueDate).getTime();
    var now = NOW();
    var total = due - new Date(ticket.createdAt).getTime();
    var remaining = due - now;
    if (remaining <= 0) return 'breached';
    if (remaining / total <= 0.25) return 'at-risk';
    return 'on-track';
  }
  function slaBadge(ticket) {
    var s = slaStatus(ticket);
    if (!s || s === 'closed') return '';
    var map = { 'on-track': '<span class="sla-badge sla-ok">&#x1F7E2; On track</span>',
                'at-risk':  '<span class="sla-badge sla-warn">&#x1F7E1; At risk</span>',
                'breached': '<span class="sla-badge sla-breach">&#x1F534; Breached</span>' };
    return map[s] || '';
  }

  /* ---------- badges ---------- */
  var STATUS_CLS = { 'New': 'st-new', 'Assigned': 'st-assigned', 'In Progress': 'st-progress', 'On Hold': 'st-hold', 'Resolved': 'st-resolved', 'Closed': 'st-closed' };
  var SEV_CLS = { 'Critical': 'sev-critical', 'Major': 'sev-major', 'Minor': 'sev-minor', 'Low': 'sev-low' };
  var PRIO_CLS = { 'P1': 'pr-critical', 'P2': 'pr-high', 'P3': 'pr-medium', 'P4': 'pr-low' };
  function statusBadge(s) { return '<span class="badge ' + (STATUS_CLS[s] || '') + '"><span class="dot"></span>' + esc(s) + '</span>'; }
  function sevBadge(s) { return s ? '<span class="badge ' + (SEV_CLS[s] || '') + '">' + esc(s) + '</span>' : ''; }
  function prioBadge(p) { return p ? '<span class="badge ' + (PRIO_CLS[p] || '') + '">' + esc(p) + '</span>' : '<span class="muted">\u2014</span>'; }

  /* ---------- ticket type badge (FR-30) ---------- */
  var TYPE_CLS = { 'INCIDENT': 'type-incident', 'SERVICE_REQUEST': 'type-request' };
  function typeBadge(t) {
    var label = t === 'SERVICE_REQUEST' ? 'Service Request' : 'Incident';
    return '<span class="badge ' + (TYPE_CLS[t] || '') + '">' + label + '</span>';
  }

  /* ---------- department lookup ---------- */
  function department(id) { return (DB.departments || []).find(function (d) { return d.id === id; }) || {}; }

  /* ---------- CSAT stars (FR-27) ---------- */
  function csatStars(score, editable) {
    if (!editable && !score) return '<span class="muted">\u2014</span>';
    var html = '<span class="csat-stars' + (editable ? ' editable' : '') + '">';
    for (var i = 1; i <= 5; i++) {
      var filled = score && i <= score;
      html += '<span class="star' + (filled ? ' filled' : '') + '" data-val="' + i + '"' +
        (editable ? ' onclick="sd.rateCsat(this)"' : '') + '>&#9733;</span>';
    }
    html += '</span>';
    if (score) html += ' <span class="muted">(' + score + '/5)</span>';
    return html;
  }

  /* ---------- attachments (FR-25) ---------- */
  function fileIcon(mime) {
    if (!mime) return '&#128196;';
    if (mime.indexOf('image/') === 0) return '&#128247;';
    if (mime.indexOf('application/pdf') === 0) return '&#128462;';
    if (mime.indexOf('text/') === 0) return '&#128196;';
    return '&#128206;';
  }
  function fileSize(bytes) {
    if (!bytes) return '';
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1048576) return Math.round(bytes / 1024) + ' KB';
    return (bytes / 1048576).toFixed(1) + ' MB';
  }
  function ticketAttachments(ticketId) {
    return (DB.attachments || []).filter(function (a) { return a.ticketId === ticketId; });
  }
  function commentAttachments(commentId) {
    return (DB.attachments || []).filter(function (a) { return a.commentId === commentId; });
  }
  var pendingFiles = [];
  function renderPendingFiles() {
    var el = document.getElementById('pending-files');
    if (!el) return;
    if (!pendingFiles.length) { el.innerHTML = ''; return; }
    el.innerHTML = pendingFiles.map(function (f, i) {
      return '<div class="attach-item"><span class="ai-icon">' + fileIcon(f.type) + '</span>' +
        '<span class="ai-name">' + esc(f.name) + '</span>' +
        '<span class="ai-meta">' + fileSize(f.size) + '</span>' +
        '<span class="ai-remove" onclick="sd.removePending(' + i + ')">&#10005;</span></div>';
    }).join('');
  }
  function inlineAttachHtml(files) {
    if (!files.length) return '';
    var images = files.filter(function (a) { return a.mimeType && a.mimeType.indexOf('image/') === 0; });
    var others = files.filter(function (a) { return !a.mimeType || a.mimeType.indexOf('image/') !== 0; });
    var html = '';
    if (images.length) {
      html += '<div class="inline-previews">' + images.map(function (a) {
        return '<div class="img-preview"><div class="img-placeholder">' + fileIcon(a.mimeType) +
          '<span>' + esc(a.fileName) + '</span></div>' +
          '<div class="img-caption">' + esc(a.fileName) + ' &middot; ' + fileSize(a.fileSize) + '</div></div>';
      }).join('') + '</div>';
    }
    if (others.length) {
      html += '<div class="file-chips">' + others.map(function (a) {
        return '<span class="file-chip"><span class="fc-icon">' + fileIcon(a.mimeType) + '</span>' +
          esc(a.fileName) + ' <span class="muted" style="font-size:10px;">' + fileSize(a.fileSize) + '</span></span>';
      }).join('') + '</div>';
    }
    return html;
  }
  function attachZoneHtml() {
    return '<div class="field full"><label>Attachments</label>' +
      '<div class="attach-zone" onclick="document.getElementById(\'file-input\').click()">' +
        '<div class="az-icon">&#128206;</div>' +
        '<div class="az-text">Click to browse files</div>' +
        '<div class="az-hint">Images, PDFs, logs \u2014 max 10 MB per file (simulated)</div>' +
      '</div>' +
      '<input type="file" id="file-input" multiple style="display:none" onchange="sd.addFiles(this)">' +
      '<div id="pending-files" class="attach-list"></div></div>';
  }

  /* ---------- authorization / tenant isolation ---------- */
  function isAdmin(u) { return u.role === 'System Admin'; }
  function isAgent(u) { return u.role === 'Support Agent'; }
  function isClientAdmin(u) { return u.role === 'Client Admin'; }
  function isClient(u) { return u.role === 'Client User' || u.role === 'Client Admin'; }

  function visibleTickets(u) {
    return DB.tickets.filter(function (t) {
      if (isAdmin(u)) return true;
      if (isAgent(u)) return agentProjectIds(u).indexOf(t.projectId) >= 0;
      if (isClientAdmin(u)) return t.companyId === u.companyId;
      // Client User: project-scoped (NOT department-scoped!)
      return t.companyId === u.companyId && userAccessibleProjectIds(u).indexOf(t.projectId) >= 0;
    });
  }
  function canSee(u, t) { return visibleTickets(u).some(function (x) { return x.id === t.id; }); }
  function canCreate(u) { return isClient(u); }

  function canAssign(u, t) {
    if (isAdmin(u)) return true;
    if (isClient(u) && t && t.companyId === u.companyId) return true;
    return false;
  }
  function canSelfAssign(u, t) {
    return isAgent(u) && t && t.assignedTo == null &&
      t.status !== 'Closed' && agentCoversProject(u.id, t.projectId);
  }
  function canEscalate(u, t) {
    return (isAgent(u) || isAdmin(u)) && t && t.status === 'In Progress';
  }
  function canSetPriority(u) { return isAdmin(u) || isAgent(u); }
  function canInternalNote(u) { return isAdmin(u) || isAgent(u); }

  function transitions(t, u) {
    var out = [];
    var agentOrAdmin = isAdmin(u) || (isAgent(u) && (t.assignedTo === u.id || t.assignedTo == null));
    var clientSide = isAdmin(u) || (isClient(u) && t.companyId === u.companyId);
    switch (t.status) {
      case 'Assigned':
        if (agentOrAdmin) out.push({ label: 'Start Work', to: 'In Progress', cls: 'btn-primary', icon: '&#9654;' });
        break;
      case 'In Progress':
        if (agentOrAdmin) { out.push({ label: 'Put On Hold', to: 'On Hold', cls: '', icon: '&#9208;' }); out.push({ label: 'Resolve', to: 'Resolved', cls: 'btn-hot', icon: '&#10003;', action: 'resolve' }); }
        break;
      case 'On Hold':
        if (agentOrAdmin) out.push({ label: 'Resume', to: 'In Progress', cls: 'btn-primary', icon: '&#9654;' });
        break;
      case 'Resolved':
        if (clientSide) { out.push({ label: 'Close', to: 'Closed', cls: 'btn-primary', icon: '&#10003;', action: 'close' }); out.push({ label: 'Reopen', to: 'In Progress', cls: '', icon: '&#8634;' }); }
        break;
    }
    return out;
  }

  /* ---------- toast ---------- */
  function toast(msg) {
    var t = document.createElement('div');
    t.className = 'toast'; t.innerHTML = msg;
    document.body.appendChild(t);
    setTimeout(function () { t.classList.add('show'); }, 10);
    setTimeout(function () { t.classList.remove('show'); setTimeout(function () { t.remove(); }, 300); }, 2600);
  }

  /* ---------- chrome (header + nav + shell) ---------- */
  function navModel(u) {
    var queueLabel = isClient(u) ? 'My Tickets' : 'Ticket Queue';
    var items = [
      { key: 'home', label: 'Home', icon: '&#128193;', href: '02-home.html', section: 'Overview' }
    ];
    items.push({ key: 'dashboard', label: 'Dashboard', icon: '&#128202;', href: '03-dashboard.html', section: 'Overview' });
    items.push({ key: 'queue', label: queueLabel, icon: '&#127915;', href: '04-ticket-list.html', section: 'Tickets' });
    if (canCreate(u)) items.push({ key: 'create', label: 'Raise a Ticket', icon: '&#10133;', href: '06-create-ticket.html', section: 'Tickets' });
    if (isAdmin(u)) {
      items.push({ key: 'companies', label: 'Companies', icon: '&#127970;', href: '09-companies.html', section: 'Administration' });
      items.push({ key: 'projects', label: 'Projects', icon: '&#128194;', href: '11-projects.html', section: 'Administration' });
      items.push({ key: 'users', label: 'Users', icon: '&#128101;', href: '10-users.html', section: 'Administration' });
      items.push({ key: 'categories', label: 'Categories', icon: '&#127991;&#65039;', href: '11-categories.html', section: 'Administration' });
      items.push({ key: 'agent-projects', label: 'Agent-Project Mapping', icon: '&#128279;', href: '14-agent-companies.html', section: 'Administration' });
      items.push({ key: 'audit-log', label: 'Audit Log', icon: '&#128220;', href: '16-audit-log.html', section: 'Administration' });
    }
    if (isClientAdmin(u)) {
      items.push({ key: 'user-projects', label: 'User Access', icon: '&#128274;', href: '18-user-projects.html', section: 'Administration' });
    }
    items.push({ key: 'profile', label: 'My Profile', icon: '&#128100;', href: '12-profile.html', section: 'Account' });
    return items;
  }
  function renderShell(u, activeKey, mainHtml, bannerHtml) {
    var items = navModel(u), sections = [], bySec = {};
    items.forEach(function (it) { (bySec[it.section] = bySec[it.section] || []).push(it); if (sections.indexOf(it.section) < 0) sections.push(it.section); });
    var nav = sections.map(function (sec) {
      return '<div class="nav-section">' + sec + '</div>' + bySec[sec].map(function (it) {
        return '<a class="nav-item' + (it.key === activeKey ? ' active' : '') + '" href="' + it.href + '"><span class="ic">' + it.icon + '</span> ' + esc(it.label) + '</a>';
      }).join('');
    }).join('');
    var header =
      '<div class="brand"><div class="logo">&#127915;</div> ServiceDesk</div>' +
      '<div class="spacer"></div>' +
      '<div class="hdr-item" title="Reset demo data" onclick="sd.reset()">&#8634; Reset demo</div>' +
      '<div class="hdr-item"><span class="role-pill">' + esc(u.role) + '</span></div>' +
      '<div class="hdr-item"><span class="avatar">' + initials(u.name) + '</span> ' + esc(u.name) +
      ' &nbsp;<a href="#" onclick="sd.logout();return false;" style="font-size:12px;">Sign out</a></div>';
    document.body.className = '';
    document.body.innerHTML =
      '<div class="app-shell">' +
        '<header class="top-header">' + header + '</header>' +
        '<aside class="sidebar">' + nav + '</aside>' +
        '<main class="main">' + (bannerHtml || '') + mainHtml + '</main>' +
      '</div>' + demoFoot();
  }
  function demoFoot() {
    return '<div class="demo-foot">&#129514; <b>Interactive demo</b> \u2014 simulated client-side login (no real auth). ' +
           'Data persists in your browser. Real auth &amp; tenant isolation are built in Oracle APEX. ' +
           '<a href="#" onclick="sd.reset();return false;">Reset</a></div>';
  }
  function tenantBanner(u) {
    if (isAdmin(u)) return '<div class="tenant-banner">&#127760; <b>System Admin</b> \u2014 viewing <b>all companies</b> and <b>all projects</b>. Other roles are scoped to their own company/projects.</div>';
    if (isAgent(u)) {
      var projIds = agentProjectIds(u);
      // Group projects by company
      var byComp = {};
      projIds.forEach(function (pid) {
        var p = project(pid);
        var cName = company(p.companyId).name || '?';
        if (!byComp[cName]) byComp[cName] = [];
        byComp[cName].push(p.projectName || p.projectKey || pid);
      });
      var parts = [];
      Object.keys(byComp).forEach(function (cName) {
        parts.push(esc(cName) + ' (' + byComp[cName].map(function (n) { return esc(n); }).join(', ') + ')');
      });
      var projList = parts.length ? parts.join('; ') : 'no projects assigned yet';
      return '<div class="tenant-banner">&#128736;&#65039; <b>Support Agent</b> \u2014 you only see tickets for <b>your assigned projects</b>: ' + projList + '. Other projects are hidden.</div>';
    }
    if (isClientAdmin(u)) return '<div class="tenant-banner">&#128274; <b>' + esc(company(u.companyId).name) + '</b> only \u2014 you see <b>all tickets for your company</b> (never other companies\u2019).</div>';
    // Client User: show accessible projects
    var accessProjs = userAccessibleProjectIds(u);
    var projNames = accessProjs.map(function (pid) { return project(pid).projectName || pid; });
    var projDisplay = projNames.length ? projNames.map(function (n) { return esc(n); }).join(', ') : 'all projects';
    return '<div class="tenant-banner">&#128274; <b>' + esc(company(u.companyId).name) + '</b> \u2014 projects you have access to: <b>' + projDisplay + '</b>.</div>';
  }
  function pageBar(crumb, title, actions) {
    return '<div class="page-bar"><div class="titles"><div class="crumb">' + crumb + '</div><h1>' + esc(title) + '</h1></div>' +
           '<div class="actions">' + (actions || '') + '</div></div>';
  }

  function landingFor(u) { return isAdmin(u) ? '03-dashboard.html' : '04-ticket-list.html'; }

  /* ---------- page: LOGIN ---------- */
  function renderLogin() {
    var cu = currentUser();
    if (cu) { location.href = landingFor(cu); return; }

    var groups = [];
    DB.companies.filter(function(c) { return c.status === 'Active'; }).forEach(function(c) {
      var cUsers = DB.users.filter(function(u) { return u.companyId === c.id; });
      if (cUsers.length) groups.push({ id: c.id, name: c.name, label: c.name, users: cUsers });
    });

    var tabs = groups.map(function(g, i) {
      return '<button class="login-tab' + (i === 0 ? ' active' : '') + '" onclick="sd.switchLoginTab(\'' + g.id + '\', this)">' +
        esc(g.label) + ' <span class="tab-count">' + g.users.length + '</span></button>';
    }).join('');

    var panels = groups.map(function(g, i) {
      var cards = g.users.map(function(u) {
        var roleLabel = u.role;
        // Show tier from user.tier for agents
        if (u.tier) {
          roleLabel += ' \u00b7 ' + u.tier;
        }
        // For agents, show covered projects grouped by company
        var coveredHtml = '';
        if (u.role === 'Support Agent') {
          var myProjIds = (DB.agentProjects || []).filter(function(ap) { return ap.userId === u.id; }).map(function(ap) { return ap.projectId; });
          if (myProjIds.length) {
            var projTags = myProjIds.map(function(pid) {
              var p = project(pid);
              return '<span class="cover-tag">' + esc(p.projectName || pid) + '</span>';
            });
            coveredHtml = '<span class="p-covers">' + projTags.join(' ') + '</span>';
          }
        }
        // For clients, show department
        var deptHtml = '';
        if (u.departmentId) {
          var dept = (DB.departments || []).find(function(d) { return d.id === u.departmentId; });
          if (dept) deptHtml = '<span class="p-dept">' + esc(dept.name) + ' dept</span>';
        }
        var avatarCls = u.role === 'System Admin' ? 'av-admin' : (u.role === 'Support Agent' ? 'av-agent' : (u.role === 'Client Admin' ? 'av-cadmin' : 'av-cuser'));
        return '<button class="persona" onclick="sd.quickLogin(\'' + u.id + '\')">' +
          '<span class="avatar ' + avatarCls + '">' + initials(u.name) + '</span>' +
          '<span class="p-name">' + esc(u.name) + '</span>' +
          '<span class="p-role">' + esc(roleLabel) + '</span>' +
          coveredHtml + deptHtml + '</button>';
      }).join('');
      return '<div class="login-panel' + (i === 0 ? ' active' : '') + '" data-company="' + g.id + '">' + cards + '</div>';
    }).join('');

    document.body.className = '';
    document.body.innerHTML =
      '<div class="login-wrap"><div class="login-card" style="max-width:880px;">' +
        '<div class="brand"><div class="logo">&#127915;</div><div>' +
          '<div style="font-weight:700;font-size:15px;">ServiceDesk</div>' +
          '<div class="muted" style="font-size:12px;">Multi-tenant support portal &middot; interactive demo</div></div></div>' +
        '<div class="grid cols-2" style="margin-top:14px;gap:28px;align-items:start;">' +
          '<div><h1>Sign in</h1><p class="sub">Use a demo account (password is <b>demo</b> for all).</p>' +
            '<div id="loginErr" class="login-error" style="display:none;"></div>' +
            '<div class="form-grid">' +
              '<div class="field"><label>Email</label><input id="email" type="email" value="anna@acme.example"></div>' +
              '<div class="field"><label>Password</label><input id="pwd" type="password" value="demo"></div>' +
              '<button class="btn btn-primary btn-block" onclick="sd.login()">Sign in</button>' +
            '</div>' +
            '<div class="role-legend">' +
              '<div class="rl-title">Roles in the system</div>' +
              '<div class="rl-item"><span class="avatar av-admin" style="width:18px;height:18px;font-size:8px;">SA</span> <b>System Admin</b> \u2014 sees everything, manages all</div>' +
              '<div class="rl-item"><span class="avatar av-agent" style="width:18px;height:18px;font-size:8px;">AG</span> <b>Support Agent</b> \u2014 works tickets (L1\u2013L4 tiers)</div>' +
              '<div class="rl-item"><span class="avatar av-cadmin" style="width:18px;height:18px;font-size:8px;">CA</span> <b>Client Admin</b> \u2014 sees all company tickets</div>' +
              '<div class="rl-item"><span class="avatar av-cuser" style="width:18px;height:18px;font-size:8px;">CU</span> <b>Client User</b> \u2014 sees own projects only</div>' +
            '</div>' +
          '</div>' +
          '<div><h1 style="font-size:16px;">Pick a persona</h1>' +
            '<p class="sub">One click to sign in. Grouped by company.</p>' +
            '<div class="login-tabs">' + tabs + '</div>' +
            '<div class="login-panels">' + panels + '</div>' +
          '</div>' +
        '</div>' +
        '<hr class="sep"><p class="muted mb-0" style="font-size:11.5px;">&#129514; Simulated client-side login for demonstration only \u2014 not real authentication. ' +
        'Try different roles to see <b>tenant isolation</b> and <b>tier-based escalation</b> in action.</p>' +
      '</div></div>';
  }

  /* ---------- page: HOME (project picker) ---------- */
  function renderHome(u) {
    var showGrab = isAdmin(u) || isAgent(u);
    // Gather visible projects
    var visProjs = [];
    if (isAdmin(u)) {
      visProjs = (DB.projects || []).filter(function (p) { return p.isActive; });
    } else if (isAgent(u)) {
      var apIds = agentProjectIds(u);
      visProjs = (DB.projects || []).filter(function (p) { return p.isActive && apIds.indexOf(p.id) >= 0; });
    } else if (isClientAdmin(u)) {
      visProjs = companyProjects(u.companyId);
    } else {
      var accessIds = userAccessibleProjectIds(u);
      visProjs = (DB.projects || []).filter(function (p) { return p.isActive && accessIds.indexOf(p.id) >= 0; });
    }

    var vts = visibleTickets(u);
    var projCards = visProjs.map(function (p) {
      var c = company(p.companyId);
      var pt = vts.filter(function (t) { return t.projectId === p.id; });
      return {
        id: p.id, name: p.projectName, companyName: c.name || '?', companyId: p.companyId,
        open: pt.filter(function (t) { return t.status !== 'Closed' && t.status !== 'Resolved'; }).length,
        unassigned: pt.filter(function (t) { return t.assignedTo == null && t.status !== 'Closed'; }).length,
        total: pt.length
      };
    }).sort(function (a, b) { return (b.open - a.open) || (b.unassigned - a.unassigned) || a.name.localeCompare(b.name); });

    var cards = projCards.map(function (p) {
      var second = showGrab ? '<span><b>' + p.unassigned + '</b> unassigned</span>' : '<span><b>' + p.total + '</b> total</span>';
      var manageLink = isAdmin(u) ? '<a class="proj-manage" href="17-company-detail.html?id=' + encodeURIComponent(p.companyId) + '" onclick="event.stopPropagation();" title="Manage company">\u2699\uFE0F</a>' : '';
      return '<div class="card proj-card" data-name="' + esc((p.name + ' ' + p.companyName).toLowerCase()) + '" style="position:relative;">' + manageLink +
        '<a class="proj-card-link" href="04-ticket-list.html?project=' + encodeURIComponent(p.id) + '"><div class="card-bd">' +
        '<div class="proj-ico">' + initials(p.name) + '</div>' +
        '<div class="proj-name">' + esc(p.name) + '</div>' +
        '<div class="muted" style="font-size:11.5px;margin-top:2px;">' + esc(p.companyName) + '</div>' +
        '<div class="proj-stats"><span><b>' + p.open + '</b> open</span>' + second + '</div>' +
        '</div></a></div>';
    }).join('') || '<div class="muted">No projects assigned to you yet. Ask a System Admin to add you to a project.</div>';

    var searchBar = projCards.length > 6
      ? '<div class="proj-toolbar"><div class="search">&#128270; <input id="projq" placeholder="Search projects\u2026" oninput="sd.filterProjects()"></div>' +
        '<span class="muted" id="projcount" style="font-size:12.5px;">' + projCards.length + ' projects</span></div>'
      : '';

    var mine = vts.slice().sort(function (a, b) { return new Date(b.updatedAt) - new Date(a.updatedAt); });
    var rows = mine.slice(0, 6).map(function (t) {
      return '<tr><td><a class="ref" href="05-ticket-detail.html?id=' + t.id + '">' + t.ref + '</a></td>' +
        '<td>' + esc(t.subject) + '</td><td>' + esc(project(t.projectId).projectName || '\u2014') + '</td><td>' + statusBadge(t.status) + '</td><td>' + sevBadge(t.severity) + '</td><td class="muted">' + timeAgo(t.updatedAt) + '</td></tr>';
    }).join('') || '<tr><td colspan="6" class="muted">No tickets yet.</td></tr>';

    var lead = isClient(u) ? 'Your workspace \u2014 projects you have access to'
      : (isAdmin(u) ? 'All projects across all companies \u2014 pick one to drill into its tickets'
                    : 'Your assigned projects \u2014 pick one to see its tickets');
    var crumb = 'Home';
    var html = pageBar(crumb, 'Welcome back, ' + u.name.split(' ')[0] + ' \u{1F44B}', '') +
      '<div class="content"><p class="muted" style="margin-top:0;">' + lead + '</p>' +
      searchBar +
      '<div class="grid cols-3" id="projgrid">' + cards + '</div>' +
      '<div class="card" style="margin-top:18px;"><div class="card-hd">Recent activity</div>' +
      '<table class="t"><thead><tr><th>Ref</th><th>Subject</th><th>Project</th><th>Status</th><th>Severity</th><th>Updated</th></tr></thead><tbody>' + rows + '</tbody></table></div></div>';
    renderShell(u, 'home', html, tenantBanner(u));
  }

  /* ---------- page: DASHBOARD ---------- */
  function renderDashboard(u) {
    var ts = visibleTickets(u);
    var open = ts.filter(function (t) { return t.status !== 'Closed' && t.status !== 'Resolved'; }).length;
    var unassigned = ts.filter(function (t) { return t.assignedTo == null && t.status !== 'Closed'; }).length;
    var inprog = ts.filter(function (t) { return t.status === 'In Progress'; }).length;
    var resolved = ts.filter(function (t) { return t.status === 'Resolved' || t.status === 'Closed'; }).length;

    // FR-32: SLA Compliance %
    var resolvedWithSla = ts.filter(function (t) { return (t.status === 'Resolved' || t.status === 'Closed') && t.slaDueDate; });
    var resolvedOnTime = resolvedWithSla.filter(function (t) {
      var resolveTime = new Date(t.resolvedAt || t.closedAt).getTime();
      return resolveTime <= new Date(t.slaDueDate).getTime();
    }).length;
    var slaCompliancePct = resolvedWithSla.length ? Math.round(resolvedOnTime / resolvedWithSla.length * 100) : 100;

    var ticketsWithFr = ts.filter(function (t) { return t.firstResponseAt && t.createdAt; });
    var avgFrHours = 0;
    if (ticketsWithFr.length) {
      var frTotalMs = ticketsWithFr.reduce(function (sum, t) {
        return sum + (new Date(t.firstResponseAt).getTime() - new Date(t.createdAt).getTime());
      }, 0);
      avgFrHours = Math.round(frTotalMs / ticketsWithFr.length / (1000 * 3600) * 10) / 10;
    }
    var avgFrDisplay = avgFrHours >= 24 ? Math.round(avgFrHours / 24) + 'd' : avgFrHours + 'h';

    var resolvedOrClosed = ts.filter(function (t) { return t.status === 'Resolved' || t.status === 'Closed'; });
    var reopenedCount = resolvedOrClosed.filter(function (t) { return t.reopenCount > 0; }).length;
    var reopenPct = resolvedOrClosed.length ? Math.round(reopenedCount / resolvedOrClosed.length * 100) : 0;

    var ticketsWithCsat = ts.filter(function (t) { return t.csatScore; });
    var csatAvg = 0;
    if (ticketsWithCsat.length) {
      csatAvg = Math.round(ticketsWithCsat.reduce(function (sum, t) { return sum + t.csatScore; }, 0) / ticketsWithCsat.length * 10) / 10;
    }
    var csatDisplay = ticketsWithCsat.length ? csatAvg + '/5' : '\u2014';

    var kpiIcons = ['&#127915;', '&#128232;', '&#9881;', '&#9989;', '&#9202;', '&#9889;', '&#128260;', '&#11088;'];
    var kpiColors = ['#dbeafe', '#ffedd5', '#fef9c3', '#dcfce7', slaCompliancePct >= 80 ? '#dcfce7' : '#fee2e2', '#e0f2fe', reopenPct <= 10 ? '#dcfce7' : '#ffedd5', csatAvg >= 4 ? '#dcfce7' : (csatAvg >= 3 ? '#fef9c3' : '#fee2e2')];
    var kpiIconColors = ['#0572ce', '#f97316', '#eab308', '#22c55e', slaCompliancePct >= 80 ? '#22c55e' : '#b91c1c', '#0369a1', reopenPct <= 10 ? '#22c55e' : '#c2410c', csatAvg >= 4 ? '#22c55e' : (csatAvg >= 3 ? '#eab308' : '#b91c1c')];
    var kpiData = [
      { l: 'Open Tickets', v: open },
      { l: 'Unassigned', v: unassigned },
      { l: 'In Progress', v: inprog },
      { l: 'Resolved / Closed', v: resolved },
      { l: 'SLA Compliance', v: slaCompliancePct + '%' },
      { l: 'Avg First Response', v: avgFrDisplay },
      { l: 'Reopen Rate', v: reopenPct + '%' },
      { l: 'CSAT Average', v: csatDisplay }
    ];
    var kpis = kpiData.map(function (k, i) {
      return '<div class="kpi-badge"><div class="kpi-icon" style="background:' + kpiColors[i] + ';color:' + kpiIconColors[i] + ';">' + kpiIcons[i] + '</div>' +
        '<div class="kpi-body"><div class="kpi-value">' + k.v + '</div><div class="kpi-label">' + k.l + '</div></div></div>';
    }).join('');

    // status bar chart
    var scount = {}; DB.statuses.forEach(function (s) { scount[s] = 0; });
    ts.forEach(function (t) { scount[t.status]++; });
    var smax = Math.max.apply(null, DB.statuses.map(function (s) { return scount[s]; }).concat([1]));
    var scolors = { 'New': '#6366f1', 'Assigned': '#0ea5e9', 'In Progress': '#eab308', 'On Hold': '#94a3b8', 'Resolved': '#22c55e', 'Closed': '#9ca3af' };
    var bars = DB.statuses.map(function (s) {
      var h = Math.round(scount[s] / smax * 130) + (scount[s] ? 6 : 0);
      return '<div class="col"><div class="n">' + scount[s] + '</div><div class="bar" style="height:' + h + 'px;background:' + scolors[s] + ';"></div><div class="lbl">' + s.replace(' ', '&nbsp;') + '</div></div>';
    }).join('');

    // severity breakdown
    var sevs = DB.severities || ['Critical', 'Major', 'Minor', 'Low'];
    var svcount = {}; sevs.forEach(function (s) { svcount[s] = 0; });
    ts.forEach(function (t) { if (t.severity) svcount[t.severity]++; });
    var stot = ts.length || 1;
    var svcolors = { 'Critical': '#b91c1c', 'Major': '#c2410c', 'Minor': '#0369a1', 'Low': '#64748b' };
    var svlegend = sevs.map(function (s) {
      return '<div class="li"><span class="sw" style="background:' + svcolors[s] + ';"></span> ' + s +
        ' <b style="margin-left:auto;">' + svcount[s] + ' (' + Math.round(svcount[s] / stot * 100) + '%)</b></div>';
    }).join('');

    // FR-30: Ticket type breakdown
    var incidentCount = ts.filter(function (t) { return t.ticketType === 'INCIDENT'; }).length;
    var srCount = ts.filter(function (t) { return t.ticketType === 'SERVICE_REQUEST'; }).length;
    var typeBreakdown = '<div class="legend" style="flex-direction:column;gap:10px;">' +
      '<div class="li"><span class="sw" style="background:#dc2626;"></span> Incidents <b style="margin-left:auto;">' + incidentCount + '</b></div>' +
      '<div class="li"><span class="sw" style="background:#2563eb;"></span> Service Requests <b style="margin-left:auto;">' + srCount + '</b></div>' +
      '</div>';

    // Priority breakdown
    var prios = DB.priorities || ['P1', 'P2', 'P3', 'P4'];
    var prcount = { 'Untriaged': 0 }; prios.forEach(function (p) { prcount[p] = 0; });
    ts.forEach(function (t) { if (t.priority) prcount[t.priority]++; else prcount['Untriaged']++; });
    var prcolors = { 'P1': '#b91c1c', 'P2': '#c2410c', 'P3': '#0369a1', 'P4': '#64748b', 'Untriaged': '#d4d4d8' };
    var prlegend = ['Untriaged'].concat(prios).map(function (p) {
      return '<div class="li"><span class="sw" style="background:' + prcolors[p] + ';"></span> ' + (p === 'Untriaged' ? '<i>Untriaged</i>' : p) +
        ' <b style="margin-left:auto;">' + prcount[p] + '</b></div>';
    }).join('');

    // FR-28: Average resolution time
    var resolvedTickets = ts.filter(function (t) { return t.resolvedAt; });
    var avgResHours = 0;
    if (resolvedTickets.length) {
      var totalMs = resolvedTickets.reduce(function (sum, t) {
        return sum + (new Date(t.resolvedAt).getTime() - new Date(t.createdAt).getTime());
      }, 0);
      avgResHours = Math.round(totalMs / resolvedTickets.length / (1000 * 3600));
    }
    var avgResDisplay = avgResHours >= 24 ? Math.round(avgResHours / 24) + ' days' : avgResHours + ' hrs';

    // FR-28: Tickets handled per agent
    var agentStats = DB.users.filter(function (x) { return x.role === 'Support Agent'; }).map(function (a) {
      var assigned = ts.filter(function (t) { return t.assignedTo === a.id; });
      var openT = assigned.filter(function (t) { return t.status !== 'Closed' && t.status !== 'Resolved'; }).length;
      var closedT = assigned.filter(function (t) { return t.status === 'Closed' || t.status === 'Resolved'; }).length;
      return { name: a.name, tier: a.tier || '\u2014', open: openT, closed: closedT, total: assigned.length };
    });
    var agentRows = agentStats.map(function (a) {
      return '<tr><td><b>' + esc(a.name) + '</b></td><td>' + esc(a.tier) + '</td><td>' + a.open + '</td><td>' + a.closed + '</td><td>' + a.total + '</td></tr>';
    }).join('');

    // company breakdown (admin/agent only)
    var companyCard = '';
    if (isAdmin(u) || isAgent(u)) {
      var companyIds = isAdmin(u)
        ? DB.companies.filter(function (c) { return c.status === 'Active'; }).map(function (c) { return c.id; })
        : agentCompanyIds(u);
      var crows = companyIds.map(function (cid) {
        var c = company(cid);
        var ct = ts.filter(function (t) { return t.companyId === cid; });
        var o = ct.filter(function (t) { return t.status !== 'Closed' && t.status !== 'Resolved'; }).length;
        var ip = ct.filter(function (t) { return t.status === 'In Progress'; }).length;
        var rs = ct.filter(function (t) { return t.status === 'Resolved' || t.status === 'Closed'; }).length;
        var br = ct.filter(function (t) { return slaStatus(t) === 'breached'; }).length;
        var cResolved = ct.filter(function (t) { return (t.status === 'Resolved' || t.status === 'Closed') && t.slaDueDate; });
        var cOnTime = cResolved.filter(function (t) {
          var rt = new Date(t.resolvedAt || t.closedAt).getTime();
          return rt <= new Date(t.slaDueDate).getTime();
        }).length;
        var cSlaPct = cResolved.length ? Math.round(cOnTime / cResolved.length * 100) : 100;
        var cSlaCls = cSlaPct >= 90 ? 'sla-pct-green' : (cSlaPct >= 70 ? 'sla-pct-yellow' : 'sla-pct-red');
        return '<tr><td><b>' + esc(c.name) + '</b></td><td>' + o + '</td><td>' + ip + '</td><td>' + rs + '</td><td>' + (br ? '<span class="sla-badge sla-breach">' + br + '</span>' : '0') + '</td><td><span class="' + cSlaCls + '">' + cSlaPct + '%</span></td></tr>';
      }).join('');
      var cardLabel = isAdmin(u) ? 'Tickets by Client Company <span class="sub">System Admin \u2014 cross-tenant view</span>' : 'Tickets by Client';
      companyCard = '<div class="card" style="margin-top:16px;"><div class="card-hd">' + cardLabel + '</div>' +
        '<table class="t"><thead><tr><th>Company</th><th>Open</th><th>In Progress</th><th>Resolved/Closed</th><th>SLA Breach</th><th>SLA Compliance</th></tr></thead><tbody>' + crows + '</tbody></table></div>';
    }

    // Tickets by Project breakdown (admin/agent only)
    var projectCard = '';
    if (isAdmin(u) || isAgent(u)) {
      var visProjs = isAdmin(u)
        ? (DB.projects || []).filter(function (p) { return p.isActive; })
        : (DB.projects || []).filter(function (p) { return p.isActive && agentProjectIds(u).indexOf(p.id) >= 0; });
      var prows = visProjs.map(function (p) {
        var c = company(p.companyId);
        var pt = ts.filter(function (t) { return t.projectId === p.id; });
        var po = pt.filter(function (t) { return t.status !== 'Closed' && t.status !== 'Resolved'; }).length;
        var pbr = pt.filter(function (t) { return slaStatus(t) === 'breached'; }).length;
        return '<tr><td><b>' + esc(p.projectName) + '</b></td><td>' + esc(c.name) + '</td><td>' + po + '</td><td>' + pt.length + '</td><td>' + (pbr ? '<span class="sla-badge sla-breach">' + pbr + '</span>' : '0') + '</td></tr>';
      }).join('');
      projectCard = '<div class="card" style="margin-top:16px;"><div class="card-hd">Tickets by Project</div>' +
        '<table class="t"><thead><tr><th>Project</th><th>Company</th><th>Open</th><th>Total</th><th>SLA Breach</th></tr></thead><tbody>' + prows + '</tbody></table></div>';
    }

    // Analytics card (FR-28)
    var analyticsCard =
      '<div class="card" style="margin-top:16px;"><div class="card-hd">Operational Analytics <span class="sub">FR-28</span></div>' +
      '<div class="card-bd"><div class="grid cols-2">' +
        '<div><div class="stat" style="border:0;box-shadow:none;padding:0;"><span class="label">Avg Resolution Time</span><span class="value" style="font-size:24px;">' + avgResDisplay + '</span></div></div>' +
        '<div><div class="stat" style="border:0;box-shadow:none;padding:0;"><span class="label">Resolved Tickets</span><span class="value" style="font-size:24px;">' + resolvedTickets.length + '</span></div></div>' +
      '</div>' +
      '<div style="margin-top:16px;"><div style="font-weight:600;font-size:13px;margin-bottom:8px;">Tickets per Agent</div>' +
      '<table class="t"><thead><tr><th>Agent</th><th>Tier</th><th>Open</th><th>Resolved/Closed</th><th>Total</th></tr></thead><tbody>' + agentRows + '</tbody></table></div>' +
      '</div></div>';

    var html = pageBar('Overview / Dashboard', 'Dashboard', '') +
      '<div class="content"><div class="grid cols-4">' + kpis + '</div>' +
      '<div class="grid cols-4" style="margin-top:16px;">' +
        '<div class="card"><div class="chart-region-hd">Tickets by Status</div><div class="card-bd"><div class="barchart">' + bars + '</div></div></div>' +
        '<div class="card"><div class="chart-region-hd">Tickets by Severity</div><div class="card-bd"><div class="legend" style="flex-direction:column;gap:10px;">' + svlegend + '</div></div></div>' +
        '<div class="card"><div class="chart-region-hd">Tickets by Priority</div><div class="card-bd"><div class="legend" style="flex-direction:column;gap:10px;">' + prlegend + '</div></div></div>' +
        '<div class="card"><div class="chart-region-hd">Tickets by Type <span class="sub">FR-30</span></div><div class="card-bd">' + typeBreakdown + '</div></div>' +
      '</div>' + companyCard + projectCard + analyticsCard + '</div>';
    renderShell(u, 'dashboard', html, tenantBanner(u));
  }

  /* ---------- page: QUEUE ---------- */
  function queueFilters(u) {
    if (isClient(u)) return [{ f: 'open', label: 'Open' }, { f: 'all', label: 'All' }];
    return [{ f: 'mine', label: 'Assigned to me' }, { f: 'unassigned', label: 'Unassigned' }, { f: 'all', label: 'All' }];
  }
  function defaultFilter(u) { return isAgent(u) ? 'mine' : (isAdmin(u) ? 'all' : 'open'); }
  function applyQueueFilter(ts, u, f) {
    if (f === 'mine') return ts.filter(function (t) { return t.assignedTo === u.id; });
    if (f === 'unassigned') return ts.filter(function (t) { return t.assignedTo == null && t.status !== 'Closed'; });
    if (f === 'open') return ts.filter(function (t) { return t.status !== 'Closed'; });
    return ts;
  }
  function renderQueue(u) {
    var all = visibleTickets(u);
    var companyId = qs('company');
    if (companyId) all = all.filter(function (t) { return t.companyId === companyId; });
    var projectFilter = qs('project');
    if (projectFilter) all = all.filter(function (t) { return t.projectId === projectFilter; });
    var filters = queueFilters(u);
    var f = qs('f') || defaultFilter(u);
    if (!filters.some(function (x) { return x.f === f; })) f = defaultFilter(u);
    var ts = applyQueueFilter(all, u, f).slice().sort(function (a, b) { return new Date(b.updatedAt) - new Date(a.updatedAt); });
    var showCompany = isAdmin(u) || isAgent(u);
    var cq = companyId ? '&company=' + encodeURIComponent(companyId) : '';
    var pq = projectFilter ? '&project=' + encodeURIComponent(projectFilter) : '';

    var chips = filters.map(function (x) {
      var n = applyQueueFilter(all, u, x.f).length;
      return '<a class="chip' + (x.f === f ? ' active' : '') + '" href="04-ticket-list.html?f=' + x.f + cq + pq + '">' +
        esc(x.label) + ' <span class="chip-n">' + n + '</span></a>';
    }).join('');
    var projTag = companyId ? '<a class="chip proj" href="04-ticket-list.html?f=' + f + pq + '" title="Clear company filter">&#128193; ' + esc(company(companyId).name) + ' &#10005;</a>' : '';
    var projFilterTag = projectFilter ? '<a class="chip proj" href="04-ticket-list.html?f=' + f + cq + '" title="Clear project filter">&#128194; ' + esc(project(projectFilter).projectName || projectFilter) + ' &#10005;</a>' : '';

    // Build facet data
    var facetDefs = [
      { field: 'status', label: 'Status' },
      { field: 'severity', label: 'Severity' },
      { field: 'priority', label: 'Priority' },
      { field: 'type', label: 'Type' }
    ];
    if (showCompany) {
      facetDefs.push({ field: 'company', label: 'Company' });
      facetDefs.push({ field: 'project', label: 'Project' });
    }
    facetDefs.push({ field: 'assignee', label: 'Assignee' });

    var facetValues = {};
    facetDefs.forEach(function (fd) { facetValues[fd.field] = {}; });
    ts.forEach(function (t) {
      var sv = { status: t.status, severity: t.severity || 'Unset', priority: t.priority || 'Untriaged',
        type: t.ticketType === 'SERVICE_REQUEST' ? 'Service Request' : 'Incident',
        company: company(t.companyId).name || '?',
        project: project(t.projectId).projectName || '?',
        assignee: t.assignedTo ? (user(t.assignedTo) || {}).name || '?' : 'Unassigned' };
      facetDefs.forEach(function (fd) {
        var val = sv[fd.field];
        facetValues[fd.field][val] = (facetValues[fd.field][val] || 0) + 1;
      });
    });

    var facetHtml = facetDefs.map(function (fd) {
      var vals = Object.keys(facetValues[fd.field]).sort();
      var items = vals.map(function (v) {
        return '<div class="facet-item" data-field="' + fd.field + '" data-value="' + esc(v) + '" onclick="sd.toggleFacet(\'' + fd.field + '\',\'' + esc(v).replace(/'/g, "\\'") + '\')">' +
          '<span class="fi-check">&#10003;</span> ' + esc(v) + '<span class="fi-count">' + facetValues[fd.field][v] + '</span></div>';
      }).join('');
      return '<div class="facet-group"><div class="fg-label">' + fd.label + ' <span class="facet-clear" onclick="sd.clearFacets(\'' + fd.field + '\')">Clear</span></div>' + items + '</div>';
    }).join('');

    var rows = ts.map(function (t) {
      var asg = t.assignedTo ? user(t.assignedTo) : null;
      var asgName = asg ? esc(asg.name) : '<span class="muted">\u2014 Unassigned</span>';
      var asgAttr = asg ? asg.name : 'Unassigned';
      var typeLabel = t.ticketType === 'SERVICE_REQUEST' ? 'Service Request' : 'Incident';
      var projName = project(t.projectId).projectName || '\u2014';
      return '<tr data-status="' + esc(t.status) + '" data-severity="' + esc(t.severity || 'Unset') + '" data-priority="' + esc(t.priority || 'Untriaged') + '" data-type="' + esc(typeLabel) + '" data-company="' + esc(company(t.companyId).name) + '" data-project="' + esc(projName) + '" data-assignee="' + esc(asgAttr) + '">' +
        '<td><a class="ref" href="05-ticket-detail.html?id=' + t.id + '">' + t.ref + '</a></td>' +
        '<td>' + esc(t.subject) + '</td>' +
        '<td>' + typeBadge(t.ticketType) + '</td>' +
        (showCompany ? '<td>' + esc(company(t.companyId).name) + '</td>' : '') +
        (showCompany ? '<td>' + esc(projName) + '</td>' : '') +
        '<td>' + sevBadge(t.severity) + '</td>' +
        '<td>' + prioBadge(t.priority) + '</td>' +
        '<td>' + statusBadge(t.status) + '</td>' +
        '<td>' + asgName + '</td>' +
        '<td class="muted">' + ageDays(t.createdAt) + '</td>' +
        '<td>' + slaBadge(t) + '</td>' +
        '</tr>';
    }).join('');
    if (!rows) {
      var colSpan = showCompany ? 11 : 9;
      rows = '<tr><td colspan="' + colSpan + '" class="muted">No tickets visible to you.</td></tr>';
    }
    var actions = canCreate(u) ? '<a class="btn btn-primary" href="06-create-ticket.html">&#10133; New Ticket</a>' : '';
    window._facetState = {};

    var html = pageBar('Tickets / Queue', isClient(u) ? 'My Tickets' : 'Ticket Queue', actions) +
      '<div class="content"><div class="card" style="overflow:hidden;">' +
      '<div class="toolbar">' + chips + projTag + projFilterTag + '</div>' +
      '<div class="queue-layout">' +
        '<div class="facet-panel">' + facetHtml + '</div>' +
        '<div class="queue-main">' +
          '<div class="ir-toolbar">' +
            '<div class="ir-search">&#128270; <input id="q" placeholder="Search reference or keyword\u2026" oninput="sd.filterQueue()"></div>' +
            '<div class="ir-actions">' +
              '<button class="ir-btn">Actions &#9662;</button>' +
              '<span class="ir-count" id="qcount">' + ts.length + ' results</span>' +
            '</div>' +
          '</div>' +
          '<table class="t" id="qtable"><thead><tr>' +
            '<th class="sortable">Ref <span class="sort-icon">&#9650;</span></th>' +
            '<th class="sortable">Subject</th>' +
            '<th class="sortable">Type</th>' +
            (showCompany ? '<th class="sortable">Company</th>' : '') +
            (showCompany ? '<th class="sortable">Project</th>' : '') +
            '<th class="sortable">Severity</th>' +
            '<th class="sortable">Priority</th>' +
            '<th class="sortable">Status</th>' +
            '<th class="sortable">Assignee</th>' +
            '<th class="sortable">Age <span class="sort-icon">&#9660;</span></th>' +
            '<th>SLA</th>' +
          '</tr></thead><tbody>' + rows + '</tbody></table>' +
          '<div class="ir-pagination">' +
            '<span>1 - ' + ts.length + ' of ' + ts.length + '</span>' +
            '<button>&#9664;</button><button>&#9654;</button>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '</div></div>';
    renderShell(u, 'queue', html, tenantBanner(u));
  }

  /* ---------- page: TICKET DETAIL ---------- */
  function renderDetail(u) {
    var t = DB.tickets.find(function (x) { return x.id === qs('id'); });
    if (!t) { renderShell(u, 'queue', notFound('Ticket not found.'), ''); return; }
    if (!canSee(u, t)) { renderShell(u, 'queue', notFound('&#128274; You don\u2019t have access to this ticket. (Tenant isolation in action.)'), ''); return; }

    var trs = transitions(t, u).map(function (a) {
      if (a.action === 'resolve') return '<button class="btn ' + a.cls + '" onclick="sd.showResolve(\'' + t.id + '\')">' + a.icon + ' ' + a.label + '</button>';
      if (a.action === 'close') return '<button class="btn ' + a.cls + '" onclick="sd.showClose(\'' + t.id + '\')">' + a.icon + ' ' + a.label + '</button>';
      return '<button class="btn ' + a.cls + '" onclick="sd.changeStatus(\'' + t.id + '\',\'' + a.to + '\')">' + a.icon + ' ' + a.label + '</button>';
    }).join('');

    var assignBtn = '';
    if (canAssign(u, t)) {
      assignBtn = '<a class="btn" href="07-assign.html?id=' + t.id + '">&#128100; ' + (t.assignedTo ? 'Reassign' : 'Assign') + '</a>';
    }
    var selfAssignBtn = '';
    if (canSelfAssign(u, t)) {
      selfAssignBtn = '<button class="btn btn-primary" onclick="sd.selfAssign(\'' + t.id + '\')">&#9997; Self-Assign</button>';
    }
    var escalateBtn = '';
    if (canEscalate(u, t)) {
      escalateBtn = '<button class="btn btn-escalate" onclick="sd.showEscalate(\'' + t.id + '\')">&#9888; Escalate</button>';
    }
    var prioBtn = '';
    if (canSetPriority(u) && !t.priority && t.status !== 'Closed') {
      prioBtn = '<button class="btn" onclick="sd.showSetPriority(\'' + t.id + '\')">&#9873; Set Priority</button>';
    }

    var comments = DB.comments.filter(function (c) { return c.ticketId === t.id; })
      .filter(function (c) { return !c.isInternal || canInternalNote(u); })
      .sort(function (a, b) { return new Date(a.createdAt) - new Date(b.createdAt); });
    var cHtml = comments.map(function (c) {
      var au = user(c.userId) || { name: '?' };
      var cFiles = commentAttachments(c.id);
      return '<div class="comment ' + (c.isInternal ? 'internal' : '') + '"><div class="av">' + initials(au.name) + '</div>' +
        '<div style="flex:1;"><div class="head"><b>' + esc(au.name) + '</b> &middot; ' + esc(au.role || '') +
        (c.isInternal ? ' &middot; <span class="badge st-progress">&#128274; Internal note</span>' : '') + ' &middot; ' + timeAgo(c.createdAt) + '</div>' +
        '<div class="body">' + esc(c.text) + '</div>' + inlineAttachHtml(cFiles) + '</div></div>';
    }).join('') || '<div class="muted">No comments yet.</div>';

    var hist = DB.history.filter(function (h) { return h.ticketId === t.id; })
      .sort(function (a, b) { return new Date(b.createdAt) - new Date(a.createdAt); })
      .map(function (h) {
        var hu = user(h.userId) || { name: '?' };
        var actionLabel = historyActionLabel(h);
        var chg = h.oldValue ? esc(h.oldValue) + ' &#8594; ' + esc(h.newValue) : esc(h.newValue);
        return '<li><span class="pt"></span><div><span class="who">' + esc(hu.name) + '</span> ' + esc(actionLabel) + '</div>' +
          '<div class="meta">' + chg + ' &middot; ' + timeAgo(h.createdAt) + '</div></li>';
      }).join('');

    var cu = user(t.createdBy) || { name: '?' };
    var sla = slaTarget(t.projectId, t.severity);
    var slaInfo = sla ? 'SLA: ' + sla.resolutionDays + 'd resolution' : '';
    var actionsHtml = assignBtn + selfAssignBtn + escalateBtn + prioBtn + trs +
      '<a class="btn btn-primary" href="08-add-comment.html?id=' + t.id + '">&#128172; Comment</a>';

    // CSAT section (FR-27)
    var csatSection = '';
    if (t.status === 'Closed') {
      var canRate = isClient(u) && t.companyId === u.companyId && u.id === t.createdBy && !t.csatScore;
      csatSection = '<div class="field" style="margin-top:12px;"><label>Customer Satisfaction (CSAT)</label><div>' +
        csatStars(t.csatScore, canRate) + '</div></div>';
    }

    var main =
      pageBar('<a href="04-ticket-list.html">Queue</a> / ' + t.ref, t.subject, actionsHtml) +
      '<div class="content" style="display:grid;grid-template-columns:1fr 300px;gap:16px;">' +
        '<div><div class="card"><div class="card-hd">' + t.ref + ' ' + typeBadge(t.ticketType) + ' ' + statusBadge(t.status) + ' ' + sevBadge(t.severity) + ' ' + prioBadge(t.priority) + ' ' + slaBadge(t) + '</div>' +
          '<div class="card-bd"><p style="margin-top:0;">' + esc(t.description) + '</p>' +
          inlineAttachHtml(ticketAttachments(t.id).filter(function (a) { return !a.commentId; })) +
          '<div class="grid cols-4" style="gap:8px;margin-top:8px;">' +
            '<div><div class="muted" style="font-size:11.5px;">Category</div><div>' + esc(category(t.categoryId).name) + '</div></div>' +
            '<div><div class="muted" style="font-size:11.5px;">Raised by</div><div>' + esc(cu.name) + '</div></div>' +
            '<div><div class="muted" style="font-size:11.5px;">Company</div><div>' + esc(company(t.companyId).name) + '</div></div>' +
            '<div><div class="muted" style="font-size:11.5px;">Project</div><div>' + esc(project(t.projectId).projectName || '\u2014') + '</div></div>' +
          '</div></div></div>' +
          '<div class="card" style="margin-top:16px;"><div class="card-hd">Conversation' +
            '<a class="btn btn-sm btn-primary" style="margin-left:auto;" href="08-add-comment.html?id=' + t.id + '">&#128172; Add Comment</a></div>' +
            '<div class="card-bd">' + cHtml + '</div></div>' +
          (function () {
            var allFiles = ticketAttachments(t.id);
            if (!allFiles.length) return '';
            return '<div class="card" style="margin-top:16px;"><div class="card-hd">&#128206; Attachments <span class="sub">' + allFiles.length + ' file' + (allFiles.length > 1 ? 's' : '') + '</span></div>' +
              '<div class="card-bd"><div class="attach-grid">' + allFiles.map(function (a) {
                var up = user(a.uploadedBy) || { name: '?' };
                var context = a.commentId ? 'on comment' : 'on ticket';
                return '<div class="attach-row"><span class="ar-icon">' + fileIcon(a.mimeType) + '</span>' +
                  '<div class="ar-info"><div class="ar-name">' + esc(a.fileName) + '</div>' +
                  '<div class="ar-meta">' + fileSize(a.fileSize) + ' &middot; ' + esc(up.name) + ' &middot; ' + timeAgo(a.uploadedAt) + ' &middot; ' + context + '</div></div>' +
                  '<span class="ar-dl">&#8595; Download</span></div>';
              }).join('') + '</div></div></div>';
          })() + '</div>' +
        '<div><div class="card"><div class="card-hd">Properties</div><div class="card-bd form-grid">' +
            '<div class="field"><label>Status</label><input value="' + esc(t.status) + '" disabled></div>' +
            '<div class="field"><label>Ticket Type</label><div>' + typeBadge(t.ticketType) + '</div></div>' +
            '<div class="field"><label>Severity</label><div>' + sevBadge(t.severity) + '</div></div>' +
            '<div class="field"><label>Priority</label><div>' + prioBadge(t.priority) + '</div></div>' +
            '<div class="field"><label>Assignee</label><input value="' + esc(t.assignedTo ? user(t.assignedTo).name : 'Unassigned') + '" disabled></div>' +
            '<div class="field"><label>Company</label><input value="' + esc(company(t.companyId).name) + '" disabled></div>' +
            '<div class="field"><label>Project</label><input value="' + esc(project(t.projectId).projectName || '\u2014') + '" disabled></div>' +
            '<div class="field"><label>Department</label><input value="' + esc(department(t.departmentId).name || '\u2014') + '" disabled></div>' +
            '<div class="field"><label>SLA Due</label><input value="' + (t.slaDueDate ? new Date(t.slaDueDate).toLocaleDateString() : '\u2014') + '" disabled></div>' +
            '<div class="field"><label>' + slaInfo + '</label><div>' + slaBadge(t) + '</div></div>' +
            (t.firstResponseAt ? '<div class="field"><label>First Response</label><input value="' + timeAgo(t.firstResponseAt) + '" disabled></div>' : '') +
            (t.reopenCount > 0 ? '<div class="field"><label>Reopen Count</label><input value="' + t.reopenCount + '" disabled></div>' : '') +
            ((t.status === 'Resolved' || t.status === 'Closed') && t.resolutionCode ? '<div class="field"><label>Resolution Code</label><input value="' + esc(t.resolutionCode) + '" disabled></div>' +
              '<div class="field"><label>Resolution Summary</label><div style="font-size:13px;">' + esc(t.resolutionSummary || '') + '</div></div>' : '') +
            csatSection +
          '</div></div>' +
          '<div class="card" style="margin-top:16px;"><div class="card-hd">Activity History</div>' +
            '<div class="card-bd"><ul class="timeline">' + hist + '</ul></div></div></div>' +
      '</div>';
    renderShell(u, 'queue', main, '');
  }
  function notFound(msg) { return '<div class="content"><div class="card"><div class="card-bd"><p>' + msg + '</p><a class="btn" href="04-ticket-list.html">&#8592; Back to queue</a></div></div></div>'; }

  function historyActionLabel(h) {
    var map = {
      'STATUS_CHANGE': 'Changed status',
      'ASSIGN': 'Assigned',
      'ESCALATE': 'Escalated',
      'PRIORITY_CHANGE': 'Set priority',
      'COMMENT': 'Commented',
      'CSAT': 'Rated support'
    };
    return map[h.action] || h.action;
  }

  /* ---------- modal pages: CREATE / ASSIGN / COMMENT / ESCALATE ---------- */
  function renderModalPage(u, activeKey, behindHtml, modalHtml) {
    renderShell(u, activeKey, '<div class="behind">' + behindHtml + '</div>', '');
    var wrap = document.createElement('div');
    wrap.className = 'modal-backdrop';
    wrap.innerHTML = modalHtml;
    document.body.appendChild(wrap);
  }

  function renderCreate(u) {
    if (!canCreate(u)) { renderShell(u, 'queue', notFound('Only client users can raise tickets.'), ''); return; }
    pendingFiles = [];
    // Project selector for the user's company
    var userProjs = companyProjects(u.companyId);
    if (!isClientAdmin(u)) {
      var accessIds = userAccessibleProjectIds(u);
      userProjs = userProjs.filter(function (p) { return accessIds.indexOf(p.id) >= 0; });
    }
    var projOpts = userProjs.map(function (p, i) {
      return '<option value="' + p.id + '"' + (i === 0 ? ' selected' : '') + '>' + esc(p.projectName) + '</option>';
    }).join('');
    var defaultProjId = userProjs.length ? userProjs[0].id : null;

    // Categories filtered by project
    var cats = DB.categories.filter(function (c) {
      if (c.status !== 'Active') return false;
      if (c.projectId && c.projectId !== defaultProjId) return false;
      if (c.companyId && c.companyId !== u.companyId) return false;
      return true;
    }).map(function (c) { return '<option value="' + c.id + '">' + esc(c.name) + '</option>'; }).join('');

    var sevs = (DB.severities || ['Critical', 'Major', 'Minor', 'Low']).map(function (s) {
      return '<option' + (s === 'Minor' ? ' selected' : '') + '>' + s + '</option>';
    }).join('');
    var typeOpts = (DB.ticketTypes || ['INCIDENT', 'SERVICE_REQUEST']).map(function (t) {
      return '<option value="' + t + '"' + (t === 'INCIDENT' ? ' selected' : '') + '>' + (t === 'SERVICE_REQUEST' ? 'Service Request' : 'Incident') + '</option>';
    }).join('');
    // Agent LOV: filter by agents covering the selected project (L1 only for clients)
    var agentPool = DB.users.filter(function (x) {
      return x.role === 'Support Agent' && agentCoversProject(x.id, defaultProjId) && (isClientAdmin(u) || agentTier(x.id) === 'L1');
    });
    var agentOpts = '<option value="">\u2014 Unassigned \u2014</option>' + agentPool.map(function (a) {
      var load = DB.tickets.filter(function (x) { return x.assignedTo === a.id && x.status !== 'Closed'; }).length;
      var aTier = agentTier(a.id);
      return '<option value="' + a.id + '">' + esc(a.name) + (aTier ? ' [' + aTier + ']' : '') + ' \u00b7 ' + load + ' open</option>';
    }).join('');
    var dept = department(u.departmentId);
    var projLabel = userProjs.length > 1 ? '' : ' style="display:none;"';
    var modal = '<div class="modal lg"><div class="m-hd"><h2>Raise a Ticket</h2><span class="x" onclick="location.href=\'04-ticket-list.html\'">&#10005;</span></div>' +
      '<div class="m-bd"><div class="tenant-banner" style="border-radius:4px;margin-bottom:16px;">&#128274; Filed under <b>' + esc(company(u.companyId).name) + '</b>' + (dept.name ? ' / <b>' + esc(dept.name) + '</b>' : '') + ' automatically.</div>' +
      '<div class="form-grid cols-2">' +
        '<div class="field"><label>Project <span class="req">*</span></label><select id="createProject" onchange="sd.onCreateProjectChange()">' + projOpts + '</select>' +
          '<span class="hint">Service engagement / project scope.</span></div>' +
        '<div class="field full"><label>Ticket Type <span class="req">*</span></label><select id="ticketType">' + typeOpts + '</select>' +
          '<span class="hint">Incident = something is broken. Service Request = a standard request.</span></div>' +
        '<div class="field full"><label>Subject <span class="req">*</span></label><input id="subject" placeholder="Short summary"></div>' +
        '<div class="field full"><label>Description <span class="req">*</span></label><textarea id="desc" placeholder="Describe the issue\u2026"></textarea></div>' +
        '<div class="field"><label>Category <span class="req">*</span></label><select id="cat">' + cats + '</select></div>' +
        '<div class="field"><label>Severity <span class="req">*</span></label><select id="sev">' + sevs + '</select>' +
          '<span class="hint">Critical = Complete outage affecting all users. Major = Significant impact, workaround possible. Minor = Limited impact. Low = Cosmetic or nice-to-have.</span></div>' +
        '<div class="field"><label>Assign to</label><select id="createAgent">' + agentOpts + '</select>' +
          '<span class="hint">Pick a support agent (optional).</span></div>' +
        attachZoneHtml() +
      '</div></div><div class="m-ft"><a class="btn" href="04-ticket-list.html">Cancel</a>' +
      '<button class="btn btn-primary" onclick="sd.createTicket()">&#10133; Submit Ticket</button></div></div>';
    renderModalPage(u, 'create', queueBehind(u), modal);
  }
  function queueBehind(u) { return pageBar('Tickets / Queue', isClient(u) ? 'My Tickets' : 'Ticket Queue', '') + '<div class="content"><div class="card" style="height:300px;"></div></div>'; }

  function renderAssign(u) {
    var t = DB.tickets.find(function (x) { return x.id === qs('id'); });
    if (!t || !canAssign(u, t)) { renderShell(u, 'queue', notFound('Not allowed, or ticket missing.'), ''); return; }
    // Decision J: For clients, only L1 agents covering this ticket's project
    var pool;
    if (isClient(u)) {
      pool = DB.users.filter(function (x) { return x.role === 'Support Agent' && agentCoversProject(x.id, t.projectId) && agentTier(x.id) === 'L1'; });
    } else {
      pool = DB.users.filter(function (x) { return x.role === 'Support Agent' && agentCoversProject(x.id, t.projectId); });
      if (!pool.length) pool = DB.users.filter(function (x) { return x.role === 'Support Agent'; });
    }
    var agents = pool.map(function (a) {
      var load = DB.tickets.filter(function (x) { return x.assignedTo === a.id && x.status !== 'Closed'; }).length;
      var aTier = agentTier(a.id);
      return '<option value="' + a.id + '"' + (t.assignedTo === a.id ? ' selected' : '') + '>' + esc(a.name) + (aTier ? ' [' + aTier + ']' : '') + ' &middot; ' + load + ' open</option>';
    }).join('');
    var modal = '<div class="modal"><div class="m-hd"><h2>Assign &middot; ' + t.ref + '</h2><span class="x" onclick="location.href=\'05-ticket-detail.html?id=' + t.id + '\'">&#10005;</span></div>' +
      '<div class="m-bd"><p class="muted mt-0">Put an agent on <b>' + esc(t.subject) + '</b> (' + esc(company(t.companyId).name) + ' / ' + esc(project(t.projectId).projectName || '') + ', ' + esc(t.severity) + ').</p>' +
      (isClient(u) ? '<div class="tenant-banner" style="border-radius:4px;margin-bottom:12px;">&#128274; Only agents assigned to project <b>' + esc(project(t.projectId).projectName || '') + '</b> are shown.</div>' : '') +
      '<div class="form-grid"><div class="field"><label>Assign to agent <span class="req">*</span></label><select id="agent">' + agents + '</select></div>' +
      '<div class="field"><label class="switch on" id="emailSw" onclick="this.classList.toggle(\'on\')"><span class="track"></span> Send assignment email (simulated)</label></div>' +
      '</div></div><div class="m-ft"><a class="btn" href="05-ticket-detail.html?id=' + t.id + '">Cancel</a>' +
      '<button class="btn btn-primary" onclick="sd.assign(\'' + t.id + '\')">&#128100; Assign</button></div></div>';
    renderModalPage(u, 'queue', detailBehind(t), modal);
  }
  function detailBehind(t) { return pageBar('Queue / ' + t.ref, t.subject, '') + '<div class="content"><div class="card" style="height:300px;"></div></div>'; }

  function renderComment(u) {
    var t = DB.tickets.find(function (x) { return x.id === qs('id'); });
    if (!t || !canSee(u, t)) { renderShell(u, 'queue', notFound('Not allowed, or ticket missing.'), ''); return; }
    var internalToggle = canInternalNote(u) ?
      '<div class="field"><label class="switch" id="intSw" onclick="this.classList.toggle(\'on\')"><span class="track"></span> &#128274; Internal note (hidden from client)</label></div>' : '';
    pendingFiles = [];
    var modal = '<div class="modal"><div class="m-hd"><h2>Add Comment &middot; ' + t.ref + '</h2><span class="x" onclick="location.href=\'05-ticket-detail.html?id=' + t.id + '\'">&#10005;</span></div>' +
      '<div class="m-bd"><div class="form-grid"><div class="field"><label>Comment <span class="req">*</span></label><textarea id="ctext" placeholder="Type your reply\u2026"></textarea></div>' +
      internalToggle + attachZoneHtml() + '</div></div><div class="m-ft"><a class="btn" href="05-ticket-detail.html?id=' + t.id + '">Cancel</a>' +
      '<button class="btn btn-primary" onclick="sd.addComment(\'' + t.id + '\')">&#128172; Post Comment</button></div></div>';
    renderModalPage(u, 'queue', detailBehind(t), modal);
  }

  /* ---------- admin pages ---------- */
  function renderCompanies(u) {
    if (!isAdmin(u)) { renderShell(u, 'home', notFound('System Admin only.'), ''); return; }
    var rows = DB.companies.map(function (c) {
      var tk = DB.tickets.filter(function (t) { return t.companyId === c.id; }).length;
      var us = DB.users.filter(function (x) { return x.companyId === c.id; }).length;
      var projCount = companyProjects(c.id).length;
      return '<tr><td><span class="ig-row-check"></span></td><td><b>' + esc(c.name) + '</b></td>' +
        '<td>' + projCount + '</td><td>' + tk + '</td><td>' + us + '</td>' +
        '<td><span class="' + (c.status === 'Active' ? 'tag-active' : 'tag-inactive') + '">&#9679; ' + c.status + '</span></td>' +
        '<td><a class="btn btn-sm btn-primary" href="17-company-detail.html?id=' + c.id + '">&#9881; Manage</a> ' +
        '<button class="btn btn-sm" onclick="sd.showEditCompany(\'' + c.id + '\')">&#9998; Edit</button></td></tr>';
    }).join('');
    var html = pageBar('Administration / Companies', 'Companies', '') +
      '<div class="content"><div class="card" style="overflow:hidden;" id="ig-companies-wrap">' +
      '<div class="ig-toolbar">' +
        '<button class="ir-btn primary" onclick="sd.showAddCompany()">+ Add Row</button>' +
        '<button class="ir-btn">&#128190; Save</button>' +
        '<div class="ir-search">&#128270; <input placeholder="Search\u2026" oninput="sd.igSearch(\'ig-companies\')"></div>' +
        '<div class="ir-actions" style="margin-left:auto;">' +
          '<button class="ir-btn">Actions &#9662;</button>' +
          '<span class="ir-count">' + DB.companies.length + ' rows</span>' +
        '</div>' +
      '</div>' +
      '<table class="t ig-table" id="ig-companies"><thead><tr><th style="width:30px;"></th><th class="sortable">Company</th><th class="sortable">Projects</th><th class="sortable">Tickets</th><th class="sortable">Users</th><th class="sortable">Status</th><th>Actions</th></tr></thead><tbody>' + rows + '</tbody></table></div>' +
      '<p class="muted" style="font-size:11.5px;margin-top:12px;">Page 9 \u2014 APEX Interactive Grid. FR-5: create/edit/deactivate companies.</p></div>';
    renderShell(u, 'companies', html, tenantBanner(u));
  }

  /* ---------- page: PROJECTS (Page 11 - projects) ---------- */
  function renderProjects(u) {
    if (!isAdmin(u)) { renderShell(u, 'home', notFound('System Admin only.'), ''); return; }
    var allProjects = DB.projects || [];
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
      return '<tr data-proj-company="' + esc(p.companyId) + '"><td><span class="ig-row-check"></span></td>' +
        '<td><b>' + esc(p.projectName) + '</b></td><td>' + esc(p.projectKey) + '</td><td>' + esc(c.name) + '</td>' +
        '<td class="muted" style="font-size:12px;">' + esc(p.description || '') + '</td>' +
        '<td><span class="' + statusClass + '">&#9679; ' + (p.isActive ? 'Active' : 'Inactive') + '</span></td>' +
        '<td>' + tk + '</td><td>' + agCount + '</td>' +
        '<td><button class="btn btn-sm" onclick="sd.showEditProject(\'' + p.id + '\')">&#9998; Edit</button></td></tr>';
    }).join('');
    if (!rows) rows = '<tr><td colspan="9" class="muted">No projects yet.</td></tr>';
    var html = pageBar('Administration / Projects', 'Projects', '') +
      '<div class="content"><div class="card" style="overflow:hidden;" id="ig-projects-wrap">' +
      '<div class="ig-toolbar">' +
        '<button class="ir-btn primary" onclick="sd.showAddProject()">+ Add Row</button>' +
        '<div class="ir-search">&#128270; <input placeholder="Search\u2026" oninput="sd.igSearch(\'ig-projects\')"></div>' +
        '<div style="margin-left:8px;display:flex;align-items:center;gap:6px;"><label style="font-size:12px;white-space:nowrap;">Company:</label>' + companySelect + '</div>' +
        '<div class="ir-actions" style="margin-left:auto;">' +
          '<button class="ir-btn">Actions &#9662;</button>' +
          '<span class="ir-count" id="projects-row-count">' + allProjects.length + ' rows</span>' +
        '</div>' +
      '</div>' +
      '<table class="t ig-table" id="ig-projects"><thead><tr><th style="width:30px;"></th><th class="sortable">Project Name</th><th class="sortable">Key</th><th class="sortable">Company</th><th>Description</th><th class="sortable">Status</th><th class="sortable">Tickets</th><th class="sortable">Agents</th><th>Actions</th></tr></thead><tbody>' + rows + '</tbody></table></div>' +
      '<p class="muted" style="font-size:11.5px;margin-top:12px;">Decision O \u2014 PROJECTS layer between COMPANIES and TICKETS. Each company has one or more service-engagement projects.</p></div>';
    renderShell(u, 'projects', html, tenantBanner(u));
  }

  /* ---------- page: USER-PROJECTS (Page 18) ---------- */
  function renderUserProjects(u) {
    if (!isClientAdmin(u)) { renderShell(u, 'home', notFound('Client Admin only.'), ''); return; }
    var cProjs = companyProjects(u.companyId);
    var companyUsers = DB.users.filter(function (x) { return x.companyId === u.companyId && x.role === 'Client User' && x.status === 'Active'; });
    var currentMappings = (DB.userProjects || []).filter(function (up) { return companyUsers.some(function (cu) { return cu.id === up.userId; }); });

    var projRows = cProjs.map(function (p) {
      var mapped = currentMappings.filter(function (m) { return m.projectId === p.id; });
      var accessHtml;
      if (mapped.length === 0) {
        accessHtml = '<span class="muted">All users (open default)</span>';
      } else {
        accessHtml = mapped.map(function (m) {
          var usr = user(m.userId);
          return '<span class="cover-tag">' + esc(usr ? usr.name : m.userId) +
            ' <span style="cursor:pointer;color:#b91c1c;" onclick="sd.removeUserProject(\'' + m.userId + '\',\'' + p.id + '\')">&times;</span></span>';
        }).join(' ');
      }
      return '<tr><td><b>' + esc(p.projectName) + '</b></td><td>' + esc(p.projectKey) + '</td><td>' + accessHtml + '</td>' +
        '<td><button class="btn btn-sm" onclick="sd.showAddUserProject(\'' + p.id + '\')">&#10133; Add User</button></td></tr>';
    }).join('');
    if (!projRows) projRows = '<tr><td colspan="4" class="muted">No active projects for your company.</td></tr>';

    var html = pageBar('Administration / User Access', 'User-Project Access', '') +
      '<div class="content">' +
      '<div class="card" style="margin-bottom:16px;"><div class="card-bd">' +
      '<p style="margin:0;font-size:13px;"><b>Open default:</b> If no users are explicitly listed for a project, <i>all</i> client users in your company can see that project\u2019s tickets. ' +
      'Add specific users below to restrict access to only those users. Managed by Client Admin (Decision N revised).</p></div></div>' +
      '<div class="card" style="overflow:hidden;">' +
      '<div class="card-hd">Projects &mdash; ' + esc(company(u.companyId).name) + '</div>' +
      '<table class="t"><thead><tr><th>Project</th><th>Key</th><th>Users with Access</th><th>Actions</th></tr></thead><tbody>' + projRows + '</tbody></table></div>' +
      '<p class="muted" style="font-size:11.5px;margin-top:12px;">Page 18 \u2014 USER_PROJECTS management. Client Admin scopes which client users can see which projects.</p></div>';
    renderShell(u, 'user-projects', html, tenantBanner(u));
  }

  function renderUsers(u) {
    if (!isAdmin(u)) { renderShell(u, 'home', notFound('System Admin only.'), ''); return; }
    var rows = DB.users.map(function (x) {
      var dept = department(x.departmentId);
      var statusClass = (x.status || 'Active') === 'Active' ? 'tag-active' : 'tag-inactive';
      var lastLoginStr = x.lastLogin ? new Date(x.lastLogin).toLocaleDateString() : '<span class="muted">Never</span>';
      var tierCell = x.tier ? x.tier : '<span class="muted">\u2014</span>';
      return '<tr><td><span class="ig-row-check"></span></td><td><b>' + esc(x.name) + '</b></td><td>' + esc(x.email) + '</td><td><span class="role-pill">' + esc(x.role) + '</span></td>' +
        '<td>' + esc(company(x.companyId).name) + '</td><td>' + tierCell + '</td>' +
        '<td>' + (dept.name ? esc(dept.name) : '<span class="muted">\u2014</span>') + '</td>' +
        '<td><span class="' + statusClass + '">&#9679; ' + (x.status || 'Active') + '</span></td>' +
        '<td>' + lastLoginStr + '</td>' +
        '<td><button class="btn btn-sm" onclick="sd.showEditUser(\'' + x.id + '\')">&#9998; Edit</button></td></tr>';
    }).join('');
    var allCompanies = DB.companies.filter(function(c) { return c.status === 'Active'; });
    var userCompanySelect = '<select id="users-company-filter" class="ig-filter-select" onchange="sd.filterUsersByCompany(this.value)">' +
      '<option value="all">All Companies (' + allCompanies.length + ')</option>' +
      allCompanies.map(function (c) {
        var count = DB.users.filter(function(u2) { return u2.companyId === c.id; }).length;
        return '<option value="' + c.id + '">' + esc(c.name) + ' (' + count + ' users)</option>';
      }).join('') + '</select>';
    var html = pageBar('Administration / Users', 'Users', '') +
      '<div class="content"><div class="card" style="overflow:hidden;" id="ig-users-wrap">' +
      '<div class="ig-toolbar">' +
        '<button class="ir-btn primary" onclick="sd.showAddUser()">+ Add Row</button>' +
        '<button class="ir-btn">&#128190; Save</button>' +
        '<div class="ir-search">&#128270; <input placeholder="Search\u2026" oninput="sd.igSearch(\'ig-users\')"></div>' +
        '<div style="margin-left:8px;display:flex;align-items:center;gap:6px;"><label for="users-company-filter" style="font-size:12px;white-space:nowrap;">Company:</label>' + userCompanySelect + '</div>' +
        '<div class="ir-actions" style="margin-left:auto;">' +
          '<button class="ir-btn">Actions &#9662;</button>' +
          '<span class="ir-count" id="users-row-count">' + DB.users.length + ' rows</span>' +
        '</div>' +
      '</div>' +
      '<table class="t ig-table" id="ig-users"><thead><tr><th style="width:30px;"></th><th class="sortable">Name</th><th class="sortable">Email</th><th class="sortable">Role</th><th class="sortable">Company</th><th class="sortable">Tier</th><th class="sortable">Dept</th><th class="sortable">Status</th><th class="sortable">Last Login</th><th>Actions</th></tr></thead><tbody>' + rows + '</tbody></table></div>' +
      '<p class="muted" style="font-size:11.5px;margin-top:12px;">Page 10 \u2014 APEX Interactive Grid. FR-6: create/edit/deactivate users. ISO \u00a76.6: access lifecycle.</p></div>';
    renderShell(u, 'users', html, tenantBanner(u));
  }
  function renderCategories(u) {
    if (!isAdmin(u)) { renderShell(u, 'home', notFound('System Admin only.'), ''); return; }
    var rows = DB.categories.map(function (c) {
      var n = DB.tickets.filter(function (t) { return t.categoryId === c.id && t.status !== 'Closed'; }).length;
      var scope = c.companyId ? esc(company(c.companyId).name) : '<span class="muted">Global</span>';
      var projScope = c.projectId ? esc(project(c.projectId).projectName || c.projectId) : '<span class="muted">All</span>';
      var statusClass = (c.status || 'Active') === 'Active' ? 'tag-active' : 'tag-inactive';
      return '<tr><td><b>' + esc(c.name) + '</b></td><td>' + scope + '</td><td>' + projScope + '</td><td class="muted" style="font-size:12px;">' + esc(c.description || '') + '</td><td>' + n + '</td>' +
        '<td><span class="' + statusClass + '">&#9679; ' + (c.status || 'Active') + '</span></td>' +
        '<td><button class="btn btn-sm" onclick="sd.showEditCategory(\'' + c.id + '\')">&#9998; Edit</button></td></tr>';
    }).join('');
    var html = pageBar('Administration / Categories', 'Categories, Severities & SLA', '') +
      '<div class="content"><div class="grid cols-3">' +
      '<div class="card" style="overflow:hidden;grid-column:span 2;" id="ig-cats-wrap"><div class="card-hd">Categories</div>' +
      '<div class="ig-toolbar">' +
        '<button class="ir-btn primary" onclick="sd.showAddCategory()">+ Add Row</button>' +
        '<button class="ir-btn">Actions &#9662;</button>' +
        '<div class="ir-search">&#128270; <input placeholder="Search\u2026" oninput="sd.igSearch(\'ig-cats\')"></div>' +
        '<span class="ir-count" style="margin-left:auto;">' + DB.categories.length + ' rows</span>' +
      '</div>' +
      '<table class="t" id="ig-cats"><thead><tr><th class="sortable">Category</th><th class="sortable">Company</th><th class="sortable">Project</th><th>Description</th><th class="sortable">Open</th><th class="sortable">Status</th><th>Actions</th></tr></thead><tbody>' + rows + '</tbody></table></div>' +
      '<div><div class="card" style="overflow:hidden;"><div class="card-hd">Severities (client-set)</div><table class="t"><thead><tr><th>Severity</th><th>Badge</th></tr></thead><tbody>' +
        (DB.severities || []).map(function (s) { return '<tr><td>' + s + '</td><td>' + sevBadge(s) + '</td></tr>'; }).join('') +
      '</tbody></table>' +
      '<div class="card-hd" style="border-top:1px solid var(--c-border-lt);margin-top:0;">Priorities (support-set)</div><table class="t"><thead><tr><th>Priority</th><th>Badge</th></tr></thead><tbody>' +
        (DB.priorities || []).map(function (p) { return '<tr><td>' + p + '</td><td>' + prioBadge(p) + '</td></tr>'; }).join('') +
      '</tbody></table></div>' +
      '</div>' +
      '</div><p class="muted" style="font-size:11.5px;margin-top:12px;">Page 11 \u2014 FR-7: categories (hybrid model: global + company/project-specific).</p></div>';
    renderShell(u, 'categories', html, tenantBanner(u));
  }

  /* ---------- page: SLA TARGETS (Page 13) ---------- */
  function renderSlaTargets(u) {
    if (!isAdmin(u)) { renderShell(u, 'home', notFound('System Admin only.'), ''); return; }
    // Group SLA targets by project
    var byProject = {};
    (DB.slaTargets || []).forEach(function (s) {
      var key = s.projectId || 'unknown';
      if (!byProject[key]) byProject[key] = [];
      byProject[key].push(s);
    });
    var allProjects = (DB.projects || []).filter(function (p) { return p.isActive; });

    var companySelect = '<select id="sla-company-filter" class="ig-filter-select" onchange="sd.filterSlaByCompany(this.value)">' +
      '<option value="all">All Companies</option>' +
      DB.companies.filter(function (c) { return c.status === 'Active'; }).map(function (c) {
        return '<option value="' + c.id + '">' + esc(c.name) + '</option>';
      }).join('') + '</select>';

    var tables = allProjects.map(function (p) {
      var c = company(p.companyId);
      var targets = byProject[p.id] || [];
      var firstTarget = targets[0] || {};
      var approver = firstTarget.approvedBy ? user(firstTarget.approvedBy) : null;
      var rows = targets.map(function (s) {
        var globalIdx = (DB.slaTargets || []).indexOf(s);
        return '<tr><td>' + sevBadge(s.severity) + '</td><td>' + s.responseHours + 'h</td><td>' + s.resolutionDays + 'd</td><td>' + (s.escalationPct || 80) + '%</td>' +
          '<td><button class="btn btn-sm" onclick="sd.showEditSla(' + globalIdx + ')">&#9998; Edit</button></td></tr>';
      }).join('');
      if (!rows) rows = '<tr><td colspan="5" class="muted">No targets configured \u2014 will use defaults.</td></tr>';
      var projTickets = DB.tickets.filter(function (t) { return t.projectId === p.id; });
      var openCount = projTickets.filter(function (t) { return t.status !== 'Closed' && t.status !== 'Resolved'; }).length;
      var breachedCount = projTickets.filter(function (t) { return slaStatus(t) === 'breached'; }).length;
      var govHtml = '<div style="padding:8px 12px;font-size:11.5px;color:#666;border-top:1px solid var(--c-border-lt);display:flex;gap:16px;flex-wrap:wrap;">' +
        '<span>Effective: <b>' + esc(firstTarget.effectiveFrom || '\u2014') + '</b></span>' +
        '<span>Approved by: <b>' + (approver ? esc(approver.name) : '\u2014') + '</b></span>' +
        (firstTarget.notes ? '<span>Notes: ' + esc(firstTarget.notes) + '</span>' : '') +
        '</div>';
      return '<div class="sla-company-card" data-sla-company="' + p.companyId + '">' +
        '<div class="card"><div class="card-hd"><span style="display:flex;align-items:center;gap:8px;">' + esc(p.projectName) +
        ' <span class="muted" style="font-size:12px;font-weight:400;">' + esc(c.name) + ' &middot; ' + openCount + ' open tickets' +
        (breachedCount ? ' &middot; <span style="color:#b91c1c;">' + breachedCount + ' breached</span>' : '') +
        '</span></span></div>' +
        '<table class="t"><thead><tr><th>Severity</th><th>Response Time</th><th>Resolution Time</th><th>Escalation %</th><th>Actions</th></tr></thead><tbody>' + rows + '</tbody></table>' +
        govHtml + '</div></div>';
    }).join('');

    var html = pageBar('Administration / SLA Targets', 'SLA Targets', '') +
      '<div class="content">' +
      '<div class="card" style="margin-bottom:16px;"><div class="card-bd">' +
      '<p style="margin:0;font-size:13px;">Each project has its own SLA targets per severity level. ' +
      'Response time = max time before first agent response. Resolution time = max time to resolve. ' +
      'Escalation threshold = % of SLA elapsed before auto-escalation triggers (FR-35).</p></div></div>' +
      '<div style="margin-bottom:16px;display:flex;align-items:center;gap:10px;"><label style="font-weight:600;font-size:13px;white-space:nowrap;">Filter by Company:</label>' + companySelect + '</div>' +
      '<div id="sla-panels">' + tables + '</div>' +
      '<p class="muted" style="font-size:11.5px;margin-top:12px;">Page 13 \u2014 APEX Interactive Grid. System Admin only. FR-23: SLA per project. ISO \u00a78.6.3: SLA governance.</p></div>';
    renderShell(u, 'sla', html, tenantBanner(u));
  }

  /* ---------- page: AGENT-PROJECT MAPPING (Page 14) ---------- */
  function renderAgentProjects(u) {
    if (!isAdmin(u)) { renderShell(u, 'home', notFound('System Admin only.'), ''); return; }
    var mappings = (DB.agentProjects || []);
    var rows = mappings.map(function (m, idx) {
      var a = user(m.userId);
      var p = project(m.projectId);
      var c = company(p.companyId || '');
      if (!a) return '';
      var aTier = agentTier(m.userId);
      return '<tr><td><span class="ig-row-check"></span></td><td><b>' + esc(a.name) + '</b></td><td>' + esc(a.email) + '</td><td>' + (aTier || '<span class="muted">&mdash;</span>') + '</td><td>' + esc(p.projectName || m.projectId) + '</td><td>' + esc(c.name || '\u2014') + '</td>' +
        '<td><button class="btn btn-sm" style="color:#b91c1c;" onclick="sd.removeAgentProject(' + idx + ')">&#10005; Remove</button></td></tr>';
    }).join('');
    if (!rows) rows = '<tr><td colspan="7" class="muted">No agent-project mappings yet.</td></tr>';
    var html = pageBar('Administration / Agent Mapping', 'Agent-Project Mapping', '') +
      '<div class="content"><div class="card" style="overflow:hidden;" id="ig-ac-wrap">' +
      '<div class="ig-toolbar">' +
        '<button class="ir-btn primary" onclick="sd.showAddAgentProject()">+ Add Row</button>' +
        '<div class="ir-search">&#128270; <input placeholder="Search\u2026" oninput="sd.igSearch(\'ig-ac\')"></div>' +
        '<div class="ir-actions" style="margin-left:auto;">' +
          '<button class="ir-btn">Actions &#9662;</button>' +
          '<span class="ir-count">' + mappings.length + ' rows</span>' +
        '</div>' +
      '</div>' +
      '<table class="t ig-table" id="ig-ac"><thead><tr><th style="width:30px;"></th><th class="sortable">Agent</th><th class="sortable">Email</th><th class="sortable">Tier</th><th class="sortable">Project</th><th class="sortable">Company</th><th>Actions</th></tr></thead><tbody>' + rows + '</tbody></table></div>' +
      '<p class="muted" style="font-size:11.5px;margin-top:12px;">Page 14 &mdash; APEX Interactive Grid. Maps support agents to projects they cover (Decision O).</p></div>';
    renderShell(u, 'agent-projects', html, tenantBanner(u));
  }

  /* ---------- page: DEPARTMENTS (Page 15) ---------- */
  function renderDepartments(u) {
    if (!isAdmin(u)) { renderShell(u, 'home', notFound('System Admin only.'), ''); return; }
    var clientCompanies = DB.companies.filter(function (c) { return c.status === 'Active'; });
    var deptCompanySelect = '<select id="dept-company-filter" class="ig-filter-select" onchange="sd.filterDeptsByCompany(this.value)">' +
      '<option value="all">All Companies (' + clientCompanies.length + ')</option>' +
      clientCompanies.map(function (c) {
        var count = (DB.departments || []).filter(function(d) { return d.companyId === c.id; }).length;
        return '<option value="' + c.id + '">' + esc(c.name) + ' (' + count + ' depts)</option>';
      }).join('') + '</select>';
    var rows = (DB.departments || []).map(function (d) {
      var c = company(d.companyId);
      var userCount = DB.users.filter(function (x) { return x.departmentId === d.id; }).length;
      return '<tr data-dept-company="' + esc(d.companyId) + '"><td><span class="ig-row-check"></span></td><td><b>' + esc(d.name) + '</b></td><td>' + esc(c.name) + '</td><td>' + userCount + '</td>' +
        '<td><button class="btn btn-sm" onclick="sd.showEditDept(\'' + d.id + '\')">&#9998; Edit</button></td></tr>';
    }).join('');
    if (!rows) rows = '<tr><td colspan="5" class="muted">No departments yet.</td></tr>';
    var html = pageBar('Administration / Departments', 'Departments', '') +
      '<div class="content"><div class="card" style="overflow:hidden;" id="ig-depts-wrap">' +
      '<div class="ig-toolbar">' +
        '<button class="ir-btn primary" onclick="sd.showAddDept()">+ Add Row</button>' +
        '<div class="ir-search">&#128270; <input placeholder="Search\u2026" oninput="sd.igSearch(\'ig-depts\')"></div>' +
        '<div style="margin-left:8px;display:flex;align-items:center;gap:6px;"><label for="dept-company-filter" style="font-size:12px;white-space:nowrap;">Company:</label>' + deptCompanySelect + '</div>' +
        '<div class="ir-actions" style="margin-left:auto;">' +
          '<button class="ir-btn">Actions &#9662;</button>' +
          '<span class="ir-count" id="depts-row-count">' + (DB.departments || []).length + ' rows</span>' +
        '</div>' +
      '</div>' +
      '<table class="t ig-table" id="ig-depts"><thead><tr><th style="width:30px;"></th><th class="sortable">Department</th><th class="sortable">Company</th><th class="sortable">Users</th><th>Actions</th></tr></thead><tbody>' + rows + '</tbody></table></div>' +
      '<p class="muted" style="font-size:11.5px;margin-top:12px;">Page 15 &mdash; APEX Interactive Grid. Decision N: departments per company (metadata only).</p></div>';
    renderShell(u, 'departments', html, tenantBanner(u));
  }

  /* ---------- page: COMPANY DETAIL (Page 17) ---------- */
  function renderCompanyDetail(u) {
    if (!isAdmin(u)) { renderShell(u, 'home', notFound('System Admin only.'), ''); return; }
    var cid = qs('id');
    var c = cid ? DB.companies.find(function (x) { return x.id === cid; }) : null;
    if (!c || c.status !== 'Active') { renderShell(u, 'companies', notFound('Company not found or not active.'), ''); return; }

    var activeTab = window._companyDetailTab || 'projects';

    // --- Stats ---
    var companyTickets = DB.tickets.filter(function (t) { return t.companyId === cid; });
    var openCount = companyTickets.filter(function (t) { return t.status !== 'Closed' && t.status !== 'Resolved'; }).length;
    var breachedCount = companyTickets.filter(function (t) { return slaStatus(t) === 'breached'; }).length;
    var companyUsers = DB.users.filter(function (x) { return x.companyId === cid; });
    var companyDepts = (DB.departments || []).filter(function (d) { return d.companyId === cid; });
    var cProjs = companyProjects(cid);
    var mappedAgents = [];
    cProjs.forEach(function (p) {
      (DB.agentProjects || []).filter(function (ap) { return ap.projectId === p.id; }).forEach(function (ap) {
        if (!mappedAgents.some(function (x) { return x.userId === ap.userId; })) {
          mappedAgents.push(ap);
        }
      });
    });

    // --- Header ---
    var statusClass = c.status === 'Active' ? 'tag-active' : 'tag-inactive';
    var header = '<div style="display:flex;align-items:center;gap:16px;flex-wrap:wrap;">' +
      '<div><span style="font-size:13px;color:#666;">Company</span>' +
      '<h2 style="margin:0;">' + esc(c.name) + ' <span class="' + statusClass + '" style="font-size:13px;">&#9679; ' + c.status + '</span></h2></div>' +
      '<div style="margin-left:auto;display:flex;gap:16px;flex-wrap:wrap;">' +
      '<div class="stat-card" style="text-align:center;padding:8px 16px;"><div class="stat-val">' + openCount + '</div><div class="stat-lbl">Open Tickets</div></div>' +
      (breachedCount ? '<div class="stat-card" style="text-align:center;padding:8px 16px;border-color:#fecaca;"><div class="stat-val" style="color:#b91c1c;">' + breachedCount + '</div><div class="stat-lbl">SLA Breached</div></div>' : '') +
      '<div class="stat-card" style="text-align:center;padding:8px 16px;"><div class="stat-val">' + cProjs.length + '</div><div class="stat-lbl">Projects</div></div>' +
      '<div class="stat-card" style="text-align:center;padding:8px 16px;"><div class="stat-val">' + companyUsers.length + '</div><div class="stat-lbl">Users</div></div>' +
      '<div class="stat-card" style="text-align:center;padding:8px 16px;"><div class="stat-val">' + companyDepts.length + '</div><div class="stat-lbl">Departments</div></div>' +
      '<div class="stat-card" style="text-align:center;padding:8px 16px;"><div class="stat-val">' + mappedAgents.length + '</div><div class="stat-lbl">Agents</div></div>' +
      '</div></div>';

    // --- Tabs ---
    var tabs = '<div class="cd-tabs" style="display:flex;gap:0;border-bottom:2px solid var(--c-border-lt);margin:16px 0 0 0;">' +
      '<button class="cd-tab' + (activeTab === 'projects' ? ' cd-tab-active' : '') + '" onclick="sd.companyTab(\'projects\')">&#128194; Projects</button>' +
      '<button class="cd-tab' + (activeTab === 'sla' ? ' cd-tab-active' : '') + '" onclick="sd.companyTab(\'sla\')">&#9202; SLA Targets</button>' +
      '<button class="cd-tab' + (activeTab === 'depts' ? ' cd-tab-active' : '') + '" onclick="sd.companyTab(\'depts\')">&#127963;&#65039; Departments</button>' +
      '<button class="cd-tab' + (activeTab === 'agents' ? ' cd-tab-active' : '') + '" onclick="sd.companyTab(\'agents\')">&#128101; Agent-Project Mapping</button>' +
      '</div>';

    // --- Projects Tab ---
    var projRows = cProjs.map(function (p) {
      var tk = DB.tickets.filter(function (t) { return t.projectId === p.id; }).length;
      var agCount = (DB.agentProjects || []).filter(function (ap) { return ap.projectId === p.id; }).length;
      return '<tr><td><b>' + esc(p.projectName) + '</b></td><td>' + esc(p.projectKey) + '</td><td>' + tk + '</td><td>' + agCount + '</td>' +
        '<td><button class="btn btn-sm" onclick="sd.showEditProject(\'' + p.id + '\')">&#9998; Edit</button></td></tr>';
    }).join('');
    if (!projRows) projRows = '<tr><td colspan="5" class="muted">No projects for this company.</td></tr>';
    var projectsPanel = '<div class="cd-panel" data-panel="projects"' + (activeTab !== 'projects' ? ' style="display:none;"' : '') + '>' +
      '<div class="card" style="overflow:hidden;">' +
      '<div class="card-hd"><span>Projects</span>' +
      '<button class="btn btn-sm btn-primary" style="float:right;margin:-4px 0;" onclick="sd.showAddProjectCD(\'' + cid + '\')">+ Add Project</button></div>' +
      '<table class="t"><thead><tr><th>Project Name</th><th>Key</th><th>Tickets</th><th>Agents</th><th>Actions</th></tr></thead><tbody>' + projRows + '</tbody></table>' +
      '</div></div>';

    // --- SLA Tab (grouped by project) ---
    var slaContent = cProjs.map(function (p) {
      var targets = (DB.slaTargets || []).filter(function (s) { return s.projectId === p.id; });
      var slaRows = targets.map(function (s) {
        var globalIdx = (DB.slaTargets || []).indexOf(s);
        return '<tr><td>' + sevBadge(s.severity) + '</td><td>' + s.responseHours + 'h</td><td>' + s.resolutionDays + 'd</td><td>' + (s.escalationPct || 80) + '%</td>' +
          '<td><button class="btn btn-sm" onclick="sd.showEditSla(' + globalIdx + ', true)">&#9998; Edit</button></td></tr>';
      }).join('');
      if (!slaRows) slaRows = '<tr><td colspan="5" class="muted">No SLA targets configured.</td></tr>';
      return '<div style="margin-bottom:12px;"><div style="font-weight:600;font-size:13px;margin-bottom:4px;">' + esc(p.projectName) + ' (' + esc(p.projectKey) + ')</div>' +
        '<table class="t"><thead><tr><th>Severity</th><th>Response Time</th><th>Resolution Time</th><th>Escalation %</th><th>Actions</th></tr></thead><tbody>' + slaRows + '</tbody></table></div>';
    }).join('');
    if (!slaContent) slaContent = '<p class="muted">No projects configured.</p>';
    var slaPanel = '<div class="cd-panel" data-panel="sla"' + (activeTab !== 'sla' ? ' style="display:none;"' : '') + '>' +
      '<div class="card" style="overflow:hidden;">' +
      '<div class="card-hd">SLA Targets per Severity (grouped by project)</div>' +
      '<div class="card-bd">' + slaContent + '</div></div></div>';

    // --- Departments Tab ---
    var deptRows = companyDepts.map(function (d) {
      var userCount = DB.users.filter(function (x) { return x.departmentId === d.id; }).length;
      var deptUsers = DB.users.filter(function (x) { return x.departmentId === d.id && x.companyId === cid; });
      var avatarHtml = deptUsers.slice(0, 5).map(function (du) {
        return '<span class="avatar-sm" title="' + esc(du.name) + '">' + initials(du.name) + '</span>';
      }).join('');
      if (deptUsers.length > 5) avatarHtml += '<span class="muted" style="font-size:11px;">+' + (deptUsers.length - 5) + '</span>';
      return '<tr><td><b>' + esc(d.name) + '</b></td><td>' + userCount + '</td><td>' + avatarHtml + '</td>' +
        '<td><button class="btn btn-sm" onclick="sd.showEditDeptCD(\'' + d.id + '\')">&#9998; Edit</button></td></tr>';
    }).join('');
    if (!deptRows) deptRows = '<tr><td colspan="4" class="muted">No departments yet. Add one below.</td></tr>';
    var deptsPanel = '<div class="cd-panel" data-panel="depts"' + (activeTab !== 'depts' ? ' style="display:none;"' : '') + '>' +
      '<div class="card" style="overflow:hidden;">' +
      '<div class="card-hd"><span>Departments</span>' +
      '<button class="btn btn-sm btn-primary" style="float:right;margin:-4px 0;" onclick="sd.showAddDeptCD(\'' + cid + '\')">+ Add Department</button></div>' +
      '<table class="t"><thead><tr><th>Department</th><th>Users</th><th>Members</th><th>Actions</th></tr></thead><tbody>' + deptRows + '</tbody></table>' +
      '</div></div>';

    // --- Agents Tab (Shuttle-style, scoped to projects) ---
    var allAssignedAgentIds = [];
    cProjs.forEach(function (p) {
      (DB.agentProjects || []).filter(function (ap) { return ap.projectId === p.id; }).forEach(function (ap) {
        if (allAssignedAgentIds.indexOf(ap.userId) < 0) allAssignedAgentIds.push(ap.userId);
      });
    });
    var allAgents = DB.users.filter(function (x) { return x.role === 'Support Agent' && x.status === 'Active'; });
    var assignedAgents = allAgents.filter(function (a) { return allAssignedAgentIds.indexOf(a.id) >= 0; });
    var availableAgents = allAgents.filter(function (a) { return allAssignedAgentIds.indexOf(a.id) < 0; });

    // Show which projects each assigned agent covers in this company
    var assignedList = assignedAgents.map(function (a) {
      var coveredProjs = cProjs.filter(function (p) { return agentCoversProject(a.id, p.id); });
      var projNames = coveredProjs.map(function (p) { return esc(p.projectName); }).join(', ');
      var aTier = agentTier(a.id);
      return '<div class="shuttle-item" data-agent-id="' + a.id + '" onclick="sd.shuttleSelect(this)">' +
        '<span class="avatar-sm">' + initials(a.name) + '</span> ' +
        '<b>' + esc(a.name) + '</b> <span class="muted" style="font-size:11px;">' + (aTier || '') + ' \u2014 ' + projNames + '</span></div>';
    }).join('');
    if (!assignedList) assignedList = '<div class="shuttle-empty muted">No agents assigned</div>';

    var availableList = availableAgents.map(function (a) {
      return '<div class="shuttle-item" data-agent-id="' + a.id + '" onclick="sd.shuttleSelect(this)">' +
        '<span class="avatar-sm">' + initials(a.name) + '</span> ' +
        '<b>' + esc(a.name) + '</b></div>';
    }).join('');
    if (!availableList) availableList = '<div class="shuttle-empty muted">All agents assigned</div>';

    // Project selector for shuttle add
    var shuttleProjOpts = cProjs.map(function (p) {
      return '<option value="' + p.id + '">' + esc(p.projectName) + '</option>';
    }).join('');

    var agentsPanel = '<div class="cd-panel" data-panel="agents"' + (activeTab !== 'agents' ? ' style="display:none;"' : '') + '>' +
      '<div class="card" style="overflow:hidden;">' +
      '<div class="card-hd">Agent-Project Mapping</div>' +
      '<p style="margin:0 16px 12px;font-size:12px;color:#666;">Select agents on the left, pick a project, and click &#10145;&#65039; to assign them. Select assigned agents and click &#11013;&#65039; to remove from all projects in ' + esc(c.name) + '.</p>' +
      '<div style="padding:0 16px 8px;"><label style="font-size:12px;">Assign to project: </label><select id="shuttle-project">' + shuttleProjOpts + '</select></div>' +
      '<div class="shuttle" style="display:grid;grid-template-columns:1fr auto 1fr;gap:0;min-height:280px;">' +
        '<div class="shuttle-col">' +
          '<div class="shuttle-hd">Available Agents (' + availableAgents.length + ')</div>' +
          '<div class="shuttle-search"><input placeholder="Search\u2026" oninput="sd.shuttleFilter(this, \'shuttle-available\')"></div>' +
          '<div class="shuttle-list" id="shuttle-available">' + availableList + '</div>' +
        '</div>' +
        '<div class="shuttle-btns" style="display:flex;flex-direction:column;justify-content:center;gap:8px;padding:0 8px;">' +
          '<button class="btn btn-sm" onclick="sd.shuttleAdd(\'' + cid + '\')" title="Assign selected">&#10145;&#65039;</button>' +
          '<button class="btn btn-sm" onclick="sd.shuttleRemove(\'' + cid + '\')" title="Remove selected">&#11013;&#65039;</button>' +
        '</div>' +
        '<div class="shuttle-col">' +
          '<div class="shuttle-hd">Assigned to ' + esc(c.name) + ' (' + assignedAgents.length + ')</div>' +
          '<div class="shuttle-search"><input placeholder="Search\u2026" oninput="sd.shuttleFilter(this, \'shuttle-assigned\')"></div>' +
          '<div class="shuttle-list" id="shuttle-assigned">' + assignedList + '</div>' +
        '</div>' +
      '</div>' +
      '</div></div>';

    var html = pageBar('Administration / Companies / ' + esc(c.name), c.name, '<a class="btn btn-sm" href="09-companies.html">&larr; Back to Companies</a>') +
      '<div class="content">' +
      '<div class="card" style="overflow:hidden;padding:16px;">' + header + '</div>' +
      tabs + projectsPanel + slaPanel + deptsPanel + agentsPanel +
      '<p class="muted" style="font-size:11.5px;margin-top:12px;">Page 17 &mdash; Company-centric admin. Projects (Decision O), SLA (FR-23), Departments (Decision N), Agent-Project Mapping (Decision J). ITIL 4: customer-based SLA structure.</p></div>';
    renderShell(u, 'companies', html, tenantBanner(u));
  }

  /* ---------- page: AUDIT LOG (Page 16) ---------- */
  function renderAuditLog(u) {
    if (!isAdmin(u)) { renderShell(u, 'home', notFound('System Admin only.'), ''); return; }
    var logs = (DB.adminAuditLog || []).slice().sort(function (a, b) { return new Date(b.timestamp) - new Date(a.timestamp); });
    var actions = {}; var entities = {};
    logs.forEach(function (l) { actions[l.action] = true; entities[l.entity] = true; });
    var actionOpts = '<option value="all">All Actions</option>' + Object.keys(actions).map(function (a) {
      return '<option value="' + esc(a) + '">' + esc(a) + '</option>';
    }).join('');
    var entityOpts = '<option value="all">All Entities</option>' + Object.keys(entities).map(function (e) {
      return '<option value="' + esc(e) + '">' + esc(e) + '</option>';
    }).join('');
    var rows = logs.map(function (l) {
      var au = user(l.userId);
      return '<tr data-audit-action="' + esc(l.action) + '" data-audit-entity="' + esc(l.entity) + '" data-audit-ts="' + esc(l.timestamp) + '">' +
        '<td class="audit-ts">' + esc(new Date(l.timestamp).toLocaleString()) + '</td>' +
        '<td>' + esc(au ? au.name : l.userId) + '</td>' +
        '<td><span class="audit-action">' + esc(l.action) + '</span></td>' +
        '<td class="audit-entity">' + esc(l.entity) + '</td>' +
        '<td>' + esc(l.record) + '</td>' +
        '<td class="muted">' + esc(l.oldValue || '\u2014') + '</td>' +
        '<td class="muted">' + esc(l.newValue || '\u2014') + '</td></tr>';
    }).join('');
    if (!rows) rows = '<tr><td colspan="7" class="muted">No admin actions logged yet. Try adding or editing a company or user.</td></tr>';
    var html = pageBar('Administration / Audit Log', 'Audit Log', '') +
      '<div class="content"><div class="card" style="overflow:hidden;" id="ig-audit-wrap">' +
      '<div class="ir-toolbar" style="flex-wrap:wrap;gap:8px;">' +
        '<div class="ir-search">&#128270; <input placeholder="Search\u2026" oninput="sd.filterAuditLog()"></div>' +
        '<div style="display:flex;align-items:center;gap:6px;"><label style="font-size:12px;white-space:nowrap;">Action:</label><select id="audit-action-filter" class="ig-filter-select" onchange="sd.filterAuditLog()">' + actionOpts + '</select></div>' +
        '<div style="display:flex;align-items:center;gap:6px;"><label style="font-size:12px;white-space:nowrap;">Entity:</label><select id="audit-entity-filter" class="ig-filter-select" onchange="sd.filterAuditLog()">' + entityOpts + '</select></div>' +
        '<div style="display:flex;align-items:center;gap:6px;"><label style="font-size:12px;white-space:nowrap;">From:</label><input id="audit-date-from" type="date" class="ig-filter-select" onchange="sd.filterAuditLog()"></div>' +
        '<div style="display:flex;align-items:center;gap:6px;"><label style="font-size:12px;white-space:nowrap;">To:</label><input id="audit-date-to" type="date" class="ig-filter-select" onchange="sd.filterAuditLog()"></div>' +
        '<div class="ir-actions" style="margin-left:auto;">' +
          '<button class="ir-btn" onclick="sd.clearAuditFilters()">Clear Filters</button>' +
          '<span class="ir-count" id="audit-row-count">' + logs.length + ' rows</span>' +
        '</div>' +
      '</div>' +
      '<table class="t" id="ig-audit"><thead><tr><th class="sortable">Timestamp</th><th class="sortable">User</th><th class="sortable">Action</th><th class="sortable">Entity</th><th class="sortable">Record</th><th>Old Value</th><th>New Value</th></tr></thead><tbody>' + rows + '</tbody></table></div>' +
      '<p class="muted" style="font-size:11.5px;margin-top:12px;">Page 16 &mdash; APEX Interactive Report (read-only). ISO \u00a79.1: monitoring &amp; measurement.</p></div>';
    renderShell(u, 'audit-log', html, tenantBanner(u));
  }

  function renderProfile(u) {
    var tierHtml = u.tier ? '<div class="field"><label>Tier</label><input value="' + esc(u.tier) + '" disabled></div>' : '';
    var html = pageBar('Account / Profile', 'My Profile', '') +
      '<div class="content" style="max-width:720px;"><div class="card"><div class="card-hd">Personal details</div><div class="card-bd">' +
      '<div style="display:flex;gap:16px;align-items:center;margin-bottom:18px;"><div class="avatar" style="width:60px;height:60px;font-size:22px;">' + initials(u.name) + '</div>' +
      '<div><div style="font-weight:600;font-size:16px;">' + esc(u.name) + '</div><div class="muted">' + esc(u.role) + ' &middot; ' + esc(company(u.companyId).name) + '</div></div></div>' +
      '<div class="form-grid cols-2">' +
        '<div class="field"><label>Full name</label><input value="' + esc(u.name) + '"></div>' +
        '<div class="field"><label>Email</label><input value="' + esc(u.email) + '" disabled></div>' +
        '<div class="field"><label>Role</label><input value="' + esc(u.role) + '" disabled></div>' +
        '<div class="field"><label>Company</label><input value="' + esc(company(u.companyId).name) + '" disabled></div>' +
        tierHtml +
      '</div></div></div></div>';
    renderShell(u, 'profile', html, '');
  }

  /* ---------- actions (exposed as window.sd) ---------- */
  function auditLog(userId, action, entity, record, oldValue, newValue) {
    if (!DB.adminAuditLog) DB.adminAuditLog = [];
    DB.adminAuditLog.push({ id: 'al' + NOW() + Math.floor(Math.random() * 1000), timestamp: nowIso(), userId: userId, action: action, entity: entity, record: record, oldValue: oldValue || '', newValue: newValue || '' });
  }

  function nextRef() { DB.seq += 1; return { n: DB.seq, ref: 'TKT-' + String(DB.seq).padStart(5, '0') }; }
  function nowIso() { return new Date().toISOString(); }
  function pushHistory(ticketId, userId, action, oldV, newV) {
    DB.history.push({ id: 'h' + NOW() + Math.floor(Math.random() * 1000), ticketId: ticketId, userId: userId, action: action, oldValue: oldV || '', newValue: newV || '', createdAt: nowIso() });
  }

  window.sd = {
    login: function () {
      var email = document.getElementById('email').value.trim().toLowerCase();
      var pwd = document.getElementById('pwd').value;
      var u = DB.users.find(function (x) { return x.email.toLowerCase() === email && x.password === pwd; });
      if (!u) { var e = document.getElementById('loginErr'); e.style.display = 'block'; e.textContent = 'Invalid email or password. (Hint: password is "demo".)'; return; }
      localStorage.setItem(LS_SESSION, JSON.stringify({ userId: u.id }));
      location.href = landingFor(u);
    },
    quickLogin: function (uid) { localStorage.setItem(LS_SESSION, JSON.stringify({ userId: uid })); location.href = landingFor(user(uid)); },
    switchLoginTab: function(companyId, btn) {
      document.querySelectorAll('.login-tab').forEach(function(t) { t.classList.remove('active'); });
      btn.classList.add('active');
      document.querySelectorAll('.login-panel').forEach(function(p) {
        p.classList.toggle('active', p.getAttribute('data-company') === companyId);
      });
    },
    filterDeptLov: function(companyId) {
      var deptSelect = document.getElementById('usrDept');
      if (!deptSelect) return;
      var currentVal = deptSelect.value;
      var opts = '<option value="">\u2014 None \u2014</option>' + (DB.departments || []).filter(function(d) {
        return d.companyId === companyId;
      }).map(function(d) {
        return '<option value="' + d.id + '"' + (d.id === currentVal ? ' selected' : '') + '>' + esc(d.name) + '</option>';
      }).join('');
      deptSelect.innerHTML = opts;
    },
    filterUsersByCompany: function(companyId) {
      var rows = document.querySelectorAll('#ig-users tbody tr');
      var visible = 0;
      rows.forEach(function(row) {
        var companyCell = row.children[4];
        if (!companyCell) return;
        var show = (companyId === 'all' || companyCell.textContent.trim() === (DB.companies.find(function(c){ return c.id === companyId; }) || {}).name);
        row.style.display = show ? '' : 'none';
        if (show) visible++;
      });
      var countEl = document.getElementById('users-row-count');
      if (countEl) countEl.textContent = visible + ' rows';
    },
    filterSlaByCompany: function(companyId) {
      document.querySelectorAll('.sla-company-card').forEach(function(p) {
        p.style.display = (companyId === 'all' || p.getAttribute('data-sla-company') === companyId) ? '' : 'none';
      });
    },
    filterProjectsByCompany: function(companyId) {
      var rows = document.querySelectorAll('#ig-projects tbody tr');
      var visible = 0;
      rows.forEach(function(row) {
        var show = (companyId === 'all' || row.getAttribute('data-proj-company') === companyId);
        row.style.display = show ? '' : 'none';
        if (show) visible++;
      });
      var countEl = document.getElementById('projects-row-count');
      if (countEl) countEl.textContent = visible + ' rows';
    },
    // Create ticket: refresh LOVs when project changes
    onCreateProjectChange: function() {
      var projSel = document.getElementById('createProject');
      var projId = projSel ? projSel.value : null;
      var u = currentUser();
      // Refresh category LOV
      var catSel = document.getElementById('cat');
      if (catSel) {
        var cats = DB.categories.filter(function (c) {
          if (c.status !== 'Active') return false;
          if (c.projectId && c.projectId !== projId) return false;
          if (c.companyId && c.companyId !== u.companyId) return false;
          return true;
        });
        catSel.innerHTML = cats.map(function (c) { return '<option value="' + c.id + '">' + esc(c.name) + '</option>'; }).join('');
      }
      // Refresh agent LOV
      var agentSel = document.getElementById('createAgent');
      if (agentSel) {
        var agentPool = DB.users.filter(function (x) {
          return x.role === 'Support Agent' && agentCoversProject(x.id, projId) && (isClientAdmin(u) || agentTier(x.id) === 'L1');
        });
        agentSel.innerHTML = '<option value="">\u2014 Unassigned \u2014</option>' + agentPool.map(function (a) {
          var load = DB.tickets.filter(function (x) { return x.assignedTo === a.id && x.status !== 'Closed'; }).length;
          var aTier = agentTier(a.id);
          return '<option value="' + a.id + '">' + esc(a.name) + (aTier ? ' [' + aTier + ']' : '') + ' \u00b7 ' + load + ' open</option>';
        }).join('');
      }
    },
    logout: function () { localStorage.removeItem(LS_SESSION); location.href = '01-login.html'; },
    reset: function () { if (confirm('Reset all demo data and sign out?')) { localStorage.removeItem(LS_DATA); localStorage.removeItem(LS_SESSION); location.href = '01-login.html'; } },

    createTicket: function () {
      var u = currentUser();
      var subject = document.getElementById('subject').value.trim();
      var desc = document.getElementById('desc').value.trim();
      if (!subject || !desc) { alert('Subject and description are required.'); return; }
      var severity = document.getElementById('sev').value;
      var ticketType = document.getElementById('ticketType').value;
      var projectId = document.getElementById('createProject').value;
      var sla = slaTarget(projectId, severity);
      var slaDue = null;
      if (sla) {
        var d = new Date();
        d.setDate(d.getDate() + sla.resolutionDays);
        slaDue = d.toISOString();
      }
      var agentId = document.getElementById('createAgent').value || null;
      var r = nextRef();
      var initStatus = agentId ? 'Assigned' : 'New';
      var t = { id: 't' + r.n, ref: r.ref, companyId: u.companyId, projectId: projectId, departmentId: u.departmentId, subject: subject, description: desc,
        categoryId: document.getElementById('cat').value, severity: severity, priority: null,
        status: initStatus, ticketType: ticketType, createdBy: u.id, assignedTo: agentId,
        createdAt: nowIso(), updatedAt: nowIso(), resolvedAt: null, closedAt: null,
        slaDueDate: slaDue, csatScore: null, firstResponseAt: null,
        resolutionCode: null, resolutionSummary: null, reopenCount: 0 };
      DB.tickets.push(t);
      pushHistory(t.id, u.id, 'STATUS_CHANGE', '', initStatus);
      if (agentId) pushHistory(t.id, u.id, 'ASSIGN', '', user(agentId).name);
      pendingFiles.forEach(function (f) {
        DB.attachments.push({ id: 'a' + NOW() + Math.floor(Math.random() * 1000), ticketId: t.id, companyId: u.companyId, commentId: null, fileName: f.name, mimeType: f.type, fileSize: f.size, uploadedBy: u.id, uploadedAt: nowIso() });
      });
      pendingFiles = [];
      save();
      sessionStorage.setItem('flash', '&#9989; Ticket ' + r.ref + ' created. &#128231; Auto-acknowledgement email sent (simulated).');
      location.href = '05-ticket-detail.html?id=' + t.id;
    },

    assign: function (id) {
      var u = currentUser(), t = DB.tickets.find(function (x) { return x.id === id; });
      var agentId = document.getElementById('agent').value;
      var emailOn = document.getElementById('emailSw').classList.contains('on');
      var old = t.status;
      t.assignedTo = agentId;
      if (t.status === 'New') t.status = 'Assigned';
      t.updatedAt = nowIso();
      pushHistory(id, u.id, 'ASSIGN', old === 'New' ? 'Unassigned' : (user(t.assignedTo) || {}).name || '', user(agentId).name);
      if (old === 'New') pushHistory(id, u.id, 'STATUS_CHANGE', old, t.status);
      save();
      sessionStorage.setItem('flash', (emailOn ? '&#128231; Assignment email sent (simulated). ' : '') + 'Assigned to ' + user(agentId).name + '.');
      location.href = '05-ticket-detail.html?id=' + id;
    },

    selfAssign: function (id) {
      var u = currentUser(), t = DB.tickets.find(function (x) { return x.id === id; });
      var old = t.status;
      t.assignedTo = u.id;
      if (t.status === 'New') t.status = 'Assigned';
      t.updatedAt = nowIso();
      pushHistory(id, u.id, 'ASSIGN', 'Unassigned', u.name + ' (self-assign)');
      if (old === 'New') pushHistory(id, u.id, 'STATUS_CHANGE', old, t.status);
      save();
      sessionStorage.setItem('flash', 'Self-assigned. You now own this ticket.');
      renderDetail(u);
      var f = sessionStorage.getItem('flash'); if (f) { toast(f); sessionStorage.removeItem('flash'); }
    },

    addComment: function (id) {
      var u = currentUser(), text = document.getElementById('ctext').value.trim();
      if (!text) { alert('Comment cannot be empty.'); return; }
      var internalEl = document.getElementById('intSw');
      var internal = internalEl ? internalEl.classList.contains('on') : false;
      var cId = 'c' + NOW();
      DB.comments.push({ id: cId, ticketId: id, userId: u.id, text: text, isInternal: internal, createdAt: nowIso() });
      var t = DB.tickets.find(function (x) { return x.id === id; });
      if (!t.firstResponseAt && (isAgent(u) || isAdmin(u))) {
        t.firstResponseAt = nowIso();
      }
      pendingFiles.forEach(function (f) {
        DB.attachments.push({ id: 'a' + NOW() + Math.floor(Math.random() * 1000), ticketId: id, companyId: t.companyId, commentId: cId, fileName: f.name, mimeType: f.type, fileSize: f.size, uploadedBy: u.id, uploadedAt: nowIso() });
      });
      pendingFiles = [];
      t.updatedAt = nowIso();
      save();
      sessionStorage.setItem('flash', internal ? '&#128274; Internal note added.' : 'Comment posted.');
      location.href = '05-ticket-detail.html?id=' + id;
    },

    changeStatus: function (id, to) {
      var u = currentUser(), t = DB.tickets.find(function (x) { return x.id === id; });
      if (to === 'In Progress' && !t.priority) {
        alert('Priority must be set before starting work. Please set priority first (triage gate \u2014 FR-37).');
        return;
      }
      var old = t.status;
      if (to === 'In Progress' && old === 'Resolved') {
        t.reopenCount = (t.reopenCount || 0) + 1;
      }
      t.status = to; t.updatedAt = nowIso();
      if (to === 'In Progress' && !t.firstResponseAt && (isAgent(u) || isAdmin(u))) {
        t.firstResponseAt = nowIso();
      }
      if (to === 'Resolved') t.resolvedAt = nowIso();
      if (to === 'Closed') t.closedAt = nowIso();
      pushHistory(id, u.id, 'STATUS_CHANGE', old, to);
      save();
      sessionStorage.setItem('flash', 'Status changed: ' + old + ' &#8594; ' + to + '.');
      renderDetail(u);
      var f = sessionStorage.getItem('flash'); if (f) { toast(f); sessionStorage.removeItem('flash'); }
    },

    // FR-26: Escalate
    showEscalate: function (id) {
      var t = DB.tickets.find(function (x) { return x.id === id; });
      var TIER_ORDER = { 'L1': 1, 'L2': 2, 'L3': 3, 'L4': 4 };
      var currentAssignee = t.assignedTo ? user(t.assignedTo) : null;
      var currentTierVal = currentAssignee ? agentTier(currentAssignee.id) : null;
      var currentTierLevel = currentTierVal ? (TIER_ORDER[currentTierVal] || 0) : 0;
      var pool = DB.users.filter(function (x) {
        if (x.role !== 'Support Agent' || x.id === t.assignedTo) return false;
        if (!agentCoversProject(x.id, t.projectId)) return false;
        var xTier = agentTier(x.id);
        var xTierLevel = xTier ? (TIER_ORDER[xTier] || 0) : 0;
        return xTierLevel >= currentTierLevel;
      });
      if (!pool.length) pool = DB.users.filter(function (x) { return x.role === 'Support Agent' && x.id !== t.assignedTo; });
      var agents = pool.map(function (a) { var aTier = agentTier(a.id); return '<option value="' + a.id + '">' + esc(a.name) + (aTier ? ' [' + aTier + ']' : '') + '</option>'; }).join('');
      var prios = (DB.priorities || ['P1','P2','P3','P4']).map(function (p) {
        var sel = t.priority && p < t.priority ? ' selected' : (p === 'P1' ? ' selected' : '');
        return '<option' + sel + '>' + p + '</option>';
      }).join('');
      var modal = '<div class="modal"><div class="m-hd"><h2>&#9888; Escalate &middot; ' + t.ref + '</h2><span class="x" onclick="sd.closeModal()">&#10005;</span></div>' +
        '<div class="m-bd"><p class="muted mt-0">Reassign to a higher-tier agent and raise priority. This action is logged in history.</p>' +
        '<div class="form-grid"><div class="field"><label>Reassign to <span class="req">*</span></label><select id="escAgent">' + agents + '</select></div>' +
        '<div class="field"><label>New Priority <span class="req">*</span></label><select id="escPrio">' + prios + '</select></div>' +
        '</div></div><div class="m-ft"><button class="btn" onclick="sd.closeModal()">Cancel</button>' +
        '<button class="btn btn-escalate" onclick="sd.doEscalate(\'' + t.id + '\')">&#9888; Escalate</button></div></div>';
      var wrap = document.createElement('div');
      wrap.className = 'modal-backdrop';
      wrap.id = 'escModal';
      wrap.innerHTML = modal;
      document.body.appendChild(wrap);
    },
    doEscalate: function (id) {
      var u = currentUser(), t = DB.tickets.find(function (x) { return x.id === id; });
      var newAgent = document.getElementById('escAgent').value;
      var newPrio = document.getElementById('escPrio').value;
      var oldAgent = t.assignedTo ? user(t.assignedTo).name : 'Unassigned';
      var oldPrio = t.priority || '\u2014';
      t.assignedTo = newAgent;
      t.priority = newPrio;
      t.updatedAt = nowIso();
      pushHistory(id, u.id, 'ESCALATE', oldAgent + ' / ' + oldPrio, user(newAgent).name + ' / ' + newPrio);
      save();
      sessionStorage.setItem('flash', '&#9888; Escalated: reassigned to ' + user(newAgent).name + ', priority raised to ' + newPrio + '.');
      sd.closeModal();
      renderDetail(u);
      var f = sessionStorage.getItem('flash'); if (f) { toast(f); sessionStorage.removeItem('flash'); }
    },

    showSetPriority: function (id) {
      var t = DB.tickets.find(function (x) { return x.id === id; });
      var prios = (DB.priorities || ['P1','P2','P3','P4']).map(function (p) {
        return '<option' + (p === 'P3' ? ' selected' : '') + '>' + p + '</option>';
      }).join('');
      var modal = '<div class="modal" style="max-width:400px;"><div class="m-hd"><h2>Set Priority &middot; ' + t.ref + '</h2><span class="x" onclick="sd.closeModal()">&#10005;</span></div>' +
        '<div class="m-bd"><p class="muted mt-0">Triage: set the support work-order priority.</p>' +
        '<div class="form-grid"><div class="field"><label>Priority</label><select id="newPrio">' + prios + '</select></div>' +
        '</div></div><div class="m-ft"><button class="btn" onclick="sd.closeModal()">Cancel</button>' +
        '<button class="btn btn-primary" onclick="sd.doSetPriority(\'' + t.id + '\')">Set Priority</button></div></div>';
      var wrap = document.createElement('div');
      wrap.className = 'modal-backdrop';
      wrap.id = 'prioModal';
      wrap.innerHTML = modal;
      document.body.appendChild(wrap);
    },
    doSetPriority: function (id) {
      var u = currentUser(), t = DB.tickets.find(function (x) { return x.id === id; });
      var newPrio = document.getElementById('newPrio').value;
      var oldPrio = t.priority || '\u2014';
      t.priority = newPrio;
      t.updatedAt = nowIso();
      pushHistory(id, u.id, 'PRIORITY_CHANGE', oldPrio, newPrio);
      save();
      sessionStorage.setItem('flash', 'Priority set to ' + newPrio + '.');
      sd.closeModal();
      renderDetail(u);
      var f = sessionStorage.getItem('flash'); if (f) { toast(f); sessionStorage.removeItem('flash'); }
    },

    // FR-36: Resolve dialog
    showResolve: function (id) {
      var t = DB.tickets.find(function (x) { return x.id === id; });
      var codes = (DB.resolutionCodes || ['FIXED', 'WORKAROUND', 'KNOWN_ERROR', 'CANNOT_REPRODUCE', 'DUPLICATE', 'USER_EDUCATION', 'NOT_AN_INCIDENT']).map(function (c) {
        return '<option value="' + c + '">' + c.replace(/_/g, ' ') + '</option>';
      }).join('');
      var modal = '<div class="modal"><div class="m-hd"><h2>&#10003; Resolve &middot; ' + t.ref + '</h2><span class="x" onclick="sd.closeModal()">&#10005;</span></div>' +
        '<div class="m-bd"><p class="muted mt-0">Mark this ticket as resolved. Resolution details are required (FR-36).</p>' +
        '<div class="form-grid">' +
          '<div class="field"><label>Resolution Code <span class="req">*</span></label><select id="resCode">' + codes + '</select></div>' +
          '<div class="field"><label>Resolution Summary <span class="req">*</span></label><textarea id="resSummary" placeholder="Describe what was done to resolve this\u2026"></textarea></div>' +
          '<div class="field"><label>Comment (optional)</label><textarea id="resComment" placeholder="Optional closing comment\u2026"></textarea></div>' +
        '</div></div><div class="m-ft"><button class="btn" onclick="sd.closeModal()">Cancel</button>' +
        '<button class="btn btn-hot" onclick="sd.doResolve(\'' + t.id + '\')">&#10003; Resolve</button></div></div>';
      var wrap = document.createElement('div');
      wrap.className = 'modal-backdrop';
      wrap.id = 'resolveModal';
      wrap.innerHTML = modal;
      document.body.appendChild(wrap);
    },
    doResolve: function (id) {
      var u = currentUser(), t = DB.tickets.find(function (x) { return x.id === id; });
      var code = document.getElementById('resCode').value;
      var summary = document.getElementById('resSummary').value.trim();
      if (!summary) { alert('Resolution summary is required.'); return; }
      var comment = document.getElementById('resComment').value.trim();
      var old = t.status;
      t.status = 'Resolved';
      t.resolutionCode = code;
      t.resolutionSummary = summary;
      t.resolvedAt = nowIso();
      t.updatedAt = nowIso();
      pushHistory(id, u.id, 'STATUS_CHANGE', old, 'Resolved');
      if (comment) {
        DB.comments.push({ id: 'c' + NOW(), ticketId: id, userId: u.id, text: comment, isInternal: false, createdAt: nowIso() });
      }
      save();
      sessionStorage.setItem('flash', '&#10003; Resolved (' + code.replace(/_/g, ' ') + ').');
      sd.closeModal();
      renderDetail(u);
      var f = sessionStorage.getItem('flash'); if (f) { toast(f); sessionStorage.removeItem('flash'); }
    },

    // FR-27 + FR-11: Close dialog with optional CSAT
    showClose: function (id) {
      var t = DB.tickets.find(function (x) { return x.id === id; });
      var u = currentUser();
      var csatHtml = (isClient(u) && u.id === t.createdBy) ? '<div class="field"><label>How was the support? (optional)</label><div>' + csatStars(null, true) + '</div></div>' : '';
      var modal = '<div class="modal" style="max-width:440px;"><div class="m-hd"><h2>&#10003; Close &middot; ' + t.ref + '</h2><span class="x" onclick="sd.closeModal()">&#10005;</span></div>' +
        '<div class="m-bd"><p class="muted mt-0">Confirm you want to close this ticket. Once closed, it cannot be reopened.</p>' +
        '<div class="form-grid">' + csatHtml + '</div></div>' +
        '<div class="m-ft"><button class="btn" onclick="sd.closeModal()">Cancel</button>' +
        '<button class="btn btn-primary" onclick="sd.doClose(\'' + t.id + '\')">&#10003; Close Ticket</button></div></div>';
      var wrap = document.createElement('div');
      wrap.className = 'modal-backdrop';
      wrap.id = 'closeModal';
      wrap.innerHTML = modal;
      document.body.appendChild(wrap);
    },
    doClose: function (id) {
      var u = currentUser(), t = DB.tickets.find(function (x) { return x.id === id; });
      var stars = document.querySelectorAll('#closeModal .star.filled');
      if (stars.length) {
        t.csatScore = stars.length;
        pushHistory(id, u.id, 'CSAT', '', stars.length + '/5 stars');
      }
      var old = t.status;
      t.status = 'Closed';
      t.closedAt = nowIso();
      t.updatedAt = nowIso();
      pushHistory(id, u.id, 'STATUS_CHANGE', old, 'Closed');
      save();
      sessionStorage.setItem('flash', '&#10003; Ticket closed.' + (stars.length ? ' Thank you for your feedback!' : ''));
      sd.closeModal();
      renderDetail(u);
      var f = sessionStorage.getItem('flash'); if (f) { toast(f); sessionStorage.removeItem('flash'); }
    },

    rateCsat: function (starEl) {
      var val = parseInt(starEl.getAttribute('data-val'));
      var u = currentUser();
      var tid = qs('id');
      var t = DB.tickets.find(function (x) { return x.id === tid; });
      if (!t || t.csatScore) return;
      t.csatScore = val;
      t.updatedAt = nowIso();
      pushHistory(tid, u.id, 'CSAT', '', val + '/5 stars');
      save();
      sessionStorage.setItem('flash', '&#11088; Thank you for your feedback! (' + val + '/5)');
      renderDetail(u);
      var f = sessionStorage.getItem('flash'); if (f) { toast(f); sessionStorage.removeItem('flash'); }
    },

    addFiles: function (input) {
      for (var i = 0; i < input.files.length; i++) {
        pendingFiles.push({ name: input.files[i].name, size: input.files[i].size, type: input.files[i].type || 'application/octet-stream' });
      }
      input.value = '';
      renderPendingFiles();
    },
    removePending: function (idx) {
      pendingFiles.splice(idx, 1);
      renderPendingFiles();
    },

    // FR-5: Company CRUD
    showAddCompany: function() {
      var modal = '<div class="modal"><div class="m-hd"><h2>New Company</h2><span class="x" onclick="sd.closeModal()">&#10005;</span></div>' +
        '<div class="m-bd"><div class="form-grid">' +
        '<div class="field"><label>Company Name <span class="req">*</span></label><input id="cmpName" placeholder="e.g. Wayne Enterprises"></div>' +
        '<div class="field"><label>Status</label><select id="cmpStatus"><option value="Active" selected>Active</option><option value="Inactive">Inactive</option></select></div>' +
        '</div></div><div class="m-ft"><button class="btn" onclick="sd.closeModal()">Cancel</button>' +
        '<button class="btn btn-primary" onclick="sd.doAddCompany()">&#10133; Create Company</button></div></div>';
      var wrap = document.createElement('div');
      wrap.className = 'modal-backdrop';
      wrap.innerHTML = modal;
      document.body.appendChild(wrap);
    },
    doAddCompany: function() {
      var name = document.getElementById('cmpName').value.trim();
      if (!name) { alert('Company name is required.'); return; }
      var status = document.getElementById('cmpStatus').value;
      var id = 'C' + Date.now();
      DB.companies.push({ id: id, name: name, status: status });
      // Create a default project for the new company
      var projId = 'P' + Date.now();
      DB.projects.push({ id: projId, companyId: id, projectName: 'IT Support', projectKey: 'ITSUP', description: 'General IT support for ' + name, isActive: true, createdAt: nowIso() });
      // Create default SLA targets for the new project
      (DB.severities || ['Critical','Major','Minor','Low']).forEach(function(sev) {
        var defaults = { 'Critical': {r:1,d:1}, 'Major': {r:4,d:3}, 'Minor': {r:8,d:7}, 'Low': {r:24,d:14} };
        var def = defaults[sev] || {r:24,d:14};
        DB.slaTargets.push({ projectId: projId, severity: sev, responseHours: def.r, resolutionDays: def.d, escalationPct: 80 });
      });
      auditLog(currentUser().id, 'CREATE', 'Company', name, '', status);
      save();
      sd.closeModal();
      sessionStorage.setItem('flash', 'Company "' + name + '" created with default project and SLA targets.');
      renderCompanies(currentUser());
      var f = sessionStorage.getItem('flash'); if (f) { toast(f); sessionStorage.removeItem('flash'); }
    },
    showEditCompany: function(cid) {
      var c = DB.companies.find(function(x) { return x.id === cid; });
      if (!c) return;
      var modal = '<div class="modal"><div class="m-hd"><h2>Edit Company</h2><span class="x" onclick="sd.closeModal()">&#10005;</span></div>' +
        '<div class="m-bd"><div class="form-grid">' +
        '<div class="field"><label>Company Name <span class="req">*</span></label><input id="cmpName" value="' + esc(c.name) + '"></div>' +
        '<div class="field"><label>Status</label><select id="cmpStatus"><option value="Active"' + (c.status==='Active'?' selected':'') + '>Active</option><option value="Inactive"' + (c.status==='Inactive'?' selected':'') + '>Inactive</option></select></div>' +
        '</div></div><div class="m-ft"><button class="btn" onclick="sd.closeModal()">Cancel</button>' +
        '<button class="btn btn-primary" onclick="sd.doEditCompany(\'' + cid + '\')">Save Changes</button></div></div>';
      var wrap = document.createElement('div');
      wrap.className = 'modal-backdrop';
      wrap.innerHTML = modal;
      document.body.appendChild(wrap);
    },
    doEditCompany: function(cid) {
      var c = DB.companies.find(function(x) { return x.id === cid; });
      var name = document.getElementById('cmpName').value.trim();
      if (!name) { alert('Company name is required.'); return; }
      var oldName = c.name; var oldStatus = c.status;
      c.name = name;
      c.status = document.getElementById('cmpStatus').value;
      var changes = [];
      if (oldName !== c.name) changes.push('name: ' + oldName + ' -> ' + c.name);
      if (oldStatus !== c.status) changes.push('status: ' + oldStatus + ' -> ' + c.status);
      if (changes.length) auditLog(currentUser().id, 'UPDATE', 'Company', c.name, oldName + ' / ' + oldStatus, c.name + ' / ' + c.status);
      save();
      sd.closeModal();
      sessionStorage.setItem('flash', 'Company updated.');
      renderCompanies(currentUser());
      var f = sessionStorage.getItem('flash'); if (f) { toast(f); sessionStorage.removeItem('flash'); }
    },

    // Project CRUD
    showAddProject: function() {
      var companies = DB.companies.filter(function(c) { return c.status === 'Active'; }).map(function(c) {
        return '<option value="' + c.id + '">' + esc(c.name) + '</option>';
      }).join('');
      var modal = '<div class="modal"><div class="m-hd"><h2>New Project</h2><span class="x" onclick="sd.closeModal()">&#10005;</span></div>' +
        '<div class="m-bd"><div class="form-grid">' +
        '<div class="field"><label>Project Name <span class="req">*</span></label><input id="projName" placeholder="e.g. IT Support"></div>' +
        '<div class="field"><label>Project Key <span class="req">*</span></label><input id="projKey" placeholder="e.g. ITSUP" maxlength="10" style="text-transform:uppercase;"></div>' +
        '<div class="field"><label>Company <span class="req">*</span></label><select id="projCompany">' + companies + '</select></div>' +
        '<div class="field"><label>Description</label><input id="projDesc" placeholder="Brief description\u2026"></div>' +
        '</div></div><div class="m-ft"><button class="btn" onclick="sd.closeModal()">Cancel</button>' +
        '<button class="btn btn-primary" onclick="sd.doAddProject()">&#10133; Create Project</button></div></div>';
      var wrap = document.createElement('div');
      wrap.className = 'modal-backdrop';
      wrap.innerHTML = modal;
      document.body.appendChild(wrap);
    },
    showAddProjectCD: function(companyId) {
      var modal = '<div class="modal"><div class="m-hd"><h2>New Project \u2014 ' + esc(company(companyId).name) + '</h2><span class="x" onclick="sd.closeModal()">&#10005;</span></div>' +
        '<div class="m-bd"><div class="form-grid">' +
        '<div class="field"><label>Project Name <span class="req">*</span></label><input id="projName" placeholder="e.g. ERP Systems"></div>' +
        '<div class="field"><label>Project Key <span class="req">*</span></label><input id="projKey" placeholder="e.g. ERP" maxlength="10" style="text-transform:uppercase;"></div>' +
        '<div class="field"><label>Description</label><input id="projDesc" placeholder="Brief description\u2026"></div>' +
        '</div></div><div class="m-ft"><button class="btn" onclick="sd.closeModal()">Cancel</button>' +
        '<button class="btn btn-primary" onclick="sd.doAddProject(\'' + companyId + '\')">&#10133; Create Project</button></div></div>';
      var wrap = document.createElement('div');
      wrap.className = 'modal-backdrop';
      wrap.innerHTML = modal;
      document.body.appendChild(wrap);
    },
    doAddProject: function(fixedCompanyId) {
      var name = document.getElementById('projName').value.trim();
      var key = document.getElementById('projKey').value.trim().toUpperCase();
      if (!name || !key) { alert('Project name and key are required.'); return; }
      var companyId = fixedCompanyId || document.getElementById('projCompany').value;
      var desc = document.getElementById('projDesc').value.trim();
      var id = 'P' + Date.now();
      DB.projects.push({ id: id, companyId: companyId, projectName: name, projectKey: key, description: desc, isActive: true, createdAt: nowIso() });
      // Create default SLA targets for the new project
      (DB.severities || ['Critical','Major','Minor','Low']).forEach(function(sev) {
        var defaults = { 'Critical': {r:1,d:1}, 'Major': {r:4,d:3}, 'Minor': {r:8,d:7}, 'Low': {r:24,d:14} };
        var def = defaults[sev] || {r:24,d:14};
        DB.slaTargets.push({ projectId: id, severity: sev, responseHours: def.r, resolutionDays: def.d, escalationPct: 80 });
      });
      auditLog(currentUser().id, 'CREATE', 'Project', name + ' (' + company(companyId).name + ')', '', key);
      save();
      sd.closeModal();
      if (fixedCompanyId) {
        toast('Project "' + name + '" created with default SLA targets.');
        window._companyDetailTab = 'projects';
        renderCompanyDetail(currentUser());
      } else {
        sessionStorage.setItem('flash', 'Project "' + name + '" created with default SLA targets.');
        renderProjects(currentUser());
        var f = sessionStorage.getItem('flash'); if (f) { toast(f); sessionStorage.removeItem('flash'); }
      }
    },
    showEditProject: function(projId) {
      var p = (DB.projects || []).find(function(x) { return x.id === projId; });
      if (!p) return;
      var companies = DB.companies.filter(function(c) { return c.status === 'Active'; }).map(function(c) {
        return '<option value="' + c.id + '"' + (c.id === p.companyId ? ' selected' : '') + '>' + esc(c.name) + '</option>';
      }).join('');
      var modal = '<div class="modal"><div class="m-hd"><h2>Edit Project</h2><span class="x" onclick="sd.closeModal()">&#10005;</span></div>' +
        '<div class="m-bd"><div class="form-grid">' +
        '<div class="field"><label>Project Name <span class="req">*</span></label><input id="projName" value="' + esc(p.projectName) + '"></div>' +
        '<div class="field"><label>Project Key</label><input id="projKey" value="' + esc(p.projectKey) + '" disabled></div>' +
        '<div class="field"><label>Company</label><select id="projCompany">' + companies + '</select></div>' +
        '<div class="field"><label>Description</label><input id="projDesc" value="' + esc(p.description || '') + '"></div>' +
        '<div class="field"><label>Status</label><select id="projStatus"><option value="true"' + (p.isActive ? ' selected' : '') + '>Active</option><option value="false"' + (!p.isActive ? ' selected' : '') + '>Inactive</option></select></div>' +
        '</div></div><div class="m-ft"><button class="btn" onclick="sd.closeModal()">Cancel</button>' +
        '<button class="btn btn-primary" onclick="sd.doEditProject(\'' + projId + '\')">Save Changes</button></div></div>';
      var wrap = document.createElement('div');
      wrap.className = 'modal-backdrop';
      wrap.innerHTML = modal;
      document.body.appendChild(wrap);
    },
    doEditProject: function(projId) {
      var p = (DB.projects || []).find(function(x) { return x.id === projId; });
      if (!p) return;
      var name = document.getElementById('projName').value.trim();
      if (!name) { alert('Project name is required.'); return; }
      var oldName = p.projectName;
      p.projectName = name;
      p.companyId = document.getElementById('projCompany').value;
      p.description = document.getElementById('projDesc').value.trim();
      p.isActive = document.getElementById('projStatus').value === 'true';
      auditLog(currentUser().id, 'UPDATE', 'Project', p.projectName, oldName, p.projectName + ' (' + (p.isActive ? 'Active' : 'Inactive') + ')');
      save();
      sd.closeModal();
      toast('Project "' + p.projectName + '" updated.');
      // Re-render whichever page we're on
      var page = document.body.getAttribute('data-page');
      if (page === 'company-detail') {
        window._companyDetailTab = 'projects';
        renderCompanyDetail(currentUser());
      } else {
        renderProjects(currentUser());
      }
    },

    // FR-6: User CRUD
    showAddUser: function() {
      var companies = DB.companies.map(function(c) { return '<option value="' + c.id + '">' + esc(c.name) + '</option>'; }).join('');
      var firstCompanyId = DB.companies.length ? DB.companies[0].id : '';
      var depts = '<option value="">\u2014 None \u2014</option>' + (DB.departments || []).filter(function(d) {
        return d.companyId === firstCompanyId;
      }).map(function(d) {
        return '<option value="' + d.id + '">' + esc(d.name) + '</option>';
      }).join('');
      var tierOpts = '<option value="">\u2014 None \u2014</option><option>L1</option><option>L2</option><option>L3</option><option>L4</option>';
      var modal = '<div class="modal"><div class="m-hd"><h2>New User</h2><span class="x" onclick="sd.closeModal()">&#10005;</span></div>' +
        '<div class="m-bd"><div class="form-grid cols-2">' +
        '<div class="field"><label>Full Name <span class="req">*</span></label><input id="usrName" placeholder="e.g. Jane Smith"></div>' +
        '<div class="field"><label>Email <span class="req">*</span></label><input id="usrEmail" type="email" placeholder="jane@company.example"></div>' +
        '<div class="field"><label>Role <span class="req">*</span></label><select id="usrRole"><option value="Client User">Client User</option><option value="Client Admin">Client Admin</option><option value="Support Agent">Support Agent</option><option value="System Admin">System Admin</option></select></div>' +
        '<div class="field"><label>Company <span class="req">*</span></label><select id="usrCompany" onchange="sd.filterDeptLov(this.value)">' + companies + '</select></div>' +
        '<div class="field"><label>Department</label><select id="usrDept">' + depts + '</select><span class="hint">For client users \u2014 filtered by company</span></div>' +
        '<div class="field"><label>Tier</label><select id="usrTier">' + tierOpts + '</select><span class="hint">For support agents only (L1\u2013L4)</span></div>' +
        '<div class="field"><label>Status</label><select id="usrStatus"><option value="Active" selected>Active</option><option value="Inactive">Inactive</option></select></div>' +
        '</div></div><div class="m-ft"><button class="btn" onclick="sd.closeModal()">Cancel</button>' +
        '<button class="btn btn-primary" onclick="sd.doAddUser()">&#10133; Create User</button></div></div>';
      var wrap = document.createElement('div');
      wrap.className = 'modal-backdrop';
      wrap.innerHTML = modal;
      document.body.appendChild(wrap);
    },
    doAddUser: function() {
      var name = document.getElementById('usrName').value.trim();
      var email = document.getElementById('usrEmail').value.trim();
      if (!name || !email) { alert('Name and email are required.'); return; }
      if (DB.users.some(function(u) { return u.email.toLowerCase() === email.toLowerCase(); })) {
        alert('A user with this email already exists.'); return;
      }
      var role = document.getElementById('usrRole').value;
      var companyId = document.getElementById('usrCompany').value;
      var deptId = document.getElementById('usrDept').value || null;
      var tier = document.getElementById('usrTier').value || null;
      var status = document.getElementById('usrStatus').value;
      var id = 'u' + Date.now();
      DB.users.push({ id: id, name: name, email: email, password: 'demo', role: role, companyId: companyId, departmentId: deptId, tier: tier, status: status, lastLogin: null });
      auditLog(currentUser().id, 'CREATE', 'User', name + ' (' + email + ')', '', role + ' / ' + company(companyId).name + ' / ' + status);
      save();
      sd.closeModal();
      sessionStorage.setItem('flash', 'User "' + name + '" created with role ' + role + '. Password: demo.');
      renderUsers(currentUser());
      var f = sessionStorage.getItem('flash'); if (f) { toast(f); sessionStorage.removeItem('flash'); }
    },
    showEditUser: function(uid) {
      var x = DB.users.find(function(u) { return u.id === uid; });
      if (!x) return;
      var companies = DB.companies.map(function(c) { return '<option value="' + c.id + '"' + (c.id===x.companyId?' selected':'') + '>' + esc(c.name) + '</option>'; }).join('');
      var roles = ['Client User','Client Admin','Support Agent','System Admin'].map(function(r) {
        return '<option' + (r===x.role?' selected':'') + '>' + r + '</option>';
      }).join('');
      var depts = '<option value="">\u2014 None \u2014</option>' + (DB.departments || []).filter(function(d) {
        return d.companyId === x.companyId;
      }).map(function(d) {
        return '<option value="' + d.id + '"' + (d.id===x.departmentId?' selected':'') + '>' + esc(d.name) + '</option>';
      }).join('');
      var tierOpts = ['', 'L1', 'L2', 'L3', 'L4'].map(function(t) {
        return '<option value="' + t + '"' + ((x.tier || '') === t ? ' selected' : '') + '>' + (t || '\u2014 None \u2014') + '</option>';
      }).join('');
      var userStatus = x.status || 'Active';
      var modal = '<div class="modal"><div class="m-hd"><h2>Edit User</h2><span class="x" onclick="sd.closeModal()">&#10005;</span></div>' +
        '<div class="m-bd"><div class="form-grid cols-2">' +
        '<div class="field"><label>Full Name <span class="req">*</span></label><input id="usrName" value="' + esc(x.name) + '"></div>' +
        '<div class="field"><label>Email</label><input id="usrEmail" value="' + esc(x.email) + '" disabled><span class="hint">Cannot change email</span></div>' +
        '<div class="field"><label>Role <span class="req">*</span></label><select id="usrRole">' + roles + '</select></div>' +
        '<div class="field"><label>Company <span class="req">*</span></label><select id="usrCompany" onchange="sd.filterDeptLov(this.value)">' + companies + '</select></div>' +
        '<div class="field"><label>Department</label><select id="usrDept">' + depts + '</select><span class="hint">Filtered by company</span></div>' +
        '<div class="field"><label>Tier</label><select id="usrTier">' + tierOpts + '</select><span class="hint">For support agents (L1\u2013L4)</span></div>' +
        '<div class="field"><label>Status</label><select id="usrStatus"><option value="Active"' + (userStatus==='Active'?' selected':'') + '>Active</option><option value="Inactive"' + (userStatus==='Inactive'?' selected':'') + '>Inactive</option></select></div>' +
        '</div></div><div class="m-ft"><button class="btn" onclick="sd.closeModal()">Cancel</button>' +
        '<button class="btn btn-primary" onclick="sd.doEditUser(\'' + uid + '\')">Save Changes</button></div></div>';
      var wrap = document.createElement('div');
      wrap.className = 'modal-backdrop';
      wrap.innerHTML = modal;
      document.body.appendChild(wrap);
    },
    doEditUser: function(uid) {
      var x = DB.users.find(function(u) { return u.id === uid; });
      var name = document.getElementById('usrName').value.trim();
      if (!name) { alert('Name is required.'); return; }
      var oldRole = x.role; var oldCompany = x.companyId; var oldName = x.name; var oldStatus = x.status || 'Active';
      x.name = name;
      x.role = document.getElementById('usrRole').value;
      x.companyId = document.getElementById('usrCompany').value;
      x.departmentId = document.getElementById('usrDept').value || null;
      x.tier = document.getElementById('usrTier').value || null;
      x.status = document.getElementById('usrStatus').value;
      auditLog(currentUser().id, 'UPDATE', 'User', x.name + ' (' + x.email + ')', oldName + ' / ' + oldRole + ' / ' + oldStatus, x.name + ' / ' + x.role + ' / ' + x.status);
      save();
      sd.closeModal();
      sessionStorage.setItem('flash', 'User "' + name + '" updated.');
      renderUsers(currentUser());
      var f = sessionStorage.getItem('flash'); if (f) { toast(f); sessionStorage.removeItem('flash'); }
    },

    // Agent-Project Mapping CRUD
    showAddAgentProject: function() {
      var agents = DB.users.filter(function(x) { return x.role === 'Support Agent'; });
      var agentOpts = agents.map(function(a) {
        var aTier = agentTier(a.id);
        return '<option value="' + a.id + '">' + esc(a.name) + (aTier ? ' [' + aTier + ']' : '') + '</option>';
      }).join('');
      var projOpts = (DB.projects || []).filter(function(p) { return p.isActive; }).map(function(p) {
        var c = company(p.companyId);
        return '<option value="' + p.id + '">' + esc(p.projectName) + ' (' + esc(c.name) + ')</option>';
      }).join('');
      var modal = '<div class="modal"><div class="m-hd"><h2>Add Agent-Project Mapping</h2><span class="x" onclick="sd.closeModal()">&#10005;</span></div>' +
        '<div class="m-bd"><div class="form-grid">' +
        '<div class="field"><label>Agent <span class="req">*</span></label><select id="acAgent">' + agentOpts + '</select></div>' +
        '<div class="field"><label>Project <span class="req">*</span></label><select id="acProject">' + projOpts + '</select></div>' +
        '</div></div><div class="m-ft"><button class="btn" onclick="sd.closeModal()">Cancel</button>' +
        '<button class="btn btn-primary" onclick="sd.doAddAgentProject()">&#10133; Add Mapping</button></div></div>';
      var wrap = document.createElement('div');
      wrap.className = 'modal-backdrop';
      wrap.innerHTML = modal;
      document.body.appendChild(wrap);
    },
    doAddAgentProject: function() {
      var agentId = document.getElementById('acAgent').value;
      var projectId = document.getElementById('acProject').value;
      if (!agentId || !projectId) { alert('Agent and project are required.'); return; }
      var exists = (DB.agentProjects || []).some(function(m) { return m.userId === agentId && m.projectId === projectId; });
      if (exists) { alert('This mapping already exists.'); return; }
      DB.agentProjects.push({ userId: agentId, projectId: projectId });
      var p = project(projectId);
      auditLog(currentUser().id, 'CREATE', 'Agent-Project', user(agentId).name + ' -> ' + (p.projectName || projectId), '', '');
      save();
      sd.closeModal();
      sessionStorage.setItem('flash', 'Mapping added: ' + user(agentId).name + ' covers ' + (p.projectName || projectId) + '.');
      renderAgentProjects(currentUser());
      var f = sessionStorage.getItem('flash'); if (f) { toast(f); sessionStorage.removeItem('flash'); }
    },
    removeAgentProject: function(idx) {
      var m = DB.agentProjects[idx];
      if (!m) return;
      var p = project(m.projectId);
      if (!confirm('Remove mapping: ' + (user(m.userId) || {}).name + ' from ' + (p.projectName || m.projectId) + '?')) return;
      auditLog(currentUser().id, 'DELETE', 'Agent-Project', (user(m.userId) || {}).name + ' -> ' + (p.projectName || m.projectId), '', '');
      DB.agentProjects.splice(idx, 1);
      save();
      sessionStorage.setItem('flash', 'Mapping removed.');
      renderAgentProjects(currentUser());
      var f = sessionStorage.getItem('flash'); if (f) { toast(f); sessionStorage.removeItem('flash'); }
    },

    // User-Project access CRUD (Client Admin)
    showAddUserProject: function(projectId) {
      var u = currentUser();
      var companyUsers = DB.users.filter(function (x) { return x.companyId === u.companyId && x.role === 'Client User' && x.status === 'Active'; });
      var existing = (DB.userProjects || []).filter(function (up) { return up.projectId === projectId; }).map(function (up) { return up.userId; });
      var available = companyUsers.filter(function (cu) { return existing.indexOf(cu.id) < 0; });
      if (!available.length) { toast('All client users already have explicit access (or no users to add).'); return; }
      var userOpts = available.map(function (cu) {
        return '<option value="' + cu.id + '">' + esc(cu.name) + ' (' + esc(cu.email) + ')</option>';
      }).join('');
      var p = project(projectId);
      var modal = '<div class="modal" style="max-width:440px;"><div class="m-hd"><h2>Add User Access \u2014 ' + esc(p.projectName || projectId) + '</h2><span class="x" onclick="sd.closeModal()">&#10005;</span></div>' +
        '<div class="m-bd"><p class="muted mt-0">Adding specific users restricts this project to only those users (removes open default).</p>' +
        '<div class="form-grid"><div class="field"><label>User</label><select id="upUser">' + userOpts + '</select></div>' +
        '</div></div><div class="m-ft"><button class="btn" onclick="sd.closeModal()">Cancel</button>' +
        '<button class="btn btn-primary" onclick="sd.doAddUserProject(\'' + projectId + '\')">&#10133; Grant Access</button></div></div>';
      var wrap = document.createElement('div');
      wrap.className = 'modal-backdrop';
      wrap.innerHTML = modal;
      document.body.appendChild(wrap);
    },
    doAddUserProject: function(projectId) {
      var userId = document.getElementById('upUser').value;
      if (!userId) { alert('Select a user.'); return; }
      if (!DB.userProjects) DB.userProjects = [];
      DB.userProjects.push({ userId: userId, projectId: projectId });
      save();
      sd.closeModal();
      toast('Access granted to ' + (user(userId) || {}).name + '.');
      renderUserProjects(currentUser());
    },
    removeUserProject: function(userId, projectId) {
      if (!DB.userProjects) return;
      var idx = DB.userProjects.findIndex(function (up) { return up.userId === userId && up.projectId === projectId; });
      if (idx >= 0) {
        DB.userProjects.splice(idx, 1);
        save();
        toast('Access removed for ' + (user(userId) || {}).name + '.');
        renderUserProjects(currentUser());
      }
    },

    // Department CRUD
    showAddDept: function() {
      var clientCompanies = DB.companies.filter(function(c) { return c.status === 'Active'; });
      var companyOpts = clientCompanies.map(function(c) {
        return '<option value="' + c.id + '">' + esc(c.name) + '</option>';
      }).join('');
      var modal = '<div class="modal"><div class="m-hd"><h2>New Department</h2><span class="x" onclick="sd.closeModal()">&#10005;</span></div>' +
        '<div class="m-bd"><div class="form-grid">' +
        '<div class="field"><label>Department Name <span class="req">*</span></label><input id="deptName" placeholder="e.g. Finance"></div>' +
        '<div class="field"><label>Company <span class="req">*</span></label><select id="deptCompany">' + companyOpts + '</select></div>' +
        '</div></div><div class="m-ft"><button class="btn" onclick="sd.closeModal()">Cancel</button>' +
        '<button class="btn btn-primary" onclick="sd.doAddDept()">&#10133; Create Department</button></div></div>';
      var wrap = document.createElement('div');
      wrap.className = 'modal-backdrop';
      wrap.innerHTML = modal;
      document.body.appendChild(wrap);
    },
    doAddDept: function() {
      var name = document.getElementById('deptName').value.trim();
      var companyId = document.getElementById('deptCompany').value;
      if (!name) { alert('Department name is required.'); return; }
      var id = 'dep' + Date.now();
      DB.departments.push({ id: id, companyId: companyId, name: name });
      auditLog(currentUser().id, 'CREATE', 'Department', name + ' (' + company(companyId).name + ')', '', '');
      save();
      sd.closeModal();
      sessionStorage.setItem('flash', 'Department "' + name + '" created under ' + company(companyId).name + '.');
      renderDepartments(currentUser());
      var f = sessionStorage.getItem('flash'); if (f) { toast(f); sessionStorage.removeItem('flash'); }
    },
    showEditDept: function(deptId) {
      var d = (DB.departments || []).find(function(x) { return x.id === deptId; });
      if (!d) return;
      var clientCompanies = DB.companies.filter(function(c) { return c.status === 'Active'; });
      var companyOpts = clientCompanies.map(function(c) {
        return '<option value="' + c.id + '"' + (c.id === d.companyId ? ' selected' : '') + '>' + esc(c.name) + '</option>';
      }).join('');
      var modal = '<div class="modal"><div class="m-hd"><h2>Edit Department</h2><span class="x" onclick="sd.closeModal()">&#10005;</span></div>' +
        '<div class="m-bd"><div class="form-grid">' +
        '<div class="field"><label>Department Name <span class="req">*</span></label><input id="deptName" value="' + esc(d.name) + '"></div>' +
        '<div class="field"><label>Company <span class="req">*</span></label><select id="deptCompany">' + companyOpts + '</select></div>' +
        '</div></div><div class="m-ft"><button class="btn" onclick="sd.closeModal()">Cancel</button>' +
        '<button class="btn btn-primary" onclick="sd.doEditDept(\'' + deptId + '\')">Save Changes</button></div></div>';
      var wrap = document.createElement('div');
      wrap.className = 'modal-backdrop';
      wrap.innerHTML = modal;
      document.body.appendChild(wrap);
    },
    doEditDept: function(deptId) {
      var d = (DB.departments || []).find(function(x) { return x.id === deptId; });
      var name = document.getElementById('deptName').value.trim();
      if (!name) { alert('Department name is required.'); return; }
      var oldName = d.name; var oldCompanyId = d.companyId;
      d.name = name;
      d.companyId = document.getElementById('deptCompany').value;
      auditLog(currentUser().id, 'UPDATE', 'Department', d.name, oldName + ' (' + company(oldCompanyId).name + ')', d.name + ' (' + company(d.companyId).name + ')');
      save();
      sd.closeModal();
      sessionStorage.setItem('flash', 'Department updated.');
      renderDepartments(currentUser());
      var f = sessionStorage.getItem('flash'); if (f) { toast(f); sessionStorage.removeItem('flash'); }
    },
    filterDeptsByCompany: function(companyId) {
      var rows = document.querySelectorAll('#ig-depts tbody tr');
      var visible = 0;
      rows.forEach(function(row) {
        var show = (companyId === 'all' || row.getAttribute('data-dept-company') === companyId);
        row.style.display = show ? '' : 'none';
        if (show) visible++;
      });
      var countEl = document.getElementById('depts-row-count');
      if (countEl) countEl.textContent = visible + ' rows';
    },

    // Category CRUD
    showAddCategory: function() {
      var companyOpts = '<option value="">Global (all companies)</option>' +
        DB.companies.filter(function(c) { return c.status === 'Active'; }).map(function(c) {
          return '<option value="' + c.id + '">' + esc(c.name) + ' only</option>';
        }).join('');
      var projOpts = '<option value="">All projects</option>' +
        (DB.projects || []).filter(function(p) { return p.isActive; }).map(function(p) {
          return '<option value="' + p.id + '">' + esc(p.projectName) + ' (' + esc(company(p.companyId).name) + ')</option>';
        }).join('');
      var modal = '<div class="modal"><div class="m-hd"><h2>New Category</h2><span class="x" onclick="sd.closeModal()">&#10005;</span></div>' +
        '<div class="m-bd"><div class="form-grid">' +
        '<div class="field"><label>Category Name <span class="req">*</span></label><input id="catName" placeholder="e.g. Database"></div>' +
        '<div class="field"><label>Company Scope</label><select id="catCompany">' + companyOpts + '</select><span class="hint">Global = visible to all; company = only that client</span></div>' +
        '<div class="field"><label>Project Scope</label><select id="catProject">' + projOpts + '</select><span class="hint">Restrict to a specific project</span></div>' +
        '<div class="field"><label>Description</label><input id="catDesc" placeholder="Guidance text shown in LOV\u2026"></div>' +
        '<div class="field"><label>Status</label><select id="catStatus"><option value="Active" selected>Active</option><option value="Inactive">Inactive</option></select></div>' +
        '</div></div><div class="m-ft"><button class="btn" onclick="sd.closeModal()">Cancel</button>' +
        '<button class="btn btn-primary" onclick="sd.doAddCategory()">&#10133; Create Category</button></div></div>';
      var wrap = document.createElement('div');
      wrap.className = 'modal-backdrop';
      wrap.innerHTML = modal;
      document.body.appendChild(wrap);
    },
    doAddCategory: function() {
      var name = document.getElementById('catName').value.trim();
      if (!name) { alert('Category name is required.'); return; }
      var companyId = document.getElementById('catCompany').value || null;
      var projectId = document.getElementById('catProject').value || null;
      var desc = document.getElementById('catDesc').value.trim();
      var status = document.getElementById('catStatus').value;
      var id = 'cat' + Date.now();
      DB.categories.push({ id: id, name: name, companyId: companyId, projectId: projectId, description: desc, status: status });
      auditLog(currentUser().id, 'CREATE', 'Category', name, '', (companyId ? company(companyId).name : 'Global') + ' / ' + status);
      save();
      sd.closeModal();
      sessionStorage.setItem('flash', 'Category "' + name + '" created (' + (companyId ? company(companyId).name : 'Global') + ').');
      renderCategories(currentUser());
      var f = sessionStorage.getItem('flash'); if (f) { toast(f); sessionStorage.removeItem('flash'); }
    },
    showEditCategory: function(catId) {
      var c = DB.categories.find(function(x) { return x.id === catId; });
      if (!c) return;
      var companyOpts = '<option value="">Global (all companies)</option>' +
        DB.companies.filter(function(co) { return co.status === 'Active'; }).map(function(co) {
          return '<option value="' + co.id + '"' + (co.id === c.companyId ? ' selected' : '') + '>' + esc(co.name) + ' only</option>';
        }).join('');
      var projOpts = '<option value="">All projects</option>' +
        (DB.projects || []).filter(function(p) { return p.isActive; }).map(function(p) {
          return '<option value="' + p.id + '"' + (p.id === c.projectId ? ' selected' : '') + '>' + esc(p.projectName) + ' (' + esc(company(p.companyId).name) + ')</option>';
        }).join('');
      var modal = '<div class="modal"><div class="m-hd"><h2>Edit Category</h2><span class="x" onclick="sd.closeModal()">&#10005;</span></div>' +
        '<div class="m-bd"><div class="form-grid">' +
        '<div class="field"><label>Category Name <span class="req">*</span></label><input id="catName" value="' + esc(c.name) + '"></div>' +
        '<div class="field"><label>Company Scope</label><select id="catCompany">' + companyOpts + '</select></div>' +
        '<div class="field"><label>Project Scope</label><select id="catProject">' + projOpts + '</select></div>' +
        '<div class="field"><label>Description</label><input id="catDesc" value="' + esc(c.description || '') + '"></div>' +
        '<div class="field"><label>Status</label><select id="catStatus"><option value="Active"' + ((c.status||'Active')==='Active'?' selected':'') + '>Active</option><option value="Inactive"' + ((c.status||'Active')==='Inactive'?' selected':'') + '>Inactive</option></select></div>' +
        '</div></div><div class="m-ft"><button class="btn" onclick="sd.closeModal()">Cancel</button>' +
        '<button class="btn btn-primary" onclick="sd.doEditCategory(\'' + catId + '\')">Save Changes</button></div></div>';
      var wrap = document.createElement('div');
      wrap.className = 'modal-backdrop';
      wrap.innerHTML = modal;
      document.body.appendChild(wrap);
    },
    doEditCategory: function(catId) {
      var c = DB.categories.find(function(x) { return x.id === catId; });
      if (!c) return;
      var name = document.getElementById('catName').value.trim();
      if (!name) { alert('Category name is required.'); return; }
      var oldName = c.name; var oldStatus = c.status || 'Active';
      c.name = name;
      c.companyId = document.getElementById('catCompany').value || null;
      c.projectId = document.getElementById('catProject').value || null;
      c.description = document.getElementById('catDesc').value.trim();
      c.status = document.getElementById('catStatus').value;
      auditLog(currentUser().id, 'UPDATE', 'Category', c.name, oldName + ' / ' + oldStatus, c.name + ' / ' + c.status);
      save();
      sd.closeModal();
      sessionStorage.setItem('flash', 'Category "' + c.name + '" updated.');
      renderCategories(currentUser());
      var f = sessionStorage.getItem('flash'); if (f) { toast(f); sessionStorage.removeItem('flash'); }
    },

    // Company Detail tab switching + shuttle
    companyTab: function(tab) {
      window._companyDetailTab = tab;
      document.querySelectorAll('.cd-panel').forEach(function (p) {
        p.style.display = (p.getAttribute('data-panel') === tab) ? '' : 'none';
      });
      document.querySelectorAll('.cd-tab').forEach(function (t) { t.classList.remove('cd-tab-active'); });
      var idx = { projects: 0, sla: 1, depts: 2, agents: 3 }[tab] || 0;
      var tabEls = document.querySelectorAll('.cd-tab');
      if (tabEls[idx]) tabEls[idx].classList.add('cd-tab-active');
    },
    shuttleSelect: function(el) {
      el.classList.toggle('shuttle-selected');
    },
    shuttleFilter: function(inp, listId) {
      var term = inp.value.toLowerCase();
      var items = document.querySelectorAll('#' + listId + ' .shuttle-item');
      items.forEach(function (it) {
        it.style.display = (!term || it.textContent.toLowerCase().indexOf(term) >= 0) ? '' : 'none';
      });
    },
    shuttleAdd: function(companyId) {
      var selected = document.querySelectorAll('#shuttle-available .shuttle-item.shuttle-selected');
      if (!selected.length) { toast('Select agents from the Available list first.'); return; }
      var projSel = document.getElementById('shuttle-project');
      var projectId = projSel ? projSel.value : null;
      if (!projectId) { toast('Select a project first.'); return; }
      selected.forEach(function (el) {
        var agentId = el.getAttribute('data-agent-id');
        var exists = (DB.agentProjects || []).some(function (m) { return m.userId === agentId && m.projectId === projectId; });
        if (!exists) {
          DB.agentProjects.push({ userId: agentId, projectId: projectId });
          auditLog(currentUser().id, 'CREATE', 'Agent-Project', user(agentId).name + ' -> ' + project(projectId).projectName, '', '');
        }
      });
      save();
      toast(selected.length + ' agent(s) assigned to ' + project(projectId).projectName + '.');
      window._companyDetailTab = 'agents';
      renderCompanyDetail(currentUser());
    },
    shuttleRemove: function(companyId) {
      var selected = document.querySelectorAll('#shuttle-assigned .shuttle-item.shuttle-selected');
      if (!selected.length) { toast('Select agents from the Assigned list first.'); return; }
      var cProjs = companyProjects(companyId);
      selected.forEach(function (el) {
        var agentId = el.getAttribute('data-agent-id');
        // Remove from all projects in this company
        cProjs.forEach(function (p) {
          var idx2 = DB.agentProjects.findIndex(function (m) { return m.userId === agentId && m.projectId === p.id; });
          if (idx2 >= 0) {
            auditLog(currentUser().id, 'DELETE', 'Agent-Project', user(agentId).name + ' -> ' + p.projectName, '', '');
            DB.agentProjects.splice(idx2, 1);
          }
        });
      });
      save();
      toast(selected.length + ' agent(s) removed from ' + company(companyId).name + '.');
      window._companyDetailTab = 'agents';
      renderCompanyDetail(currentUser());
    },
    showAddDeptCD: function(companyId) {
      var modal = '<div class="modal"><div class="m-hd"><h2>New Department \u2014 ' + esc(company(companyId).name) + '</h2><span class="x" onclick="sd.closeModal()">&#10005;</span></div>' +
        '<div class="m-bd"><div class="form-grid">' +
        '<div class="field"><label>Department Name <span class="req">*</span></label><input id="deptName" placeholder="e.g. Finance"></div>' +
        '</div></div><div class="m-ft"><button class="btn" onclick="sd.closeModal()">Cancel</button>' +
        '<button class="btn btn-primary" onclick="sd.doAddDeptCD(\'' + companyId + '\')">&#10133; Create Department</button></div></div>';
      var wrap = document.createElement('div');
      wrap.className = 'modal-backdrop';
      wrap.innerHTML = modal;
      document.body.appendChild(wrap);
    },
    doAddDeptCD: function(companyId) {
      var name = document.getElementById('deptName').value.trim();
      if (!name) { alert('Department name is required.'); return; }
      var id = 'dep' + Date.now();
      DB.departments.push({ id: id, companyId: companyId, name: name });
      auditLog(currentUser().id, 'CREATE', 'Department', name + ' (' + company(companyId).name + ')', '', '');
      save();
      sd.closeModal();
      toast('Department "' + name + '" created.');
      window._companyDetailTab = 'depts';
      renderCompanyDetail(currentUser());
    },
    showEditDeptCD: function(deptId) {
      var d = (DB.departments || []).find(function (x) { return x.id === deptId; });
      if (!d) return;
      var modal = '<div class="modal"><div class="m-hd"><h2>Edit Department</h2><span class="x" onclick="sd.closeModal()">&#10005;</span></div>' +
        '<div class="m-bd"><div class="form-grid">' +
        '<div class="field"><label>Department Name <span class="req">*</span></label><input id="deptName" value="' + esc(d.name) + '"></div>' +
        '</div></div><div class="m-ft"><button class="btn" onclick="sd.closeModal()">Cancel</button>' +
        '<button class="btn btn-primary" onclick="sd.doEditDeptCD(\'' + deptId + '\')">Save Changes</button></div></div>';
      var wrap = document.createElement('div');
      wrap.className = 'modal-backdrop';
      wrap.innerHTML = modal;
      document.body.appendChild(wrap);
    },
    doEditDeptCD: function(deptId) {
      var d = (DB.departments || []).find(function (x) { return x.id === deptId; });
      var name = document.getElementById('deptName').value.trim();
      if (!name) { alert('Department name is required.'); return; }
      var oldName = d.name;
      d.name = name;
      auditLog(currentUser().id, 'UPDATE', 'Department', d.name, oldName + ' (' + company(d.companyId).name + ')', d.name + ' (' + company(d.companyId).name + ')');
      save();
      sd.closeModal();
      toast('Department updated.');
      window._companyDetailTab = 'depts';
      renderCompanyDetail(currentUser());
    },

    // SLA Target editing
    showEditSla: function(idx, fromCompanyDetail) {
      var s = (DB.slaTargets || [])[idx];
      if (!s) return;
      var p = project(s.projectId);
      var c = company(p.companyId || '');
      var modal = '<div class="modal" style="max-width:480px;"><div class="m-hd"><h2>Edit SLA Target \u2014 ' + esc(p.projectName || '') + ' / ' + s.severity + '</h2><span class="x" onclick="sd.closeModal()">&#10005;</span></div>' +
        '<div class="m-bd"><p class="muted mt-0">' + esc(c.name || '') + '</p><div class="form-grid">' +
        '<div class="field"><label>Response Time (hours) <span class="req">*</span></label><input id="slaResp" type="number" min="1" value="' + s.responseHours + '"></div>' +
        '<div class="field"><label>Resolution Time (days) <span class="req">*</span></label><input id="slaRes" type="number" min="1" value="' + s.resolutionDays + '"></div>' +
        '<div class="field"><label>Escalation Threshold (%) <span class="req">*</span></label><input id="slaEsc" type="number" min="1" max="100" value="' + (s.escalationPct || 80) + '"></div>' +
        '<div class="field"><label>Effective From</label><input id="slaEffective" type="date" value="' + (s.effectiveFrom || '') + '"></div>' +
        '<div class="field"><label>Notes</label><input id="slaNotes" value="' + esc(s.notes || '') + '" placeholder="Contract reference, amendment notes\u2026"></div>' +
        '</div></div><div class="m-ft"><button class="btn" onclick="sd.closeModal()">Cancel</button>' +
        '<button class="btn btn-primary" onclick="sd.doEditSla(' + idx + ', ' + (fromCompanyDetail ? 'true' : 'false') + ')">Save Changes</button></div></div>';
      var wrap = document.createElement('div');
      wrap.className = 'modal-backdrop';
      wrap.innerHTML = modal;
      document.body.appendChild(wrap);
    },
    doEditSla: function(idx, fromCompanyDetail) {
      var s = (DB.slaTargets || [])[idx];
      if (!s) return;
      var resp = parseInt(document.getElementById('slaResp').value);
      var res = parseInt(document.getElementById('slaRes').value);
      var esc2 = parseInt(document.getElementById('slaEsc').value);
      if (!resp || !res || !esc2 || resp < 1 || res < 1 || esc2 < 1 || esc2 > 100) { alert('All fields must be valid positive numbers (escalation 1-100%).'); return; }
      var oldVal = s.responseHours + 'h / ' + s.resolutionDays + 'd / ' + s.escalationPct + '%';
      s.responseHours = resp;
      s.resolutionDays = res;
      s.escalationPct = esc2;
      s.effectiveFrom = document.getElementById('slaEffective').value || s.effectiveFrom;
      s.notes = document.getElementById('slaNotes').value;
      s.approvedBy = currentUser().id;
      var p = project(s.projectId);
      var newVal = s.responseHours + 'h / ' + s.resolutionDays + 'd / ' + s.escalationPct + '%';
      auditLog(currentUser().id, 'UPDATE', 'SLA Target', (p.projectName || '') + ' / ' + s.severity, oldVal, newVal);
      save();
      sd.closeModal();
      toast('SLA target updated for ' + (p.projectName || '') + ' / ' + s.severity + '.');
      if (fromCompanyDetail) {
        window._companyDetailTab = 'sla';
        renderCompanyDetail(currentUser());
      } else {
        renderSlaTargets(currentUser());
      }
    },

    closeModal: function () {
      var m = document.querySelector('.modal-backdrop');
      if (m) m.remove();
    },

    filterQueue: function () {
      var q = document.getElementById('q');
      var searchTerm = q ? q.value.toLowerCase() : '';
      var rows = document.querySelectorAll('#qtable tbody tr'), shown = 0;
      rows.forEach(function (r) {
        if (r.getAttribute('data-hidden-by-facet') === '1') { r.style.display = 'none'; return; }
        var hit = !searchTerm || r.textContent.toLowerCase().indexOf(searchTerm) >= 0;
        r.style.display = hit ? '' : 'none';
        if (hit) shown++;
      });
      var el = document.getElementById('qcount');
      if (el) el.textContent = shown + ' results';
    },
    toggleFacet: function (field, value) {
      if (!window._facetState) window._facetState = {};
      if (!window._facetState[field]) window._facetState[field] = {};
      if (window._facetState[field][value]) {
        delete window._facetState[field][value];
      } else {
        window._facetState[field][value] = true;
      }
      if (Object.keys(window._facetState[field]).length === 0) delete window._facetState[field];
      var rows = document.querySelectorAll('#qtable tbody tr');
      rows.forEach(function (r) {
        var dominated = false;
        var state = window._facetState || {};
        Object.keys(state).forEach(function (f) {
          var allowed = Object.keys(state[f]);
          if (allowed.length === 0) return;
          var cellVal = r.getAttribute('data-' + f) || '';
          if (allowed.indexOf(cellVal) < 0) dominated = true;
        });
        r.setAttribute('data-hidden-by-facet', dominated ? '1' : '0');
      });
      document.querySelectorAll('.facet-item').forEach(function (fi) {
        var f = fi.getAttribute('data-field');
        var v = fi.getAttribute('data-value');
        var active = window._facetState && window._facetState[f] && window._facetState[f][v];
        fi.classList.toggle('active', !!active);
      });
      sd.filterQueue();
    },
    clearFacets: function (field) {
      if (window._facetState) delete window._facetState[field];
      var rows = document.querySelectorAll('#qtable tbody tr');
      rows.forEach(function (r) { r.setAttribute('data-hidden-by-facet', '0'); });
      if (window._facetState && Object.keys(window._facetState).length) {
        Object.keys(window._facetState).forEach(function (f) {
          var allowed = Object.keys(window._facetState[f]);
          if (!allowed.length) return;
          rows.forEach(function (r) {
            if (r.getAttribute('data-hidden-by-facet') === '1') return;
            var cellVal = r.getAttribute('data-' + f) || '';
            if (allowed.indexOf(cellVal) < 0) r.setAttribute('data-hidden-by-facet', '1');
          });
        });
      }
      document.querySelectorAll('.facet-item[data-field="' + field + '"]').forEach(function (fi) { fi.classList.remove('active'); });
      sd.filterQueue();
    },
    filterAuditLog: function() {
      var searchInp = document.querySelector('#ig-audit-wrap .ir-search input');
      var term = searchInp ? searchInp.value.toLowerCase() : '';
      var actionFilter = document.getElementById('audit-action-filter');
      var entityFilter = document.getElementById('audit-entity-filter');
      var dateFrom = document.getElementById('audit-date-from');
      var dateTo = document.getElementById('audit-date-to');
      var action = actionFilter ? actionFilter.value : 'all';
      var entity = entityFilter ? entityFilter.value : 'all';
      var from = dateFrom && dateFrom.value ? new Date(dateFrom.value + 'T00:00:00').getTime() : 0;
      var to = dateTo && dateTo.value ? new Date(dateTo.value + 'T23:59:59').getTime() : Infinity;
      var rows = document.querySelectorAll('#ig-audit tbody tr'), shown = 0;
      rows.forEach(function (r) {
        var rAction = r.getAttribute('data-audit-action') || '';
        var rEntity = r.getAttribute('data-audit-entity') || '';
        var rTs = r.getAttribute('data-audit-ts') || '';
        var tsMs = rTs ? new Date(rTs).getTime() : 0;
        var matchAction = (action === 'all' || rAction === action);
        var matchEntity = (entity === 'all' || rEntity === entity);
        var matchDate = (tsMs >= from && tsMs <= to);
        var matchText = !term || r.textContent.toLowerCase().indexOf(term) >= 0;
        var show = matchAction && matchEntity && matchDate && matchText;
        r.style.display = show ? '' : 'none';
        if (show) shown++;
      });
      var countEl = document.getElementById('audit-row-count');
      if (countEl) countEl.textContent = shown + ' rows';
    },
    clearAuditFilters: function() {
      var searchInp = document.querySelector('#ig-audit-wrap .ir-search input');
      if (searchInp) searchInp.value = '';
      var actionFilter = document.getElementById('audit-action-filter');
      if (actionFilter) actionFilter.value = 'all';
      var entityFilter = document.getElementById('audit-entity-filter');
      if (entityFilter) entityFilter.value = 'all';
      var dateFrom = document.getElementById('audit-date-from');
      if (dateFrom) dateFrom.value = '';
      var dateTo = document.getElementById('audit-date-to');
      if (dateTo) dateTo.value = '';
      sd.filterAuditLog();
    },
    igSearch: function (tableId) {
      var inp = document.querySelector('#' + tableId + '-wrap .ir-search input');
      var term = inp ? inp.value.toLowerCase() : '';
      var rows = document.querySelectorAll('#' + tableId + ' tbody tr'), shown = 0;
      rows.forEach(function (r) { var hit = !term || r.textContent.toLowerCase().indexOf(term) >= 0; r.style.display = hit ? '' : 'none'; if (hit) shown++; });
      var el = document.querySelector('#' + tableId + '-wrap .ir-count');
      if (el) el.textContent = shown + ' rows';
    },
    filterProjects: function () {
      var q = document.getElementById('projq').value.toLowerCase().trim();
      var cards = document.querySelectorAll('#projgrid .proj-card'), shown = 0;
      cards.forEach(function (c) { var hit = (c.getAttribute('data-name') || '').indexOf(q) >= 0; c.style.display = hit ? '' : 'none'; if (hit) shown++; });
      var el = document.getElementById('projcount'); if (el) el.textContent = shown + ' projects';
    }
  };

  /* ---------- router ---------- */
  function boot() {
    var page = document.body.getAttribute('data-page');
    if (page === 'login') { renderLogin(); return; }
    var u = currentUser();
    if (!u) { location.href = '01-login.html'; return; }
    switch (page) {
      case 'home': renderHome(u); break;
      case 'dashboard': renderDashboard(u); break;
      case 'queue': renderQueue(u); break;
      case 'detail': renderDetail(u); break;
      case 'create': renderCreate(u); break;
      case 'assign': renderAssign(u); break;
      case 'comment': renderComment(u); break;
      case 'companies': renderCompanies(u); break;
      case 'projects': renderProjects(u); break;
      case 'user-projects': renderUserProjects(u); break;
      case 'users': renderUsers(u); break;
      case 'categories': renderCategories(u); break;
      case 'sla-targets': renderSlaTargets(u); break;
      case 'agent-companies': renderAgentProjects(u); break;
      case 'departments': renderDepartments(u); break;
      case 'company-detail': renderCompanyDetail(u); break;
      case 'audit-log': renderAuditLog(u); break;
      case 'profile': renderProfile(u); break;
      default: renderHome(u);
    }
    var f = sessionStorage.getItem('flash');
    if (f) { toast(f); sessionStorage.removeItem('flash'); }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
