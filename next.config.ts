import type { NextConfig } from 'next';

// The site is served from the root of the custom domain (adyaartistry.in),
// so NO basePath/assetPrefix — assets live at "/_next/...". If you ever drop
// the custom domain and serve from https://<user>.github.io/adya-artistry/,
// re-add basePath: '/adya-artistry' and assetPrefix: '/adya-artistry/'.
const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
