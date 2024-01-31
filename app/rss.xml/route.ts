import { sortPosts } from '@/lib/sort';
import { allPosts } from 'contentlayer/generated';
import RSS from 'rss';

export async function GET() {
  const feed = new RSS({
    title: 'Mostafa Waleed',
    site_url: 'https://mostafawaleed.me',
    feed_url: 'https://mostafawaleed.me/rss.xml',
    language: 'en_US',
    image_url: 'https://mostafawaleed.me/favicon.ico'
  });

  sortPosts(allPosts).map((post) => {
    feed.item({
      title: post.title,
      url: `https://mostafawaleed.me/blog/${post.slug}`,
      date: post.date,
      description: post.description,
      categories: post.tags
    });
  });

  return new Response(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'text/xml',
      'Cache-Control': 'public, s-maxage=1200, stale-while-revalidate=600'
    }
  });
}
