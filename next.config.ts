import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: false, // Optional: Enables React strict mode for better error handling
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
