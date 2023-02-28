'use client';

import components from 'components/MDXComponents';
import Time from 'components/Time';
import { PostType } from 'lib/types';
import { MDXRemote } from 'next-mdx-remote';
import { useEffect, useState } from 'react';

export default function Post({
  post: {
    frontmatter: { title, date },
    readingTime,
    content,
    slug
  }
}: {
  post: PostType;
}) {
  const [views, setViews] = useState(null);

  useEffect(() => {
    if (slug) {
      fetch(`https://api.countapi.xyz/hit/${slug}/visits/?amount=0`)
        .then((res) => res.json())
        .then((res) => {
          setViews(res.value);
        });
    }
  }, [slug]);

  return (
    <article className="[ wrapper flow ] [ region ]">
      <header className="headline" data-align="center">
        <h1>{title}</h1>
        <div className="measure-short margin-inline-auto">
          <div
            className="[ cluster ] [ margin-block-start-500 ]"
            data-align="between"
          >
            <Time time={date} />
            <div className="flex-row">
              <span className="margin-inline-end-100">{readingTime}</span>
              {` • `}
              <span className="margin-inline-start-100">
                {views ? `${views} views` : 'No views'}
              </span>
            </div>
          </div>
        </div>
      </header>
      <div className="[ post ] [ flow ]">
        <hr />
        <MDXRemote {...content} components={{ ...components }} />
      </div>
    </article>
  );
}
