# Interaction

Purpose: Design how components behave — the full state set, forms, feedback and latency, overlays, selection, search, and attention devices — with exact defaults that a base model gets wrong or omits.

Read when:
- The request involves component states, forms, loading/error/empty behavior, modals/overlays, selection, tables, search, or where to place attention.

Skip when:
- The task is multi-screen flow structure → `journeys.md`.
- You need animation timing/easing values → `motion.md` (this file references it, never restates it).
- You need numeric accessibility floors (contrast, target size, focus, zoom) → `accessibility.md`.

Inputs: the component or surface; its data conditions; the platform; the action's reversibility and frequency.

Produces: a state-complete interaction spec — every state, feedback timing, error/recovery behavior, and the one primary action per view.

## Contents
- The eight-state model
- Feedback and latency ladder
- Forms
- Input-field state discipline
- Overlays and modals
- Confirm, undo, and destructive actions
- Selection and mass actions
- Search
- Tabs and scroll areas
- State machines
- Laws that set defaults
- Attention devices
- Static polish
- Motion moments

## The eight-state model

Every interactive element is designed in eight states — **default, hover, focus, active, disabled, loading, error, success** — and every data region additionally has **empty**. This is the canonical state set for the pack; other references point here. "Keyboard users never see hover": design hover *and* focus separately (`:focus-visible`, never `outline:none` without a replacement). Missing states are the fastest tell of an unfinished interface. Disabled is exempt from contrast requirements (its low contrast is intentional).

## Feedback and latency ladder

Perceived-latency thresholds (Doherty) govern *when* to show feedback — distinct from animation duration:

| Wait | Response |
|---|---|
| <100ms | Acknowledge with a state change; button visual state on press regardless of completion |
| 100ms–1s | Subtle indicator (skeleton/opacity); autocomplete first suggestions <300ms |
| 1–3s | Clear loading state; skeleton matching final layout over a spinner |
| >3s | Determinate progress + estimate; offer background/notify |

**Never show a loading state for actions under ~400ms** — the spinner flash is itself disruptive (delay the spinner 300–500ms; minimum display 500ms once shown). Toasts auto-dismiss 4–6s, errors persist until resolved, max one at a time (queue the rest), pause on hover/focus. Feedback hierarchy, most-preferred first: inline/contextual → component-level → page-level → system. **Minimum feedback rule:** animate the element itself (the button), not a separate toast, when that communicates the result.

## Forms

**Single column** almost always (two columns disrupt field-order reading). **Labels above** the field (fast scan, length-resilient); never placeholder-as-only-label. **Validate on blur, not on keystroke** (complex/cross-field on submit; debounce real-time 300–500ms); error message directly **below** the field. **Mark the minority** (required or optional, whichever is fewer). Placeholder shows a **format example** (`+358 40 123 4567`, `01 Jan 2026`), not an instruction. Correct `type`/`inputmode` for the right mobile keyboard and autofill; `autocomplete` on contact/address/payment. Input-type mapping: ≤5 options → radios (all visible); 6+ → select; dates → picker, never freeform. Error copy states cause + fix: "Email must include @", not "Invalid". Disable submit only when known-invalid or in-flight — never at idle on long forms.

## Input-field state discipline

**Border width stays constant across all states** — signal state changes via background/outline/box-shadow, never by changing border-width (that shifts layout). Reserve a transparent focus-outline slot up front. Hover = background 4–6% darker. Input height = button height (44px floor). Reserve a right-edge slot (~24px) for a status icon and a `min-height` for the helper line so validation doesn't reflow. Disabled = three channels (opacity ~0.5, `not-allowed`, `aria-disabled`), never color alone.

## Overlays and modals

Choose the lightest surface that fits, by whether the user can keep using the rest of the app:

Tooltip (hover ~300–400ms, none on focus, no interactive content) → Popover → Dropdown (add search at >8–10 items) → Bottom sheet (mobile) → Drawer (320–480px) → **Modal** (scrim, blocking) → Full-screen. Modals: native `<dialog>` + `showModal()` for focus trap, `inert` on the background, first focus to the first interactive element (not the close button); center explicitly. Body scrolls, header/footer stay fixed. **No stacked modals** (an IA smell — use a popover-in-modal instead). On mobile, replace centered modals with bottom sheets. Dropdown clipping inside `overflow:hidden` is the #1 generated-code bug → CSS Anchor Positioning or a portal, and flip near edges.

