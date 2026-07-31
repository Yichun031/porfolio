import { useEffect } from "react";
import "@/App.css";
import Lenis from "lenis";
import { Toaster } from "sonner";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { About } from "@/components/sections/About";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { CaseMorellis } from "@/components/sections/CaseMorellis";
import { CaseTesla } from "@/components/sections/CaseTesla";
import { CasePuXuan } from "@/components/sections/CasePuXuan";
import { CaseHSBC } from "@/components/sections/CaseHSBC";
import { Contact } from "@/components/sections/Contact";

function App() {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    const onClick = (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const id = link.getAttribute("href");
      if (id === "#" || id.length < 2) return;
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        lenis.scrollTo(el, { offset: -70 });
      }
    };
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="App bg-white-warm">
      <div className="grain" aria-hidden />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <SelectedWork />
        <CaseMorellis />
        <CaseTesla />
        <CasePuXuan />
        <CaseHSBC />
        <Contact />
      </main>
      <Toaster position="bottom-right" richColors />
    </div>
  );
}

export default App;
