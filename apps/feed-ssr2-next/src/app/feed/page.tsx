// CSR 방식과 동일한 UI 컴포넌트 import
import { Card } from '@ui/base/Card';
import { Typography } from '@ui/base/Typography';
import { Button } from '@ui/base/Button';
import { Title } from '@ui/base/Title';
import { PageLayout } from '@ui/layouts/PageLayout';
import { Navigation } from '@ui/layouts/Navigation';
import { Footer } from '@ui/layouts/Footer';
import { themeClass } from '@ui/styles';

// 외부 API 아이템 타입 정의
interface ExternalFeedItem {
  id: number;
  title: string;
  image: string;
  price: number;
}

// App Router의 Server Component를 활용한 SSR2 방식
// 서버에서 외부 API를 직접 호출하여 렌더링
async function getFeedData(): Promise<{ items: ExternalFeedItem[] }> {
  try {
    console.log('SSR2: Fetching data from external API...');

    // 외부 API를 직접 호출 (SSR2의 핵심 특징)
    const response = await fetch('https://ssr-mock-api.vercel.app/api/feed', {
      cache: 'no-store', // 캐싱 비활성화로 항상 최신 데이터 fetch
      headers: {
        'User-Agent': 'Next.js SSR2 Server Component',
      },
    });

    if (!response.ok) {
      console.error('External API error:', response.status, response.statusText);
      throw new Error(`Failed to fetch feed data: ${response.status}`);
    }

    const externalData = await response.json();
    console.log('SSR2: Successfully fetched', externalData?.length || 0, 'items');

    // 외부 API 데이터를 그대로 반환 (FeedCard에서 직접 사용)
    return { items: externalData };
  } catch (error) {
    console.error('SSR2 Feed data fetch error:', error);
    return { items: [] };
  }
}

export default async function FeedPage() {
  const feedData = await getFeedData();

  return (
    <div className={themeClass}>
      <PageLayout
        header={<Navigation appName="Feed SSR2" />}
        footer={
          <Footer appName="Feed SSR2 Next" appType="SSR2 방식" renderingMethod="App Router SSR" />
        }
      >
        <Title
          title="피드 목록"
          description="SSR2 방식으로 로드된 피드 데이터입니다."
          size="lg"
          align="center"
        />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '24px',
            marginTop: '32px',
          }}
        >
          {feedData.items.map(item => (
            <Card key={item.id}>
              <img
                src={`https://ssr-mock-api.vercel.app/api/img/${item.id}`}
                alt={item.title}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  marginBottom: '12px',
                }}
              />
              <Typography variant="heading" style={{ marginBottom: '4px' }}>
                {item.title}
              </Typography>
              <Typography
                variant="body"
                weight="bold"
                style={{
                  color: '#0070f3',
                  marginBottom: '12px',
                }}
              >
                {item.price.toLocaleString()}원
              </Typography>
              <Button variant="primary" size="sm" style={{ width: '100%' }}>
                상세보기
              </Button>
            </Card>
          ))}
        </div>

        {feedData.items.length === 0 && (
          <div style={{ textAlign: 'center', padding: '64px 0' }}>
            <p style={{ fontSize: '18px', color: '#6b7280' }}>피드 데이터를 불러올 수 없습니다.</p>
          </div>
        )}
      </PageLayout>
    </div>
  );
}

// 페이지 메타데이터
export const metadata = {
  title: 'Feed SSR2 - App Router',
  description: 'App Router Server Components를 활용한 SSR2 방식의 피드 페이지',
};
