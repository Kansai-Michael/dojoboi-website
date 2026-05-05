# DojoBoi Design Studios — Website

Landing page for **dojoboi.au** — the web design & student CRM business for karate dojos.

## What This Is

A single-page marketing site for DojoBoi Design Studios. Michael's business that builds websites and sets up Kihon CRM for other dojos. Built on the same Next.js stack used for all the Kansai Karate network sites.

## Stack

- **Next.js 16** (App Router, TypeScript, Turbopack)
- **Tailwind CSS v4**
- **Resend** for contact form email (see note below — needs replacing with Nodemailer)
- **Vercel** hosting, auto-deploy on `git push` to `master`
- **GitHub:** `Kansai-Michael/dojoboi-website`

## Page Sections

| Section | Component | Notes |
|---|---|---|
| Nav | `Nav.tsx` | Sticky, scroll-triggered border, "Get in touch" → #contact |
| Hero | `Hero.tsx` | Dark bg, enso watermark, two CTAs |
| Services | `Services.tsx` | Website Design + Kihon CRM cards, no pricing |
| Portfolio | `Portfolio.tsx` | Currently shows KKGC as placeholder — swap to Shukokai Cranbourne when approved |
| Why DojoBoi | `WhyDojoboi.tsx` | 3 columns: Built by dojo owner, End to end, Multi-location |
| Process | `Process.tsx` | 4 steps: Discovery → Design → Build → Launch |
| Contact Form | `ContactForm.tsx` | Client component, POSTs to `/api/contact` |
| Footer | `Footer.tsx` | Inverted logo, studio@dojoboi.au |

## Running Locally

```bash
cd "C:\Users\micha\Claude-Projects\dojoboi-website"
npm run dev
```

Open http://localhost:3000

## Environment Variables

| Variable | Purpose | Where to get it |
|---|---|---|
| `RESEND_API_KEY` | Contact form email sending | resend.com (needs replacing — see below) |
| `CONTACT_EMAIL` | Who receives enquiries | `studio@dojoboi.au` |

> **Note:** Resend has been problematic. The plan is to replace it with Nodemailer + Gmail SMTP (using `dojoboidesignstudio@gmail.com` App Password). Until that's done, the contact form will fail to send.

## Deploying

```bash
vercel deploy --prod --cwd "C:\Users\micha\Claude-Projects\dojoboi-website"
```

Vercel auto-deploys on `git push` to `master` — manual deploy only needed outside of git.

## Email Setup

| What | How |
|---|---|
| Receiving at `studio@dojoboi.au` | Cloudflare Email Routing → forwards to `dojoboidesignstudio@gmail.com` |
| Sending from the contact form | Resend (broken) → **TODO: replace with Nodemailer + Gmail SMTP** |
| Gmail spam | Forwarded emails may hit spam — "Not Spam" + create Gmail filter for `To: studio@dojoboi.au` |

## Domain & DNS

- Domain: `dojoboi.au` registered, DNS at Cloudflare
- Vercel custom domain: `dojoboi.au` connected (zone `d260e47b01f3619ebd1fdbee5366f1b9`)
- Cloudflare Email Routing: `studio@dojoboi.au` → `dojoboidesignstudio@gmail.com` (enabled, verified)
- MX records: `route1/2/3.mx.cloudflare.net`

## Brand

| Token | Value |
|---|---|
| Sumi Ink | `#0A0A0A` |
| Vermillion | `#C8102E` |
| Washi | `#FAF7EF` |
| Paper | `#F5F1E8` |
| Heading | Fraunces 800 |
| Label/mono | JetBrains Mono 500 |
| Body | Inter 400/500/600 |

## Future Work

1. **Replace Resend with Nodemailer + Gmail SMTP** — App Password for `dojoboidesignstudio@gmail.com`
2. **Swap portfolio** from KKGC to Shukokai Cranbourne once client approves
3. **Add more portfolio entries** as new clients come on board
4. **Privacy Policy page** — placeholder currently
