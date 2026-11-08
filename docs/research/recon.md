# Recon map: Veylo Media

Recon date: 2026-11-06. References: click72.com and markitup.in, read from public pages only. Screenshots couldn't be taken because the sandbox network blocks both sites.
Goal: a lean marketing site that wins retainers from real estate agents and firms in Delhi NCR and Uttarakhand.
Core loop: a visitor sees the work, trusts the results, and then contacts us by WhatsApp, a call or the lead form.

## Sources

| Source | URL | What it gave us |
| --- | --- | --- |
| Click 72 home | https://click72.com/ | Section order, industries, process, FAQ, forms |
| Click 72 services | https://click72.com/digital-marketing-services/ | Service hub plus one page per service |
| Click 72 about | https://click72.com/about-us/ | Mission, vision and values blocks |
| Click 72 contact | https://click72.com/contact/ | Offices, tel and WhatsApp links, careers modal |
| Click 72 portfolio | https://click72.com/click-72-portfolio/ | Featured case studies, filterable work grid |
| Click 72 web dev | https://click72.com/website-development-services/ | Service page template |
| MarkitUp home | https://markitup.in/ | One-page layout, content-led portfolio with filters, stats, brochure CTA |

Neither reference is focused on real estate. Click 72 lists "Real Estate Agents" as one industry tile among 14. MarkitUp serves creators and startups. Real estate positioning is where Veylo can stand out.

## What we take, what we beat

**Take from Click 72:** a service hub with one page per service, a 4-step process, a stats row, an FAQ accordion, WhatsApp-first CTAs with a prefilled message, featured case studies told as problem, work and result, and a filterable work grid.
**Take from MarkitUp:** a visual portfolio with category filters (Shoots, Drone, Reels, Social), "see project" links to video, a short stats strip in the hero, and a downloadable brochure CTA.
**Beat both:**
- One contact path and one lead form, instead of three forms and two contact URLs.
- Video that loads only on click, instead of autoplaying mp4 files on every page.
- Proof with sources. If we don't have a number, we don't make one up.
- No copy-paste leftovers or typos. Spell-check and the replica-brand sweep run before launch.
- Portfolio filters that actually filter.
- A floating WhatsApp button, which neither reference has.

## Screen inventory

| ID | Page | Route | Purpose | Key components | States |
| --- | --- | --- | --- | --- | --- |
| S01 | Home | / | Pitch, proof and conversion | Hero with drone video poster and 2 CTAs, stats strip, problem/solution, 5 service cards, work strip, process (Build · Grow · Scale), testimonials, areas served, FAQ, CTA band, lead form | Mobile, reduced motion |
| S02 | Services hub | /services | Overview of all services | Service cards, process, CTA band | |
| S03 | Service page (x5) | /services/[slug] | Shoots, drone, social, content, influencer | Hero, what you get, deliverables list, sample work, FAQ, CTA | One template plus a Markdown file per service |
| S04 | Area page (x5) | /areas/[slug] | Local SEO for Delhi, Noida, Greater Noida, Gurgaon and Uttarakhand | Local hero, local market notes, services, work, CTA | One template plus a Markdown file per area |
| S05 | Work | /work | Portfolio | Filter tabs, case cards, click-to-play video modal or embed | Empty filter state |
| S06 | Case study | /work/[slug] | One featured case | Brief, work, result, gallery, CTA | Could ship in phase 2 |
| S07 | About | /about | Trust and story | Story, mission, values, What is Veylo (from the brand graphic), team placeholder | |
| S08 | Contact | /contact | Conversion | Lead form, WhatsApp, call, email, areas served | Sending, success, error, Turnstile failure |
| S09 | Thank you | /thank-you | Confirms the lead was received, tracks the conversion | Next steps, WhatsApp link | |
| S10 | Privacy | /privacy | DPDP compliance | Text | |
| S11 | 404 | /404 | Recovery | Links to Home, Work and Contact | |

Global parts: header with nav and a "Book a growth call" button, footer with services, areas, contact and socials, a floating WhatsApp button, and a cookie-free analytics placeholder.

## User flows

- **F01 Visitor sends a lead (form):** any page, then a CTA, then the S08 form, then submit, then S09. The happy path is 3 clicks.
  - Edge cases: Turnstile fails, the network drops (the form keeps its input), the phone number is invalid, the bot honeypot is filled (silently dropped).
- **F02 Visitor messages on WhatsApp:** the floating button or a CTA opens wa.me with a prefilled message naming the page or service. That's 1 click.
- **F03 Visitor calls:** a tel link in the header (on mobile) or on S08. That's 1 click.
- **F04 Visitor checks proof first:** S01, then S05 with a filter, then a video plays, then a CTA, then F01.
- **F05 Local search visitor:** lands from Google on S04 ("real estate marketing in Noida"), then reads S03, then F01.

## Components

Button (primary, ghost, WhatsApp), section heading with eyebrow label, service card, stat, process step, testimonial card, work card with filter tabs, video facade (poster plus play button), FAQ accordion (native `<details>`), CTA band, lead form (inputs, select, multi-select chips, consent checkbox, honeypot, Turnstile, inline errors), header/nav with mobile menu, footer, floating WhatsApp button.

## Inferred data model

| Entity | Fields | Storage | Confidence |
| --- | --- | --- | --- |
| Lead | timestamp, name, phone, email, type (agent or firm), company, city, services[], budget, message, source page, UTM tags, status | Google Sheet row, created by Apps Script | High, from the reference forms plus our plan |
| Service | slug, title, one-liner, deliverables[], faq[], hero media | Markdown in the repo | High |
| Area | slug, name, local notes, featured work | Markdown in the repo | High |
| Work item | slug, title, category, client type, area, media (poster and video URL), result | Markdown in the repo | High |
| Testimonial | name, role, company, quote, photo | JSON in the repo | High |

## What we will not clone

- Their case studies, testimonials, stats, client names, photos, videos and copy. Everything is our own or a clearly marked placeholder.
- The Click 72 careers and resume upload modal. It's out of scope; Veylo can add a careers page later.
- WordPress and WPBakery. We build fresh in Astro.

## Size

11 page types (19 pages after the service and area variants), 5 flows, 5 content types and 1 endpoint. The hard parts are a fast but cinematic video presentation, the reliability and security of the lead pipeline (Turnstile to Apps Script to Sheet to Gmail), and strong local copy for each area. Size: **S to M**, about one to two weeks of focused work, mostly content and design polish.
