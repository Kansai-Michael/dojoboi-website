const deliverables = [
  "Flagship website — Cranbourne location, full program suite",
  "Little Ninjas, Mighty Samurais, Junior Karate, Adult Karate, Kobudo",
  "Black & crimson brand system distinct from other Shukokai sites",
  "Mobile-first responsive build on Next.js + Vercel",
  "On-page SEO, GA4, schema markup for LocalBusiness",
  "Lead capture forms with booking calendar integration",
  "Template ready to replicate across 5 remaining locations",
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      style={{
        background: "var(--ink)",
        padding: "clamp(64px, 10vw, 120px) 24px",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div style={{ marginBottom: "clamp(40px, 6vw, 64px)" }}>
          <div
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontWeight: 500,
              fontSize: 10,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "var(--vermillion)",
              marginBottom: 16,
            }}
          >
            Our work
          </div>
          <h2
            style={{
              fontFamily: "var(--font-fraunces), serif",
              fontWeight: 800,
              fontSize: "clamp(32px, 5vw, 56px)",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              color: "var(--washi)",
            }}
          >
            Real dojos. Real results.
          </h2>
        </div>

        {/* Case study card */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "clamp(32px, 5vw, 64px)",
            alignItems: "start",
          }}
        >
          {/* Left — info */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontSize: 10,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(250,247,239,0.45)",
                marginBottom: 12,
              }}
            >
              Client work · 2026
            </div>
            <h3
              style={{
                fontFamily: "var(--font-fraunces), serif",
                fontWeight: 800,
                fontSize: "clamp(26px, 3.5vw, 36px)",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                color: "var(--washi)",
                marginBottom: 16,
              }}
            >
              Shukokai Karate Dojos
              <br />
              <span style={{ color: "var(--vermillion)", fontWeight: 400, fontStyle: "italic" }}>
                Cranbourne
              </span>
            </h3>
            <p
              style={{
                fontFamily: "var(--font-fraunces), serif",
                fontStyle: "italic",
                fontSize: "clamp(16px, 2vw, 19px)",
                lineHeight: 1.5,
                color: "rgba(250,247,239,0.65)",
                marginBottom: 28,
              }}
            >
              A flagship website for one of Melbourne&apos;s leading traditional karate
              organisations — built to be replicated across six locations.
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 36px" }}>
              {deliverables.map((item) => (
                <li
                  key={item}
                  style={{
                    position: "relative",
                    paddingLeft: 22,
                    paddingTop: 8,
                    paddingBottom: 8,
                    borderBottom: "1px solid rgba(250,247,239,0.08)",
                    fontSize: 14,
                    lineHeight: 1.5,
                    color: "rgba(250,247,239,0.6)",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 8,
                      color: "var(--vermillion)",
                      fontFamily: "var(--font-jetbrains-mono), monospace",
                      fontSize: 12,
                    }}
                  >
                    →
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="https://skdcranborne-website.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-dark"
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontWeight: 500,
                fontSize: 11,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--washi)",
                border: "1px solid rgba(250,247,239,0.25)",
                padding: "14px 28px",
                textDecoration: "none",
                display: "inline-block",
                transition: "border-color 0.15s, color 0.15s",
              }}
            >
              View live site →
            </a>
          </div>

          {/* Right — browser mockup */}
          <div>
            <div
              style={{
                background: "rgba(250,247,239,0.05)",
                border: "1px solid rgba(250,247,239,0.1)",
                borderRadius: 4,
                overflow: "hidden",
              }}
            >
              {/* Browser chrome bar */}
              <div
                style={{
                  background: "rgba(250,247,239,0.08)",
                  padding: "10px 16px",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  borderBottom: "1px solid rgba(250,247,239,0.08)",
                }}
              >
                <div style={{ display: "flex", gap: 6 }}>
                  {["#ff5f56", "#ffbd2e", "#27c93f"].map((c) => (
                    <div
                      key={c}
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        background: c,
                        opacity: 0.6,
                      }}
                    />
                  ))}
                </div>
                <div
                  style={{
                    flex: 1,
                    background: "rgba(250,247,239,0.06)",
                    borderRadius: 3,
                    padding: "4px 12px",
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                    fontSize: 10,
                    color: "rgba(250,247,239,0.35)",
                    letterSpacing: "0.05em",
                  }}
                >
                  skdcranborne-website.vercel.app
                </div>
              </div>

              {/* Site preview as styled mockup */}
              <div
                style={{
                  background: "#111111",
                  aspectRatio: "16/10",
                  padding: "20px 24px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Mockup nav */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 24,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-fraunces), serif",
                      fontWeight: 800,
                      fontSize: 13,
                      color: "#ffffff",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    Shukokai
                  </div>
                  <div
                    style={{
                      background: "#A11515",
                      color: "white",
                      fontSize: 8,
                      fontFamily: "var(--font-jetbrains-mono), monospace",
                      padding: "4px 10px",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                    }}
                  >
                    Book
                  </div>
                </div>

                {/* Mockup hero */}
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontFamily: "var(--font-jetbrains-mono), monospace",
                      fontSize: 7,
                      letterSpacing: "0.25em",
                      color: "#A11515",
                      textTransform: "uppercase",
                      marginBottom: 8,
                    }}
                  >
                    Cranbourne · Traditional Karate
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-fraunces), serif",
                      fontWeight: 800,
                      fontSize: "clamp(20px, 4vw, 28px)",
                      color: "#ffffff",
                      lineHeight: 1.05,
                      letterSpacing: "-0.03em",
                      marginBottom: 12,
                    }}
                  >
                    Traditional karate for{" "}
                    <em
                      style={{
                        color: "#A11515",
                        fontStyle: "italic",
                        fontWeight: 400,
                      }}
                    >
                      every age.
                    </em>
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-fraunces), serif",
                      fontStyle: "italic",
                      fontSize: 10,
                      color: "rgba(255,255,255,0.45)",
                      lineHeight: 1.5,
                      maxWidth: 260,
                    }}
                  >
                    From Little Ninjas to adults — Shukokai Karate at Cranbourne West.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}