import { render, screen, waitFor } from '@testing-library/react';
import FeedPage from './page';
import '@testing-library/jest-dom';
import { vi } from 'vitest';

const mockFeed = [
  { id: 1, title: 'Brutal Banner', image: '/mock-images/banner1.png', price: 12000 },
  { id: 2, title: 'Rounded Product', image: '/mock-images/product1.png', price: 34000 },
];

global.fetch = vi.fn(() => Promise.resolve({ json: () => Promise.resolve(mockFeed) })) as any;

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
});
