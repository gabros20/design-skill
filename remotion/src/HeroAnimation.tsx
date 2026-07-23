import React from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { themes, MONO, SANS, type ThemeName, type Theme } from "./theme";

// Hero: "one skill, the whole design surface." The thing an expert whiteboards to explain the skill —
// a request sweeps the entire capability: the upstream jobs (research → journeys → IA) decide what's
// true and where things live; naming the register forks the work into an art-directed brand surface
// and a served product surface; the craft leaves (type, color, grid, motion) carry it in exact tokens;
// the eight-state model finishes the components; the scored critique gate judges it; a handoff ships it.
// ~57s, loops (opens and closes on an empty stage). States is one brief beat, never the centerpiece.
//
// Pacing model (reader-first): every scene animates its content IN, then HOLDS fully still for a
// reading beat (~2.3–4s, scaled to how much there is to read) before the container fades OUT. The
// fade-out begins at dur − <envelope hold>, so each scene's dur = content-in-end + reading-hold +
// fade. Never let the next scene start before this one has been readable at rest.
//
// Scene map (30fps):
//   S1 ask      0–170      two /design asks type in — one per register
//   S2 upstream 170–402    research → IA: a sitemap forms (structure before pixels)
//   S3 register 402–644    name the register: a fork into design IS vs design SERVES the product
//   S4 direction 644–858   design IS: an art-directed landing composition forms
//   S5 craft    858–1092   the craft leaves compose — type scale, OKLCH ramp, grid, motion (poster beat)
//   S6 states   1092–1280  interaction: the eight-state model, one compact beat
//   S7 critique 1280–1516  scored gate: Nielsen bar fills, severities clear, GO verdict stamps
//   S8 handoff  1516–1700  the artifact collapses to handoff.yaml + tokens → frontend, fades to loop

const EASE = Easing.bezier(0.16, 1, 0.3, 1);

function envelope(frame: number, dur: number, hold = 26) {
  const opIn = interpolate(frame, [0, hold], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE });
  const opOut = interpolate(frame, [dur - hold, dur], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE });
  const y = interpolate(frame, [0, hold], [14, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE });
  return { opacity: Math.min(opIn, opOut), y };
}

const step = (frame: number, a: number, b: number, ease = false) =>
  interpolate(frame, [a, b], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: ease ? EASE : undefined });

const SceneTitle: React.FC<{ t: Theme; kicker: string; title: string; accent?: string }> = ({ t, kicker, title, accent }) => (
  <div style={{ textAlign: "center", marginBottom: 30 }}>
    <div style={{ fontFamily: SANS, textTransform: "uppercase", letterSpacing: "0.18em", fontWeight: 600, fontSize: 17, color: accent ?? t.accent, marginBottom: 12 }}>
      {kicker}
    </div>
    <div style={{ fontFamily: MONO, fontSize: 40, color: t.ink, letterSpacing: "-0.02em" }}>{title}</div>
  </div>
);

// ── S1 · two asks, one per register ──────────────────────────────────────────
const AskLine: React.FC<{ t: Theme; text: string; frame: number; from: number }> = ({ t, text, frame, from }) => {
  const chars = Math.floor(interpolate(frame, [from, from + 32], [0, text.length], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }));
  const typed = text.slice(0, chars);
  const caretOn = Math.floor(frame / 8) % 2 === 0 && chars < text.length && frame > from;
  const op = step(frame, from - 4, from + 6);
  return (
    <div style={{ opacity: op }}>
      <span style={{ color: t.accent, fontWeight: 700 }}>/design</span> <span>{typed}</span>
      <span style={{ opacity: caretOn ? 1 : 0, color: t.accent }}>▋</span>
    </div>
  );
};

