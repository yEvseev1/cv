import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // assetPrefix: process.env.GITHUB_ACTIONS ? '/yvEvseevCV/' : '',
  // basePath: process.env.GITHUB_ACTIONS ? '/yvEvseevCV' : '',
  
  images: {
    unoptimized: true,
  },
  
  trailingSlash: true,
  output: 'export',
};

export default nextConfig;
