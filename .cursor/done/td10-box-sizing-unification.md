# TD10 - box-sizing border-box 전역 적용

## 완료 일시

2024년 12월 30일

## 문제 상황

- CSR과 SSR 앱 간에 `boxSizing` 설정 차이로 인한 레이아웃 불일치 발생
- 일부 앱에서 `border-box`가 제대로 적용되지 않아 요소 크기 계산 방식이 달라짐

## 원인 분석

- `packages/ui/src/styles/reset.css.ts`에 `boxSizing: 'border-box'` 설정이 있었음
- 하지만 각 앱에서 `themeClass`만 import하여 `reset.css`가 실제 번들에 포함되지 않음
- vanilla-extract에서는 CSS 파일이 명시적으로 import되어야 적용됨

## 해결 방법

### 1. theme.css.ts에서 reset.css import 추가

```typescript
import { createThemeContract, createTheme } from '@vanilla-extract/css';
import './reset.css'; // 전역 reset 스타일 적용
```

### 2. 자동 적용 메커니즘 구현

- 모든 앱에서 `themeClass` 사용 시 자동으로 `reset.css` 적용
- 별도의 import 없이도 글로벌 reset 스타일 활성화

## 기술적 세부사항

### reset.css.ts의 box-sizing 설정

```typescript
globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
});
```

### 적용 범위

- **모든 요소**: `*` 셀렉터로 전체 DOM 요소 포함
- **가상 요소**: `::before`, `::after` 포함
- **일관된 크기 계산**: padding과 border가 width/height에 포함

## 검증 결과

- 코드베이스 전체 검색 결과, inline style로 boxSizing을 덮어쓰는 곳 없음
- 모든 앱(CSR, SSR1, SSR2)에서 동일한 box-sizing 적용 확인
- UI 패키지 빌드 성공 및 변경사항 반영 완료

## 효과

- **레이아웃 일관성**: CSR과 SSR 간 요소 크기 계산 방식 통일
- **예측 가능한 스타일링**: padding/border 포함한 크기 계산으로 더 직관적인 레이아웃
- **크로스 브라우저 호환성**: 브라우저 기본값 차이 해결
- **유지보수성 향상**: 전역 설정으로 개별 컴포넌트마다 설정할 필요 없음

## 후속 작업

- 필요시 각 앱의 개발 서버 재시작으로 변경사항 완전 적용
- 성능 비교 테스트에서 레이아웃 차이 재확인
