# Universal Theme 26.1 — CSS selector & styling cheat-sheet

Grounding reference for styling Oracle APEX (Universal Theme) **without inventing
selectors**. APEX's reference under `reference/plsql|javascript|apexlang/` is *API*
docs and says nothing about CSS classes — this file fills that gap.

> **Use it like this:** target a class **from this file or from HTML you have actually
> seen rendered** (the running APEX page's real DOM). Never style a selector you guessed.
> If a class you need isn't here, confirm it in the Universal Theme sample app (below) or
> by inspecting the real DOM — then add it here.
>
> ⚠️ **`docs/mockups/` are NOT a UT-selector source.** They reproduce the UT *look* with
> their own class names (`.card`, `.btn`, `.badge`, …), not Universal Theme classes. Use
> them for **design intent** — the agreed palette, status colors, and which UT component
> each element maps to (see §12) — never to copy a selector.

**Canonical sources (for WebFetch / verification):**
- Universal Theme sample app — the authoritative live class catalog: <https://apex.oracle.com/ut>
- UT component pages show the exact markup + template-option classes for every component.

---

## 1. Decide *where* the style goes (prefer declarative — code is the last resort)

APEX styling is mostly **not** custom CSS. Climb this ladder top-down; only drop to the
next rung when the one above can't do it:

1. **Theme Roller** (running app → Dev Toolbar → *Customize → Theme Roller*). Colors,
   fonts, header/nav style, corner radius, global spacing. Saves a **custom Theme Style**
   — no hand-written CSS. This is how you do a *branded theme* (a SHOULD item) correctly.
2. **Template Options** (component → *Appearance → Template Options*). Per-component
   variants (region accent, card layout, button look, alert type) via checkboxes. Each
   option just toggles a `t-…--modifier` class from this file.
3. **Component "CSS Classes"** (component → *Appearance → CSS Classes*). Add **your own**
   hook class (e.g. `kpi-card`) to a component, then write CSS against *that* class.
   Cleaner and more stable than fighting UT's internal markup.
4. **Custom CSS**, in order of scope:
   - Page-only: Page Designer → page → *CSS → Inline*.
   - App-wide: a static app file (`#APP_IMAGES#app.css`) referenced under
     *Shared Components → User Interface Attributes → CSS → File URLs*, **or** Theme
     Roller's *Custom CSS* box.
   - Never inline `style="…"` on individual elements.

**CSS custom properties:** modern UT exposes design tokens on `:root` (Theme Roller writes
them). Overriding a token cascades everywhere a component uses it — cleaner than overriding
rules. Confirm exact token names by inspecting `:root` on the running app or Theme Roller's
Custom CSS pane (don't guess token names).

---

## 2. Page & body scaffold

| Selector | What it is |
|---|---|
| `body.t-PageBody` | Page body; carries modifier classes for page mode (modal, no-nav, etc.) |
| `.t-Body` / `.t-Body-main` / `.t-Body-content` / `.t-Body-contentInner` | Main content column wrappers |
| `.t-Header` / `.t-Header-logo` / `.t-Header-nav` | Top navigation bar |
| `.t-Body-side` / `.t-TreeNav` | Side navigation menu |
| `.t-BreadcrumbRegion` / `.t-Breadcrumb` | Breadcrumb bar |
| `.t-Footer` | Page footer |

A region's **Static ID** renders as the element `id` → `#my_region` is the most precise,
collision-free hook when a component class isn't enough.

---

## 3. Regions

| Selector | What it is |
|---|---|
| `.t-Region` | Any region wrapper |
| `.t-Region-header` / `.t-Region-title` / `.t-Region-headerItems` | Region header + title + header buttons/items |
| `.t-Region-body` | Region content area |
| `.t-Region-buttons` (`.t-Region-buttons--left` / `--right`) | Header button groups |

**Template-option modifiers** (set via Template Options, not typed by hand):
`.t-Region--noBorder`, `.t-Region--noPadding`, `.t-Region--scrollBody`,
`.t-Region--hideHeader`, `.t-Region--removeHeader`, `.t-Region--showMatte`,
`.t-Region--accent1` … `.t-Region--accent13` (accent colors).

---

## 4. Cards (great for the dashboard & ticket lists)

Region wrapper `.t-Cards` with per-card `.t-Card`:

| Selector | What it is |
|---|---|
| `.t-Card-wrap` | Clickable card wrapper |
| `.t-Card-icon` / `.t-Card-iconText` | Card icon |
| `.t-Card-title` / `.t-Card-subtitle` / `.t-Card-titleWrap` | Card heading |
| `.t-Card-desc` | Card body text |
| `.t-Card-info` | Secondary/footer info |
| `.t-Card-body` | Body container |

**Region modifiers** (Template Options): `.t-Cards--basic`, `.t-Cards--displayIcons`,
`.t-Cards--block`, `.t-Cards--2cols` / `--3cols` / `--4cols`, `.t-Cards--featured`,
`.t-Cards--styleA` / `--styleB`, `.t-Cards--animColorFill`, `.t-Cards--compact`.

---

## 5. Badge List (ideal for dashboard KPI tiles)

| Selector | What it is |
|---|---|
| `.t-BadgeList` | The badge-list region |
| `.t-Badge` | One badge tile |
| `.t-Badge-value` / `.t-Badge-label` | Big number + caption |

**Modifiers:** `.t-BadgeList--circular`, `.t-BadgeList--cards`, `.t-BadgeList--stacked`,
`.t-BadgeList--large`, `.t-BadgeList--2cols` / `--3cols` / `--4cols`.

---

## 6. Buttons

| Selector | What it is |
|---|---|
| `.t-Button` | Base button |
| `.t-Button--hot` | Primary/emphasis button |
| `.t-Button--simple` / `.t-Button--noUI` / `.t-Button--link` | Reduced chrome → no chrome → link-look |
| `.t-Button--icon` / `--iconLeft` / `--iconRight` | Icon buttons |
| `.t-Button--large` / `--small` / `--stretch` | Sizing |
| `.t-Button--gapRight` / `--gapTop` | Spacing helpers |
| `.t-Button-label` / `.t-Icon` | Inner label / icon |

Button **color/semantic** (success/warning/danger) is set via the button's
*Template Options → Type/Color*, or a `u-color-*` class — don't assume a `--danger`
modifier exists; confirm in the sample app.

---

## 7. Alerts / inline messages

`.t-Alert` with type modifiers: `.t-Alert--success`, `.t-Alert--warning`,
`.t-Alert--danger`, `.t-Alert--info`. Layout: `.t-Alert--horizontal`, `.t-Alert--page`,
`.t-Alert--defaultIcons`. Parts: `.t-Alert-icon`, `.t-Alert-title`, `.t-Alert-body`,
`.t-Alert-content`.

---

## 8. Forms & items

| Selector | What it is |
|---|---|
| `.t-Form-fieldContainer` | One field row (label + input) |
| `.t-Form-labelContainer` / `.t-Form-label` | Label side |
| `.t-Form-inputContainer` / `.t-Form-itemWrapper` | Input side |
| `.t-Form-field` | The styled input shell |
| `.apex-item-text` / `.apex-item-select` / `.apex-item-textarea` | The actual input elements |

Container modifiers (Template Options): `.t-Form-fieldContainer--floatingLabel`,
`.t-Form-fieldContainer--stretchInputs`, `.t-Form-fieldContainer--radioButtonGroup`.

---

## 9. Reports & grids (markup is deep — inspect before styling)

| Selector | What it is |
|---|---|
| `.a-IRR` / `.a-IRR-table` / `.a-IRR-toolbar` | Interactive Report |
| `.a-GV` / `.a-IG` / `.a-GV-table` / `.a-GV-cell` / `.a-GV-headerLabel` | Interactive Grid |
| `.t-Report` / `.t-Report-report` / `.t-Report-cell` | Classic Report |

IR/IG generate large, dynamic DOM trees. **Always inspect the rendered HTML** and prefer a
column **HTML Expression** or a static region/column CSS class over deep descendant
selectors — UT internals here are the most likely to drift.

---

## 10. Utility classes (`u-`)

Single-purpose helpers you can add via a component's *CSS Classes*:

- **Text:** `.u-textCenter`, `.u-textLeft`, `.u-textRight`, `.u-textUppercase`,
  `.u-bold`, `.u-normal`.
- **Float:** `.u-pullLeft`, `.u-pullRight`.
- **Color palette:** `.u-color-1` … `.u-color-44` (UT's 44-swatch palette; suffix variants
  exist for text/background — confirm the exact suffix on the sample app's *Color Classes*
  page before relying on it).

For spacing, prefer Template Options (region padding, button gap) over guessed margin
utilities.

---

## 11. Failure modes to avoid

- **Hallucinated selectors** — a rule on a class that doesn't exist silently does nothing.
  If it's not in this file or in HTML you've seen, don't style it.
- **Over-specific descendant chains** into UT internals — they break on the next UT patch.
  Add your own hook class instead.
- **Custom CSS where Theme Roller / Template Options already do it** — violates the
  declarative-first convention and is harder for the mixed team to maintain.
- **Styling as security** — hiding rows/buttons with CSS is never tenant isolation; the
  data already shipped to the browser. (See `tenant-isolation-auditor`.)

---

## 12. Project design intent (agreed in `docs/mockups/`)

The mockups encode the team's agreed look. These are **values to reuse**, applied through
the delivery vectors in §1 — not selectors. Source: `docs/mockups/assets/apex-mock.css`.

### Brand target

> **Oracle APEX 26.1 default Universal Theme — Vita, light.** Light header, light side nav,
> a single APEX-blue accent, small (4px) corner radius. Deliver this in **Theme Roller**
> (it's the default Theme Style with the primary color set), not custom CSS.

### Brand palette

| Token | Hex | Use |
|---|---|---|
| Primary / hot / link | `#0572ce` | Buttons (`--hot`), links, active nav, accents |
| Primary dark (hover) | `#045aa3` | Hover/active of the primary |
| App body background | `#f4f5f7` | Page background |
| Surface | `#ffffff` | Regions / cards |
| Border | `#d8dce0` (light `#e6e9ec`) | Region/table borders, dividers |
| Text | `#2f3237` | Body text |
| Muted | `#707880` | Secondary text, captions |
| Radius | `4px` | Corner radius |

### Ticket **status** colors (badge bg / text)

| Status | Background | Text |
|---|---|---|
| New | `#eef2ff` | `#4338ca` |
| Assigned | `#e0f2fe` | `#0369a1` |
| In Progress | `#fef9c3` | `#92740a` |
| On Hold | `#f3f4f6` | `#4b5563` |
| Resolved | `#dcfce7` | `#15803d` |
| Closed | `#e5e7eb` | `#374151` |

### Ticket **priority** colors (badge bg / text)

| Priority | Background | Text |
|---|---|---|
| Low | `#f1f5f9` | `#475569` |
| Medium | `#e0f2fe` | `#0369a1` |
| High | `#ffedd5` | `#c2410c` |
| Critical | `#fee2e2` | `#b91c1c` |

In real APEX, render these as badges via a column **HTML Expression** or a small CSS class
on the value, keyed off the status/priority — don't hand-color individual rows.

### Mockup element → real UT component (build-time mapping)

| Mockup class | Build it in APEX as |
|---|---|
| `.card` (`.card-hd` / `.card-bd`) | A **Region** (`.t-Region` + header/body) — §3 |
| `.stat` tiles | **Badge List** region for KPIs — §5 (or a Cards region) |
| `table.t` | **Interactive Report / Grid** — §9 |
| `.badge` (`.st-*` / `.pr-*`) | Status/priority badges — colors above |
| `.btn` / `.btn-hot` | **Button** (`.t-Button` / `--hot`) — §6 |
| `.field` | **Form** item (`.t-Form-fieldContainer`) — §8 |
| `.timeline` / `.comment` | History/comments region (classic report or list) |
| `.modal` | A **Dialog** page (modal) |

---

## 13. Keeping this file current

This file is only useful while it's **trusted** — the `apex-ui-stylist` agent targets only
selectors it finds here. Most of §2–§10 comes from general Universal Theme knowledge, not
from this instance, so confirm and extend it as the real app gets built:

- **Add a selector only after you've seen it.** Inspect the element in a running APEX 26.1
  page (browser DevTools) or the UT sample app (<https://apex.oracle.com/ut>). Never add a
  class from memory.
- **Record enough to trust it later** — the class, the component/part it belongs to, and
  where you confirmed it.
- **Mark, don't assert, the unsure ones.** If a modifier is plausible but unconfirmed, label
  it "verify" (as a few button/utility entries already are) rather than stating it as fact.
- **Prune wrong entries immediately.** A class that doesn't exist on this instance makes CSS
  silently do nothing — a wrong entry is worse than a missing one. Delete it.
