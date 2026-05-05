# Changelog — DojoBoi Design Studios Website

## v1.0 — 2026-05-05

Initial build and launch.

### Built
- Full single-page landing site: Nav, Hero, Services, Portfolio, Why DojoBoi, Process, Contact Form, Footer
- Brand system: Sumi Ink / Vermillion / Washi / Paper palette, Fraunces + JetBrains Mono + Inter fonts
- Inline SVG enso logo (dark and inverted variants) — no external image requests
- CSS hover utility classes in `globals.css` — server components stay pure, no JS event handlers
- Contact form (`ContactForm.tsx`) — client component, POSTs to `/api/contact`, success/error states
- API route (`/api/contact`) — Resend integration, lazy init inside handler to avoid Vercel build failure
- Favicon (`app/icon.svg`) — enso mark on dark background, visible on both light and dark browser tabs

### Deployed
- GitHub repo: `Kansai-Michael/dojoboi-website` (branch: `master`)
- Vercel project: `kansai-michaels-projects/dojoboi-website`
- Live at: `https://dojoboi.au`

### Email
- Cloudflare Email Routing configured: `studio@dojoboi.au` → `dojoboidesignstudio@gmail.com`
- MX records verified pointing to Cloudflare
- Resend API key set in Vercel env vars (`RESEND_API_KEY`, `CONTACT_EMAIL`)
- Known issue: Resend domain `dojoboi.au` not verified — contact form sending not yet working. Plan: replace Resend with Nodemailer + Gmail SMTP

### Portfolio
- Initially shows Kansai Karate Gold Coast (founder's dojo) as placeholder
- Will be swapped to Shukokai Karate Cranbourne once client approves public use
