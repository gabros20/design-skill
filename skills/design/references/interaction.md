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

Every interactive element is designed in eight states — **default, hover, focus, active, disabled, loading, error, success** — and every data region additionally has **empty**. This is the canonical state set for the pack; other references point here. "Keyboard users never see hover": design hover *and* focus separately (`:focus-visible`, never `outline:none` without a replacement). Missing states are the fastest tell of an unfinished interface. Disabled is exempt from contrast requirements and has no hover at all.

- **Beyond the visual eight**, name the data states (one item, long list, partly loaded, refreshing stale data), account states (plan, role, owner vs member, viewer without dead controls) and feature states (flag off, trial, limit reached, locked); pair them only where the product branches on the pair.
- **When states co-occur**, the spec states which wins (default loading > selected > focus > hover). An animated accent marks a change, not a state: a newly selected item may glow briefly, then holds a static selected style; one animated accent per view.
- **State changes never reflow:** a hover or selected weight change uses the grade axis, a multiplexed face or a reserved bold width — else colour or underline. A hover changes one property, not colour + position + shadow together.
- **One feedback treatment per role, reused** (2–3 site-wide; shipping every effect is the generic answer). On is-the-product surfaces primary targets answer in the concept's motion verb (a primary link that only recolours reads dead); utility links may just recolour. Every hover state is also the `:focus-visible` state and keeps a non-motion change under reduced motion.
- **Hit areas don't move:** hover and pick test the resting footprint, never the pose on screen, or a lifting part flickers (motion.md).

## Feedback and latency ladder

Perceived-latency thresholds (Doherty) govern *when* to show feedback — distinct from animation duration:

| Wait | Response |
|---|---|
| <100ms | Acknowledge with a state change; button visual state on press regardless of completion |
| 100ms–1s | Subtle indicator (skeleton/opacity); autocomplete first suggestions <300ms |
| 1–3s | Clear loading state; skeleton matching final layout over a spinner |
| >3s | Determinate progress + estimate; offer background/notify |

**Never show a loading state for actions under ~400ms** — the spinner flash is itself disruptive (delay the spinner 300–500ms; minimum display 500ms once shown). Toasts auto-dismiss 4–6s, pause on hover/focus, max one at a time (queue the rest); a toast carrying an action (Undo) or an error persists until dismissed. Feedback hierarchy, most-preferred first: inline/contextual → component-level → page-level → system. **Minimum feedback rule:** animate the element itself (the button), not a separate toast, when that communicates the result. **A success state appears only from a real answer:** a form with no endpoint yet validates, sends nothing and says so ("Nothing was sent — this form isn't connected yet"); a fake "Sent" is an invented outcome. An AI activity indicator maps the real lifecycle to a truthful state (a generic "working" beats a wrong specific one), disappears on done, error or cancel, announces once, and never shows a percentage it cannot know.

## Forms

**Single column** almost always. **Labels above** the field; never placeholder-as-only-label. **Validate on blur, not keystroke** (cross-field on submit; debounce real-time 300–500ms); error directly **below** the field. **Mark the minority** (required or optional, whichever is fewer). Placeholder shows a **format example** (`+358 40 123 4567`), not an instruction. Correct `type`/`inputmode`/`autocomplete` for keyboard and autofill. ≤5 options → radios; 6+ → select; dates → picker, never freeform. Error copy states cause + fix ("Email must include @", not "Invalid"). Disable submit only when known-invalid or in-flight — never at idle on long forms.

## Input-field state discipline

**Border width stays constant across all states** — signal state via background/outline/box-shadow (border-width shifts layout); reserve a transparent focus-outline slot. Hover = background 4–6% darker. Input height = button height (44px floor). Reserve a right-edge slot (~24px) for a status icon and a `min-height` for the helper line so validation doesn't reflow. Disabled = three channels (opacity ~0.5, `not-allowed`, `aria-disabled`), never color alone.

## Overlays and modals

Choose the lightest surface that fits, by whether the user can keep using the rest of the app:

Tooltip (hover ~300–400ms, 0ms on keyboard focus, no interactive content; once one in a group is open, its neighbours open instantly with no transition until the pointer leaves the group) → Popover → Dropdown (add search at >8–10 items) → Bottom sheet (mobile) → Drawer (320–480px) → **Modal** (scrim, blocking) → Full-screen. Modals: native `<dialog>` + `showModal()`, `inert` background, first focus to the first interactive element (not the close button), centered; body scrolls, header/footer fixed. **No stacked modals** (an IA smell — popover-in-modal instead); on mobile, bottom sheets. Dropdown clipping inside `overflow:hidden` is the #1 generated-code bug → anchor positioning or a portal, flipping near edges.

