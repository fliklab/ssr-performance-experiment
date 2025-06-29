# td08: packages/api - mock API 패키지(Vercel serverless) scaffold

## 작업 내역

- packages/api/src, mock-data, mock-images 폴더 scaffold
- src/feed.ts: Vercel serverless function 스타일 샘플 엔드포인트 작성
- mock-data/feed.json: 샘플 피드 mock 데이터 작성
- 패키지용 package.json, tsconfig.json(resolveJsonModule), README.md 작성
- @vercel/node devDependencies 설치

## 트러블슈팅/특이사항

- json import를 위해 tsconfig에 resolveJsonModule 옵션 추가

## 참고

- 다음 단계: vanilla-extract 기반 공통 스타일 시스템 구축
