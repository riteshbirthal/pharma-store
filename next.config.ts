import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',                 
  trailingSlash: true,              
  images: {
    unoptimized: true            
  },
  assetPrefix: '/pharma-store/',  
  basePath: '/pharma-store'      
};

export default nextConfig;
