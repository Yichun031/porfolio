import React from "react";
import { content } from "../../data/content";
import { Reveal, PullQuote } from "../primitives";
import { CaseHeader, SubHead, WorkflowChain, ChipRow, ArrowFlow, SupportedList } from "../CaseParts";
import { Car, Signal, Camera, TrendArrow, Wave } from "../Doodles";

const StreamRow = ({ streams }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
    {streams.map((s, i) => (
      <Reveal key={s.num} delay={i * 0.08}>
        <div className="pt-5" style={{ borderTop: "2px solid var(--ink)" }}>
          <span className="section-number block mb-3" style={{ fontSize: "clamp(28px,3vw,42px)" }}>{s.num}</span>
          <h4 className="font-display uppercase text-ink mb-3" style={{ fontSize: "clamp(15px,1.6vw,20px)", fontWeight: 600 }}>{s.title}</h4>
          <p className="text-ink-soft" style={{ fontSize: "clamp(14px,1.4vw,17px)" }}>{s.body}</p>
        </div>
      </Reveal>
    ))}
  </div>
);

const PhaseTimeline = ({ phases }) => (
  <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 mb-14">
    {phases.map((p, i) => (
      <Reveal key={p.num} delay={i * 0.07}>
        <div className="relative">
          <div className="flex items-center gap-3 mb-4">
            <span className="flex items-center justify-center rounded-full font-display font-bold text-white" style={{ width: 42, height: 42, backgroundColor: "var(--pink)", fontSize: 15 }}>
              {p.num}
            </span>
            {i < phases.length - 1 && <Wave className="w-12 hidden md:block" />}
          </div>
          <h4 className="font-display uppercase text-ink" style={{ fontSize: "clamp(14px,1.5vw,18px)", fontWeight: 600 }}>{p.title}</h4>
          <p className="text-ink-soft mb-3" style={{ fontSize: "13px" }}>{p.sub}</p>
          <ul className="flex flex-col gap-1.5">
            {p.items.map((it) => (
              <li key={it} className="text-ink flex gap-2" style={{ fontSize: "13.5px" }}>
                <span className="text-pink">·</span>{it}
              </li>
            ))}
          </ul>
          <p className="text-ink-soft mt-3 italic" style={{ fontSize: "12.5px" }}>{p.caption}</p>
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

        <StreamRow streams={d.streams} />

        {/* 01 KOS */}
        <SubHead num={d.kos.num} title={d.kos.title} />
        <Reveal>
          <p className="font-hand text-pink mb-6" style={{ fontSize: "clamp(18px,2vw,26px)" }}>{d.kos.strap}</p>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="text-ink max-w-3xl mb-8" style={{ fontSize: "clamp(15px,1.5vw,18px)", lineHeight: 1.65 }}>{d.kos.context}</p>
        </Reveal>
        <div className="mb-12">
          <WorkflowChain steps={d.kos.workflow} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 mb-12">
          {d.kos.blocks.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.05}>
              <div className="pt-4" style={{ borderTop: "1px solid var(--line)" }}>
                <h5 className="font-display text-ink mb-2" style={{ fontSize: "clamp(15px,1.5vw,18px)", fontWeight: 600 }}>{b.title}</h5>
                <p className="text-ink-soft" style={{ fontSize: "14px" }}>{b.body}</p>
                {b.diagram && <ChipRow fields={b.diagram} />}
              </div>
            </Reveal>
          ))}
        </div>
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
        <PhaseTimeline phases={d.live.phases} />
        <div className="mb-14">
          <PullQuote>{d.live.pullquote}</PullQuote>
        </div>
        <div className="mb-14">
          <ArrowFlow title={d.live.signal.title} steps={d.live.signal.steps} caption={d.live.signal.caption} />
        </div>
        <div className="mb-20">
          <SupportedList items={d.live.supported} />
        </div>

        {/* 03 Offline Event */}
        <div className="relative">
          <Camera className="absolute right-2 -top-2 w-14 hidden md:block" />
          <SubHead num={d.event.num} title={d.event.title} />
        </div>
        <Reveal>
          <p className="font-hand text-pink mb-4" style={{ fontSize: "clamp(18px,2vw,26px)" }}>{d.event.strap}</p>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="text-ink max-w-3xl mb-10" style={{ fontSize: "clamp(15px,1.5vw,18px)" }}>{d.event.intro}</p>
        </Reveal>
        <PhaseTimeline phases={d.event.timeline} />
        <div className="mb-14">
          <PullQuote>{d.event.pullquote}</PullQuote>
        </div>
        <div className="mb-14">
          <ArrowFlow title={d.event.signal.title} steps={d.event.signal.steps} caption={d.event.signal.caption} />
        </div>
        <SupportedList items={d.event.supported} />
      </div>
    </section>
  );
};
