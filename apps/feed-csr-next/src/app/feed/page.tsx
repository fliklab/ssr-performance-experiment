'use client';

import { useEffect, useState } from 'react';
import { Button } from '@ui/base/Button';
import { themeClass } from '@ui/styles';

interface FeedItem {
  id: number;
  title: string;
  image: string;
  price: number;
}

const MOCK_API_DOMAIN = process.env.NEXT_PUBLIC_MOCK_API_DOMAIN;

export default function FeedPage() {
  const [feed, setFeed] = useState<FeedItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${MOCK_API_DOMAIN}/api/feed`)
      .then(res => {
        if (!res.ok) throw new Error('API 오류');
        return res.json();
      })
      .then(data => {
        setFeed(data);
        setLoading(false);
      })
      .catch(() => {
        setError('피드 데이터를 불러오지 못했습니다.');
        setLoading(false);
      });
  }, []);

  return (
    <div className={themeClass} style={{ minHeight: '100vh', padding: 32 }}>
      <h1>Feed List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p role="alert" style={{ color: 'red' }}>
          {error}
        </p>
      ) : feed.length === 0 ? (
        <p>피드 데이터가 없습니다.</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'center' }}>
          {feed.map(item => (
            <div
              key={item.id}
              style={{ border: '1px solid #eee', borderRadius: 8, padding: 16, minWidth: 200 }}
            >
              <img src={item.image} alt={item.title} style={{ width: '100%', borderRadius: 8 }} />
              <h2 style={{ fontSize: 18, margin: '12px 0 4px' }}>{item.title}</h2>
              <p style={{ margin: 0 }}>{item.price.toLocaleString()}원</p>
              <Button style={{ marginTop: 8 }}>상세보기</Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
