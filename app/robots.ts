export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/'
      }
    ],
    host: 'https://mostafawaleed.me',
    sitemap: 'https://mostafawaleed.me/sitemap.xml'
  };
}
