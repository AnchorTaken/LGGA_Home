/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  reactStrictMode: true,
  images: {
    domains: ["cdn.jsdelivr.net", "res.cloudinary.com"],
  },
};

module.exports = nextConfig;
//  && withBundleAnalyzer({})
