import Link from 'next/link'

export default function Footer() {
  return (
    <footer
      className="[ site-foot ] [ region ] [ text-center ]"
      role="contentinfo"
    >
      <div className="wrapper flow">
        <div className="[ site-foot__navigation ] [ margin-inline-auto ]">
          <nav aria-label="secondary" tabIndex={-1}>
            <ul
              className="[ nav ] [ fs-300 weight-medium ] [ flex-wrap ]"
              role="list"
            >
              <li>
                <Link href="/code-of-conduct">
                  <a>Code of Conduct</a>
                </Link>
              </li>
              <li>
                <Link href="/privacy">
                  <a>Privacy Policy</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a>contact</a>
                </Link>
              </li>
              <li>
                <a href="https://codepen.io/mostafawaleed3">codePen</a>
              </li>
              <li>
                <a href="https://codepen.io/mostafawaleed3">twitter</a>
              </li>
            </ul>
          </nav>
        </div>
        <p className="fs-300 weight-bold margin-inline-auto">
          © {new Date().getFullYear()} MW | Frontend developer.
        </p>
      </div>
    </footer>
  )
}
