/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/edebiyat-v4-final',
  images: {
    unoptimized: true,
  },
  // Hataları susturan ayarlar
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;