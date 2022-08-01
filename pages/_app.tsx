import '../assets/css/style.css'

import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="data-theme">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
