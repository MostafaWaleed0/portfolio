import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { ThemeWrapper } from '@/components/theme';
import { Analytics } from '@vercel/analytics/react';
import type { Viewport } from 'next';
import localFont from 'next/font/local';
import type { Metadata } from 'next/types';
import '../style/scss/style.scss';

const satoshi = localFont({
  src: [
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
  display: 'swap',
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
  display: 'swap',
  variable: '--font-mono'
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fffff' },
    { media: '(prefers-color-scheme: dark)', color: '#11111' }
  ]
};

export const metadata: Metadata = {
  metadataBase: new URL('https://mostafawaleed.me'),
  title: {
    default: 'Mostafa Waleed',
    template: '%s - Mostafa Waleed'
  },
  description:
    'Mostafa Waleed, an experienced freelance web developer based in Egypt.',
  alternates: {
    types: {
      'application/rss+xml': 'https://mostafawaleed.me/rss.xml'
    }
  },
  openGraph: {
    title: 'Mostafa Waleed',
    description:
      'Mostafa Waleed, an experienced freelance web developer based in Egypt.',
    url: 'https://mostafawaleed.me',
    images: [
      {
        url: 'https://mostafawaleed.me/apple-icon.png',
        width: 1200,
        height: 630
      }
    ],
    siteName: 'Mostafa Waleed',
    locale: 'en-US',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  twitter: {
    title: 'Mostafa Waleed',
    card: 'summary_large_image'
  },
  manifest: 'https://mostafawaleed.me/manifest.webmanifest',
  verification: {
    google: 'yNRfmqiqqj1EekI2rFHjrJoFVnx6zJTisszEIeWGf9Y',
    yandex: '14d8968c6df31e01',
    other: {
      'msvalidate.01': '7C327BDC039D585E5C712E44FBB3FFFD'
    }
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${satoshi.variable} ${cascadiaCode.variable}`}>
      <body>
        <ThemeWrapper>
          <a className="[ skip-link ] [ button ]" href="#main-content">
            Skip to content
          </a>
          <Header />
          <main id="main-content" tabIndex={-1}>
            {children}
            <Analytics />
          </main>
          <Footer />
        </ThemeWrapper>
      </body>
    </html>
  );
}
