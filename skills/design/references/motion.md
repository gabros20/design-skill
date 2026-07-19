# Motion

Purpose: The canonical source for all motion values and doctrine — duration/easing scale, the
should-it-animate gate, physical correctness, springs, interruptibility, performance, and reduced
motion. Every other reference points here for motion numbers; none restate them.

Read when:
- Choosing durations, easing curves, or spring parameters for any transition or animation.
- Deciding whether an element should animate at all, or reviewing motion for over-animation.
- Specifying gesture, scroll, or native fluid-interface motion, or a reduced-motion fallback.

Skip when:
- The task is static layout, color, or type with no state change (but honor the restraint gate).

Inputs:
- The interaction's frequency, purpose, and surface register (is-the-product vs serves-the-product).

Produces:
- Motion tokens (duration/easing/spring) and a per-moment reduced-motion spec.

## Contents
- Canonical scale (durations, easing) — the numbers everything else cites
- The gate: should it animate?
- Physical correctness and press feedback
- Open/close asymmetry and match-on-usage
- Springs and interruptibility
- Performance
- Scroll and reveal motion
- Reduced motion
- Restraint gate and review standards

## Canonical scale

Durations, keyed by what the motion does (not by pixel count alone):

| Tier | Duration | Uses |
|---|---|---|
| instant / micro | 80–150ms | button press, toggle, hover/focus feedback |
| standard UI | 150–300ms | menu, tooltip, dropdown, tab slide, input focus |
| large surfaces | 300–500ms | modal, drawer, accordion, page section |
| marketing entrances | 400–800ms | hero reveal, onboarding, first-run delight |

- **Exit ≈ 60–75% of enter.** Opening invites; closing gets out of the way.
- **Stagger 30–80ms per item; total sequence ≤500ms.** For long lists, shrink the offset or cap the
  number of staggered items rather than letting the last one arrive late.
- **UI stays under 300ms.** Above that needs a reason (a large surface or a marketing moment).
- **80ms is the "instant" perception threshold**; below ~100ms motion is imperceptible, so a
  press/toggle can be 0ms and often should be.
- **Duration by distance** (within a tier): 8–16px → 100–150ms; 50–100px → 150–250ms; full-screen →
  250–350ms. Travel scales down with frequency, up with ceremony.

Easing — built-in CSS curves are too weak; use strong custom curves:

- **Entrances: ease-out** (expo/quart/quint family). Fast in, settle. `ease-out` at 200ms *feels*
  faster than `ease-in` at 200ms because it front-loads the moment the user watches.
- **Exits: ease-in.** **On-screen movement / morph: ease-in-out.** **Loops/progress: linear only.**
- **Never `ease-in` on UI entrances; never `linear` for UI.** Both read as blocks in review.

```css
--ease-out-expo:   cubic-bezier(0.16, 1, 0.3, 1);
--ease-out-quart:  cubic-bezier(0.25, 1, 0.5, 1);
--ease-out-quint:  cubic-bezier(0.22, 1, 0.36, 1);   /* default UI ease-out */
--ease-in-out-expo:cubic-bezier(0.87, 0, 0.13, 1);
--ease-drawer:     cubic-bezier(0.32, 0.72, 0, 1);   /* iOS-like sheet */
```

The curves above are a palette, not a per-element free-for-all: **commit to at most 3 easing curves
system-wide** (typically one ease-out, one ease-in-out, one exit) so motion reads as one system.
**Bounce/overshoot is reserved for gesture-driven physical interactions** (drag-release, throw,
toggle). It is not a default entrance easing; a bouncy modal or hover reads dated.

## The gate: should it animate?

Answer in order — most candidates should be rejected. Cap a whole app at ~5–7 deliberate moments.

1. **Frequency.** 100+×/day (keyboard shortcuts, command palette) → **no animation, ever** (Raycast
   has no open/close animation — optimal for something used hundreds of times a day). Tens/day →
   reduce hard. Occasional (modals/drawers/toasts) → standard. Rare/first-run → can add delight.
2. **Purpose.** Name one of: feedback · state indication · spatial consistency · explanation ·
   preventing a jarring change. "It looks cool" on a frequently-seen element is not a purpose.
3. **Speed.** Must fit the scale above.
4. **Function.** Decoration on dense/functional UI hinders; a functional graph is better still.

**Match on usage, not the nearest number.** A value is wrong when it does not fit *what the motion
does*, not because it is off by 20ms. Infer the usage (modal close, dropdown open, tooltip, page
slide), then pick the tier whose usage matches. A "300ms modal close" belongs in the standard tier
(fast, ~150ms) because it is a close, despite the number.

## Physical correctness and press feedback

- **Never animate from `scale(0)`** — nothing in the real world appears from nothing. Start
  `scale(0.95–0.97)` + `opacity: 0`.
- **Origin-aware popovers:** scale from the trigger (`transform-origin` at the trigger). **Modals are
  exempt — they stay `transform-origin: center`.** This exemption recurs everywhere; preserve it.
