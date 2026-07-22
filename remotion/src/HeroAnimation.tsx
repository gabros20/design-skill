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

// Hero: "one skill, two registers — a request routes into a distinctive, state-complete artifact
// and a handoff." The thing an expert whiteboards to explain the skill: naming the register (design
// IS vs SERVES the product) is the first move, and it forks into two kinds of craft — an art-directed
// brand/landing composition on one side, the eight-state product-UI model on the other — both scored
// by one critique gate and packaged into one handoff. 26s, loops (opens and closes on an empty stage).
//
// Scene map (30fps):
//   S1 ask        0–114    two /design asks type in — one per register
//   S2 register   114–264  name the register: a fork into design IS vs design SERVES the product
//   S3a direction 264–414  design IS: an art-directed landing composition forms (poster beat)
//   S3b states    414–552  design SERVES: the eight-state model resolves from wireframe
//   S4 critique   552–684  scored gate: Nielsen bar fills, severities clear, GO verdict stamps
//   S5 handoff    684–780  the artifact collapses to handoff.yaml + tokens → frontend, fades to loop

const EASE = Easing.bezier(0.16, 1, 0.3, 1);

// enter/hold/exit opacity + lift envelope, expressed in a scene's LOCAL frame
function envelope(frame: number, dur: number, hold = 26) {
  const opIn = interpolate(frame, [0, hold], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });
  const opOut = interpolate(frame, [dur - hold, dur], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });
  const y = interpolate(frame, [0, hold], [14, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });
  return { opacity: Math.min(opIn, opOut), y };
}

const SceneTitle: React.FC<{ t: Theme; kicker: string; title: string; accent?: string }> = ({
  t,
  kicker,
  title,
  accent,
}) => (
  <div style={{ textAlign: "center", marginBottom: 30 }}>
    <div
      style={{
        fontFamily: SANS,
        textTransform: "uppercase",
        letterSpacing: "0.18em",
        fontWeight: 600,
        fontSize: 17,
        color: accent ?? t.accent,
        marginBottom: 12,
      }}
    >
      {kicker}
    </div>
    <div style={{ fontFamily: MONO, fontSize: 40, color: t.ink, letterSpacing: "-0.02em" }}>
      {title}
    </div>
  </div>
);

