# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro (static output) with plain CSS and design tokens as custom properties. There is no UI or CSS framework, and zero client JavaScript unless a feature needs it. The one backend piece is a Cloudflare Pages Function at `POST /api/lead`, which forwards leads to a Google Apps Script that writes to a Google Sheet and sends a Gmail alert. Hosting is Cloudflare Pages. The owner's standing rule is lean code: never 1,000 lines where 100 will do.

## Users

- **Real estate agents** in Delhi NCR (Delhi, Noida, Greater Noida, Gurgaon) and Uttarakhand. They are solo or small-team agents who want to be the known name in their area. Their listings look like everyone else's, they have no time to post, and their leads are inconsistent. They mostly browse on phones, between site visits.
- **Real estate firms** (agencies and brokerages) in the same regions. They need consistent, on-brand content across many listings and agents, plus reporting.

## Product Purpose

The marketing site for Veylo Media, a premium content and growth agency for real estate. Success means a qualified agent or firm contacts Veylo through WhatsApp, a call or the lead form, then books a growth call that turns into a retainer.

## Positioning

Veylo is the content and growth partner built only for real estate agents and firms. It produces cinematic property shoots and drone footage and runs the social media, content and influencer campaigns that put that footage in front of buyers and sellers. The reference agencies (Click 72, MarkitUp) are generalists. Veylo sells outcomes for real estate: listing attention, enquiries and seller mandates.

## Operating Context

Leads in the Indian real estate market move through WhatsApp and phone calls first, and forms second. Agents judge an agency by the quality of its visuals before anything else. Local search ("real estate marketing in Noida") drives discovery.

## Capabilities and Constraints

- Services: property shoots, drone shoots, social media management, content marketing and influencer marketing.
- Pages: Home, a Services hub plus 5 service pages, 5 area pages, Work, About, Contact, Thank you, Privacy and 404.
- Lead fields: name, phone (required), email, agent or firm, company, city, services, budget, message, source and UTM.
- Still to be provided by the owner: domain, Gmail address for lead alerts, WhatsApp number, phone and address. Placeholders are used until then.
- Privacy must follow India's DPDP Act 2023, with a consent checkbox on the form.

## Brand Commitments

- Name: Veylo Media. The logo is a silver and electric-blue V swoosh with the VEYLO wordmark spaced wide and DIGITAL underneath, on black (`docs/brand/logo.png`).
- Tagline: "Where Vision Meets Digital Evolution." Sign-off: "Build · Grow · Scale."
- Brand palette, pinned by the owner: black ground, electric blue accent, silver.
- About copy from the brand graphic (`docs/brand/about-us.png`): "Veylo Media is a premium digital marketing agency dedicated to helping brands grow, connect and achieve more in the digital world. We combine strategy, creativity and data-driven insights to build a powerful online presence and turn ideas into measurable results." Pillars: Strategic Marketing, Creative Solutions, Real Growth, Long-Term Partnerships.
- Voice: an expert digital marketer. Lead with outcomes over features, use short sentences, avoid jargon, and use one CTA per section.

## Evidence on Hand

- Logo and About Us graphic only.
- There is no shoot or drone footage, case studies, testimonials, client logos or stats yet. Do not fabricate any of them. Use placeholders clearly marked for the owner to replace, and label demonstration imagery as sample.

## Product Principles

1. The work is the pitch. Visuals carry the persuasion, and copy supports them.
2. Real estate first. Every line speaks to agents and firms, never to "businesses".
3. WhatsApp is the front door. One tap to talk, from any page.
4. Local wins. Name the areas, the micro-markets and the buyers.
5. Lean and fast. A phone on 4G between site visits must get the first screen instantly.

## Accessibility & Inclusion

WCAG 2.2 AA: contrast on every text colour, visible focus, keyboard reachable, semantic HTML, and `prefers-reduced-motion` respected.
