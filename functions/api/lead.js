// Cloudflare Pages Function: POST /api/lead
// Env: SHEET_URL (Apps Script web app URL), SHEET_SECRET, TURNSTILE_SECRET (required except on localhost).
const MAX = { name: 80, phone: 16, email: 120, company: 120, type: 30, city: 30, message: 800, source: 60 };
const ALLOWED = { type: ['An agent', 'A real estate firm'], city: ['Delhi', 'Noida', 'Greater Noida', 'Gurgaon', 'Uttarakhand', 'Other', ''] };
const SERVICES = ['Property shoots', 'Drone shoots', 'Social media', 'Content marketing', 'Influencer marketing'];
const clean = (v, n) => String(v ?? '').trim().slice(0, n).replace(/^[=+\-@\t\r]/, "'$&"); // block spreadsheet formulas

export async function onRequestPost({ request, env }) {
  const back = (path) => Response.redirect(new URL(path, request.url), 303);
  if (!(request.headers.get('Content-Type') || '').match(/form/)) return new Response('Bad request', { status: 415 });
  if (Number(request.headers.get('Content-Length') || 0) > 10_000) return new Response('Too large', { status: 413 });
  const f = await request.formData();
  if (f.get('website')) return back('/thank-you'); // honeypot: pretend success

  const local = new URL(request.url).hostname === 'localhost';
  if (!env.TURNSTILE_SECRET && !local) return new Response('Spam protection is not configured.', { status: 503 });
  if (env.TURNSTILE_SECRET) {
    const r = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: new URLSearchParams({ secret: env.TURNSTILE_SECRET, response: f.get('cf-turnstile-response') || '', remoteip: request.headers.get('CF-Connecting-IP') || '' }),
    });
    if (!(await r.json()).success) return new Response('Spam check failed. Please go back and try again.', { status: 400 });
  }

  const lead = Object.fromEntries(Object.entries(MAX).map(([k, n]) => [k, clean(f.get(k), n)]));
  lead.services = f.getAll('services').filter((s) => SERVICES.includes(s)).join(', ');
  const utm = new URL(request.headers.get('Referer') || request.url).searchParams;
  lead.source += ['utm_source', 'utm_medium', 'utm_campaign'].map((k) => (utm.get(k) ? ` ${k}=${clean(utm.get(k), 60)}` : '')).join('');

  const bad = Object.entries(ALLOWED).some(([k, list]) => !list.includes(String(f.get(k) ?? '')));
  if (bad || (lead.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) || !lead.name || !/^[0-9+ ()-]{10,16}$/.test(String(f.get('phone') ?? '').trim()) || f.get('consent') !== 'on')
    return new Response('Please check your name, phone number and email, tick the consent box, then try again.', { status: 400 });

  const res = await fetch(env.SHEET_URL, { method: 'POST', body: JSON.stringify({ secret: env.SHEET_SECRET, ...lead }) });
  if (!res.ok) return new Response('We could not save your details. Please message us on WhatsApp instead.', { status: 502 });
  return back('/thank-you');
}
