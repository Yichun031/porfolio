import { motion, useReducedMotion } from "framer-motion";
import React, { useState } from "react";

// ── Scroll reveal ─────────────────────────────────────────────
export const Reveal = ({ children, delay = 0, y = 28, className, as = "div" }) => {
  const reduce = useReducedMotion();
  const M = motion[as] || motion.div;
  return (
    <M
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </M>
  );
};

// ── Masked line-by-line reveal (for large headings) ───────────
export const MaskedLines = ({ lines, className, lineClassName, stagger = 0.09, delay = 0, style }) => {
  const reduce = useReducedMotion();
  return (
    <div className={className} style={style}>
      {lines.map((line, i) => (
        <span key={i} style={{ display: "block", overflow: "hidden" }}>
          <motion.span
            style={{ display: "block" }}
            className={lineClassName}
            initial={reduce ? false : { y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: delay + i * stagger }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </div>
  );
};

// Reveal-on-scroll masked line (single line, used inside sections)
export const MaskLine = ({ children, className, delay = 0 }) => {
  const reduce = useReducedMotion();
  return (
    <span style={{ display: "block", overflow: "hidden" }}>
      <motion.span
        style={{ display: "block" }}
        className={className}
        initial={reduce ? false : { y: "110%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay }}
      >
        {children}
      </motion.span>
    </span>
  );
};

// ── Thin editorial rule ───────────────────────────────────────
export const Rule = ({ className = "" }) => (
  <div className={`h-px w-full ${className}`} style={{ backgroundColor: "var(--line)" }} />
);

// ── Section number label ──────────────────────────────────────
export const SectionNumber = ({ children, className = "" }) => (
  <span className={`section-number ${className}`}>{children}</span>
);

// ── Vertical side label ───────────────────────────────────────
export const SideLabel = ({ children, className = "" }) => (
  <span className={`side-label ${className}`}>{children}</span>
);

// ── Handwritten annotation ────────────────────────────────────
export const HandNote = ({ children, className = "" }) => (
  <span className={`font-hand text-pink ${className}`} style={{ fontSize: "clamp(15px,1.4vw,20px)", lineHeight: 1.2 }}>
    {children}
  </span>
);

// ── Aspect ratio helper ───────────────────────────────────────
const ratioToPadding = (ratio) => {
  const [w, h] = ratio.split("/").map(Number);
  return `${(h / w) * 100}%`;
};

// ── Image placeholder slot ────────────────────────────────────
export const ImageSlot = ({ label, ratio = "4/5", src, className = "" }) => {
  const [failed, setFailed] = useState(false);
  const showImg = src && !failed;
  return (
    <div className={`hover-scale ${className}`}>
      <div className="img-slot rounded-[2px]" style={{ paddingTop: showImg ? 0 : ratioToPadding(ratio) }}>
        {showImg ? (
          <img
            src={src}
            alt={label}
            onError={() => setFailed(true)}
            className="block w-full h-auto"
            style={{ aspectRatio: ratio.replace("/", " / ") }}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
            <span className="font-hand text-pink" style={{ fontSize: "clamp(14px,1.3vw,18px)" }}>
              {label}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

// ── Metrics strip (doodle-bordered box) ───────────────────────
export const MetricsStrip = ({ metrics }) => (
  <div className="relative inline-flex flex-wrap items-center gap-x-6 gap-y-2 px-6 py-4" style={{ border: "1.5px dashed var(--pink)", borderRadius: 2 }}>
    {metrics.map((m, i) => (
      <span key={i} className="flex items-center gap-2">
        {i > 0 && <span className="text-pink" aria-hidden>·</span>}
        <span className="font-display font-semibold text-ink" style={{ fontSize: "clamp(14px,1.2vw,17px)" }}>{m}</span>
      </span>
    ))}
  </div>
);

// ── Pull-quote ────────────────────────────────────────────────
export const PullQuote = ({ children }) => (
  <Reveal className="max-w-3xl">
    <p className="font-display" style={{ fontSize: "clamp(22px,3vw,38px)", lineHeight: 1.2, fontWeight: 500 }}>
      <span className="text-ink">“{children}”</span>
    </p>
  </Reveal>
);
