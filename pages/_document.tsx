/* eslint-disable @next/next/no-css-tags */
import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preload" href="/fonts/fonts.css" as="style" />
        <link rel="icon" type="image/svg" sizes="32x32" href="/static/favicons/mw-logo.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/static/favicons/mw-logo.svg" />
        <meta content="#ffffff" name="theme-color" />
        <meta content="#ffffff" name="msapplication-TileColor" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
