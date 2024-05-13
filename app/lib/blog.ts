import fs from 'fs';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';

type Metadata = {
  title: string;
  description: string;
  banner: string;
  date: string;
  tags: string[];
};

export type Blog = {
  metadata: Metadata;
  slug: string;
  content: string;
}[];

export async function parseFrontmatter(source: string) {
  const { data: frontmatter, content } = matter(source);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        rehypeCodeTitles,
        rehypePrism as any,
        [
          rehypeAutolinkHeadings,
          {
            behavior: 'wrap',
            properties: {
              className: ['anchor']
            }
          }
        ]
      ],
      format: 'mdx'
    }
  });

  return {
    metadata: frontmatter as Metadata,
    content: mdxSource
  };
}

function getMDXFiles(dir) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
}

async function readMDXFile(filePath) {
  let rawContent = fs.readFileSync(filePath, 'utf-8');
  return await parseFrontmatter(rawContent);
}

async function getMDXData(dir) {
  let mdxFiles = getMDXFiles(dir);

  const dataPromises = mdxFiles.map(async (file) => {
    let { metadata, content } = await readMDXFile(path.join(dir, file));
    let slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content
    };
  });

  return await Promise.all(dataPromises);
}

export async function getBlogPosts() {
  return await getMDXData(path.join(process.cwd(), 'content'));
}
