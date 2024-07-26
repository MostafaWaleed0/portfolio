import { CustomMDX } from '@/components/mdx';
import { Time } from '@/components/time';
import { getBlogPosts } from '@/lib/blog';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next/types';

export async function generateMetadata({
  params
}): Promise<Metadata | undefined> {
  const post = (await getBlogPosts()).find((post) => post.slug === params.slug);

  if (!post) {
    return;
  }

  const {
    slug,
    metadata: { title, description, banner, date, tags }
  } = post;

  const ogImage = `https://mwtech.vercel.app${banner}`;
  const url = `https://mwtech.vercel.app/blog/${slug}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: date,
      url: url,
      tags: tags,
      images: [
        {
          url: ogImage
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      site: '@MostafaAmr_',
      description,
      images: [ogImage]
    }
  };
}

export default async function PostPage({ params }) {
  let post = (await getBlogPosts()).find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="[ wrapper flow ] [ region ]">
      <header className="headline" data-align="center">
        <h1>{post.metadata.title}</h1>
        <div className="measure-short margin-inline-auto">
          <div
            className="[ cluster ] [ flex-wrap ] [ margin-block-start-500 ]"
            data-align="between"
          >
            <Time time={post.metadata.date} />
            <ul className="flex-row" role="list">
              {post.metadata.tags.map((tag) => (
                <li key={tag} className="[ pill ] [ margin-inline-end-100 ]">
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
      <div className="[ post ] [ flow ]">
        <hr />
        <CustomMDX {...post.content} />
      </div>
    </article>
  );
}
