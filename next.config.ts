import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Changed from 'standalone' for GitHub Pages
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // Helps with GitHub Pages routing
};

export default nextConfig;
