# td04: 공통 ESLint, Prettier, TypeScript(tsconfig.base.json) 설정

## 작업 내역

- 루트에 .eslintrc.json, .prettierrc, tsconfig.base.json 생성
- ESLint: typescript, prettier 플러그인 및 recommended preset 적용, ignorePatterns 지정
- Prettier: 기본 포맷 옵션 적용(세미콜론, 싱글쿼트, printWidth 등)
- TypeScript: Nx preset 기반, apps/packages 경로 alias, strict 옵션 등 공통 설정
- 관련 패키지(devDependencies) 설치

## 트러블슈팅/특이사항

- pnpm add 시 --workspace-root(-w) 옵션 필요

## 참고

- 다음 단계: README, 프로젝트 목적/구조 문서화
