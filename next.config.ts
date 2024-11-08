import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  assetPrefix: process.env.GITHUB_ACTIONS ? '/cv/' : '',
  basePath: process.env.GITHUB_ACTIONS ? '/cv' : '',
  
  images: {
    unoptimized: true,
  },
  
  trailingSlash: true,
  output: 'export',
};

export default nextConfig;
