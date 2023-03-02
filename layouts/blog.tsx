'use client';

import components from 'components/MDXComponents';
import Time from 'components/Time';
import { PostType } from 'lib/types';
import { MDXRemote } from 'next-mdx-remote';
import { PropsWithChildren } from 'react';

export default function Post({ post }: PropsWithChildren<{ post: PostType }>) {
  return (
    <article className="[ wrapper flow ] [ region ]">
      <header className="headline" data-align="center">
        <h1>{post.frontmatter.title}</h1>
        <div className="measure-short margin-inline-auto">
          <div
            className="[ cluster ] [ margin-block-start-500 ]"
            data-align="between"
          >
            <Time time={post.frontmatter.date} />
            <span className="margin-inline-end-100">{post.readingTime}</span>
          </div>
        </div>
      </header>
      <div className="[ post ] [ flow ]">
        <hr />
        <MDXRemote {...post.content} components={{ ...components }} />
      </div>
    </article>
  );
}
