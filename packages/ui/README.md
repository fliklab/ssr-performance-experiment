# @ssr-performance/ui

공통 UI 컴포넌트 패키지 (base/complex 구조, vanilla-extract 기반 스타일 시스템)

## 폴더 구조

```
src/
  base/        # Atomic/Presentational 컴포넌트
  complex/     # 복합/Container 컴포넌트
  styles/      # vanilla-extract 기반 디자인 토큰, 테마, 글로벌 스타일
    theme.css.ts
    reset.css.ts
    index.ts
```

## 스타일 시스템

- **vanilla-extract** 기반 디자인 토큰/테마/글로벌 스타일 적용
- `theme.css.ts`: 컬러, 폰트, 라운드 등 디자인 토큰 및 테마 시스템
- `reset.css.ts`: 글로벌 리셋/베이스 스타일
- `index.ts`: 스타일 시스템 통합 export

## 사용 예시

```ts
import { themeClass, themeVars, globalReset } from '@ui/styles';
```

## 예시

```tsx
import { Button } from '@ssr-performance/ui';

<Button>Click me</Button>;
```
