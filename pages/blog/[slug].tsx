import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import Container from 'components/Container';
import Time from 'components/Time';
import { mdxToHtml } from 'lib/mdx';
import { MDXRemote } from 'next-mdx-remote';
import { useEffect } from 'react';
import { PostPageType } from 'types';
import components from 'components/MDXComponents';

export default function PostPage({
  frontmatter: {
    title,
    description,
    date: { day, month, year }
  },
  content
}: PostPageType) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <Container title={title + ' - MW'} description={description}>
      <article className="[ wrapper ] [ region ] [ margin-block-start-300 ]">
        <div className="sidebar">
          <div className="[ post ] [ flow ]">
            <header>
              <h1>{title}</h1>
              <div className="cluster" data-align="start">
                <Time day={day} month={month} year={year} />
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
          <div className="advertisement">
            <ins
              className="adsbygoogle"
              style={{ display: 'block' }}
              data-ad-format="autorelaxed"
              data-ad-client="ca-pub-9386151835640137"
              data-ad-slot="4501655395"
            ></ins>
          </div>
        </div>
      </article>
    </Container>
  );
}

export async function getStaticPaths() {
  const files = readdirSync(join('data/posts'));
  const paths = files.map((filename) => ({
    params: { slug: filename.replace('.mdx', '') }
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = readFileSync(
    join('data/posts', slug + '.mdx'),
    'utf-8'
  );
  const { data: frontmatter, content } = matter(markdownWithMeta);
  const { html, readingTime } = await mdxToHtml(content);
  return {
    props: { frontmatter, slug, content: html, readingTime }
  };
}
