# Visual direction

Purpose: Decide the point of view before any craft — register and visitor mode, change depth,
concept or world, the one bold move, and the committed lane.

Read when:
- Starting a new surface, or a result reads generic, templated, or "AI-generated" (pair with
  anti-defaults.md).
- Choosing a register, change depth, concept, aesthetic lane, or accent strategy, or judging whether
  a design is distinctive enough.

Skip when:
- The direction is already set and the task is executing one craft layer — go to typography,
  layout-composition, color, imagery-depth-decoration, or motion.
- The concern is native-platform convention (surface-ios / surface-android) or a scored review (critique).

Inputs:
- Brief, audience, subject, and any brand assets or reference sites.

Produces:
- A design read, a named register and mode, the change depth, a concept or world, a direction
  contract, the one bold move, a committed lane, and a refuse-list (from anti-defaults.md).

## Contents

- Register doctrine and visitor modes
- Read the brief before generating
- Change modes and depths
- Concept and world (is-the-product surfaces)
- Direction contract
- One bold move + restraint
- Aesthetic lanes (commit to one)
- Validation checks

## Register doctrine and visitor modes

Name the register per **surface**, not per project — most products are mostly-serve with a few
is-the-product surfaces (a marketing home over an app).

- **Design IS the product** — brand sites, landing pages, launch microsites. **Distinctiveness is the bar:** take the aesthetic risk; type can be a character; one signature element carries the boldness.
- **Design SERVES the product** — dashboards, app shells, settings, dense daily tools. **Earned familiarity is the bar**: a fluent Linear/Figma/Notion user must operate it on sight; surprise is a cost. This register *inverts* defaults: fixed `rem` over fluid `clamp()`, the full state set, proven patterns; **Inter/SF Pro is legitimate here, not a tell.**

Each register splits into two **visitor modes**, named from the requested surface, not the product (a
tool's landing page is Persuade; a fashion house's docs are Read). IS → **Persuade** (decide and act:
landing, pricing, campaign) and **Experience** (inside the work: portfolio, gallery — the artifact
leads from the first viewport and the interface recedes). SERVES → **Operate** (finish a task;
surface-webapp.md) and **Read** (understand: docs, articles, help, changelogs).

**Read surfaces: frame vs column.** The world owns the frame (masthead, nav rail, ground, openers, how
code, tables and callouts are set); the column stays calm — a reading face, 45–75 characters, ~16px,
real contrast; mono only for code and parameters. Borrow from publishing (manuals, field guides,
timetables). A page that reads as an artifact before a document has let the world into the column.

## Read the brief before generating

Emit a **design read** before code, in five lines: **Product** (one plain sentence) · **Character**
(2–3 concrete words; "clean, modern, sleek, minimal, premium" decide nothing) · **World** (the place or
material it belongs to — monitoring near instruments and night shifts; it tints neutrals and picks the
accent) · **Moments** (the one or two places that get the richness) · **Signature** (one detail only
this product has). The **audience picks the aesthetic, not your taste.**

Quiet constraints — accessibility-first, public-sector, regulated, trust-commerce, kids — **override
aesthetic preference.** Negative constraints rule out *devices*, not energy: "no gamification"
forbids streaks and confetti, not a committed palette; "calm coaching" describes the product's
behaviour, not the page's volume. If ambiguous, ask **one** round of product questions — never a taste menu,
never a look floated inside a question (the answer just confirms it): what is uniquely true here; what
would make a polished result feel wrong; what must stay untouched; min/typical/max content. If
confidently inferable, do not ask.

Intent is **systemic**: "warm" means surfaces, text, borders, accents and type are all warm; a token
that contradicts it is a defect.

## Change modes and depths

When the work changes an existing surface, name the mode with the read, per dimension — copy, look,
brand, routes. Depths never blend:

- **Reproduce** (`quality`: fidelity; `frontend`: faithful rebuild) — tokens extracted from the source; the anti-default catalog and one-bold-move rule are *suspended*, fidelity is the bar; imagery is reused and a missing asset stays a counted, labeled gap (the generated-fill limits are in image-sourcing.md); accessibility floors never suspend — report a source that fails them.
- **Polish** — system and layout kept; only named tells, contrast, states and tokens change. A polish that finds the concept wrong says *redesign* and stops; it never smuggles one in.
- **Restyle** — layout kept; colour, type, radius, shadow, motion and controls change.
- **Refine** — one named target; everything outside it stays; ask before touching factual copy. A section added to an established surface inherits it, never becoming an identity exercise.
- **Redesign** — new composition and look; logo, core brand colours/type, routes kept, copy lightly tightened. The old look is evidence, never authority: don't split the difference into polish on a look you are replacing.
- **Rebrand** — new palette, type, voice, and IA, with a redirect map, from a strategy brief; the full doctrine applies.

