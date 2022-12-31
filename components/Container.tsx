import Head from 'next/head';
import { useRouter } from 'next/router';
import Footer from './Footer';
import Header from './Header';

export default function Container(props) {
  const router = useRouter();

  const { children, ...customMeta } = props;
  const meta = {
    title: 'Mostafa Waleed - Frontend developer',
    description: `Mostafa Waleed, an experienced freelance web developer based in Egypt`,
    image:
      'https://mostafawaleed.me/static/favicons/android-chrome-256x256.png',
    type: 'website',
    ...customMeta
  };

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
        <link
          rel="canonical"
          href={`https://www.mostafawaleed.me${router.asPath}`}
        />
        <meta name="robots" content="follow, index" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@MostafaAmr206" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <a className="[ skip-link ] [ button ]" href="#main-content">
        Skip to content
      </a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <Footer type={meta.type} />
    </>
  );
}
