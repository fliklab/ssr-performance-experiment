import { NextResponse } from 'next/server';

const EXTERNAL_API_URL = 'https://ssr-mock-api.vercel.app/api/feed';

export async function GET() {
  try {
    console.log('Proxying request to:', EXTERNAL_API_URL);

    // 외부 API 호출 (서버 사이드에서 실행되므로 CORS 문제 없음)
    const response = await fetch(EXTERNAL_API_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // 필요시 User-Agent 등 추가 헤더
        'User-Agent': 'Next.js API Proxy',
      },
      // 캐시 비활성화 (성능 테스트를 위해)
      cache: 'no-store',
    });

    if (!response.ok) {
      console.error('External API error:', response.status, response.statusText);
      return NextResponse.json(
        {
          error: `External API error: ${response.status}`,
          message: 'Failed to fetch data from external API',
        },
        { status: response.status },
      );
    }

    const data = await response.json();
    console.log('Successfully fetched data, items count:', data?.length || 0);

    // CORS 헤더와 함께 응답 반환
    const nextResponse = NextResponse.json(data);

    // CORS 헤더 설정
    nextResponse.headers.set('Access-Control-Allow-Origin', '*');
    nextResponse.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    nextResponse.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // 캐시 비활성화 (성능 테스트를 위해)
    nextResponse.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate');
    nextResponse.headers.set('Pragma', 'no-cache');
    nextResponse.headers.set('Expires', '0');

    return nextResponse;
  } catch (error) {
    console.error('Proxy API error:', error);

    return NextResponse.json(
      {
        error: 'Proxy server error',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 },
    );
  }
}

// OPTIONS 메서드 처리 (CORS preflight)
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}
