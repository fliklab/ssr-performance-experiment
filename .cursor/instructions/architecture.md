## 코드 설계 원칙

- 컴포넌트는 반드시 Atomic Design을 따를 필요는 없으나, 관심사에 따라 명확히 분리하고, 재사용 가능한 요소와 그들의 조합으로 구성되도록 설계합니다.
- 반복된 코드가 발생하지 않도록 하며, 재사용성을 높입니다.
- 코드의 가독성을 준수하고, 일관된 디렉토리 구조와 파일명을 유지합니다.
- type, utils, style 등은 관심사별로 분리하여 코드 품질을 유지합니다.
- **스타일은 반드시 중앙에 공통 스타일 시스템을 두고, 디자인 시스템 방식으로 재사용합니다.**
- 성능 최적화, 다국어 지원, 크로스브라우징, 모바일 최적화를 고려합니다.

## 1. 사용 기술/라이브러리

- **React** (v18 이상)
- **Typescript**
- **Next.js** (Part1, 각 SSR/CSR/Static 앱)
- **Vite** (Part2, React+TS only 앱)
- **pnpm** (모노레포 패키지 매니저)
- **Nx** (모노레포 관리 및 배포 자동화)
- **vanilla-extract** (CSS-in-TypeScript, 스타일 시스템)
- **tanstack query** (데이터 fetch 및 캐싱)
- **zustand, recoil** (상태관리)
- **Lighthouse CI, Web Vitals** (퍼포먼스 측정)
- **Vitest, React Testing Library** (유닛/통합 테스트)
- **Playwright, Cypress** (E2E 테스트)
- **Github Actions** (CI/CD, 퍼포먼스 리포트 자동화)

## 2. 폴더/패키지 구조

```
ssr-performance-test/
  apps/
    feed-csr-next/         # CSR 방식 Next.js 앱
    feed-ssr1-next/        # SSR1 방식 Next.js 앱
    feed-ssr2-next/        # SSR2 방식 Next.js 앱
    feed-static-csr-next/  # Static+CSR 방식 Next.js 앱
    feed-static-ssr-next/  # Static+SSR 방식 Next.js 앱
  packages/
    api/         # mock API (Vercel serverless function)
    ui/          # 공통 UI 컴포넌트(관심사별 분리)
    utils/       # 공통 유틸리티/비즈니스 로직
    perf-tools/  # 퍼포먼스 측정 유틸리티
  reports/       # 퍼포먼스 측정 결과(markdown)
  done/          # 작업/트러블슈팅 기록
  instructions/  # 설계/작업/테스트 문서
  nx.json        # Nx 설정 파일
  pnpm-workspace.yaml # pnpm 워크스페이스 설정
```

- **Nx**를 활용해 앱/패키지의 의존성 관리, 빌드, 배포, 테스트 자동화
- **pnpm**으로 패키지 설치 및 모노레포 워크스페이스 관리
- 각 앱/패키지는 독립적으로 빌드/배포/테스트 가능
- 추후 React+TS only 앱(`feed-csr-react/` 등) 추가 가능

## 3. 아키텍처 설계

### 3.1. 컴포넌트 구조

- 관심사 분리 및 재사용성 중심 설계
- UI 컴포넌트: `packages/ui`에 집중, 스타일은 **vanilla-extract**로 관리
- 비즈니스/유틸리티 로직: `packages/utils`로 분리
- 타입, 스타일, 훅 등도 관심사별로 분리

### 3.2. 상태관리

- **zustand**: 단순하고 가벼운 글로벌/로컬 상태관리(주로 비동기/동기 데이터, UI 상태 등)
- **recoil**: 복잡한 상태 의존성, 파생 상태가 필요한 경우 사용
- Context API, props 등 React 기본 기능도 상황에 따라 병행
- 글로벌 상태는 최소화, 컴포넌트 단위/props 위주 데이터 전달

### 3.3. 데이터 fetch/query 설계

- **tanstack query**(react-query): 서버 데이터 fetch, 캐싱, 동기화, 로딩/에러 관리 등 담당
- 모든 데이터 fetch는 런타임(서버/클라이언트)에서 실시간으로 수행
- API 타입/스키마는 typescript type/interface로 명확히 정의
- mock API(`packages/api`)를 통해 개발/테스트 환경에서도 동일한 데이터 흐름 보장

### 3.4. 모노레포 관리 및 배포

- **Nx**로 앱/패키지 의존성, 빌드, 배포, 테스트 자동화
- **pnpm**으로 패키지 설치 및 workspace 관리
- 각 앱/패키지는 독립적으로 실행/배포 가능하며, 공통 패키지는 의존성으로 연결

### 3.5. 성능/테스트/문서화

- **퍼포먼스 측정**: Lighthouse CI, Web Vitals 등으로 자동화, 결과는 markdown+웹 리포트 제공
- **테스트**: 유닛/통합/엔드투엔드 테스트는 **Vitest**(unit/integration), **Playwright/Cypress**(e2e)로 apps/packages별로 분리 관리
- **문서화**: 모든 설계/작업/테스트/트러블슈팅 문서는 instructions, done, reports 등으로 관리

### 3.6. 기타

- 코드 일관성, 관심사 분리, 유지보수성, 성능 최적화 최우선
- 다국어, 크로스브라우징, 모바일 대응 고려
- 각 앱의 README에 데이터 흐름/렌더링 절차/구현 방식 명확히 기술
