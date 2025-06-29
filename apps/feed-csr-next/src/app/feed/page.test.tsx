import { render, screen, waitFor } from '@testing-library/react';
import FeedPage from './page';
import '@testing-library/jest-dom';
import { vi } from 'vitest';

type FeedItem = {
  id: number;
  title: string;
  image: string;
  price: number;
};
const mockFeed: FeedItem[] = [
  { id: 1, title: 'Brutal Banner', image: '/mock-images/banner1.png', price: 12000 },
  { id: 2, title: 'Rounded Product', image: '/mock-images/product1.png', price: 34000 },
];

global.fetch = vi.fn(() =>
  Promise.resolve({ json: () => Promise.resolve(mockFeed) }),
) as unknown as typeof fetch;

describe('FeedPage', () => {
  it('로딩 중 표시', () => {
    render(<FeedPage />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('목록 렌더링', async () => {
    render(<FeedPage />);
    await waitFor(() => {
      expect(screen.getByText('Brutal Banner')).toBeInTheDocument();
      expect(screen.getByText('Rounded Product')).toBeInTheDocument();
      expect(screen.getAllByText('상세보기').length).toBe(2);
    });
  });

  it('빈 데이터 안내', async () => {
    globalThis.fetch = vi.fn(() =>
      Promise.resolve({ json: () => Promise.resolve([]), ok: true }),
    ) as unknown as typeof fetch;
    render(<FeedPage />);
    await waitFor(() => {
      expect(screen.getByText('피드 데이터가 없습니다.')).toBeInTheDocument();
    });
  });

  it('API 에러 안내', async () => {
    globalThis.fetch = vi.fn(() => Promise.resolve({ ok: false })) as unknown as typeof fetch;
    render(<FeedPage />);
    await waitFor(() => {
      expect(screen.getByRole('alert')).toHaveTextContent('피드 데이터를 불러오지 못했습니다.');
    });
  });

  it('이미지 alt 속성 정상', async () => {
    globalThis.fetch = vi.fn(() =>
      Promise.resolve({ json: () => Promise.resolve(mockFeed), ok: true }),
    ) as unknown as typeof fetch;
    render(<FeedPage />);
    await waitFor(() => {
      expect(screen.getByAltText('Brutal Banner')).toBeInTheDocument();
      expect(screen.getByAltText('Rounded Product')).toBeInTheDocument();
    });
  });
});
