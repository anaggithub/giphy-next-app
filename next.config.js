/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "giphy.com",
      "media0.giphy.com",
      "media1.giphy.com",
      "media2.giphy.com",
      "media3.giphy.com",
      "media4.giphy.com",
    ],
  },
 };
  
 module.exports = nextConfig;

// images added so Next Images can support gifs from giphy