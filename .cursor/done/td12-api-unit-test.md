# td12: API 패키지(feed 엔드포인트) unit 테스트 코드 작성 및 통과

## 작업 내역

- packages/api/api/feed.test.ts: 핸들러 함수 직접 호출 방식의 Vitest 기반 유닛 테스트 작성
- mock req/res 객체로 status, json 응답 검증
- pnpm test로 테스트 정상 통과 확인
- .cursor/instructions/tasks.md의 ToDo 체크

## 트러블슈팅/참고

- serverless function 핸들러를 직접 호출하는 방식이 가장 빠르고, 네트워크 환경에 독립적임
- 실제 배포 API와 동일한 로직을 검증할 수 있음
