// 임시로 직접 구현된 컴포넌트를 사용합니다
interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className }: CardProps) => (
  <div className={`border rounded-lg shadow-md bg-white ${className || ''}`}>{children}</div>
);

interface TypographyProps {
  children: React.ReactNode;
  variant?: 'heading' | 'body' | 'caption';
  style?: React.CSSProperties;
}

const Typography = ({ children, variant = 'body', style }: TypographyProps) => {
  const className =
    variant === 'heading'
      ? 'text-lg font-semibold'
      : variant === 'caption'
        ? 'text-sm text-gray-600'
        : 'text-base';

  return (
    <span className={className} style={style}>
      {children}
    </span>
  );
};

// 피드 아이템 타입 정의
interface FeedItem {
  id: number;
  title: string;
  content: string;
  author: string;
  timestamp: string;
  tags: string[];
}

// App Router의 Server Component를 활용한 SSR2 방식
// 서버에서 직접 데이터를 fetch하여 렌더링
async function getFeedData(): Promise<{ items: FeedItem[] }> {
  try {
    // 환경에 따라 API URL 설정
    const baseUrl = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000';

    const response = await fetch(`${baseUrl}/api/feed`, {
      cache: 'no-store', // 캐싱 비활성화로 항상 최신 데이터 fetch
    });

    if (!response.ok) {
      throw new Error('Failed to fetch feed data');
    }

    return await response.json();
  } catch (error) {
    console.error('Feed data fetch error:', error);
    return { items: [] };
  }
}

export default async function FeedPage() {
  const feedData = await getFeedData();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Feed (SSR2 - App Router Server Components)</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {feedData.items.map(item => (
          <Card key={item.id} className="overflow-hidden">
            <img
              src={`/api/img/${item.id}`}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <Typography variant="heading" style={{ marginBottom: '8px' }}>
                {item.title}
              </Typography>
              <Typography variant="body" style={{ marginBottom: '12px' }}>
                {item.content}
              </Typography>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{item.author}</span>
                <span>{new Date(item.timestamp).toLocaleDateString()}</span>
              </div>
              {item.tags.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-1">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>

      {feedData.items.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">피드 데이터를 불러올 수 없습니다.</p>
        </div>
      )}
    </div>
  );
}

// 페이지 메타데이터
export const metadata = {
  title: 'Feed SSR2 - App Router',
  description: 'App Router Server Components를 활용한 SSR2 방식의 피드 페이지',
};
