/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["pt", "en", "es"],
    defaultLocale: "pt",
    localeDetection: false,
  },
};

module.exports = nextConfig;

