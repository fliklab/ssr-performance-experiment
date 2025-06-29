# td09: Vitest 기반 UI/UTILS 패키지 unit 테스트 코드 작성 및 통과

## 작업 내역

- Jest 환경에서 ESM/TypeScript/JSX 호환 문제로 테스트 실패 → Vitest로 전환 결정
- `vitest`, `@testing-library/react`, `@testing-library/jest-dom`, `jsdom` 등 테스트 의존성 설치
- UI(Button), UTILS(formatPrice) 패키지에 대해 Vitest 기반 테스트 코드 작성
- 각 패키지별 테스트: children 렌더링, props 전달, 이벤트, 다양한 포맷 케이스 등 검증
- Vitest 환경에서 테스트 코드 정상 통과 확인
- `.cursor/instructions/tasks.md`의 관련 ToDo 체크 및 완료 처리

## 트러블슈팅/참고

- Jest → Vitest 전환 시, tsconfig의 Nx preset extends 경로 문제로 직접 옵션 명시 방식으로 변경
- ESM/TypeScript/JSX 환경에서의 테스트 호환성 확보
- 불필요한 Jest/babel 관련 파일 정리
