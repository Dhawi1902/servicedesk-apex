# Step 1b — Outlook / Microsoft 365 Login (Social Sign-In) — OPTIONAL

> Extends **Step 1 (Login)**. Adds "Sign in with Outlook / Microsoft" alongside the existing
> APEX Accounts login. **Nothing in the schema or isolation views changes** — the post-auth
> procedure from Step 1 already keys on email and already fails closed, so this is pure
> configuration.
>
> **Do Step 1 first.** This builds on the app items, `STAMP_TENANT_CONTEXT`, and
> authorization schemes it created.

---

## Why this is drop-in (read once)

Your tenant context is stamped by `STAMP_TENANT_CONTEXT` (`sql/06_auth_context.sql`). It looks
up the logged-in user **by email**:

```sql
WHERE UPPER(a.EMAIL) = UPPER(V('APP_USER'))
```

APEX Accounts logs a user in *as their email*; Microsoft Sign-In will set `APP_USER` to the
Microsoft **email claim**. Same key → the **same** post-auth procedure fires, unchanged, and
stamps `APP_COMPANY_ID` / `APP_ROLE` from `APP_USERS`.

**The security model is unchanged:** a valid Microsoft login with **no matching `APP_USERS`
row** hits `NO_DATA_FOUND` → `ORA-20002` → login aborts → no tenant context → every `V_MY_*`
view denies access. **Authenticated by Microsoft ≠ authorized into a tenant.** Provisioning
stays in your `APP_USERS` / `USER_ROLES` tables, never in Azure.

---

## What you need before starting

| # | Thing | Who provides it |
|---|-------|-----------------|
| 1 | **Microsoft Entra ID (Azure AD) admin access** to register an app | Your M365/Entra tenant admin |
| 2 | The **public HTTPS URL** your APEX app runs on (the redirect target) | Your APEX/ORDS host, e.g. `https://apex.yourco.com` |
| 3 | Outbound TLS from the DB/APEX instance to `login.microsoftonline.com` (wallet + network ACL) | Your DBA — SSO fails silently without it |

> ⚠️ **Seeded demo users can't use this.** `anna@acme.example`, `sara@northwind.example`, etc.
> are fake domains with no Microsoft mailboxes. Outlook login only works for **real staff in
> your Microsoft tenant** who also have an `APP_USERS` row. Keep APEX Accounts as the demo login.

---

## Part A — Azure / Microsoft Entra side (App Registration)