## Confirm, undo, and destructive actions

**Undo beats confirm.** Reversible/low-stakes → act immediately + a 5–10s Undo toast; routine confirmations breed dialog blindness. Confirm only irreversible, high-cost, wide-scope, or account-level actions: title names the specific entity ("Delete project: Website Redesign?", not "Are you sure?"), the body lists exact consequences ("47 tasks, 3 milestones, all files"), the destructive button carries the action verb (not OK/Yes) and Cancel holds default focus so Enter can't delete. Highest-risk actions require typing the entity name. When it affects other people, the body names them ("The 8 members of Design lose access"); type-to-confirm is the one legitimate disabled-until-valid button. Between a plain click and a typed confirmation sits **hold-to-confirm**: a linear fill while pressed that snaps back on early release (values: motion.md). An Undo toast is never the only way back — pair it with history or trash. For every critical action, ensure ≥3 layers of defense (constraint → warning → feedback → undo/recovery); soft-delete with ~30-day retention. Prevent, don't punish: date picker over free text, disabled option over a post-submit error.

## Selection and mass actions

The **entire row/card is the hit area**, not the 16px checkbox (the checkbox is an indicator, not the sole path). A mass-action toolbar appears on selection, leads with the count ("3 selected"), and names the count on destructive actions. Select-all is per-page plus an explicit "select all 247" extend. Per-row actions on hover; sticky header + sticky first column for wide tables.

## Search

Autocomplete after 2–3 characters; **5–8** suggestions (Hick); order recent → trending → predicted; bold the typed portion. **Zero-results is a retention moment, never a blank page** — confirm the query, suggest corrections and broader terms, offer browse/support. Design for search-as-navigation ("settings", "invoices"); persist the query; fully keyboard-navigable. Logged queries are the most honest feedback you have.

## Tabs and scroll areas

Tabs: **2–7** sharing context (>7–8 → sidebar); roving tabindex; manual activation (Enter) if switching fetches data; never disable the active tab; persist in the URL (`?tab=`) or localStorage; one level, no nested tabs. Scroll: avoid inner scroll by default; one axis only; never hijack/auto-scroll (a chat auto-scrolls only when already at bottom, else shows "new messages").

## State machines

One machine per concern; no impossible states (loading + error); every state has an exit and a UI representation. Canonical flows — Form: `idle→editing→validating→submitting→success/error→idle`. Fetch: `idle→loading→success/error, error→retrying`. **Optimistic UI** only when success >99%, reversible, low-stakes (like/toggle/rename) with rollback — never payments, deletions, or irreversible actions.

## Laws that set defaults

**Fitts:** the target is the interactive area, not the icon; keep destructive actions small and distant. **Hick:** reduce *simultaneous* choices; group before cutting; three pricing tiers. **Working memory is ~4±1 chunks (Cowan 2001)** — the "7±2" figure is a myth; cite chunking. Practical caps: ≤5 nav items, ≤4 fields per group, ≤4 dashboard metrics; 3–5 named onboarding phases, not a raw step count.
## Attention devices

**Isolation:** the single boldest colour goes only to the primary CTA and works only when the surroundings are consistent; it survives grayscale and all states. **One primary action per view;** more than three secondary actions go behind a menu. Show progress ("Step 2 of 3") on multi-step tasks. **Delight** is sized to frequency and stakes — routine actions should just feel certain; never fake work, delay completion or invent progress to stage a moment; no jokes near money, loss or privacy; it survives the 100th use; no sound without consent.

## Static polish

**Concentric radius:** `outer = inner + padding + border` (equal radius on parent and child is the most common thing that makes UI feel off); past ~24px of padding or uneven padding, the layers are separate surfaces with their own radii, and an inner radius that computes to ≤2px stays square. **Tabular numbers:** any dynamic number gets `font-variant-numeric: tabular-nums` to stop layout shift. **Optical alignment:** icon-side padding ≈ text-side − 2px; play triangles shift toward their point (~⅙ of their width); the optical-correction set is in brand-mark.md. **Browser surfaces are design:** selection, caret, native-control accent, scrollbar, focus ring, link underline offset and `theme-color` take palette tokens — a default blue selection on a warm page is the cheapest tell (code: `frontend` `css-craft.md` "Browser-drawn surfaces").

## Motion moments

Disambiguate which motion a moment warrants, then take timing/easing from `motion.md` (sequencing: `choreography.md`): loading → skeleton that cross-fades to content; success → check draw (fade + path stroke); error → per-segment shake with auto-revert; surface reveal → dropdown (anchored, origin-aware) vs modal (centered, no anchor) vs panel (slides into a region). If two fit, prefer the lower-overhead one; honor reduced motion for every moment.
