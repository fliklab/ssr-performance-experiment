export function formatPrice(value: number, currency: string = 'KRW'): string {
  return value.toLocaleString('ko-KR', { style: 'currency', currency });
}
