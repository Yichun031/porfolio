import React from "react";
import { content } from "../../data/content";
import { Reveal } from "../primitives";
import { CurvedArrow, Sparkle } from "../Doodles";

export const About = () => {
  const { about } = content;
  return (
    <section id="about" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left rail */}
          <div className="lg:col-span-4">
            <Reveal>
              <h2 className="font-display uppercase text-ink" style={{ fontSize: "clamp(2rem,5vw,4rem)", fontWeight: 700, lineHeight: 0.95, letterSpacing: "-0.02em" }}>
                {about.kicker}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative mt-6 inline-block">
                <span className="font-hand text-pink" style={{ fontSize: "clamp(18px,2vw,26px)" }}>
                  content · creators · growth
                </span>
                <Sparkle className="absolute -right-10 -top-6 w-9" />
              </div>
            </Reveal>
          </div>

          {/* Right — three blocks connected by line */}
          <div className="lg:col-span-8 relative">
            <div className="flex flex-col gap-12">
              {about.blocks.map((b, i) => (
                <Reveal key={b.label} delay={i * 0.08}>
                  <div className="relative">
                    <div className="flex items-baseline gap-3 mb-3">
                      <span className="font-display text-pink" style={{ fontSize: "13px", fontWeight: 600 }}>0{i + 1}</span>
                      <span className="font-display uppercase text-ink" style={{ fontSize: "clamp(13px,1.3vw,15px)", letterSpacing: "0.08em" }}>{b.label}</span>
                    </div>
                    <p className="text-ink max-w-2xl" style={{ fontSize: "clamp(16px,1.5vw,21px)", lineHeight: 1.65 }}>
                      {b.body}
                    </p>
                    {i < about.blocks.length - 1 && (
                      <CurvedArrow className="w-12 mt-6 opacity-80" />
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
