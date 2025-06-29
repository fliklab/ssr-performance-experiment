import Link from 'next/link';
import { Button } from '@ui/base/Button';
import { Title } from '@ui/base/Title';
import { PageLayout } from '@ui/layouts/PageLayout';
import { Navigation } from '@ui/layouts/Navigation';
import { Footer } from '@ui/layouts/Footer';
import { themeClass } from '@ui/styles';

const Home = () => {
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
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '60vh',
            textAlign: 'center',
            gap: '32px',
          }}
        >
          <Title
            title="Feed SSR1"
            description="Next.js Pages Router와 getServerSideProps를 활용한 SSR1 방식의 피드 앱입니다."
            size="xl"
            align="center"
          />

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link href="/feed">
              <Button variant="primary" size="lg">
                피드 보기
              </Button>
            </Link>
            <Button variant="outline" size="lg">
              소개
            </Button>
          </div>

          <div
            style={{
              maxWidth: '600px',
              color: '#6b7280',
              lineHeight: '1.6',
            }}
          >
            <p>
              이 앱은 SSR 성능 실험을 위해 제작되었습니다. Pages Router의 getServerSideProps를
              사용하여 서버 사이드 렌더링을 구현했습니다.
            </p>
          </div>
        </div>
      </PageLayout>
    </div>
  );
};

export default Home;
