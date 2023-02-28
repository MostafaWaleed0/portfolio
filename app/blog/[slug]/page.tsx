import { getPosts, readPosts } from 'lib/posts';
import { notFound } from 'next/navigation';
import BlogLayout from 'layouts/blog';
import { Metadata } from 'next/types';

export async function generateStaticParams() {
  const posts = getPosts();
  return posts.map((post) => ({
    slug: post.slug
  }));
}

export async function generateMetadata({ params }): Promise<Metadata | null> {
  const findSlug = getPosts().find((post) => post.slug === params.slug);
  const post = await readPosts(findSlug);
  if (!post) {
    return null;
  }

  const {
    slug,
    frontmatter: { title, description, banner, date, creator, alt }
  } = post;

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
          url: banner,
          alt: alt
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      site: '@MostafaAmr206',
      creator: creator ?? 'Mostafa Waleed',
      description,
      images: [banner]
    }
  };
}

export default async function PostPage({ params }) {
  const findSlug = getPosts().find((post) => post.slug === params.slug);
  const post = await readPosts(findSlug);

  if (!post) {
    notFound();
  }

  return <BlogLayout post={post} />;
}
