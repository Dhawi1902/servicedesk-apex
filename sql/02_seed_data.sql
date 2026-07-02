--------------------------------------------------------------------------------
-- 02_seed_data.sql  —  Demo dataset for the multi-tenant service desk
--------------------------------------------------------------------------------
-- Idempotent-friendly: every child row resolves its parents by NATURAL KEY
-- (company_name / email / category_name / subject) via scalar sub-queries, so
-- it never depends on generated ID values. Run AFTER 01_schema.sql.
--
-- Accounts mirror docs/mockups (password handling is a separate auth step):
--   sara@northwind.example  SYSTEM_ADMIN   (vendor)
--   mike@northwind.example  SUPPORT_AGENT  L1 (covers Acme + Globex)
--   lena@northwind.example  SUPPORT_AGENT  L2 (covers Globex + Initech)
--   tom@northwind.example   SUPPORT_AGENT  L3 (covers Acme + Globex + Initech)
--   anna@acme.example       CLIENT_USER    (Engineering dept)
--   aaron@acme.example      CLIENT_ADMIN   (Engineering dept)
--   amy@acme.example        CLIENT_USER    (Finance dept)
--   george@globex.example   CLIENT_USER    (Operations dept)
--   gina@globex.example     CLIENT_ADMIN   (Operations dept)
--   ivan@initech.example    CLIENT_USER    (IT dept)
--------------------------------------------------------------------------------

----------------------------------------------------------------- COMPANIES ----
INSERT INTO COMPANIES (COMPANY_NAME, COMPANY_TYPE) VALUES ('Northwind Support', 'VENDOR');
INSERT INTO COMPANIES (COMPANY_NAME, COMPANY_TYPE) VALUES ('Acme Corp',   'CLIENT');
INSERT INTO COMPANIES (COMPANY_NAME, COMPANY_TYPE) VALUES ('Globex Inc',  'CLIENT');
INSERT INTO COMPANIES (COMPANY_NAME, COMPANY_TYPE) VALUES ('Initech',     'CLIENT');

--------------------------------------------------------------- DEPARTMENTS ----
-- Vendor departments
INSERT INTO DEPARTMENTS (COMPANY_ID, DEPARTMENT_NAME)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Northwind Support'), 'Support Operations');

-- Acme departments
INSERT INTO DEPARTMENTS (COMPANY_ID, DEPARTMENT_NAME)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Acme Corp'), 'Engineering');
INSERT INTO DEPARTMENTS (COMPANY_ID, DEPARTMENT_NAME)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Acme Corp'), 'Finance');

-- Globex departments
INSERT INTO DEPARTMENTS (COMPANY_ID, DEPARTMENT_NAME)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Globex Inc'), 'Operations');
INSERT INTO DEPARTMENTS (COMPANY_ID, DEPARTMENT_NAME)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Globex Inc'), 'Sales');

-- Initech departments
INSERT INTO DEPARTMENTS (COMPANY_ID, DEPARTMENT_NAME)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Initech'), 'IT');

