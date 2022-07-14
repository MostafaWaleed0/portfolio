import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'
import Container from '../components/Container'
import { data } from '../data/projects'

export default function Projects() {
  return (
    <Container title="Projects - MW">
      <section className="[ wrapper ] [ margin-block-start-700 margin-block-end-800 ]">
        <h1>Projects</h1>
        <div className="[ region ] [ cluster ]" data-layout="projects">
          <div className="card">
            <h3 className="fs-800 weight-bold ">
              <em className="text-primary-600 style-normal">M</em>
              <em className="style-normal">W</em>
            </h3>
          </div>
        </div>
        <div className="region">
          <strong className="text-warring measure-long margin-block-end-600 block">
            These projects are designs from figma and I have written the code
            for each project &quot;only for training and practice in writing the
            code&quot; ⇓⇓⇓⇓⇓
          </strong>
          <ol className="auto-grid" data-layout="projects" role="list">
            {data.map(
              (project: {
                id: number
                logo: any
                technologies: any[]
                github_url: string
                website_design: string
              }) => {
                return (
                  <li className="card" key={project.id}>
                    <div className="card__focusable">
                      <ul className="card__technologies" role="list">
                        {project.technologies?.map((image_url, index) => {
                          return (
                            <Fragment key={index}>
                              <li>
                                <Image
                                  src={image_url}
                                  width={37}
                                  height={37}
                                  alt=""
                                />
                              </li>
                            </Fragment>
                          )
                        })}
                      </ul>
                      <Link href={project.github_url}>
                        <a className="card__github" aria-label="Website Code">
                          <svg
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
                        </a>
                      </Link>
                      <div className="card__logo">{project.logo}</div>
                      <Link href={project.website_design}>
                        <a
                          className="card__designer"
                          aria-label="Website Design"
                        >
                          <svg viewBox="0 0 50 50" width="1.7em" height="1.7em">
                            <path
                              className="fill-default"
                              d="M 2.8125 4 A 1.0001 1.0001 0 0 0 2 5 L 2 15 A 1.0001 1.0001 0 0 0 3 16 L 47 16 A 1.0001 1.0001 0 0 0 48 15 L 48 5 A 1.0001 1.0001 0 0 0 47 4 L 3 4 A 1.0001 1.0001 0 0 0 2.90625 4 A 1.0001 1.0001 0 0 0 2.8125 4 z M 4 6 L 46 6 L 46 14 L 4 14 L 4 6 z M 8 9 C 7.4477153 9 7 9.4477153 7 10 C 7 10.552285 7.4477153 11 8 11 C 8.5522847 11 9 10.552285 9 10 C 9 9.4477153 8.5522847 9 8 9 z M 12 9 C 11.447715 9 11 9.4477153 11 10 C 11 10.552285 11.447715 11 12 11 C 12.552285 11 13 10.552285 13 10 C 13 9.4477153 12.552285 9 12 9 z M 16 9 C 15.447715 9 15 9.4477153 15 10 C 15 10.552285 15.447715 11 16 11 C 16.552285 11 17 10.552285 17 10 C 17 9.4477153 16.552285 9 16 9 z M 2 19 L 2 45 A 1.0001 1.0001 0 0 0 3 46 L 47 46 A 1.0001 1.0001 0 0 0 48 45 L 48 19 L 46 19 L 46 44 L 4 44 L 4 19 L 2 19 z M 7.8125 19 A 1.0001 1.0001 0 0 0 7 20 L 7 40 A 1.0001 1.0001 0 0 0 8 41 L 23 41 A 1.0001 1.0001 0 0 0 24 40 L 24 20 A 1.0001 1.0001 0 0 0 23 19 L 8 19 A 1.0001 1.0001 0 0 0 7.90625 19 A 1.0001 1.0001 0 0 0 7.8125 19 z M 27 19 L 27 21 L 43 21 L 43 19 L 27 19 z M 9 21 L 22 21 L 22 39 L 9 39 L 9 21 z M 27 24 L 27 26 L 43 26 L 43 24 L 27 24 z M 27 29 L 27 31 L 43 31 L 43 29 L 27 29 z M 27 34 L 27 36 L 43 36 L 43 34 L 27 34 z M 27 39 L 27 41 L 43 41 L 43 39 L 27 39 z"
                            />
                          </svg>
                        </a>
                      </Link>
                    </div>
                  </li>
                )
              },
            )}
          </ol>
        </div>
      </section>
    </Container>
  )
}