// ── S1 · two asks, one per register ──────────────────────────────────────────
const AskLine: React.FC<{ t: Theme; text: string; frame: number; from: number }> = ({
  t,
  text,
  frame,
  from,
}) => {
  const chars = Math.floor(
    interpolate(frame, [from, from + 32], [0, text.length], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }),
  );
  const typed = text.slice(0, chars);
  const caretOn = Math.floor(frame / 8) % 2 === 0 && chars < text.length && frame > from;
  const op = interpolate(frame, [from - 4, from + 6], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <div style={{ opacity: op }}>
      <span style={{ color: t.accent, fontWeight: 700 }}>/design</span>{" "}
      <span>{typed}</span>
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
        <div
          style={{
            fontFamily: SANS,
            textTransform: "uppercase",
            letterSpacing: "0.18em",
            fontWeight: 600,
            fontSize: 16,
            color: t.muted,
            marginBottom: 20,
            textAlign: "center",
          }}
        >
          one skill, two registers — the register sets the bar
        </div>
        <div
          style={{
            background: t.codeBg,
            border: `1px solid ${t.line}`,
            borderRadius: 12,
            padding: "26px 30px",
            fontFamily: MONO,
            fontSize: 23,
            lineHeight: 2,
            color: t.ink,
          }}
        >
          <AskLine t={t} text="set a visual direction for a landing page" frame={frame} from={8} />
          <AskLine t={t} text="design an onboarding flow — iOS, state-complete" frame={frame} from={46} />
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ── S2 · name the register (the fork) ────────────────────────────────────────
const Branch: React.FC<{
  t: Theme;
  accent: string;
  title: string;
  bar: string;
  chips: string[];
  note: string;
  appear: number;
  lit: number;
}> = ({ t, accent, title, bar, chips, note, appear, lit }) => (
  <div
    style={{
      opacity: appear,
      translate: `0 ${interpolate(appear, [0, 1], [16, 0])}px`,
      width: 430,
      background: t.panel,
      border: `1px solid ${t.line}`,
      borderTop: `3px solid ${accent}`,
      borderRadius: 12,
      padding: "22px 24px",
    }}
  >
    <div style={{ fontFamily: MONO, fontSize: 22, color: t.ink }}>
      design <span style={{ color: accent, fontWeight: 700 }}>{title}</span> the product
    </div>
    <div
      style={{
        fontFamily: SANS,
        textTransform: "uppercase",
        letterSpacing: "0.09em",
        fontSize: 14,
        fontWeight: 600,
        color: t.muted,
        margin: "8px 0 18px",
      }}
    >
      {bar}
    </div>
    <div style={{ display: "flex", gap: 9, flexWrap: "wrap", marginBottom: 16 }}>
      {chips.map((c, i) => {
        const on = i === 0;
        return (
          <div
            key={c}
            style={{
              fontFamily: MONO,
              fontSize: 18,
              padding: "7px 13px",
              borderRadius: 8,
              color: on ? t.accentInk : t.muted,
              background: on ? `color-mix(in srgb, ${accent} ${40 + lit * 60}%, ${t.panel})` : t.bg,
              border: `1px solid ${on ? accent : t.line}`,
              scale: String(on ? interpolate(lit, [0, 1], [1, 1.05]) : 1),
            }}
          >
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
  const pill = interpolate(frame, [16, 40], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE });
  const left = interpolate(frame, [40, 70], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE });
  const right = interpolate(frame, [58, 88], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE });
  const lit = interpolate(frame, [92, 120], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE });
  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", opacity }}>
      <div style={{ translate: `0 ${y}px`, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div
          style={{
            opacity: pill,
            fontFamily: SANS,
            textTransform: "uppercase",
            letterSpacing: "0.16em",
            fontWeight: 600,
            fontSize: 15,
            color: t.accent,
            marginBottom: 8,
          }}
        >
          route · name the register first
        </div>
        <div style={{ fontFamily: MONO, fontSize: 38, color: t.ink, letterSpacing: "-0.02em", marginBottom: 30, opacity: pill }}>
          one skill, two registers
        </div>
        <div style={{ display: "flex", gap: 22, alignItems: "flex-start" }}>
          <Branch
            t={t}
            accent={t.accent}
            title="IS"
            bar="distinctiveness is the bar"
            chips={["website", "landing", "portfolio"]}
            note="Pick a macrostructure and one bold move; make it distinctive."
            appear={left}
            lit={lit}
          />
          <Branch
            t={t}
            accent={t.amber}
            title="SERVES"
            bar="earned familiarity is the bar"
            chips={["web app", "dashboard", "settings"]}
            note="The full state set; proven patterns; trusted on sight."
            appear={right}
            lit={lit}
          />
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ── S3a · design IS the product — an art-directed landing composition ─────────
const SceneDirection: React.FC<{ t: Theme; dur: number }> = ({ t, dur }) => {
  const frame = useCurrentFrame();
  const { opacity, y } = envelope(frame, dur);
  const canvas = interpolate(frame, [18, 40], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE });
  const head = interpolate(frame, [34, 62], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE });
  const ring = interpolate(frame, [50, 82], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.bezier(0.34, 1.3, 0.64, 1) });
  const palette = [t.accent, t.amber, t.good, t.ink, t.muted];
  const cta = interpolate(frame, [76, 98], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", opacity }}>
      <div style={{ translate: `0 ${y}px` }}>
        <SceneTitle t={t} kicker="produce · design IS the product" title="an art-directed landing" />
        <div
          style={{
            position: "relative",
            width: 900,
            height: 384,
            background: t.panel,
            border: `1px solid ${t.line}`,
            borderRadius: 16,
            overflow: "hidden",
            opacity: canvas,
            scale: String(interpolate(canvas, [0, 1], [0.97, 1])),
            boxShadow: `0 40px 90px -50px ${t.accent}`,
          }}
        >
          {/* macrostructure + aesthetic-lane label */}
          <div style={{ position: "absolute", top: 26, left: 32, display: "flex", gap: 10, opacity: head }}>
            <span
              style={{
                fontFamily: MONO,
                fontSize: 13,
                color: t.accentInk,
                background: t.accent,
                padding: "4px 11px",
                borderRadius: 6,
                letterSpacing: "0.02em",
              }}
            >
              MARQUEE HERO
            </span>
            <span
              style={{
                fontFamily: SANS,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                fontWeight: 600,
                fontSize: 12,
                color: t.muted,
                alignSelf: "center",
              }}
            >
              editorial lane
            </span>
          </div>
          {/* signature element — one bold move */}
          <div
            style={{
              position: "absolute",
              right: 70,
              top: 92,
              width: 190,
              height: 190,
              borderRadius: "50%",
              border: `14px solid ${t.accent}`,
              opacity: ring,
              scale: String(interpolate(ring, [0, 1], [0.4, 1])),
            }}
          />
          <div
            style={{
              position: "absolute",
              right: 60,
              top: 44,
              fontFamily: SANS,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              fontWeight: 600,
              fontSize: 12,
              color: t.accent,
              opacity: ring,
            }}
          >
            one bold move ↘
          </div>
          {/* display headline */}
          <div
            style={{
              position: "absolute",
              left: 32,
              top: 120,
              maxWidth: 520,
              fontFamily: SANS,
              fontSize: 82,
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 0.98,
              color: t.ink,
              opacity: head,
              translate: `0 ${interpolate(head, [0, 1], [18, 0])}px`,
            }}
          >
            Made<br />to last.
          </div>
          {/* committed palette */}
          <div style={{ position: "absolute", left: 32, bottom: 78, display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ display: "flex", gap: 8 }}>
              {palette.map((c, i) => {
                const sw = interpolate(frame, [60 + i * 6, 74 + i * 6], [0, 1], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                });
                return (
                  <div
                    key={i}
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: 8,
                      background: c,
                      border: `1px solid ${t.line}`,
                      opacity: sw,
                      scale: String(interpolate(sw, [0, 1], [0.5, 1])),
                    }}
                  />
                );
              })}
            </div>
            <span
              style={{
                fontFamily: SANS,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                fontWeight: 600,
                fontSize: 12,
                color: t.muted,
                opacity: cta,
              }}
            >
              committed palette
            </span>
          </div>
          {/* CTA */}
          <div
            style={{
              position: "absolute",
              left: 32,
              bottom: 26,
              fontFamily: MONO,
              fontSize: 16,
              fontWeight: 600,
              color: t.accentInk,
              background: t.accent,
              padding: "9px 18px",
              borderRadius: 9,
              opacity: cta,
            }}
          >
            See the work →
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ── S3b · design SERVES the product — the eight-state model ───────────────────
const Btn: React.FC<{
  t: Theme;
  bg: string;
  fg: string;
  label: string;
  ring?: boolean;
  press?: boolean;
  border?: string;
  dashed?: boolean;
}> = ({ t, bg, fg, label, ring, press, border, dashed }) => (
  <div
    style={{
      fontFamily: MONO,
      fontSize: 19,
      fontWeight: 600,
      color: fg,
      background: bg,
      padding: "10px 18px",
      borderRadius: 9,
      border: dashed ? `1.5px dashed ${t.line}` : `1.5px solid ${border ?? "transparent"}`,
      outline: ring ? `2.5px solid ${t.accent}` : "none",
      outlineOffset: 2,
      translate: press ? "0 1.5px" : "0 0",
      whiteSpace: "nowrap",
    }}
  >
    {label}
  </div>
);

