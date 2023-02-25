import { readdirSync, readFileSync } from 'fs';
import matter from 'gray-matter';
import { join } from 'path';
import RSS from 'rss';

export async function getServerSideProps({ res }) {
  const files = readdirSync(join(process.cwd(), 'content'));
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace('.mdx', '');
    const markdownWithMeta = readFileSync(
      join(process.cwd(), 'content', filename),
      'utf-8'
    );
    const { data: frontmatter } = matter(markdownWithMeta);
    return { slug, frontmatter };
  });

  const feed = new RSS({
    title: 'Mostafa Waleed',
    site_url: 'https://mostafawaleed.me',
    feed_url: 'https://mostafawaleed.me/feed.xml',
    language: 'en',
    image_url:
      'https://mostafawaleed.me/static/favicons/android-chrome-256x256.png'
  });

  posts.map((post) => {
    feed.item({
      title: post.frontmatter.title,
      url: `https://mostafawaleed.me/blog/${post.slug}`,
      date: post.frontmatter.date,
      description: post.frontmatter.description,
      author: post.frontmatter.author ?? 'Mostafa Waleed',
      categories: [...post.frontmatter.tags] // array of item categories
    });
  });

  res.setHeader('Content-Type', 'text/xml');
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1200, stale-while-revalidate=600'
  );
  res.write(feed.xml({ indent: true }));
  res.end();

  return {
    props: {}
  };
}

export default function RSSFeed() {
  return null;
}
