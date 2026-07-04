# Step 18 — Audit Log (p17) (SHOULD)

> Admin-action transparency. Distinct from ticket history (page 4) — this covers admin entities.

---

## Step 1: Create the Audit Table

**SQL Workshop → SQL Commands:**

```sql
CREATE TABLE ADMIN_AUDIT_LOG (
  LOG_ID       NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  USER_ID      NUMBER NOT NULL,
  ACTION       VARCHAR2(50) NOT NULL,
  ENTITY       VARCHAR2(50) NOT NULL,
  RECORD_KEY   VARCHAR2(200),
  OLD_VALUE    VARCHAR2(4000),
  NEW_VALUE    VARCHAR2(4000),
  LOGGED_AT    TIMESTAMP DEFAULT SYSTIMESTAMP NOT NULL
);
```

---

## Step 2: Add Audit Writes to Admin Pages

On each admin page's DML processes (pages 8, 9, 10, 11, 13, 15, 16), add:

```sql
INSERT INTO ADMIN_AUDIT_LOG (USER_ID, ACTION, ENTITY, RECORD_KEY, OLD_VALUE, NEW_VALUE)
VALUES (NV('APP_USER_ID'), 'UPDATE', 'COMPANY', :COMPANY_NAME, :OLD_STATUS, :NEW_STATUS);
```

---

## Step 3: Create the Page

**App Builder → Create Page → Interactive Report**
- Page Number: `17`
- Name: `Audit Log`
- **Authorization:** `IS_SYSTEM_ADMIN`

Source:

```sql
SELECT al.LOGGED_AT, u.FULL_NAME AS CHANGED_BY,
       al.ACTION, al.ENTITY, al.RECORD_KEY,
       al.OLD_VALUE, al.NEW_VALUE
  FROM ADMIN_AUDIT_LOG al
  JOIN APP_USERS u ON u.USER_ID = al.USER_ID
 ORDER BY al.LOGGED_AT DESC
```

Read-only. Escape old/new values on render.

---

## Step 4: Test It

| Test | Expected |
|------|----------|
| Make a change on page 8 | Row appears in audit log |
| Anna URL-jumps to page 17 | Authorization error |

---

## Isolation Checklist

- [ ] Page gated `IS_SYSTEM_ADMIN`
- [ ] Audit writes in same transaction as audited change
- [ ] Values escaped on render

---

**You're done with all 18 pages!** Run the `tenant-isolation-auditor` agent over each page before demoing.
