import { getMDXFiles, readMDXFile } from './mdx-utils';

export async function getBlogPosts() {
  try {
    const mdxFiles = await getMDXFiles();
    const posts = await Promise.all(
      mdxFiles.map(async (file) => {
        const { metadata } = await readMDXFile(file);
        const slug = file.replace(/\.mdx$/, '');
        return { metadata, slug };
      })
    );

    return posts.sort(
      (a, b) =>
        new Date(b.metadata.date).getTime() -
        new Date(a.metadata.date).getTime()
    );
  } catch (error) {
    console.error('Error getting blog posts:', error);
    return [];
  }
}
