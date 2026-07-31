import React, { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { content } from "../data/content";

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const { meta, nav } = content;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-nav"
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(253,252,250,0.82)" : "transparent",
        backdropFilter: scrolled ? "saturate(140%) blur(10px)" : "none",
        borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
      }}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-5 md:px-10 py-4">
        <a
          href="#top"
          data-testid="nav-name"
          className="font-display font-semibold uppercase tracking-tight text-ink"
          style={{ fontSize: "clamp(14px,1.2vw,16px)", letterSpacing: "0.02em" }}
        >
          {meta.name}
        </a>

        <div className="hidden md:flex items-center gap-6">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              data-testid={`nav-link-${item.label.toLowerCase().replace(/[^a-z]/g, "")}`}
              className="link-underline font-display"
              style={{ fontSize: "13px", letterSpacing: "0.02em" }}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button data-testid="nav-mobile-trigger" aria-label="Open menu" className="p-1 text-ink">
                <Menu size={22} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-[200px] bg-[var(--white)] border-line">
              {nav.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <a
                    href={item.href}
                    data-testid={`nav-mobile-link-${item.label.toLowerCase().replace(/[^a-z]/g, "")}`}
                    className="font-display cursor-pointer"
                    style={{ fontSize: "14px" }}
                  >
                    {item.label}
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
};
