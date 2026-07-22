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

// Hero: "a design request routes into a state-complete artifact and a handoff."
// The thing an expert whiteboards to explain the skill — a faceted router composing the
// smallest sufficient reference set, a wireframe resolving into the 8-state model, the scored
// critique gate, and the frontend handoff. 22s, loops cleanly (opens and closes on an empty stage).
//
// Scene map (30fps):
//   S1 request  0–114    the /design prompt types in
//   S2 route    114–258  three facet lanes; one chip selected per lane (smallest sufficient set)
//   S3 produce  258–402  a wireframe resolves into the 8-state grid, tokens snap in
//   S4 critique 402–558  scored gate: Nielsen bar fills, severities clear, GO verdict stamps
//   S5 handoff  558–660  the artifact collapses to handoff.yaml + tokens → frontend, fades to loop

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

const SceneTitle: React.FC<{ t: Theme; kicker: string; title: string }> = ({ t, kicker, title }) => (
  <div style={{ textAlign: "center", marginBottom: 30 }}>
    <div
      style={{
        fontFamily: SANS,
        textTransform: "uppercase",
        letterSpacing: "0.18em",
        fontWeight: 600,
        fontSize: 17,
        color: t.accent,
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

// ── S1 · the request ──────────────────────────────────────────────────────────
const SceneRequest: React.FC<{ t: Theme; dur: number }> = ({ t, dur }) => {
  const frame = useCurrentFrame();
  const { opacity, y } = envelope(frame, dur, 22);
  const full = "design an onboarding flow — iOS, state-complete";
  const chars = Math.floor(
    interpolate(frame, [12, 66], [0, full.length], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }),
  );
  const typed = full.slice(0, chars);
  const caretOn = Math.floor(frame / 8) % 2 === 0;
  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", opacity }}>
      <div style={{ translate: `0 ${y}px`, width: 860 }}>
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
          one line starts it — no flags, no config
        </div>
        <div
          style={{
            background: t.codeBg,
            border: `1px solid ${t.line}`,
            borderRadius: 12,
            padding: "26px 30px",
            fontFamily: MONO,
            fontSize: 30,
            lineHeight: 1.5,
            color: t.ink,
          }}
        >
          <span style={{ color: t.accent, fontWeight: 700 }}>/design</span>{" "}
          <span>{typed}</span>
          <span style={{ opacity: caretOn ? 1 : 0, color: t.accent }}>▋</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ── S2 · route to the smallest sufficient set ────────────────────────────────
const Lane: React.FC<{
  t: Theme;
  label: string;
  chips: string[];
  selected: number;
  reveal: number; // 0..1 how many chips shown
  lit: number; // 0..1 selection glow
}> = ({ t, label, chips, selected, reveal, lit }) => {
  const shown = Math.round(reveal * chips.length);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
      <div
        style={{
          fontFamily: SANS,
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          fontWeight: 600,
          fontSize: 16,
          color: t.muted,
          width: 168,
          textAlign: "right",
          flex: "none",
        }}
      >
        {label}
      </div>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        {chips.map((c, i) => {
          const isSel = i === selected;
          const visible = i < shown;
          const glow = isSel ? lit : 0;
          return (
            <div
              key={c}
              style={{
                fontFamily: MONO,
                fontSize: 21,
                padding: "9px 15px",
                borderRadius: 9,
                opacity: visible ? (isSel ? 1 : interpolate(glow, [0, 1], [0.9, 0.32])) : 0,
                color: isSel ? t.accentInk : t.muted,
                background: isSel
                  ? `color-mix(in srgb, ${t.accent} ${40 + glow * 60}%, ${t.panel})`
                  : t.panel,
                border: `1px solid ${isSel ? t.accent : t.line}`,
                boxShadow: isSel ? `0 8px 26px -12px ${t.accent}` : "none",
                scale: String(isSel ? interpolate(glow, [0, 1], [1, 1.06]) : 1),
              }}
            >
              {c}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const SceneRoute: React.FC<{ t: Theme; dur: number }> = ({ t, dur }) => {
  const frame = useCurrentFrame();
  const { opacity, y } = envelope(frame, dur);
  const r1 = interpolate(frame, [20, 55], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const r2 = interpolate(frame, [40, 75], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const r3 = interpolate(frame, [60, 95], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const lit = interpolate(frame, [95, 125], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });
  const capOp = interpolate(frame, [120, 145], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", opacity }}>
      <div style={{ translate: `0 ${y}px` }}>
        <SceneTitle t={t} kicker="route · not a pipeline" title="the smallest sufficient set" />
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <Lane
            t={t}
            label="primary job"
            chips={["research", "journeys", "interaction", "visual", "critique"]}
            selected={2}
            reveal={r1}
            lit={lit}
          />
          <Lane
            t={t}
            label="surface · ≤1"
            chips={["website", "web app", "iOS", "android"]}
            selected={2}
            reveal={r2}
            lit={lit}
          />
          <Lane
            t={t}
            label="concerns"
            chips={["accessibility", "content"]}
            selected={0}
            reveal={r3}
            lit={lit}
          />
        </div>
        <div
          style={{
            marginTop: 30,
            textAlign: "center",
            fontFamily: MONO,
            fontSize: 20,
            color: t.muted,
            opacity: capOp,
          }}
        >
          3 of 21 references loaded ·{" "}
          <span style={{ color: t.accent }}>nothing unrelated is read</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ── S3 · produce the state-complete artifact ─────────────────────────────────
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

const SceneProduce: React.FC<{ t: Theme; dur: number }> = ({ t, dur }) => {
  const frame = useCurrentFrame();
  const { opacity, y } = envelope(frame, dur);
  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", opacity }}>
      <div style={{ translate: `0 ${y}px` }}>
        <SceneTitle t={t} kicker="produce · exact values" title="the eight-state model" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 224px)",
            gap: 16,
          }}
        >
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
                {/* wireframe placeholder that dissolves into the rendered state */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: wire,
                  }}
                >
                  <div style={{ width: 120, height: 26, borderRadius: 7, background: t.wire }} />
                </div>
                <div style={{ opacity: appear, display: "flex", flexDirection: "column", alignItems: "center", gap: 9 }}>
                  {s.render(t)}
                  <div
                    style={{
                      fontFamily: SANS,
                      fontSize: 13.5,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: t.muted,
                    }}
                  >
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
        {/* Nielsen 0–40 bar */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 22 }}>
          <div
            style={{
              fontFamily: SANS,
              fontSize: 16,
              color: t.muted,
              width: 150,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            heuristics
          </div>
          <div
            style={{
              flex: 1,
              height: 20,
              borderRadius: 10,
              background: t.codeBg,
              border: `1px solid ${t.line}`,
              overflow: "hidden",
            }}
          >
            <div style={{ width: `${fill * 100}%`, height: "100%", background: t.accent, borderRadius: 10 }} />
          </div>
          <div
            style={{
              fontFamily: MONO,
              fontSize: 24,
              color: t.ink,
              width: 78,
              textAlign: "right",
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {scoreNum}/40
          </div>
        </div>
        {/* severity rows */}
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
        {/* GO verdict */}
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
    ["artifacts:", " onboarding/*, tokens.json"],
    ["states:", " 8 + empty · covered"],
    ["motion_plan:", " reduced-motion ✓"],
  ];
  const arrowOp = interpolate(frame, [50, 74], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });
  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", opacity }}>
      <div style={{ translate: `0 ${y}px`, display: "flex", alignItems: "center", gap: 34 }}>
        <div style={{ width: 470 }}>
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
              fontSize: 21,
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
const PhaseBar: React.FC<{ t: Theme; frame: number; total: number }> = ({ t, frame, total }) => {
  const bounds = [114, 258, 402, 558, total];
  const active = bounds.findIndex((b) => frame < b);
  const labels = ["request", "route", "produce", "critique", "handoff"];
  return (
    <div
      style={{
        position: "absolute",
        bottom: 40,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        gap: 26,
      }}
    >
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

  // loop-safe: open and close on the empty stage
  const intro = interpolate(frame, [0, 14], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const outro = interpolate(frame, [durationInFrames - 16, durationInFrames], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const master = Math.min(intro, outro);

  // decorative accent glow, matches the og-image composition
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
          <SceneRequest t={t} dur={114} />
        </Sequence>
        <Sequence from={114} durationInFrames={144}>
          <SceneRoute t={t} dur={144} />
        </Sequence>
        <Sequence from={258} durationInFrames={144}>
          <SceneProduce t={t} dur={144} />
        </Sequence>
        <Sequence from={402} durationInFrames={156}>
          <SceneCritique t={t} dur={156} />
        </Sequence>
        <Sequence from={558} durationInFrames={102}>
          <SceneHandoff t={t} dur={102} />
        </Sequence>
        <PhaseBar t={t} frame={frame} total={durationInFrames} />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