------------------------------------------------------------------ APP_USERS ---
-- Vendor staff (department optional for vendor)
INSERT INTO APP_USERS (COMPANY_ID, DEPARTMENT_ID, FULL_NAME, EMAIL, ROLE, TIER)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Northwind Support'),
        (SELECT DEPARTMENT_ID FROM DEPARTMENTS WHERE DEPARTMENT_NAME='Support Operations'
           AND COMPANY_ID=(SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Northwind Support')),
        'Sara Nolan', 'sara@northwind.example', 'SYSTEM_ADMIN', NULL);

INSERT INTO APP_USERS (COMPANY_ID, DEPARTMENT_ID, FULL_NAME, EMAIL, ROLE, TIER)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Northwind Support'),
        (SELECT DEPARTMENT_ID FROM DEPARTMENTS WHERE DEPARTMENT_NAME='Support Operations'
           AND COMPANY_ID=(SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Northwind Support')),
        'Mike Reyes', 'mike@northwind.example', 'SUPPORT_AGENT', 'L1');

INSERT INTO APP_USERS (COMPANY_ID, DEPARTMENT_ID, FULL_NAME, EMAIL, ROLE, TIER)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Northwind Support'),
        (SELECT DEPARTMENT_ID FROM DEPARTMENTS WHERE DEPARTMENT_NAME='Support Operations'
           AND COMPANY_ID=(SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Northwind Support')),
        'Lena Ortiz', 'lena@northwind.example', 'SUPPORT_AGENT', 'L2');

INSERT INTO APP_USERS (COMPANY_ID, DEPARTMENT_ID, FULL_NAME, EMAIL, ROLE, TIER)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Northwind Support'),
        (SELECT DEPARTMENT_ID FROM DEPARTMENTS WHERE DEPARTMENT_NAME='Support Operations'
           AND COMPANY_ID=(SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Northwind Support')),
        'Tom Vance', 'tom@northwind.example', 'SUPPORT_AGENT', 'L3');

-- Acme — Engineering dept
INSERT INTO APP_USERS (COMPANY_ID, DEPARTMENT_ID, FULL_NAME, EMAIL, ROLE)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Acme Corp'),
        (SELECT DEPARTMENT_ID FROM DEPARTMENTS WHERE DEPARTMENT_NAME='Engineering'
           AND COMPANY_ID=(SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Acme Corp')),
        'Anna Bell', 'anna@acme.example', 'CLIENT_USER');

INSERT INTO APP_USERS (COMPANY_ID, DEPARTMENT_ID, FULL_NAME, EMAIL, ROLE)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Acme Corp'),
        (SELECT DEPARTMENT_ID FROM DEPARTMENTS WHERE DEPARTMENT_NAME='Engineering'
           AND COMPANY_ID=(SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Acme Corp')),
        'Aaron Katz', 'aaron@acme.example', 'CLIENT_ADMIN');

-- Acme — Finance dept (different department for department-scoping demo)
INSERT INTO APP_USERS (COMPANY_ID, DEPARTMENT_ID, FULL_NAME, EMAIL, ROLE)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Acme Corp'),
        (SELECT DEPARTMENT_ID FROM DEPARTMENTS WHERE DEPARTMENT_NAME='Finance'
           AND COMPANY_ID=(SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Acme Corp')),
        'Amy Chen', 'amy@acme.example', 'CLIENT_USER');

-- Globex
INSERT INTO APP_USERS (COMPANY_ID, DEPARTMENT_ID, FULL_NAME, EMAIL, ROLE)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Globex Inc'),
        (SELECT DEPARTMENT_ID FROM DEPARTMENTS WHERE DEPARTMENT_NAME='Operations'
           AND COMPANY_ID=(SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Globex Inc')),
        'George Ives', 'george@globex.example', 'CLIENT_USER');

INSERT INTO APP_USERS (COMPANY_ID, DEPARTMENT_ID, FULL_NAME, EMAIL, ROLE)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Globex Inc'),
        (SELECT DEPARTMENT_ID FROM DEPARTMENTS WHERE DEPARTMENT_NAME='Operations'
           AND COMPANY_ID=(SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Globex Inc')),
        'Gina Park', 'gina@globex.example', 'CLIENT_ADMIN');

-- Initech
INSERT INTO APP_USERS (COMPANY_ID, DEPARTMENT_ID, FULL_NAME, EMAIL, ROLE)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Initech'),
        (SELECT DEPARTMENT_ID FROM DEPARTMENTS WHERE DEPARTMENT_NAME='IT'
           AND COMPANY_ID=(SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Initech')),
        'Ivan Cross', 'ivan@initech.example', 'CLIENT_USER');

------------------------------------------------------------- AGENT_COMPANIES --
-- Decision I: scope each agent's queue to the clients they cover.
-- Mike (L1) covers Acme + Globex
INSERT INTO AGENT_COMPANIES (USER_ID, COMPANY_ID)
VALUES ((SELECT USER_ID FROM APP_USERS WHERE EMAIL='mike@northwind.example'),
        (SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Acme Corp'));
INSERT INTO AGENT_COMPANIES (USER_ID, COMPANY_ID)
VALUES ((SELECT USER_ID FROM APP_USERS WHERE EMAIL='mike@northwind.example'),
        (SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Globex Inc'));

-- Lena (L2) covers Globex + Initech
INSERT INTO AGENT_COMPANIES (USER_ID, COMPANY_ID)
VALUES ((SELECT USER_ID FROM APP_USERS WHERE EMAIL='lena@northwind.example'),
        (SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Globex Inc'));
INSERT INTO AGENT_COMPANIES (USER_ID, COMPANY_ID)
VALUES ((SELECT USER_ID FROM APP_USERS WHERE EMAIL='lena@northwind.example'),
        (SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Initech'));

-- Tom (L3) covers all three clients
INSERT INTO AGENT_COMPANIES (USER_ID, COMPANY_ID)
VALUES ((SELECT USER_ID FROM APP_USERS WHERE EMAIL='tom@northwind.example'),
        (SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Acme Corp'));
INSERT INTO AGENT_COMPANIES (USER_ID, COMPANY_ID)
VALUES ((SELECT USER_ID FROM APP_USERS WHERE EMAIL='tom@northwind.example'),
        (SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Globex Inc'));
INSERT INTO AGENT_COMPANIES (USER_ID, COMPANY_ID)
VALUES ((SELECT USER_ID FROM APP_USERS WHERE EMAIL='tom@northwind.example'),
        (SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Initech'));

----------------------------------------------------------------- CATEGORIES ---
-- Renamed 'Incident' -> 'System Outage' to avoid clash with ticket_type 'INCIDENT'
INSERT INTO CATEGORIES (CATEGORY_NAME) VALUES ('Bug');
INSERT INTO CATEGORIES (CATEGORY_NAME) VALUES ('Feature Request');
INSERT INTO CATEGORIES (CATEGORY_NAME) VALUES ('Question');
INSERT INTO CATEGORIES (CATEGORY_NAME) VALUES ('System Outage');
INSERT INTO CATEGORIES (CATEGORY_NAME) VALUES ('Access Request');
INSERT INTO CATEGORIES (CATEGORY_NAME) VALUES ('Account Management');

-------------------------------------------------------------- SLA_TARGETS -----
-- FR-23: per-company SLA targets keyed on (company_id, severity).
-- ESCALATION_PCT defaults to 80 (FR-35); override per row to customize.
-- Acme Corp
INSERT INTO SLA_TARGETS (COMPANY_ID, SEVERITY, RESPONSE_HOURS, RESOLUTION_DAYS)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Acme Corp'), 'Critical', 1, 1);
INSERT INTO SLA_TARGETS (COMPANY_ID, SEVERITY, RESPONSE_HOURS, RESOLUTION_DAYS)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Acme Corp'), 'Major', 4, 3);
INSERT INTO SLA_TARGETS (COMPANY_ID, SEVERITY, RESPONSE_HOURS, RESOLUTION_DAYS)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Acme Corp'), 'Minor', 8, 7);
INSERT INTO SLA_TARGETS (COMPANY_ID, SEVERITY, RESPONSE_HOURS, RESOLUTION_DAYS)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Acme Corp'), 'Low', 24, 14);

-- Globex Inc
INSERT INTO SLA_TARGETS (COMPANY_ID, SEVERITY, RESPONSE_HOURS, RESOLUTION_DAYS)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Globex Inc'), 'Critical', 2, 1);
INSERT INTO SLA_TARGETS (COMPANY_ID, SEVERITY, RESPONSE_HOURS, RESOLUTION_DAYS)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Globex Inc'), 'Major', 8, 5);
INSERT INTO SLA_TARGETS (COMPANY_ID, SEVERITY, RESPONSE_HOURS, RESOLUTION_DAYS)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Globex Inc'), 'Minor', 16, 10);
INSERT INTO SLA_TARGETS (COMPANY_ID, SEVERITY, RESPONSE_HOURS, RESOLUTION_DAYS)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Globex Inc'), 'Low', 48, 21);

-- Initech
INSERT INTO SLA_TARGETS (COMPANY_ID, SEVERITY, RESPONSE_HOURS, RESOLUTION_DAYS)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Initech'), 'Critical', 1, 1);
INSERT INTO SLA_TARGETS (COMPANY_ID, SEVERITY, RESPONSE_HOURS, RESOLUTION_DAYS)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Initech'), 'Major', 4, 3);
INSERT INTO SLA_TARGETS (COMPANY_ID, SEVERITY, RESPONSE_HOURS, RESOLUTION_DAYS)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Initech'), 'Minor', 12, 7);
INSERT INTO SLA_TARGETS (COMPANY_ID, SEVERITY, RESPONSE_HOURS, RESOLUTION_DAYS)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Initech'), 'Low', 24, 14);

-------------------------------------------------------------------- TICKETS ---
-- Now uses SEVERITY (client-set) + PRIORITY (support-set, nullable) + TICKET_TYPE.
-- department_id stamped from the creator's department.
-- Subjects are unique so comments/history below can resolve the ticket by SUBJECT.
-- created_at is back-dated so dashboard aging/backlog metrics have real spread.

-- Acme / Engineering (created by anna) — INCIDENTS
INSERT INTO TICKETS (COMPANY_ID, DEPARTMENT_ID, TICKET_TYPE, SUBJECT, DESCRIPTION, CATEGORY_ID,
                     SEVERITY, PRIORITY, STATUS, CREATED_BY, ASSIGNED_TO, CREATED_AT, UPDATED_AT,
                     FIRST_RESPONSE_AT, SLA_DUE_DATE)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Acme Corp'),
        (SELECT DEPARTMENT_ID FROM DEPARTMENTS WHERE DEPARTMENT_NAME='Engineering'
           AND COMPANY_ID=(SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Acme Corp')),
        'INCIDENT',
        'Login page returns 500 error',
        'Users intermittently receive an HTTP 500 when signing in from the web portal.',
        (SELECT CATEGORY_ID FROM CATEGORIES WHERE CATEGORY_NAME='System Outage'),
        'Critical', 'P1', 'In Progress',
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='anna@acme.example'),
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='mike@northwind.example'),
        SYSTIMESTAMP - INTERVAL '4' DAY, SYSTIMESTAMP - INTERVAL '1' DAY,
        SYSTIMESTAMP - INTERVAL '3' DAY + INTERVAL '18' HOUR,
        SYSTIMESTAMP - INTERVAL '3' DAY);

INSERT INTO TICKETS (COMPANY_ID, DEPARTMENT_ID, TICKET_TYPE, SUBJECT, DESCRIPTION, CATEGORY_ID,
                     SEVERITY, STATUS, CREATED_BY, CREATED_AT, UPDATED_AT, SLA_DUE_DATE)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Acme Corp'),
        (SELECT DEPARTMENT_ID FROM DEPARTMENTS WHERE DEPARTMENT_NAME='Engineering'
           AND COMPANY_ID=(SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Acme Corp')),
        'INCIDENT',
        'Export to CSV is missing columns',
        'The ticket export drops the Priority and Assigned Agent columns.',
        (SELECT CATEGORY_ID FROM CATEGORIES WHERE CATEGORY_NAME='Bug'),
        'Minor', 'New',
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='anna@acme.example'),
        SYSTIMESTAMP - INTERVAL '2' DAY, SYSTIMESTAMP - INTERVAL '2' DAY,
        SYSTIMESTAMP + INTERVAL '5' DAY);

-- Acme / Engineering (created by aaron) — SERVICE_REQUEST
INSERT INTO TICKETS (COMPANY_ID, DEPARTMENT_ID, TICKET_TYPE, SUBJECT, DESCRIPTION, CATEGORY_ID,
                     SEVERITY, STATUS, CREATED_BY, ASSIGNED_TO, CREATED_AT, UPDATED_AT, SLA_DUE_DATE)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Acme Corp'),
        (SELECT DEPARTMENT_ID FROM DEPARTMENTS WHERE DEPARTMENT_NAME='Engineering'
           AND COMPANY_ID=(SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Acme Corp')),
        'SERVICE_REQUEST',
        'Request access to billing module',
        'Please grant the finance team read access to the billing dashboard.',
        (SELECT CATEGORY_ID FROM CATEGORIES WHERE CATEGORY_NAME='Access Request'),
        'Low', 'Assigned',
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='aaron@acme.example'),
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='mike@northwind.example'),
        SYSTIMESTAMP - INTERVAL '1' DAY, SYSTIMESTAMP - INTERVAL '20' HOUR,
        SYSTIMESTAMP + INTERVAL '13' DAY);

-- Acme / Finance (created by amy) — demonstrates department scoping
INSERT INTO TICKETS (COMPANY_ID, DEPARTMENT_ID, TICKET_TYPE, SUBJECT, DESCRIPTION, CATEGORY_ID,
                     SEVERITY, STATUS, CREATED_BY, CREATED_AT, UPDATED_AT, SLA_DUE_DATE)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Acme Corp'),
        (SELECT DEPARTMENT_ID FROM DEPARTMENTS WHERE DEPARTMENT_NAME='Finance'
           AND COMPANY_ID=(SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Acme Corp')),
        'SERVICE_REQUEST',
        'Need new vendor payment method added',
        'Please add wire transfer as a payment method for vendor invoices.',
        (SELECT CATEGORY_ID FROM CATEGORIES WHERE CATEGORY_NAME='Account Management'),
        'Low', 'New',
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='amy@acme.example'),
        SYSTIMESTAMP - INTERVAL '1' DAY, SYSTIMESTAMP - INTERVAL '1' DAY,
        SYSTIMESTAMP + INTERVAL '13' DAY);

-- Globex (created by george)
INSERT INTO TICKETS (COMPANY_ID, DEPARTMENT_ID, TICKET_TYPE, SUBJECT, DESCRIPTION, CATEGORY_ID,
                     SEVERITY, PRIORITY, STATUS, CREATED_BY, ASSIGNED_TO, CREATED_AT, UPDATED_AT,
                     FIRST_RESPONSE_AT, SLA_DUE_DATE)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Globex Inc'),
        (SELECT DEPARTMENT_ID FROM DEPARTMENTS WHERE DEPARTMENT_NAME='Operations'
           AND COMPANY_ID=(SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Globex Inc')),
        'INCIDENT',
        'Dashboard loads slowly for large accounts',
        'The reporting dashboard takes 15+ seconds to load for accounts with many records.',
        (SELECT CATEGORY_ID FROM CATEGORIES WHERE CATEGORY_NAME='Bug'),
        'Major', 'P2', 'In Progress',
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='george@globex.example'),
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='mike@northwind.example'),
        SYSTIMESTAMP - INTERVAL '6' DAY, SYSTIMESTAMP - INTERVAL '3' HOUR,
        SYSTIMESTAMP - INTERVAL '5' DAY + INTERVAL '14' HOUR,
        SYSTIMESTAMP - INTERVAL '1' DAY);

INSERT INTO TICKETS (COMPANY_ID, DEPARTMENT_ID, TICKET_TYPE, SUBJECT, DESCRIPTION, CATEGORY_ID,
                     SEVERITY, STATUS, CREATED_BY, CREATED_AT, UPDATED_AT, SLA_DUE_DATE)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Globex Inc'),
        (SELECT DEPARTMENT_ID FROM DEPARTMENTS WHERE DEPARTMENT_NAME='Operations'
           AND COMPANY_ID=(SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Globex Inc')),
        'SERVICE_REQUEST',
        'Add a dark mode option',
        'Requesting a dark theme for the agent console to reduce eye strain.',
        (SELECT CATEGORY_ID FROM CATEGORIES WHERE CATEGORY_NAME='Feature Request'),
        'Low', 'New',
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='george@globex.example'),
        SYSTIMESTAMP - INTERVAL '3' DAY, SYSTIMESTAMP - INTERVAL '3' DAY,
        SYSTIMESTAMP + INTERVAL '18' DAY);

INSERT INTO TICKETS (COMPANY_ID, DEPARTMENT_ID, TICKET_TYPE, SUBJECT, DESCRIPTION, CATEGORY_ID,
                     SEVERITY, PRIORITY, STATUS, CREATED_BY, ASSIGNED_TO,
                     CREATED_AT, UPDATED_AT, FIRST_RESPONSE_AT, RESOLVED_AT, SLA_DUE_DATE,
                     RESOLUTION_CODE, RESOLUTION_SUMMARY)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Globex Inc'),
        (SELECT DEPARTMENT_ID FROM DEPARTMENTS WHERE DEPARTMENT_NAME='Operations'
           AND COMPANY_ID=(SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Globex Inc')),
        'INCIDENT',
        'Password reset email not received',
        'Users report the password reset email never arrives; checked spam folders.',
        (SELECT CATEGORY_ID FROM CATEGORIES WHERE CATEGORY_NAME='System Outage'),
        'Major', 'P2', 'Resolved',
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='george@globex.example'),
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='mike@northwind.example'),
        SYSTIMESTAMP - INTERVAL '8' DAY, SYSTIMESTAMP - INTERVAL '5' DAY,
        SYSTIMESTAMP - INTERVAL '7' DAY + INTERVAL '20' HOUR,
        SYSTIMESTAMP - INTERVAL '5' DAY,
        SYSTIMESTAMP - INTERVAL '3' DAY,
        'FIXED', 'Corrected the mail relay configuration; SMTP credentials had expired.');

-- Initech (created by ivan) — only Lena covers Initech
INSERT INTO TICKETS (COMPANY_ID, DEPARTMENT_ID, TICKET_TYPE, SUBJECT, DESCRIPTION, CATEGORY_ID,
                     SEVERITY, PRIORITY, STATUS, CREATED_BY, ASSIGNED_TO,
                     CREATED_AT, UPDATED_AT, SLA_DUE_DATE)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Initech'),
        (SELECT DEPARTMENT_ID FROM DEPARTMENTS WHERE DEPARTMENT_NAME='IT'
           AND COMPANY_ID=(SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Initech')),
        'INCIDENT',
        'API rate limit is too low',
        'Our integration hits the 100 req/min ceiling during nightly syncs.',
        (SELECT CATEGORY_ID FROM CATEGORIES WHERE CATEGORY_NAME='Question'),
        'Minor', 'P3', 'Assigned',
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='ivan@initech.example'),
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='lena@northwind.example'),
        SYSTIMESTAMP - INTERVAL '2' DAY, SYSTIMESTAMP - INTERVAL '1' DAY,
        SYSTIMESTAMP + INTERVAL '5' DAY);

INSERT INTO TICKETS (COMPANY_ID, DEPARTMENT_ID, TICKET_TYPE, SUBJECT, DESCRIPTION, CATEGORY_ID,
                     SEVERITY, PRIORITY, STATUS, CREATED_BY, ASSIGNED_TO,
                     CREATED_AT, UPDATED_AT, FIRST_RESPONSE_AT, RESOLVED_AT, CLOSED_AT,
                     SLA_DUE_DATE, RESOLUTION_CODE, RESOLUTION_SUMMARY, CSAT_SCORE)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Initech'),
        (SELECT DEPARTMENT_ID FROM DEPARTMENTS WHERE DEPARTMENT_NAME='IT'
           AND COMPANY_ID=(SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Initech')),
        'INCIDENT',
        'Invoice PDF is corrupted on download',
        'Downloaded invoice PDFs will not open; the file appears truncated.',
        (SELECT CATEGORY_ID FROM CATEGORIES WHERE CATEGORY_NAME='Bug'),
        'Critical', 'P1', 'Closed',
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='ivan@initech.example'),
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='lena@northwind.example'),
        SYSTIMESTAMP - INTERVAL '12' DAY, SYSTIMESTAMP - INTERVAL '9' DAY,
        SYSTIMESTAMP - INTERVAL '11' DAY + INTERVAL '20' HOUR,
        SYSTIMESTAMP - INTERVAL '10' DAY, SYSTIMESTAMP - INTERVAL '9' DAY,
        SYSTIMESTAMP - INTERVAL '11' DAY,
        'FIXED', 'Buffer size in the PDF renderer was too small for multi-page invoices; increased from 4KB to 64KB.',
        5);

-- On Hold ticket for demo of decision B
INSERT INTO TICKETS (COMPANY_ID, DEPARTMENT_ID, TICKET_TYPE, SUBJECT, DESCRIPTION, CATEGORY_ID,
                     SEVERITY, PRIORITY, STATUS, CREATED_BY, ASSIGNED_TO,
                     CREATED_AT, UPDATED_AT, FIRST_RESPONSE_AT, SLA_DUE_DATE)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Acme Corp'),
        (SELECT DEPARTMENT_ID FROM DEPARTMENTS WHERE DEPARTMENT_NAME='Engineering'
           AND COMPANY_ID=(SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Acme Corp')),
        'INCIDENT',
        'SSO integration failing after IdP certificate renewal',
        'After the annual IdP certificate renewal, SSO logins fail with a SAML signature validation error. Waiting on the IdP vendor to confirm the new certificate fingerprint.',
        (SELECT CATEGORY_ID FROM CATEGORIES WHERE CATEGORY_NAME='System Outage'),
        'Major', 'P2', 'On Hold',
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='anna@acme.example'),
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='mike@northwind.example'),
        SYSTIMESTAMP - INTERVAL '3' DAY, SYSTIMESTAMP - INTERVAL '6' HOUR,
        SYSTIMESTAMP - INTERVAL '2' DAY + INTERVAL '18' HOUR,
        SYSTIMESTAMP);

------------------------------------------------------------- TICKET_COMMENTS --
INSERT INTO TICKET_COMMENTS (TICKET_ID, USER_ID, COMMENT_TEXT, IS_INTERNAL)
VALUES ((SELECT TICKET_ID FROM TICKETS WHERE SUBJECT='Login page returns 500 error'),
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='anna@acme.example'),
        'This is blocking our whole team from logging in this morning.', 'N');
INSERT INTO TICKET_COMMENTS (TICKET_ID, USER_ID, COMMENT_TEXT, IS_INTERNAL)
VALUES ((SELECT TICKET_ID FROM TICKETS WHERE SUBJECT='Login page returns 500 error'),
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='mike@northwind.example'),
        'Reproduced. Looks like a connection-pool exhaustion under load — investigating.', 'Y');
INSERT INTO TICKET_COMMENTS (TICKET_ID, USER_ID, COMMENT_TEXT, IS_INTERNAL)
VALUES ((SELECT TICKET_ID FROM TICKETS WHERE SUBJECT='Password reset email not received'),
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='mike@northwind.example'),
        'Fixed the mail relay config; reset emails are sending again. Please confirm.', 'N');
INSERT INTO TICKET_COMMENTS (TICKET_ID, USER_ID, COMMENT_TEXT, IS_INTERNAL)
VALUES ((SELECT TICKET_ID FROM TICKETS WHERE SUBJECT='SSO integration failing after IdP certificate renewal'),
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='mike@northwind.example'),
        'Contacted the IdP vendor — waiting for them to send the updated certificate fingerprint. Putting on hold.', 'N');

-------------------------------------------------------------- TICKET_HISTORY --
-- Assignment + status-change trail for the in-progress tickets and the closed one.
INSERT INTO TICKET_HISTORY (TICKET_ID, USER_ID, ACTION, OLD_VALUE, NEW_VALUE)
VALUES ((SELECT TICKET_ID FROM TICKETS WHERE SUBJECT='Login page returns 500 error'),
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='mike@northwind.example'),
        'ASSIGN', NULL, 'Mike Reyes');
INSERT INTO TICKET_HISTORY (TICKET_ID, USER_ID, ACTION, OLD_VALUE, NEW_VALUE)
VALUES ((SELECT TICKET_ID FROM TICKETS WHERE SUBJECT='Login page returns 500 error'),
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='mike@northwind.example'),
        'STATUS_CHANGE', 'Assigned', 'In Progress');
INSERT INTO TICKET_HISTORY (TICKET_ID, USER_ID, ACTION, OLD_VALUE, NEW_VALUE)
VALUES ((SELECT TICKET_ID FROM TICKETS WHERE SUBJECT='Password reset email not received'),
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='mike@northwind.example'),
        'STATUS_CHANGE', 'In Progress', 'Resolved');
INSERT INTO TICKET_HISTORY (TICKET_ID, USER_ID, ACTION, OLD_VALUE, NEW_VALUE)
VALUES ((SELECT TICKET_ID FROM TICKETS WHERE SUBJECT='Invoice PDF is corrupted on download'),
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='lena@northwind.example'),
        'CSAT', NULL, '5');
-- On Hold status change
INSERT INTO TICKET_HISTORY (TICKET_ID, USER_ID, ACTION, OLD_VALUE, NEW_VALUE)
VALUES ((SELECT TICKET_ID FROM TICKETS WHERE SUBJECT='SSO integration failing after IdP certificate renewal'),
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='mike@northwind.example'),
        'STATUS_CHANGE', 'In Progress', 'On Hold');
-- Reassign example (L1 → L2)
INSERT INTO TICKET_HISTORY (TICKET_ID, USER_ID, ACTION, OLD_VALUE, NEW_VALUE)
VALUES ((SELECT TICKET_ID FROM TICKETS WHERE SUBJECT='Dashboard loads slowly for large accounts'),
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='mike@northwind.example'),
        'REASSIGN', 'Mike Reyes (L1)', 'Lena Ortiz (L2)');

COMMIT;
