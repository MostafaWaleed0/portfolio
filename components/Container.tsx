import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'

export default function Container(props: { [x: string]: any; children: any }) {
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
        <meta content={meta.description} name="description" />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="MW | Frontend development" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="" />
        <meta name="twitter:site" content="" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {'' && <meta property="article:published_time" content="" />}
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
