import { allPosts } from 'contentlayer/generated';
import { sortPosts } from 'lib/sort';
import RSS from 'rss';

export async function GET() {
  const feed = new RSS({
    title: 'Mostafa Waleed',
    site_url: 'https://mostafawaleed.me',
    feed_url: 'https://mostafawaleed.me/rss.xml',
    language: 'en-US',
    image_url:
      'https://mostafawaleed.me/static/favicons/android-chrome-256x256.png'
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
    headers: { 'Content-Type': 'text/xml' }
  });
}
