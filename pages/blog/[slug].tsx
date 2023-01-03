import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import Container from 'components/Container';
import Time from 'components/Time';
import { mdxToHtml } from 'lib/mdx';
import { MDXRemote } from 'next-mdx-remote';
import { PostPageType } from 'lib/types';
import components from 'components/MDXComponents';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function PostPage({
  frontmatter: { title, description, date, banner },
  content,
  readingTime
}: PostPageType) {
  const [view, setView] = useState<number>();
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    if (slug) {
      fetch(`https://api.countapi.xyz/hit/${slug}/visits/?amount=0`)
        .then((res) => res.json())
        .then((res) => {
          return setView(res.value);
        });
    }
  }, [slug]);

  return (
    <Container
      title={`${title} - Mostafa Waleed`}
      description={description}
      date={date}
      image={banner}
      type="article"
    >
      <article className="[ wrapper ] [ region ] [ margin-block-start-300 ]">
        <div className="[ post ] [ flow ]">
          <header>
            <h1>{title}</h1>
            <div
              className="[ cluster ] [ margin-block-start-100 ]"
              data-align="between"
            >
              <Time time={date} />
              <p className="[ flex-row ] [ margin-inline-auto ]">
                <span className="margin-inline-end-100">{readingTime}</span>
                {` • `}
                <span className="margin-inline-start-100">{view} views</span>
              </p>
            </div>
          </header>
          <hr />
          <MDXRemote
            {...content}
            components={{
              ...components
            }}
          />
        </div>
      </article>
    </Container>
  );
}

export async function getStaticPaths() {
  const files = readdirSync('data/posts');
  const paths = files.map((filename) => ({
    params: { slug: filename.replace('.mdx', '') }
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = readFileSync(
    join('data/posts', `${slug}.mdx`),
    'utf-8'
  );
  const { data: frontmatter, content } = matter(markdownWithMeta);
  const { html, readingTime } = await mdxToHtml(content);
  return {
    props: JSON.parse(
      JSON.stringify({ frontmatter, slug, content: html, readingTime })
    )
  };
}
