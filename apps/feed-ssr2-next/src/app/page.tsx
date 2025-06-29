import { Button } from '@ui/base/Button';
import { Title } from '@ui/base/Title';
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
          }}
        >
          <Title
            title="Feed SSR2 Next"
            description="Server-side Rendering 방식으로 구현된 피드 애플리케이션입니다. App Router의 Server Components를 활용하여 최적화된 성능을 제공합니다."
            size="xl"
            align="center"
          />
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
