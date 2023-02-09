// @ts-check

/**
 * @type {import('next').NextConfig}
 **/

const nextConfig = {
  images: {
    domains: ['image/png', 'image/webp', 's3-alpha.figma.com', "images.pexels.com"],
  },

  async headers() {
    return [
      {
        source : '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
  
  webpack(config, options) {
    const { isServer } = options;
    config.module.rules.push({
      test: /\.(ogg|mp3|wav|mpe?g)$/i,
      exclude: config.exclude,
      use: [
        {
          loader: require.resolve('url-loader'),
          options: {
            limit: config.inlineImageLimit,
            fallback: require.resolve('file-loader'),
            publicPath: `${config.assetPrefix}/_next/static/images/`,
            outputPath: `${isServer ? '../' : ''}static/images/`,
            name: '[name]-[hash].[ext]',
            esModule: config.esModule || false,
          },
        },
      ],
    });

    return config;
  },
}

const ContentSecurityPolicy = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' *.youtube.com *.twitter.com;
    child-src *.youtube.com *.google.com *.twitter.com;
    style-src 'self' 'unsafe-inline' *.googleapis.com;
    img-src * blob: data: ;
    media-src 'none';
    connect-src *;
    font-src 'self';
`

const securityHeaders = [
  {
    key  : 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, ''),
  },
  {
    key  : 'Referrer-Policy',
    value: 'origin-when-cross-origin',
  },
  {
    key  : 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key  : 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key  : 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key  : 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload',
  },
  {
    key  : 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
]

module.exports = nextConfig