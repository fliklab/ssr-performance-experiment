import { Button } from '@ui/base/Button';
import { Title } from '@ui/base/Title';
import { PageLayout } from '@ui/layouts/PageLayout';
import { Navigation } from '@ui/layouts/Navigation';
import { Footer } from '@ui/layouts/Footer';
import { themeClass } from '@ui/styles';

export default function Home() {
  return (
    <div className={themeClass}>
      <PageLayout
        header={<Navigation appName="Feed SSR2" />}
        footer={
          <Footer appName="Feed SSR2 Next" appType="SSR2 방식" renderingMethod="App Router SSR" />
        }
      >
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
