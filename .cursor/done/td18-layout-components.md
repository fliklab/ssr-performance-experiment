# TD18: 레이아웃 컴포넌트 구현 (Container, PageLayout)

## 작업 개요

- 최대 가로 길이 제한 및 중앙 정렬 기능을 가진 Container 컴포넌트 구현
- 전체 페이지 레이아웃을 위한 PageLayout 컴포넌트 구현
- 반응형 디자인 및 다양한 최대 너비 옵션 제공

## 주요 작업 내용

### 1. Layout 스타일 시스템 구축

- `packages/ui/src/styles/layout.css.ts` 생성
- Container 기본 스타일 및 최대 너비 variants 정의
- 반응형 패딩 시스템 구현 (모바일: 16px, 태블릿: 24px, 데스크톱: 32px)
- PageLayout을 위한 header, main, footer 스타일 정의

### 2. Container 컴포넌트 구현

- `packages/ui/src/layouts/Container.tsx` 생성
- 최대 너비 옵션: sm(640px), md(768px), lg(1024px), xl(1280px), 2xl(1536px), full
- 기본값: xl (1280px)
- 다형성 지원 (as prop으로 다른 HTML 요소 렌더링 가능)
- 자동 중앙 정렬 및 반응형 패딩

### 3. PageLayout 컴포넌트 구현

- `packages/ui/src/layouts/PageLayout.tsx` 생성
- header, main, footer 영역을 포함한 전체 페이지 레이아웃
- sticky header 지원
- flexbox 기반 footer 하단 고정
- Container 컴포넌트와 통합

### 4. 포괄적 테스트 작성

- `packages/ui/src/layouts/Container.test.tsx` 생성
- 7개 테스트 케이스로 모든 기능 검증
- maxWidth variants, as prop, className 적용 등 테스트

### 5. 시각적 데모 페이지

- `packages/ui/layout-demo.html` 생성
- 모든 Container 크기 옵션 시각적 비교
- 반응형 동작 실시간 확인 가능
- 현재 화면 크기 표시 기능

## 기술적 특징

### 반응형 디자인

- 모바일 우선 접근 방식
- 브레이크포인트: 640px, 1024px
- 단계별 패딩 증가

### 중앙 정렬 시스템

- `margin: 0 auto`로 수평 중앙 정렬
- 뷰포트가 최대 너비보다 클 때 자동 중앙 배치
- 작은 화면에서는 전체 너비 사용

### 컴포넌트 유연성

- 다형성 지원으로 의미론적 HTML 작성 가능
- className 조합으로 커스터마이징 가능
- TypeScript 타입 안전성 보장

## 테스트 결과

- Container 테스트: 7개 모두 통과
- 전체 UI 패키지 테스트: 32개 모두 통과

## 사용 예시

```tsx
// 기본 사용
<Container>콘텐츠</Container>

// 최대 너비 지정
<Container maxWidth="lg">큰 콘텐츠</Container>

// 다른 HTML 요소로 렌더링
<Container as="section" maxWidth="md">섹션 콘텐츠</Container>

// 전체 페이지 레이아웃
<PageLayout
  maxWidth="xl"
  header={<nav>네비게이션</nav>}
  footer={<div>푸터</div>}
>
  메인 콘텐츠
</PageLayout>
```

## 다음 단계

- 실제 앱에서 레이아웃 컴포넌트 적용
- 추가 레이아웃 패턴 구현 (Grid, Flex 등)
- 성능 최적화 및 접근성 개선
