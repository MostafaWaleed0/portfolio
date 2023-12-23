import { sortPosts } from '@/lib/sort';
import { allPosts } from 'contentlayer/generated';

export default async function sitemap() {
  const posts = sortPosts(allPosts).map((post) => ({
    url: `https://mostafawaleed.me/blog/${post.slug}`,
    lastModified: post.date
  }));

  const routes = ['', 'blog', 'contact'].map((route) => ({
    url: `https://mostafawaleed.me/${route}`,
    lastModified: new Date().toISOString().split('T')[0]
  }));

  const allPages = [...routes, ...posts];

  return allPages;
}
