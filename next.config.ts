import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/amc-annual-cmc-comprehensive-maintenance-contract-services-pune.html',
        destination: '/amc',
        permanent: true,
      },
      {
        source: '/amc-services',
        destination: '/amc',
        permanent: true,
      },
      {
        source: '/blog.html',
        destination: '/blog',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
