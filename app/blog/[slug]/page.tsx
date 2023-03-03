// import fs from 'fs';
import { allPosts } from 'contentlayer/generated';
import BlogLayout from 'layouts/blog';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next/types';

export async function generateStaticParams() {
  return allPosts.map((post) => ({
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
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return;
  }

  const { slug, title, description, banner, date } = post;

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
      description,
      images: [ogImage]
    }
  };
}

export default async function PostPage({ params }) {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return <BlogLayout post={post} />;
}
