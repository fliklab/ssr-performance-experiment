# td01: pnpm, Nx 기반 모노레포 초기화 완료

## 작업 내역

- 기존 파일 백업 및 정리
- monorepo 폴더 생성 후, 해당 폴더에 Nx 워크스페이스(preset: apps, pnpm) 초기화
- Nx 기본 구조 및 의존성 설치 확인

## 트러블슈팅

- Nx 워크스페이스는 빈 디렉토리에서만 생성 가능하여, 기존 파일을 백업 후 별도 폴더(monorepo)에서 초기화 진행
- empty preset 오류 발생 → apps preset으로 대체하여 정상 생성

## 참고

- 이후 모든 앱/패키지는 monorepo 하위에서 관리 예정
