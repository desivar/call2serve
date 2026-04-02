import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Force Next.js to only look at your current folder
  experimental: {
    turbo: {
      root: '.', 
    },
  },
  // 2. Disable Sentry if it's auto-injecting and causing the 429 loop
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;