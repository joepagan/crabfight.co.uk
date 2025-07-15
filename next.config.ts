import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // GitHub Pages serves from a subdirectory, so we need to set the base path
  basePath: '/crabfight.co.uk',
  assetPrefix: '/crabfight.co.uk/',
};

export default nextConfig;
