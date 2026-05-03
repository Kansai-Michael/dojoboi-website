const steps = [
  {
    num: "01",
    title: "Discovery",
    body: "A 60-minute call to understand your programs, your students, and your goals. We map your sitemap, gather your content, and align on design direction.",
  },
  {
    num: "02",
    title: "Design",
    body: "We build your design system: colours, fonts, components. You review before a single page of code is written. Two revision rounds, no surprises.",
  },
  {
    num: "03",
    title: "Build",
    body: "Your site goes live on staging for testing — every page, every form, every booking flow. You get to click around and check everything works before launch.",
  },
  {
    num: "04",
    title: "Launch & Maintain",
    body: "Domain config, SSL, analytics, search console — all set up. Then monthly hosting, maintenance, and content edits so your site never goes stale.",
  },
];

export default function Process() {
  return (
    <section style={{ background: "var(--paper)", padding: "clamp(64px, 10vw, 120px) 24px" }}>
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
            How it works
          </div>
          <h2
            style={{
              fontFamily: "var(--font-fraunces), serif",
              fontWeight: 800,
              fontSize: "clamp(32px, 5vw, 56px)",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              color: "var(--ink)",
              maxWidth: 480,
            }}
          >
            From first call to first student.
          </h2>
        </div>

        {/* Steps */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 0,
          }}
        >
          {steps.map((step, i) => (
            <div
              key={step.num}
              style={{
                padding: "clamp(20px, 3vw, 36px)",
                borderLeft: i === 0 ? "none" : "1px solid rgba(10,10,10,0.1)",
                borderTop: "2px solid var(--ink)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontWeight: 600,
                  fontSize: 28,
                  letterSpacing: "-0.02em",
                  color: "var(--vermillion)",
                  marginBottom: 16,
                  lineHeight: 1,
                }}
              >
                {step.num}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-fraunces), serif",
                  fontWeight: 800,
                  fontSize: "clamp(18px, 2.2vw, 22px)",
                  letterSpacing: "-0.02em",
                  color: "var(--ink)",
                  marginBottom: 12,
                  lineHeight: 1.2,
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontSize: 14.5,
                  lineHeight: 1.65,
                  color: "rgba(10,10,10,0.65)",
                  margin: 0,
                }}
              >
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}