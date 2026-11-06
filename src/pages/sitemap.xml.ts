import { getCollection } from 'astro:content';
export async function GET({ site }: { site: URL }) {
  const paths = ['/', '/services', '/work', '/about', '/contact', '/privacy',
    ...(await getCollection('services')).map((s) => `/services/${s.id}`),
    ...(await getCollection('areas')).map((a) => `/areas/${a.id}`)];
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map((p) => `<url><loc>${new URL(p, site)}</loc></url>`).join('')}</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}
