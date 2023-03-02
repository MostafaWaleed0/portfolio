// import fs from 'fs';
import BlogLayout from 'layouts/blog';
import { getPosts, readPosts } from 'lib/posts';
import { PostType } from 'lib/types';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next/types';

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    slug: post.slug
  }));
}

// async function createImageFolder() {
//   const files = fs.readdirSync('content');

//   for (const file of files) {
//     const dir = file.replace('.mdx', '');
//     fs.existsSync(`images/${dir}`)
//       ? null
//       : fs.mkdirSync(`public/images/${dir}`, { recursive: true });
//   }
// }

// createImageFolder();

export async function generateMetadata({
  params
}): Promise<Metadata | undefined> {
  const findSlug = (await getPosts()).find((post) => post.slug === params.slug);
  const post = await readPosts(findSlug?.slug);

  if (!post) {
    return;
  }

  const {
    slug,
    frontmatter: { title, description, banner, date, creator, alt }
  } = post;

  const ogImage = `https://mostafawaleed.me${banner}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: date,
      url: `https://mostafawaleed.me/blog/${slug}`,
      images: [
        {
          url: ogImage
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      site: '@MostafaAmr206',
      creator: creator ?? 'Mostafa Waleed',
      description,
      images: [ogImage]
    }
  };
}

export default async function PostPage({ params }) {
  const findSlug = (await getPosts()).find((post) => post.slug === params.slug);
  const post: PostType = await readPosts(findSlug?.slug);

  if (!post) {
    notFound();
  }

  return <BlogLayout post={post} />;
}
