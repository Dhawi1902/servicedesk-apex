--------------------------------------------------------------------------------
-- 02_seed_data.sql  —  Demo dataset for the multi-tenant service desk
--------------------------------------------------------------------------------
-- MIRRORS docs/mockups/assets/demo-data.js (the locked demo dataset, 2026-07-04):
-- same companies, projects, users, tiers, SLA policies, and ticket refs — so the
-- APEX build demos exactly what the team signed off in the clickable prototype.
--
-- Idempotent-friendly: every child row resolves its parents by NATURAL KEY
-- (company_name / email / project_key / policy_name / category_name / subject)
-- via scalar sub-queries or joins, never by generated ID values.
-- A count-assert block at the end fails LOUDLY if any natural key mis-resolves.
--
-- Deliberate deviations from demo-data.js:
--   * Timestamps are SYSTIMESTAMP-relative (dashboard aging stays fresh on demo day).
--   * SLA_DUE_DATE = CREATED_AT + resolution_days of the project's policy for the
--     ticket's severity (self-consistent; the mockup values were approximations).
--
-- Run AFTER 01_schema.sql. Password handling is a separate step (04_apex_accounts).
--------------------------------------------------------------------------------

----------------------------------------------------------------- COMPANIES ----
-- Every company is a tenant — the service provider (Northwind IT) is also its own customer.
INSERT INTO COMPANIES (COMPANY_NAME) VALUES ('Northwind IT');
INSERT INTO COMPANIES (COMPANY_NAME) VALUES ('Acme Corp');
INSERT INTO COMPANIES (COMPANY_NAME) VALUES ('Globex Ltd');
INSERT INTO COMPANIES (COMPANY_NAME) VALUES ('Initech');
INSERT INTO COMPANIES (COMPANY_NAME, STATUS) VALUES ('Umbrella Inc', 'INACTIVE');

--------------------------------------------------------------- DEPARTMENTS ----
-- Metadata only (decision N revised): routing/reporting, never visibility.
INSERT INTO DEPARTMENTS (COMPANY_ID, DEPARTMENT_NAME)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Northwind IT'), 'Internal Systems');
INSERT INTO DEPARTMENTS (COMPANY_ID, DEPARTMENT_NAME)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Acme Corp'), 'Finance');
INSERT INTO DEPARTMENTS (COMPANY_ID, DEPARTMENT_NAME)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Acme Corp'), 'IT');
INSERT INTO DEPARTMENTS (COMPANY_ID, DEPARTMENT_NAME)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Globex Ltd'), 'Operations');
INSERT INTO DEPARTMENTS (COMPANY_ID, DEPARTMENT_NAME)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Globex Ltd'), 'HR');
INSERT INTO DEPARTMENTS (COMPANY_ID, DEPARTMENT_NAME)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Initech'), 'Engineering');
INSERT INTO DEPARTMENTS (COMPANY_ID, DEPARTMENT_NAME)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Initech'), 'Support');

------------------------------------------------------------------ APP_USERS ---
-- DEFAULT_ROLE = landing role at login (decision P); full role list in USER_ROLES.
-- Agents carry no department (vendor staff); tier lives on AGENT_PROJECTS.

-- Northwind IT — vendor staff
INSERT INTO APP_USERS (COMPANY_ID, DEPARTMENT_ID, FULL_NAME, EMAIL, DEFAULT_ROLE)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Northwind IT'),
        NULL, 'Sara Admin', 'sara@northwind.example', 'SYSTEM_ADMIN');
INSERT INTO APP_USERS (COMPANY_ID, DEPARTMENT_ID, FULL_NAME, EMAIL, DEFAULT_ROLE)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Northwind IT'),
        NULL, 'Mike Ops', 'mike@northwind.example', 'SUPPORT_AGENT');
INSERT INTO APP_USERS (COMPANY_ID, DEPARTMENT_ID, FULL_NAME, EMAIL, DEFAULT_ROLE)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Northwind IT'),
        NULL, 'Lee Tech', 'lee@northwind.example', 'SUPPORT_AGENT');
INSERT INTO APP_USERS (COMPANY_ID, DEPARTMENT_ID, FULL_NAME, EMAIL, DEFAULT_ROLE)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Northwind IT'),
        NULL, 'Nora Syed', 'nora@northwind.example', 'SUPPORT_AGENT');
INSERT INTO APP_USERS (COMPANY_ID, DEPARTMENT_ID, FULL_NAME, EMAIL, DEFAULT_ROLE)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Northwind IT'),
        NULL, 'Raj Patel', 'raj@northwind.example', 'SUPPORT_AGENT');
INSERT INTO APP_USERS (COMPANY_ID, DEPARTMENT_ID, FULL_NAME, EMAIL, DEFAULT_ROLE)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Northwind IT'),
        NULL, 'Kim Tanaka', 'kim@northwind.example', 'SUPPORT_AGENT');
INSERT INTO APP_USERS (COMPANY_ID, DEPARTMENT_ID, FULL_NAME, EMAIL, DEFAULT_ROLE)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Northwind IT'),
        NULL, 'Omar Hassan', 'omar@northwind.example', 'SUPPORT_AGENT');

