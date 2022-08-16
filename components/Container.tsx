import Head from 'next/head';
import { useRouter } from 'next/router';
import Footer from './Footer';
import Header from './Header';

export default function Container(props: { [x: string]: any; children: any }) {
  const router = useRouter()

  const { children, ...customMeta } = props
  const meta = {
    title: 'Mostafa Waleed - Frontend developer',
    description: `Mostafa Waleed, an experienced freelance web developer based in the Egypt`,
    image: '/mw-logo.svg"',
    type: 'website',
    ...customMeta,
  }

  return (
    <>
      <Head>
        <meta charSet="utf-8"/>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        {router.asPath=== "/" ? <meta name="google-site-verification" content="yNRfmqiqqj1EekI2rFHjrJoFVnx6zJTisszEIeWGf9Y" /> : null }
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
        <link
          rel="canonical"
          href={`https://www.mostafawaleed.me${router.asPath}`}
        />
        <meta name="robots" content="follow, index" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mostafa85341305" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <a className="[ skip-link ] [ button ]" href="#main-content">
        Skip to content
      </a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </>
  )
}
