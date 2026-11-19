# Conventions

Purpose: Choose the style dimensions for a product type from its proven conventions, and name the lane
that executes them. This is the dimension sheet the direction contract records and every craft leaf
defers to.

Read when:
- A new surface, or any craft task (type, layout, colour, imagery, motion) that arrives without a
  direction contract — set the lane and dimensions first, briefly.
- Choosing or writing down an aesthetic lane, or judging whether a value is a convention or a reflex.

Skip when:
- A direction contract already names the lane and dimensions — the craft leaf applies it directly.

Inputs:
- The product type, register and visitor mode (visual-direction.md), and the brief.

Produces:
- A DIMENSIONS line (one value per axis) and a named lane with its fail-if list.

## Contents
- Precedence
- Style dimensions
- Product types
- Lanes
- Write the lane down
- Anti-drift checks

## Precedence

Floors (WCAG, HIG/M3 requirements, honesty, licence, maths) never bend. Above them the direction
contract — register, lane, dimensions — outranks every leaf default and every catalogued tell. Leaf
numbers are defaults for a Restrained lane in a Persuade register unless the leaf says otherwise. A
tell is an *unchosen* default; a chosen convention is not a finding.

## Style dimensions

Set one value per axis: **density** (airy · standard · workbench) · **type voice and display scale**
(quiet · characterful · type-as-image) · **palette strategy and ground** (Restrained · Committed ·
Full · Drenched, color.md; light, dark or paper) · **depth and material** (flat · layered · glass ·
tactile) · **motion intensity and scroll model** (still · functional · expressive · cinematic; native
scroll, reveal, pinned or scrubbed) · **imagery** (none · product · photo-led · illustration · 3D) ·
**composition** (convention · one bold move · many moves in one system) · **chrome** (conventional nav ·
lane-specific).

## Product types

Proven conventions per type; "inverts" names the pack defaults that flip here.

- **Marketing site** — standard–airy; characterful display; Restrained or Committed; layered; expressive reveals; product capture; one bold move per section; conventional nav. Pack defaults apply as written.
- **Dense web app / SaaS** — workbench; quiet UI face (Inter/SF fine), 400/500/600 steps; near-neutral ground, accent for state; flat or Solid Glass (surface-webapp.md); functional motion only; no imagery; convention over novelty. *Inverts:* fixed rem, zero bold moves, no doubled spacing, no weight extremes.
- **UX flow** (onboarding, checkout, forms) — standard; quiet; Restrained; flat; functional; minimal imagery; convention throughout (forms.md, journeys.md). *Inverts:* distinctiveness — earned familiarity is the bar.
- **Editorial / magazine** — standard; serif or characterful display, many named sizes; paper or white ground; flat; still or gentle; photo-led when the publication is; 3–5 column or asymmetric grid; masthead nav. *Inverts:* ≤5 sizes, one-family rhythm bans, 12-column snap, "no imagery".
- **Cinematic 3D / scroll showcase** — airy; type-as-image; Committed or dark; layered or 3D; cinematic, pinned or scrubbed; 3D or film; many moves under one motion verb; minimal chrome. *Inverts:* ≤3 motion primitives, no `100vh` hero (use `dvh`/`svh`), no display parallax, one self-mover.
- **Typography-led luxury / hospitality** — very airy; small refined text or type-as-image, tracked caps legitimate; restrained or monochrome; flat; slow fades; photo-led, full-bleed; centred symmetry legitimate; minimal or tracked-caps nav. *Inverts:* anti-boring "depth" and "no centring", under-fill as a defect, photo quotas, timid-palette blocker.
- **AI / agent app** — standard; quiet UI face; near-neutral ground; Solid Glass or flat (surface-webapp.md); functional motion plus a truthful activity indicator; no decorative imagery; conventional app chrome.
- **Native iOS / Android** — platform density; SF / Roboto (platform defaults, not reflexes); system colour roles; Liquid Glass (surface-ios.md) or Material 3 Expressive (surface-android.md); platform motion; platform chrome. *Inverts:* reflex-font rejection, custom chrome, web target sizes.
- **Docs / Read** — standard; reading face for the column, mono only for code; neutral; flat; still; diagrams only; predictable structure is the affordance; sidebar nav. *Inverts:* layout-family variety, eyebrow caps on section kickers.
- **E-commerce** — standard; quiet; Restrained or brand-Committed; flat; functional; product photos lead; uniform product grids are the convention; conventional nav and buy box. *Inverts:* "uniform card grids" as a tell; price and rating belong in the hero when the job is *buy*.

