import { useTheme } from 'next-themes/dist/index'
import Link from 'next/link'
import useSound from 'use-sound'

export default function Header() {
  const { theme, setTheme } = useTheme()
  const [play] = useSound('https://assets.codepen.io/605876/click.mp3')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
    play()
  }

  return (
    <header role="banner" className="site-head">
      <div className="wrapper">
        <div className="site-head__inner">
          <Link href="/">
            <a
              aria-label="MW - home"
              className="[ site-head__brand ] [ fs-600 weight-bold ]"
            >
              <em className="text-primary-600">M</em>
              <em>W</em>
            </a>
          </Link>
          <div className="site-head__navigation">
            <nav aria-label="primary" id="primary-navigation" tabIndex={-1}>
              <ul className="[ nav ] [ fs-300 weight-medium ]" role="list">
                <li>
                  <Link href="/blog">
                    <a>blog</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a>contact</a>
                  </Link>
                </li>
                <li>
                  <a href="https://github.com/mostafawaleed3">gitHub</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/mostafa-waleed-b06034217/">
                    linkedin
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="site-head__toggle-theme">
            <button
              id="theme-toggle"
              onClick={toggleTheme}
              aria-label={
                theme === 'dark'
                  ? 'Switch to light Theme'
                  : 'Switch to dark Theme'
              }
            ></button>
          </div>
        </div>
      </div>
    </header>
  )
}