Restyle and polish only when asked in so many words; never change a working screen just to make it
different. Every depth keeps the content (claims listed to verify) and legal, terms and consent wording
verbatim; a framework default or catalogued tell is not a brand. Before a redesign or rebrand, **audit
equity** — what recognition rests on (colour, symbol shape, a letter, the name's type, a mascot),
strongest first; the strongest one or two survive. The review asks: what could a visitor do or find
before that is now harder? Copy fidelity levels: information-architecture.md.

## Concept and world (is-the-product surfaces)

**Derive the world, don't pick it.** State the mechanism in one sentence; name the category's default
page *and* its predictable opposite (both are the rut; the brief's own metaphor gets one slot at most).
List seven artifacts, places or rituals the audience knows by heart, each with why and how it looks;
more than three from one material family means you stopped at the obvious. Operate and Read surfaces
never borrow from the tools their users operate (it comes back as a costume).

**A concept is a rule system borrowed from a world, not a style** ("the site is a contact sheet":
strips, film advance, edge-print labels, loupe — not "dark minimal with WebGL"). A sentence that
dictates fewer than four decisions (layout rule, motion verb, type voice, palette source, signature
moment) is a style. Draft three from different territories (the name, the profession's material, place,
process, one formal rule taken to the extreme); write each one's **anchor**, the real fact it depends on,
then swap the subject — if it still works, it is generic. It must reach the footer, an inner page and
the 404. Name one **motion verb** ("settle like paper"); every animation varies it.

## Direction contract

Before code, ~150 words: **THESIS** (the idea and the default it refuses) · **OWN-WORLD**
(recognisable with the content removed) · **STORY** (what the visitor understands, believes, does) ·
**FIRST VIEWPORT** (exact composition, scale, primary action) · **FINISH** (the exit condition). A block
that reads like a mood is undecided. Run the validation checks on this plan ("would a generic model land
here?"), revise each yes and record what changed. The review audits the render against it; it never
ships in the artifact (comments, `data-*`, hidden DOM).

## One bold move + restraint

The shared trait of Linear/Stripe/Vercel/Notion is **restraint, not a look.** Spend boldness in
**one** place per section or page and keep everything else quiet. Two bold moves compete and cancel;
zero reads generic. Test: *"What is the one thing someone remembers about this section?"* — if the
answer is "nothing" or "five things," recompose.

- **Bolder:** a flat section usually opts out of the system's strongest moves — raise it to its neighbours in the system's own vocabulary, no new primitive, one move (if everything got louder, it got flatter). Skeleton test: with the copy stripped, the structure still says what the section is.
- **Quieter** keeps the point of view: saturation ~70–85%, weights down a step (900→600, 700→500), motion travel 10–20px, smaller scale jumps, thinner borders, one anchor kept. Grey-on-white in one weight is generic, not quiet.

## Aesthetic lanes (commit to one)

Pick a lane and execute its whole system; **match implementation complexity to the vision** (a Rams interface ~50 lines, a Neo-Memphis ~300 — both correct). **Rotate lanes across consecutive projects.**

| Lane | Load-bearing signature |
|---|---|
| Dieter Rams functionalist | Monochrome + one functional accent; strict grid; borders over shadows |
| Swiss / International | Black + white + one primary; rigid multi-column, asymmetric balance; flat; motion brief, near none |
| Japanese minimal (Ma) | Muted naturals; line-height 1.8–2.0; whitespace 2–3× normal; slow 400–600ms fades |
| Brutalist / tactical | Mono or heavy display; 90° corners, exposed box model; hairline `grid gap:1px`. Neo-brutalist: 2–3px black borders + zero-blur offset shadow; press translates by the offset; snappy |
| Scandinavian | Warm whites, no pure black; rounded 8–12px; soft large-blur low-opacity shadows |
| Editorial / magazine | Display serif + drop caps; 3–5 column grid, full-bleed; folio numbers, thin rules; kinetic type |
| Warm-monochrome (Notion-adj.) | Off-black text never `#000`; paired pastel accent+text; 1px `#EAEAEA` cards |
| Soft / awwwards depth | Concentric "double-bezel" nesting; custom `cubic-bezier(0.32,0.72,0,1)`; magnetic hover |
| Quiet luxury | Type set *small*, space and copy carry the page; hairlines; outline or text-plus-arrow buttons; radius 0–tiny; slow soft fades, no bounce |

**Write the lane down or it is a mood:** ground + ink, type (face, weight, tracking, case, labels),
edges (radius, border, shadow), containers, motion (how things arrive, how fast); the **accent's job
list** (where it may appear, nowhere else); each signature device with a **count budget**; a **kill
sentence** (the trait whose removal ends the style); the two nearest lanes it is *not*; a numeric
fail-if list (max radius, accent count, min section gap). **Diluting a lane is the failure:** Swiss or
brutalist softened with blur shadows and rounding reads as generic SaaS.

**The category standard is a legitimate choice:** ask which 2–3 products it should sit beside and match
their craft exactly, no smuggled quirk. A product cited in the brief sets the craft bar, not the look.
Re-pick a direction only on factual grounds, never taste.

## Validation checks

Run on the plan, then on the render:

- **Swap** — swap your typeface/layout for the usual one; where nothing would feel different is where you defaulted.
- **Squint** — blur the screen; hierarchy and the one focal point must survive.
- **Signature** — point to five specific elements that carry this design's signature; if you can't, it's generic.
- **Token** — read the CSS variable names aloud; `--ink`/`--parchment` evoke a world, `--gray-700`/`--surface-2` evoke a template.
- **Poster** — any paused frame (motion off, mid-scroll, page end) looks intentional alone; motion amplifies a composition, never rescues one.
- **Reskin** — two directions rendered as one still and squinted must read as different pages; composition (headline position, containers, image treatment) separates directions, tint does not.
