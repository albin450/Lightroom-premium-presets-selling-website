// next.config.ts

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // ഉദാഹരണത്തിന്, images config വേണെങ്കിൽ:
  images: {
    domains: ['example.com'],
  },
};

export default nextConfig;
