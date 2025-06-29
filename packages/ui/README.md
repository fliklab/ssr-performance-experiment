# @ssr-performance/ui

공통 UI 컴포넌트 패키지

## 폴더 구조

```
src/
  base/      # 단순/기본 컴포넌트(Button 등)
  complex/   # 복합/조합 컴포넌트(ProductCard 등)
  layouts/   # 레이아웃/섹션
  hooks/     # UI 관련 커스텀 훅
  styles/    # 공통 스타일, 테마
  utils/     # UI 전용 유틸리티
  index.ts   # 엔트리
```

## 예시

```tsx
import { Button } from '@ssr-performance/ui';

<Button>Click me</Button>;
```
