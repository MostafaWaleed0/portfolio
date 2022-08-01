import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import '../assets/css/style.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="data-theme">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
