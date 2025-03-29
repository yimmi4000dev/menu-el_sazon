/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: true,  // Si habilitaste Turbopack
  },
  images: {
    domains: ['localhost'], // Para imágenes locales (opcional)
  },
};

module.exports = nextConfig;












// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
