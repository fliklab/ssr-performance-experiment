import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import Home, { FeedItem } from './index';

describe('Feed SSR1 Page', () => {
  const mockFeed: FeedItem[] = [
    { id: 1, title: 'Test 1', image: '/test1.jpg', price: 1000 },
    { id: 2, title: 'Test 2', image: '/test2.jpg', price: 2000 },
  ];

  it('피드 리스트가 정상적으로 렌더링된다', () => {
    render(<Home feed={mockFeed} />);
    expect(screen.getByText('Feed (SSR1)')).toBeInTheDocument();
    expect(screen.getByText('Test 1')).toBeInTheDocument();
    expect(screen.getByText('Test 2')).toBeInTheDocument();
    expect(screen.getByText('1,000원')).toBeInTheDocument();
    expect(screen.getByText('2,000원')).toBeInTheDocument();
  });
});
