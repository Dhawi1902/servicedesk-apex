# Severity vs Priority: Why Clients Should Not Set Priority

**Prepared for:** Senior stakeholder discussion
**Date:** 2026-07-03
**Context:** Two seniors proposed that both severity AND priority should be client-set at ticket creation.

---

## Current Design (Decision K — closed, deliberate)

| Field | Set by | Purpose | Values |
|-------|--------|---------|--------|
| **Severity** | Client at creation | Business impact — "how bad is this for me?" | Critical / Major / Minor / Low |
| **Priority** | Support agent at triage | Work order — "what do we work on first?" | P1 / P2 / P3 / P4 (nullable until triage) |

**SLA targets are driven by severity** (`SLA_TARGETS` keyed on `company_id + severity`), so the client already controls response speed through severity. Priority is the support team's internal queue-ordering tool.

---

## Why Clients Should Not Set Priority

### 1. "Everything is P1"

Every client believes their issue is the most important. Given the option, rational clients will always select the highest priority. When 80% of tickets are P1, the field becomes meaningless and agents fall back to gut feel or FIFO — worse than having no priority at all.

### 2. Cross-Tenant Unfairness

We run a shared desk across multiple companies. Priority is how agents decide what to work on when two clients both say "Critical." If both clients also set P1, the field adds no information. Only the support team has cross-tenant visibility to make that call.

### 3. Triage Gate (FR-37) Becomes Dead Code

FR-37 requires priority to be set before moving to In Progress — this forces agents to consciously triage every ticket. If clients pre-fill priority, the gate is pre-satisfied and agents can skip triage entirely.

### 4. SLA Gaming

If priority ever drives SLA targets, clients will set P1 to get faster response. The SLA metrics become untrustworthy and breach rates spike artificially.

### 5. ISO 20000 Nonconformity Risk

ISO/IEC 20000-1:2018 (clause 8.7.1) assigns incident classification and prioritization to the **service provider**. Client-set priority means the provider has lost control of its incident-handling sequence — an auditor would flag this.

### 6. ITIL 4 Is Explicit

ITIL 4 Incident Management: prioritization is performed during triage by the service desk. The user provides impact (severity); the provider determines work order (priority). This separation is intentional and well-documented.

---

## What Every Major ITSM Tool Does

| System | Client sets priority? | How priority works |
|--------|-----------------------|-------------------|
| **ServiceNow** | No | Auto-calculated from Impact × Urgency matrix |
| **Jira Service Management** | No | Agent-only; customer requests default to Medium |
| **Zendesk** | No (default) | Agent-only field |
| **Freshservice** | No | Auto-calculated from Impact × Urgency matrix |
| **ManageEngine SDP** | No | Auto-calculated from Impact × Urgency matrix |

**No major ITSM platform lets clients set priority directly.**

---

## The Client Already Has a Voice

The current design gives clients meaningful control:

1. **Severity** (FR-7) — the client declares business impact at creation. Critical = fastest SLA target.
2. **Severity guidance** (FR-34) — clear descriptions help clients choose accurately, reducing inflation.
3. **Category** (FR-7) — the client classifies the type of issue.
4. **Description** — free-text detail that informs the agent's triage.

These four inputs give the support team everything they need to set priority correctly.

---

## Compromise Option: Add an "Urgency" Field (ITIL-standard)

If clients feel unheard, the ITIL-approved solution is **not** to give them priority — it's to add **urgency** as a separate client input, alongside severity (impact):

| Field | Set by | Question | Values |
|-------|--------|----------|--------|
| **Severity** (Impact) | Client | "How many people/systems are affected?" | Critical / Major / Minor / Low |
| **Urgency** *(new)* | Client | "How quickly will this get worse if not fixed?" | High / Medium / Low |
| **Priority** | System or Agent | "What order do we work on this?" | Derived from Impact × Urgency |

This is the **textbook ITIL priority model** — used by ServiceNow, Freshservice, and ManageEngine. It is already in our production roadmap (FUTURE tier: "Urgency field + Impact × Urgency = Priority matrix").

### How the Priority Matrix Works

|  | High Urgency | Medium Urgency | Low Urgency |
|--|-------------|---------------|------------|
| **Critical (Impact)** | P1 | P2 | P3 |
| **Major** | P2 | P3 | P3 |
| **Minor** | P3 | P3 | P4 |
| **Low** | P3 | P4 | P4 |

The client provides two meaningful inputs (what they know). The system derives priority (what only the provider can determine). The agent can override if needed.

### Recommendation

- **For the hackathon demo (July 16):** Keep the current two-field model (severity + priority). It is correct, ITIL-aligned, and demo-ready. Do not add urgency — it is scope creep with zero judge value.
- **For production (post-demo):** Promote the urgency field + priority matrix from FUTURE to the active backlog. This gives clients more input through the proper ITIL mechanism, not by giving them direct control over priority.

---

## Summary

| Proposal | Verdict |
|----------|---------|
| Client sets both severity and priority | **Reject** — breaks ITIL, breaks FR-37, causes priority inflation, ISO nonconformity risk |
| Current design (severity = client, priority = agent) | **Keep** — correct, ITIL-aligned, audit-ready |
| Add urgency field (Impact × Urgency = Priority) | **Accept as post-demo enhancement** — real ITIL model, gives clients more voice through the proper mechanism |

> **The client tells us what hurts (severity) and how fast it's getting worse (urgency). We decide what to work on first (priority). That's ITIL. That's what ServiceNow does. That's what we do.**
