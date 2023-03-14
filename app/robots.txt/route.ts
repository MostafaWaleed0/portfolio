export async function GET() {
  return new Response(`User-agent: *
Allow: /
  
Sitemap: https://mostafawaleed.me/sitemap.xml`);
}
