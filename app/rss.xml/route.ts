import { getBlogPosts } from '@/lib/blog';
import { sortPosts } from '@/lib/sort';
import RSS from 'rss';

export const dynamic = 'force-dynamic';

export async function GET() {
  let allPosts = await getBlogPosts();

  const feed = new RSS({
    title: 'Mostafa Waleed',
    site_url: 'https://mostafawaleed.me',
    feed_url: 'https://mostafawaleed.me/rss.xml',
    language: 'en_US',
    image_url: 'https://mostafawaleed.me/favicon.ico'
  });

  sortPosts(allPosts).map(({ slug, metadata }) => {
    feed.item({
      title: metadata.title,
      url: `https://mostafawaleed.me/blog/${slug}`,
      date: metadata.date,
      description: metadata.description,
      categories: metadata.tags
    });
  });

  return new Response(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'text/xml'
    }
  });
}
