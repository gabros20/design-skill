# Visual direction

Purpose: Decide the point of view before any craft — which register a surface serves, which aesthetic lane it commits to, the one bold move it spends, and the named defaults it must refuse. This is the canonical home of the anti-default catalog.

Read when:
- Starting a new surface, or a result reads generic, templated, or "AI-generated."
- Choosing a register, aesthetic direction, or accent strategy, or judging whether a design is distinctive enough.

Skip when:
- The direction is already set and the task is executing one craft layer — go to typography, layout-composition, color, imagery-depth-decoration, or motion.
- The concern is native-platform convention (surface-ios / surface-android) or a scored review (critique).

Inputs:
- Brief, audience, subject, and any brand assets or reference sites.

Produces:
- A one-line design read, a named register and aesthetic lane, the one bold move, and a refuse-list of defaults this design will not use.

## Contents

- Register doctrine (sets the bar)
- Read the brief before generating
- One bold move + restraint
- Aesthetic lanes (commit to one)
- The anti-default catalog
- Templated-design diagnosis and system fixes
- Four validation checks

## Register doctrine (sets the bar)

Name the register per **surface**, not per project — most products are mostly-serve with a few is-the-product surfaces (a marketing home over an app).

- **Design IS the product** — brand sites, landing pages, launch microsites, anything whose job is to be noticed and remembered. **Distinctiveness is the bar.** Take the aesthetic risk; type can be a character; one signature element carries the boldness.
- **Design SERVES the product** — dashboards, app shells, settings, dense daily tools. **Earned familiarity is the bar**; a fluent Linear/Figma/Notion user must trust and operate it on sight, and surprise is a cost. This register *inverts* several defaults: prefer fixed `rem` scale over fluid `clamp()`; give every interactive component its full state set; reach for proven patterns; **Inter/SF Pro is a legitimate pick here, not a tell.**

## Read the brief before generating

Emit a one-line **design read** before any code: *"Reading this as: <page kind> for <audience>, with a <vibe> language, leaning toward <aesthetic lane>."* The **audience picks the aesthetic, not your taste.** Quiet constraints — accessibility-first, public-sector, regulated, trust-commerce, kids — **override aesthetic preference.** If ambiguous, ask exactly **one** question; if confidently inferable, do not ask.

Intent must be **systemic**: if the intent is "warm," then surfaces, text, borders, accents, and type are all warm. Check every token against the stated intent; a token that contradicts it is a defect.

## One bold move + restraint

The shared trait of Linear/Stripe/Vercel/Notion is **restraint, not a look.** Spend boldness in **one** place per section or page and keep everything else quiet. Two bold moves compete and cancel; zero reads generic. Test: *"What is the one thing someone remembers about this section?"* — if the answer is "nothing" or "five things," recompose.

## Aesthetic lanes (commit to one)

Pick a lane and execute its whole system; **match implementation complexity to the vision** (a Rams interface is ~50 lines, a Neo-Memphis ~300 — both correct). **Rotate lanes; do not reuse the same one across consecutive projects.**

| Lane | Load-bearing signature |
|---|---|
| Dieter Rams functionalist | Monochrome + one functional accent; strict grid; borders over shadows |
| Swiss / International | Black + white + one primary; rigid multi-column, asymmetric balance; flat |
| Japanese minimal (Ma) | Muted naturals; line-height 1.8–2.0; whitespace 2–3× normal; slow 400–600ms fades |
| Brutalist / tactical | Mono or heavy display; 90° corners, exposed box model; hairline `grid gap:1px` |
| Scandinavian | Warm whites, no pure black; rounded 8–12px; soft large-blur low-opacity shadows |
| Editorial / magazine | Display serif + drop caps; 3–5 column grid, full-bleed; folio numbers, thin rules |
| Warm-monochrome (Notion-adj.) | Off-black text never `#000`; paired pastel accent+text; 1px `#EAEAEA` cards |
| Soft / awwwards depth | Concentric "double-bezel" nesting; custom `cubic-bezier(0.32,0.72,0,1)`; magnetic hover |

## The anti-default catalog

Refuse, then replace. These are **brand-register** tells — the serve register legitimately uses many of them (system fonts, familiar cards). Keep the dated/exact values; they are the point.

