# feed-ssr1-next SSR1 앱 scaffold 및 SSR1 데이터 패칭 구조 구현

## 주요 작업 내역

- feed-ssr1-next Next.js 앱 scaffold (Turbopack 미사용)
- 공통 UI, utils 패키지 의존성 추가 및 설치
- next.config.ts에 이미지 도메인, transpilePackages, dotenv 적용
- MOCK_API_DOMAIN 환경변수 처리(추가 필요시 .env.local 직접 생성)
- SSR1(getServerSideProps) 방식의 feed 데이터 패칭 및 렌더링 구현
- 타입 분리 및 관심사 분리 구조 적용
- 테스트 코드 scaffold 및 @testing-library/react, jest-dom 등 의존성 설치

## 트러블슈팅/이슈

- vitest 테스트 환경에서 글로벌 describe/expect/jest-dom 인식 문제 발생
  - 루트 vitest 설정을 ESM import로 공유 시 호환성 이슈
  - feed-ssr1-next 전용 vitest.config.ts 생성 및 환경 분리 필요
  - 추후 각 앱별 테스트 환경 독립성 확보 필요

## 다음 액션

- UI/디자인 시스템 개선(공통 컴포넌트 설계 및 구현)
- feed-csr-next에 우선 적용, 이후 SSR/Static 등에도 동일하게 적용
