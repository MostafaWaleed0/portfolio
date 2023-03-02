import Time from 'components/Time';
import { getPosts } from 'lib/posts';
import Link from 'next/link';
import type { Metadata } from 'next/types';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'My blog is a site where I share ideas, tips, and other random and interesting things about web development.'
};

export default async function Blog() {
  const posts = await getPosts();

  return (
    <article className="[ wrapper-sm ] [ margin-block-start-700 margin-block-end-800 ]">
      <h1>Blog</h1>
      <div className="margin-block-start-700">
        <div>
          <ul className="[ post-list ] [ flow ]" role="list">
            {posts.map(
              ({ slug, frontmatter: { title, date, description } }) => {
                const permalink = slug.replaceAll(' ', '-');
                return (
                  <li className="post-list__item " key={slug}>
                    <div className="flow">
                      <h2 className="fs-600" id={permalink}>
                        <Link
                          className="whitespace-wrap"
                          href={`/blog/${slug}`}
                        >
                          {title}
                        </Link>
                        <a href={`#${permalink}`}>
                          <span className="visually-hidden"> permalink</span>
                        </a>
                      </h2>

                      <div
                        className="[ cluster ] [ flow-space-50 ]"
                        data-align="start"
                      >
                        <Time time={date} />
                      </div>
                      <p className="line-clamp flow-space-50">{description}</p>
                    </div>
                  </li>
                );
              }
            )}
          </ul>
        </div>
      </div>
    </article>
  );
}
