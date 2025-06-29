import sharp from 'sharp';

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

/**
 * SVG 텍스트를 생성하여 이미지에 오버레이
 * @param text 표시할 텍스트
 * @param width 이미지 너비
 * @param height 이미지 높이
 * @param fontSize 폰트 크기
 * @param textColor 텍스트 색상
 * @param backgroundColor 배경 색상
 * @returns SVG 버퍼
 */
const createTextSvg = (
  text: string,
  width: number,
  height: number,
  fontSize: number = 48,
  textColor: string = 'white',
  backgroundColor: string = 'rgba(0,0,0,0.7)',
): Buffer => {
  // 텍스트 박스 크기 계산 (대략적)
  const textWidth = text.length * fontSize * 0.6;
  const textHeight = fontSize * 1.4;
  const padding = 20;

  const boxWidth = textWidth + padding * 2;
  const boxHeight = textHeight + padding * 2;

  // 중앙 위치 계산
  const x = (width - boxWidth) / 2;
  const y = (height - boxHeight) / 2;

  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <!-- 반투명 배경 박스 -->
      <rect x="${x}" y="${y}" width="${boxWidth}" height="${boxHeight}" 
            fill="${backgroundColor}" rx="10" ry="10"/>
      <!-- 텍스트 -->
      <text x="${width / 2}" y="${height / 2 + fontSize / 3}" 
            font-family="Arial, sans-serif" 
            font-size="${fontSize}" 
            font-weight="bold"
            fill="${textColor}" 
            text-anchor="middle" 
            dominant-baseline="middle">${text}</text>
    </svg>
  `;

  return Buffer.from(svg);
};

/**
 * 이미지에 다양한 효과를 적용하는 함수
 * @param imagePath 이미지 파일 경로
 * @param effectType 적용할 효과 타입 (0: 원본, 1: 흑백, 2: 세피아, 3: 블러, 4: 텍스트 오버레이)
 * @param options 이미지 처리 옵션
 * @returns 처리된 이미지 버퍼
 */
export const applyImageEffect = async (
  imagePath: string,
  effectType: number,
  options: ImageProcessorOptions = {},
): Promise<Buffer> => {
  const { quality = 90, blurAmount = 3, textOverlay } = options;
  const image = sharp(imagePath);

  // 이미지 메타데이터 가져오기 (텍스트 오버레이용)
  const metadata = await image.metadata();
  const { width = 800, height = 600 } = metadata;

  switch (effectType) {
    case 0:
      // 원본 이미지
      return await image.jpeg({ quality }).toBuffer();

    case 1:
      // 흑백 효과
      return await image.greyscale().jpeg({ quality }).toBuffer();

    case 2:
      // 세피아 효과
      return await image
        .tint({ r: 255, g: 240, b: 196 })
        .modulate({ brightness: 1.1, saturation: 0.3 })
        .jpeg({ quality })
        .toBuffer();

    case 3:
      // 블러 효과
      return await image.blur(blurAmount).jpeg({ quality }).toBuffer();

    case 4:
      // 푸른 빛 효과
      return await image
        .modulate({
          brightness: 1.1,
          saturation: 0.3,
          hue: 180,
        })
        .jpeg({ quality })
        .toBuffer();

    case 5:
      // 녹색 빛 효과
      return await image
        .modulate({
          brightness: 1.1,
          saturation: 0.3,
          hue: 120,
        })
        .jpeg({ quality })
        .toBuffer();

    case 6:
      // 반전 효과
      return await image.negate().jpeg({ quality }).toBuffer();

    default:
      return await image.jpeg({ quality }).toBuffer();
  }
};

/**
 * 효과 타입 번호를 효과명으로 변환
 * @param effectType 효과 타입 번호
 * @returns 효과명
 */
export const getEffectName = (effectType: number): ImageEffect => {
  const effectNames: ImageEffect[] = ['original', 'grayscale', 'sepia', 'blur', 'text-overlay'];
  return effectNames[effectType % effectNames.length];
};

/**
 * 효과명을 효과 타입 번호로 변환
 * @param effectName 효과명
 * @returns 효과 타입 번호
 */
export const getEffectType = (effectName: ImageEffect): number => {
  const effectMap: Record<ImageEffect, number> = {
    original: 0,
    grayscale: 1,
    sepia: 2,
    blur: 3,
    'text-overlay': 4,
  };
  return effectMap[effectName] ?? 0;
};
