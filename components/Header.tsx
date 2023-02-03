import { useTheme } from 'next-themes';
import Link from 'next/link';
import useSound from 'use-sound';

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [play] = useSound('/audio/click.mp3');

  const toggleTheme = () => {
    play();
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <header role="banner" className="site-head">
      <div className="wrapper">
        <div className="site-head__inner">
          <Link
            href="/"
            aria-label="MW - home"
            className="[ site-head__brand ] [ fs-600 weight-bold ]"
          >
            <em className="text-primary-600">M</em>
            <em>W</em>
          </Link>
          <div className="site-head__navigation">
            <nav aria-label="primary" id="primary-navigation" tabIndex={-1}>
              <ul className="[ nav ] [ fs-300 weight-medium ]" role="list">
                <li>
                  <Link href="/blog">blog</Link>
                </li>
                <li>
                  <Link href="/contact">contact</Link>
                </li>
                <li>
                  <a href="https://github.com/mostafa-mw">gitHub</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/mostafa-waleed-b06034217/">
                    linkedin
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <button
            id="theme-toggle"
            type="button"
            onClick={toggleTheme}
            // onTouchStart={toggleTheme}
            aria-label={
              theme === 'dark'
                ? 'Switch to light Theme'
                : 'Switch to dark Theme'
            }
          ></button>
        </div>
      </div>
    </header>
  );
}
