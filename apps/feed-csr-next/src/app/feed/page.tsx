'use client';

import { useEffect, useState } from 'react';
import { Button } from '@ui/base/Button';
import { Title } from '@ui/base/Title';
import { PageLayout } from '@ui/layouts/PageLayout';
import { Navigation } from '@ui/layouts/Navigation';
import { Footer } from '@ui/layouts/Footer';
import { Card } from '@ui/base/Card';
import { Typography } from '@ui/base/Typography';
import { themeClass } from '@ui/styles';

interface FeedItem {
  id: number;
  title: string;
  image: string;
  price: number;
}

const MOCK_API_DOMAIN =
  process.env.NEXT_PUBLIC_MOCK_API_DOMAIN || 'https://ssr-mock-api.vercel.app';

export default function FeedPage() {
  const [feed, setFeed] = useState<FeedItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const apiUrl = '/api/feed'; // 내부 프록시 API 사용
    console.log('Fetching from:', apiUrl);
    console.log('Environment variable:', MOCK_API_DOMAIN);
    fetch(apiUrl)
      .then(res => {
        console.log('Response status:', res.status);
        if (!res.ok) throw new Error(`API 오류: ${res.status}`);
        return res.json();
      })
      .then(data => {
        console.log('Received data:', data);
        setFeed(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(error => {
        console.error('Fetch error:', error);
        setError('피드 데이터를 불러오지 못했습니다.');
        setLoading(false);
      });
  }, []);

  return (
    <div className={themeClass}>
      <PageLayout
        header={<Navigation appName="Feed CSR" isClient={true} />}
        footer={
          <Footer
            appName="Feed CSR Next"
            appType="CSR 방식"
            renderingMethod="Client-side Rendering"
          />
        }
      >
        <Title
          title="피드 목록"
          description="CSR 방식으로 로드된 피드 데이터입니다."
          size="lg"
          align="center"
        />
        {loading ? (
          <div style={{ textAlign: 'center', padding: '64px 0' }}>
            <p style={{ fontSize: '18px', color: '#6b7280' }}>로딩 중...</p>
          </div>
        ) : error ? (
          <div style={{ textAlign: 'center', padding: '64px 0' }}>
            <p role="alert" style={{ color: '#ef4444', fontSize: '18px' }}>
              {error}
            </p>
            <Button
              variant="outline"
              onClick={() => window.location.reload()}
              style={{ marginTop: '16px' }}
            >
              다시 시도
            </Button>
          </div>
        ) : feed.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '64px 0' }}>
            <p style={{ fontSize: '18px', color: '#6b7280' }}>피드 데이터가 없습니다.</p>
          </div>
        ) : (
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
                  src={item.image}
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
        )}
      </PageLayout>
    </div>
  );
}
