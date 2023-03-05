'use client';

import components from 'components/MDXComponents';
import Time from 'components/Time';
import { type Post } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';

export default function Post({ post }: { post: Post }) {
  const Component = useMDXComponent(post.body.code);
  const tags: string[] = post.tags.toString().split(',');

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
              {tags.map((tag) => (
                <li key={tag} className="[ pill ] [ margin-inline-end-100 ]">
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
      <div>
        <div className="[ post ] [ flow ]">
          <hr />
          <Component components={{ ...components }} />
        </div>
      </div>
    </article>
  );
}
