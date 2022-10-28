/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    storyblokApiToken: process.env.STORYBLOK_API_TOKEN,
  },
  images: {
    domains: ['a.storyblok.com'],
  },
}

module.exports = nextConfig
