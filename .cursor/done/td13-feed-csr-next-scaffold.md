# td13: feed-csr-next 앱 scaffold 및 기본/불필요 파일 정리

## 작업 내역

- apps/feed-csr-next: Next.js(App Router, TypeScript, src 구조) scaffold
- page.tsx: 미니멀 홈 화면, 공통 Button 컴포넌트/스타일 연동, 'use client' 적용
- 불필요한 Next 기본 파일(page.module.css, globals.css, svg, favicon 등) 삭제
- vanilla-extract, transpilePackages 등 next.config.js 설정 점검 및 정리
- ToDo 체크 및 작업내역 기록

## 트러블슈팅/참고

- vanilla-extract 글로벌 스타일은 globalStyle로만 작성해야 함
- App Router 환경에서 이벤트 핸들러 사용 시 'use client' 필수
- require() linter 경고는 config 파일에서 예외 처리
