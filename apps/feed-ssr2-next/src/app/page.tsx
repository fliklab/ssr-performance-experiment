import { Button } from '@ui/base/Button';
import { PageLayout } from '@ui/layouts/PageLayout';
import { themeClass } from '@ui/styles';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <div className={themeClass}>
      <PageLayout header={<Navigation />} footer={<Footer />}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '60vh',
            textAlign: 'center',
          }}
        >
          <h1
            style={{
              fontSize: '48px',
              fontWeight: '700',
              color: '#1f2937',
              marginBottom: '16px',
            }}
          >
            Feed SSR2 Next
          </h1>
          <p
            style={{
              fontSize: '18px',
              color: '#6b7280',
              marginBottom: '32px',
              maxWidth: '600px',
            }}
          >
            Server-side Rendering 방식으로 구현된 피드 애플리케이션입니다. App Router의 Server
            Components를 활용하여 최적화된 성능을 제공합니다.
          </p>
          <div style={{ display: 'flex', gap: '16px' }}>
            <Button>공통 Button 컴포넌트!</Button>
            <Button variant="outline">
              <a href="/feed" style={{ textDecoration: 'none', color: 'inherit' }}>
                피드 보기
              </a>
            </Button>
          </div>
        </div>
      </PageLayout>
    </div>
  );
}
