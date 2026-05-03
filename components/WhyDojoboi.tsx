const reasons = [
  {
    num: "01",
    title: "Built by a dojo owner",
    body: "We run a karate school. We've lived the chaos of spreadsheets, missed leads, and websites that don't convert. We build what we wished we'd had.",
  },
  {
    num: "02",
    title: "End to end",
    body: "Strategy, design, build, launch, hosting, maintenance — all under one roof. No hand-offs. No chasing vendors. Just one team who knows your school.",
  },
  {
    num: "03",
    title: "Multi-location ready",
    body: "Built for dojo networks, not just single sites. When you're ready to add a second or sixth location, we replicate and deploy from the same template.",
  },
];

export default function WhyDojoboi() {
  return (
    <section style={{ background: "var(--washi)", padding: "clamp(64px, 10vw, 120px) 24px" }}>
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
            Why Dojoboi
          </div>
          <h2
            style={{
              fontFamily: "var(--font-fraunces), serif",
              fontWeight: 800,
              fontSize: "clamp(32px, 5vw, 56px)",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              color: "var(--ink)",
              maxWidth: 520,
            }}
          >
            We speak dojo.
          </h2>
        </div>

        {/* Three columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "clamp(24px, 4vw, 48px)",
          }}
        >
          {reasons.map((r) => (
            <div key={r.num} style={{ borderTop: "2px solid var(--ink)", paddingTop: 24 }}>
              <div
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontWeight: 600,
                  fontSize: 10,
                  letterSpacing: "0.22em",
                  color: "var(--vermillion)",
                  marginBottom: 12,
                }}
              >
                {r.num}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-fraunces), serif",
                  fontWeight: 800,
                  fontSize: "clamp(20px, 2.5vw, 26px)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.15,
                  color: "var(--ink)",
                  marginBottom: 14,
                }}
              >
                {r.title}
              </h3>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.65,
                  color: "rgba(10,10,10,0.65)",
                  margin: 0,
                }}
              >
                {r.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}