import React from "react";
import { content } from "../../data/content";
import { Star } from "../Doodles";

export const Marquee = () => {
  const items = content.hero.marquee;
  const row = [...items, ...items];
  return (
    <section className="py-10 md:py-14 overflow-hidden" style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }} aria-hidden>
      <div className="marquee">
        {row.map((item, i) => (
          <span key={i} className="flex items-center whitespace-nowrap">
            <span className="font-display uppercase text-ink" style={{ fontSize: "clamp(28px,5vw,64px)", fontWeight: 500, letterSpacing: "-0.01em" }}>
              {item}
            </span>
            <Star className="mx-8 md:mx-12 w-6 md:w-8 shrink-0" fill="var(--pink-soft)" />
          </span>
        ))}
      </div>
    </section>
  );
};
