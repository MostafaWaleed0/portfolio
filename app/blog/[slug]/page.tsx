import { Time } from '@/components/time';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next/types';

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata | undefined> {
  const { slug } = await params;
  const { frontmatter: metadata } = await import(
    `../../../content/${slug}.mdx`
  );

  if (!metadata) {
    return;
  }

  const { title, description, banner, date, tags } = metadata;

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
      url,
      tags,
      images: [{ url: ogImage }]
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

export default async function PostPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  let { slug } = await params;
  const { default: Post, frontmatter: metadata } = await import(
    `../../../content/${slug}.mdx`
  );

  if (!Post) {
    notFound();
  }

  return (
    <article className="[ wrapper flow ] [ region ]">
      <header className="headline" data-align="center">
        <h1>{metadata.title}</h1>
        <div className="measure-short margin-inline-auto">
          <div
            className="[ cluster ] [ flex-wrap ] [ margin-block-start-500 ]"
            data-align="between"
          >
            <Time time={metadata.date} />
            <ul className="flex-row" role="list">
              {metadata.tags.map((tag: string) => (
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
        <Post />
      </div>
    </article>
  );
}
export const dynamicParams = false;
