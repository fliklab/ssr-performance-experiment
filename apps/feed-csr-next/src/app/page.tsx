'use client';

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
            title="Feed CSR Next"
            description="Client-side Rendering 방식으로 구현된 피드 애플리케이션입니다. 공통 UI 컴포넌트와 레이아웃 시스템을 활용합니다."
            size="xl"
            align="center"
          />
          <div style={{ display: 'flex', gap: '16px' }}>
            <Button onClick={() => alert('공통 Button 컴포넌트!')}>공통 Button 테스트</Button>
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
