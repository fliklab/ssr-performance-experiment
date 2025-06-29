'use client';

import { Button } from '@ui/base/Button';
import { PageLayout } from '@ui/layouts/PageLayout';
import { themeClass } from '@ui/styles';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <div className={themeClass}>
      <PageLayout maxWidth="xl" header={<Navigation />} footer={<Footer />}>
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
            Feed CSR Next
          </h1>
          <p
            style={{
              fontSize: '18px',
              color: '#6b7280',
              marginBottom: '32px',
              maxWidth: '600px',
            }}
          >
            Client-side Rendering 방식으로 구현된 피드 애플리케이션입니다. 공통 UI 컴포넌트와
            레이아웃 시스템을 활용합니다.
          </p>
          <div style={{ display: 'flex', gap: '16px' }}>
            <Button onClick={() => alert('공통 Button 컴포넌트!')}>공통 Button 테스트</Button>
            <Button variant="outline" onClick={() => (window.location.href = '/feed')}>
              피드 보기
            </Button>
          </div>
        </div>
      </PageLayout>
    </div>
  );
}
