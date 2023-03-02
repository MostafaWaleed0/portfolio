import fs from 'fs/promises';
import matter from 'gray-matter';
import { PostType } from 'lib/types';
import path from 'path';
import { mdxToHtml } from './mdx';

export async function getPosts(): Promise<PostType[]> {
  const files = await fs.readdir(path.resolve(process.cwd(), 'content'));

  const results = await Promise.allSettled(
    files.map(async (filename) => {
      const slug = filename.replace('.mdx', '');
      const markdownWithMeta = await fs.readFile(
        path.resolve(process.cwd(), 'content', filename),
        'utf-8'
      );
      const { data: frontmatter } = matter(markdownWithMeta);
      return { slug, frontmatter };
    })
  );

  const posts = results
    .filter((result) => result.status === 'fulfilled')
    .map((result) => (result as PromiseFulfilledResult<PostType>).value);

  const sortedPosts = posts.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
  );

  return sortedPosts;
}

export async function readPosts(slug?: string) {
  try {
    const markdownWithMeta = await fs.readFile(
      path.resolve(process.cwd(), 'content', `${slug}.mdx`),
      'utf-8'
    );
    const { data: frontmatter, content } = matter(markdownWithMeta);
    const { html, readingTime = 0 } = await mdxToHtml(content);

    return { frontmatter, slug, content: html, readingTime };
  } catch (error) {
    console.error(error);
    throw new Error('Error fetching posts');
  }
}
