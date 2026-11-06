// Cloudflare Pages Function: POST /api/lead
// Env: SHEET_URL (Apps Script web app URL), SHEET_SECRET, TURNSTILE_SECRET (optional in dev).
const MAX = { name: 80, phone: 16, email: 120, company: 120, type: 30, city: 30, message: 800, source: 60 };
const clean = (v, n) => String(v ?? '').trim().slice(0, n).replace(/^[=+\-@\t\r]/, "'$&"); // block spreadsheet formulas

export async function onRequestPost({ request, env }) {
  const back = (path) => Response.redirect(new URL(path, request.url), 303);
  const f = await request.formData();
  if (f.get('website')) return back('/thank-you'); // honeypot: pretend success

  if (env.TURNSTILE_SECRET) {
    const r = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: new URLSearchParams({ secret: env.TURNSTILE_SECRET, response: f.get('cf-turnstile-response') || '', remoteip: request.headers.get('CF-Connecting-IP') || '' }),
    });
    if (!(await r.json()).success) return new Response('Spam check failed. Please go back and try again.', { status: 400 });
  }

  const lead = Object.fromEntries(Object.entries(MAX).map(([k, n]) => [k, clean(f.get(k), n)]));
  lead.services = clean(f.getAll('services').join(', '), 200);
  const utm = new URL(request.headers.get('Referer') || request.url).searchParams;
  lead.source += ['utm_source', 'utm_medium', 'utm_campaign'].map((k) => (utm.get(k) ? ` ${k}=${clean(utm.get(k), 60)}` : '')).join('');

  if (!lead.name || !/^[0-9+ ()-]{10,16}$/.test(lead.phone) || f.get('consent') !== 'on')
    return new Response('Please add your name, a valid phone number and your consent, then try again.', { status: 400 });

  const res = await fetch(env.SHEET_URL, { method: 'POST', body: JSON.stringify({ secret: env.SHEET_SECRET, ...lead }) });
  if (!res.ok) return new Response('We could not save your details. Please message us on WhatsApp instead.', { status: 502 });
  return back('/thank-you');
}