**Color**
- Cream/sand/beige body background — the saturated AI default of 2026. Suspect the band **OKLCH L 0.84–0.97, C < 0.06, hue 40–100**; tell token names `--paper --cream --sand --linen --parchment --bone --flour --wheat --ivory`.
- Premium-consumer palette (cookware/wellness/luxury/DTC) — banned defaults: backgrounds `#f5f1ea #f7f5f1 #fbf8f1 #efeae0 #ece6db #faf7f1 #e8dfcb`; accents `#b08947 #b6553a #9a2436 #9c6e2a #bc7c3a`; text `#1a1714 #1a1814`. Rotate to a different family (cold-luxury silver+chrome, forest+bone+amber, cobalt+cream, terracotta+slate) and never ship the same premium palette twice in a row.
- Purple→blue / indigo→violet gradients, on text or as accent ("the lila rule"); saturated diagonal linear gradients (purple→pink); gradient-filled hero headings; dark mode + single acid-green/vermilion glow. Max one accent, saturation < 80%.

**Typography** (full discipline in typography.md)
- Display `clamp()` max **≤ 6rem** (bigger reads generated); display letter-spacing floor **≥ −0.04em**. Inter body everywhere (legit only in serve). Reflex-reject font list is canonical in typography.md.

**Layout / structure**
- Tiny uppercase tracked eyebrow above every section (appears on 55–95% of generations — the definition of a tell); numbered section markers `01/02/03` as decoration; nested-card soup; icon-tile stacks (grid of rounded squares, each one line-icon + label); **centered three-up identical feature cards**; split-header ("left big headline + right small explainer"); left-text/right-image hero as the reflexive first instinct.

**Harness defects (GPT/Codex)**
- Ghost card (`1px` border + `box-shadow` ≥16px blur on the *same* element); over-rounding (`border-radius: 32px+`); hand-drawn / `feTurbulence` "sketchy" filters; `repeating-linear-gradient` candy stripes; meta-criticism copy ("not your average…", "this isn't just another…").

**Production tells (refuse by default)**
- Version labels in hero (`V0.6`/`BETA`); "Brand · No.01" sub-eyebrows; section-number eyebrows (`00/INDEX`, `001·Capabilities`); `01/4` pagination on tiles; middle-dot `·` more than once per line; decorative status dots on every list/nav item; `<br>`-broken italicized headlines; vertical rotated text; crosshair/hairline grid decoration; **div-based fake product UI / terminal / dashboard in the hero (the #1 tell)**; fake version footers; "Quietly trusted by"; poetic sidebar labels ("Field notes"); weather/locale strips ("LIS 14:23 · 18°C"); live counters ("Reservation 412 of 800"); hero-bottom decoration strips ("BRAND. MOTION. SPATIAL."); scroll cues ("Scroll to explore"). **Invented metrics** (fabricated `92%`/`4.1×`/`48k`) — a stat is never the hero's sole headline; use a real number or `—` + a labeled block. **Re-drawn chrome** (fake browser bars/phone frames/code windows) — use a real screenshot.

**Calibration — the current AI cluster.** Three looks recur regardless of subject: (1) warm cream `~#F4F1EA` + high-contrast serif display + terracotta accent; (2) near-black bg + a single acid-green/vermilion accent; (3) broadsheet with hairline rules, zero radius, dense columns. Each is legitimate for *some* brief; treat it as a default to justify, not a destination to drift into.

## Templated-design diagnosis and system fixes

Models default to the statistically common pattern (hero + three feature cards + testimonials + pricing + CTA, Inter, indigo-600/slate-900, even spacing, stock imagery) because it is the average of a billion tutorials. Fixes are **system-level**, not cosmetic: kill the default font; kill the default color and ration ONE accent; break the symmetric grid once; vary section rhythm; use real content; add one or two intentional micro-interactions; and above all **feed references, not adjectives** — "make it premium" yields the average, a specific reference ("a 1970s university lecture handout") steers the whole system.

**Second-order rebound.** Avoid the predictable anti-default rebound (fintech-not-navy → terminal dark; wellness-not-sage → brutalist mono). The rebound is as templated as what it flees.

## Four validation checks

- **Swap** — swap your typeface/layout for the usual one; where nothing would feel different is where you defaulted.
- **Squint** — blur the screen; hierarchy and the one focal point must survive.
- **Signature** — point to five specific elements that carry this design's signature; if you can't, it's generic.
- **Token** — read the CSS variable names aloud; `--ink`/`--parchment` evoke a world, `--gray-700`/`--surface-2` evoke a template.
