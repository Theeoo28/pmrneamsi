/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "scontent-cgk1-1.cdninstagram.com",
      "images.unsplash.com",
      "plus.unsplash.com",
      "www.google.com",
      "i.pinimg.com",
      "w0.peakpx.com",
      "i.postimg.cc",
    ],
  },
};
module.exports = nextConfig;
