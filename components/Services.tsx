const webItems = [
  "Modern, mobile-first website — Next.js on Vercel",
  "Your programs, timetable, and booking flow — all on one site",
  "On-page SEO: schema markup, sitemap, GA4 & Search Console setup",
  "Lead capture forms connected to your student CRM",
  "Domain configuration, SSL, Cloudflare setup",
  "Monthly hosting, maintenance & content edits included",
  "Multi-location ready — add new dojos from a single template",
];

const kihonItems = [
  "Student records, enrolments, emergency contacts",
  "Ranks, gradings and belt progression for your curriculum",
  "Timetable per location with class capacity and attendance",
  "Membership billing, fee plans and payment tracking",
  "Lead capture, trial booking and member conversion tracking",
  "Email and SMS templates for reminders and communications",
  "Network-wide reporting across multiple locations",
];

function ServiceCard({
  tag,
  title,
  description,
  items,
}: {
  tag: string;
  title: string;
  description: string;
  items: string[];
}) {
  return (
    <div
      style={{
        background: "#ffffff",
        border: "1px solid rgba(10,10,10,0.1)",
        padding: "clamp(28px, 4vw, 48px)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-jetbrains-mono), monospace",
          fontWeight: 500,
          fontSize: 10,
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "var(--vermillion)",
          marginBottom: 16,
        }}
      >
        {tag}
      </div>
      <h3
        style={{
          fontFamily: "var(--font-fraunces), serif",
          fontWeight: 800,
          fontSize: "clamp(22px, 3vw, 30px)",
          letterSpacing: "-0.02em",
          lineHeight: 1.1,
          color: "var(--ink)",
          marginBottom: 16,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: 15,
          lineHeight: 1.65,
          color: "rgba(10,10,10,0.65)",
          marginBottom: 28,
        }}
      >
        {description}
      </p>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {items.map((item) => (
          <li
            key={item}
            style={{
              position: "relative",
              paddingLeft: 22,
              paddingTop: 8,
              paddingBottom: 8,
              borderBottom: "1px solid rgba(10,10,10,0.07)",
              fontSize: 14.5,
              lineHeight: 1.5,
              color: "rgba(10,10,10,0.75)",
            }}
          >
            <span
              style={{
                position: "absolute",
                left: 0,
                top: 8,
                color: "var(--vermillion)",
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontSize: 13,
              }}
            >
              →
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Services() {
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
            What we do
          </div>
          <h2
            style={{
              fontFamily: "var(--font-fraunces), serif",
              fontWeight: 800,
              fontSize: "clamp(32px, 5vw, 56px)",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              color: "var(--ink)",
              maxWidth: 560,
            }}
          >
            Two products. One team. Built for your dojo.
          </h2>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
            marginBottom: 40,
          }}
        >
          <ServiceCard
            tag="01 · Website Design & Hosting"
            title="A site that turns visitors into students."
            description="We build modern, fast, SEO-ready websites designed for martial arts schools — with your programs, timetable, and booking flow all built in from day one."
            items={webItems}
          />
          <ServiceCard
            tag="02 · Kihon Student CRM"
            title="One platform to run your whole school."
            description="Kihon is a multi-tenant student management platform built specifically for traditional karate schools. Replace the spreadsheets, the sticky notes, and the three different apps."
            items={kihonItems}
          />
        </div>

        {/* Bottom CTA */}
        <div
          style={{
            borderTop: "1px solid rgba(10,10,10,0.12)",
            paddingTop: 32,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-fraunces), serif",
              fontStyle: "italic",
              fontSize: 18,
              color: "rgba(10,10,10,0.65)",
              margin: 0,
            }}
          >
            Every dojo is different. Let&apos;s talk about yours.
          </p>
          <a
            href="#contact"
            className="btn-dark"
            style={{
              color: "var(--washi)",
              background: "var(--ink)",
              padding: "14px 28px",
            }}
          >
            Talk to us
          </a>
        </div>
      </div>
    </section>
  );
}