## Lanes

A lane executes the dimensions as one system; match implementation complexity to the vision (a Rams
interface ~50 lines, a Neo-Memphis ~300 — both correct).

| Lane | Load-bearing signature |
|---|---|
| Dieter Rams functionalist | Monochrome + one functional accent; strict grid; borders over shadows |
| Swiss / International | Black + white + one primary; rigid multi-column, asymmetric balance; flat; motion brief, near none |
| Japanese minimal (Ma) | Muted naturals; line-height 1.8–2.0; whitespace 2–3× normal; slow 400–600ms fades; muted text still ≥4.5:1 |
| Brutalist / tactical | Mono or heavy display; 90° corners, exposed box model; hairline `grid gap:1px`. Neo-brutalist: 2–3px black borders + zero-blur offset shadow; press translates by the offset; snappy |
| Scandinavian | Warm whites, no pure black; rounded 8–12px; soft large-blur low-opacity shadows |
| Editorial / magazine | Display serif + drop caps; 3–5 column grid, full-bleed; folio numbers, thin rules; kinetic type |
| Warm-monochrome (Notion-adj.) | Off-black text never `#000`; paired pastel accent+text; 1px `#EAEAEA` cards |
| Soft / awwwards depth | Concentric "double-bezel" nesting; custom `cubic-bezier(0.32,0.72,0,1)`; magnetic hover |
| Quiet luxury | Type set *small*, space and copy carry the page; hairlines; outline or text-plus-arrow buttons; radius 0–tiny; slow soft fades, no bounce; small type ≥4.5:1, hairline input edges ≥3:1 |
| Cinematic / immersive | One scene per act; pinned or scrubbed scroll; WebGL or film; display type moves; many moves under one motion verb; keyboard scroll advances it |
| Maximalist / playful | Committed or Full palette; loud hard edges across the whole system; stickers, rotation, bounce; one loud device in a quiet system reads cheap |
| Dense instrument | Workbench rows 28–36px; mono numerals, tabular; status colour only; many metrics grouped and labelled; zero decoration |
| Platform-native | The platform language is the lane: Liquid Glass (surface-ios.md), Material 3 Expressive (surface-android.md), Solid Glass (surface-webapp.md); brand lives in tint, type and content |

## Write the lane down

A lane is a mood until written: ground + ink, type (face, weight, tracking, case, labels), edges
(radius, border, shadow), containers, motion (how things arrive, how fast); the **accent's job list**;
each signature device with a **count budget**; a **kill sentence** (the trait whose removal ends the
style); the two nearest lanes it is *not*; and a numeric **fail-if list** (max radius, accent count,
min section gap) — the list critique judges against. Diluting a lane is the failure: Swiss or
brutalist softened with blur shadows and rounding reads as generic SaaS.

**The category standard is a legitimate choice:** name 2–3 products it should sit beside and match
their craft exactly. A product cited in the brief sets the craft bar, not the look. Re-pick only on
factual grounds, never taste.

## Anti-drift checks

These guard the agent's own defaults; they never override brief fit or a chosen convention.
**Rotation** of lanes, fonts and palettes breaks ties among candidates that fit the brief; a repeat
that fits is named in the contract. **Predict, then decide** (anti-defaults.md): the predicted page
ships only when the contract names it as the category-standard choice. **Fingerprints**
(page-anatomy.md) flag unintended sameness, not sameness the brief asked for.
