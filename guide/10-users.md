# Step 10 — Users (p9) (MUST)

> Create, edit, deactivate users and grant roles. System Admin sees everyone, Client Admin sees their own company only.

---

## Step 1: Create the Page

**App Builder → Create Page → Interactive Grid**
- Page Number: `9`
- Name: `Users`
- Page-level **Condition:** `:APP_ROLE IN ('SYSTEM_ADMIN','CLIENT_ADMIN')`

---

## Step 2: Set the Region Source

```sql
SELECT u.USER_ID, u.FULL_NAME, u.EMAIL, u.STATUS,
       c.COMPANY_NAME, u.COMPANY_ID,
       d.DEPARTMENT_NAME, u.DEPARTMENT_ID,
       u.DEFAULT_ROLE
  FROM APP_USERS u
  JOIN COMPANIES c ON c.COMPANY_ID = u.COMPANY_ID
  LEFT JOIN DEPARTMENTS d ON d.DEPARTMENT_ID = u.DEPARTMENT_ID
 WHERE :APP_ROLE = 'SYSTEM_ADMIN'
    OR (:APP_ROLE = 'CLIENT_ADMIN' AND u.COMPANY_ID = NV('APP_COMPANY_ID'))
```

---

## Step 3: Configure Columns

| Column | Editable by | Notes |
|--------|-------------|-------|
| `FULL_NAME` | all | |
| `EMAIL` | insert only | Login — can't change after creation |
| `STATUS` | all | Active / Inactive switch |
| `COMPANY_ID` | System Admin only | **Condition:** `:APP_ROLE = 'SYSTEM_ADMIN'` |
| `DEPARTMENT_ID` | all | LOV cascading from company |
| `DEFAULT_ROLE` | all | LOV from user's `USER_ROLES` rows |

---

## Step 4: Add Role Management

- Client Admin may only grant: `CLIENT_USER`, `CLIENT_ADMIN`
- System Admin may grant all 4 roles
- **Validate server-side:**

```sql
IF :APP_ROLE = 'CLIENT_ADMIN'
   AND :NEW_ROLE NOT IN ('CLIENT_USER','CLIENT_ADMIN') THEN
  raise_application_error(-20040, 'Only System Admin can grant this role.');
END IF;
```

---

## Step 5: Auto-Create APEX Account on New User

```sql
BEGIN
  APEX_UTIL.CREATE_USER(
    p_user_name       => :P9_EMAIL,
    p_web_password    => 'ChangeMe1!',
    p_change_password_on_first_use => 'Y',
    p_email_address   => :P9_EMAIL
  );
EXCEPTION
  WHEN OTHERS THEN
    IF SQLCODE = -20000 THEN NULL;
    ELSE RAISE;
    END IF;
END;
```

---

## Step 6: Force Company on Client Admin Inserts

```sql
IF :APP_ROLE = 'CLIENT_ADMIN' THEN
  :P9_COMPANY_ID := NV('APP_COMPANY_ID');
END IF;
```

---

## Step 7: Test It

| Test | Expected |
|------|----------|
| Sara (System Admin) | Sees all 18 users |
| Bob (Client Admin) | Sees only Acme users; company not editable |
| Bob grants SYSTEM_ADMIN role | Server-side validation rejects |
| Create new user as Bob | Company forced to Acme; APEX account created |
| Anna (Client User) URL-jumps to page 9 | Blocked |

---

## Isolation Checklist

- [ ] Client Admin can't tamper another company's user
- [ ] `COMPANY_ID` forced on Client Admin inserts
- [ ] Role-grant validation server-side
- [ ] No password data in `APP_USERS`

---

**Next:** move to `11-projects.md`.
