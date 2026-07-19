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

- **One focal point per view.** Every screen has one thing the user came to do; it dominates via size, contrast, position, or surrounding space. "When everything competes equally, nothing wins and the interface reads like a parking lot." Promotion without demotion is not hierarchy.
- **Weight + color do more hierarchy work than size.** One 14px size can hold three tiers: value 600/primary · label 500/secondary · meta 400/muted. Build from size + weight + color together, never size alone.
- **Distribution ≈ 60/30/10** — dominant neutral surface, secondary tone, ~10% accent. Gray builds structure; color communicates (status, action, identity). Reach for whitespace and tonal shift before borders/dividers.
- **Surface elevation is a numbered system**, each jump a few % lightness: dark base → +7% → +9% → +12%; light mode stays light and adds shadow instead. Sidebars share the canvas background (a different color fragments into "sidebar world" vs "content world") — a subtle border is enough. Dropdowns/popovers sit one elevation above their parent. Inputs are slightly *darker* than surroundings (inset "type here"). Borders use low-opacity rgba (`rgba(255,255,255,0.06–0.12)` dark), not solid hex.
- **Concentric radius:** nested rounded element → `outerRadius = innerRadius + padding`. Same radius on parent and child is the most common thing that makes UI feel off.
- **Tabular numbers** (`font-variant-numeric: tabular-nums`) on any dynamic number — counters, prices, timers, table columns — to prevent layout shift.
- Proportions speak: a 280px sidebar beside full-width content says "navigation serves content"; 360px says "these are peers." If you can't articulate what a proportion says, it isn't saying anything.

## Density modes

Density is a decision expressed in px, held consistently. Defaults: **row 44px · compact 32px · spacious 56px.** Operational/expert tools run denser (**rows 28–36px**). Choose by platform (desktop med-high / mobile low) and user type (power/enterprise high OK / consumer low). **"Reading is time"** — cut words before shrinking them; a recognizable icon replaces reading, a wrong/decorative one adds work; front-load the scannable word or number at line start. Goal: the user should *glance*, not *read*.

## Layout paradigm and skeleton consistency

**Derive the paradigm from IA + brand intent** (order: IA & brand → paradigm → consistency), never "dashboard because it looks impressive." Paradigms: Feed · Board/Kanban · Table · Gallery/Grid · Master-detail · Dashboard · Canvas · Timeline · Map · Single-focus/Wizard · Narrative long-scroll — each with a "why it fits" and a "when NOT."

**Three scales of consistency:** Macro (paradigm + page skeleton) · Meso (component family) · Micro (states/tokens/type). Reuse page-skeleton templates (list/detail/editor/settings) identically — "learn one detail page, learned them all." Deviate only for task reasons, and then completely and obviously (a distinct mode), never subtly ("almost-but-not-quite reads as a bug").

## Data display and selection

- **The entire row/card is the hit area**, not the 16px checkbox; the checkbox is an indicator, not the sole path. Per-row actions appear on hover.
- **Mass-action toolbar** appears on selection, leads with the count ("3 selected"), and names the count on destructive actions. Select-all is per-page + a "select all 247" extend.
- **Sticky header + sticky first column** in tables (`top:0` / `left:0`, higher z-index). Virtualize lists above ~1000 items.
- **Make numbers comprehensible:** a bare number communicates little — give a reference (%, average, delta, comparison — "€48,900 (+12% vs last month)"). Chart when the story is trend/distribution/comparison/relationship; choose familiar charts (bar/line/area/pie/sparkline) over exotic (sankey/radar/chord) — "novelty in a chart type is a tax on comprehension." ≤2–3 colors, each meaning one thing; add legend/tooltips, not hues.
- **Coordinated views:** selection state lives in ONE shared store both views read/write; clicking a visual scrolls the table row into view; color is identical across views from a single source (legend once). Highlight (hover, transient) ≠ Selection (click, persistent) — distinct visuals; debounce hover.

## Expert and operational tools

Information over whitespace (dense rows, inline status, text labels over icon-only for experts). Workflow linearity (left→right / top→bottom). **Persistent state:** filters, columns, panels survive reload. Prefer hierarchical accordion tables **in-place** over drill-down pages (preserves sibling-status visibility + keyboard). Keep **workflow-state filters** (persistent sidebar) separate from **search filters** (transient) — the operator switches mental mode. Bulk feedback scales: <10 inline · 10–100 toast with count · 100+ progress + summary.

## Domain-expert configuration

Domain language over technical (`max_concurrent_jobs` → "Maximum tasks running at once"); if you can't write a domain label, the param belongs in a config file, not the UI. Group by domain concept, not by type/alphabetical. Every param shows a visible default + reset; units are mandatory and adjacent. Progressive disclosure: primary (80% of tasks) / advanced (collapsed) / developer (not in UI). Validate in domain terms, inline, and surface interactions ("when retry is off, max-attempts has no effect").

## Enterprise design systems

Enterprise webapps deviate from consumer-web defaults. **Consensus: body text is 13–14px, not 16px.** Canvas convention is either gray-canvas + white-card or white-canvas + layer alternation (Carbon layers white ↔ `#f4f4f4` instead of shadows). App-shell dimensions run tight: Modus navbar 56px + sidebar 60/300px (collapsed/expanded) · Carbon header 48px (`#161616`) · Salesforce/SLDS header 50px + 3px blue border · Polaris top bar 56px dark + nav 240px.

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

The web's target and reflow numbers differ from native; accessibility.md owns the full cross-platform floor table — carry these in context here:

- **Touch targets:** 44×44 CSS px is WCAG 2.5.5 **AAA**; 2.5.8 **AA** requires only **24×24px** with ≥24px spacing. Expand tap area invisibly via `::after { inset: -10px }`.
- **Reflow at 320px width with no horizontal scroll** (SC 1.4.10). Never `maximum-scale=1` / `user-scalable=no` (breaks pinch-zoom, SC 1.4.4).
- **Container queries** (`container-type: inline-size`; `@container`) — size components by container, not viewport. Fluid sizing via `clamp()`/`min()`/`max()`. Content-based breakpoints 30rem / 48rem / 64rem / 80rem.
- **Focus indicator (WCAG 2.2):** min area = component perimeter × 2px, 3:1 contrast; use `:focus-visible`.
- **Label in Name (SC 2.5.3):** the accessible name must contain the visible label as a substring (voice control activates by visible text).
- `prefers-contrast: more` = macOS/iOS Increase Contrast; `prefers-contrast: forced` = Windows High Contrast (overrides colors — use system keywords `ButtonText`/`ButtonFace`/`ButtonBorder`). Set `color-scheme: light dark`.
- Use `min-h-dvh` / `h-dvh`, never `100vh`, on mobile. CSS logical properties for RTL (`margin-inline-start`, `inline-size`). Animate only `transform`/`opacity` (compositor). Don't disable submit buttons — validate on submit.
- **PWA manifest** requires `name` + `icons` + `start_url` + `display: standalone` + HTTPS + a service worker with a `fetch` handler; `theme_color` tints browser chrome and the task switcher.
