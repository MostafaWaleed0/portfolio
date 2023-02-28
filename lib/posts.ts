import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { mdxToHtml } from './mdx';

export function getPosts() {
  const files = fs.readdirSync(path.join(process.cwd(), 'content'));
  const posts = files.map((filename) => {
    const slug = filename.replace('.mdx', '');
    const markdownWithMeta = fs.readFileSync(
      path.join(process.cwd(), 'content', filename),
      'utf-8'
    );
    const { data: frontmatter } = matter(markdownWithMeta);
    return { slug, frontmatter };
  });

  const sortPosts = posts.sort((a, b) => {
    return (
      Number(new Date(b.frontmatter.date)) -
      Number(new Date(a.frontmatter.date))
    );
  });

  return JSON.parse(JSON.stringify(sortPosts));
}

export async function readPosts({ slug }) {
  try {
    const markdownWithMeta = fs.readFileSync(
      path.join(process.cwd(), 'content', `${slug}.mdx`),
      'utf-8'
    );
    const { data: frontmatter, content } = matter(markdownWithMeta);
    const { html, readingTime } = await mdxToHtml(content);

    return { frontmatter, slug, content: html, readingTime };
  } catch {
    throw new Error('Error fetching posts');
  }
}