const SceneAsk: React.FC<{ t: Theme; dur: number }> = ({ t, dur }) => {
  const frame = useCurrentFrame();
  const { opacity, y } = envelope(frame, dur, 22);
  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", opacity }}>
      <div style={{ translate: `0 ${y}px`, width: 940 }}>
        <div style={{ fontFamily: SANS, textTransform: "uppercase", letterSpacing: "0.18em", fontWeight: 600, fontSize: 16, color: t.muted, marginBottom: 20, textAlign: "center" }}>
          one skill, the whole design surface
        </div>
        <div style={{ background: t.codeBg, border: `1px solid ${t.line}`, borderRadius: 12, padding: "26px 30px", fontFamily: MONO, fontSize: 23, lineHeight: 2, color: t.ink }}>
          <AskLine t={t} text="set a visual direction for a landing page" frame={frame} from={8} />
          <AskLine t={t} text="design an onboarding flow — iOS, state-complete" frame={frame} from={46} />
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ── S2 · upstream: research → IA, a sitemap forms ────────────────────────────
const Node: React.FC<{ t: Theme; label: string; sub?: string; appear: number; accent?: boolean }> = ({ t, label, sub, appear, accent }) => (
  <div
    style={{
      opacity: appear,
      scale: String(interpolate(appear, [0, 1], [0.7, 1])),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 4,
      background: accent ? `color-mix(in srgb, ${t.accent} 20%, ${t.panel})` : t.panel,
      border: `1px solid ${accent ? t.accent : t.line}`,
      borderRadius: 10,
      padding: "12px 22px",
    }}
  >
    <span style={{ fontFamily: MONO, fontSize: 21, color: accent ? t.accent : t.ink, fontWeight: 600 }}>{label}</span>
    {sub && <span style={{ fontFamily: SANS, fontSize: 12.5, color: t.muted, textTransform: "uppercase", letterSpacing: "0.08em" }}>{sub}</span>}
  </div>
);

const SceneUpstream: React.FC<{ t: Theme; dur: number }> = ({ t, dur }) => {
  const frame = useCurrentFrame();
  const { opacity, y } = envelope(frame, dur);
  const root = step(frame, 22, 46, true);
  const lines = step(frame, 40, 70, true);
  const kids = [step(frame, 52, 76, true), step(frame, 62, 86, true), step(frame, 72, 96, true)];
  const cap = step(frame, 92, 116);
  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", opacity }}>
      <div style={{ translate: `0 ${y}px`, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <SceneTitle t={t} kicker="before the pixels · research → IA" title="structure first" />
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Node t={t} label="Home" appear={root} />
          {/* connectors */}
          <div style={{ position: "relative", width: 620, height: 34, opacity: lines }}>
            <div style={{ position: "absolute", left: "50%", top: 0, width: 2, height: 17, background: t.line }} />
            <div style={{ position: "absolute", left: 100, right: 100, top: 17, height: 2, background: t.line }} />
            <div style={{ position: "absolute", left: 100, top: 17, width: 2, height: 17, background: t.line }} />
            <div style={{ position: "absolute", left: "50%", top: 17, width: 2, height: 17, background: t.line }} />
            <div style={{ position: "absolute", right: 100, top: 17, width: 2, height: 17, background: t.line }} />
          </div>
          <div style={{ display: "flex", gap: 26 }}>
            <Node t={t} label="Budgets" sub="list + detail" appear={kids[0]} accent />
            <Node t={t} label="Expenses" sub="list + detail" appear={kids[1]} accent />
            <Node t={t} label="Settings" appear={kids[2]} />
          </div>
        </div>
        <div style={{ marginTop: 30, textAlign: "center", fontFamily: MONO, fontSize: 19, color: t.muted, opacity: cap }}>
          objects <span style={{ color: t.ink }}>Budget ─&lt; Expense</span> · nav ≤7 ·{" "}
          <span style={{ color: t.accent }}>any item &lt; 3 clicks</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ── S3 · name the register (the fork) ────────────────────────────────────────
const Branch: React.FC<{ t: Theme; accent: string; title: string; bar: string; chips: string[]; note: string; appear: number; lit: number }> = ({ t, accent, title, bar, chips, note, appear, lit }) => (
  <div style={{ opacity: appear, translate: `0 ${interpolate(appear, [0, 1], [16, 0])}px`, width: 430, background: t.panel, border: `1px solid ${t.line}`, borderTop: `3px solid ${accent}`, borderRadius: 12, padding: "22px 24px" }}>
    <div style={{ fontFamily: MONO, fontSize: 22, color: t.ink }}>
      design <span style={{ color: accent, fontWeight: 700 }}>{title}</span> the product
    </div>
    <div style={{ fontFamily: SANS, textTransform: "uppercase", letterSpacing: "0.09em", fontSize: 14, fontWeight: 600, color: t.muted, margin: "8px 0 18px" }}>{bar}</div>
    <div style={{ display: "flex", gap: 9, flexWrap: "wrap", marginBottom: 16 }}>
      {chips.map((c, i) => {
        const on = i === 0;
        return (
          <div key={c} style={{ fontFamily: MONO, fontSize: 18, padding: "7px 13px", borderRadius: 8, color: on ? t.accentInk : t.muted, background: on ? `color-mix(in srgb, ${accent} ${40 + lit * 60}%, ${t.panel})` : t.bg, border: `1px solid ${on ? accent : t.line}`, scale: String(on ? interpolate(lit, [0, 1], [1, 1.05]) : 1) }}>
            {c}
          </div>
        );
      })}
    </div>
    <div style={{ fontFamily: SANS, fontSize: 15, color: t.muted, lineHeight: 1.5 }}>{note}</div>
  </div>
);

const SceneRegister: React.FC<{ t: Theme; dur: number }> = ({ t, dur }) => {
  const frame = useCurrentFrame();
  const { opacity, y } = envelope(frame, dur);
  const pill = step(frame, 16, 40, true);
  const left = step(frame, 40, 70, true);
  const right = step(frame, 58, 88, true);
  const lit = step(frame, 82, 106, true);
  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", opacity }}>
      <div style={{ translate: `0 ${y}px`, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ opacity: pill, fontFamily: SANS, textTransform: "uppercase", letterSpacing: "0.16em", fontWeight: 600, fontSize: 15, color: t.accent, marginBottom: 8 }}>route · name the register first</div>
        <div style={{ fontFamily: MONO, fontSize: 38, color: t.ink, letterSpacing: "-0.02em", marginBottom: 30, opacity: pill }}>one skill, two registers</div>
        <div style={{ display: "flex", gap: 22, alignItems: "flex-start" }}>
          <Branch t={t} accent={t.accent} title="IS" bar="distinctiveness is the bar" chips={["website", "landing", "portfolio"]} note="Pick a macrostructure and one bold move; make it distinctive." appear={left} lit={lit} />
          <Branch t={t} accent={t.amber} title="SERVES" bar="earned familiarity is the bar" chips={["web app", "dashboard", "settings"]} note="The full state set; proven patterns; trusted on sight." appear={right} lit={lit} />
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ── S4 · design IS the product — an art-directed landing composition ─────────
const SceneDirection: React.FC<{ t: Theme; dur: number }> = ({ t, dur }) => {
  const frame = useCurrentFrame();
  const { opacity, y } = envelope(frame, dur);
  const canvas = step(frame, 18, 40, true);
  const head = step(frame, 34, 62, true);
  const ring = interpolate(frame, [50, 82], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.bezier(0.34, 1.3, 0.64, 1) });
  const palette = [t.accent, t.amber, t.good, t.ink, t.muted];
  const cta = step(frame, 76, 98);
  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", opacity }}>
      <div style={{ translate: `0 ${y}px` }}>
        <SceneTitle t={t} kicker="produce · design IS the product" title="an art-directed landing" />
        <div style={{ position: "relative", width: 900, height: 384, background: t.panel, border: `1px solid ${t.line}`, borderRadius: 16, overflow: "hidden", opacity: canvas, scale: String(interpolate(canvas, [0, 1], [0.97, 1])), boxShadow: `0 40px 90px -50px ${t.accent}` }}>
          <div style={{ position: "absolute", top: 26, left: 32, display: "flex", gap: 10, opacity: head }}>
            <span style={{ fontFamily: MONO, fontSize: 13, color: t.accentInk, background: t.accent, padding: "4px 11px", borderRadius: 6, letterSpacing: "0.02em" }}>MARQUEE HERO</span>
            <span style={{ fontFamily: SANS, textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 600, fontSize: 12, color: t.muted, alignSelf: "center" }}>editorial lane</span>
          </div>
          <div style={{ position: "absolute", right: 70, top: 92, width: 190, height: 190, borderRadius: "50%", border: `14px solid ${t.accent}`, opacity: ring, scale: String(interpolate(ring, [0, 1], [0.4, 1])) }} />
          <div style={{ position: "absolute", right: 60, top: 44, fontFamily: SANS, textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600, fontSize: 12, color: t.accent, opacity: ring }}>one bold move ↘</div>
          <div style={{ position: "absolute", left: 32, top: 120, maxWidth: 520, fontFamily: SANS, fontSize: 82, fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 0.98, color: t.ink, opacity: head, translate: `0 ${interpolate(head, [0, 1], [18, 0])}px` }}>
            Made<br />to last.
          </div>
          <div style={{ position: "absolute", left: 32, bottom: 78, display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ display: "flex", gap: 8 }}>
              {palette.map((c, i) => {
                const sw = step(frame, 60 + i * 6, 74 + i * 6);
                return <div key={i} style={{ width: 34, height: 34, borderRadius: 8, background: c, border: `1px solid ${t.line}`, opacity: sw, scale: String(interpolate(sw, [0, 1], [0.5, 1])) }} />;
              })}
            </div>
            <span style={{ fontFamily: SANS, textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600, fontSize: 12, color: t.muted, opacity: cta }}>committed palette</span>
          </div>
          <div style={{ position: "absolute", left: 32, bottom: 26, fontFamily: MONO, fontSize: 16, fontWeight: 600, color: t.accentInk, background: t.accent, padding: "9px 18px", borderRadius: 9, opacity: cta }}>See the work →</div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ── S5 · the craft leaves compose (poster beat) ──────────────────────────────
const CraftCard: React.FC<{ t: Theme; title: string; appear: number; children: React.ReactNode }> = ({ t, title, appear, children }) => (
  <div style={{ opacity: appear, translate: `0 ${interpolate(appear, [0, 1], [16, 0])}px`, width: 400, height: 168, background: t.panel, border: `1px solid ${t.line}`, borderRadius: 12, padding: "16px 20px", display: "flex", flexDirection: "column" }}>
    <div style={{ fontFamily: MONO, fontSize: 15, color: t.accent, marginBottom: 12 }}>{title}</div>
    {children}
  </div>
);

const SceneCraft: React.FC<{ t: Theme; dur: number }> = ({ t, dur }) => {
  const frame = useCurrentFrame();
  const { opacity, y } = envelope(frame, dur);
  const ramp = ["oklch(0.97 0.02 293)", "oklch(0.90 0.07 293)", "oklch(0.79 0.14 293)", "oklch(0.67 0.20 293)", "oklch(0.55 0.24 293)", "oklch(0.45 0.20 293)", "oklch(0.34 0.13 293)"];
  const mtiers = [["micro", 0.2], ["UI", 0.42], ["surface", 0.66], ["entrance", 1]] as const;
  const c = [step(frame, 20, 46, true), step(frame, 34, 60, true), step(frame, 48, 74, true), step(frame, 62, 88, true)];
  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", opacity }}>
      <div style={{ translate: `0 ${y}px` }}>
        <SceneTitle t={t} kicker="produce · the craft leaves" title="craft, in exact values" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 400px)", gap: 16 }}>
          {/* typography */}
          <CraftCard t={t} title="typography · scale" appear={c[0]}>
            <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {[[36, "39"], [28, "31"], [22, "25"], [16, "16"]].map(([sz, lab]) => (
                <div key={lab} style={{ display: "flex", alignItems: "baseline", gap: 12, borderBottom: `1px solid ${t.line}`, paddingBottom: 2 }}>
                  <span style={{ fontFamily: SANS, fontWeight: 800, fontSize: sz as number, color: t.ink, letterSpacing: "-0.02em", lineHeight: 1 }}>Ag</span>
                  <span style={{ fontFamily: MONO, fontSize: 12, color: t.muted, marginLeft: "auto" }}>{lab}px · ratio 1.25</span>
                </div>
              ))}
            </div>
          </CraftCard>
          {/* color */}
          <CraftCard t={t} title="color · OKLCH ramp" appear={c[1]}>
            <div style={{ display: "flex", height: 40, borderRadius: 8, overflow: "hidden", border: `1px solid ${t.line}`, marginBottom: 14 }}>
              {ramp.map((cc, i) => <div key={i} style={{ flex: 1, background: cc }} />)}
            </div>
            <div style={{ fontFamily: MONO, fontSize: 13, color: t.muted }}>
              hue 293 · <span style={{ color: t.ink }}>hover L−0.03 · active L−0.05</span>
            </div>
            <div style={{ fontFamily: MONO, fontSize: 12, color: t.muted, marginTop: 6 }}>accent ≤5% · 60-30-10</div>
          </CraftCard>
          {/* layout */}
          <CraftCard t={t} title="layout · 12-col grid" appear={c[2]}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gridAutoRows: 30, gap: 5, marginBottom: 10 }}>
              <div style={{ gridColumn: "1 / 8", gridRow: "1 / 3", background: `color-mix(in srgb, ${t.accent} 22%, ${t.panel})`, border: `1px solid ${t.accent}`, borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: MONO, fontSize: 12, color: t.accent }}>one focal point</div>
              <div style={{ gridColumn: "8 / 13", background: t.codeBg, border: `1px solid ${t.line}`, borderRadius: 6 }} />
              <div style={{ gridColumn: "8 / 13", background: t.codeBg, border: `1px solid ${t.line}`, borderRadius: 6 }} />
            </div>
            <div style={{ fontFamily: MONO, fontSize: 12, color: t.muted }}>4·8·12·16·24·32·48·64·96</div>
          </CraftCard>
          {/* motion */}
          <CraftCard t={t} title="motion · canonical scale" appear={c[3]}>
            <div style={{ display: "flex", flexDirection: "column", gap: 9, marginBottom: 12 }}>
              {mtiers.map(([lab, w]) => (
                <div key={lab} style={{ display: "grid", gridTemplateColumns: "96px 1fr", alignItems: "center", gap: 10 }}>
                  <div style={{ height: 8, width: `${(w as number) * 100}%`, minWidth: 14, background: t.accent, borderRadius: 4 }} />
                  <span style={{ fontFamily: MONO, fontSize: 12.5, color: t.ink }}>{lab}</span>
                </div>
              ))}
            </div>
            <div style={{ fontFamily: MONO, fontSize: 12, color: t.muted }}>80–800ms · exit ≈ 60–75%</div>
          </CraftCard>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ── S6 · interaction: the eight-state model (one compact beat) ───────────────
const Btn: React.FC<{ t: Theme; bg: string; fg: string; label: string; ring?: boolean; press?: boolean; border?: string; dashed?: boolean }> = ({ t, bg, fg, label, ring, press, border, dashed }) => (
  <div style={{ fontFamily: MONO, fontSize: 16, fontWeight: 600, color: fg, background: bg, padding: "9px 15px", borderRadius: 8, border: dashed ? `1.5px dashed ${t.line}` : `1.5px solid ${border ?? "transparent"}`, outline: ring ? `2.5px solid ${t.accent}` : "none", outlineOffset: 2, translate: press ? "0 1.5px" : "0 0", whiteSpace: "nowrap" }}>
    {label}
  </div>
);

const STATES: { k: string; render: (t: Theme) => React.ReactNode }[] = [
  { k: "default", render: (t) => <Btn t={t} bg={t.accent} fg={t.accentInk} label="default" /> },
  { k: "hover", render: (t) => <Btn t={t} bg={`color-mix(in srgb,${t.accent} 82%,#000)`} fg={t.accentInk} label="hover" /> },
  { k: "focus", render: (t) => <Btn t={t} bg={t.accent} fg={t.accentInk} label="focus" ring /> },
  { k: "active", render: (t) => <Btn t={t} bg={`color-mix(in srgb,${t.accent} 70%,#000)`} fg={t.accentInk} label="active" press /> },
  { k: "disabled", render: (t) => <Btn t={t} bg={t.line} fg={t.muted} label="disabled" /> },
  { k: "loading", render: (t) => <Btn t={t} bg={t.accent} fg={t.accentInk} label="loading" /> },
  { k: "error", render: (t) => <Btn t={t} bg="transparent" fg={t.bad} label="error" border={t.bad} /> },
  { k: "success", render: (t) => <Btn t={t} bg="transparent" fg={t.good} label="success" border={t.good} /> },
  { k: "empty", render: (t) => <Btn t={t} bg="transparent" fg={t.muted} label="empty" dashed /> },
];

const SceneStates: React.FC<{ t: Theme; dur: number }> = ({ t, dur }) => {
  const frame = useCurrentFrame();
  const { opacity, y } = envelope(frame, dur, 20);
  const cap = step(frame, 56, 78);
  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", opacity }}>
      <div style={{ translate: `0 ${y}px`, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <SceneTitle t={t} kicker="produce · design SERVES the product" title="the eight-state model" accent={t.amber} />
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12, maxWidth: 860 }}>
          {STATES.map((s, i) => {
            const a = step(frame, 20 + i * 5, 38 + i * 5, true);
            return <div key={s.k} style={{ opacity: a, scale: String(interpolate(a, [0, 1], [0.8, 1])) }}>{s.render(t)}</div>;
          })}
        </div>
        <div style={{ marginTop: 26, fontFamily: MONO, fontSize: 17, color: t.muted, opacity: cap }}>
          eight states <span style={{ color: t.accent }}>+ empty</span> for every data region
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ── S7 · the scored critique gate ────────────────────────────────────────────
const SceneCritique: React.FC<{ t: Theme; dur: number }> = ({ t, dur }) => {
  const frame = useCurrentFrame();
  const { opacity, y } = envelope(frame, dur);
  const fill = interpolate(frame, [22, 72], [0, 34 / 40], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE });
  const scoreNum = Math.round(fill * 40);
  const rowOp = (d: number) => step(frame, 52 + d, 70 + d);
  const stamp = interpolate(frame, [86, 110], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.bezier(0.34, 1.56, 0.64, 1) });
  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", opacity }}>
      <div style={{ translate: `0 ${y}px`, width: 720 }}>
        <SceneTitle t={t} kicker="critique · scored gate" title="a binary verdict" />
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 22 }}>
          <div style={{ fontFamily: SANS, fontSize: 16, color: t.muted, width: 150, textTransform: "uppercase", letterSpacing: "0.1em" }}>heuristics</div>
          <div style={{ flex: 1, height: 20, borderRadius: 10, background: t.codeBg, border: `1px solid ${t.line}`, overflow: "hidden" }}>
            <div style={{ width: `${fill * 100}%`, height: "100%", background: t.accent, borderRadius: 10 }} />
          </div>
          <div style={{ fontFamily: MONO, fontSize: 24, color: t.ink, width: 78, textAlign: "right", fontVariantNumeric: "tabular-nums" }}>{scoreNum}/40</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {[{ d: 0, k: "A0 · direction", v: "clear" }, { d: 14, k: "A1 · composition & detail", v: "clear" }, { d: 28, k: "presumptive blockers", v: "none" }].map((r) => (
            <div key={r.k} style={{ opacity: rowOp(r.d), display: "flex", alignItems: "center", justifyContent: "space-between", fontFamily: MONO, fontSize: 20, padding: "10px 18px", borderRadius: 10, background: t.panel, border: `1px solid ${t.line}`, color: t.muted }}>
              <span>{r.k}</span>
              <span style={{ color: t.good, fontWeight: 700 }}>{r.v} ✓</span>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginTop: 26 }}>
          <div style={{ opacity: stamp, scale: String(interpolate(stamp, [0, 1], [0.6, 1])), fontFamily: MONO, fontSize: 34, fontWeight: 700, letterSpacing: "0.04em", color: t.accentInk, background: t.accent, padding: "10px 40px", borderRadius: 12, boxShadow: `0 18px 50px -20px ${t.accent}` }}>GO</div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ── S8 · the frontend handoff ────────────────────────────────────────────────
const SceneHandoff: React.FC<{ t: Theme; dur: number }> = ({ t, dur }) => {
  const frame = useCurrentFrame();
  const { opacity, y } = envelope(frame, dur, 20);
  const yamlLines = [["skill:", " design"], ["status:", " complete"], ["artifacts:", " landing/*, onboarding/*, tokens.json"], ["states:", " 8 + empty · covered"], ["motion_plan:", " reduced-motion ✓"]];
  const arrowOp = step(frame, 50, 74, true);
  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", opacity }}>
      <div style={{ translate: `0 ${y}px`, display: "flex", alignItems: "center", gap: 34 }}>
        <div style={{ width: 520 }}>
          <div style={{ fontFamily: SANS, textTransform: "uppercase", letterSpacing: "0.14em", fontWeight: 600, fontSize: 15, color: t.accent, marginBottom: 14 }}>handoff.yaml</div>
          <div style={{ background: t.codeBg, border: `1px solid ${t.line}`, borderRadius: 12, padding: "20px 24px", fontFamily: MONO, fontSize: 20, lineHeight: 1.85 }}>
            {yamlLines.map(([k, v], i) => {
              const op = step(frame, 14 + i * 8, 30 + i * 8);
              return (
                <div key={k} style={{ opacity: op }}>
                  <span style={{ color: t.accent }}>{k}</span><span style={{ color: t.ink }}>{v}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, opacity: arrowOp }}>
          <div style={{ fontFamily: MONO, fontSize: 40, color: t.accent }}>→</div>
          <div style={{ fontFamily: SANS, textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 600, fontSize: 15, color: t.muted, textAlign: "center", lineHeight: 1.4 }}>frontend<br />build</div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ── persistent chrome + master timeline ──────────────────────────────────────
const BOUNDS = [170, 402, 644, 858, 1092, 1280, 1516, 1700];
const LABELS = ["ask", "research", "register", "direction", "craft", "states", "critique", "handoff"];

const PhaseBar: React.FC<{ t: Theme; frame: number }> = ({ t, frame }) => {
  const active = BOUNDS.findIndex((b) => frame < b);
  return (
    <div style={{ position: "absolute", bottom: 38, left: 0, right: 0, display: "flex", justifyContent: "center", gap: 18 }}>
      {LABELS.map((l, i) => (
        <div key={l} style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: i === active ? t.accent : t.line, scale: String(i === active ? 1.3 : 1) }} />
          <div style={{ fontFamily: SANS, textTransform: "uppercase", letterSpacing: "0.09em", fontSize: 12, fontWeight: 600, color: i === active ? t.ink : t.muted, opacity: i === active ? 1 : 0.55 }}>{l}</div>
        </div>
      ))}
    </div>
  );
};

export const HeroAnimation: React.FC<{ theme: ThemeName }> = ({ theme }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const t = themes[theme];

  const intro = step(frame, 0, 14);
  const outro = interpolate(frame, [durationInFrames - 16, durationInFrames], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const master = Math.min(intro, outro);
  const glow = interpolate(Math.sin(frame / 90), [-1, 1], [0.5, 1]);

  return (
    <AbsoluteFill style={{ backgroundColor: t.bg, fontFamily: SANS }}>
      <AbsoluteFill style={{ background: `radial-gradient(circle at 82% 16%, color-mix(in srgb, ${t.accent} 13%, transparent), transparent 44%), radial-gradient(circle at 8% 92%, color-mix(in srgb, ${t.accent} 9%, transparent), transparent 48%)`, opacity: glow }} />
      <AbsoluteFill style={{ opacity: master }}>
        <Sequence from={0} durationInFrames={170}><SceneAsk t={t} dur={170} /></Sequence>
        <Sequence from={170} durationInFrames={232}><SceneUpstream t={t} dur={232} /></Sequence>
        <Sequence from={402} durationInFrames={242}><SceneRegister t={t} dur={242} /></Sequence>
        <Sequence from={644} durationInFrames={214}><SceneDirection t={t} dur={214} /></Sequence>
        <Sequence from={858} durationInFrames={234}><SceneCraft t={t} dur={234} /></Sequence>
        <Sequence from={1092} durationInFrames={188}><SceneStates t={t} dur={188} /></Sequence>
        <Sequence from={1280} durationInFrames={236}><SceneCritique t={t} dur={236} /></Sequence>
        <Sequence from={1516} durationInFrames={184}><SceneHandoff t={t} dur={184} /></Sequence>
        <PhaseBar t={t} frame={frame} />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
