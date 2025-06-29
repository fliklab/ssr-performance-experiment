import type { AppProps } from 'next/app';
import '@ui/styles/reset.css'; // 전역 reset 스타일 직접 import

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
