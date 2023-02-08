import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

export default async function readBlog() {
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

  return JSON.parse(JSON.stringify(posts));
}
