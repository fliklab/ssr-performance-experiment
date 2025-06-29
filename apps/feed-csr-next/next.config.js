/* eslint-disable @typescript-eslint/no-require-imports */
const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

const dotenv = require('dotenv');

const path = require('path');
dotenv.config({ path: path.resolve(__dirname, '.env.local') });

const MOCK_API_DOMAIN = process.env.NEXT_PUBLIC_MOCK_API_DOMAIN;

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 기타 Next.js 설정 필요시 여기에 추가
  transpilePackages: ['@ssr-performance/ui', '@ssr-performance/utils'],
  images: {
    domains: [MOCK_API_DOMAIN],
  },
};

module.exports = withVanillaExtract(nextConfig);
