import { readdirSync, readFileSync } from 'fs';
import matter from 'gray-matter';
import { join } from 'path';
import RSS from 'rss';

export async function getServerSideProps({ res }) {
  const files = readdirSync(join(process.cwd(), 'data/posts'));
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace('.mdx', '');
    const markdownWithMeta = readFileSync(
      join(process.cwd(), 'data/posts', filename),
      'utf-8'
    );
    const { data: frontmatter } = matter(markdownWithMeta);
    return { slug, frontmatter };
  });

  const feed = new RSS({
    title: 'Mostafa Waleed - Frontend developer',
    site_url: 'https://mostafawaleed.me',
    feed_url: 'https://mostafawaleed.me/feed.xml'
  });

  posts.map((post) => {
    const Time = `${post.frontmatter.date.year}-${
      post.frontmatter.date.month < 10
        ? `0${post.frontmatter.date.month}`
        : `${post.frontmatter.date.month}`
    }-${
      post.frontmatter.date.day < 10
        ? `0${post.frontmatter.date.day}`
        : `${post.frontmatter.date.day}`
    }`;
    feed.item({
      title: post.frontmatter.title,
      url: `https://mostafawaleed.me/blog/${post.slug}`,
      date: Time,
      description: post.frontmatter.description
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
