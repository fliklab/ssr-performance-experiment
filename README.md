# SSR Performance Experiment Monorepo

## 프로젝트 소개

이 프로젝트는 다양한 렌더링 방식(CSR, SSR, Static 등)을 비교하기 위해 만들어졌습니다. 모노레포 구조로 동일한 결과물을 제공하는 피드/상품 앱을 관리하고 성능을 측정합니다.공통 UI, 유틸리티, mock API 패키지를 포함하며, 성능 측정 자동화 및 문서화까지를 목표로 합니다.

- **동일한 UI/UX, 데이터, 동작**: 모든 렌더링 방식에서 결과물 완전 일치
- **디자인**: brutalism 기반 + rounded, 미니멀, 모바일 우선
- **mock API**: Vercel Serverless Function 기반, mock data/이미지 포함

## 주요 기능/요구사항

- 피드 페이지: 가로 스크롤 배너 + 인기 상품 10개 카드
- 상품 상세 페이지: id별 2~3가지 케이스만 구현
- SSR/CSR/Static 등 다양한 렌더링 방식 비교
- 모든 데이터 fetch는 런타임(서버/클라이언트)에서 실시간 수행
- 퍼포먼스 측정 자동화(Lighthouse CI, Web Vitals, Github Actions)
- 테스트 코드(유닛/e2e) 및 문서화

## 폴더/패키지 구조

```
ssr-performance-experiment/
  apps/
    feed-csr-next/
    feed-ssr1-next/
    feed-ssr2-next/
    feed-static-csr-next/
    feed-static-ssr-next/
  packages/
    api/         # mock API (vercel serverless)
    ui/          # 공통 UI 컴포넌트
    utils/       # 공통 유틸리티/비즈니스 로직
    perf-tools/  # 퍼포먼스 측정 유틸리티
  .cursor/       # 작업/설계/테스트/트러블슈팅 문서
```

## 기술 스택

- React 18+, Next.js, TypeScript
- Nx, pnpm (모노레포/패키지 관리)
- vanilla-extract (스타일 시스템)
- tanstack query, zustand, recoil (데이터/상태관리)
- Jest, React Testing Library, Playwright (테스트)
- Lighthouse CI, Web Vitals (퍼포먼스 측정)
- Github Actions (CI/CD)

## 개발/빌드/테스트

```sh
# 의존성 설치
pnpm install

# Nx 명령어 예시
npx nx graph                # 프로젝트 의존성 시각화
npx nx build <project>      # 앱/패키지 빌드
npx nx serve <project>      # 앱 실행
npx nx test <project>       # 테스트 실행

# 각 앱/패키지별 README, .cursor/instructions/architecture.md 참고
```

## 문서/참고

- 요구사항: `.cursor/rules/requirements.mdc`
- 설계: `.cursor/instructions/architecture.md`
- 작업/트러블슈팅: `.cursor/done/`
- ToDo: `.cursor/instructions/tasks.md`
