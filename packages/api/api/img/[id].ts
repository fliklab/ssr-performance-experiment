import type { VercelRequest, VercelResponse } from '@vercel/node';
import path from 'path';
import fs from 'fs';

// 예시: /api/img/1 형식으로 요청
export default function handler(req: VercelRequest, res: VercelResponse) {
  const { id } = req.query;

  // id가 없거나 숫자가 아닌 경우 400 에러
  if (!id || typeof id !== 'string' || isNaN(Number(id))) {
    return res.status(400).json({ error: '유효하지 않은 이미지 ID입니다.' });
  }

  // id를 3으로 나눈 나머지를 사용하여 이미지 선택 (1,2,3 중 하나)
  const imageNumber = (Number(id) % 3) + 1;
  const imagePath = path.join(__dirname, '..', '..', 'mock-images', `mock-${imageNumber}.jpg`);

  // 이미지에 적용할 효과(변형) 4가지

  // 이미지 효과 적용 함수
  const applyEffect = (imageBuffer: Buffer, imageNumber: number) => {
    // 이미지 효과 적용 로직
    switch (imageNumber % 4) {
      case 1:
        // 세피아톤 50% 적용
        const sepiaBuffer = Buffer.alloc(imageBuffer.length);
        for (let i = 0; i < imageBuffer.length; i += 3) {
          const r = imageBuffer[i];
          const g = imageBuffer[i + 1];
          const b = imageBuffer[i + 2];

          // 세피아 변환 공식 적용 (50% 강도)
          const tr = Math.min(255, (r * 0.393 + g * 0.769 + b * 0.189) * 0.5 + r * 0.5);
          const tg = Math.min(255, (r * 0.349 + g * 0.686 + b * 0.168) * 0.5 + g * 0.5);
          const tb = Math.min(255, (r * 0.272 + g * 0.534 + b * 0.131) * 0.5 + b * 0.5);

          sepiaBuffer[i] = tr;
          sepiaBuffer[i + 1] = tg;
          sepiaBuffer[i + 2] = tb;
        }
        return sepiaBuffer;
      case 2:
        // 흑백 변환 공식 적용 (50% 강도)
        const grayscaleBuffer = Buffer.alloc(imageBuffer.length);
        for (let i = 0; i < imageBuffer.length; i += 3) {
          const r = imageBuffer[i];
          const g = imageBuffer[i + 1];
          const b = imageBuffer[i + 2];

          // 흑백 변환을 위한 가중치 적용 (BT.601 표준)
          const gray = 0.299 * r + 0.587 * g + 0.114 * b;

          // 50% 강도로 원본과 흑백을 혼합
          grayscaleBuffer[i] = gray * 0.5 + r * 0.5;
          grayscaleBuffer[i + 1] = gray * 0.5 + g * 0.5;
          grayscaleBuffer[i + 2] = gray * 0.5 + b * 0.5;
        }
        return grayscaleBuffer;
      case 3:
        // 왼쪽 상단 확대 후 크롭 (2배 확대)
        const zoomBuffer = Buffer.alloc(imageBuffer.length / 4); // 1/4 크기로 크롭
        const width = Math.sqrt(imageBuffer.length / 3); // 이미지 너비 계산
        const newWidth = width / 2; // 크롭된 이미지 너비

        for (let y = 0; y < newWidth; y++) {
          for (let x = 0; x < newWidth; x++) {
            // 원본 이미지의 좌표
            const srcPos = (y * width + x) * 3;
            // 새 이미지의 좌표
            const destPos = (y * newWidth + x) * 3;

            // RGB 값 복사
            zoomBuffer[destPos] = imageBuffer[srcPos];
            zoomBuffer[destPos + 1] = imageBuffer[srcPos + 1];
            zoomBuffer[destPos + 2] = imageBuffer[srcPos + 2];
          }
        }
        return zoomBuffer;
      case 0:
        // 밝기와 채도 조정 (밝기 +20%, 채도 +30%)
        const adjustedBuffer = Buffer.alloc(imageBuffer.length);
        for (let i = 0; i < imageBuffer.length; i += 3) {
          const r = imageBuffer[i];
          const g = imageBuffer[i + 1];
          const b = imageBuffer[i + 2];

          // RGB를 HSL로 변환
          let [h, s, l] = (() => {
            const r = imageBuffer[i] / 255;
            const g = imageBuffer[i + 1] / 255;
            const b = imageBuffer[i + 2] / 255;
            const max = Math.max(r, g, b);
            const min = Math.min(r, g, b);
            let h,
              s,
              l = (max + min) / 2;

            if (max === min) {
              h = s = 0; // 무채색
            } else {
              const d = max - min;
              s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
              switch (max) {
                case r:
                  h = (g - b) / d + (g < b ? 6 : 0);
                  break;
                case g:
                  h = (b - r) / d + 2;
                  break;
                case b:
                  h = (r - g) / d + 4;
                  break;
              }
              h = h ? h / 6 : 0;
            }

            return [h, s, l];
          })();

          // 밝기와 채도 조정
          l = Math.min(1, l * 1.2); // 밝기 20% 증가
          s = Math.min(1, s * 1.3); // 채도 30% 증가

          adjustedBuffer[i] = r * 255;
          adjustedBuffer[i + 1] = g * 255;
          adjustedBuffer[i + 2] = b * 255;
        }
        return adjustedBuffer;
    }
    return imageBuffer;
  };

  // 이미지 효과 적용 함수 호출
  const imageBuffer = applyEffect(fs.readFileSync(imagePath), imageNumber);

  try {
    res.setHeader('Content-Type', 'image/jpeg');
    // 이미지 파일명을 id 기반으로 설정
    res.setHeader('Content-Disposition', `inline; filename="image-${id}.jpg"`);
    res.status(200).send(imageBuffer);
  } catch (error) {
    res.status(404).json({ error: '이미지를 찾을 수 없습니다.' });
  }
}
