import React from "react";
import { content } from "../../data/content";
import { Reveal, ImageSlot, HandNote, MetricsStrip, Rule, MaskLine } from "../primitives";
import { CaseHeader, SubHead } from "../CaseParts";
import { IceCream, Coffee, Heart } from "../Doodles";

const gridCols = (n) => {
  if (n <= 2) return "grid-cols-1 sm:grid-cols-2";
  if (n === 3) return "grid-cols-1 sm:grid-cols-3";
  if (n === 4) return "grid-cols-2 md:grid-cols-4";
  return "grid-cols-2 md:grid-cols-3";
};

const Group = ({ group }) => (
  <div className="mb-16">
    <Reveal>
      <h4 className="font-display text-ink mb-5" style={{ fontSize: "clamp(15px,1.6vw,20px)", fontWeight: 600 }}>
        {group.heading}
      </h4>
    </Reveal>
    <Reveal delay={0.05}>
      <div className={`grid ${gridCols(group.slots.length)} gap-4 mb-5`}>
        {group.slots.map((s, i) => (
          <ImageSlot key={i} label={s.label} ratio={s.ratio} src={s.src} />
        ))}
      </div>
    </Reveal>
    <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
      <p className="text-ink-soft max-w-2xl" style={{ fontSize: "clamp(14px,1.4vw,17px)" }}>{group.caption}</p>
      {group.note && <HandNote>“{group.note}”</HandNote>}
    </div>
    {group.metrics && (
      <div className="mt-6">
        <MetricsStrip metrics={group.metrics} />
      </div>
    )}
    {group.resultsBox && (
      <div className="mt-8">
        <div
          className="inline-block px-10 py-10 md:px-16 md:py-12 text-center"
          style={{ border: "2px dotted var(--pink)", borderRadius: 2 }}
        >
          <div className="section-number leading-none" style={{ fontSize: "clamp(56px,9vw,120px)" }}>
            {group.resultsBox.main}
          </div>
          <div
            className="font-display uppercase text-ink mt-3"
            style={{ fontSize: "clamp(12px,1.3vw,15px)", letterSpacing: "0.18em" }}
          >
            {group.resultsBox.mainLabel}
          </div>
          <div className="flex items-center justify-center gap-4 mt-8">
            {group.resultsBox.supporting.map((s, i) => (
              <React.Fragment key={s}>
                {i > 0 && <span className="inline-block rounded-full" style={{ width: 6, height: 6, backgroundColor: "var(--pink)" }} aria-hidden />}
                <span className="font-display text-ink-soft" style={{ fontSize: "clamp(14px,1.4vw,18px)" }}>{s}</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    )}
  </div>
);

export const CaseMorellis = () => {
  const d = content.morellis;
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="relative">
          <IceCream className="absolute right-0 -top-6 w-12 md:w-16 hidden md:block" fill="var(--pink-soft)" />
          <CaseHeader id="morellis" num={d.num} title={d.title} subtitle={d.subtitle} intro={d.intro} />
        </div>

        <div className="max-w-[896px] mx-auto">
        <Reveal>
          <div className="mb-20">
            <ImageSlot label={d.hero.label} ratio={d.hero.ratio} src={d.hero.src} />
          </div>
        </Reveal>

        {d.sections.map((sec) => (
          <div key={sec.num} className="mb-8">
            <div className="relative">
              {sec.num === "01" && <Coffee className="absolute right-2 -top-2 w-10 hidden md:block" />}
              {sec.num === "02" && <Heart className="absolute right-2 -top-2 w-9 hidden md:block" fill="var(--pink-soft)" />}
              <SubHead num={sec.num} title={sec.title} />
            </div>
            {sec.groups.map((g, gi) => (
              <Group key={gi} group={g} />
            ))}
          </div>
        ))}

        {/* 03 Website & Poster */}
        <SubHead num={d.website.num} title={d.website.title} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
          <Reveal>
            <h4 className="font-display text-ink mb-5" style={{ fontSize: "clamp(15px,1.6vw,20px)", fontWeight: 600 }}>{d.website.left.heading}</h4>
            <div className="flex flex-col gap-4 mb-5">
              {d.website.left.slots.map((s, i) => (
                <ImageSlot key={i} label={s.label} ratio={s.ratio} src={s.src} />
              ))}
            </div>
            <p className="text-ink-soft" style={{ fontSize: "clamp(14px,1.4vw,17px)" }}>{d.website.left.caption}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h4 className="font-display text-ink mb-5" style={{ fontSize: "clamp(15px,1.6vw,20px)", fontWeight: 600 }}>{d.website.right.heading}</h4>
            <div className="grid grid-cols-2 gap-4 mb-5">
              {d.website.right.slots.map((s, i) => (
                <ImageSlot key={i} label={s.label} ratio={s.ratio} src={s.src} />
              ))}
            </div>
            <p className="text-ink-soft" style={{ fontSize: "clamp(14px,1.4vw,17px)" }}>{d.website.right.caption}</p>
          </Reveal>
        </div>

        <Rule className="my-10" />
        <MaskLine className="font-hand text-pink" >
          <span style={{ fontSize: "clamp(20px,2.4vw,32px)" }}>{d.closing}</span>
        </MaskLine>
        </div>
      </div>
    </section>
  );
};
