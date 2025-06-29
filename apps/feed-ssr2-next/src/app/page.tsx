import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6">SSR2 Feed App</h1>
        <p className="text-xl text-gray-600 mb-8">
          App Router의 Server Components를 활용한 SSR 방식
        </p>

        <div className="max-w-2xl mx-auto mb-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">SSR2 특징</h2>
            <ul className="text-left space-y-2 text-gray-700">
              <li>
                • <strong>App Router</strong>: Next.js 13+ App Router 사용
              </li>
              <li>
                • <strong>Server Components</strong>: 서버에서 직접 렌더링
              </li>
              <li>
                • <strong>No-Cache Fetch</strong>: 캐싱 없이 항상 최신 데이터
              </li>
              <li>
                • <strong>Built-in SEO</strong>: 메타데이터 API 활용
              </li>
              <li>
                • <strong>Streaming</strong>: 점진적 페이지 로딩 지원
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <Link
            href="/feed"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            피드 보기
          </Link>

          <div className="text-sm text-gray-500">
            <p>다른 구현 방식과 비교해보세요:</p>
            <div className="mt-2 space-x-4">
              <a
                href="http://localhost:3001"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                CSR 앱
              </a>
              <a
                href="http://localhost:3002"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                SSR1 앱 (Pages Router)
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
