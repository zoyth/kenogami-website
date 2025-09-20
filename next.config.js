/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  images: {
    domains: ['kenogami.com'],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig