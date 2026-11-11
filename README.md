# Veylo Media

Marketing website for Veylo Media, a real estate marketing agency for Delhi NCR and Uttarakhand. Live at **https://veylomedia.in**.

Astro builds every page to static HTML with plain CSS. The only client JavaScript is the React Bits spotlight on the home page service tiles, hydrated when it scrolls into view. One Cloudflare Pages Function handles the lead form.

## Run locally

```sh
npm install
npm run dev      # http://localhost:4321
npm test         # lead endpoint checks
npm run build    # static site in dist/
```

## Repo layout

```
src/
  site.ts               contact details (WhatsApp, phone, email), nav
  pages/                one file per route; services/ and areas/ are generated from content
  content/              service and area pages as Markdown, typed by content.config.ts
  components/           LeadForm, PageHero, Close (CTA band), Icon; react-bits/ holds React Bits components copied in
  layouts/Base.astro    <head>, SEO and OG tags, header, footer
  styles/global.css     design tokens and all styles
  assets/               images (optimised to WebP at build)
functions/api/lead.js   POST /api/lead: validate, check Turnstile, save to the Sheet
apps-script/Code.gs     Google Sheet + Gmail alert receiver
public/                 _headers (security headers), robots.txt, security.txt
docs/brand/             logo and brand source files (not shipped)
docs/research/          recon notes from the build
DESIGN.md, PRODUCT.md   design system and product brief
.github/                CI (tests, build, audit) and Dependabot
```

## How it's wired

| Piece | Where it's configured |
| --- | --- |
| Hosting | Cloudflare Pages project `veylo-digital`, auto-deploys `main`, preview per PR |
| Domain | `veylomedia.in` and `www` on Cloudflare DNS (nameservers moved from Hostinger) |
| Email | `hello@veylomedia.in` forwards to Gmail via Cloudflare Email Routing |
| Leads | Form → `/api/lead` → Apps Script web app → "Veylo Leads" Sheet + Gmail alert |
| Spam | Turnstile widget, honeypot field, rate limit (3 requests per 10 s per IP on `/api/lead`) |
| Secrets | Pages → Settings → Variables: `SHEET_URL`, `SHEET_SECRET`, `TURNSTILE_SECRET` (secret), `PUBLIC_TURNSTILE_SITE_KEY` (text) |

After changing a variable, retry the latest production deployment so it takes effect.

## Rotating secrets

1. **Sheet secret:** set a new `SECRET` in Apps Script → Project Settings → Script properties, then the same value in Cloudflare's `SHEET_SECRET`. Redeploy.
2. **Turnstile:** Cloudflare → Turnstile → the widget → Rotate secret key. Paste it into `TURNSTILE_SECRET`. Redeploy.

## Still to do (owner)

- WhatsApp number and phone in `src/site.ts`.
- Replace the sample renders in `src/assets/renders/` and on `/work` with real shoots.
