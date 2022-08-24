import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import Container from 'components/Container';
import Time from 'components/Time';
import { mdxToHtml } from 'lib/mdx';
import { MDXRemote } from 'next-mdx-remote';

interface Props {
  slug: any;
  frontmatter: {
    card: boolean;
    title: string | number | boolean;
    tag: string | number | boolean;
    description: string | number | boolean;
    date: {
      day: number;
      month: number;
      year: number;
    };
  };
  content: any;
}

export default function PostPage({
  frontmatter: {
    title,
    date: { day, month, year }
  },
  content
}: Props) {
  return (
    <Container>
      <article className="[ wrapper ] [ region ] [ margin-block-start-300 ]">
        <div className="[ post ] [ flow ]">
          <header>
            <h1>{title}</h1>
            <div className="cluster" data-align="start">
              <Time day={day} month={month} year={year} />
            </div>
          </header>
          <hr />
          <MDXRemote {...content} />
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
