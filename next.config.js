/** @type {import('next').NextConfig} */

module.exports = {
  unstable_runtimeJS: false,
  reactStrictMode: true,
  swcMinify: true,
  compress: true,

  experimental: {
    legacyBrowsers: false,
    browsersListForSwc: true,
    images: { allowFutureImage: true },
  },

  images: {
    domains: ['image/png', 'image/webp', 's3-alpha.figma.com'],
  },
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer({})