## Confirm, undo, and destructive actions

**Undo beats confirm.** Reversible/low-stakes → act immediately + a 5–10s Undo toast; routine confirmations breed dialog blindness. Confirm only irreversible, high-cost, wide-scope, or account-level actions: title names the specific entity ("Delete project: Website Redesign?", not "Are you sure?"), the body lists exact consequences ("47 tasks, 3 milestones, all files"), the destructive button carries the action verb (not OK/Yes) and Cancel holds default focus so Enter can't delete. Highest-risk actions require typing the entity name. For every critical action, ensure ≥3 layers of defense (constraint → warning → feedback → undo/recovery); soft-delete with ~30-day retention. Prevent, don't punish: date picker over free text, disabled option over a post-submit error.

## Selection and mass actions

The **entire row/card is the hit area**, not the 16px checkbox (the checkbox is an indicator, not the sole path). A mass-action toolbar appears on selection, leads with the count ("3 selected"), and names the count on destructive actions. Select-all is per-page plus an explicit "select all 247" extend. Per-row actions on hover; sticky header + sticky first column for wide tables.

## Search

Autocomplete after 2–3 characters; limit suggestions to **5–8** (Hick's law); order recent → trending → predicted; bold the typed portion. **Zero-results is a retention moment, never a blank page** — confirm the query, suggest typo corrections and broader terms, offer browse/support; treat it as a UX failure, not a search failure. Design for search-as-navigation (users type "settings", "invoices"); persist the query for refinement; keep it fully keyboard-navigable. Logged queries are the most honest feedback you have.

## Tabs and scroll areas

Tabs: **2–7** sharing context (>7–8 → sidebar); roving tabindex (active `0`, others `-1`); manual activation (Enter) if switching fetches data; never disable the active tab; persist in the URL (`?tab=`) or localStorage, never sessionStorage; one level, no nested tabs. Scroll: avoid inner scroll by default (page scroll is universally understood); one axis only, never `overflow:auto` on both; never hijack/auto-scroll (exception: a chat auto-scrolls only when already at bottom, else shows a "new messages" indicator).

## State machines

Model one machine per concern. Eliminate impossible states (no loading + error at once); every state has an exit (no dead ends); each state maps to a UI representation. Canonical flows — Form: `idle→editing→validating→submitting→success/error→idle`. Fetch: `idle→loading→success/error, error→retrying`. **Optimistic UI** only when success >99%, reversible, low-stakes (like/toggle/rename) with rollback — never payments, deletions, or irreversible actions.

## Laws that set defaults

**Fitts:** target = interactive area, not the icon (a 16px icon can carry a 44px tap area — expand with padding); screen edges/corners are infinite-size targets (good for persistent nav); keep destructive actions small and distant. **Hick:** reduce *simultaneous* choices; group before cutting; **three pricing tiers** is the conventional sweet spot. **Miller — corrected:** the "7±2" myth applies to chunks; the realistic working-memory limit is **~4±1 (Cowan 2001)** — don't cite "7 items", cite chunking. Practical caps: ≤5 nav items, ≤4 fields per group, ≤4 dashboard metrics; show 3–5 named onboarding phases, not a raw step count.

## Attention devices

**Von Restorff / isolation:** reserve the single boldest color exclusively for the primary CTA; isolation works only when one item deviates and the surroundings are consistent ("if everything is differentiated, nothing is"). It must survive grayscale and all states. **One primary action per view.** **Zeigarnik:** show progress ("Step 2 of 3") on multi-step tasks. **Peak-end:** engineer a delight peak and a strong close.

## Static polish

**Concentric radius:** a nested rounded element's `outerRadius = innerRadius + padding` (equal radius on parent and child is the most common thing that makes UI feel off). **Tabular numbers:** any dynamic number (counters, prices, timers, table columns) gets `font-variant-numeric: tabular-nums` to stop layout shift. **Optical alignment:** icon-side padding ≈ text-side − 2px; nudge play triangles ~2px right.

## Motion moments

Disambiguate which motion a moment warrants, then take timing/easing from `motion.md`: loading → skeleton that cross-fades to content; success → check draw (fade + path stroke); error → per-segment shake with auto-revert; surface reveal → dropdown (anchored, origin-aware) vs modal (centered, no anchor) vs panel (slides into a region). If two transitions fit, prefer the lower-overhead one. Match on what the motion *does*, and honor `prefers-reduced-motion` for every moment (gentler, not zero).
