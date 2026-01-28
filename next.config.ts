/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/edebiyat_efsaneleri', // <--- BURASI SENİN DEPO ADIN OLMALI (Çok Önemli!)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;