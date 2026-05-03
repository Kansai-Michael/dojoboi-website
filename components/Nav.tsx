"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-200"
      style={{
        background: "var(--washi)",
        borderBottom: scrolled ? "1px solid rgba(10,10,10,0.12)" : "1px solid transparent",
      }}
    >
      <div
        className="max-w-6xl mx-auto flex items-center justify-between"
        style={{ padding: "16px 24px" }}
      >
        {/* Logo */}
        <a href="#" aria-label="Dojoboi Design Studios" className="flex items-center gap-3">
          <svg viewBox="0 0 100 100" fill="none" style={{ width: 32, height: 32, flexShrink: 0 }}>
            <path
              d="M 50 10 A 40 40 0 1 1 18 75"
              stroke="#0A0A0A"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
            />
            <circle cx="18" cy="75" r="3" fill="#C8102E" />
          </svg>
          <div style={{ lineHeight: 1 }}>
            <div
              style={{
                fontFamily: "var(--font-fraunces), serif",
                fontWeight: 800,
                fontSize: 20,
                letterSpacing: "-0.02em",
                color: "var(--ink)",
              }}
            >
              Dojoboi
            </div>
            <div
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontWeight: 500,
                fontSize: 8,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "var(--vermillion)",
                marginTop: 3,
              }}
            >
              Design Studios
            </div>
          </div>
        </a>

        {/* CTA */}
        <a
          href="#contact"
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontWeight: 500,
            fontSize: 11,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--washi)",
            background: "var(--ink)",
            padding: "10px 20px",
            textDecoration: "none",
            transition: "background 0.15s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "var(--vermillion)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "var(--ink)")}
        >
          Get in touch
        </a>
      </div>
    </nav>
  );
}