export default function Hero() {
  return (
    <section
      style={{
        background: "var(--ink)",
        paddingTop: "clamp(120px, 18vw, 180px)",
        paddingBottom: "clamp(80px, 12vw, 140px)",
        paddingLeft: "clamp(24px, 6vw, 96px)",
        paddingRight: "clamp(24px, 6vw, 96px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background enso watermark */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          right: "-80px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "clamp(280px, 40vw, 560px)",
          height: "clamp(280px, 40vw, 560px)",
          opacity: 0.04,
          pointerEvents: "none",
        }}
      >
        <svg viewBox="0 0 100 100" fill="none" style={{ width: "100%", height: "100%" }}>
          <path
            d="M 50 10 A 40 40 0 1 1 18 75"
            stroke="#FAF7EF"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="18" cy="75" r="3" fill="#C8102E" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto" style={{ position: "relative", zIndex: 1 }}>
        {/* Eyebrow */}
        <div
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontWeight: 500,
            fontSize: "clamp(10px, 1.2vw, 12px)",
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color: "var(--vermillion)",
            marginBottom: 28,
          }}
        >
          Software &amp; Web · For Dojos
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "var(--font-fraunces), serif",
            fontWeight: 800,
            fontSize: "clamp(44px, 7.5vw, 88px)",
            lineHeight: 0.96,
            letterSpacing: "-0.035em",
            color: "var(--washi)",
            maxWidth: 800,
            marginBottom: "clamp(24px, 4vw, 40px)",
          }}
        >
          Your dojo deserves a website that works as hard{" "}
          <em
            style={{
              fontStyle: "italic",
              fontWeight: 400,
              color: "var(--vermillion)",
            }}
          >
            as you do.
          </em>
        </h1>

        {/* Sub */}
        <p
          style={{
            fontFamily: "var(--font-fraunces), serif",
            fontStyle: "italic",
            fontSize: "clamp(18px, 2.4vw, 24px)",
            lineHeight: 1.45,
            color: "rgba(250,247,239,0.65)",
            maxWidth: 560,
            marginBottom: "clamp(36px, 5vw, 56px)",
          }}
        >
          Built by a dojo owner, for dojo owners. We understand your programs, your students,
          and what it takes to fill a class.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <a
            href="#contact"
            className="btn-dark"
            style={{
              color: "var(--ink)",
              background: "var(--vermillion)",
              padding: "16px 32px",
            }}
          >
            Get in touch
          </a>
          <a
            href="#portfolio"
            className="btn-outline-light"
            style={{
              color: "var(--washi)",
              border: "1px solid rgba(250,247,239,0.25)",
              padding: "16px 32px",
            }}
          >
            See our work
          </a>
        </div>
      </div>
    </section>
  );
}