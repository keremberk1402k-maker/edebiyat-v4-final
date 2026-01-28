import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/edebiyat-v4-final",
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true, // Hataları görmezden gel
  },
  eslint: {
    ignoreDuringBuilds: true, // Kuralları görmezden gel
  },
};

export default nextConfig;