-- Northwind IT — internal customer users (service provider as its own tenant)
INSERT INTO APP_USERS (COMPANY_ID, DEPARTMENT_ID, FULL_NAME, EMAIL, DEFAULT_ROLE)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Northwind IT'),
        (SELECT DEPARTMENT_ID FROM DEPARTMENTS WHERE DEPARTMENT_NAME='Internal Systems'
           AND COMPANY_ID=(SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Northwind IT')),
        'Nora Syed (Int)', 'nora-int@northwind.example', 'CLIENT_ADMIN');
INSERT INTO APP_USERS (COMPANY_ID, DEPARTMENT_ID, FULL_NAME, EMAIL, DEFAULT_ROLE)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Northwind IT'),
        (SELECT DEPARTMENT_ID FROM DEPARTMENTS WHERE DEPARTMENT_NAME='Internal Systems'
           AND COMPANY_ID=(SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Northwind IT')),
        'Nick Farrow', 'nick@northwind.example', 'CLIENT_USER');

-- Acme Corp
INSERT INTO APP_USERS (COMPANY_ID, DEPARTMENT_ID, FULL_NAME, EMAIL, DEFAULT_ROLE)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Acme Corp'),
        (SELECT DEPARTMENT_ID FROM DEPARTMENTS WHERE DEPARTMENT_NAME='Finance'
           AND COMPANY_ID=(SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Acme Corp')),
        'Anna Nguyen', 'anna@acme.example', 'CLIENT_USER');
INSERT INTO APP_USERS (COMPANY_ID, DEPARTMENT_ID, FULL_NAME, EMAIL, DEFAULT_ROLE)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Acme Corp'),
        (SELECT DEPARTMENT_ID FROM DEPARTMENTS WHERE DEPARTMENT_NAME='IT'
           AND COMPANY_ID=(SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Acme Corp')),
        'Bob Reyes', 'bob@acme.example', 'CLIENT_ADMIN');
INSERT INTO APP_USERS (COMPANY_ID, DEPARTMENT_ID, FULL_NAME, EMAIL, DEFAULT_ROLE)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Acme Corp'),
        (SELECT DEPARTMENT_ID FROM DEPARTMENTS WHERE DEPARTMENT_NAME='IT'
           AND COMPANY_ID=(SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Acme Corp')),
        'Fay Wong', 'fay@acme.example', 'CLIENT_USER');

-- Globex Ltd
INSERT INTO APP_USERS (COMPANY_ID, DEPARTMENT_ID, FULL_NAME, EMAIL, DEFAULT_ROLE)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Globex Ltd'),
        (SELECT DEPARTMENT_ID FROM DEPARTMENTS WHERE DEPARTMENT_NAME='Operations'
           AND COMPANY_ID=(SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Globex Ltd')),
        'Carla Vidal', 'carla@globex.example', 'CLIENT_ADMIN');
INSERT INTO APP_USERS (COMPANY_ID, DEPARTMENT_ID, FULL_NAME, EMAIL, DEFAULT_ROLE)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Globex Ltd'),
        (SELECT DEPARTMENT_ID FROM DEPARTMENTS WHERE DEPARTMENT_NAME='HR'
           AND COMPANY_ID=(SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Globex Ltd')),
        'Dan Yu', 'dan@globex.example', 'CLIENT_USER');
INSERT INTO APP_USERS (COMPANY_ID, DEPARTMENT_ID, FULL_NAME, EMAIL, DEFAULT_ROLE, STATUS)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Globex Ltd'),
        (SELECT DEPARTMENT_ID FROM DEPARTMENTS WHERE DEPARTMENT_NAME='Operations'
           AND COMPANY_ID=(SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Globex Ltd')),
        'Tom Grant', 'tom@globex.example', 'CLIENT_USER', 'INACTIVE');   -- FR-6 deactivation demo

-- Initech
INSERT INTO APP_USERS (COMPANY_ID, DEPARTMENT_ID, FULL_NAME, EMAIL, DEFAULT_ROLE)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Initech'),
        (SELECT DEPARTMENT_ID FROM DEPARTMENTS WHERE DEPARTMENT_NAME='Engineering'
           AND COMPANY_ID=(SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Initech')),
        'Eve Park', 'eve@initech.example', 'CLIENT_USER');
INSERT INTO APP_USERS (COMPANY_ID, DEPARTMENT_ID, FULL_NAME, EMAIL, DEFAULT_ROLE)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Initech'),
        (SELECT DEPARTMENT_ID FROM DEPARTMENTS WHERE DEPARTMENT_NAME='Engineering'
           AND COMPANY_ID=(SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Initech')),
        'Lily Chen', 'lily@initech.example', 'CLIENT_ADMIN');
INSERT INTO APP_USERS (COMPANY_ID, DEPARTMENT_ID, FULL_NAME, EMAIL, DEFAULT_ROLE)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Initech'),
        (SELECT DEPARTMENT_ID FROM DEPARTMENTS WHERE DEPARTMENT_NAME='Support'
           AND COMPANY_ID=(SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Initech')),
        'Zack Osman', 'zack@initech.example', 'CLIENT_USER');

----------------------------------------------------------------- USER_ROLES ---
-- Decision P: roles live here. Decision Q: every Northwind (provider) user is
-- auto-granted CLIENT_USER — every employee is a potential internal requester.
-- (The JOIN silently drops typo'd emails — the assert block below catches that.)
INSERT INTO USER_ROLES (USER_ID, ROLE)
SELECT u.USER_ID, m.ROLE
FROM (
  SELECT 'sara@northwind.example' EMAIL, 'SYSTEM_ADMIN'  ROLE FROM DUAL UNION ALL
  SELECT 'sara@northwind.example',       'CLIENT_USER'        FROM DUAL UNION ALL
  SELECT 'mike@northwind.example',       'SUPPORT_AGENT'      FROM DUAL UNION ALL
  SELECT 'mike@northwind.example',       'CLIENT_USER'        FROM DUAL UNION ALL
  SELECT 'lee@northwind.example',        'SUPPORT_AGENT'      FROM DUAL UNION ALL
  SELECT 'lee@northwind.example',        'CLIENT_USER'        FROM DUAL UNION ALL
  SELECT 'nora@northwind.example',       'SUPPORT_AGENT'      FROM DUAL UNION ALL
  SELECT 'nora@northwind.example',       'CLIENT_USER'        FROM DUAL UNION ALL
  SELECT 'raj@northwind.example',        'SUPPORT_AGENT'      FROM DUAL UNION ALL
  SELECT 'raj@northwind.example',        'CLIENT_USER'        FROM DUAL UNION ALL
  SELECT 'kim@northwind.example',        'SUPPORT_AGENT'      FROM DUAL UNION ALL
  SELECT 'kim@northwind.example',        'CLIENT_USER'        FROM DUAL UNION ALL
  SELECT 'omar@northwind.example',       'SUPPORT_AGENT'      FROM DUAL UNION ALL
  SELECT 'omar@northwind.example',       'CLIENT_USER'        FROM DUAL UNION ALL
  SELECT 'nora-int@northwind.example',   'CLIENT_ADMIN'       FROM DUAL UNION ALL
  SELECT 'nora-int@northwind.example',   'CLIENT_USER'        FROM DUAL UNION ALL
  SELECT 'nick@northwind.example',       'CLIENT_USER'        FROM DUAL UNION ALL
  SELECT 'anna@acme.example',            'CLIENT_USER'        FROM DUAL UNION ALL
  SELECT 'bob@acme.example',             'CLIENT_ADMIN'       FROM DUAL UNION ALL
  SELECT 'fay@acme.example',             'CLIENT_USER'        FROM DUAL UNION ALL
  SELECT 'carla@globex.example',         'CLIENT_ADMIN'       FROM DUAL UNION ALL
  SELECT 'dan@globex.example',           'CLIENT_USER'        FROM DUAL UNION ALL
  SELECT 'tom@globex.example',           'CLIENT_USER'        FROM DUAL UNION ALL
  SELECT 'eve@initech.example',          'CLIENT_USER'        FROM DUAL UNION ALL
  SELECT 'lily@initech.example',         'CLIENT_ADMIN'       FROM DUAL UNION ALL
  SELECT 'zack@initech.example',         'CLIENT_USER'        FROM DUAL
) m
JOIN APP_USERS u ON u.EMAIL = m.EMAIL;

--------------------------------------------------------------- SLA_POLICIES ---
-- Decision S: named policy tiers; projects are ASSIGNED a policy.
-- 'Standard' is the IS_DEFAULT fallback for projects with no assignment.
INSERT INTO SLA_POLICIES (POLICY_NAME, IS_DEFAULT, DESCRIPTION, EFFECTIVE_FROM, APPROVED_BY, NOTES)
VALUES ('Gold', 'N', 'Premium contract tier — tightest resolution for business-critical systems',
        DATE '2026-03-01',
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='sara@northwind.example'),
        'Acme ERP contract addendum #2');
INSERT INTO SLA_POLICIES (POLICY_NAME, IS_DEFAULT, DESCRIPTION, EFFECTIVE_FROM, APPROVED_BY, NOTES)
VALUES ('Standard', 'Y', 'Default service tier — applies when a project has no policy assigned',
        DATE '2026-01-01',
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='sara@northwind.example'),
        NULL);
INSERT INTO SLA_POLICIES (POLICY_NAME, IS_DEFAULT, DESCRIPTION, EFFECTIVE_FROM, APPROVED_BY, NOTES)
VALUES ('Bronze', 'N', 'Relaxed tier for lower-urgency engagements',
        DATE '2026-03-15',
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='sara@northwind.example'),
        'Globex master services agreement');
INSERT INTO SLA_POLICIES (POLICY_NAME, IS_DEFAULT, DESCRIPTION, EFFECTIVE_FROM, APPROVED_BY, NOTES)
VALUES ('Internal', 'N', 'Northwind internal systems — early escalation, no contractual penalty',
        DATE '2026-01-01',
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='sara@northwind.example'),
        'Internal OLA, not a customer SLA');

---------------------------------------------------------------- SLA_TARGETS ---
-- FR-23 + FR-35: per-severity targets PER POLICY (values verbatim from mockups).
INSERT INTO SLA_TARGETS (SLA_POLICY_ID, SEVERITY, RESPONSE_HOURS, RESOLUTION_DAYS, ESCALATION_PCT)
SELECT p.SLA_POLICY_ID, m.SEV, m.RH, m.RD, m.EP
FROM (
  SELECT 'Gold' PN, 'Critical' SEV, 1 RH, 1 RD, 75 EP FROM DUAL UNION ALL
  SELECT 'Gold',     'Major',    4,  2,  75 FROM DUAL UNION ALL
  SELECT 'Gold',     'Minor',    8,  5,  80 FROM DUAL UNION ALL
  SELECT 'Gold',     'Low',      24, 14, 80 FROM DUAL UNION ALL
  SELECT 'Standard', 'Critical', 1,  1,  80 FROM DUAL UNION ALL
  SELECT 'Standard', 'Major',    4,  3,  80 FROM DUAL UNION ALL
  SELECT 'Standard', 'Minor',    8,  7,  80 FROM DUAL UNION ALL
  SELECT 'Standard', 'Low',      24, 14, 80 FROM DUAL UNION ALL
  SELECT 'Bronze',   'Critical', 2,  1,  75 FROM DUAL UNION ALL
  SELECT 'Bronze',   'Major',    8,  5,  75 FROM DUAL UNION ALL
  SELECT 'Bronze',   'Minor',    16, 10, 75 FROM DUAL UNION ALL
  SELECT 'Bronze',   'Low',      48, 21, 75 FROM DUAL UNION ALL
  SELECT 'Internal', 'Critical', 1,  1,  90 FROM DUAL UNION ALL
  SELECT 'Internal', 'Major',    4,  3,  90 FROM DUAL UNION ALL
  SELECT 'Internal', 'Minor',    8,  7,  90 FROM DUAL UNION ALL
  SELECT 'Internal', 'Low',      24, 14, 90 FROM DUAL
) m
JOIN SLA_POLICIES p ON p.POLICY_NAME = m.PN;

------------------------------------------------------------------- PROJECTS ---
-- Decision O: service engagements per company. PROJECT_KEY globally unique.
-- NW-HR: RESTRICTED (decision Q) + no policy (NULL -> default 'Standard' applies).
INSERT INTO PROJECTS (COMPANY_ID, PROJECT_NAME, PROJECT_KEY, SLA_POLICY_ID, DESCRIPTION, VISIBILITY)
SELECT c.COMPANY_ID, m.PNAME, m.PKEY,
       (SELECT SLA_POLICY_ID FROM SLA_POLICIES WHERE POLICY_NAME = m.POL),
       m.DESCR, m.VIS
FROM (
  SELECT 'Acme Corp'    CNAME, 'IT Support'      PNAME, 'ACME-IT'  PKEY, 'Standard' POL, 'General IT support for Acme Corp'                       DESCR, 'OPEN'       VIS FROM DUAL UNION ALL
  SELECT 'Acme Corp',          'ERP Systems',           'ACME-ERP',      'Gold',         'ERP platform maintenance and support',                         'OPEN'           FROM DUAL UNION ALL
  SELECT 'Globex Ltd',         'IT Support',            'GLBX-IT',       'Bronze',       'General IT support for Globex Ltd',                            'OPEN'           FROM DUAL UNION ALL
  SELECT 'Globex Ltd',         'CRM Platform',          'GLBX-CRM',      'Bronze',       'CRM integration and support',                                  'OPEN'           FROM DUAL UNION ALL
  SELECT 'Initech',            'IT Support',            'INIT-IT',       'Standard',     'General IT support for Initech',                               'OPEN'           FROM DUAL UNION ALL
  SELECT 'Northwind IT',       'Internal Apps',         'NW-APPS',       'Internal',     'Internal application support for Northwind IT',                'OPEN'           FROM DUAL UNION ALL
  SELECT 'Northwind IT',       'Infrastructure',        'NW-INFRA',      'Internal',     'Network and server infrastructure',                            'OPEN'           FROM DUAL UNION ALL
  SELECT 'Northwind IT',       'HR System Pilot',       'NW-HR',         NULL,           'New HR platform — pilot phase, invited testers only',          'RESTRICTED'     FROM DUAL
) m
JOIN COMPANIES c ON c.COMPANY_NAME = m.CNAME;

----------------------------------------------------------------- CATEGORIES ---
-- Hybrid model (brief §5): 5 global + 2 scoped. DESCRIPTION = LOV guidance text.
INSERT INTO CATEGORIES (CATEGORY_NAME, DESCRIPTION) VALUES ('Network',          'Network connectivity, DNS, VPN, firewall issues');
INSERT INTO CATEGORIES (CATEGORY_NAME, DESCRIPTION) VALUES ('Hardware',         'Physical device faults — laptops, printers, peripherals');
INSERT INTO CATEGORIES (CATEGORY_NAME, DESCRIPTION) VALUES ('Software',         'Application errors, crashes, bugs, license issues');
INSERT INTO CATEGORIES (CATEGORY_NAME, DESCRIPTION) VALUES ('Access / Account', 'Password resets, permission changes, account provisioning');
INSERT INTO CATEGORIES (CATEGORY_NAME, DESCRIPTION) VALUES ('Request',          'General service requests not covered by other categories');
INSERT INTO CATEGORIES (CATEGORY_NAME, COMPANY_ID, PROJECT_ID, DESCRIPTION)
VALUES ('ERP / Finance',
        (SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Acme Corp'),
        (SELECT PROJECT_ID FROM PROJECTS  WHERE PROJECT_KEY='ACME-ERP'),
        'Acme-specific ERP and financial system issues');
INSERT INTO CATEGORIES (CATEGORY_NAME, COMPANY_ID, PROJECT_ID, DESCRIPTION)
VALUES ('CRM Integration',
        (SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Globex Ltd'),
        (SELECT PROJECT_ID FROM PROJECTS  WHERE PROJECT_KEY='GLBX-CRM'),
        'Globex CRM platform and integration issues');

------------------------------------------------------------- AGENT_PROJECTS --
-- Decisions I + M revised: which projects each agent covers, at what tier.
-- Per-project tier demo: Raj is L3 on INIT-IT but L2 on GLBX-IT/GLBX-CRM.
-- NOTE: GLBX-CRM deliberately has NO L1 agent — demos the red "no L1" gate badge.
INSERT INTO AGENT_PROJECTS (USER_ID, PROJECT_ID, TIER)
SELECT u.USER_ID, p.PROJECT_ID, m.TIER
FROM (
  SELECT 'mike@northwind.example' EMAIL, 'ACME-IT'  PKEY, 'L2' TIER FROM DUAL UNION ALL
  SELECT 'mike@northwind.example',       'GLBX-IT',       'L2'      FROM DUAL UNION ALL
  SELECT 'mike@northwind.example',       'NW-APPS',       'L2'      FROM DUAL UNION ALL
  SELECT 'mike@northwind.example',       'NW-INFRA',      'L2'      FROM DUAL UNION ALL
  SELECT 'lee@northwind.example',        'ACME-IT',       'L2'      FROM DUAL UNION ALL
  SELECT 'lee@northwind.example',        'ACME-ERP',      'L2'      FROM DUAL UNION ALL
  SELECT 'lee@northwind.example',        'INIT-IT',       'L2'      FROM DUAL UNION ALL
  SELECT 'lee@northwind.example',        'NW-APPS',       'L2'      FROM DUAL UNION ALL
  SELECT 'lee@northwind.example',        'NW-INFRA',      'L2'      FROM DUAL UNION ALL
  SELECT 'nora@northwind.example',       'ACME-IT',       'L1'      FROM DUAL UNION ALL
  SELECT 'nora@northwind.example',       'ACME-ERP',      'L1'      FROM DUAL UNION ALL
  SELECT 'nora@northwind.example',       'GLBX-IT',       'L1'      FROM DUAL UNION ALL
  SELECT 'nora@northwind.example',       'INIT-IT',       'L1'      FROM DUAL UNION ALL
  SELECT 'nora@northwind.example',       'NW-APPS',       'L1'      FROM DUAL UNION ALL
  SELECT 'nora@northwind.example',       'NW-INFRA',      'L1'      FROM DUAL UNION ALL
  SELECT 'nora@northwind.example',       'NW-HR',         'L1'      FROM DUAL UNION ALL
  SELECT 'raj@northwind.example',        'GLBX-IT',       'L2'      FROM DUAL UNION ALL
  SELECT 'raj@northwind.example',        'GLBX-CRM',      'L2'      FROM DUAL UNION ALL
  SELECT 'raj@northwind.example',        'INIT-IT',       'L3'      FROM DUAL UNION ALL
  SELECT 'kim@northwind.example',        'ACME-IT',       'L3'      FROM DUAL UNION ALL
  SELECT 'kim@northwind.example',        'GLBX-IT',       'L3'      FROM DUAL UNION ALL
  SELECT 'kim@northwind.example',        'INIT-IT',       'L3'      FROM DUAL UNION ALL
  SELECT 'omar@northwind.example',       'ACME-IT',       'L4'      FROM DUAL UNION ALL
  SELECT 'omar@northwind.example',       'ACME-ERP',      'L4'      FROM DUAL UNION ALL
  SELECT 'omar@northwind.example',       'GLBX-IT',       'L4'      FROM DUAL UNION ALL
  SELECT 'omar@northwind.example',       'GLBX-CRM',      'L4'      FROM DUAL UNION ALL
  SELECT 'omar@northwind.example',       'INIT-IT',       'L4'      FROM DUAL
) m
JOIN APP_USERS u ON u.EMAIL = m.EMAIL
JOIN PROJECTS  p ON p.PROJECT_KEY = m.PKEY;

-------------------------------------------------------------- USER_PROJECTS --
-- Decision Q: invitation list into RESTRICTED projects. Nick is the invited
-- tester on the HR System Pilot; nobody else (agents in client mode can't see it).
INSERT INTO USER_PROJECTS (USER_ID, PROJECT_ID)
VALUES ((SELECT USER_ID FROM APP_USERS WHERE EMAIL='nick@northwind.example'),
        (SELECT PROJECT_ID FROM PROJECTS WHERE PROJECT_KEY='NW-HR'));

-------------------------------------------------------------------- TICKETS ---
-- Mirrors the mockup tickets (refs TKT-00019 … TKT-00053; live tickets start at
-- 54 via TICKET_REF_SEQ). Timestamps are SYSTIMESTAMP-relative for fresh aging.
-- SLA_DUE_DATE = CREATED_AT + resolution_days (project policy x severity).
-- Subjects are unique so comments/history below can resolve tickets by SUBJECT.

-- TKT-00051 — Acme/ERP (Gold): untriaged Critical, feeds the triage-gate demo (FR-37)
INSERT INTO TICKETS (TICKET_REF, COMPANY_ID, PROJECT_ID, DEPARTMENT_ID, TICKET_TYPE, SUBJECT,
                     DESCRIPTION, CATEGORY_ID, SEVERITY, STATUS, CREATED_BY,
                     CREATED_AT, UPDATED_AT, SLA_DUE_DATE)
VALUES ('TKT-00051',
        (SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Acme Corp'),
        (SELECT PROJECT_ID FROM PROJECTS  WHERE PROJECT_KEY='ACME-ERP'),
        (SELECT DEPARTMENT_ID FROM DEPARTMENTS WHERE DEPARTMENT_NAME='Finance'
           AND COMPANY_ID=(SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Acme Corp')),
        'INCIDENT',
        'Production DB connection pool exhausted',
        'The ERP is throwing connection errors during peak hours. Finance cannot post invoices.',
        (SELECT CATEGORY_ID FROM CATEGORIES WHERE CATEGORY_NAME='Software'),
        'Critical', 'New',
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='anna@acme.example'),
        SYSTIMESTAMP - INTERVAL '2' HOUR, SYSTIMESTAMP - INTERVAL '2' HOUR,
        SYSTIMESTAMP - INTERVAL '2' HOUR + INTERVAL '1' DAY);

-- TKT-00050 — Globex/IT (Bronze): assigned, not yet responded
INSERT INTO TICKETS (TICKET_REF, COMPANY_ID, PROJECT_ID, DEPARTMENT_ID, TICKET_TYPE, SUBJECT,
                     DESCRIPTION, CATEGORY_ID, SEVERITY, PRIORITY, STATUS, CREATED_BY, ASSIGNED_TO,
                     CREATED_AT, UPDATED_AT, SLA_DUE_DATE)
VALUES ('TKT-00050',
        (SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Globex Ltd'),
        (SELECT PROJECT_ID FROM PROJECTS  WHERE PROJECT_KEY='GLBX-IT'),
        (SELECT DEPARTMENT_ID FROM DEPARTMENTS WHERE DEPARTMENT_NAME='HR'
           AND COMPANY_ID=(SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Globex Ltd')),
        'INCIDENT',
        'SSO login fails for new staff',
        'Three new Globex employees cannot sign in via SSO. Existing users are fine.',
        (SELECT CATEGORY_ID FROM CATEGORIES WHERE CATEGORY_NAME='Access / Account'),
        'Major', 'P2', 'Assigned',
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='dan@globex.example'),
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='mike@northwind.example'),
        SYSTIMESTAMP - INTERVAL '3' HOUR, SYSTIMESTAMP - INTERVAL '2' HOUR,
        SYSTIMESTAMP - INTERVAL '3' HOUR + INTERVAL '5' DAY);

-- TKT-00048 — Initech/IT (Standard): in progress with first response
INSERT INTO TICKETS (TICKET_REF, COMPANY_ID, PROJECT_ID, DEPARTMENT_ID, TICKET_TYPE, SUBJECT,
                     DESCRIPTION, CATEGORY_ID, SEVERITY, PRIORITY, STATUS, CREATED_BY, ASSIGNED_TO,
                     CREATED_AT, UPDATED_AT, FIRST_RESPONSE_AT, SLA_DUE_DATE)
VALUES ('TKT-00048',
        (SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Initech'),
        (SELECT PROJECT_ID FROM PROJECTS  WHERE PROJECT_KEY='INIT-IT'),
        (SELECT DEPARTMENT_ID FROM DEPARTMENTS WHERE DEPARTMENT_NAME='Engineering'
           AND COMPANY_ID=(SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Initech')),
        'INCIDENT',
        'Invoice PDF shows wrong currency',
        'Exported invoices show USD instead of MYR for Initech accounts.',
        (SELECT CATEGORY_ID FROM CATEGORIES WHERE CATEGORY_NAME='Software'),
        'Major', 'P2', 'In Progress',
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='eve@initech.example'),
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='lee@northwind.example'),
        SYSTIMESTAMP - INTERVAL '18' HOUR, SYSTIMESTAMP - INTERVAL '2' HOUR,
        SYSTIMESTAMP - INTERVAL '2' HOUR,
        SYSTIMESTAMP - INTERVAL '18' HOUR + INTERVAL '3' DAY);

-- TKT-00042 — Acme/IT Support (Standard): the fully-worked demo ticket (comments, history, attachments)
INSERT INTO TICKETS (TICKET_REF, COMPANY_ID, PROJECT_ID, DEPARTMENT_ID, TICKET_TYPE, SUBJECT,
                     DESCRIPTION, CATEGORY_ID, SEVERITY, PRIORITY, STATUS, CREATED_BY, ASSIGNED_TO,
                     CREATED_AT, UPDATED_AT, FIRST_RESPONSE_AT, SLA_DUE_DATE)
VALUES ('TKT-00042',
        (SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Acme Corp'),
        (SELECT PROJECT_ID FROM PROJECTS  WHERE PROJECT_KEY='ACME-IT'),
        (SELECT DEPARTMENT_ID FROM DEPARTMENTS WHERE DEPARTMENT_NAME='Finance'
           AND COMPANY_ID=(SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Acme Corp')),
        'INCIDENT',
        'VPN disconnects every few minutes',
        'Finance team on the Acme network reports the VPN dropping every 3-5 minutes since this morning.',
        (SELECT CATEGORY_ID FROM CATEGORIES WHERE CATEGORY_NAME='Network'),
        'Major', 'P3', 'In Progress',
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='anna@acme.example'),
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='mike@northwind.example'),
        SYSTIMESTAMP - INTERVAL '8' HOUR, SYSTIMESTAMP - INTERVAL '7' HOUR,
        SYSTIMESTAMP - INTERVAL '7' HOUR,
        SYSTIMESTAMP - INTERVAL '8' HOUR + INTERVAL '3' DAY);

-- TKT-00041 — Acme/IT Support (Standard): untriaged service request
INSERT INTO TICKETS (TICKET_REF, COMPANY_ID, PROJECT_ID, DEPARTMENT_ID, TICKET_TYPE, SUBJECT,
                     DESCRIPTION, CATEGORY_ID, SEVERITY, STATUS, CREATED_BY,
                     CREATED_AT, UPDATED_AT, SLA_DUE_DATE)
VALUES ('TKT-00041',
        (SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Acme Corp'),
        (SELECT PROJECT_ID FROM PROJECTS  WHERE PROJECT_KEY='ACME-IT'),
        (SELECT DEPARTMENT_ID FROM DEPARTMENTS WHERE DEPARTMENT_NAME='IT'
           AND COMPANY_ID=(SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Acme Corp')),
        'SERVICE_REQUEST',
        'Request: provision 5 new mailboxes',
        'Need 5 new email mailboxes for incoming Acme interns.',
        (SELECT CATEGORY_ID FROM CATEGORIES WHERE CATEGORY_NAME='Request'),
        'Minor', 'New',
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='bob@acme.example'),
        SYSTIMESTAMP - INTERVAL '11' HOUR, SYSTIMESTAMP - INTERVAL '11' HOUR,
        SYSTIMESTAMP - INTERVAL '11' HOUR + INTERVAL '7' DAY);

-- TKT-00039 — Acme/ERP (Gold): resolved, awaiting client confirmation (Reopen demo target)
INSERT INTO TICKETS (TICKET_REF, COMPANY_ID, PROJECT_ID, DEPARTMENT_ID, TICKET_TYPE, SUBJECT,
                     DESCRIPTION, CATEGORY_ID, SEVERITY, PRIORITY, STATUS, CREATED_BY, ASSIGNED_TO,
                     CREATED_AT, UPDATED_AT, FIRST_RESPONSE_AT, RESOLVED_AT, SLA_DUE_DATE,
                     RESOLUTION_CODE, RESOLUTION_SUMMARY)
VALUES ('TKT-00039',
        (SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Acme Corp'),
        (SELECT PROJECT_ID FROM PROJECTS  WHERE PROJECT_KEY='ACME-ERP'),
        (SELECT DEPARTMENT_ID FROM DEPARTMENTS WHERE DEPARTMENT_NAME='Finance'
           AND COMPANY_ID=(SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Acme Corp')),
        'INCIDENT',
        'Cannot export monthly report to PDF',
        'The export button spins forever and never produces a PDF.',
        (SELECT CATEGORY_ID FROM CATEGORIES WHERE CATEGORY_NAME='Software'),
        'Minor', 'P3', 'Resolved',
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='anna@acme.example'),
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='lee@northwind.example'),
        SYSTIMESTAMP - INTERVAL '2' DAY, SYSTIMESTAMP - INTERVAL '1' DAY,
        SYSTIMESTAMP - INTERVAL '1' DAY,
        SYSTIMESTAMP - INTERVAL '1' DAY,
        SYSTIMESTAMP - INTERVAL '2' DAY + INTERVAL '5' DAY,
        'FIXED', 'Fixed the PDF export timeout by increasing the server-side report generation limit.');

-- TKT-00038 — Globex/IT (Bronze): On Hold demo (decision B)
INSERT INTO TICKETS (TICKET_REF, COMPANY_ID, PROJECT_ID, DEPARTMENT_ID, TICKET_TYPE, SUBJECT,
                     DESCRIPTION, CATEGORY_ID, SEVERITY, PRIORITY, STATUS, CREATED_BY, ASSIGNED_TO,
                     CREATED_AT, UPDATED_AT, FIRST_RESPONSE_AT, SLA_DUE_DATE)
VALUES ('TKT-00038',
        (SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Globex Ltd'),
        (SELECT PROJECT_ID FROM PROJECTS  WHERE PROJECT_KEY='GLBX-IT'),
        (SELECT DEPARTMENT_ID FROM DEPARTMENTS WHERE DEPARTMENT_NAME='HR'
           AND COMPANY_ID=(SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Globex Ltd')),
        'INCIDENT',
        'Printer on 3rd floor offline',
        'Shared printer GLOBEX-P3 is not reachable.',
        (SELECT CATEGORY_ID FROM CATEGORIES WHERE CATEGORY_NAME='Hardware'),
        'Low', 'P4', 'On Hold',
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='dan@globex.example'),
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='mike@northwind.example'),
        SYSTIMESTAMP - INTERVAL '3' DAY, SYSTIMESTAMP - INTERVAL '1' DAY,
        SYSTIMESTAMP - INTERVAL '1' DAY,
        SYSTIMESTAMP - INTERVAL '3' DAY + INTERVAL '21' DAY);

-- TKT-00035 — Acme/IT Support (Standard): closed with CSAT 4
INSERT INTO TICKETS (TICKET_REF, COMPANY_ID, PROJECT_ID, DEPARTMENT_ID, TICKET_TYPE, SUBJECT,
                     DESCRIPTION, CATEGORY_ID, SEVERITY, PRIORITY, STATUS, CREATED_BY, ASSIGNED_TO,
                     CREATED_AT, UPDATED_AT, FIRST_RESPONSE_AT, RESOLVED_AT, CLOSED_AT,
                     SLA_DUE_DATE, RESOLUTION_CODE, RESOLUTION_SUMMARY, CSAT_SCORE)
VALUES ('TKT-00035',
        (SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Acme Corp'),
        (SELECT PROJECT_ID FROM PROJECTS  WHERE PROJECT_KEY='ACME-IT'),
        (SELECT DEPARTMENT_ID FROM DEPARTMENTS WHERE DEPARTMENT_NAME='IT'
           AND COMPANY_ID=(SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Acme Corp')),
        'SERVICE_REQUEST',
        'New laptop setup for finance hire',
        'Provision and image a laptop for a new Acme finance staff member.',
        (SELECT CATEGORY_ID FROM CATEGORIES WHERE CATEGORY_NAME='Hardware'),
        'Minor', 'P3', 'Closed',
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='bob@acme.example'),
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='mike@northwind.example'),
        SYSTIMESTAMP - INTERVAL '6' DAY, SYSTIMESTAMP - INTERVAL '4' DAY,
        SYSTIMESTAMP - INTERVAL '5' DAY,
        SYSTIMESTAMP - INTERVAL '5' DAY + INTERVAL '6' HOUR,
        SYSTIMESTAMP - INTERVAL '4' DAY,
        SYSTIMESTAMP - INTERVAL '6' DAY + INTERVAL '7' DAY,
        'FIXED', 'Laptop provisioned, imaged with standard SOE, and delivered to the new hire.',
        4);

-- TKT-00031 — Acme/IT Support (Standard): closed with CSAT 5
INSERT INTO TICKETS (TICKET_REF, COMPANY_ID, PROJECT_ID, DEPARTMENT_ID, TICKET_TYPE, SUBJECT,
                     DESCRIPTION, CATEGORY_ID, SEVERITY, PRIORITY, STATUS, CREATED_BY, ASSIGNED_TO,
                     CREATED_AT, UPDATED_AT, FIRST_RESPONSE_AT, RESOLVED_AT, CLOSED_AT,
                     SLA_DUE_DATE, RESOLUTION_CODE, RESOLUTION_SUMMARY, CSAT_SCORE)
VALUES ('TKT-00031',
        (SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Acme Corp'),
        (SELECT PROJECT_ID FROM PROJECTS  WHERE PROJECT_KEY='ACME-IT'),
        (SELECT DEPARTMENT_ID FROM DEPARTMENTS WHERE DEPARTMENT_NAME='Finance'
           AND COMPANY_ID=(SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Acme Corp')),
        'SERVICE_REQUEST',
        'Add new user license',
        'Please add one more licensed seat for the analytics tool.',
        (SELECT CATEGORY_ID FROM CATEGORIES WHERE CATEGORY_NAME='Request'),
        'Low', 'P4', 'Closed',
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='anna@acme.example'),
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='mike@northwind.example'),
        SYSTIMESTAMP - INTERVAL '10' DAY, SYSTIMESTAMP - INTERVAL '8' DAY,
        SYSTIMESTAMP - INTERVAL '9' DAY,
        SYSTIMESTAMP - INTERVAL '9' DAY + INTERVAL '5' HOUR,
        SYSTIMESTAMP - INTERVAL '8' DAY,
        SYSTIMESTAMP - INTERVAL '10' DAY + INTERVAL '14' DAY,
        'FIXED', 'License seat added to the analytics tool subscription.',
        5);

-- TKT-00028 — Initech/IT (Standard): SLA BREACHED (due -1d) — feeds the SLA-compliance KPI (FR-32/FR-35)
INSERT INTO TICKETS (TICKET_REF, COMPANY_ID, PROJECT_ID, DEPARTMENT_ID, TICKET_TYPE, SUBJECT,
                     DESCRIPTION, CATEGORY_ID, SEVERITY, PRIORITY, STATUS, CREATED_BY, ASSIGNED_TO,
                     CREATED_AT, UPDATED_AT, FIRST_RESPONSE_AT, SLA_DUE_DATE)
VALUES ('TKT-00028',
        (SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Initech'),
        (SELECT PROJECT_ID FROM PROJECTS  WHERE PROJECT_KEY='INIT-IT'),
        (SELECT DEPARTMENT_ID FROM DEPARTMENTS WHERE DEPARTMENT_NAME='Engineering'
           AND COMPANY_ID=(SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Initech')),
        'INCIDENT',
        'Email going to spam',
        'Outbound email from Initech domain is landing in client spam folders.',
        (SELECT CATEGORY_ID FROM CATEGORIES WHERE CATEGORY_NAME='Network'),
        'Major', 'P2', 'In Progress',
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='eve@initech.example'),
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='lee@northwind.example'),
        SYSTIMESTAMP - INTERVAL '4' DAY, SYSTIMESTAMP - INTERVAL '6' HOUR,
        SYSTIMESTAMP - INTERVAL '3' DAY,
        SYSTIMESTAMP - INTERVAL '4' DAY + INTERVAL '3' DAY);

-- TKT-00024 — Globex/IT (Bronze): resolved
INSERT INTO TICKETS (TICKET_REF, COMPANY_ID, PROJECT_ID, DEPARTMENT_ID, TICKET_TYPE, SUBJECT,
                     DESCRIPTION, CATEGORY_ID, SEVERITY, PRIORITY, STATUS, CREATED_BY, ASSIGNED_TO,
                     CREATED_AT, UPDATED_AT, FIRST_RESPONSE_AT, RESOLVED_AT, SLA_DUE_DATE,
                     RESOLUTION_CODE, RESOLUTION_SUMMARY)
VALUES ('TKT-00024',
        (SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Globex Ltd'),
        (SELECT PROJECT_ID FROM PROJECTS  WHERE PROJECT_KEY='GLBX-IT'),
        (SELECT DEPARTMENT_ID FROM DEPARTMENTS WHERE DEPARTMENT_NAME='Operations'
           AND COMPANY_ID=(SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Globex Ltd')),
        'INCIDENT',
        'Password reset not arriving',
        'Reset emails are delayed by 20+ minutes.',
        (SELECT CATEGORY_ID FROM CATEGORIES WHERE CATEGORY_NAME='Access / Account'),
        'Minor', 'P3', 'Resolved',
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='carla@globex.example'),
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='mike@northwind.example'),
        SYSTIMESTAMP - INTERVAL '5' DAY, SYSTIMESTAMP - INTERVAL '2' DAY,
        SYSTIMESTAMP - INTERVAL '4' DAY,
        SYSTIMESTAMP - INTERVAL '2' DAY,
        SYSTIMESTAMP - INTERVAL '5' DAY + INTERVAL '10' DAY,
        'FIXED', 'Investigated mail relay configuration — password reset emails were queuing behind bulk marketing sends. Adjusted priority routing rules.');

-- TKT-00019 — Acme/IT Support (Standard): Critical at SLA breach edge (due ~now)
INSERT INTO TICKETS (TICKET_REF, COMPANY_ID, PROJECT_ID, DEPARTMENT_ID, TICKET_TYPE, SUBJECT,
                     DESCRIPTION, CATEGORY_ID, SEVERITY, PRIORITY, STATUS, CREATED_BY, ASSIGNED_TO,
                     CREATED_AT, UPDATED_AT, FIRST_RESPONSE_AT, SLA_DUE_DATE)
VALUES ('TKT-00019',
        (SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Acme Corp'),
        (SELECT PROJECT_ID FROM PROJECTS  WHERE PROJECT_KEY='ACME-IT'),
        (SELECT DEPARTMENT_ID FROM DEPARTMENTS WHERE DEPARTMENT_NAME='IT'
           AND COMPANY_ID=(SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Acme Corp')),
        'INCIDENT',
        'Shared drive missing files',
        'A folder on the X: drive appears empty after the weekend.',
        (SELECT CATEGORY_ID FROM CATEGORIES WHERE CATEGORY_NAME='Software'),
        'Critical', 'P1', 'Assigned',
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='bob@acme.example'),
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='lee@northwind.example'),
        SYSTIMESTAMP - INTERVAL '1' DAY, SYSTIMESTAMP - INTERVAL '23' HOUR,
        SYSTIMESTAMP - INTERVAL '23' HOUR,
        SYSTIMESTAMP - INTERVAL '1' DAY + INTERVAL '1' DAY);

-- TKT-00052 — Northwind/Internal Apps (Internal): internal tenant demo, raised by Nick
INSERT INTO TICKETS (TICKET_REF, COMPANY_ID, PROJECT_ID, DEPARTMENT_ID, TICKET_TYPE, SUBJECT,
                     DESCRIPTION, CATEGORY_ID, SEVERITY, STATUS, CREATED_BY,
                     CREATED_AT, UPDATED_AT, SLA_DUE_DATE)
VALUES ('TKT-00052',
        (SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Northwind IT'),
        (SELECT PROJECT_ID FROM PROJECTS  WHERE PROJECT_KEY='NW-APPS'),
        (SELECT DEPARTMENT_ID FROM DEPARTMENTS WHERE DEPARTMENT_NAME='Internal Systems'
           AND COMPANY_ID=(SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Northwind IT')),
        'INCIDENT',
        'Internal wiki search broken',
        'The Northwind internal wiki search returns no results for any query since yesterday.',
        (SELECT CATEGORY_ID FROM CATEGORIES WHERE CATEGORY_NAME='Software'),
        'Major', 'New',
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='nick@northwind.example'),
        SYSTIMESTAMP - INTERVAL '1' DAY, SYSTIMESTAMP - INTERVAL '1' DAY,
        SYSTIMESTAMP - INTERVAL '1' DAY + INTERVAL '3' DAY);

-- TKT-00053 — Northwind/Internal Apps (Internal): internal SR in progress
INSERT INTO TICKETS (TICKET_REF, COMPANY_ID, PROJECT_ID, DEPARTMENT_ID, TICKET_TYPE, SUBJECT,
                     DESCRIPTION, CATEGORY_ID, SEVERITY, PRIORITY, STATUS, CREATED_BY, ASSIGNED_TO,
                     CREATED_AT, UPDATED_AT, FIRST_RESPONSE_AT, SLA_DUE_DATE)
VALUES ('TKT-00053',
        (SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Northwind IT'),
        (SELECT PROJECT_ID FROM PROJECTS  WHERE PROJECT_KEY='NW-APPS'),
        (SELECT DEPARTMENT_ID FROM DEPARTMENTS WHERE DEPARTMENT_NAME='Internal Systems'
           AND COMPANY_ID=(SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Northwind IT')),
        'SERVICE_REQUEST',
        'Request: new dev environment for QA team',
        'Need a new staging environment provisioned for the QA team internal project.',
        (SELECT CATEGORY_ID FROM CATEGORIES WHERE CATEGORY_NAME='Request'),
        'Minor', 'P3', 'In Progress',
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='nora-int@northwind.example'),
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='mike@northwind.example'),
        SYSTIMESTAMP - INTERVAL '2' DAY, SYSTIMESTAMP - INTERVAL '1' DAY,
        SYSTIMESTAMP - INTERVAL '2' DAY + INTERVAL '2' HOUR,
        SYSTIMESTAMP - INTERVAL '2' DAY + INTERVAL '7' DAY);

------------------------------------------------------------- TICKET_COMMENTS --
INSERT INTO TICKET_COMMENTS (TICKET_ID, USER_ID, COMMENT_TEXT, IS_INTERNAL, CREATED_AT)
VALUES ((SELECT TICKET_ID FROM TICKETS WHERE SUBJECT='VPN disconnects every few minutes'),
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='anna@acme.example'),
        'It started this morning. Finance team can''t reach the ERP.', 'N',
        SYSTIMESTAMP - INTERVAL '8' HOUR);
INSERT INTO TICKET_COMMENTS (TICKET_ID, USER_ID, COMMENT_TEXT, IS_INTERNAL, CREATED_AT)
VALUES ((SELECT TICKET_ID FROM TICKETS WHERE SUBJECT='VPN disconnects every few minutes'),
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='mike@northwind.example'),
        'Looking into it — checking the VPN concentrator logs now.', 'N',
        SYSTIMESTAMP - INTERVAL '7' HOUR);
INSERT INTO TICKET_COMMENTS (TICKET_ID, USER_ID, COMMENT_TEXT, IS_INTERNAL, CREATED_AT)
VALUES ((SELECT TICKET_ID FROM TICKETS WHERE SUBJECT='VPN disconnects every few minutes'),
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='mike@northwind.example'),
        'Concentrator showing MTU mismatch after last firmware push.', 'Y',
        SYSTIMESTAMP - INTERVAL '7' HOUR + INTERVAL '2' MINUTE);
INSERT INTO TICKET_COMMENTS (TICKET_ID, USER_ID, COMMENT_TEXT, IS_INTERNAL, CREATED_AT)
VALUES ((SELECT TICKET_ID FROM TICKETS WHERE SUBJECT='Invoice PDF shows wrong currency'),
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='lee@northwind.example'),
        'Reproduced — currency code is hardcoded in the report template.', 'Y',
        SYSTIMESTAMP - INTERVAL '2' HOUR);
INSERT INTO TICKET_COMMENTS (TICKET_ID, USER_ID, COMMENT_TEXT, IS_INTERNAL, CREATED_AT)
VALUES ((SELECT TICKET_ID FROM TICKETS WHERE SUBJECT='Cannot export monthly report to PDF'),
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='lee@northwind.example'),
        'Fixed the export timeout. Please confirm it works for you now.', 'N',
        SYSTIMESTAMP - INTERVAL '1' DAY);

-------------------------------------------------------------- TICKET_HISTORY --
-- Full trail for the demo ticket (TKT-00042), plus assignment/resolution trails.
INSERT INTO TICKET_HISTORY (TICKET_ID, USER_ID, ACTION, OLD_VALUE, NEW_VALUE, CREATED_AT)
VALUES ((SELECT TICKET_ID FROM TICKETS WHERE SUBJECT='VPN disconnects every few minutes'),
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='anna@acme.example'),
        'STATUS_CHANGE', NULL, 'New', SYSTIMESTAMP - INTERVAL '8' HOUR);
INSERT INTO TICKET_HISTORY (TICKET_ID, USER_ID, ACTION, OLD_VALUE, NEW_VALUE, CREATED_AT)
VALUES ((SELECT TICKET_ID FROM TICKETS WHERE SUBJECT='VPN disconnects every few minutes'),
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='sara@northwind.example'),
        'ASSIGN', NULL, 'Mike Ops', SYSTIMESTAMP - INTERVAL '8' HOUR + INTERVAL '30' MINUTE);
INSERT INTO TICKET_HISTORY (TICKET_ID, USER_ID, ACTION, OLD_VALUE, NEW_VALUE, CREATED_AT)
VALUES ((SELECT TICKET_ID FROM TICKETS WHERE SUBJECT='VPN disconnects every few minutes'),
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='sara@northwind.example'),
        'PRIORITY_CHANGE', NULL, 'P3', SYSTIMESTAMP - INTERVAL '8' HOUR + INTERVAL '35' MINUTE);
INSERT INTO TICKET_HISTORY (TICKET_ID, USER_ID, ACTION, OLD_VALUE, NEW_VALUE, CREATED_AT)
VALUES ((SELECT TICKET_ID FROM TICKETS WHERE SUBJECT='VPN disconnects every few minutes'),
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='mike@northwind.example'),
        'STATUS_CHANGE', 'Assigned', 'In Progress', SYSTIMESTAMP - INTERVAL '7' HOUR);
INSERT INTO TICKET_HISTORY (TICKET_ID, USER_ID, ACTION, OLD_VALUE, NEW_VALUE, CREATED_AT)
VALUES ((SELECT TICKET_ID FROM TICKETS WHERE SUBJECT='SSO login fails for new staff'),
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='dan@globex.example'),
        'STATUS_CHANGE', NULL, 'New', SYSTIMESTAMP - INTERVAL '3' HOUR);
INSERT INTO TICKET_HISTORY (TICKET_ID, USER_ID, ACTION, OLD_VALUE, NEW_VALUE, CREATED_AT)
VALUES ((SELECT TICKET_ID FROM TICKETS WHERE SUBJECT='SSO login fails for new staff'),
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='sara@northwind.example'),
        'ASSIGN', NULL, 'Mike Ops', SYSTIMESTAMP - INTERVAL '2' HOUR);
INSERT INTO TICKET_HISTORY (TICKET_ID, USER_ID, ACTION, OLD_VALUE, NEW_VALUE, CREATED_AT)
VALUES ((SELECT TICKET_ID FROM TICKETS WHERE SUBJECT='Cannot export monthly report to PDF'),
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='anna@acme.example'),
        'STATUS_CHANGE', NULL, 'New', SYSTIMESTAMP - INTERVAL '2' DAY);
INSERT INTO TICKET_HISTORY (TICKET_ID, USER_ID, ACTION, OLD_VALUE, NEW_VALUE, CREATED_AT)
VALUES ((SELECT TICKET_ID FROM TICKETS WHERE SUBJECT='Cannot export monthly report to PDF'),
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='lee@northwind.example'),
        'STATUS_CHANGE', 'In Progress', 'Resolved', SYSTIMESTAMP - INTERVAL '1' DAY);

------------------------------------------------------------------ SELF-TEST ---
-- Fails LOUDLY if any natural key mis-resolved (JOIN-style inserts drop rows
-- silently on a typo — this block turns that into a hard error).
DECLARE
  PROCEDURE assert_count(p_sql VARCHAR2, p_expected NUMBER, p_what VARCHAR2) IS
    l_actual NUMBER;
  BEGIN
    EXECUTE IMMEDIATE p_sql INTO l_actual;
    IF l_actual <> p_expected THEN
      raise_application_error(-20099,
        'SEED FAILED: ' || p_what || ' — expected ' || p_expected || ', got ' || l_actual);
    END IF;
  END;
BEGIN
  assert_count('SELECT COUNT(*) FROM COMPANIES',        5,  'companies');
  assert_count('SELECT COUNT(*) FROM DEPARTMENTS',      7,  'departments');
  assert_count('SELECT COUNT(*) FROM APP_USERS',        18, 'users');
  assert_count('SELECT COUNT(*) FROM USER_ROLES',       26, 'user roles');
  assert_count('SELECT COUNT(*) FROM SLA_POLICIES',     4,  'SLA policies');
  assert_count('SELECT COUNT(*) FROM SLA_POLICIES WHERE IS_DEFAULT=''Y''', 1, 'default SLA policy');
  assert_count('SELECT COUNT(*) FROM SLA_TARGETS',      16, 'SLA targets');
  assert_count('SELECT COUNT(*) FROM PROJECTS',         8,  'projects');
  assert_count('SELECT COUNT(*) FROM CATEGORIES',       7,  'categories');
  assert_count('SELECT COUNT(*) FROM AGENT_PROJECTS',   27, 'agent-project mappings');
  assert_count('SELECT COUNT(*) FROM USER_PROJECTS',    1,  'restricted-project invitations');
  assert_count('SELECT COUNT(*) FROM TICKETS',          14, 'tickets');
  assert_count('SELECT COUNT(*) FROM TICKET_COMMENTS',  5,  'comments');
  assert_count('SELECT COUNT(*) FROM TICKET_HISTORY',   8,  'history rows');
  -- The L1-gate demo depends on GLBX-CRM having NO L1 agent:
  assert_count('SELECT COUNT(*) FROM AGENT_PROJECTS ap JOIN PROJECTS p ON p.PROJECT_ID=ap.PROJECT_ID'
            || ' WHERE p.PROJECT_KEY=''GLBX-CRM'' AND ap.TIER=''L1''', 0, 'GLBX-CRM must have no L1');
  DBMS_OUTPUT.PUT_LINE('Seed OK: all counts match.');
END;
/

COMMIT;
