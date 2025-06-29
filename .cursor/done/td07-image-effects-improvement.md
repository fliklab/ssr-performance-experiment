# 이미지 API 효과 처리 기능 개선

## 작업 내용

### 문제점

- 기존 코드에서 JPEG 파일을 직접 픽셀 조작하려고 시도
- 압축된 JPEG 형식을 Raw RGB 픽셀로 처리하여 이미지가 반환되지 않음
- 이미지 처리 로직이 API 핸들러에 직접 포함되어 관심사 분리 부족

### 해결 방안

1. **Sharp 라이브러리 도입**: proper한 이미지 처리를 위해 sharp 라이브러리 설치
2. **이미지 처리 유틸리티 분리**: `packages/api/utils/imageProcessor.ts`로 별도 모듈 분리
3. **5가지 이미지 효과 구현**:
   - 효과 0 (ID % 5 === 0): 원본 이미지
   - 효과 1 (ID % 5 === 1): 흑백 효과
   - 효과 2 (ID % 5 === 2): 세피아 효과
   - 효과 3 (ID % 5 === 3): 블러 효과
   - 효과 4 (ID % 5 === 4): 텍스트 오버레이 (ID 표시)
4. **텍스트 오버레이 기능**: SVG를 사용하여 이미지 중앙에 ID 텍스트 표시

### 구현 세부사항

#### 1. imageProcessor.ts 구조

```typescript
export type ImageEffect = 'original' | 'grayscale' | 'sepia' | 'blur' | 'text-overlay';

export interface ImageProcessorOptions {
  quality?: number;
  blurAmount?: number;
  textOverlay?: {
    text: string;
    fontSize?: number;
    color?: string;
    backgroundColor?: string;
  };
}
```

#### 2. 텍스트 오버레이 구현

- SVG를 사용하여 텍스트 생성
- 반투명 배경 박스와 함께 텍스트 표시
- 이미지 중앙에 정확한 위치 계산
- sharp의 composite 기능으로 오버레이

#### 3. API 경로별 효과 매핑

- `/api/img/1` → 효과 1 (흑백) + mock-2.jpg
- `/api/img/2` → 효과 2 (세피아) + mock-3.jpg
- `/api/img/3` → 효과 3 (블러) + mock-1.jpg
- `/api/img/4` → 효과 4 (텍스트 오버레이 "ID: 4") + mock-2.jpg
- `/api/img/5` → 효과 0 (원본) + mock-3.jpg

### 기술적 개선사항

- **관심사 분리**: 이미지 처리 로직을 별도 유틸리티로 분리
- **타입 안전성**: TypeScript 인터페이스와 타입 정의
- **에러 핸들링**: 파일 존재 여부 확인 및 적절한 에러 응답
- **캐싱**: 1시간 캐시 헤더 설정으로 성능 최적화
- **확장성**: 새로운 효과 추가가 용이한 구조

### 트러블슈팅

1. **JPEG 픽셀 조작 문제**: Raw 픽셀 접근 대신 sharp 라이브러리 사용
2. **Sharp 의존성**: pnpm으로 sharp 패키지 설치
3. **SVG 오버레이**: composite API를 사용한 텍스트 렌더링
4. **메타데이터 접근**: sharp의 metadata() 메서드로 이미지 크기 정보 획득

### 결과

- 모든 이미지 효과가 정상적으로 작동
- 이미지 ID에 따라 서로 다른 효과 적용
- 텍스트 오버레이로 ID 정보 시각적 표시
- 재사용 가능한 이미지 처리 유틸리티 완성

### 다음 단계

- 이미지 API에 대한 단위 테스트 작성
- 추가 이미지 효과 (회전, 리사이즈 등) 구현 고려
- 성능 모니터링 및 최적화
