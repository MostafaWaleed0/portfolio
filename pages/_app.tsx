import '../style/scss/style.scss';

import { ApolloProvider } from '@apollo/client';
import localFont from '@next/font/local';
import { Analytics } from '@vercel/analytics/react';
import { client } from 'lib/apolloClient';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';

const satoshi = localFont({
  src: [
    {
      path: '../public/fonts/Satoshi-Black.woff2',
      weight: '900',
      style: 'normal'
    },
    {
      path: '../public/fonts/Satoshi-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../public/fonts/Satoshi-Bold.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../public/fonts/Satoshi-Medium.woff2',
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
    <div className={`${satoshi.variable} ${cascadiaCode.variable} body`}>
      <ThemeProvider attribute="data-theme">
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
        <Analytics />
      </ThemeProvider>
    </div>
  );
}