const STATES: { k: string; render: (t: Theme) => React.ReactNode }[] = [
  { k: "default", render: (t) => <Btn t={t} bg={t.accent} fg={t.accentInk} label="Continue" /> },
  { k: "hover", render: (t) => <Btn t={t} bg={`color-mix(in srgb,${t.accent} 82%,#000)`} fg={t.accentInk} label="Continue" /> },
  { k: "focus", render: (t) => <Btn t={t} bg={t.accent} fg={t.accentInk} label="Continue" ring /> },
  { k: "active", render: (t) => <Btn t={t} bg={`color-mix(in srgb,${t.accent} 70%,#000)`} fg={t.accentInk} label="Continue" press /> },
  { k: "disabled", render: (t) => <Btn t={t} bg={t.line} fg={t.muted} label="Continue" /> },
  { k: "loading", render: (t) => <Btn t={t} bg={t.accent} fg={t.accentInk} label="•••" /> },
  { k: "error", render: (t) => <Btn t={t} bg="transparent" fg={t.bad} label="Try again" border={t.bad} /> },
  { k: "success", render: (t) => <Btn t={t} bg="transparent" fg={t.good} label="✓ Saved" border={t.good} /> },
  { k: "empty", render: (t) => <Btn t={t} bg="transparent" fg={t.muted} label="No data yet" dashed /> },
];

