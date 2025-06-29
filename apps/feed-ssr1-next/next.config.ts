import type { NextConfig } from 'next';
import path from 'path';
import dotenv from 'dotenv';
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

const withVanillaExtract = createVanillaExtractPlugin();
dotenv.config({ path: path.resolve(__dirname, '.env.local') });

const MOCK_API_DOMAIN = process.env.NEXT_PUBLIC_MOCK_API_DOMAIN;

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  transpilePackages: ['@ssr-performance/ui', '@ssr-performance/utils'],
  images: {
    domains: MOCK_API_DOMAIN ? [MOCK_API_DOMAIN] : [],
  },
};

export default withVanillaExtract(nextConfig);
