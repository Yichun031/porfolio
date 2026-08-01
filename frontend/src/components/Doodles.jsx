import { motion, useReducedMotion } from "framer-motion";

/*
 * Reusable hand-drawn doodle components.
 * Thin, slightly imperfect strokes. Lines gently "draw" themselves in
 * when they enter the viewport. Under prefers-reduced-motion they render
 * fully drawn with no animation.
 */

const PINK = "#ED4D9E";

const drawTransition = { duration: 1.1, ease: "easeInOut" };

// Wrapper that animates all direct path/line/circle children by pathLength
const Draw = ({ children, className, viewBox = "0 0 100 100", width, style }) => {
  const reduce = useReducedMotion();
  return (
    <motion.svg
      className={className}
      viewBox={viewBox}
      width={width}
      fill="none"
      style={style}
      initial={reduce ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      aria-hidden="true"
    >
      {children}
    </motion.svg>
  );
};

const P = (props) => (
  <motion.path
    stroke={PINK}
    strokeWidth={props.sw || 2.2}
    strokeLinecap="round"
    strokeLinejoin="round"
    variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1 } }}
    transition={drawTransition}
    {...props}
  />
);

export const Star = ({ className, fill }) => (
  <Draw className={className} viewBox="0 0 40 40">
    <P d="M20 4 L23.6 15.2 L35 15.2 L25.8 22 L29.4 33 L20 26.2 L10.6 33 L14.2 22 L5 15.2 L16.4 15.2 Z" fill={fill || "none"} />
  </Draw>
);

export const Sparkle = ({ className }) => (
  <Draw className={className} viewBox="0 0 40 40">
    <P d="M20 5 C21 14 26 19 35 20 C26 21 21 26 20 35 C19 26 14 21 5 20 C14 19 19 14 20 5 Z" />
  </Draw>
);

export const CurvedArrow = ({ className }) => (
  <Draw className={className} viewBox="0 0 60 40">
    <P d="M4 30 C18 6 40 6 54 18" />
    <P d="M45 12 L55 18 L47 26" />
  </Draw>
);

export const Underline = ({ className }) => (
  <Draw className={className} viewBox="0 0 140 12">
    <P d="M3 7 C30 2 60 10 90 5 C110 2 128 8 137 5" sw={2.6} />
  </Draw>
);

export const Circle = ({ className }) => (
  <Draw className={className} viewBox="0 0 100 60">
    <P d="M50 6 C78 4 96 18 95 32 C94 50 66 56 44 55 C20 54 5 44 6 28 C7 14 26 8 50 6" sw={2.2} />
  </Draw>
);

export const Wave = ({ className }) => (
  <Draw className={className} viewBox="0 0 120 20">
    <P d="M2 12 C14 2 22 2 34 12 C46 22 54 22 66 12 C78 2 86 2 98 12 C108 20 114 20 118 16" />
  </Draw>
);

export const Heart = ({ className, fill }) => (
  <Draw className={className} viewBox="0 0 40 40">
    <P d="M20 34 C6 24 4 14 11 9 C16 5 20 9 20 13 C20 9 24 5 29 9 C36 14 34 24 20 34 Z" fill={fill || "none"} />
  </Draw>
);

export const Speech = ({ className }) => (
  <Draw className={className} viewBox="0 0 50 44">
    <P d="M6 6 H44 V30 H20 L10 40 V30 H6 Z" />
  </Draw>
);

export const Phone = ({ className }) => (
  <Draw className={className} viewBox="0 0 34 54">
    <P d="M7 3 H27 C29 3 30 4 30 6 V48 C30 50 29 51 27 51 H7 C5 51 4 50 4 48 V6 C4 4 5 3 7 3 Z" />
    <P d="M14 45 H20" />
  </Draw>
);

export const Camera = ({ className }) => (
  <Draw className={className} viewBox="0 0 54 42">
    <P d="M4 12 H14 L18 6 H36 L40 12 H50 V36 H4 Z" />
    <P d="M27 30 C31 30 34 27 34 23 C34 19 31 16 27 16 C23 16 20 19 20 23 C20 27 23 30 27 30 Z" />
  </Draw>
);

export const Coffee = ({ className }) => (
  <Draw className={className} viewBox="0 0 48 46">
    <P d="M8 16 H36 V32 C36 38 30 42 22 42 C14 42 8 38 8 32 Z" />
    <P d="M36 20 H42 C46 20 46 30 40 30 H36" />
    <P d="M16 6 C14 9 18 11 16 14" />
    <P d="M24 5 C22 8 26 10 24 13" />
  </Draw>
);

export const IceCream = ({ className, fill }) => (
  <Draw className={className} viewBox="0 0 40 56">
    <P d="M8 22 C8 12 14 5 20 5 C26 5 32 12 32 22 C32 26 26 28 20 28 C14 28 8 26 8 22 Z" fill={fill || "none"} />
    <P d="M9 26 L20 52 L31 26" />
    <P d="M14 34 H26" />
    <P d="M18 42 H24" />
  </Draw>
);

export const Cake = ({ className, fill }) => (
  <Draw className={className} viewBox="0 0 52 46">
    <P d="M6 24 C6 20 14 18 26 18 C38 18 46 20 46 24 V40 H6 Z" fill={fill || "none"} />
    <P d="M6 28 C14 33 38 33 46 28" />
    <P d="M26 6 V17" />
    <P d="M22 6 C24 8 28 8 30 6" />
  </Draw>
);

