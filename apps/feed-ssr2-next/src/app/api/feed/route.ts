import { NextResponse } from 'next/server';

// 모킹된 피드 데이터
const generateFeedData = () => {
  const items = [];
  const authors = ['김개발', '이디자인', '박마케팅', '정기획', '최운영'];
  const tags = [
    ['React', 'TypeScript'],
    ['Next.js', 'SSR'],
    ['디자인', 'UI/UX'],
    ['마케팅', 'SEO'],
    ['성능', '최적화'],
  ];

  for (let i = 1; i <= 12; i++) {
    const randomAuthor = authors[Math.floor(Math.random() * authors.length)];
    const randomTags = tags[Math.floor(Math.random() * tags.length)];

    items.push({
      id: i,
      title: `SSR2 피드 아이템 #${i}`,
      content: `App Router Server Components를 활용한 피드 콘텐츠입니다. 이 아이템은 서버에서 직접 렌더링되어 SEO에 최적화되어 있습니다. 아이템 번호: ${i}`,
      author: randomAuthor,
      timestamp: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString(),
      tags: randomTags,
    });
  }

  return items;
};

export async function GET() {
  try {
    // 약간의 지연을 추가하여 실제 API 호출 시뮬레이션
    await new Promise(resolve => setTimeout(resolve, 100));

    const feedItems = generateFeedData();

    // 캐시 방지 헤더 설정
    const response = NextResponse.json({
      items: feedItems,
      timestamp: new Date().toISOString(),
      method: 'SSR2-App-Router',
    });

    response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate');
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');

    return response;
  } catch (error) {
    console.error('Feed API Error:', error);
    return NextResponse.json(
      { error: '피드 데이터를 가져오는 중 오류가 발생했습니다.' },
      { status: 500 },
    );
  }
}
