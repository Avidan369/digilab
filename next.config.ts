import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: [
    'digilalatam.com',
    'opticorp.com.bo',
  ],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.opticorp.com.bo',
        port: '',
        pathname: '/**', 
      },

 
    ],
  },
  experimental: {
    // Cambia '50mb' por el tamaño máximo que necesites permitir
    proxyClientMaxBodySize: 30 * 1024 * 1024, // ejemplo: 10MB
  },
};

export default nextConfig;
