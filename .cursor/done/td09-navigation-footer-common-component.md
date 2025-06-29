# TD09 - Navigation과 Footer 공통 컴포넌트 분리

## 완료 일시

2024년 12월 30일

## 작업 내용

### 1. UI 패키지에 공통 Navigation 컴포넌트 생성

- `packages/ui/src/layouts/Navigation.tsx` 생성
- `packages/ui/src/styles/navigation.css.ts` 스타일 생성
- Props: `appName`, `isClient`, `className`
- Next.js Link, Button 컴포넌트 사용
- vanilla-extract 스타일링 적용

### 2. UI 패키지에 공통 Footer 컴포넌트 생성

- `packages/ui/src/layouts/Footer.tsx` 생성
- `packages/ui/src/styles/footer.css.ts` 스타일 생성
- Props: `appName`, `appType`, `renderingMethod`, `framework`, `className`
- 저작권 정보 및 기술 스택 표시

### 3. UI 패키지 index.ts 업데이트

- Navigation과 Footer export 추가
- 모든 앱에서 import 가능하도록 설정

### 4. 모든 앱에서 공통 컴포넌트 사용

#### CSR 앱 (feed-csr-next)

- 로컬 Navigation, Footer 컴포넌트 삭제
- `@ui/layouts/Navigation`, `@ui/layouts/Footer` import
- Props: `appName="Feed CSR"`, `appType="CSR 방식"`, `renderingMethod="Client-side Rendering"`

#### SSR2 앱 (feed-ssr2-next)

- 로컬 Navigation, Footer 컴포넌트 삭제
- 공통 컴포넌트 import 및 사용
- Props: `appName="Feed SSR2"`, `appType="SSR2 방식"`, `renderingMethod="App Router SSR"`

#### SSR1 앱 (feed-ssr1-next)

- 인라인 Navigation, Footer 컴포넌트 제거
- 공통 컴포넌트 import 및 사용
- Props: `appName="Feed SSR1"`, `appType="SSR1 방식"`, `renderingMethod="getServerSideProps"`, `framework="Next.js Pages Router"`

## 트러블슈팅

### 1. 'use client' directive 문제

- **문제**: Navigation 컴포넌트의 'use client'로 인해 SSR2에서 Server Component 오류 발생
- **해결**: Navigation에서 'use client' 제거하여 Server Component 호환 버전으로 변경
- **원인**: Button과 Link 컴포넌트가 Server Component에서도 사용 가능하므로 클라이언트 컴포넌트 필요 없음

### 2. Jest 테스트 설정 문제

- **문제**: UI 패키지에서 Jest가 JSX 구문을 파싱하지 못함
- **현재 상태**: 테스트 파일 생성했으나 실행되지 않음
- **후속 조치**: Jest 설정 개선 필요 (별도 이슈로 처리)

## 기술적 특징

### 1. 재사용 가능한 Props 설계

- 각 앱별로 다른 이름과 설명을 Props로 전달
- 유연한 스타일링을 위한 className props 지원

### 2. vanilla-extract 스타일링

- CSS-in-JS 대신 type-safe CSS 사용
- hover 효과 및 반응형 스타일 적용

### 3. Next.js 호환성

- Server Component와 Client Component 모두 지원
- Next.js Link 컴포넌트 사용으로 최적화된 네비게이션

## 최종 결과

- 모든 앱(CSR, SSR1, SSR2)이 동일한 Navigation과 Footer 컴포넌트 사용
- 각 앱의 고유한 정보만 Props로 차별화
- 코드 중복 제거 및 유지보수성 향상
- 디자인 시스템 일관성 확보
