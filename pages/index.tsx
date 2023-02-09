import Time from 'components/Time';
import blog from 'lib/blog';
import { FrontendType, GithubReposType, PostType, ToolsType } from 'lib/types';
import { InferGetStaticPropsType } from 'next';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import Container from '../components/Container';
import { languages, tools } from '../data/skillsAndTools';

const GitHubCards = dynamic(() => import('components/metrics/GitHubCards'), {
  ssr: false
});

export default function Home({
  repos,
  posts
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Suspense fallback={null}>
      <Container>
        <section className="[ wrapper ] [ region ]">
          <div className="[ headline ] [ flow ]">
            <h1>Hi👋, I&rsquo;m Mostafa.</h1>
            <p>
              I'm a
              <strong className="text-primary-600">
                {' '}
                front-end developer{' '}
              </strong>
              living in Egypt. I take pleasure in finding solutions and
              constructing web-based projects. I also write about the web on my{' '}
              <Link href="/blog">blog</Link>.
            </p>
            <Link href="/contact" className="button">
              Collaborate with me
            </Link>
          </div>
        </section>
        <section className="[ posts ] [ region ]">
          <div className="[ wrapper ]">
            <h2 className="fs-700">Recent Posts</h2>
            <div className="padding-block-start-200">
              <ol className="auto-grid" role="list">
                {posts.map(
                  (
                    {
                      slug,
                      frontmatter: { title, description, date, banner, alt }
                    },
                    index
                  ) => {
                    return index < 4 ? (
                      <li className="card" key={slug}>
                        <div className="card__item">
                          <Image
                            src={banner}
                            width={500}
                            height={500}
                            className="card__image"
                            alt={alt}
                          />
                          <div className="card__inner">
                            <Link href={`blog/${slug}`} className="card__link">
                              <h3 className="weight-medium fs-500 margin-block-end-100">
                                {title}
                              </h3>
                            </Link>
                            <p
                              className="[ card__description ] [ line-clamp fs-300 ]"
                              data-line="4"
                            >
                              {description}
                            </p>
                            <p className="card__date">
                              <Time time={date} />
                            </p>
                          </div>
                        </div>
                      </li>
                    ) : null;
                  }
                )}
              </ol>
            </div>
          </div>
        </section>
        <section className="[ projects ] [ region ]">
          <div className="[ wrapper ]">
            <h2 className="fs-700">Featured Projects</h2>
            <div className="padding-block-start-200">
              <GitHubCards repos={repos} />
            </div>
          </div>
        </section>
        <section className="[ region ] [ bg-inverse ]">
          <div className="wrapper">
            <div className="flex-space-column-responsive">
              <article>
                <div className="[ post ] [ flow ]">
                  <h2 className="headline">About me</h2>
                  <p className="text-justify text-indent-2">
                    Hello. My name is{' '}
                    <em className="text-primary-600 weight-bold style-normal">
                      Mostafa Waleed
                    </em>
                    , and I&apos;m from Egypt. I&apos;m in high school. I always
                    have been in love with technology and its all possibilities,
                    I tried to learn different things like Internet Marketing
                    and Excel, and I&apos;ve always been fascinated with code,
                    and I&apos;ve always wanted to know how sites and
                    applications work, and how I see them on the Internet, My
                    interest in the world of development has increased over
                    time, after browsing, reading and watching clips on YouTube
                    about what are the specializations of development in
                    websites and applications, and I saw that the most specialty
                    that caught my attention was the{' '}
                    <em className="text-primary-600 weight-bold style-normal">
                      Fronted development
                    </em>
                    .
                  </p>
                  <strong className="block">
                    I don&apos;t forget when I typed in the console &quot;hello
                    world&quot;, I felt like I was going to hack the security
                    system for the CIA 😅
                  </strong>
                  <h3>
                    I <span className="text-primary-600">♥</span>
                  </h3>
                  <ul className="text-capitalize">
                    <li>playing guitar</li>
                    <li>music</li>
                    <li>working using sass</li>
                    <li>reading</li>
                  </ul>
                </div>
              </article>
              <div className="box-reflect"></div>
            </div>
          </div>
        </section>
        <section className="region">
          <div className="wrapper flow">
            <h2 className="headline">Skills and tools</h2>
            <div className="[ flow ] [ text-center font-mono ]">
              <h3>Frontend</h3>
              <ul className="cluster" role="list">
                {languages.map(({ id, icon, title }: FrontendType) => {
                  return (
                    <li key={id} className="[ square ] [ flow ]">
                      {icon}
                      <span className="fs-300 weight-medium font-mono">
                        {title}
                      </span>
                    </li>
                  );
                })}
                <li>
                  <Link href="/frontend" className="[ square ] [ flow ]">
                    More languages
                    <svg aria-hidden="true" viewBox="0 0 25 25" width="2em">
                      <path
                        className="fill-default"
                        d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                        data-name="Right"
                      />
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="[ flow ] [ text-center font-mono flow-space-900 ]">
              <h3>Tools</h3>
              <ul className="cluster" role="list">
                {tools.map(({ id, icon, title }: ToolsType) => {
                  return (
                    <li key={id} className="[ square ] [ flow ]">
                      {icon}
                      <span className="fs-300 weight-medium font-mono">
                        {title}
                      </span>
                    </li>
                  );
                })}
                <li>
                  <Link href="/tools" className="[ square ] [ flow ]">
                    More Tools
                    <svg aria-hidden="true" viewBox="0 0 25 25" width="2em">
                      <path
                        className="fill-default"
                        d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                        data-name="Right"
                      />
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </Container>
    </Suspense>
  );
}

export async function getStaticProps() {
  const posts: PostType[] = await blog();
  const resRepos = await fetch(
    'https://api.github.com/users/mostafa-mw/repos?type=owner&sort=pushed',
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`
      }
    }
  );
  const repos: GithubReposType = await resRepos.json();

  if (!repos || !posts) {
    return {
      notFound: true
    };
  }

  return {
    props: { repos: repos, posts: posts }
  };
}
