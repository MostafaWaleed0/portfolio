import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/'
    },
    host: 'https://mwtech.vercel.app',
    sitemap: 'https://mwtech.vercel.app/sitemap.xml'
  };
}
