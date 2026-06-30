---
description: Propagate a brief change across all ticketing-project artifacts (HTML, XLSX, PPTX, CLAUDE.md, memory) and verify consistency.
argument-hint: <what changed in the brief, e.g. "added a FUTURE scope tier; expanded FR-25 attachments">
---

# /sync-docs — keep every project artifact in lockstep with the brief

The change to propagate: **$ARGUMENTS**

`docs/ticketing-system-brief.md` is the **single source of truth**. Your job is to
make every other artifact agree with it, then prove it with the verifier. Work the
steps in order; do not skip the final verify.

> If `$ARGUMENTS` is empty, treat this as a **reconcile** run: skip step 1 and just
> drive every artifact back into agreement with the current brief (steps 2–6).

## Targets (the six things that must agree)
1. `docs/ticketing-system-brief.md` — **canonical**. Everything else derives from it.
2. `docs/ticketing-system.html` — hand-built one-pager (text-edit).
3. `docs/Ticketing-Requirements.xlsx` — binary (edit via `tools/sync_docs.py`).
4. `docs/Ticketing-Kickoff.pptx` — binary (edit via `tools/sync_docs.py`).
5. `CLAUDE.md` — the scope summary + data-model + APIs tables (text-edit).
6. Project memory — `…/memory/apex-ticketing-project.md` (+ one-line `MEMORY.md` entry).

Out of scope by design: `Ticketing_System_Requirements.docx`, `page-build-guide.md`,
`docs/mockups/`. Don't touch them unless the user asks.

## Step 1 — Land the change in the brief first
If the change isn't already in `ticketing-system-brief.md`, apply it there now. The brief
is the contract; never let a derived doc lead it. Common change shapes and where they live
in the brief: scope moves (§1 scope lists + §3 FR `*(MUST|SHOULD|COULD)*` tags), roles (§2),
data model (§5 table list + ERD), decisions (§8), pages (§6).

## Step 2 — See current state
Run: `python tools/sync_docs.py inspect`
This prints every scope-relevant value across all artifacts side by side, plus the live
PPTX slide-6 scope text. Use it to know exactly what to change and to spot pre-existing drift.

## Step 3 — Propagate to each artifact

**HTML — `docs/ticketing-system.html`** (counts/FRs are hardcoded in *four* places — change all that apply):
- **FR data array** `const REQS=[…]` (~L526–555): one row per FR `["FR-n","text","Category","PRIORITY"]`. Add/edit/retag here.
- **Scope legend** `.lrow … <span class="cnt">N</span>` (~L298–300): MUST/SHOULD/COULD counts.
- **Filter buttons** `data-f="…"><span class="b">N</span>` (~L334–337): the All/Must/Should/Could counts. ⚠️ historically drifted — keep all four right.
- **Donut total** `class="big">N` (~L296) and the "**N** concrete requirements" lead (~L332): the requirement total.
- New tier with its own colour? Add a `.badge.FUTURE{…}` rule near the badge CSS (~L131) and a legend row; pick a distinct swatch.

**XLSX — `docs/Ticketing-Requirements.xlsx`** (never hand-edit the binary; use the helper):
- Scope counts: `python tools/sync_docs.py xlsx-set-scope --must 17 --should 8 --could 4` (TOTAL auto-recomputes; `--future N` optional).
- One requirement: `python tools/sync_docs.py xlsx-upsert-fr --id FR-25 --priority COULD --category "Stretch" --text "…"` (inserts if absent, updates in place if present). Repeat per changed FR.

**PPTX — `docs/Ticketing-Kickoff.pptx`** (scope is **slide 6**):
- Targeted text change: `python tools/sync_docs.py pptx-replace --slide 6 --find "old text" --replace "new text"`.
- Adding a whole new scope column/tier is structural — if `pptx-replace` can't express it, open the deck and say so rather than forcing it. Keep the existing layout/branding.

**CLAUDE.md:** update the **Scope (MoSCoW)** counts `MUST (17) · SHOULD (8) · COULD (4)`, the COULD list, the **data model (N tables)** line + table, and the APIs table if the change introduces a new API. Keep it terse — it's AI-facing context, not prose.

**Project memory** (`…/memory/apex-ticketing-project.md`): update the scope/roles/data-model/decision lines the change touches, convert any relative dates to absolute, and keep the `MEMORY.md` one-liner accurate. This keeps future sessions correct.

## Step 4 — Verify (the gate — do not skip)
Run: `python tools/sync_docs.py verify`
It parses the brief as truth and diffs the HTML, XLSX, and CLAUDE.md counts + FR sets against
it. **It must print `OK` (exit 0).** If it reports drift, fix the named spot and re-run until clean.
(The verifier doesn't read the PPTX prose or memory — eyeball those against step-2 `inspect`.)

## Step 5 — Report
Show the user a short table: each artifact, what changed, and the final `verify` result.
Call out anything you changed that wasn't in the original request (e.g. fixing pre-existing drift).

## Step 6 — Remind, don't auto-do
- This repo is **not** a git repo — there's nothing to commit; just save the files.
- If the change affected anything user-facing in `docs/mockups/`, remind the user it's out of
  this command's scope and needs the manual redeploy in `CLAUDE.md`.

## Conventions
- Brief leads; derived docs follow. Never reconcile by changing the brief to match a stale doc
  unless the user says the brief itself is wrong.
- Preserve each artifact's existing formatting/branding — make the *smallest* edit that lands the change.
- Counts come from the brief's FR `*(priority)*` tags. The FUTURE/WON'T tier is a vision list,
  **not** numbered FRs — it does not change MUST/SHOULD/COULD totals.