- **Press feedback:** default `transform: scale(0.95–0.98)` on `:active` for any pressable element,
  `transition: transform ~160ms ease-out`. **Never below 0.95.** *A design system may instead
  declare stillness — no press transform at all — as a legitimate alternative (cite nothing-design /
  dembrandt's "component stability" rule); tokens override this default. Name which stance the system
  takes; do not mix.*
- **Blur to mask an imperfect crossfade:** add `filter: blur(2px)` during a two-state overlap to read
  as one transformation. Keep blur <20px (expensive, especially Safari); never on a plain fade or a
  color/theme change.

## Open/close asymmetry and interruptibility

- **Closes are faster and quieter than opens.** The enter phase carries the distance/blur; the exit
  drops them so a close doesn't fling content. **Never bounce and never delay a close** — dismissal
  must feel instant. (Symmetric exceptions — tabs, accordion, icon/text swap, page side-by-side —
  read as one reversible motion; keep the same duration both ways.)
- **Interruptibility is the single most important native principle.** Every animation must be
  redirectable at any moment; never lock out input during a transition. Animate from the *current
  presentation value*, not the target (reading the target causes a visible jump).
- **Transitions over keyframes for interruptible UI** — transitions retarget mid-flight; keyframes
  restart from zero. Use transitions/springs for anything rapidly re-triggered (stacking toasts,
  toggles, drags).

## Springs and gestures

Springs simulate physics with no fixed duration — for drag with momentum, "alive" elements,
interruptible gestures. Prefer the two designer-friendly Apple params over mass/stiffness/damping:

- **Damping ratio** (overshoot): 1.0 = critically damped, no bounce; <1.0 overshoots. Most UI = 1.0.
- **Response** (how fast it reaches target, in seconds; not "duration"). Add bounce (~0.8 damping)
  only when the gesture carried momentum (flick/throw/drag-release). Apple values: move/reposition
  1.0 / 0.4; rotation 0.8 / 0.4; drawer 0.8 / 0.3. Keep bounce subtle (0.1–0.3).
- On gesture end, continue at the finger's exact velocity (no seam). **Momentum projection** (Apple's
  shipped form, not the physics-textbook `v²/2a`): `project(v, decel=0.998) = (v/1000)·decel/(1−decel)`;
  project the resting point, then snap to the nearest target. Dismiss on velocity `> ~0.11`, not a
  distance threshold. Rubber-band soft boundaries (resistance rising with overshoot) rather than a
  hard stop.

## Performance

- **Animate `transform` and `opacity` only** (skip layout + paint, run on the GPU). `width/height/
  margin/padding/top/left` and `box-shadow` spread trigger reflow — avoid. Never `transition: all`.
- **CSS animations beat JS under load** (CSS runs off the main thread; rAF-based JS stutters while the
  page loads/scripts/paints). Use CSS for predetermined motion, JS/springs for dynamic/interruptible.
- **Framer Motion `x`/`y`/`scale` shorthands are NOT hardware-accelerated** — under load they drop
  frames; use the full `transform` string.
- **CSS variables are inheritable:** driving a child's transform by setting a var on a parent recalcs
  every child. In a drawer with many items, set `element.style.transform` directly.
- Pause looping/offscreen animation; cap DPR/particle count; hold 60fps on a mid-range phone.

## Scroll and reveal motion

- Prefer pure CSS: `animation-timeline: view()` + `animation-range: entry 0% cover 40%`, gated behind
  `@media (prefers-reduced-motion: no-preference)` so the default state is the finished, visible one.
- Universal fallback: IntersectionObserver (`threshold: 0.15`, `rootMargin: '0px 0px -10% 0px'`),
  add a class, unobserve after first reveal, stagger `i*80ms`, cap ~6 items. Reveal once; no parallax
  on text or critical content; keep displacement small.

## Reduced motion

`prefers-reduced-motion: reduce` means **gentler, not zero, decided per moment** — keep opacity/color
transitions that aid comprehension; drop movement, parallax, overshoot, and large traveling objects.
The no-motion state must be the complete, usable state (ship a kill-switch for every motion device).
Also honor `prefers-reduced-transparency` (frostier/solid surfaces) and `prefers-contrast: more`.
Gate hover motion behind `@media (hover: hover) and (pointer: fine)` — touch fires false hovers.

## Restraint gate and review standards

When unsure whether motion feels right, **the strongest move is to delete it.** Remedial order:
delete → reduce → fix easing → fix origin/physicality → make interruptible → move to GPU →
asymmetric timing → polish (blur/stagger/spring) → accessibility & cohesion. Flag on sight:
`transition: all`, `scale(0)`/pure-fade entrances, `ease-in`/weak easing on deliberate motion,
animation on 100+/day actions, UI >300ms with no reason, `transform-origin: center` on a
trigger-anchored popover, keyframes on toasts/toggles, animating layout props, missing
reduced-motion, symmetric enter/exit on press/hold. Named motion tells live here; general anti-default
tells are in visual-direction.md — do not restate them.
