import Link from 'next/link';
import Container from '../components/Container';
import { data } from '../data/projects';
import type { ProjectsType } from 'lib/types';

export default function Projects() {
  return (
    <Container title="Projects - MW">
      <section className="[ wrapper ] [ margin-block-start-700 margin-block-end-800 ]">
        <h1>Projects</h1>
        <div className="region" data-layout="projects">
          <ol className="auto-grid" data-layout="projects" role="list">
            {data.map(
              ({
                id,
                logo,
                technologies,
                github_url,
                website_url
              }: ProjectsType) => {
                return (
                  <li className="card" key={id}>
                    <div className="card__focusable" tabIndex={0}>
                      <ul className="card__technologies" role="list">
                        {technologies.map((icon, i) => (
                          <li key={i + 1}>{icon}</li>
                        ))}
                      </ul>
                      {github_url && (
                        <Link
                          href={github_url}
                          className="card__github"
                          aria-label="Website Code"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg
                            aria-hidden="true"
                            width="1.6em"
                            height="1.6em"
                            viewBox="0 0 1024 1024"
                            fill="none"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                              transform="scale(64)"
                              className="fill-default"
                            />
                          </svg>
                        </Link>
                      )}
                      <div className="card__logo">{logo}</div>
                      {website_url && (
                        <Link
                          href={website_url}
                          className="card__designer"
                          aria-label="Website Link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1.6em"
                            height="1.6em"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                          </svg>
                        </Link>
                      )}
                    </div>
                  </li>
                );
              }
            )}
          </ol>
        </div>
      </section>
    </Container>
  );
}
