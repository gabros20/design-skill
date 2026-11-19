# Surface: Web App

Purpose: Design product UI on the web — dashboards, admin, SaaS tools, settings, and data interfaces, where the design SERVES the product. Owns density modes, data display and selection, expert/operational tools, dashboards, and web-platform specifics.

Read when:
- The request is product/app UI (not marketing): an internal tool, dashboard, admin console, settings surface, or data-dense screen.
- You are deciding density, choosing a layout paradigm for a data view, or checking web-platform conformance.

Skip when:
- The surface is a marketing site (→ surface-website) or native (→ surface-ios / surface-android).
- The rule is generic: state design (8-state model), forms, feedback/latency, overlays/modals, search → interaction.md; grids/spacing/elevation → layout-composition.md. This file owns only the webapp-specific layer.

Inputs: user type (power / enterprise / consumer), the data model, a density decision.
Produces: density mode, layout paradigm, data-display and selection patterns, web-platform conformance.

## Contents
- Serve-register craft
- Density modes
- Layout paradigm and skeleton consistency
- Data display and selection
- Expert and operational tools
- Domain-expert configuration
- Enterprise design systems
- Color-mode decision
- Web-platform specifics

## Serve-register craft

Generic hierarchy rules apply but live elsewhere: one focal point per view, weight+color over size, and 60/30/10 distribution → layout-composition.md and color.md. Concentric radius and tabular-nums for dynamic figures → interaction.md (Static polish). The webapp-specific layer:

- **Surface elevation is a numbered system of lighter surfaces** (ladder in imagery-depth-decoration.md); light mode stays light and adds shadow instead. Sidebars share the canvas background (a different color fragments into "sidebar world" vs "content world") — a subtle border is enough. Dropdowns/popovers sit one elevation above their parent. Inputs are slightly *darker* than surroundings (inset "type here"). Borders use low-opacity rgba (`rgba(255,255,255,0.06–0.12)` dark), not solid hex.
- Proportions speak: a 280px sidebar beside full-width content says "navigation serves content"; 360px says "these are peers." A sidebar is earned by more than ~7 destinations (below that, a top bar); a modal is the last answer, after inline editing and disclosure.
- **What the world may touch:** on a working screen the visual world lends type, palette, density and *one* signature move ("service health drawn as a transit map"); layout, navigation model and controls stay standard. A world borrowed from an instrument the user operates (terminal, cockpit, ledger) comes back as a costume. App surfaces stay essentially neutral — a background that reads as a colour has gone too far. Grey plus one accent is the category default without the polish, not restraint. Test: cover the name; does it still read as a working product of its category? Alternatives vary the organisation (nav model, work-area split, which data leads, density), never "more world".
- **The wow is felt, not seen:** an instant optimistic save, a dialog that grows from its button, 100k rows that never stutter.

## Density modes

Density is a decision expressed in px, held consistently. Defaults: **row 44px · compact 32px · spacious 56px.** Operational/expert tools run denser (**rows 28–36px**). Choose by platform (desktop med-high / mobile low) and user type (power/enterprise high OK / consumer low). **"Reading is time"** — cut words before shrinking them; a recognizable icon replaces reading, a wrong/decorative one adds work; front-load the scannable word or number at line start. Goal: the user should *glance*, not *read*.

## Layout paradigm and skeleton consistency

**Derive the paradigm from IA + brand intent** (order: IA & brand → paradigm → consistency), never "dashboard because it looks impressive." Paradigms: Feed · Board/Kanban · Table · Gallery/Grid · Master-detail · Dashboard · Canvas · Timeline · Map · Single-focus/Wizard · Narrative long-scroll — each with a "why it fits" and a "when NOT."

**Three scales of consistency:** Macro (paradigm + page skeleton) · Meso (component family) · Micro (states/tokens/type). Reuse page-skeleton templates (list/detail/editor/settings) identically — "learn one detail page, learned them all." Deviate only for task reasons, and then completely and obviously (a distinct mode), never subtly ("almost-but-not-quite reads as a bug").

## Data display and selection

Row/card selection, the mass-action toolbar, and sticky header/first-column patterns are interaction.md canon. Webapp-specific data craft:

- Virtualize lists above ~1000 items. **Make numbers comprehensible:** a bare number needs a reference ("€48,900 (+12% vs last month)"); a KPI that moves over time carries its recent trace with the onset of change marked; round to the precision the user acts on (10.2k).
- **Dashboard composition:** title the screen by its page or period ("October 2026"), never a greeting; lead with one hero figure, one main chart that is clearly the biggest thing, and one table or ranked list — a KPI wall of equal gauges is the tell. A stat card is label, figure and change with what it compares to — no sparkline, icon tile or tally as filler. Vary several blocks' form by weight (hero number, bar, status-coloured number, stat row) in one voice; a figure in a warning state has its fix action beside it. The signature is the object the tool is known by (the ledger, the queue).
- **Pick the chart form first:** one value → a stat tile, never a one-bar chart · a few values → a stat row or horizontal bars · a trend → a line · parts of a whole → one stacked horizontal bar or a ranked list, never pie, donut or gauge · >~7 categories → a table. Familiar over exotic ("novelty in a chart type is a tax on comprehension"). Bars start at zero; a truncated axis that exaggerates a change is an invented metric unless it says "axis starts at 94%"; two units become small multiples, never a second y-axis. One accent on the series that argues, the rest neutral or a lightness ramp of that hue; separate categories by opacity, pattern or line style before a new hue; >3 series take a CVD-safe categorical set (Okabe-Ito), never a rainbow; label lines directly rather than through a legend; labels stay in ink.
- **Tables:** numeric columns lining + tabular, right- or decimal-aligned; text left; icon/status centred; each header aligned like its data. On a phone keep the column that names each row and the one that acts on it in view (restack rows as labelled blocks or pin the first column); content a desktop shows is never simply hidden on a phone.
- **Coordinated views:** selection state lives in ONE shared store both views read/write; clicking a visual scrolls the table row into view; colour is identical across views from one source. Highlight (hover, transient) ≠ Selection (click, persistent); debounce hover.

