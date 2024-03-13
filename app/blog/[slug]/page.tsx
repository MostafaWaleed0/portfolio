import { MDXComponents } from "@/components/mdx";
import { Time } from "@/components/time";
import { allPosts } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { notFound } from "next/navigation";
import type { Metadata } from "next/types";

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return;
  }

  const { slug, title, description, banner, date, tags } = post;

  const ogImage = `https://mostafawaleed.me${banner}`;
  const url = `https://mostafawaleed.me/blog/${slug}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: date,
      url: url,
      tags: tags,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      site: "@MostafaAmr_",
      description,
      images: [ogImage],
    },
  };
}

export default function PostPage({ params }) {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <article className="[ wrapper flow ] [ region ]">
      <header className="headline" data-align="center">
        <h1>{post.title}</h1>
        <div className="measure-short margin-inline-auto">
          <div
            className="[ cluster ] [ flex-wrap ] [ margin-block-start-500 ]"
            data-align="between"
          >
            <Time time={post.date} />
            <ul className="flex-row" role="list">
              {post.tags.map((tag) => (
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
        <MDXContent components={{ ...MDXComponents }} />
      </div>
    </article>
  );
}
