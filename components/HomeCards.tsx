import Link from 'next/link'

export default function HomeCards() {
  return (
    <section className="region" data-layout="texture">
      <div className="wrapper">
        <h2 className="visually-hidden">what I am doing?</h2>
        <ol className="auto-grid" role="list">
          <li>
            <article className="[ card ] [ flow ] [ bg-default ]">
              <span
                className="font-mono fs-400 text-primary-600"
                aria-hidden="true"
              >
                01
              </span>
              <h3 className="fs-600">Written articles</h3>
              <p>About resources, development, advice, learning and life</p>
              <Link href="/blog">
                <a className="button">Read my articles</a>
              </Link>
            </article>
          </li>
          <li>
            <article className="[ card ] [ flow ] [ bg-default ]">
              <span
                className="font-mono fs-400 text-primary-600"
                aria-hidden="true"
              >
                02
              </span>
              <h3 className="fs-600">Built projects</h3>
              <p>website, projects, experience, my experiments</p>
              <Link href="/projects">
                <a className="button">show my work</a>
              </Link>
            </article>
          </li>
        </ol>
      </div>
    </section>
  )
}
