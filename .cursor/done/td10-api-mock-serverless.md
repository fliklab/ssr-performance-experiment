# td10: mock API 패키지(Vercel serverless) 구조 scaffold 및 feed 엔드포인트 구현

## 작업 내역

- packages/api 내에 Vercel serverless function 구조 scaffold
- src/feed.ts: feed mock 엔드포인트 구현 (VercelRequest, VercelResponse 기반)
- mock-data/feed.json: 샘플 데이터 연동
- README에 구조/사용법/예시 명시
- mock-images 폴더 scaffold (샘플 이미지 파일은 추후 추가)
- ToDo 체크 및 작업내역 문서화

## 참고/트러블슈팅

- Vercel serverless function 구조는 src/에 엔드포인트별 함수 파일로 관리
- mock-data, mock-images 등 정적 리소스는 레포에 포함
- Next.js, Vercel 등에서 바로 import하여 활용 가능
