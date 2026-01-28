/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/edebiyat-v4-final', // Resimdeki doğru depo adın bu
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;