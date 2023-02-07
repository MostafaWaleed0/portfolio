import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useCallback } from 'react';
import useSound from 'use-sound';
import { Logo } from 'components/icons';

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [play] = useSound('/audio/click.mp3');

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    play();
  }, [play, setTheme, theme]);

  return (
    <header role="banner" className="site-head">
      <div className="wrapper">
        <div className="site-head__inner">
          <Link
            href="/"
            className="[ site-head__brand ] [ font-base fs-300 weight-bold ]"
          >
            <Logo className="margin-inline-end-200" width={48} height={48} />
            <span>Mostafa Waleed</span>
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
            <button
              id="theme-toggle"
              type="button"
              className="[ site-head__theme-toggle ] [ margin-inline-start-500 ]"
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
  );
}
