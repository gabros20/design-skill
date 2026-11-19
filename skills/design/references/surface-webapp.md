# Surface: Web App

Purpose: Design product UI on the web — dashboards, admin, SaaS tools, settings, and data interfaces, where the design SERVES the product. Owns density modes, data display and selection, expert/operational tools, dashboards, and web-platform specifics.

Read when:
- The request is product/app UI (not marketing): an internal tool, dashboard, admin console, settings surface, or data-dense screen.
- You are deciding density, choosing a layout paradigm for a data view, checking web-platform conformance, or adopting Solid Glass.

Skip when:
- The surface is a marketing site (→ surface-website) or native (→ surface-ios / surface-android).
- The rule is generic: state design (8-state model), forms, feedback/latency, overlays/modals, search → interaction.md; grids/spacing/elevation → layout-composition.md. This file owns only the webapp-specific layer.

Inputs: user type (power / enterprise / consumer), the data model, a density decision.
Produces: density mode, layout paradigm, data-display and selection patterns, web-platform conformance, and the Solid Glass language when an AI/agent app adopts it.

## Contents
- Serve-register craft
- Density modes
- Layout paradigm and skeleton consistency
- Data display and selection
- Expert and operational tools
- Enterprise design systems
- Solid Glass (AI and agent apps)
- Color-mode decision
- Web-platform specifics

## Serve-register craft

Generic hierarchy (one focal point, weight+color over size, 60/30/10) → layout-composition.md, color.md; concentric radius and tabular-nums → interaction.md. The webapp layer:

- **Elevation is a numbered ladder of lighter surfaces** (imagery-depth-decoration.md); light mode adds shadow instead. Sidebars share the canvas (another colour splits "sidebar world" from "content world"); a subtle border is enough. Popovers sit one level above their parent; inputs slightly *darker* than surroundings (inset "type here"); borders low-opacity (`rgba(255,255,255,0.06–0.12)` dark), not solid hex.
- Proportions speak: a 280px sidebar beside full-width content says "navigation serves content"; 360px says "these are peers." A sidebar is earned by more than ~7 destinations (below that, a top bar); a modal is the last answer, after inline editing and disclosure.
- **What the world may touch:** on a working screen the visual world lends type, palette, density and *one* signature move ("service health drawn as a transit map"); layout, navigation model and controls stay standard. A costume is borrowing the user's real work doesn't recognise (a developer audience reads mono as native). Default near-neutral app surfaces; branded grounds are a lane choice. Grey plus one accent is the category default without the polish, not restraint. Test: cover the name; is it still a working product of its category? Alternatives vary the organisation (nav model, work-area split, which data leads, density), never "more world".
- **The wow is felt, not seen:** an instant optimistic save, a dialog that grows from its button, 100k rows that never stutter.

## Density modes

Density is a decision expressed in px, held consistently. Defaults: **row 44px · compact 32px · spacious 56px.** Operational/expert tools run denser (**rows 28–36px**). Denser for desktop and power users, sparser for mobile and consumers. **"Reading is time"** — cut words before shrinking them; a recognizable icon replaces reading, a wrong/decorative one adds work; front-load the scannable word or number at line start. Goal: the user should *glance*, not *read*.

## Layout paradigm and skeleton consistency

**Derive the paradigm from IA + brand intent** (order: IA & brand → paradigm → consistency), never "dashboard because it looks impressive." Name it (feed, board, table, gallery, master-detail, dashboard, canvas, timeline, map, wizard, long-scroll) with why it fits and when not.

**Three scales of consistency:** Macro (paradigm + page skeleton) · Meso (component family) · Micro (states/tokens/type). Reuse page skeletons (list/detail/editor/settings) identically; learn one detail page, know them all. Deviate only for task reasons, completely and obviously (a distinct mode); almost-but-not-quite reads as a bug.

## Data display and selection

Row/card selection, the mass-action toolbar, and sticky header/first-column patterns are interaction.md canon. Webapp-specific data craft:

- Virtualize lists above ~1000 items. **Make numbers comprehensible:** a bare number needs a reference ("€48,900 (+12% vs last month)"); a KPI that moves carries its recent trace, the onset of change marked; round to the precision the user acts on (10.2k).
- **Dashboard composition:** title it by page or period ("October 2026"), never a greeting; lead with one hero figure, one clearly biggest chart, and one table or ranked list; a wall of equal KPI gauges is the tell. A stat card is label, figure and change against its comparison; no sparkline, icon tile or tally as filler. Vary several blocks' form by weight (hero number, bar, status-coloured number, stat row) in one voice; a figure in a warning state has its fix action beside it. The signature is the object the tool is known by (the ledger, the queue).
- **Pick the chart form first:** one value → a stat tile, never a one-bar chart · a few values → a stat row or horizontal bars · a trend → a line · parts of a whole → default a stacked bar or ranked list, a pie only for 2–3 parts labelled directly, never a gauge · >~7 categories → a table. Familiar over exotic: a novel chart type taxes comprehension. Bars start at zero; a truncated axis that exaggerates a change is an invented metric unless it says "axis starts at 94%"; two units become small multiples, never a second y-axis. One accent on the series that argues, the rest neutral or a lightness ramp of that hue; separate categories by opacity, pattern or line style before a new hue; >3 series take a CVD-safe categorical set (Okabe-Ito), never a rainbow; label lines directly rather than through a legend; labels stay in ink.
- **Tables:** numeric columns lining + tabular, right- or decimal-aligned; text left; icon/status centred; each header aligned like its data. On a phone keep the naming and acting columns in view (restack rows as labelled blocks or pin the first column); never simply hide what desktop shows.
- **Paging:** goal-directed lists (results, tables, anything compared or revisited) paginate, so position is addressable and the footer reachable; discovery feeds may scroll endlessly; the safe default is **Load more** with the count ("Showing 40 of 312"). Back restores scroll position and loaded items; a table states its total.
- **Table hygiene:** the default sort is stated and the sorted column marked with its direction; zebra *or* row dividers, never both; an empty cell shows "—", never blank or 0; filters sit above as removable chips with "Clear all"; past ~7 columns offer hide/reorder and pin the identifying column.
- **Shortcuts:** each listed in a `?` sheet and shown beside its command in menus, tooltips and the command palette; never override browser, OS or screen-reader keys; single keys follow accessibility.md (2.1.4); sequences ("G then I") for navigation, modifiers for actions.
- **Ordered data** takes a sequential ramp (one hue, monotonic lightness); a diverging ramp only around a meaningful midpoint, neutral at the centre, both ends at equal lightness.
- **Coordinated views:** selection lives in ONE store both views read and write; clicking a visual scrolls its table row into view; colour comes from one source across views. Highlight (hover, transient) ≠ Selection (click, persistent); debounce hover.

