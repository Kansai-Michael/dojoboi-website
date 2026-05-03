"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dojo: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setState("success");
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  };

  const inputStyle = {
    width: "100%",
    background: "rgba(250,247,239,0.06)",
    border: "1px solid rgba(250,247,239,0.18)",
    padding: "14px 16px",
    fontSize: 15,
    color: "var(--washi)",
    outline: "none",
    fontFamily: "var(--font-inter), system-ui, sans-serif",
    transition: "border-color 0.15s",
  } as React.CSSProperties;

  const labelStyle = {
    fontFamily: "var(--font-jetbrains-mono), monospace",
    fontWeight: 500,
    fontSize: 10,
    letterSpacing: "0.22em",
    textTransform: "uppercase" as const,
    color: "rgba(250,247,239,0.5)",
    display: "block",
    marginBottom: 8,
  };

  return (
    <section
      id="contact"
      style={{
        background: "var(--ink)",
        padding: "clamp(64px, 10vw, 120px) 24px",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "clamp(40px, 6vw, 80px)",
            alignItems: "start",
          }}
        >
          {/* Left — copy */}
          <div>
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
              Get in touch
            </div>
            <h2
              style={{
                fontFamily: "var(--font-fraunces), serif",
                fontWeight: 800,
                fontSize: "clamp(32px, 5vw, 52px)",
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                color: "var(--washi)",
                marginBottom: 20,
              }}
            >
              Let's build something for your dojo.
            </h2>
            <p
              style={{
                fontFamily: "var(--font-fraunces), serif",
                fontStyle: "italic",
                fontSize: "clamp(16px, 2vw, 19px)",
                lineHeight: 1.5,
                color: "rgba(250,247,239,0.55)",
                marginBottom: 40,
              }}
            >
              Tell us about your school and what you need. We'll get back to you within one
              business day.
            </p>
            <div
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontSize: 11,
                letterSpacing: "0.15em",
                color: "rgba(250,247,239,0.4)",
              }}
            >
              studio@dojoboi.au
            </div>
          </div>

          {/* Right — form */}
          <div>
            {state === "success" ? (
              <div
                style={{
                  border: "1px solid rgba(250,247,239,0.15)",
                  padding: "48px 40px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-fraunces), serif",
                    fontWeight: 800,
                    fontSize: 28,
                    color: "var(--washi)",
                    marginBottom: 12,
                  }}
                >
                  Thanks — we'll be in touch.
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-fraunces), serif",
                    fontStyle: "italic",
                    fontSize: 16,
                    color: "rgba(250,247,239,0.55)",
                    margin: 0,
                  }}
                >
                  Usually within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 16,
                  }}
                >
                  <div>
                    <label htmlFor="name" style={labelStyle}>Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Sensei Jane Smith"
                      style={inputStyle}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(250,247,239,0.45)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(250,247,239,0.18)")}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" style={labelStyle}>Phone (optional)</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="04xx xxx xxx"
                      style={inputStyle}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(250,247,239,0.45)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(250,247,239,0.18)")}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" style={labelStyle}>Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@yourdojo.com.au"
                    style={inputStyle}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(250,247,239,0.45)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(250,247,239,0.18)")}
                  />
                </div>

                <div>
                  <label htmlFor="dojo" style={labelStyle}>Dojo name</label>
                  <input
                    id="dojo"
                    name="dojo"
                    type="text"
                    required
                    value={formData.dojo}
                    onChange={handleChange}
                    placeholder="Your Dojo Karate"
                    style={inputStyle}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(250,247,239,0.45)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(250,247,239,0.18)")}
                  />
                </div>

                <div>
                  <label htmlFor="message" style={labelStyle}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your school, how many students you have, what you need…"
                    style={{ ...inputStyle, resize: "vertical" }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(250,247,239,0.45)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(250,247,239,0.18)")}
                  />
                </div>

                {state === "error" && (
                  <p
                    style={{
                      fontFamily: "var(--font-jetbrains-mono), monospace",
                      fontSize: 11,
                      letterSpacing: "0.15em",
                      color: "var(--vermillion)",
                      margin: 0,
                    }}
                  >
                    Something went wrong — please email us directly at studio@dojoboi.au
                  </p>
                )}

                <button
                  type="submit"
                  disabled={state === "submitting"}
                  style={{
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                    fontWeight: 500,
                    fontSize: 12,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--ink)",
                    background: state === "submitting" ? "rgba(200,16,46,0.6)" : "var(--vermillion)",
                    border: "none",
                    padding: "18px 36px",
                    cursor: state === "submitting" ? "not-allowed" : "pointer",
                    width: "100%",
                    transition: "opacity 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    if (state !== "submitting") e.currentTarget.style.opacity = "0.85";
                  }}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  {state === "submitting" ? "Sending…" : "Send message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}