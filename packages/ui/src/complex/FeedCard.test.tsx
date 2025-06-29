import '@testing-library/jest-dom/vitest';
import { render } from '@testing-library/react';
import FeedCard from './FeedCard';

describe('FeedCard', () => {
  it('이미지, 타이틀, 가격, description이 정상적으로 렌더링된다', () => {
    const { getByAltText, getByText } = render(
      <FeedCard image="/test.jpg" title="테스트" price={12345} description="설명" />,
    );
    expect(getByAltText('테스트')).toBeInTheDocument();
    expect(getByText('테스트')).toBeInTheDocument();
    expect(getByText('12,345원')).toBeInTheDocument();
    expect(getByText('설명')).toBeInTheDocument();
  });

  it('loading=true일 때 skeleton이 렌더링된다', () => {
    const { container } = render(
      <FeedCard image="/test.jpg" title="테스트" price={12345} loading />,
    );
    expect(container.querySelector('[class*="skeleton"]')).toBeInTheDocument();
  });
});
