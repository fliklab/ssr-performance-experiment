import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@ssr-performance/ui', '@ssr-performance/utils'],
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.vercel.app',
        pathname: '/api/img/**',
      },
    ],
  },
};

export default withVanillaExtract(nextConfig);
