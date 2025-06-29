## 개발 일정 및 ToDo 리스트 (모노레포, SSR/CSR/Static Feed, 공통 패키지)

### Day 1: 모노레포 및 프로젝트 초기화

- [x] pnpm, Nx 기반 모노레포 초기화
- [x] nx.json, pnpm-workspace.yaml, 기본 설정 파일 작성
- [x] apps, packages 디렉토리 구조 생성
- [x] 공통 ESLint, Prettier, TypeScript 설정
- [x] README, 프로젝트 목적/구조 문서화

### Day 2: 공통 패키지/스타일/디자인 시스템

- [x] packages/ui: 공통 UI 컴포넌트 패키지 생성 (디자인 시스템 구조)
- [x] packages/utils: 공통 유틸리티 패키지 생성
- [x] packages/api: mock API 패키지(Vercel serverless) 생성
- [x] UI 패키지에 대한 unit 테스트 코드 작성 및 통과
- [x] UTILS 패키지에 대한 unit 테스트 코드 작성 및 통과
- [x] API 패키지에 대한 unit 테스트 코드 작성 및 통과
- [x] vanilla-extract 기반 공통 스타일 시스템 구축
- [x] 디자인 시스템 토큰/스타일 가이드 작성

### Day 3: Feed 앱(CSR/SSR1/SSR2) 기본 구현

- [x] feed-csr-next 앱 생성 및 기본 라우팅/페이지 구조 (외부 이미지 도메인 허용 포함)
- [x] CSR에서 구현할 기능에 대한 테스트 코드 작성
- [x] feed-ssr1-next 앱 생성 및 SSR1 방식 데이터 fetch 구조 구현
- [x] SSR기능에 대해 구현할 기능에 대해서 테스트 코드 작성 병행
- [ ] feed-ssr2-next 앱 생성 및 SSR2 방식 데이터 fetch/SSR 구조 구현
- [x] 공통 컴포넌트/스타일/유틸리티 연동
- [ ] zustand, recoil, tanstack query 기본 세팅 및 샘플 적용

### Day 4: Static 방식, 퍼포먼스 자동화, 테스트

- [ ] feed-static-csr-next, feed-static-ssr-next 앱 생성 및 구조 구현
- [ ] 테스트 코드 작성
- [ ] mock API 연동 및 실시간 데이터 fetch 흐름 구현
- [ ] Lighthouse CI, Web Vitals 기반 퍼포먼스 측정 자동화(Github Actions)
- [ ] Vitest, React Testing Library, Playwright 등 테스트 코드 scaffold
- [ ] 각 앱/패키지별 문서화(README, 데이터 흐름, 구조 등)

### Day 5: 통합/최적화/문서화

- [ ] 공통 디자인 시스템/스타일/컴포넌트 통합 점검 및 리팩토링
- [ ] 퍼포먼스 측정 결과 웹 리포트 페이지 scaffold
- [ ] 전체 구조/구현/테스트/배포 문서화
- [ ] CI/CD, 배포 자동화 점검 및 마무리
- [ ] 주요 트러블슈팅/이슈 기록 및 회고
