import React from "react";
import { content } from "../../data/content";
import { Reveal, PullQuote } from "../primitives";
import { CaseHeader, SubHead, WorkflowChain } from "../CaseParts";
import { Car, Signal, Camera, TrendArrow, Wave, CurvedArrow } from "../Doodles";

// Keyword chips: pill, 1px grey border, no fill, small dark text, 8px gaps, wraps
const Chips = ({ items }) => (
  <div className="flex flex-wrap gap-2">
    {items.map((c) => (
      <span
        key={c}
        className="font-body text-ink"
        style={{ border: "1px solid var(--line)", borderRadius: 999, padding: "6px 14px", fontSize: "13px", lineHeight: 1.2 }}
      >
        {c}
      </span>
    ))}
  </div>
);

const MetricsStrip = ({ metrics }) => (
  <Reveal>
    <div className="mb-16 w-full max-w-2xl">
      <div className="grid grid-cols-1 min-[480px]:grid-cols-3" style={{ border: "2px dashed var(--pink)", borderRadius: 2 }}>
        {metrics.map((m, i) => (
          <div
            key={m.label}
            className={`text-center py-7 px-4 ${i > 0 ? "border-t min-[480px]:border-t-0 min-[480px]:border-l border-line" : ""}`}
          >
            <div className="section-number leading-none" style={{ fontSize: "clamp(34px,5vw,60px)" }}>{m.value}</div>
            <div className="font-display uppercase text-ink-soft mt-2" style={{ fontSize: "11px", letterSpacing: "0.12em" }}>{m.label}</div>
          </div>
        ))}
      </div>
    </div>
  </Reveal>
);

// Four-column structure with numbered pink circles + wavy connectors
const NumberColumns = ({ items, showWhen }) => (
  <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 mb-14">
    {items.map((p, i) => (
      <Reveal key={p.num} delay={i * 0.07}>
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="flex items-center justify-center rounded-full font-display font-bold text-white" style={{ width: 42, height: 42, backgroundColor: "var(--pink)", fontSize: 15 }}>
              {p.num}
            </span>
            {i < items.length - 1 && <Wave className="w-12 hidden md:block" />}
          </div>
          {showWhen && <p className="font-hand text-pink mb-1" style={{ fontSize: "clamp(16px,1.6vw,20px)" }}>{p.when}</p>}
          <h4 className="font-display uppercase text-ink mb-3" style={{ fontSize: "clamp(14px,1.5vw,18px)", fontWeight: 600 }}>{p.title}</h4>
          <Chips items={p.chips} />
        </div>
      </Reveal>
    ))}
  </div>
);

export const CaseTesla = () => {
  const d = content.tesla;
  return (
    <section className="relative py-24 md:py-32 bg-grey">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="relative">
          <Car className="absolute right-0 top-0 w-16 md:w-24 hidden md:block" />
          <CaseHeader id="tesla" num={d.num} title={d.title} subtitle={d.subtitle} intro={d.intro} />
        </div>

        <MetricsStrip metrics={d.metrics} />

        {/* 01 KOS */}
        <SubHead num={d.kos.num} title={d.kos.title} />
        <Reveal>
          <p className="font-hand text-pink mb-6" style={{ fontSize: "clamp(18px,2vw,26px)" }}>{d.kos.strap}</p>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="text-ink max-w-3xl mb-8" style={{ fontSize: "clamp(15px,1.5vw,18px)", lineHeight: 1.65 }}>{d.kos.context}</p>
        </Reveal>
        <div className="mb-8">
          <WorkflowChain steps={d.kos.workflow} />
        </div>
        <Reveal>
          <div className="mb-12">
            <p className="font-display uppercase text-ink-soft mb-3" style={{ fontSize: "11px", letterSpacing: "0.12em" }}>Tracked</p>
            <Chips items={d.kos.tracked} />
          </div>
        </Reveal>
        <div className="mb-20 relative">
          <TrendArrow className="w-16 mb-4" />
          <PullQuote>{d.kos.pullquote}</PullQuote>
        </div>

        {/* 02 Livestream */}
        <div className="relative">
          <Signal className="absolute right-2 -top-2 w-14 hidden md:block" />
          <SubHead num={d.live.num} title={d.live.title} />
        </div>
        <Reveal>
          <p className="font-hand text-pink mb-8" style={{ fontSize: "clamp(18px,2vw,26px)" }}>{d.live.strap}</p>
        </Reveal>
        <NumberColumns items={d.live.phases} />

        {/* Live signal diagram */}
        <Reveal>
          <div className="mb-20">
            <h4 className="font-display uppercase text-ink mb-6" style={{ fontSize: "clamp(14px,1.5vw,18px)", letterSpacing: "0.06em" }}>{d.live.signal.title}</h4>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-4">
              {d.live.signal.steps.map((s, i) => (
                <React.Fragment key={s.title}>
                  <div className="p-5 h-full" style={{ border: "1.5px solid var(--line)", borderRadius: 2 }}>
                    <p className="font-display text-ink mb-3" style={{ fontSize: "clamp(13px,1.3vw,16px)", fontWeight: 600 }}>{s.title}</p>
                    <Chips items={s.chips} />
                  </div>
                  {i < d.live.signal.steps.length - 1 && (
                    <div className="flex justify-center md:rotate-0 rotate-90">
                      <CurvedArrow className="w-10" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
            <p className="text-ink-soft mt-5 max-w-2xl" style={{ fontSize: "14px" }}>{d.live.signal.caption}</p>
          </div>
        </Reveal>

        {/* 03 Offline Event */}
        <div className="relative">
          <Camera className="absolute right-2 -top-2 w-14 hidden md:block" />
          <SubHead num={d.event.num} title={d.event.title} />
        </div>
        <Reveal>
          <p className="font-hand text-pink mb-8" style={{ fontSize: "clamp(18px,2vw,26px)" }}>{d.event.strap}</p>
        </Reveal>
        <NumberColumns items={d.event.timeline} showWhen />
        <PullQuote>{d.event.pullquote}</PullQuote>
      </div>
    </section>
  );
};
