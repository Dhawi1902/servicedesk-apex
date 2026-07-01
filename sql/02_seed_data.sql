--------------------------------------------------------------------------------
-- 02_seed_data.sql  —  Demo dataset for the multi-tenant service desk
--------------------------------------------------------------------------------
-- Idempotent-friendly: every child row resolves its parents by NATURAL KEY
-- (company_name / email / category_name / subject) via scalar sub-queries, so
-- it never depends on generated ID values. Run AFTER 01_schema.sql.
--
-- Accounts mirror docs/mockups (password handling is a separate auth step):
--   sara@northwind.example  SYSTEM_ADMIN   (vendor)
--   mike@northwind.example  SUPPORT_AGENT  (covers Acme + Globex)
--   lena@northwind.example  SUPPORT_AGENT  (covers Globex + Initech)
--   anna@acme.example       CLIENT_USER
--   aaron@acme.example      CLIENT_ADMIN
--   george@globex.example   CLIENT_USER
--   gina@globex.example     CLIENT_ADMIN
--   ivan@initech.example    CLIENT_USER
--------------------------------------------------------------------------------

----------------------------------------------------------------- COMPANIES ----
INSERT INTO COMPANIES (COMPANY_NAME, COMPANY_TYPE) VALUES ('Northwind Support', 'VENDOR');
INSERT INTO COMPANIES (COMPANY_NAME, COMPANY_TYPE) VALUES ('Acme Corp',   'CLIENT');
INSERT INTO COMPANIES (COMPANY_NAME, COMPANY_TYPE) VALUES ('Globex Inc',  'CLIENT');
INSERT INTO COMPANIES (COMPANY_NAME, COMPANY_TYPE) VALUES ('Initech',     'CLIENT');

------------------------------------------------------------------ APP_USERS ---
-- Vendor staff
INSERT INTO APP_USERS (COMPANY_ID, FULL_NAME, EMAIL, ROLE)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Northwind Support'),
        'Sara Nolan', 'sara@northwind.example', 'SYSTEM_ADMIN');
INSERT INTO APP_USERS (COMPANY_ID, FULL_NAME, EMAIL, ROLE)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Northwind Support'),
        'Mike Reyes', 'mike@northwind.example', 'SUPPORT_AGENT');
INSERT INTO APP_USERS (COMPANY_ID, FULL_NAME, EMAIL, ROLE)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Northwind Support'),
        'Lena Ortiz', 'lena@northwind.example', 'SUPPORT_AGENT');
-- Acme
INSERT INTO APP_USERS (COMPANY_ID, FULL_NAME, EMAIL, ROLE)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Acme Corp'),
        'Anna Bell', 'anna@acme.example', 'CLIENT_USER');
INSERT INTO APP_USERS (COMPANY_ID, FULL_NAME, EMAIL, ROLE)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Acme Corp'),
        'Aaron Katz', 'aaron@acme.example', 'CLIENT_ADMIN');
-- Globex
INSERT INTO APP_USERS (COMPANY_ID, FULL_NAME, EMAIL, ROLE)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Globex Inc'),
        'George Ives', 'george@globex.example', 'CLIENT_USER');
INSERT INTO APP_USERS (COMPANY_ID, FULL_NAME, EMAIL, ROLE)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Globex Inc'),
        'Gina Park', 'gina@globex.example', 'CLIENT_ADMIN');
-- Initech
INSERT INTO APP_USERS (COMPANY_ID, FULL_NAME, EMAIL, ROLE)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Initech'),
        'Ivan Cross', 'ivan@initech.example', 'CLIENT_USER');

