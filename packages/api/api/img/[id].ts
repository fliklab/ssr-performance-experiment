import type { VercelRequest, VercelResponse } from '@vercel/node';
import path from 'path';
import fs from 'fs';
import { applyImageEffect, getEffectName } from '../../utils/imageProcessor';

// 예시: /api/img/1 형식으로 요청
export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { id } = req.query;

  // id가 없거나 숫자가 아닌 경우 400 에러
  if (!id || typeof id !== 'string' || isNaN(Number(id))) {
    return res.status(400).json({ error: '유효하지 않은 이미지 ID입니다.' });
  }

  const imageId = Number(id);

  // id를 3으로 나눈 나머지를 사용하여 이미지 선택 (1,2,3, 4중 하나)
  const imageNumber = (imageId % 4) + 1;
  const imagePath = path.join(__dirname, '..', '..', 'mock-images', `mock-${imageNumber}.jpg`);

  // 효과 타입 결정 (0: 원본, 1: 흑백, 2: 세피아, 3: 블러, 4: 텍스트 오버레이)
  const effectType = imageId % 5;

  try {
    // 파일 존재 여부 확인
    if (!fs.existsSync(imagePath)) {
      return res.status(404).json({ error: '이미지를 찾을 수 없습니다.' });
    }

    // 이미지 효과 적용 옵션 설정
    const processingOptions = {
      textOverlay: {
        text: `${id}`,
        fontSize: 48,
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.4)',
      },
    };

    // 이미지 효과 적용
    const processedImageBuffer = await applyImageEffect(imagePath, effectType, processingOptions);

    // 효과명을 파일명에 포함
    const effectName = getEffectName(effectType);

    res.setHeader('Content-Type', 'image/jpeg');
    res.setHeader('Content-Disposition', `inline; filename="image-${id}-${effectName}.jpg"`);
    res.setHeader('Cache-Control', 'public, max-age=3600'); // 1시간 캐싱
    res.status(200).send(processedImageBuffer);
  } catch (error) {
    console.error('이미지 처리 에러:', error);
    res.status(500).json({ error: '이미지 처리 중 오류가 발생했습니다.' });
  }
}
