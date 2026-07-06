# Step 19 — Left Navigation Menu (build LAST)

> The very last build step, and deliberately so. Every entry in the left navigation menu
> links to a page **by number**. Build it earlier and half the entries would point at pages
> that don't exist yet. Now that all 18 pages (01–18) are built, wiring the menu links them
> into one navigable app — and lets you do a full role-by-role click-through as the final check.

---

## Step 1: Set Up the Navigation Menu

**Shared Components → Navigation Menu** → edit the default list (Desktop Navigation Menu). Delete/replace the auto-generated entries with these (use **Create List Entry** → **Create and Create Another** to go faster):

| Seq | List Entry Label | Image/Class | Page | Authorization | Condition Type | Condition Expression |
|-----|-----------------|-------------|------|---------------|----------------|---------------------|
| 10 | Home | fa-home | 1 | | | |
| 20 | Dashboard | fa-dashboard | 2 | | | |
| 30 | Ticket Queue | fa-list | 3 | | | |
| 40 | Raise a Ticket | fa-ticket | 5 | | Expression | `:APP_ROLE != 'SUPPORT_AGENT'` |
| 50 | Projects | fa-folder | 10 | | | |
| 60 | My Company | fa-building | 12 | | Expression | `:APP_ROLE IN ('CLIENT_USER','CLIENT_ADMIN')` |
| 70 | Companies | fa-building | 8 | `IS_SYSTEM_ADMIN` | | |
| 80 | Users | fa-users | 9 | | Expression | `:APP_ROLE IN ('SYSTEM_ADMIN','CLIENT_ADMIN')` |
| 90 | Categories | fa-tags | 13 | `IS_SYSTEM_ADMIN` | | |
| 100 | SLA Policies | fa-clock | 15 | `IS_SYSTEM_ADMIN` | | |
| 110 | Agent-Project Mapping | fa-link | 16 | `IS_SYSTEM_ADMIN` | | |
| 120 | Audit Log | fa-file-text | 17 | `IS_SYSTEM_ADMIN` | | |
| 130 | My Profile | fa-user | 14 | | | |

For entries with **Condition Expression**: scroll to the Conditions tab, set Condition Type = `Expression`, paste the expression.
For entries with **Authorization**: go to the Authorization tab, pick the scheme from the dropdown.

> Hiding a nav entry is NOT security. Each target page already carries its own authorization from when you built it — the menu conditions just keep the UI tidy per role.

---

## Step 2: Test It

Log in as each user and confirm the menu adapts to their role:

| User | Expected Nav Entries |
|------|---------------------|
| `sara@northwind.example` (System Admin) | All 13 entries |
| `anna@acme.example` (Client User) | Home, Dashboard, Ticket Queue, Raise a Ticket, Projects, My Company, My Profile |
| `bob@acme.example` (Client Admin) | Same as Anna + Users |
| `mike@northwind.example` (Agent) | Home, Dashboard, Ticket Queue, Projects, My Profile |

Then click every entry as each role — this is the final end-to-end pass, confirming each page
loads (and that authorization holds if you URL-tamper to a page the menu hides).

---

## Isolation Checklist

- [ ] Every admin nav entry carries `IS_SYSTEM_ADMIN` — **and** its target page also carries its own authorization (menu conditions are UI tidiness, not the fence).
- [ ] A Client User who URL-jumps to an admin page they don't see in the menu still hits an authorization error (the page gate, not the menu, is what stops them).

---

**That's the whole app — all 18 pages plus navigation.** Run the `tenant-isolation-auditor` agent over each page before demoing.
