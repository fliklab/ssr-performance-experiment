import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { Card } from '@ui/base/Card';
import { Typography } from '@ui/base/Typography';
import { Button } from '@ui/base/Button';
import { PageLayout } from '@ui/layouts/PageLayout';
import { themeClass } from '@ui/styles';

// Navigation과 Footer 컴포넌트 생성 (CSR, SSR2와 동일한 구조)
const Navigation = () => {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px 0',
      }}
    >
      <Link
        href="/"
        style={{
          fontSize: '20px',
          fontWeight: '700',
          color: '#1f2937',
          textDecoration: 'none',
        }}
      >
        Feed SSR1
      </Link>

      <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
        <Link
          href="/"
          style={{
            color: '#6b7280',
            textDecoration: 'none',
            fontWeight: '500',
          }}
        >
          홈
        </Link>
        <Link
          href="/"
          style={{
            color: '#6b7280',
            textDecoration: 'none',
            fontWeight: '500',
          }}
        >
          피드
        </Link>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <div
      style={{
        textAlign: 'center',
        color: '#6b7280',
        fontSize: '14px',
        padding: '16px 0',
      }}
    >
      <p style={{ margin: 0 }}>© 2024 Feed SSR1 Next. SSR 성능 실험 프로젝트입니다.</p>
      <div
        style={{
          marginTop: '8px',
          display: 'flex',
          justifyContent: 'center',
          gap: '16px',
        }}
      >
        <span>SSR1 방식</span>
        <span>•</span>
        <span>Next.js Pages Router</span>
        <span>•</span>
        <span>getServerSideProps</span>
      </div>
    </div>
  );
};

// Feed 아이템 타입 정의
export interface FeedItem {
  id: number;
  title: string;
  image: string;
  price: number;
}

interface HomeProps {
  feed: FeedItem[];
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const res = await fetch(`https://ssr-mock-api.vercel.app/api/feed`);
  const feed = await res.json();
  return { props: { feed } };
};

const Home = ({ feed }: HomeProps) => {
  return (
    <div className={themeClass}>
      <PageLayout header={<Navigation />} footer={<Footer />}>
        <div style={{ padding: '32px 0' }}>
          <h1
            style={{
              fontSize: '32px',
              fontWeight: '700',
              color: '#1f2937',
              marginBottom: '8px',
              textAlign: 'center',
            }}
          >
            피드 목록
          </h1>
          <p
            style={{
              color: '#6b7280',
              textAlign: 'center',
              marginBottom: '32px',
            }}
          >
            SSR1 방식으로 로드된 피드 데이터입니다.
          </p>

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
        </div>
      </PageLayout>
    </div>
  );
};

export default Home;
