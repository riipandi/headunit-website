/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MAINTENANCE_MODE: process.env.MAINTENANCE_MODE || false,
    SPLITBEE_TOKEN: process.env.SPLITBEE_TOKEN || ''
  },
  images: {
    domains: ['doodleipsum.com', 'images.unsplash.com', 'pbs.twimg.com', 'shuffle.dev', 'tailwindui.com'],
    loader: 'cloudinary',
    path: '/'
  },
  eslint: {
    dirs: ['src']
  },
  reactStrictMode: true,
  poweredByHeader: false
}

module.exports = nextConfig
