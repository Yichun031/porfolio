import React from "react";
import { content } from "../../data/content";
import { Reveal } from "../primitives";
import { IceCream, Cake } from "../Doodles";

const WorkVisual = ({ visual }) => {
  // Identical soft-square, light-grey container for BOTH illustrations and logos
  const container =
    "flex items-center justify-center aspect-square w-full rounded-[6px]";
  const style = { backgroundColor: "var(--grey)" };

  if (visual === "illustration-icecream") {
    return (
      <div className={container} style={style}>
        <IceCream className="w-1/3" fill="var(--pink-soft)" />
      </div>
    );
  }
  if (visual === "illustration-cake") {
    return (
      <div className={container} style={style}>
        <Cake className="w-2/5" fill="var(--mustard)" />
      </div>
    );
  }
  if (visual === "logo-tesla") {
    return (
      <div className={container} style={style}>
        <img
          src="/images/tesla-logo.jpg"
          alt="Tesla"
          className="w-1/2 h-1/2 object-contain mix-blend-multiply"
        />
      </div>
    );
  }
  return (
    <div className={container} style={style}>
      <span className="font-display text-ink flex items-center gap-1" style={{ fontSize: "clamp(20px,2.4vw,30px)", letterSpacing: "0.08em", fontWeight: 700 }}>
        <span className="inline-block h-4 w-6" style={{ background: "linear-gradient(135deg,#ED4D9E 0 50%, #14120F 50% 100%)" }} />
        HSBC
      </span>
    </div>
  );
};

export const SelectedWork = () => {
  const { work } = content;
  return (
    <section id="work" className="relative py-24 md:py-36 bg-white-warm">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <Reveal>
            <h2 className="font-display uppercase text-ink" style={{ fontSize: "clamp(2.4rem,6vw,5rem)", fontWeight: 700, lineHeight: 0.92, letterSpacing: "-0.02em" }}>
              Selected<br />Work
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-ink-soft max-w-sm" style={{ fontSize: "clamp(15px,1.4vw,18px)" }}>
              {work.sub}
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {work.projects.map((p, i) => (
            <Reveal key={p.num} delay={i * 0.08}>
              <a href={p.href} data-testid={`work-card-${p.num}`} className="group block">
                <div className="hover-scale">
                  <WorkVisual visual={p.visual} />
                </div>
                <div className="mt-5">
                  <span className="section-number block" style={{ fontSize: "clamp(30px,3vw,44px)" }}>{p.num}</span>
                  <h3 className="font-display uppercase text-ink mt-2" style={{ fontSize: "clamp(15px,1.5vw,19px)", fontWeight: 600, letterSpacing: "0.01em" }}>
                    {p.name}
                  </h3>
                  <p className="text-ink-soft mt-1" style={{ fontSize: "14px" }}>{p.dir}</p>
                  <span className="link-underline font-display inline-block mt-3" style={{ fontSize: "13px" }}>
                    View Project →
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