## Expert and operational tools

Information over whitespace (dense rows, inline status, text labels over icon-only for experts). Workflow linearity (left→right / top→bottom). **Persistent state:** filters, columns, panels survive reload. Prefer hierarchical accordion tables **in-place** over drill-down pages (preserves sibling-status visibility + keyboard). Keep **workflow-state filters** (persistent sidebar) separate from **search filters** (transient) — the operator switches mental mode. Bulk feedback scales: <10 inline · 10–100 toast with count · 100+ progress + summary.

## Domain-expert configuration

Domain language over technical (`max_concurrent_jobs` → "Maximum tasks running at once"); if you can't write a domain label, the param belongs in a config file, not the UI. Group by domain concept, not by type/alphabetical. Every param shows a visible default + reset; units are mandatory and adjacent. Progressive disclosure: primary (80% of tasks) / advanced (collapsed) / developer (not in UI). Validate in domain terms, inline, and surface interactions ("when retry is off, max-attempts has no effect").

## Enterprise design systems

Enterprise webapps deviate from consumer-web defaults. **Consensus: UI text is 13–14px, not 16px** (long-form reading stays 16px; typography.md floors). Canvas convention is either gray-canvas + white-card or white-canvas + layer alternation (Carbon layers white ↔ `#f4f4f4` instead of shadows). App-shell dimensions run tight: Modus navbar 56px + sidebar 60/300px (collapsed/expanded) · Carbon header 48px (`#161616`) · Salesforce/SLDS header 50px + 3px blue border · Polaris top bar 56px dark + nav 240px.

If the brief matches one of these systems, adopt it — don't recreate its CSS or override 90% of its tokens. Their distinguishing deviations (the ones a model gets wrong):

| System | Font / body | Signature deviations |
|---|---|---|
| Carbon (IBM) | IBM Plex Sans / 14px | radius **0** (signature); large headings weight **300**; layer tokens (not shadows); ON-state green `#198038`; primary `#0f62fe`; focus 2px inset outline; 16-col / 32px-gutter grid; motion Productive 70–240ms / Expressive 150–400ms |
| Modus (Trimble) | Open Sans / 14px | radius 4px (cards 8, never >8); **uniform non-directional shadows** `0 0 Npx rgba(37,42,46,0.3)`; cool grays; buttons 32px/600; disabled opacity 0.3; alerts with 12px left border; `#0063A3` |
| Polaris (Shopify) | system stack / 13px | primary buttons **dark `#303030`, not blue**; links `#005BD3` separate from brand green `#008060`; radius 8 buttons / 12 cards; borders **0.66px**; motion 150ms |
| Spectrum (Adobe) | Adobe Clean | accent `#0D80D8` light / `#2A9AF4` dark; radius 4/8; disabled opacity **0.38**; focus = 2px outline + 2px offset (not box-shadow); transitions 130ms ease-out; pure-neutral grays |
| Lightning/SLDS (Salesforce) | Salesforce Sans / 13px | **gray page bg `#F3F3F3` + white cards** (inverted from white-page systems); focus = glow `0 0 3px #0070D2`; buttons weight 400; brand `#0176d3` |

## Color-mode decision

Mode is a brand/context decision, not a user preference by default. Offer a theme selector only when the user spends hours/day in the tool (dev tools, trading, ERP, creative — yes; marketing/e-commerce — no, commit to one). Respect `prefers-color-scheme` as the default + `[data-theme]` override. Dark mode is a second verified palette, not an algorithmic flip — contrast passing on light routinely fails on dark.

## Web-platform specifics

Floors live in accessibility.md (targets: 24×24 CSS px AA with the spacing exception, 44×44 AAA, `::after { inset: -10px }` to expand; reflow at 320px; never `maximum-scale=1`; focus indicator perimeter × 2px at 3:1 via `:focus-visible`). Web-specific:

- **Label in Name (SC 2.5.3):** the accessible name contains the visible label (voice control activates by visible text).
- **Container queries** size components by container, not viewport; content-based breakpoints, web defaults **640 / 768 / 1024px** plus an 80rem (1280) step.
- `prefers-contrast: more` = macOS/iOS Increase Contrast; forced colors = Windows High Contrast (system keywords `ButtonText`/`ButtonFace`/`ButtonBorder`); `color-scheme: light dark`.
- `min-h-dvh`, never `100vh`, on mobile; logical properties for RTL; don't disable submit buttons — validate on submit.
- **PWA manifest** requires `name` + `icons` + `start_url` + `display: standalone` + HTTPS + a service worker with a `fetch` handler; `theme_color` tints browser chrome.