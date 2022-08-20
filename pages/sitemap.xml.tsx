import { readdirSync } from "fs";
import { join } from "path";

const createSitemap = (slugs) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
        ${slugs
          .map((slug) => {
            return `
                <url>
                    <loc>${`https://mostafawaleed.me/${slug}`}</loc>
                    <lastmod>2022-08-20T13:28:54+00:00</lastmod>
                </url>
            `;
          })
    .join('')}
    </urlset>
`;

export async function getServerSideProps({ res }) {
  const allPosts = readdirSync(join('data/posts'))
  const allPages = [
    ...allPosts.map((slug) => `blog/${slug.replace('.md', '')}`),
    ...[
      '',
      'blog',
      'contact',
      'frontend',
      'contact-thank-you',
      'projects',
      'tools',
    ]
  ];

  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-Control','public, s-maxage=1200, stale-while-revalidate=600');
  res.write(createSitemap(allPages));
  res.end();

  return {
    props: {}
  };
}

export default function Sitemap() {
  return null;
}

