import { describe, it, expect } from 'vitest';
import { formatPrice } from './formatPrice';

describe('formatPrice', () => {
  it('기본값(KRW)으로 1000을 포맷한다', () => {
    expect(formatPrice(1000)).toBe('₩1,000');
  });

  it('USD로 1000을 포맷한다', () => {
    expect(formatPrice(1000, 'USD')).toMatch(/\$1,000/);
  });

  it('0을 포맷한다', () => {
    expect(formatPrice(0)).toBe('₩0');
  });

  it('음수를 포맷한다', () => {
    expect(formatPrice(-500)).toBe('-₩500');
  });
});
