import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // In Next.js 16+, 'turbo' is a top-level key, not inside 'experimental'
  turbo: {
    root: '.', 
  },
  // To ignore ESLint during dev, we use this:
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;