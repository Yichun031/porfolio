import React from "react";
import { Reveal, SectionNumber } from "./primitives";
import { Wave, CurvedArrow, Check } from "./Doodles";

// ── Case header ───────────────────────────────────────────────
export const CaseHeader = ({ id, num, title, subtitle, meta, intro }) => (
  <div id={id} className="mb-16 md:mb-24 scroll-mt-24">
    <div className="flex items-start gap-5 md:gap-8">
      <Reveal>
        <SectionNumber style={{ fontSize: "clamp(3rem,10vw,9rem)" }} className="block leading-[0.8]">
          {num}
        </SectionNumber>
      </Reveal>
      <div className="pt-1 md:pt-3">
        <Reveal delay={0.05}>
          <h2 className="font-display uppercase text-ink" style={{ fontSize: "clamp(2rem,6vw,5.5rem)", fontWeight: 700, lineHeight: 0.9, letterSpacing: "-0.02em" }}>
            {title}
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="font-display uppercase text-ink-soft mt-3" style={{ fontSize: "clamp(13px,1.4vw,16px)", letterSpacing: "0.08em" }}>
            {subtitle}
          </p>
        </Reveal>
        {meta && (
          <Reveal delay={0.16}>
            <p className="font-hand text-pink mt-2" style={{ fontSize: "clamp(16px,1.6vw,22px)" }}>{meta}</p>
          </Reveal>
        )}
      </div>
    </div>
    {intro && (
      <Reveal delay={0.18}>
        <p className="text-ink max-w-3xl mt-8" style={{ fontSize: "clamp(17px,1.7vw,23px)", lineHeight: 1.6 }}>
          {intro}
        </p>
      </Reveal>
    )}
  </div>
);

// ── Sub-section label (e.g. 01 SOCIAL MEDIA CONTENT) ──────────
export const SubHead = ({ num, title }) => (
  <Reveal>
    <div className="flex items-baseline gap-4 mb-8 pt-4" style={{ borderTop: "1px solid var(--line)" }}>
      <span className="section-number" style={{ fontSize: "clamp(20px,2vw,30px)" }}>{num}</span>
      <h3 className="font-display uppercase text-ink" style={{ fontSize: "clamp(18px,2.4vw,32px)", fontWeight: 600, letterSpacing: "-0.01em" }}>
        {title}
      </h3>
    </div>
  </Reveal>
);

// ── Horizontal numbered workflow with wavy connecting line ────
export const WorkflowChain = ({ steps }) => (
  <Reveal>
    <div className="relative flex flex-wrap items-center gap-x-3 gap-y-4">
      {steps.map((s, i) => (
        <React.Fragment key={s}>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full" style={{ border: "1.5px solid var(--line)" }}>
            <span className="text-pink font-display" style={{ fontSize: "12px", fontWeight: 700 }}>{String(i + 1).padStart(2, "0")}</span>
            <span className="font-display text-ink" style={{ fontSize: "clamp(12px,1.2vw,14px)" }}>{s}</span>
          </span>
          {i < steps.length - 1 && <Wave className="w-10 md:w-12 shrink-0" />}
        </React.Fragment>
      ))}
    </div>
  </Reveal>
);

// ── Small chip diagram (Hook · Structure · Reference · Cover) ─
export const ChipRow = ({ fields }) => (
  <div className="flex flex-wrap items-center gap-2 mt-4">
    {fields.map((f, i) => (
      <React.Fragment key={f}>
        <span className="px-3 py-1.5 font-display text-ink" style={{ fontSize: "12px", backgroundColor: "var(--grey)", borderRadius: 2 }}>{f}</span>
        {i < fields.length - 1 && <span className="text-pink" aria-hidden>→</span>}
      </React.Fragment>
    ))}
  </div>
);

// ── Horizontal arrow flow of boxes ────────────────────────────
export const ArrowFlow = ({ steps, title, caption }) => (
  <Reveal>
    <div>
      {title && (
        <h4 className="font-display uppercase text-ink mb-6" style={{ fontSize: "clamp(14px,1.5vw,18px)", letterSpacing: "0.06em" }}>{title}</h4>
      )}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-4">
        {steps.map((s, i) => (
          <React.Fragment key={i}>
            <div className="p-5 h-full" style={{ border: "1.5px solid var(--line)", borderRadius: 2 }}>
              <p className="font-display text-ink" style={{ fontSize: "clamp(13px,1.3vw,16px)", fontWeight: 600 }}>
                {typeof s === "string" ? s : s.title}
              </p>
              {typeof s !== "string" && s.body && (
                <p className="text-ink-soft mt-2" style={{ fontSize: "13px" }}>{s.body}</p>
              )}
            </div>
            {i < steps.length - 1 && (
              <div className="flex justify-center md:rotate-0 rotate-90">
                <CurvedArrow className="w-10" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      {caption && <p className="text-ink-soft mt-5 max-w-2xl" style={{ fontSize: "14px" }}>{caption}</p>}
    </div>
  </Reveal>
);

// ── "What I supported" checklist with pink check doodles ──────
export const SupportedList = ({ items, title = "What I Supported" }) => (
  <Reveal>
    <div>
      <h4 className="font-display uppercase text-ink mb-5" style={{ fontSize: "clamp(14px,1.5vw,18px)", letterSpacing: "0.06em" }}>{title}</h4>
      <ul className="flex flex-col gap-3 max-w-2xl">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-3">
            <Check className="w-6 shrink-0 mt-1" />
            <span className="text-ink" style={{ fontSize: "clamp(15px,1.4vw,18px)" }}>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  </Reveal>
);
