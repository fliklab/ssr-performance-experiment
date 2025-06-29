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

  try {
    const imageBuffer = fs.readFileSync(imagePath);
    res.setHeader('Content-Type', 'image/jpeg');
    // 이미지 파일명을 id 기반으로 설정
    res.setHeader('Content-Disposition', `inline; filename="image-${id}.jpg"`);
    res.status(200).send(imageBuffer);
  } catch (error) {
    res.status(404).json({ error: '이미지를 찾을 수 없습니다.' });
  }
}
