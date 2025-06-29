import '@testing-library/jest-dom/vitest';
import { render } from '@testing-library/react';
import { FeedCard } from './FeedCard';

describe('FeedCard', () => {
  const mockFeedItem = {
    id: 1,
    title: '테스트 상품',
    image: '/test-image.jpg',
    price: 10000,
  };

  it('피드 카드가 정상적으로 렌더링된다', () => {
    const { getByText, getByRole } = render(<FeedCard {...mockFeedItem} />);

    expect(getByText('테스트 상품')).toBeInTheDocument();
    expect(getByText('10,000원')).toBeInTheDocument();
    expect(getByRole('img')).toHaveAttribute('src', '/test-image.jpg');
    expect(getByRole('img')).toHaveAttribute('alt', '테스트 상품');
  });

  it('상세보기 버튼이 존재한다', () => {
    const { getByText } = render(<FeedCard {...mockFeedItem} />);
    expect(getByText('상세보기')).toBeInTheDocument();
  });

  it('className props가 정상적으로 적용된다', () => {
    const { container } = render(<FeedCard {...mockFeedItem} className="custom-class" />);
    const card = container.firstChild as HTMLElement;
    expect(card.className).toContain('custom-class');
  });

  it('스타일 props가 정상적으로 적용된다', () => {
    const { container } = render(<FeedCard {...mockFeedItem} style={{ margin: '10px' }} />);
    const card = container.firstChild as HTMLElement;
    expect(card.style.margin).toBe('10px');
  });
});
