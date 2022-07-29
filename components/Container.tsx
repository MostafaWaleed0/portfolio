import Head from 'next/head'
import { useRouter } from 'next/router'
import Footer from './Footer'
import Header from './Header'

export default function Container(props: { [x: string]: any; children: any }) {
  const router = useRouter()

  const { children, ...customMeta } = props
  const meta = {
    title: 'MW | Frontend Developer',
    description: `Mostafa Waleed, an experienced freelance web developer based in the Egypt`,
    image: '/mw-logo.svg"',
    type: 'website',
    ...customMeta,
  }

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <link
          rel="canonical"
          href={`https://www.mostafawaleed.me${router.asPath}`}
        />
        <meta content={meta.description} name="description" />
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
