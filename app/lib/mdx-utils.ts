import fs from 'fs/promises';
import matter from 'gray-matter';
import path from 'path';

export const CONTENT_DIR = path.join(process.cwd(), 'content');

export interface MDXFrontmatter {
  title: string;
  description: string;
  date: string;
  banner: string;
  tags: string[];
  [key: string]: any;
}

export interface MDXPost {
  metadata: MDXFrontmatter;
  slug: string;
}

export const readMDXFile = async (file: string): Promise<MDXPost> => {
  try {
    const filePath = path.join(CONTENT_DIR, file);
    const source = await fs.readFile(filePath, 'utf-8');
    const { data } = matter(source);
    const slug = path.basename(file, '.mdx');

    return {
      metadata: data as MDXFrontmatter,
      slug
    };
  } catch (error) {
    console.error(`Error reading MDX file ${file}:`, error);
    throw error;
  }
};

export const getMDXFiles = async (): Promise<string[]> => {
  try {
    const files = await fs.readdir(CONTENT_DIR);
    return files.filter((file) => path.extname(file) === '.mdx');
  } catch (error) {
    console.error('Error reading content directory:', error);
    return [];
  }
};
