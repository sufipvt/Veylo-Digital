# Backend: Veylo Media

The site is static. Its only backend is the lead pipeline:

```
form (POST /api/lead) → Cloudflare Pages Function → Google Apps Script web app → Google Sheet row + Gmail alert
```

| Part | File | Notes |
| --- | --- | --- |
| Lead endpoint | `functions/api/lead.js` | Validates fields, checks Turnstile and the honeypot, escapes formulas, forwards to the Sheet |
| Sheet + alert | `apps-script/Code.gs` | Checks the shared secret, appends a row under a lock, sends the Gmail alert |
| Tests | `functions/api/lead.test.mjs` | `npm test`, with Google and Turnstile mocked |
| Env names | `.dev.vars.example`, `.env.example` | Names only, no values |

There is no auth, database, payments, uploads or scheduled jobs; the site doesn't need them. A CRM can be added later as a second forward from `lead.js`.

## Accounts the owner creates

Claude never signs up for anything or handles keys.

- **Google:** the "Veylo Leads" sheet and its Apps Script deployment. Set `SECRET` and `NOTIFY` in its Script properties.
- **Cloudflare:** a Pages project linked to this repo, a Turnstile widget, and the environment variables `SHEET_URL`, `SHEET_SECRET`, `TURNSTILE_SECRET` and `PUBLIC_TURNSTILE_SITE_KEY`.

## Security checklist

- [x] Secrets live only in env vars. `.env*` and `.dev.vars` are gitignored, and the built `dist/` contains no secret names.
- [x] Input is validated on the server for every field:
  - length limits
  - `type`, `city` and `services` must come from fixed lists
  - phone and email format checks
  - consent required
  - form content type only, body capped at 10 KB
- [x] Spreadsheet formula injection is blocked: values starting with `= + - @` are prefixed with `'`.
- [x] Spam protection: Turnstile is verified server-side and fails closed in production (503 without the secret), plus a honeypot field.
- [x] The Sheet webhook is authenticated: Apps Script rejects requests without the shared secret.
- [ ] **Rate limit on `/api/lead`.** The owner adds it in Cloudflare → Security → WAF → Rate limiting rules: path `/api/lead`, 5 requests per minute per IP, then block. It's free, and Pages Functions have no shared state to do this in code. Turnstile already stops automated floods; this caps manual abuse of the Gmail alert.
- [x] Gmail quota: free accounts get 100 alert emails a day. Past that, the row is still saved and only the email is skipped.
- [x] No uploads.
- [x] No user data in URLs or logs. The function doesn't log, and errors don't echo input.
- [x] `npm audit`: 0 vulnerabilities after upgrading Astro 5 → 7.4.7 (5 advisories were fixed, one of them critical).
- [x] The privacy policy names every processor: Cloudflare for hosting and Turnstile, Google for Sheets and Gmail.

## Known limits

- UTM tags are read from the page the form was sent from. If a visitor lands with UTM tags and then browses to another page, the tags are lost. Fix later if ads need exact attribution: store them in `sessionStorage` on landing.