------------------------------------------------------------- AGENT_COMPANIES --
-- Decision I: scope each agent's queue to the clients they cover.
INSERT INTO AGENT_COMPANIES (USER_ID, COMPANY_ID)
VALUES ((SELECT USER_ID FROM APP_USERS WHERE EMAIL='mike@northwind.example'),
        (SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Acme Corp'));
INSERT INTO AGENT_COMPANIES (USER_ID, COMPANY_ID)
VALUES ((SELECT USER_ID FROM APP_USERS WHERE EMAIL='mike@northwind.example'),
        (SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Globex Inc'));
INSERT INTO AGENT_COMPANIES (USER_ID, COMPANY_ID)
VALUES ((SELECT USER_ID FROM APP_USERS WHERE EMAIL='lena@northwind.example'),
        (SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Globex Inc'));
INSERT INTO AGENT_COMPANIES (USER_ID, COMPANY_ID)
VALUES ((SELECT USER_ID FROM APP_USERS WHERE EMAIL='lena@northwind.example'),
        (SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Initech'));

----------------------------------------------------------------- CATEGORIES ---
INSERT INTO CATEGORIES (CATEGORY_NAME) VALUES ('Bug');
INSERT INTO CATEGORIES (CATEGORY_NAME) VALUES ('Feature Request');
INSERT INTO CATEGORIES (CATEGORY_NAME) VALUES ('Question');
INSERT INTO CATEGORIES (CATEGORY_NAME) VALUES ('Incident');
INSERT INTO CATEGORIES (CATEGORY_NAME) VALUES ('Access Request');

-------------------------------------------------------------------- TICKETS ---
-- Subjects are unique so comments/history below can resolve the ticket by SUBJECT.
-- created_at is back-dated so dashboard aging/backlog metrics have real spread.

-- Acme (created by anna)
INSERT INTO TICKETS (COMPANY_ID, SUBJECT, DESCRIPTION, CATEGORY_ID, PRIORITY, STATUS, CREATED_BY, ASSIGNED_TO, CREATED_AT, UPDATED_AT)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Acme Corp'),
        'Login page returns 500 error',
        'Users intermittently receive an HTTP 500 when signing in from the web portal.',
        (SELECT CATEGORY_ID FROM CATEGORIES WHERE CATEGORY_NAME='Incident'),
        'Critical', 'In Progress',
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='anna@acme.example'),
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='mike@northwind.example'),
        SYSTIMESTAMP - INTERVAL '4' DAY, SYSTIMESTAMP - INTERVAL '1' DAY);

INSERT INTO TICKETS (COMPANY_ID, SUBJECT, DESCRIPTION, CATEGORY_ID, PRIORITY, STATUS, CREATED_BY, CREATED_AT, UPDATED_AT)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Acme Corp'),
        'Export to CSV is missing columns',
        'The ticket export drops the Priority and Assigned Agent columns.',
        (SELECT CATEGORY_ID FROM CATEGORIES WHERE CATEGORY_NAME='Bug'),
        'Medium', 'New',
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='anna@acme.example'),
        SYSTIMESTAMP - INTERVAL '2' DAY, SYSTIMESTAMP - INTERVAL '2' DAY);

INSERT INTO TICKETS (COMPANY_ID, SUBJECT, DESCRIPTION, CATEGORY_ID, PRIORITY, STATUS, CREATED_BY, ASSIGNED_TO, CREATED_AT, UPDATED_AT)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Acme Corp'),
        'Request access to billing module',
        'Please grant the finance team read access to the billing dashboard.',
        (SELECT CATEGORY_ID FROM CATEGORIES WHERE CATEGORY_NAME='Access Request'),
        'Low', 'Assigned',
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='aaron@acme.example'),
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='mike@northwind.example'),
        SYSTIMESTAMP - INTERVAL '1' DAY, SYSTIMESTAMP - INTERVAL '20' HOUR);

