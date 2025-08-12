import { getBlogPosts } from '@/lib/blog';

export default async function sitemap() {
  let allPosts = await getBlogPosts();

  const posts = allPosts.map(({ slug, metadata }) => ({
    url: `https://mwtech.vercel.app/blog/${slug}`,
    lastModified: metadata.date
  }));

  const routes = ['', 'blog', 'contact'].map((route) => ({
    url: `https://mwtech.vercel.app/${route}`,
    lastModified: new Date().toISOString().split('T')[0]
  }));

  const allPages = [...routes, ...posts];

  return allPages;
}
