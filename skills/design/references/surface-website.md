# Surface: Website

Purpose: Design marketing, brand, landing, and portfolio sites — surfaces whose job is to persuade and
inform, where the design IS the product. Owns the premium↔information dial, section craft and hero
discipline, the phone composition, finish details, and the award tier. What the page contains and in
what order is page-anatomy.md.

Read when:
- The request is a marketing site, landing page, brand/launch microsite, portfolio, or any page selling or explaining to a visitor.
- You are setting how "premium" vs "dense with proof" a niche site should read, or crafting its sections and hero.

Skip when:
- The surface is product/app UI (→ surface-webapp) or native (→ surface-ios / surface-android).
- The need is generic craft: register doctrine → visual-direction.md; tells → anti-defaults.md; grids/spacing → layout-composition.md; type/color/motion → their leaves.
- The flow is a wizard, checkout, or multi-step purchase → journeys.md.

Inputs: brief (niche, ideal client, the page's one job), brand assets, register decision.
Produces: dial setting, section-by-section craft, hero spec, phone composition, finish list, anti-boring pass.

Numbers here are Restrained-lane defaults; the direction contract's dimensions override them; floors (marked by their basis) do not.

## Contents
- The premium↔information dial
- Section craft and hero discipline
- Compose the phone
- Finish details
- Award / experimental tier

## The premium↔information dial

A niche site must be **premium** (noticed, remembered, trusted — signaled by what you leave OUT:
whitespace, restraint, one idea) AND deliver **information + proof** (structured density: scannable IA,
credentials, case results, social proof by the CTA).

**Don't blend — sequence:** restrained emotional hero → progressively denser proof as the visitor
self-qualifies → low-friction action. **Set the dial by stakes and emotion, not taste:** higher
money/health/legal risk → proof leads, register conservative; lifestyle/prestige → premium can lead;
on Persuade pages proof carries equal final weight; on Experience surfaces the work is the proof. Never let aesthetics bury the phone number, the credentials,
or the next step.

**Per-vertical expectations** (finance navy + crisp white; law navy/charcoal/burgundy/muted gold;
healthcare soft blues/greens/teal; luxury mono/neutral, gallery whitespace, slow motion): matching one
is the category-standard choice (visual-direction.md), made on purpose for a conservative register —
never by default; a hue picked only for the category is a tell (anti-defaults.md). Curation:
architects ~8–25 projects; photographers ~15–40 (20-60-20 rule); artists 10–15.

## Section craft and hero discipline

A boring section is one flat plane (text + image-square on solid fill). A great section has **depth**
(≥2 Z-planes), **tension** (asymmetry/scale contrast), and **one deliberate move**. **Restrained
default: one or two devices per section, executed precisely** (maximal lanes commit many in one system).

**Anti-boring pass (Persuade default)** — skip any line the lane's fail-if list overrides (flat in
Swiss/Rams; centred symmetry in quiet luxury, ceremonial and hospitality). Yes: depth (≥2 planes or one
unifying texture/glow/shadow) · one focal point · a contrast move · one signature · grayscale test ·
spacing system. No: centered-everything · three identical cards as the
only idea · same rhythm every section · weak heading↔body contrast · `01/02/03` on non-sequences · more
than two bold moves fighting.

**Composition anchors:** the left-text / right-image hero is the single most-overused AI pattern —
allowed only when the picture is the strongest thing the brief has. Rotate anchors: centered-over-bg,
bottom-left/right over image, stacked-center, image-as-canvas, off-grid editorial, mini-minimalist,
plus three from the job: **Counter** (the action is the visual — the subscribe field beside the latest
issue, the next booking times, the buy box set large), **Index** (the content list is the visual — the
lineup, the menu), **Banner** (50–60% tall so the first section shows; docs, references, utilities).
Default ≥3 anchors on a Persuade site, the same anchor ≤2 sections in a row; a lane whose concept is
repetition records it in the contract.

**Persuade-hero default:** fits the initial viewport (`min-height: clamp(60vh, 75dvh, 88dvh)`,
footprint 70–90%); full-viewport heroes use `dvh`/`svh`, never `100vh` (iOS toolbar); headline ≤2 lines desktop; subtext ≤20 words and ≤3–4 lines; CTAs
visible without scroll; hero top padding max `pt-24`; **max 4 hero text elements** (brand strip or a
passing label, headline, subtext, primary CTA + max one secondary). Default out of the hero: decorative tagline
below CTAs (one line answering commitment or cost — "14 days, no card" — is part of the CTA), trust
micro-strip, feature bullets, avatar row, version labels; price, rating and proof belong in it when the
visitor's job is *buy*. A logo wall lives UNDER the
hero.

**Screen budget (Persuade default; index and news fronts budget by scan):** about 80 words per 900px window at 1440, labels included; the first screen holds at
most six things (nav, one proof line, headline, one sentence, one CTA group, one visual) and no more
than about four compete anywhere. Fill a thin screen with scale or a picture, never more copy. **Fold
checks:** at 1280×800 the headline, sentence, primary action and the visual's focal point are visible;
at 1920×1080 the container is capped (gutters grow, columns don't) and the hero still fits. The first
screen ends on a whole element or a deliberate bleed (≥~96px), never a card sliced by a sliver; re-check
with the longest realistic headline.

## Compose the phone

Compose the 390px layout, don't shrink it: re-tune the type scale, collapse grids to 1–2 columns with
deliberate offsets, step section spacing down. Replace hover-dependent ideas — a hover-preview list
becomes inline thumbnails, cursor effects become tap or scroll equivalents, a pinned horizontal pan
becomes a native scroll-snap row. Adapt the signature moment; never drop it without a replacement.
Phone-only failures: a hero row set to fill height leaves a hole on tall phones; a display word sized
from the viewport breaks mid-word; a section's top row collides with fixed chrome (layout-composition.md).

## Finish details

Selection colour, scrollbar and focus ring from the palette (interaction.md); a favicon that matches the
identity and a social image composed for 1200×630, not a crop (brand-mark.md); the footer as a final
composition; a 404 in the concept's voice with a way back; legal links; no dead links (`#` is linked or
visibly disabled); one aspect-ratio family, one image reveal and one image hover across the site.

## Award / experimental tier

WebGL shader/liquid backgrounds, canvas particle systems, custom lerping cursors (the lag is the premium
feel), View Transitions, generative accents. Discipline: **one signature moment, not twenty.** Propose
2–3 ambitious directions with their cost (support, performance, complexity) before building any;
lazy-init; hold 60fps on mid-range; scroll-driven scenes advance by keyboard scroll and never trap focus (WCAG 2.1.1, 2.1.2); provide a static reduced-motion fallback; gate cursor effects
behind `@media (hover: hover)`. Over a 3D or moving hero, the headline and CTA read within ~3s.

**Judged on the public jury weights** — Design 40%, Usability 30%, Creativity 20%, Content 10% (re-check
the evaluation page; weights change). Anchors: 6 clean but any template · 7 a clear type system, an
intentional palette, one or two memorable compositions · 8 every frame composed, type used as image,
rhythm varied on purpose, every detail designed (hover, focus, captions, footer, 404) · 9 inevitable,
recognisable from a crop. Punished: a polished template with no point of view, effects bolted on, hard
cuts between states, a WebGL hero at ~20fps on a mid-range phone, a multi-MB page, a long progress bar,
a squeezed phone layout, a hidden native cursor, primary hovers that only recolour, a concept that
freezes when the visitor stops. **Award-winning is not accessible:** juries rarely tab, run axe or
throttle a phone, and measured winners shipped serious violations — take craft from them, floors from
accessibility.md.
