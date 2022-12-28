/* eslint-disable @next/next/no-html-link-for-pages */
import Link from 'next/link';
import { Rss } from 'components/icons';
import { FooterProps } from 'lib/types';

export default function Footer({ type }: FooterProps) {
  return (
    <footer
      className={`[ site-foot ] [ region ] [ text-center ${
        type === 'article' ? 'bg-inverse' : ''
      } ]`}
      role="contentinfo"
    >
      <div className="wrapper flow">
        <div className="[ site-foot__navigation ] [ margin-inline-auto ]">
          <nav aria-label="secondary" tabIndex={-1}>
            <ul
              className="[ nav ] [ fs-300 weight-medium measure-long margin-inline-auto gap-200 ] [ flex-wrap ]"
              role="list"
            >
              <li>
                <Link href="/contact">contact</Link>
              </li>
              <li>
                <a href="https://codepen.io/mostafawaleed3">codePen</a>
              </li>
              <li>
                <a href="https://twitter.com/mostafa85341305">twitter</a>
              </li>
              <li>
                <a href="/feed.xml" className="flex-row">
                  RSS
                  <Rss className="margin-inline-start-100" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <p className="fs-300 weight-bold margin-inline-auto">
          © {new Date().getFullYear()} MW | Frontend developer.
        </p>
      </div>
    </footer>
  );
}
