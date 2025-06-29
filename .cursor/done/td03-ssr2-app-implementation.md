# TD03 - SSR2 앱 생성 및 구현 완료

## 작업 개요

- **작업일**: 2024-06-30
- **스프린트**: Day 3
- **작업 유형**: 앱 구현

## 완료된 작업

### 1. feed-ssr2-next 앱 생성

- App Router 방식의 Next.js 15.3.4 앱 생성
- TypeScript, Tailwind CSS, ESLint 설정
- 공통 패키지 연동 (`@ssr-performance/ui`, `@ssr-performance/utils`)

### 2. SSR2 구조 구현

- **App Router + Server Components**: Next.js 13+ App Router 활용
- **서버 사이드 데이터 fetch**: Server Components에서 직접 데이터 가져오기
- **캐싱 비활성화**: `cache: 'no-store'`로 항상 최신 데이터 보장

### 3. 페이지 구현

- **홈 페이지** (`/`): SSR2 특징 소개 및 네비게이션
- **피드 페이지** (`/feed`): 서버에서 렌더링된 피드 목록
- **공통 레이아웃**: 네비게이션, 푸터 포함

### 4. API 구현

- **Feed API** (`/api/feed`): App Router의 Route Handlers 사용
- **캐시 방지 헤더**: no-cache, no-store, must-revalidate
- **타입 안전성**: TypeScript 인터페이스 정의

### 5. 설정 파일

- **next.config.js**: 이미지 도메인 허용, 성능 최적화 설정
- **레이아웃 구조**: 공통 네비게이션 및 푸터
- **메타데이터 API**: SEO 최적화

## 기술적 특징

### SSR2 vs SSR1 차이점

| 구분         | SSR1 (Pages Router)       | SSR2 (App Router) |
| ------------ | ------------------------- | ----------------- |
| 라우팅       | Pages Router              | App Router        |
| 데이터 Fetch | getServerSideProps        | Server Components |
| 레이아웃     | \_app.tsx, \_document.tsx | layout.tsx        |
| API          | pages/api/                | app/api/          |
| 메타데이터   | Head 컴포넌트             | Metadata API      |

### 성능 최적화 요소

1. **Server Components**: 서버에서 직접 렌더링
2. **Streaming**: 점진적 페이지 로딩 지원
3. **캐싱 비활성화**: 성능 테스트를 위한 실시간 데이터
4. **번들 최적화**: webpack 설정 및 압축

## 트러블슈팅

### 1. UI 패키지 Import 오류

- **문제**: `@ssr-performance/ui`에서 컴포넌트 import 실패
- **해결**: 임시로 인라인 컴포넌트 구현
- **근본 원인**: 패키지 빌드 설정 또는 TypeScript 설정 문제

### 2. 이미지 캐싱 문제

- **문제**: 이미지 API에서 `max-age=3600` 캐싱 설정
- **해결**: Cache-Control 헤더를 `no-cache, no-store, must-revalidate`로 변경
- **추가**: Pragma, Expires 헤더 추가

### 3. ESLint 규칙 준수

- **문제**: Next.js Link 컴포넌트 사용 권장
- **해결**: 내부 링크를 `<a>` 태그에서 `<Link>` 컴포넌트로 변경
- **부가**: `rel="noopener noreferrer"` 추가

## 다음 단계

- [ ] zustand, recoil, tanstack query 기본 세팅
- [ ] 테스트 코드 작성
- [ ] UI 패키지 import 문제 해결
- [ ] 퍼포먼스 측정 준비

## 포트 정보

- **개발 서버**: http://localhost:3003 (예정)
- **빌드 후**: production 환경에서 SSR 동작 확인

## 파일 구조

```
apps/feed-ssr2-next/
├── src/
│   ├── app/
│   │   ├── api/feed/route.ts      # Feed API
│   │   ├── feed/page.tsx          # 피드 페이지
│   │   ├── layout.tsx             # 공통 레이아웃
│   │   ├── page.tsx               # 홈 페이지
│   │   └── globals.css
│   └── ...
├── next.config.js                 # Next.js 설정
├── package.json                   # 의존성 관리
└── tsconfig.json                  # TypeScript 설정
```
