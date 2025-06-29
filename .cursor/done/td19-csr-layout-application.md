# TD19: CSR 앱에 페이지 레이아웃 적용

## 작업 개요

CSR(Client-side Rendering) Next.js 앱에 공통 UI 패키지의 PageLayout 컴포넌트를 적용하여 일관된 레이아웃 시스템을 구축했습니다.

## 구현 내용

### 1. 공통 컴포넌트 생성

#### Navigation 컴포넌트 (`apps/feed-csr-next/src/components/Navigation.tsx`)

- CSR 앱 전용 네비게이션 바
- 로고, 메뉴 링크, 로그인 버튼 포함
- Next.js Link와 UI 패키지 Button 활용
- 반응형 레이아웃

#### Footer 컴포넌트 (`apps/feed-csr-next/src/components/Footer.tsx`)

- 앱 정보와 기술 스택 표시
- CSR 방식, Next.js App Router 명시
- 중앙 정렬 레이아웃

### 2. 메인 페이지 레이아웃 적용 (`apps/feed-csr-next/src/app/page.tsx`)

- PageLayout 컴포넌트로 전체 구조 감싸기
- maxWidth="xl" 설정으로 최대 너비 제한
- header와 footer props로 공통 컴포넌트 연결
- 히어로 섹션 스타일링 개선
- 버튼 조합으로 CTA 영역 구성

### 3. 피드 페이지 레이아웃 적용 (`apps/feed-csr-next/src/app/feed/page.tsx`)

- PageLayout으로 일관된 레이아웃 구조
- Card와 Typography 컴포넌트 조합으로 피드 아이템 구성
- Grid 레이아웃으로 반응형 카드 배치
- 로딩, 에러, 빈 상태에 대한 개선된 UI
- 이미지 최적화를 위한 스타일링

### 4. 파일 구조 정리

- favicon.ico를 public 디렉토리로 이동
- 컴포넌트 디렉토리 구조 정리

## 기술적 특징

### 레이아웃 시스템

- **일관성**: 모든 페이지에서 동일한 헤더/푸터 구조
- **반응형**: 뷰포트 크기에 따른 자동 조정
- **중앙 정렬**: 최대 너비 제한으로 큰 화면에서 중앙 배치
- **재사용성**: 공통 컴포넌트로 유지보수성 향상

### 컴포넌트 조합

- UI 패키지의 기본 컴포넌트들을 조합하여 복합 UI 구성
- Card + Typography + Button 조합으로 피드 아이템 구현
- Atomic Design 원칙에 따른 컴포넌트 계층 구조

### 사용자 경험

- 로딩 상태, 에러 상태, 빈 상태에 대한 명확한 피드백
- 인터랙티브 요소들의 일관된 스타일링
- 접근성을 고려한 시맨틱 마크업

## 결과

- CSR 앱에 완전한 레이아웃 시스템 적용 완료
- 개발 모드에서 정상 동작 확인
- 공통 UI 패키지와의 완전한 통합
- 일관된 디자인 시스템 구축

## 개선 사항

- Next.js Image 컴포넌트 사용 권장사항 (현재는 기본 img 태그 사용)
- 빌드 시 발생하는 \_document 관련 에러는 Next.js 설정 이슈로 별도 해결 필요

## 다음 단계

- SSR 앱들에도 동일한 레이아웃 시스템 적용
- 성능 측정을 위한 도구 준비
- 이미지 최적화 적용
