import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { content } from "../../data/content";
import { MaskedLines, ImageSlot } from "../primitives";
import { Star, Sparkle, CurvedArrow, Heart, Squiggle, Signal } from "../Doodles";

export const Hero = () => {
  const { hero, meta } = content;
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yDoodle = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -80]);
  const yDoodle2 = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 60]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 120]);

  return (
    <section id="top" ref={ref} className="relative min-h-screen overflow-hidden pt-28 md:pt-32">
      {/* Scattered doodles */}
      <motion.div style={{ y: yDoodle }} className="pointer-events-none absolute inset-0 hidden sm:block">
        <Star className="absolute left-[6%] top-[22%] w-8 md:w-11" />
        <Sparkle className="absolute right-[10%] top-[16%] w-10 md:w-14" />
        <Signal className="absolute right-[22%] bottom-[24%] w-12 md:w-16" />
      </motion.div>
      <motion.div style={{ y: yDoodle2 }} className="pointer-events-none absolute inset-0 hidden sm:block">
        <Heart className="absolute left-[44%] top-[12%] w-7 md:w-9" fill="var(--pink-soft)" />
        <Squiggle className="absolute left-[12%] bottom-[30%] w-16 md:w-20" />
      </motion.div>

      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left — huge title */}
          <motion.div style={{ y: titleY }} className="lg:col-span-8">
            <MaskedLines
              lines={[hero.title]}
              className="display-hero text-ink"
              style={{ fontSize: "clamp(2.5rem,9vw,8rem)" }}
              lineClassName=""
              delay={0.15}
            />

            <div className="mt-8 flex flex-col gap-1">
              {hero.stack.map((s, i) => (
                <motion.span
                  key={s}
                  initial={reduce ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="font-display uppercase text-ink"
                  style={{ fontSize: "clamp(13px,1.3vw,17px)", letterSpacing: "0.06em" }}
                >
                  {s}
                </motion.span>
              ))}
            </div>

            <motion.p
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="font-hand text-pink mt-6 relative inline-block"
              style={{ fontSize: "clamp(22px,3vw,34px)" }}
            >
              {hero.tagline}
              <CurvedArrow className="absolute -right-16 -top-6 w-12 hidden md:block" />
            </motion.p>
          </motion.div>

          {/* Right — optional portrait + name */}
          <div className="lg:col-span-4 flex flex-col gap-6 lg:pt-6">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full max-w-[280px] lg:ml-auto"
            >
              <ImageSlot label="Yichun Hou" ratio="4/5" src="/images/yichun-portrait.webp" />
            </motion.div>
            <motion.div
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="lg:text-right"
            >
              <div className="font-display font-bold uppercase text-ink" style={{ fontSize: "clamp(20px,2.2vw,28px)", letterSpacing: "0.01em" }}>
                {meta.name}
              </div>
              <div className="text-ink-soft" style={{ fontSize: "14px" }}>
                {meta.location} · {meta.year}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="absolute bottom-8 left-5 md:left-10 hidden sm:flex items-center gap-3"
      >
        <span className="font-hand text-ink-soft" style={{ fontSize: "20px" }}>{hero.scroll}</span>
        <motion.svg
          width="20" height="34" viewBox="0 0 20 34" fill="none"
          animate={reduce ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden
        >
          <path d="M10 2 V30 M4 24 L10 31 L16 24" stroke="#ED4D9E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
      </motion.div>
    </section>
  );
};
