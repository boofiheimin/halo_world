/** @type {import('next').NextConfig} */
module.exports = {  
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
  images: {
      domains: ['drive.google.com']
  },
  i18n: {
    locales: ['en', 'ja', 'zh-TW', 'zh-CN', 'ko', 'fil'],
    defaultLocale: 'en'
  },
  reactStrictMode: true,
}
