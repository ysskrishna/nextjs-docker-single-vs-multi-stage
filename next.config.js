/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // Enable static optimization for production
  reactStrictMode: true,
  // Disable server-side image optimization
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig 