# Vercel 배포 가이드 - 3개 앱 독립 배포

## 개요

SSR 성능 실험을 위해 3개 앱(CSR, SSR1, SSR2)을 각각 독립된 Vercel 프로젝트로 배포합니다.

## 배포 전 준비사항

### 1. Vercel CLI 설치 및 로그인

```bash
npm i -g vercel
vercel login
```

### 2. GitHub 리포지토리 연결

- GitHub에 프로젝트 push 완료
- Vercel 대시보드에서 Import 사용 권장

## 각 앱별 배포 방법

### 1. Feed CSR Next 배포

**프로젝트 생성:**

1. Vercel 대시보드 → "New Project"
2. GitHub 리포지토리 선택
3. 프로젝트 이름: `feed-csr-performance`
4. Root Directory: `apps/feed-csr-next`

**배포 설정:**

- Build Command: `cd ../.. && pnpm run build:csr`
- Output Directory: `.next`
- Install Command: `cd ../.. && pnpm install --frozen-lockfile`

**환경 변수:**

- `NEXT_PUBLIC_MOCK_API_DOMAIN`: `ssr-mock-api.vercel.app`

### 2. Feed SSR1 Next 배포

**프로젝트 생성:**

1. Vercel 대시보드 → "New Project"
2. 같은 GitHub 리포지토리 선택
3. 프로젝트 이름: `feed-ssr1-performance`
4. Root Directory: `apps/feed-ssr1-next`

**배포 설정:**

- Build Command: `cd ../.. && pnpm run build:ssr1`
- Output Directory: `.next`
- Install Command: `cd ../.. && pnpm install --frozen-lockfile`

### 3. Feed SSR2 Next 배포

**프로젝트 생성:**

1. Vercel 대시보드 → "New Project"
2. 같은 GitHub 리포지토리 선택
3. 프로젝트 이름: `feed-ssr2-performance`
4. Root Directory: `apps/feed-ssr2-next`

**배포 설정:**

- Build Command: `cd ../.. && pnpm run build:ssr2`
- Output Directory: `.next`
- Install Command: `cd ../.. && pnpm install --frozen-lockfile`

## CLI를 통한 배포 (선택사항)

각 앱 디렉토리에서 직접 배포할 수도 있습니다:

```bash
# CSR 앱 배포
cd apps/feed-csr-next
vercel --prod

# SSR1 앱 배포
cd ../feed-ssr1-next
vercel --prod

# SSR2 앱 배포
cd ../feed-ssr2-next
vercel --prod
```

## 배포 후 확인사항

### 1. 도메인 확인

- CSR: `https://feed-csr-performance.vercel.app`
- SSR1: `https://feed-ssr1-performance.vercel.app`
- SSR2: `https://feed-ssr2-performance.vercel.app`

### 2. 기능 테스트

각 앱에서 다음 기능들이 정상 작동하는지 확인:

- [x] 홈 페이지 로딩
- [x] 피드 페이지 로딩
- [x] 이미지 표시
- [x] API 호출 (CSR의 경우 프록시 API)
- [x] 공통 UI 컴포넌트 스타일링

### 3. 성능 측정 준비

- Lighthouse 점수 측정
- Core Web Vitals 확인
- 네트워크 탭에서 로딩 시간 비교

## 주의사항

### 모노레포 설정

- 모든 앱이 같은 리포지토리에서 배포되므로 Root Directory 설정이 중요
- 공통 패키지 빌드가 먼저 실행되도록 빌드 명령어 구성

### 환경변수

- CSR 앱만 `NEXT_PUBLIC_MOCK_API_DOMAIN` 필요
- SSR1, SSR2는 서버사이드에서 직접 외부 API 호출

### 자동 배포

- main 브랜치에 push 시 자동 배포 설정 권장
- 공통 패키지 변경 시 3개 앱 모두 재배포 필요

## 트러블슈팅

### 빌드 실패 시

1. `pnpm install` 명령어 확인
2. 공통 패키지 빌드 순서 확인
3. TypeScript 컴파일 오류 체크

### 런타임 오류 시

1. 환경변수 설정 확인
2. API 엔드포인트 접근성 확인
3. 이미지 도메인 허용 리스트 확인