export const Flower = ({ className, fill }) => (
  <Draw className={className} viewBox="0 0 44 44">
    <P d="M22 14 C24 8 32 8 33 14 C39 13 41 21 35 23 C40 27 35 34 30 30 C30 36 22 37 21 31 C16 35 11 28 16 24 C10 22 12 14 18 15 C18 10 20 11 22 14 Z" fill={fill || "none"} />
    <P d="M25 24 C26 25 26 26 25 27 C24 26 24 25 25 24 Z" />
  </Draw>
);

export const Moon = ({ className, fill }) => (
  <Draw className={className} viewBox="0 0 40 40">
    <P d="M27 4 C16 4 8 12 8 22 C8 32 16 38 26 36 C18 32 14 26 14 20 C14 13 19 7 27 4 Z" fill={fill || "none"} />
  </Draw>
);

export const Perfume = ({ className }) => (
  <Draw className={className} viewBox="0 0 34 50">
    <P d="M9 20 H25 V44 C25 46 24 47 22 47 H12 C10 47 9 46 9 44 Z" />
    <P d="M14 20 V12 H20 V20" />
    <P d="M13 8 H21 V12 H13 Z" />
    <P d="M27 6 L30 4 M30 8 L33 7" sw={1.8} />
  </Draw>
);

export const Car = ({ className }) => (
  <Draw className={className} viewBox="0 0 64 34">
    <P d="M4 24 L8 24 L14 12 H44 L54 24 H60 V28 H4 Z" />
    <P d="M18 28 C18 31 15 33 13 33 C11 33 8 31 8 28" />
    <P d="M56 28 C56 31 53 33 51 33 C49 33 46 31 46 28" />
  </Draw>
);

export const Signal = ({ className }) => (
  <Draw className={className} viewBox="0 0 48 40">
    <P d="M24 30 C25 30 26 31 26 32 C26 33 25 34 24 34 C23 34 22 33 22 32 C22 31 23 30 24 30 Z" fill={PINK} />
    <P d="M16 26 C20 22 28 22 32 26" />
    <P d="M11 20 C18 13 30 13 37 20" />
    <P d="M6 14 C16 4 32 4 42 14" />
  </Draw>
);

export const Check = ({ className }) => (
  <Draw className={className} viewBox="0 0 28 24">
    <P d="M4 13 L11 20 L24 4" sw={2.8} />
  </Draw>
);

export const Squiggle = ({ className }) => (
  <Draw className={className} viewBox="0 0 60 16">
    <P d="M2 8 C8 2 12 14 18 8 C24 2 28 14 34 8 C40 2 44 14 50 8 C54 4 57 7 58 8" sw={2} />
  </Draw>
);

export const TrendArrow = ({ className }) => (
  <Draw className={className} viewBox="0 0 60 40">
    <P d="M4 34 L20 20 L30 26 L52 6" />
    <P d="M40 6 L52 6 L52 18" />
  </Draw>
);

export const Note = ({ className }) => (
  <Draw className={className} viewBox="0 0 40 44">
    <P d="M8 4 H32 V40 L26 35 L20 40 L14 35 L8 40 Z" />
    <P d="M14 14 H26 M14 22 H26 M14 30 H22" sw={1.6} />
  </Draw>
);

// Cute cartoon cake + Guerlain-style perfume behind (PuXuan) — simple lines
export const CakePerfume = ({ className }) => (
  <Draw className={className} viewBox="0 0 130 122">
    {/* ── Perfume bottle (behind) ── */}
    {/* body + honeycomb dome shoulder */}
    <P d="M74 108 V58 C74 46 82 37 92 35 C102 37 110 46 110 58 V108 Z" sw={2} />
    {/* liquid hint */}
    <P d="M74 90 C86 94 98 94 110 90" sw={1.6} />
    {/* honeycomb cells */}
    <P d="M84 45 L87 43 L90 45 L90 49 L87 51 L84 49 Z" sw={1.4} />
    <P d="M94 47 L97 45 L100 47 L100 51 L97 53 L94 51 Z" sw={1.4} />
    {/* neck + cap */}
    <P d="M86 35 V29 M98 35 V29" sw={1.8} />
    <P d="M85 29 H99 V19 C99 14 96 12 92 12 C88 12 85 14 85 19 Z" sw={2} fill="var(--mustard)" />
    {/* label */}
    <P d="M80 66 H104 V92 H80 Z" sw={1.6} />
    <P d="M92 79 C93 79 94 80 94 81 C94 82 93 83 92 83 C91 83 90 82 90 81 C90 80 91 79 92 79 Z" sw={1.2} fill="var(--pink)" />

    {/* ── Pedestal block ── */}
    <P d="M20 92 H64 V116 H20 Z" sw={1.8} fill="var(--blue)" />
    <P d="M20 92 L28 86 H72 L64 92 M64 92 L72 86 V108" sw={1.4} />

    {/* ── Cake dome (front, white to mask) ── */}
    <P d="M24 92 C22 74 31 61 44 61 C57 61 66 74 64 92 Z" sw={2.2} fill="var(--white)" />
    {/* crumbly base line */}
    <P d="M27 88 q4 5 8 0 q4 5 8 0 q4 5 8 0 q4 5 6 0" sw={1.3} />
    {/* saucer */}
    <P d="M33 60 C33 56 55 56 55 60 C55 63 33 63 33 60 Z" sw={1.6} fill="var(--pink-soft)" />
    {/* cream swirl */}
    <P d="M38 59 C39 50 43 47 44 44 C45 47 49 50 50 59" sw={1.8} fill="var(--white)" />
    {/* rose petal on top */}
    <P d="M44 45 C40 42 40 37 44 35 C48 37 48 42 44 45 Z" sw={1.6} fill="var(--pink-soft)" />
  </Draw>
);

export const Arrow = CurvedArrow;
