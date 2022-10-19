const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const withPWA = require("next-pwa");

module.exports = withBundleAnalyzer(
  withPWA({
    webpack: true,
    webpack: (config) => {
      config.resolve.fallback = { fs: false };
      return config;
    },
    reactStrictMode: true,
    images: {
      domains: [
        "imgur.com",
        "cdn.buymeacoffee.com",
        "res.cloudinary.com",
        "cutt.ly",
        "activity-graph.herokuapp.com",
        "i.scdn.co",
        "images.unsplash.com",
      ],
    },

    // Pwa Setting
    pwa: {
      dest: "public",
      register: true,
      skipWaiting: true,
      disable: process.env.NODE_ENV === "development",
      publicExcludes: ["!resume.pdf"],
    },
  })
);
