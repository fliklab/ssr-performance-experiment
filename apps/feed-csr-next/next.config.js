const { createVanillaExtractPlugin } =
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 기타 Next.js 설정 필요시 여기에 추가
  transpilePackages: ['@ssr-performance/ui', '@ssr-performance/utils'],
};

module.exports = withVanillaExtract(nextConfig);
