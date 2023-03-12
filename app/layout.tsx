import localFont from 'next/font/local';
import AnalyticsWrapper from 'components/analytics';
import Footer from 'components/Footer';
import Header from 'components/Header';
import ThemeWrapper from 'components/theme';
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

export const metadata: Metadata = {
  title: {
    default: 'Mostafa Waleed',
    template: '%s - Mostafa Waleed'
  },
  description:
    'Mostafa Waleed, an experienced freelance web developer based in Egypt.',
  alternates: {
    types: {
      'application/rss+xml': 'https://mostafawaleed.me/feed.xml'
    }
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
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fffff' },
    { media: '(prefers-color-scheme: dark)', color: '#11111' }
  ],
  openGraph: {
    title: 'Mostafa Waleed',
    description:
      'Mostafa Waleed, an experienced freelance web developer based in Egypt.',
    url: 'https://mostafawaleed.me',
    siteName: 'Mostafa Waleed',
    images: [
      {
        url: 'https://mostafawaleed.me/static/favicons/android-chrome-256x256.png',
        width: 256,
        height: 256
      }
    ],
    locale: 'en-US',
    type: 'website'
  },
  twitter: {
    title: 'Mostafa Waleed',
    card: 'summary_large_image'
  },
  icons: {
    icon: [
      {
        url: '/static/favicons/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png'
      },
      {
        url: '/static/favicons/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png'
      }
    ],

    shortcut: '/static/favicons/favicon.ico',
    apple: {
      url: '/static/favicons/apple-touch-icon.png',
      sizes: '180x180',
      type: 'image/png'
    }
  },
  manifest: 'https://mostafawaleed.me/static/favicons/site.webmanifest',
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
            <AnalyticsWrapper />
          </main>
          <Footer />
        </ThemeWrapper>
      </body>
    </html>
  );
}
