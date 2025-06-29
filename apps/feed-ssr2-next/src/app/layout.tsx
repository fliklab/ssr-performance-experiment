import type { Metadata } from 'next';
import Link from 'next/link';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Feed SSR2 - App Router',
  description: 'App Router Server Components를 활용한 SSR2 방식의 피드 앱',
};

// 간단한 네비게이션 컴포넌트
const Navigation = () => (
  <nav className="bg-blue-600 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-xl font-bold">Feed SSR2 (App Router)</h1>
      <div className="space-x-4">
        <Link href="/" className="hover:text-blue-200">
          홈
        </Link>
        <Link href="/feed" className="hover:text-blue-200">
          피드
        </Link>
        <a href="http://localhost:3001" className="hover:text-blue-200" target="_blank">
          CSR 앱
        </a>
        <a href="http://localhost:3002" className="hover:text-blue-200" target="_blank">
          SSR1 앱
        </a>
      </div>
    </div>
  </nav>
);

// 간단한 푸터 컴포넌트
const Footer = () => (
  <footer className="bg-gray-800 text-white p-4 mt-8">
    <div className="container mx-auto text-center">
      <p>&copy; 2024 SSR Performance Experiment - SSR2 (App Router)</p>
      <p className="text-sm text-gray-400 mt-1">Server Components를 활용한 SSR 구현</p>
    </div>
  </footer>
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