## Expert and operational tools

Information over whitespace (dense rows, inline status, text labels over icon-only); workflow runs left→right, top→bottom. **Persistent state:** filters, columns, panels survive reload. Prefer in-place accordion tables over drill-down pages (siblings stay visible). Keep persistent **workflow-state filters** apart from transient **search filters**. Bulk feedback scales: <10 inline · 10–100 toast with count · 100+ progress + summary. Expert settings (domain labels, defaults, units, disclosure tiers): forms.md "Expert settings".

## Enterprise design systems

Enterprise webapps break consumer-web defaults: **UI text is 13–14px, not 16px**
(long-form reading stays 16px; typography.md floors). Canvases are grey + white cards or white + layer
alternation; app shells run tight (headers 48–56px, sidebars ~240–300px, collapsed ~60px). If the
brief matches a system, adopt it, never recreate its CSS. What a model gets wrong: **Carbon**
radius 0, layer tokens instead of shadows, light 300 headings · **Polaris** dark primary buttons,
links separate from brand green · **SLDS** grey page with white cards · **Spectrum** outline focus with
offset, not box-shadow · **Modus** uniform non-directional shadows, cards ≤8px radius.

## Solid Glass (AI and agent apps)

DeepLethe's web design language (a shadcn/ui theme) for ever-changing AI screens: streaming
answers, running agents, pending decisions. Its stated case: near-clear glass makes text fight the
background, so panes are thick smoky glass, solid from afar. A claim, not a verdict: the HIG answers
legibility by keeping Liquid Glass off the content layer (surface-ios.md). **Choose:** native iOS →
Liquid Glass; Android → surface-android.md "Material 3 Expressive"; a text-dense AI/agent web app
wanting depth without show-through → Solid Glass (dark-first); stillness as the brand → flat.
Principles as rules (values: imagery-depth-decoration.md "Solid glass"):

- **Materiality:** finish only at the edge (top rim of light, hairline, shadow beneath), no face gradient.
- **Physicality:** depth is thickness, panel < card < popover, thicker more opaque: no menu shows through.
- **Precision:** a neutral face taking no colour from behind; controls a radius step below panes; a crisp 2px focus line.
- **Tactility:** one state: hover, chosen and held-open wear one clear pane; pressed sheds its shadow.
- **Motion means running, hue means ended:** achromatic UI (ink primary, grey charts); hue only for
  done, success, awaiting a decision, failed, links. Running work moves (a glyph whose figure
  names the activity: thinking, searching, running, writing, compacting); ended work stands still
  with a hue dot. Tool calls fold into one line named by effect ("Read search.py"); an answered
  question stays as a record, choices withdrawn.

**Legibility first:** full tokens pass AA; muted text at /70, or /80 in light (3.0–4.3:1),
light-theme status hues as text (amber 2.6:1) and ~1.2:1 hairlines do not. Keep text at full token,
give each hue dot a word, a field's edge 3:1 where it identifies the field. Build: `frontend` `solid-glass.md` "Install".

## Color-mode decision

Mode is a brand/context decision. Offer a theme selector when users spend hours a day in the tool (dev tools, trading, ERP, creative); marketing and e-commerce commit to one. Respect `prefers-color-scheme` as the default + `[data-theme]` override; dark is a second verified palette (color.md).

## Web-platform specifics

Floors (targets, reflow, zoom, focus, forced colors, increased contrast) live in accessibility.md; expand a small target with `::after { inset: -10px }`. Web-specific:

- **Label in Name (SC 2.5.3):** the accessible name contains the visible label (voice control activates by visible text).
- **Container queries** size components by container, not viewport; content-based breakpoints, web defaults **640 / 768 / 1024px** plus an 80rem (1280) step.
- `color-scheme: light dark`; `min-h-dvh`, never `100vh`, on mobile; logical properties for RTL; submit behaviour per forms.md.
- An installable PWA needs HTTPS, a manifest (name, icons, start URL, standalone display) and a service worker; `theme_color` tints browser chrome.