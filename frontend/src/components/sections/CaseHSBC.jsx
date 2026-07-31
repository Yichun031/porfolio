import React from "react";
import { content } from "../../data/content";
import { Reveal, MetricsStrip, Rule, MaskLine } from "../primitives";
import { CaseHeader } from "../CaseParts";
import { TrendArrow, Check, CurvedArrow } from "../Doodles";

export const CaseHSBC = () => {
  const d = content.hsbc;
  // widths for descending funnel
  const widths = ["100%", "86%", "72%", "58%", "44%"];
  return (
    <section className="relative py-24 md:py-32 bg-grey">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="relative">
          <TrendArrow className="absolute right-0 top-0 w-16 md:w-24 hidden md:block" />
          <CaseHeader id="hsbc" num={d.num} title={d.title} subtitle={d.subtitle} meta={d.meta} intro={d.intro} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Funnel */}
          <div>
            <h4 className="font-display uppercase text-ink mb-8" style={{ fontSize: "clamp(14px,1.5vw,18px)", letterSpacing: "0.06em" }}>Acquisition Funnel</h4>
            <div className="flex flex-col items-center gap-3">
              {d.funnel.map((f, i) => (
                <Reveal key={i} delay={i * 0.08} className="w-full flex flex-col items-center">
                  <div
                    className="flex items-center justify-center text-center px-4 py-5"
                    style={{
                      width: widths[i],
                      backgroundColor: i % 2 === 0 ? "var(--pink-soft)" : "var(--white)",
                      border: "1.5px solid var(--pink)",
                      borderRadius: 2,
                    }}
                  >
                    <span className="font-display text-ink" style={{ fontSize: "clamp(13px,1.3vw,16px)", fontWeight: 500 }}>{f}</span>
                  </div>
                  {i < d.funnel.length - 1 && (
                    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" aria-hidden className="my-0.5">
                      <path d="M9 1 V15 M3 10 L9 16 L15 10" stroke="#ED4D9E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </Reveal>
              ))}
            </div>
          </div>

          {/* Metrics + What I did */}
          <div>
            <Reveal>
              <div className="flex flex-col gap-4 mb-10">
                {d.metrics.map((m) => (
                  <div key={m} className="px-6 py-5" style={{ border: "1.5px dashed var(--pink)", borderRadius: 2, backgroundColor: "var(--white)" }}>
                    <span className="font-display text-ink" style={{ fontSize: "clamp(16px,1.8vw,22px)", fontWeight: 600 }}>{m}</span>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <h4 className="font-display uppercase text-ink mb-5" style={{ fontSize: "clamp(14px,1.5vw,18px)", letterSpacing: "0.06em" }}>What I Did</h4>
              <ul className="flex flex-col gap-3">
                {d.did.map((it) => (
                  <li key={it} className="flex items-start gap-3">
                    <Check className="w-6 shrink-0 mt-1" />
                    <span className="text-ink" style={{ fontSize: "clamp(14.5px,1.4vw,17px)" }}>{it}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        <Rule className="my-12" />
        <div className="relative max-w-3xl">
          <CurvedArrow className="w-12 mb-3" />
          <MaskLine className="font-hand text-pink">
            <span style={{ fontSize: "clamp(20px,2.4vw,30px)", lineHeight: 1.3, display: "block" }}>{d.closing}</span>
          </MaskLine>
        </div>
      </div>
    </section>
  );
};
