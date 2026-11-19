# Visual direction

Purpose: Decide the point of view before any craft — register and visitor mode, change depth,
concept or world, boldness, and the direction contract that names the lane and dimensions.

Read when:
- Starting a new surface, or choosing a register, change depth, concept, lane, or accent strategy.
- Judging whether a design is distinctive enough (a full deslop or refuse-list → anti-defaults.md).

Skip when:
- A contract already names the lane and dimensions and the task is one craft layer — go to that leaf
  (with no contract, set lane and dimensions first, briefly: conventions.md).
- The concern is native-platform convention (surface-ios / surface-android) or a scored review (critique).

Inputs:
- Brief, audience, subject, and any brand assets or reference sites.

Produces:
- A design read, register and mode, change depth, concept or world, and a direction contract with
  lane and dimensions.

## Contents

- Register doctrine and visitor modes
- Read the brief before generating
- Change modes and depths
- Concept and world (is-the-product surfaces)
- Direction contract
- Boldness and restraint
- Lane
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

**Read surfaces: frame vs column.** The world owns the frame (masthead, nav rail, ground, how code and
callouts are set); the column stays calm — a reading face, 45–75 characters, ~16px, mono only for code.
A page that reads as an artifact before a document has let the world into the column.

## Read the brief before generating

Emit a **design read** before code, in five lines: **Product** (one plain sentence) · **Character**
(2–3 concrete words; "clean, modern, sleek, minimal, premium" decide nothing) · **World** (the place or
material it belongs to — monitoring near instruments and night shifts; it tints neutrals and picks the
accent) · **Moments** (the one or two places that get the richness) · **Signature** (one detail only
this product has). The **audience picks the aesthetic, not your taste.**

Quiet constraints — accessibility-first, public-sector, regulated, trust-commerce, kids — **override
aesthetic preference.** Negative constraints rule out *devices*, not energy: "no gamification"
forbids streaks and confetti, not a committed palette; "calm coaching" describes the product's
behaviour, not the page's volume. No brief → the standalone context check (SKILL.md; intake.md). A question never carries a look (the
answer only confirms it); directions are shown as a labelled set of three with a recommendation. A good owner prompt under
references: what would make a polished result feel wrong? Rank
the brief's assets (a photograph, a number, a quote, the product at its best moment, the name): the
first viewport is built on the strongest; with none, type leads.

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
page *and* its predictable opposite (both are the rut). List seven artifacts, places or rituals the
audience knows by heart; more than three from one material family means you stopped at the obvious.
On Operate and Read surfaces, default to not borrowing from the tools users operate: a costume is borrowing their real work doesn't recognise (a developer audience reads mono as native).

**A concept is a rule system borrowed from a world, not a style** ("the site is a contact sheet":
strips, film advance, edge-print labels — not "dark minimal with WebGL"); fewer than four decisions
dictated (layout rule, motion verb, type voice, palette source, signature moment) means a style. Draft
three from different territories; write each one's **anchor**, the real fact it depends on, then swap
the subject — if it still works, it is generic. It reaches the footer and the 404. Name one **motion
verb** ("settle like paper"); every animation varies it.

## Direction contract

Before code, ~150 words: **THESIS** (the idea and the default it refuses) · **OWN-WORLD**
(recognisable with the content removed) · **STORY** (what the visitor understands, believes, does) ·
**FIRST VIEWPORT** (composition, scale, primary action, and the actual headline — words first) ·
**LANE + DIMENSIONS** (one value per axis, conventions.md) · **DEPARTS** (the axes that leave the type's
convention, each with its reason; "none — category standard" is valid) · **FINISH** (the exit
condition). Each LANE, DIMENSIONS and DEPARTS value cites its reason — a brief fact, an intake answer
or a ledger assumption; a value with no reason is unchosen. A block that reads like a mood is undecided. Run the validation checks on it and record what changed; the review
audits the render against it; it never ships in the artifact.

## Boldness and restraint

Boldness is a dimension (conventions.md): Restrained lanes spend **one** move per section or page and
keep the rest quiet; maximal lanes commit many moves in one system; serve surfaces may spend none ("the
wow is felt, not seen"). Two *unrelated* bold moves compete and cancel. Test: what is the one thing
someone remembers about this section — "nothing" or "five unrelated things" means recompose.

- **Bolder:** a flat section usually opts out of the system's strongest moves — raise it to its neighbours in the system's own vocabulary, no new primitive (if everything got louder, it got flatter). Skeleton test: with the copy stripped, the structure still says what the section is.
- **Quieter** keeps the point of view: saturation ~70–85%, weights down a step (900→600, 700→500), motion travel 10–20px, smaller scale jumps, thinner borders, one anchor kept. Grey-on-white in one weight is generic, not quiet.

## Lane

Commit to one lane and execute its whole system. The lane table, the product-type conventions, how to
write a lane down (fail-if list) and the category-standard choice live in conventions.md.

## Validation checks

**Predict, then decide:** before designing, write the page this prompt gets without trying and its
obvious twist; neither ships *by accident* — the predicted page ships only when the contract names it
as the category-standard choice. The current AI cluster — choose it, don't land on it: cream + serif +
terracotta (incl. the thin-serif italic-accent "tasteful default"); near-black + one acid accent;
hairline broadsheet; flat ink + offset shadows; the identical-rounded-card SaaS kit. The full catalog
with replacements: anti-defaults.md. Then run these on the plan, and again on the render:

- **Swap** — swap your typeface/layout for the usual one; where nothing would feel different is where you defaulted.
- **Squint** — blur the screen; the hierarchy the lane intends must survive.
- **Signature** (is-the-product surfaces; serve surfaces show the felt wow instead) — point to five elements that carry the signature; if you can't, it's generic.
- **Token** — read the CSS variable names aloud; names from the contract's world (`--ink`, `--slate`) evoke it, `--gray-700`/`--surface-2` evoke a template.
- **Poster** — any paused frame (motion off, mid-scroll, page end) looks intentional alone; motion amplifies a composition, never rescues one.
- **Reskin** — two directions rendered as one still and squinted must read as different pages; composition (headline position, containers, image treatment) separates directions, tint does not.
