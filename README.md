# Veylo Media

Marketing website for Veylo Media, a real estate marketing agency for Delhi NCR and Uttarakhand. Built with Astro as static pages, plain CSS and one serverless function.

## Run locally

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

## Where things live

| What | Where |
| --- | --- |
| Contact details (WhatsApp, phone, email) | `src/site.ts` |
| Service pages | `src/content/services/*.md` |
| Area pages | `src/content/areas/*.md` |
| Colours, type, layout | `src/styles/global.css` |
| Lead form endpoint | `functions/api/lead.js` |
| Google Sheet + Gmail script | `apps-script/Code.gs` |
| Security headers | `public/_headers` |
| Reference recon | `replica/` |

## Before launch (owner)

1. Fill in `src/site.ts`: the WhatsApp number, phone and email.
2. The domain (veylomedia.in) is set in `astro.config.mjs` and `public/robots.txt`. After deploying, add it under Custom domains in Cloudflare Pages and change the nameservers at Hostinger to the two Cloudflare gives you.
3. Replace the sample renders in `src/assets/renders/` and on `/work` with real shoots.
4. Confirm the retention period and response time in `src/pages/privacy.astro`.

## Lead pipeline setup

1. Create a Google Sheet called "Veylo Leads". Open Extensions → Apps Script and paste `apps-script/Code.gs`.
2. Under Project Settings → Script properties, add `SECRET` (a long random string) and `NOTIFY` (the Gmail address that should get alerts).
3. Deploy → New deployment → Web app. Set Execute as to Me and Who has access to Anyone. Copy the web app URL.
4. In Cloudflare Pages, add these environment variables: `SHEET_URL` (the URL from step 3), `SHEET_SECRET` (same as `SECRET`), `TURNSTILE_SECRET`, and `PUBLIC_TURNSTILE_SITE_KEY` (from Cloudflare Turnstile).
5. Deploy: connect this repo in Cloudflare Pages with the build command `npm run build` and the output directory `dist`.
6. Add a rate limit: Cloudflare → Security → WAF → Rate limiting rules. Set path `/api/lead`, 5 requests per minute per IP, action Block.

Run `npm test` to check the lead endpoint. See `replica/backend.md` for the security checklist.

To connect a CRM later, forward the same lead object from `functions/api/lead.js` to the CRM's webhook. The sheet stays as a backup.
