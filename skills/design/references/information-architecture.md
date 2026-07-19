# Information Architecture

Purpose: Design the conceptual model, domain vocabulary, sitemap, navigation, and naming so users can find and understand things — the load-bearing layer beneath every surface.

Read when:
- The request involves objects/entities, sitemap, navigation, findability, labels, or "where does this live."
- Surface problems (wrong words, scattered actions, confusing structure) may root in a deeper model.

Skip when:
- The task is a flow across screens → `journeys.md`.
- The task is on-screen state/behavior of one component → `interaction.md`.
- The task is marketing-page section shapes → `surface-website.md` (macrostructures live there).

Inputs: domain material, entities and their relationships, existing routes/nav, any committed URL/redirect map.

Produces: an object/relationship model with vocabulary; a sitemap with page types; a navigation model; naming conventions.

## Contents
- Conceptual model (OOUX)
- Domain vocabulary
- Naming is design
- Sitemap
- Navigation and findability
- Section sequence is IA
- Hide, don't delete
- Scope and context
- Copy fidelity

## Conceptual model (OOUX)

Define the **objects** the product recognizes, their **relationships** (cardinality + named roles), their **states + transitions**, and their **vocabulary** — independent of the interface, and distinct from a DB schema. This is the most neglected load-bearing layer; "match system to the real world" violations root here, not at the surface.

**Real-object test** — an object is *instanceable* (many), *structured* (own attributes), and *useful* (cared about in its own right). Catches instances mistaken for objects: "CAC/ROAS/LTV aren't objects — they're instances of **Metric**." An attribute that is really a relationship should be modeled as one, not duplicated.

**OOUX failure modes** (Sophia Prater): **Shapeshifter** (same object, inconsistent forms), **Masked** (different types look identical), **Broken** (an object's data/actions scattered), **Isolated** (no visible relationships). Inventory all actions together — listing them exposes Add-vs-Create-vs-New inconsistency. Mental model follows the data model: each major entity gets its own list + detail view; expose relationships via breadcrumbs/parent labels ("3 tasks in this project"); show transformation paths (draft → published) via status labels + transformation-verb buttons.

## Domain vocabulary

Map real-world concepts before the product. Don't resolve contradictions — **record** them: synonyms (same thing, different names) and polysemy (same name, different things). Maintain a ubiquitous-language list: one name per concept, one concept per name.

## Naming is design

Use the user's vocabulary, not the engineer's; name actions by their effect ("Archive", not "Hide"). **Hard ceiling ~10 invented terms** for the whole product — fewer is better; translate internal shorthand ("recon job", "P2 ticket") at the customer boundary. **Button labels: 1 word ideal, 2 fine, 3 max**; titles and headings carry the fuller story. Placement tells half the story. Plain labels beat clever ones on every usability metric.

## Sitemap

Assign each route a `page_type`. **Preserve IA** (SEO + familiarity) → keep routes 1:1, no rename/merge/drop. **Restructure IA** → the new sitemap must still satisfy any committed redirect map (every moved-to URL needs a matching route; the redirect target set is the authoritative new IA). Keep every nav/footer link even when its target wasn't built — a nav with links quietly removed looks broken.

## Navigation and findability

Primary nav **2–7 items**; **>7 top-level = choice paralysis, revisit the IA**. Flat hierarchy: any page reachable in **2–3 clicks**; findability target is locating any item in **<3 clicks from any entry**. **Depth vs breadth: 3 levels max for primary content** (moderate depth with clear labels beats wide-and-flat). Group by user **goal**, not feature ("Developer → Webhooks", not "Settings → Integrations → Webhooks → Events"). Active state distinguishable by more than color (weight/underline/indicator). Tab bar / bottom nav **3–5 destinations**; segmented control for 2–4 tightly related views; reserve the hamburger for secondary/constrained contexts, never primary desktop nav. Design navigation before individual screens; validate labels with first-click/tree tests (card sort → tree test; open sort finds structures, closed sort validates). Logo is first-class nav data and links home.

## Section sequence is IA

Order is meaning, not decoration. When the domain implies an order (portfolio: work → case study → proof → CTA), use it, and place proof/trust where it converts — **proof before the ask, never buried after.** (Marketing-page macrostructures and the domain→trio menu live in `surface-website.md`.)

## Hide, don't delete

Three moves, not two: **Surface / Remove / Hide-behind-an-opening-closing element** (the middle path is often right). Choose the container by content weight: accordion (inline detail) / popover or drawer (short task) / modal (interrupting sub-task). Reaching for H4–H6 is a complexity smell — Split / Remove / Simplify / Hide. "Deliberate friction is a feature."

## Scope and context

Every screen answers where-am-I / what-context / what-will-this-affect. **Acting-on-behalf** (admin "view as", impersonation): a persistent, unmissable banner naming the account plus an always-visible exit — designed so an operator can't change data thinking they're in their own context. **Auth is a trust context:** login must feel fully on-brand (off-brand reads as phishing), on the customer's own domain, shallow path. **Internal tools** carry a persistent visual quirk (accent/env badge) so they can't be mistaken for the customer app or staging-for-prod.

## Copy fidelity

Three levels when re-authoring content: **verbatim** (faithful port — SEO equity/IP, don't rewrite) · **preserve + lightly tighten** (redesign keeping the message) · **rewrite** (repositioning — but preserve target keywords/intent so ranking carries forward).
