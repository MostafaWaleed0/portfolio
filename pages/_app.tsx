import '../assets/scss/style.scss';

import { ApolloProvider } from '@apollo/client';
import localFont from '@next/font/local';
import { Analytics } from '@vercel/analytics/react';
import { client } from 'lib/apolloClient';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';

const montserrat = localFont({
  src: [
    {
      path: '../public/fonts/Montserrat-Bold.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../public/fonts/Montserrat-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../public/fonts/Montserrat-Medium.woff2',
      weight: '500',
      style: 'normal'
    }
  ],
  variable: '--font-body'
});

const cascadiaCode = localFont({
  src: [
    {
      path: '../public/fonts/CascadiaCode.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../public/fonts/CascadiaCode-Bold.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../public/fonts/CascadiaCode-BoldItalic.woff2',
      weight: '700',
      style: 'italic'
    }
  ],
  variable: '--font-mono'
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${montserrat.variable} ${cascadiaCode.variable} body`}>
      <ThemeProvider attribute="data-theme">
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
        <Analytics />
      </ThemeProvider>
    </div>
  );
}
