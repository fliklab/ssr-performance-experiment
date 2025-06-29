import { GetServerSideProps } from 'next';
import { Card } from '@ui/base/Card';
import { Typography } from '@ui/base/Typography';
import { Button } from '@ui/base/Button';
import { Title } from '@ui/base/Title';
import { PageLayout } from '@ui/layouts/PageLayout';
import { Navigation } from '@ui/layouts/Navigation';
import { Footer } from '@ui/layouts/Footer';
import { themeClass } from '@ui/styles';

// Feed 아이템 타입 정의
export interface FeedItem {
  id: number;
  title: string;
  image: string;
  price: number;
}

interface FeedProps {
  feed: FeedItem[];
}

export const getServerSideProps: GetServerSideProps<FeedProps> = async () => {
  const res = await fetch(`https://ssr-mock-api.vercel.app/api/feed`);
  const feed = await res.json();
  return { props: { feed } };
};

const FeedPage = ({ feed }: FeedProps) => {
  return (
    <div className={themeClass}>
      <PageLayout
        header={<Navigation appName="Feed SSR1" />}
        footer={
          <Footer
            appName="Feed SSR1 Next"
            appType="SSR1 방식"
            renderingMethod="getServerSideProps"
            framework="Next.js Pages Router"
          />
        }
      >
        <Title
          title="피드 목록"
          description="SSR1 방식으로 로드된 피드 데이터입니다."
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
          {feed.map(item => (
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
              <Button
                variant="primary"
                size="sm"
                style={{ width: '100%' }}
                onClick={() => alert(`${item.title} 상세보기`)}
              >
                상세보기
              </Button>
            </Card>
          ))}
        </div>
      </PageLayout>
    </div>
  );
};

export default FeedPage;