-- Globex (created by george)
INSERT INTO TICKETS (COMPANY_ID, SUBJECT, DESCRIPTION, CATEGORY_ID, PRIORITY, STATUS, CREATED_BY, ASSIGNED_TO, CREATED_AT, UPDATED_AT)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Globex Inc'),
        'Dashboard loads slowly for large accounts',
        'The reporting dashboard takes 15+ seconds to load for accounts with many records.',
        (SELECT CATEGORY_ID FROM CATEGORIES WHERE CATEGORY_NAME='Bug'),
        'High', 'In Progress',
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='george@globex.example'),
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='mike@northwind.example'),
        SYSTIMESTAMP - INTERVAL '6' DAY, SYSTIMESTAMP - INTERVAL '3' HOUR);

INSERT INTO TICKETS (COMPANY_ID, SUBJECT, DESCRIPTION, CATEGORY_ID, PRIORITY, STATUS, CREATED_BY, CREATED_AT, UPDATED_AT)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Globex Inc'),
        'Add a dark mode option',
        'Requesting a dark theme for the agent console to reduce eye strain.',
        (SELECT CATEGORY_ID FROM CATEGORIES WHERE CATEGORY_NAME='Feature Request'),
        'Low', 'New',
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='george@globex.example'),
        SYSTIMESTAMP - INTERVAL '3' DAY, SYSTIMESTAMP - INTERVAL '3' DAY);

INSERT INTO TICKETS (COMPANY_ID, SUBJECT, DESCRIPTION, CATEGORY_ID, PRIORITY, STATUS, CREATED_BY, ASSIGNED_TO, CREATED_AT, UPDATED_AT, RESOLVED_AT)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Globex Inc'),
        'Password reset email not received',
        'Users report the password reset email never arrives; checked spam folders.',
        (SELECT CATEGORY_ID FROM CATEGORIES WHERE CATEGORY_NAME='Incident'),
        'High', 'Resolved',
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='george@globex.example'),
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='mike@northwind.example'),
        SYSTIMESTAMP - INTERVAL '8' DAY, SYSTIMESTAMP - INTERVAL '5' DAY, SYSTIMESTAMP - INTERVAL '5' DAY);

-- Initech (created by ivan) — only Lena covers Initech
INSERT INTO TICKETS (COMPANY_ID, SUBJECT, DESCRIPTION, CATEGORY_ID, PRIORITY, STATUS, CREATED_BY, ASSIGNED_TO, CREATED_AT, UPDATED_AT)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Initech'),
        'API rate limit is too low',
        'Our integration hits the 100 req/min ceiling during nightly syncs.',
        (SELECT CATEGORY_ID FROM CATEGORIES WHERE CATEGORY_NAME='Question'),
        'Medium', 'Assigned',
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='ivan@initech.example'),
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='lena@northwind.example'),
        SYSTIMESTAMP - INTERVAL '2' DAY, SYSTIMESTAMP - INTERVAL '1' DAY);

INSERT INTO TICKETS (COMPANY_ID, SUBJECT, DESCRIPTION, CATEGORY_ID, PRIORITY, STATUS, CREATED_BY, ASSIGNED_TO, CREATED_AT, UPDATED_AT, RESOLVED_AT, CLOSED_AT, CSAT_SCORE)
VALUES ((SELECT COMPANY_ID FROM COMPANIES WHERE COMPANY_NAME='Initech'),
        'Invoice PDF is corrupted on download',
        'Downloaded invoice PDFs will not open; the file appears truncated.',
        (SELECT CATEGORY_ID FROM CATEGORIES WHERE CATEGORY_NAME='Bug'),
        'Critical', 'Closed',
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='ivan@initech.example'),
        (SELECT USER_ID FROM APP_USERS WHERE EMAIL='lena@northwind.example'),
        SYSTIMESTAMP - INTERVAL '12' DAY, SYSTIMESTAMP - INTERVAL '9' DAY,
        SYSTIMESTAMP - INTERVAL '10' DAY, SYSTIMESTAMP - INTERVAL '9' DAY, 5);

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

-------------------------------------------------------------- TICKET_HISTORY --
-- Assignment + status-change trail for the two in-progress tickets and the closed one.
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

COMMIT;
