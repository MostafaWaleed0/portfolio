import Time from 'components/Time';
import GitHubCards from 'components/metrics/GitHubCards';
import blog from 'lib/blog';
import { GithubReposType, PostType } from 'lib/types';
import { InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import Container from '../components/Container';

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
            <p className="text-uppercase weight-bold fs-300">
              <span className="text-primary-600">{repos.length}</span> projects
              {' / '} <span className="text-primary-600">{posts.length}</span>{' '}
              posts
            </p>
            <Link href="/contact" className="button">
              Collaborate with me
            </Link>
          </div>
        </section>
        <section className="[ posts ] [ region ]">
          <div className="wrapper">
            <header className="cluster" data-align="between">
              <h2 className="fs-700">Recent Posts</h2>
              <div>
                <Link href="/blog" className="text-capitalize">
                  see all posts
                </Link>
              </div>
            </header>
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
                            height={300}
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
            <header className="cluster" data-align="between">
              <h2 className="fs-700">Featured Projects</h2>
              <div>
                <Link
                  href="https://github.com/mostafa-mw"
                  className="text-capitalize "
                >
                  see all projects
                </Link>
              </div>
            </header>
            <div className="padding-block-start-200">
              <Suspense fallback={null}>
                <GitHubCards repos={repos} username="mostafa-mw" />
              </Suspense>
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
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN}`
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
