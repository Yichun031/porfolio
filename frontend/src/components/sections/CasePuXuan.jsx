import React from "react";
import { content } from "../../data/content";
import { Reveal, ImageSlot, PullQuote, Rule, MaskLine } from "../primitives";
import { CaseHeader, SubHead } from "../CaseParts";
import { Cake, Flower, Perfume, CurvedArrow } from "../Doodles";

const WorkflowGrid = ({ steps }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 mb-12">
    {steps.map((s, i) => (
      <Reveal key={s.num} delay={i * 0.05}>
        <div className="pt-4" style={{ borderTop: "2px solid var(--ink)" }}>
          <div className="flex items-baseline gap-3 mb-3">
            <span className="section-number" style={{ fontSize: "clamp(24px,2.4vw,34px)" }}>{s.num}</span>
            <h5 className="font-display uppercase text-ink" style={{ fontSize: "clamp(14px,1.5vw,18px)", fontWeight: 600 }}>{s.title}</h5>
          </div>
          <ul className="flex flex-col gap-1.5 mb-3">
            {s.items.map((it) => (
              <li key={it} className="text-ink flex gap-2" style={{ fontSize: "13.5px" }}>
                <span className="text-pink">·</span>{it}
              </li>
            ))}
          </ul>
          <p className="text-ink-soft" style={{ fontSize: "13.5px" }}>{s.body}</p>
        </div>
      </Reveal>
    ))}
  </div>
);

export const CasePuXuan = () => {
  const d = content.puxuan;
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="relative">
          <Cake className="absolute right-0 -top-4 w-14 md:w-20 hidden md:block" fill="var(--mustard)" />
          <Perfume className="absolute right-24 -top-2 w-10 hidden lg:block" />
          <CaseHeader id="puxuan" num={d.num} title={d.title} subtitle={d.subtitle} intro={d.intro} />
        </div>

        {/* Key visuals */}
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
            {d.keyVisuals.map((s, i) => (
              <div key={i}>
                <ImageSlot label={s.label} ratio={s.ratio} src={s.src} />
                <p className="font-hand text-pink mt-3 text-center" style={{ fontSize: "clamp(15px,1.4vw,19px)", lineHeight: 1.25 }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Part 1 workflow */}
        <SubHead num="—" title={d.workflow.heading} />
        <Reveal>
          <p className="font-hand text-pink mb-10" style={{ fontSize: "clamp(18px,2vw,26px)" }}>{d.workflow.strap}</p>
        </Reveal>
        <WorkflowGrid steps={d.workflow.steps} />
        <div className="mb-24 relative">
          <Flower className="w-12 mb-3" fill="var(--pink-soft)" />
          <PullQuote>{d.workflow.pullquote}</PullQuote>
        </div>

        {/* Part 2 campaigns */}
        <SubHead num="—" title={d.campaigns.heading} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {d.campaigns.items.map((c, i) => (
            <Reveal key={c.num} delay={i * 0.08}>
              <div>
                <ImageSlot label={c.label} ratio={c.ratio} src={c.src} className="mb-5" />
                <span className="section-number block" style={{ fontSize: "clamp(24px,2.4vw,34px)" }}>{c.num}</span>
                <h5 className="font-display uppercase text-ink mt-2" style={{ fontSize: "clamp(15px,1.5vw,19px)", fontWeight: 600 }}>{c.title}</h5>
                <p className="text-pink font-display mt-1" style={{ fontSize: "13px" }}>{c.tag}</p>
                <p className="text-ink-soft mt-1" style={{ fontSize: "13px" }}>{c.meta}</p>
                <p className="text-ink mt-4" style={{ fontSize: "14.5px" }}>{c.desc}</p>
                <p className="font-display uppercase text-ink-soft mt-5 mb-2" style={{ fontSize: "11px", letterSpacing: "0.08em" }}>My focus</p>
                <ul className="flex flex-col gap-1.5 mb-4">
                  {c.focus.map((f) => (
                    <li key={f} className="text-ink flex gap-2" style={{ fontSize: "13.5px" }}><span className="text-pink">·</span>{f}</li>
                  ))}
                </ul>
                <p className="text-ink-soft italic" style={{ fontSize: "13px" }}>{c.note}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Part 3 coverage */}
        <SubHead num="—" title={d.coverage.heading} />
        <Reveal>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-3 mb-12">
            {d.coverage.flow.map((f, i) => (
              <React.Fragment key={f}>
                <span className="font-display uppercase text-ink" style={{ fontSize: "clamp(13px,1.4vw,16px)", letterSpacing: "0.04em" }}>{f}</span>
                {i < d.coverage.flow.length - 1 && <CurvedArrow className="w-10" />}
              </React.Fragment>
            ))}
          </div>
        </Reveal>

        <div className="flex flex-col gap-8 mb-12">
          {d.coverage.items.map((c, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-6 items-center pt-6" style={{ borderTop: "1px solid var(--line)" }}>
                <div>
                  <h5 className="font-display text-ink" style={{ fontSize: "clamp(16px,1.7vw,21px)", fontWeight: 600 }}>{c.outlet}</h5>
                  <p className="text-ink-soft mt-1" style={{ fontSize: "14.5px" }}>{c.headline}</p>
                  {c.date && <p className="text-ink-soft mt-1" style={{ fontSize: "13px" }}>{c.date}</p>}
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`coverage-link-${i}`}
                    className="link-underline font-display inline-block mt-3"
                    style={{ fontSize: "13px" }}
                  >
                    View Coverage →
                  </a>
                </div>
                <ImageSlot label={`${c.outlet} coverage`} ratio={c.ratio} src={c.src} />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="p-6 md:p-8 mb-12" style={{ border: "1.5px dashed var(--pink)", borderRadius: 2 }}>
            <p className="text-ink" style={{ fontSize: "clamp(16px,1.7vw,21px)", lineHeight: 1.5 }}>{d.coverage.result}</p>
          </div>
        </Reveal>

        <Rule className="my-8" />
        <MaskLine className="font-hand text-pink">
          <span style={{ fontSize: "clamp(20px,2.4vw,32px)" }}>{d.closing}</span>
        </MaskLine>
      </div>
    </section>
  );
};
