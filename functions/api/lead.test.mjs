// Run: npm test. Checks the lead endpoint with Google and Turnstile mocked.
import assert from 'node:assert/strict';
import { onRequestPost } from './lead.js';

let sent, ts = true, reply = 'ok';
globalThis.fetch = async (u, o) => (u.includes('turnstile') ? { json: async () => ({ success: ts }) } : ((sent = JSON.parse(o.body)), { ok: true, text: async () => reply }));
const req = (o, host = 'x.dev') => { const f = new FormData(); for (const [k, v] of Object.entries(o)) [].concat(v).forEach((x) => f.append(k, x)); return new Request(`https://${host}/api/lead`, { method: 'POST', body: f }); };
const ok = { name: 'Asha', phone: '+91 98765 43210', consent: 'on', type: 'An agent', city: 'Noida', services: ['Drone shoots', 'Hacked'], source: 'home' };
const env = { SHEET_URL: 'https://s', SHEET_SECRET: 'k', TURNSTILE_SECRET: 't' };
const run = async (r, e = env) => { sent = null; return (await onRequestPost({ request: r, env: e })).status; };

assert.equal(await run(req(ok)), 303);
assert.equal(sent.services, 'Drone shoots', 'unknown services are dropped');
assert.equal(sent.phone, "'+91 98765 43210", 'leading + is escaped for Sheets');
assert.equal(await run(req({ ...ok, name: '=IMPORTXML("x")' })), 303);
assert.ok(sent.name.startsWith("'="), 'formulas are escaped');
for (const bad of [{ type: 'Hacker' }, { city: 'Mars' }, { email: 'nope' }, { consent: '' }, { phone: '12' }, { name: '' }]) {
  assert.equal(await run(req({ ...ok, ...bad })), 400, JSON.stringify(bad));
  assert.equal(sent, null);
}
assert.equal(await run(req({ ...ok, website: 'x' })), 303, 'honeypot pretends success');
assert.equal(sent, null, 'honeypot is not saved');
ts = false; assert.equal(await run(req(ok)), 400, 'failed Turnstile is rejected'); ts = true;
assert.equal(await run(req(ok), { ...env, TURNSTILE_SECRET: '' }), 503, 'production refuses without Turnstile');
assert.equal(await run(req(ok, 'localhost'), { ...env, TURNSTILE_SECRET: '' }), 303, 'localhost works without Turnstile');
assert.equal(await run(new Request('https://x.dev/api/lead', { method: 'POST', body: '{}', headers: { 'Content-Type': 'application/json' } })), 415);
reply = 'forbidden'; assert.equal(await run(req(ok)), 502, 'a refused save is reported, not hidden'); reply = 'ok';
console.log('lead endpoint: all checks passed');
