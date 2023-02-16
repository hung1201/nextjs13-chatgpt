/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "https://upload.wikimedia.org",
      "https://lh3.googleusercontent.com",
    ],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
