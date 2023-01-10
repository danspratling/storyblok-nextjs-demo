const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    storyblokApiToken: process.env.STORYBLOK_API_TOKEN,
  },
  images: {
    domains: ["a.storyblok.com"],
    // loader: "custom",
    // loaderFile: "./utils/imageLoaders/storyblok.js", // This doesn't seem to be working as intended?
    deviceSizes: [
      360, 420, 640, 750, 828, 1080, 1200, 1440, 1720, 1920, 2048, 3840,
    ],
    imageSizes: [16, 24, 32, 48, 64, 96, 128, 192, 256, 384, 512],
  },

  async redirects() {
    return [
      {
        source: "/changelog",
        destination: "/",
        permanent: true,
      },
      {
        source: "/services/jamstack-development",
        destination: "/",
        permanent: false,
      },
      {
        source: "/services/project-planning-consultancy",
        destination: "/",
        permanent: false,
      },
      {
        source: "/services/content-strategy",
        destination: "/",
        permanent: false,
      },
      {
        source: "/services/analytics-reporting",
        destination: "/",
        permanent: false,
      },
      {
        source: "/services/ui-ux-design",
        destination: "/",
        permanent: false,
      },
      {
        source: "/services/website-auditing",
        destination: "/",
        permanent: false,
      },
      {
        source: "/blog/pigeon-loans-case-study",
        destination: "/projects/pigeon-loans",
        permanent: true,
      },
      {
        source: "/people/:slug",
        destination: "/team/:slug",
        permanent: true,
      },
    ];
  },
  // i18n: {
  //   // These are all the locales you want to support in
  //   // your application
  //   locales: ["en-US"],
  //   // This is the default locale you want to be used when visiting
  //   // a non-locale prefixed path e.g. `/hello`
  //   defaultLocale: "en-US",
  // },
};

module.exports = withBundleAnalyzer(nextConfig);
