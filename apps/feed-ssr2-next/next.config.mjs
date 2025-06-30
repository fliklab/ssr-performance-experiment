import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 외부 이미지 도메인 허용
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/api/img/**',
      },
      {
        protocol: 'https',
        hostname: '*.vercel.app',
        pathname: '/api/img/**',
      },
    ],
  },

  // Server External Packages 설정 (Next.js 15.3.4+)
  serverExternalPackages: [],

  // 번들 분석을 위한 설정
  webpack: (config, { isServer }) => {
    // 서버 사이드 빌드에서 console.log 추가 (디버깅용)
    if (isServer) {
      console.log('SSR2 - Server-side webpack build');
    }
    return config;
  },

  // 퍼포먼스 측정을 위한 설정
  poweredByHeader: false,
  generateEtags: false,
  compress: true,
};

export default withVanillaExtract(nextConfig);
