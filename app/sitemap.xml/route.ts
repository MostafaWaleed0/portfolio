import { allPosts } from 'contentlayer/generated';
import { sortPosts } from 'lib/sort';

const createSitemap = (
  slugs: string[]
) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9            
                            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
        ${slugs
          .map((slug) => {
            return `
                <url>
                    <loc>${`https://mostafawaleed.me/${slug}`}</loc>
                </url>
            `;
          })
          .join('')}
    </urlset>
`;

export async function GET() {
  const allPages = [
    ...['', 'blog', 'contact'],
    ...sortPosts(allPosts).map(({ slug }) => `blog/${slug}`)
  ];

  return new Response(createSitemap(allPages), {
    headers: {
      'Content-Type': 'text/xml',
      'Cache-Control': 'public, s-maxage=1200, stale-while-revalidate=600'
    }
  });
}
