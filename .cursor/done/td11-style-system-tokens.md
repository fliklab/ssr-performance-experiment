# td11: vanilla-extract 스타일 시스템 및 디자인 토큰/가이드 구축

## 작업 내역

- packages/ui/src/styles/theme.css.ts: 디자인 토큰 및 테마 시스템 scaffold
- packages/ui/src/styles/reset.css.ts: 글로벌 리셋/베이스 스타일 정의
- packages/ui/src/styles/index.ts: 스타일 시스템 통합 export
- packages/ui/src/styles/tokens.md: 디자인 시스템 토큰/스타일 가이드 scaffold
- README.md에 구조/사용법/도입 내용 반영
- .cursor/instructions/tasks.md의 ToDo 체크

## 트러블슈팅/참고

- @vanilla-extract/css 패키지 설치 및 타입 문제 해결
- 스타일 시스템은 프로젝트 진행에 따라 확장/수정 가능
- 모든 스타일/토큰은 컴포넌트에서 import하여 일관성 있게 사용
