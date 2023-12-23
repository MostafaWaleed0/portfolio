import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Mostafa Waleed',
    short_name: 'Mostafa Waleed',
    description: 'Mostafa Waleed',
    theme_color: '#ffffff',
    background_color: '#ffffff',
    display: 'standalone',
    dir: 'ltr',
    lang: 'en-US',
    start_url: '/',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon'
      }
    ]
  };
}
