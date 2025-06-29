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

export default function FeedPage() {
  const [feed, setFeed] = useState<FeedItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://${MOCK_API_DOMAIN}/api/feed`)
      .then(res => res.json())
      .then(data => {
        setFeed(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className={themeClass} style={{ minHeight: '100vh', padding: 32 }}>
      <h1>Feed List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul style={{ display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'center' }}>
          {feed.map(item => (
            <li
              key={item.id}
              style={{ border: '1px solid #eee', borderRadius: 8, padding: 16, minWidth: 200 }}
            >
              <img src={item.image} alt={item.title} style={{ width: '100%', borderRadius: 8 }} />
              <h2 style={{ fontSize: 18, margin: '12px 0 4px' }}>{item.title}</h2>
              <p style={{ margin: 0 }}>{item.price.toLocaleString()}원</p>
              <Button style={{ marginTop: 8 }}>상세보기</Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