const SceneStates: React.FC<{ t: Theme; dur: number }> = ({ t, dur }) => {
  const frame = useCurrentFrame();
  const { opacity, y } = envelope(frame, dur);
  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", opacity }}>
      <div style={{ translate: `0 ${y}px` }}>
        <SceneTitle t={t} kicker="produce · design SERVES the product" title="the eight-state model" accent={t.amber} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 224px)", gap: 16 }}>
          {STATES.map((s, i) => {
            const start = 22 + i * 9;
            const wire = interpolate(frame, [start, start + 16], [1, 0], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: EASE,
            });
            const appear = interpolate(frame, [start, start + 18], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: EASE,
            });
            return (
              <div
                key={s.k}
                style={{
                  position: "relative",
                  height: 96,
                  borderRadius: 12,
                  background: t.panel,
                  border: `1px solid ${t.line}`,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  overflow: "hidden",
                }}
              >
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", opacity: wire }}>
                  <div style={{ width: 120, height: 26, borderRadius: 7, background: t.wire }} />
                </div>
                <div style={{ opacity: appear, display: "flex", flexDirection: "column", alignItems: "center", gap: 9 }}>
                  {s.render(t)}
                  <div style={{ fontFamily: SANS, fontSize: 13.5, textTransform: "uppercase", letterSpacing: "0.1em", color: t.muted }}>
                    {s.k}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ── S4 · the scored critique gate ────────────────────────────────────────────
const SceneCritique: React.FC<{ t: Theme; dur: number }> = ({ t, dur }) => {
  const frame = useCurrentFrame();
  const { opacity, y } = envelope(frame, dur);
  const fill = interpolate(frame, [24, 78], [0, 34 / 40], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });
  const scoreNum = Math.round(fill * 40);
  const rowOp = (d: number) =>
    interpolate(frame, [58 + d, 76 + d], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const stamp = interpolate(frame, [92, 116], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.34, 1.56, 0.64, 1),
  });
  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", opacity }}>
      <div style={{ translate: `0 ${y}px`, width: 720 }}>
        <SceneTitle t={t} kicker="critique · scored gate" title="a binary verdict" />
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 22 }}>
          <div style={{ fontFamily: SANS, fontSize: 16, color: t.muted, width: 150, textTransform: "uppercase", letterSpacing: "0.1em" }}>
            heuristics
          </div>
          <div style={{ flex: 1, height: 20, borderRadius: 10, background: t.codeBg, border: `1px solid ${t.line}`, overflow: "hidden" }}>
            <div style={{ width: `${fill * 100}%`, height: "100%", background: t.accent, borderRadius: 10 }} />
          </div>
          <div style={{ fontFamily: MONO, fontSize: 24, color: t.ink, width: 78, textAlign: "right", fontVariantNumeric: "tabular-nums" }}>
            {scoreNum}/40
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {[
            { d: 0, k: "A0 · direction", v: "clear" },
            { d: 14, k: "A1 · composition & detail", v: "clear" },
            { d: 28, k: "presumptive blockers", v: "none" },
          ].map((r) => (
            <div
              key={r.k}
              style={{
                opacity: rowOp(r.d),
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontFamily: MONO,
                fontSize: 20,
                padding: "10px 18px",
                borderRadius: 10,
                background: t.panel,
                border: `1px solid ${t.line}`,
                color: t.muted,
              }}
            >
              <span>{r.k}</span>
              <span style={{ color: t.good, fontWeight: 700 }}>{r.v} ✓</span>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginTop: 26 }}>
          <div
            style={{
              opacity: stamp,
              scale: String(interpolate(stamp, [0, 1], [0.6, 1])),
              fontFamily: MONO,
              fontSize: 34,
              fontWeight: 700,
              letterSpacing: "0.04em",
              color: t.accentInk,
              background: t.accent,
              padding: "10px 40px",
              borderRadius: 12,
              boxShadow: `0 18px 50px -20px ${t.accent}`,
            }}
          >
            GO
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ── S5 · the frontend handoff ────────────────────────────────────────────────
const SceneHandoff: React.FC<{ t: Theme; dur: number }> = ({ t, dur }) => {
  const frame = useCurrentFrame();
  const { opacity, y } = envelope(frame, dur, 20);
  const yamlLines = [
    ["skill:", " design"],
    ["status:", " complete"],
    ["artifacts:", " landing/*, onboarding/*, tokens.json"],
    ["states:", " 8 + empty · covered"],
    ["motion_plan:", " reduced-motion ✓"],
  ];
  const arrowOp = interpolate(frame, [50, 74], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE });
  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", opacity }}>
      <div style={{ translate: `0 ${y}px`, display: "flex", alignItems: "center", gap: 34 }}>
        <div style={{ width: 520 }}>
          <div
            style={{
              fontFamily: SANS,
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              fontWeight: 600,
              fontSize: 15,
              color: t.accent,
              marginBottom: 14,
            }}
          >
            handoff.yaml
          </div>
          <div
            style={{
              background: t.codeBg,
              border: `1px solid ${t.line}`,
              borderRadius: 12,
              padding: "20px 24px",
              fontFamily: MONO,
              fontSize: 20,
              lineHeight: 1.85,
            }}
          >
            {yamlLines.map(([k, v], i) => {
              const op = interpolate(frame, [14 + i * 8, 30 + i * 8], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              });
              return (
                <div key={k} style={{ opacity: op }}>
                  <span style={{ color: t.accent }}>{k}</span>
                  <span style={{ color: t.ink }}>{v}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, opacity: arrowOp }}>
          <div style={{ fontFamily: MONO, fontSize: 40, color: t.accent }}>→</div>
          <div
            style={{
              fontFamily: SANS,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              fontWeight: 600,
              fontSize: 15,
              color: t.muted,
              textAlign: "center",
              lineHeight: 1.4,
            }}
          >
            frontend
            <br />
            build
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ── persistent chrome + master timeline ──────────────────────────────────────
const PhaseBar: React.FC<{ t: Theme; frame: number }> = ({ t, frame }) => {
  const bounds = [114, 264, 414, 552, 684, 780];
  const active = bounds.findIndex((b) => frame < b);
  const labels = ["ask", "register", "direction", "states", "critique", "handoff"];
  return (
    <div style={{ position: "absolute", bottom: 40, left: 0, right: 0, display: "flex", justifyContent: "center", gap: 24 }}>
      {labels.map((l, i) => (
        <div key={l} style={{ display: "flex", alignItems: "center", gap: 9 }}>
          <div
            style={{
              width: 9,
              height: 9,
              borderRadius: "50%",
              background: i === active ? t.accent : t.line,
              scale: String(i === active ? 1.25 : 1),
            }}
          />
          <div
            style={{
              fontFamily: SANS,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              fontSize: 13,
              fontWeight: 600,
              color: i === active ? t.ink : t.muted,
              opacity: i === active ? 1 : 0.6,
            }}
          >
            {l}
          </div>
        </div>
      ))}
    </div>
  );
};

export const HeroAnimation: React.FC<{ theme: ThemeName }> = ({ theme }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const t = themes[theme];

  const intro = interpolate(frame, [0, 14], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const outro = interpolate(frame, [durationInFrames - 16, durationInFrames], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const master = Math.min(intro, outro);
  const glow = interpolate(Math.sin(frame / 90), [-1, 1], [0.5, 1]);

  return (
    <AbsoluteFill style={{ backgroundColor: t.bg, fontFamily: SANS }}>
      <AbsoluteFill
        style={{
          background: `radial-gradient(circle at 82% 16%, color-mix(in srgb, ${t.accent} 13%, transparent), transparent 44%), radial-gradient(circle at 8% 92%, color-mix(in srgb, ${t.accent} 9%, transparent), transparent 48%)`,
          opacity: glow,
        }}
      />
      <AbsoluteFill style={{ opacity: master }}>
        <Sequence from={0} durationInFrames={114}>
          <SceneAsk t={t} dur={114} />
        </Sequence>
        <Sequence from={114} durationInFrames={150}>
          <SceneRegister t={t} dur={150} />
        </Sequence>
        <Sequence from={264} durationInFrames={150}>
          <SceneDirection t={t} dur={150} />
        </Sequence>
        <Sequence from={414} durationInFrames={138}>
          <SceneStates t={t} dur={138} />
        </Sequence>
        <Sequence from={552} durationInFrames={132}>
          <SceneCritique t={t} dur={132} />
        </Sequence>
        <Sequence from={684} durationInFrames={96}>
          <SceneHandoff t={t} dur={96} />
        </Sequence>
        <PhaseBar t={t} frame={frame} />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
