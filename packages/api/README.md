# @ssr-performance/api

Vercel serverless 기반 mock API 패키지

## 폴더 구조

```
src/         # 엔드포인트별 serverless function
mock-data/   # mock json 데이터
mock-images/ # mock 이미지(샘플)
```

## 예시 (feed 엔드포인트)

```ts
// src/feed.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
import feedData from '../mock-data/feed.json';

export default function handler(req: VercelRequest, res: VercelResponse) {
  res.status(200).json(feedData);
}
```