Done in the **Entra admin center** (<https://entra.microsoft.com> → *Applications → App registrations*).

### A1. Register the application
- **New registration**
- **Name:** `Service Desk (APEX)`
- **Supported account types:** **Single tenant** — *Accounts in this organizational directory
  only*. This means only staff in your Microsoft tenant can complete the login. (Avoid the
  "any org + personal Microsoft accounts" option unless you deliberately want external tenants.)
- **Redirect URI:** platform **Web**, value =
  `https://<your-apex-host>/ords/apex_authentication.callback`
  (older mod_plsql/EPG deployments use `.../apex/apex_authentication.callback`). Must match your
  deployed hostname **exactly**.
- **Register.**

### A2. Copy the identifiers
From the app's **Overview**, copy:
- **Application (client) ID** → APEX Web Credential *Client ID*
- **Directory (tenant) ID** → used in the discovery URL below

### A3. Create a client secret
- **Certificates & secrets → New client secret** → set an expiry → **copy the Value now**
  (it's only shown once) → APEX Web Credential *Client Secret*.

### A4. Grant the claims that reveal the email
- **API permissions → Add a permission → Microsoft Graph → Delegated permissions** →
  add `openid`, `profile`, `email` → **Add permissions**.
- (Grant admin consent if your tenant requires it.)

**Discovery URL** (you'll paste this into APEX):
```
https://login.microsoftonline.com/<tenant-id>/v2.0/.well-known/openid-configuration
```

---

## Part B — APEX side

### B1. Store the client secret as a Web Credential
**Shared Components → Web Credentials → Create**
- **Name:** `MS_ENTRA_OAUTH`
- **Authentication Type:** **OAuth2 Client Credentials**
- **Client ID:** the Application (client) ID from A2
- **Client Secret:** the secret Value from A3
- **Apply Changes**

> Storing the secret here (not in the auth scheme) keeps it **out of the app export**.

### B2. Create the Social Sign-In authentication scheme
**Shared Components → Authentication Schemes → Create → Based on a pre-configured scheme
from the gallery → Social Sign-In.**

| Setting | Value |
|---------|-------|
| **Name** | `Microsoft 365 Sign-In` |
| **Scheme Type** | Social Sign-In |
| **Credential Store** | `MS_ENTRA_OAUTH` (from B1) |
| **Authentication Provider** | **OpenID Connect Provider** |
| **Discovery URL** | the `.well-known/openid-configuration` URL from Part A |
| **Scope** | `openid email profile` |
| **Username** | `email` &nbsp;*(if UPN ≠ mailbox in your tenant, use `preferred_username` — see B4)* |
| **Post-Authentication Procedure Name** | `stamp_tenant_context` |

**Apply Changes.** (Leave it **not Current** for now — see Part C.)

> The **Username = email** setting is the linchpin: it makes `V('APP_USER')` equal the
> Microsoft email, which is exactly what `STAMP_TENANT_CONTEXT` looks up.

### B3. (Optional) friendlier "not provisioned" message
Out of the box, a Microsoft user with no `APP_USERS` row sees the raw `ORA-20002` on the login
page — functionally correct (login is blocked), just ugly. To show a clean message instead,
either edit the scheme's error display, or wrap the raise in `06_auth_context.sql`'s handler
text (e.g. *"Your account isn't set up in the Service Desk — contact your administrator."*).
The **fail-closed behaviour must stay** — never let an unmatched user through.

### B4. Match the claim to `APP_USERS.EMAIL`
The one real gotcha: the Entra claim you key on must equal the string in `APP_USERS.EMAIL`.
- `email` claim = the user's mailbox address (usually what you want).
- `preferred_username` = the UPN, which is *usually* the mailbox but can differ
  (e.g. `flast@corp.onmicrosoft.com` UPN vs `first.last@company.com` mailbox).

The lookup is already case-insensitive (`UPPER(...) = UPPER(...)`). **Verify one real account
end-to-end before rollout.**

---

## Part C — Coexistence with APEX Accounts

An APEX app has **many** authentication schemes defined but **exactly one Current**. Pick a pattern:

- **Simplest (recommended):** keep **Application Express Accounts** as **Current** for the demo;
  leave `Microsoft 365 Sign-In` defined but not current. Flip the Current scheme with one click
  when you want staff to use Outlook. Zero risk to the seeded-user demo.
- **Both live at once:** build a small "choose how to sign in" launch page that deep-links to
  each scheme's login URL. More work — not needed for the 16 July demo.

Because **both** schemes drive the same `STAMP_TENANT_CONTEXT` keyed on email, a user in
`APP_USERS` works identically no matter which scheme authenticated them. No data-model change.

---

## Part D — Test

1. **Provision a test staff account:** ensure a real Microsoft user of yours has a matching
   `APP_USERS` row (same email) with an active role in `USER_ROLES`.
2. Make `Microsoft 365 Sign-In` **Current** (or use its login URL).
3. Sign in with that Microsoft account → you should land in the app.
4. **Developer Toolbar → Session → Application Items:** confirm `APP_USER_ID`,
   `APP_COMPANY_ID`, `APP_ROLE` are stamped correctly (same as an APEX Accounts login).
5. **Fail-closed test:** sign in with a Microsoft account that has **no** `APP_USERS` row →
   login must be **rejected** (no app, no session state). This is the critical isolation test.

---

## Isolation Checklist

- [ ] Client secret lives in a **Web Credential**, not in the scheme or an item
- [ ] Scheme **Username = the email claim**; it matches `APP_USERS.EMAIL` for a real account
- [ ] Post-Authentication Procedure = `stamp_tenant_context` (reused, unchanged)
- [ ] A Microsoft user **without** an `APP_USERS` row is **denied** (fail-closed verified)
- [ ] Inactive `APP_USERS` accounts are still blocked (the `ORA-20001` check still applies)
- [ ] `06_auth_context.sql` was **not** weakened — the `NO_DATA_FOUND` → raise stays

---

**Next:** back to the main build order in [`README.md`](README.md). Keep APEX Accounts as the
demo login for 16 July; switch the Current scheme to Microsoft 365 for production staff rollout.
