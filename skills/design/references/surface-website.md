# Surface: Website

Purpose: Design marketing, brand, landing, and portfolio sites — surfaces whose job is to persuade and inform, where the design IS the product. Owns page macrostructure, section craft, the premium↔information dial, per-vertical register, the product-narrative question chain, and the award tier.

Read when:
- The request is a marketing site, landing page, brand/launch microsite, portfolio, or any page selling or explaining to a visitor.
- You are choosing page shape, section sequence, or how "premium" vs "dense with proof" a niche site should read.

Skip when:
- The surface is product/app UI (→ surface-webapp) or native (→ surface-ios / surface-android).
- The need is generic craft: register doctrine + anti-default catalog → visual-direction.md; grids/spacing → layout-composition.md; type/color/motion → their leaves.
- The flow is a wizard, checkout, or multi-step purchase → journeys.md (this file owns only the landing question chain).

Inputs: brief (niche, ideal client, the page's one job), brand assets, register decision.
Produces: macrostructure choice, section-by-section composition, dial setting, anti-boring pass.

## Contents
- Structural anti-templating (macrostructures)
- The premium↔information dial
- Section craft and hero discipline
- Product-narrative question chain
- Section-repetition bans
- SaaS sequence
- Award / experimental tier

## Structural anti-templating

**Structural sameness is the AI fingerprint, not visual sameness.** Two briefs must yield different *sites*, not color-swaps of one skeleton.

**21 macrostructures** (each bundles heading placement + body composition + divider + button voice + image treatment + reveal): Bento Grid · Long Document · Marquee Hero · Stat-Led · Workbench · Conversational FAQ · Manifesto · Photographic · Quote-Led · Specimen · Catalogue · Letter · Index-First · Narrative Workflow · Split Studio · Feature Stack · Type Specimen · Portfolio Grid · Map/Diagram · Ecosystem Index · Component Playground. Vague brief → pick from the first ten. **Specimen is not a default** (its fall-through was the most-repeated failure).

**Domain → offer a trio of categorically different macros** (never default one): podcast → Photographic/Quote-Led/Letter · shop → Catalogue/Photographic/Bento · docs → Workbench/Long-Document/Component-Playground · SaaS-B2B → Bento/Workbench/Stat-Led · agency → Portfolio-Grid/Split-Studio/Index-First · restaurant → Photographic/Long-Document/Catalogue · fashion → Photographic/Catalogue/Marquee-Hero · fintech → Stat-Led/Workbench/Long-Document · conference → Marquee-Hero/Manifesto/Photographic. Docs vs marketing for one domain get different trios.

**6 structural axes** (vary these when deviating from a macro; no two pages share >3 of 6): heading placement · body composition · divider language · button voice · image treatment · reveal. Fingerprint = one pick per axis.

## The premium↔information dial

A niche site must be **premium** (noticed, remembered, trusted — signaled by what you leave OUT: whitespace, restraint, one idea) AND deliver **information + proof** (signaled by structured density: scannable IA, credentials/proof, case results, social proof by the CTA).

**Don't blend — sequence:** restrained emotional hero → progressively denser proof as the visitor self-qualifies → low-friction action. **Set the dial by stakes and emotion, not taste:** higher money/health/legal risk → proof leads, register conservative; lifestyle/prestige → premium can lead; proof always carries equal final weight. Never let aesthetics bury the phone number, the credentials, or the next step.

**Per-vertical register cues:** finance = deep navy + crisp white, most conservative · law = navy/charcoal/burgundy/muted gold · healthcare = soft blues/greens/teal + white · luxury = mono/neutral + gallery whitespace + slow motion + 1–2 type families. Curation: architects ~8–25 projects; photographers ~15–40 (20-60-20 rule); artists 10–15.

## Section craft and hero discipline

A boring section is one flat plane (text + image-square on solid fill). A great section has **depth** (≥2 Z-planes), **tension** (asymmetry/scale contrast), and **one deliberate move**. **Cardinal rule: one or two devices per section, executed precisely — never all at once.**

**Anti-boring checklist (run every section)** — MUST be yes: depth (≥2 planes or one unifying texture/glow/shadow) · one focal point (squint) · a contrast move · one signature · grayscale test passes · spacing system · quality floor. MUST be no: centered-everything · three identical cards as the only idea · same rhythm every section · weak heading↔body contrast · `01/02/03` on non-sequences · more than two bold moves fighting.

**Composition anchors:** the left-text / right-image hero is the single most-overused AI pattern — allowed, never the default first instinct. Rotate anchors: centered-over-bg, bottom-left/right over image, stacked-center, image-as-canvas, off-grid editorial, mini-minimalist. Use ≥3 different anchors per site; never the same anchor >2 sections in a row, never the same background mode >3 in a row.

**Hero discipline:** hero fits the initial viewport (`min-height: clamp(60vh, 75dvh, 88dvh)`, footprint 70–90%, not `100vh`); headline ≤2 lines desktop; subtext ≤20 words and ≤3–4 lines; CTAs visible without scroll; hero top padding max `pt-24`; **max 4 hero text elements** (eyebrow-or-brand-strip, headline, subtext, primary CTA + max one secondary). Banned in hero: tiny tagline below CTAs, trust micro-strip, pricing teaser, feature bullets, avatar row, version labels. "Used by / Trusted by" logo wall lives UNDER the hero.

For the full named-tell catalog (AI-purple gradients, decoration strips, fake product chrome, poetic sidebar labels), see visual-direction.md — do not restate it here.

## Product-narrative question chain

Landing pages carry **8 beats:** 1 Hook · 2 Problem empathy · 3 USP · 4 Value props · 5 Proof points · 6 How it works · 7 Stakes · 8 CTA. Beats stay the same across audiences; weight and evidence vary (industrial buyer reads more, wants spec; fashion carries the hook in imagery, short scroll).

**The question chain (the sharpest test)** — walk top-to-bottom and mark where each answer lands: *What is this? → Is it for me? → Why better? → Can I trust it? → How does it work? → How much effort? → What next?* Answering **early is also a defect** (pricing above the fold to someone still asking "what is this"). Hook is a question, not a summary. Value props = benefits not feature nouns ("survives a season of gravel roads", not "14mm hardened steel"). Every claim carries proof. Stakes come from consequence, not manufactured scarcity (fake countdowns spend trust). CTA names the action ("Check fitment", not "Learn more"). One message per viewport; CTA repeats down the page.

## Section-repetition bans

- A layout family appears at most once per page; 8 sections need ≥4 families.
- Zigzag alternation cap: max 2 consecutive image+text-split sections.
- Eyebrow restraint (the most-violated rule): max 1 uppercase-tracked eyebrow per 3 sections (hero counts as one) — `count ≤ ceil(sectionCount / 3)`.
- Split-header ban: "left big headline + right small explainer paragraph" section head is not a default; stack vertically.
- Bento: N items → exactly N cells, no empty cells; ≥2–3 cells need real visual variation (image/gradient/pattern), not white-on-white text cards.
- One corner-radius scale and one page theme (light/dark) for the whole page; no section inverts mid-scroll (exception: one deliberate color-block story).

## SaaS sequence

Hero → logo-wall → features → testimonials → pricing → FAQ → CTA-strip → footer. Show the actual price. Testimonials need role + company + specific use case. FAQ answers like a person. CTA strip = one button.

## Award / experimental tier

WebGL shader/liquid backgrounds, canvas particle systems, custom lerping cursors (the lag is the premium feel), View Transitions, generative accents. Discipline: **one signature moment, not twenty.** Ration to a single signature; lazy-init; hold 60fps on mid-range; provide a static reduced-motion fallback; gate cursor effects behind `@media (hover: hover)` so touch and mobile are never stranded.
