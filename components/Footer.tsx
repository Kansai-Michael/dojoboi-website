export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "#050505",
        borderTop: "1px solid rgba(250,247,239,0.08)",
        padding: "clamp(40px, 6vw, 64px) 24px",
      }}
    >
      <div
        className="max-w-6xl mx-auto"
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 32,
        }}
      >
        {/* Logo + tagline */}
        <div>
          <div className="flex items-center gap-3" style={{ marginBottom: 12 }}>
            <svg
              viewBox="0 0 100 100"
              fill="none"
              style={{ width: 28, height: 28, flexShrink: 0 }}
            >
              <path
                d="M 50 10 A 40 40 0 1 1 18 75"
                stroke="#FAF7EF"
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
                  fontSize: 18,
                  letterSpacing: "-0.02em",
                  color: "var(--washi)",
                }}
              >
                Dojoboi
              </div>
              <div
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontWeight: 500,
                  fontSize: 7,
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: "var(--vermillion)",
                  marginTop: 3,
                }}
              >
                Design Studios
              </div>
            </div>
          </div>
          <div
            style={{
              fontFamily: "var(--font-fraunces), serif",
              fontStyle: "italic",
              fontSize: 14,
              color: "rgba(250,247,239,0.35)",
            }}
          >
            Software &amp; Web for Dojos
          </div>
        </div>

        {/* Right — contact + copyright */}
        <div
          style={{
            textAlign: "right",
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: 10,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            lineHeight: 1.8,
          }}
        >
          <a
            href="mailto:studio@dojoboi.au"
            className="link-footer"
            style={{
              color: "rgba(250,247,239,0.4)",
              textDecoration: "none",
              display: "block",
              transition: "color 0.15s",
            }}
          >
            studio@dojoboi.au
          </a>
          <div style={{ color: "rgba(250,247,239,0.2)" }}>
            © {year} Dojoboi Design Studios
          </div>
        </div>
      </div>
    </footer>
  );
}