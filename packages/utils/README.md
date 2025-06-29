# @ssr-performance/utils

공통 유틸리티/비즈니스 로직 패키지

## 폴더 구조

```
src/
  format/      # 포맷터(formatPrice 등)
  fetch/       # fetcher, API 유틸리티
  validation/  # 검증 함수
  index.ts     # 엔트리
```

## 예시

```ts
import { formatPrice } from '@ssr-performance/utils';

formatPrice(12000); // ₩12,000
```
