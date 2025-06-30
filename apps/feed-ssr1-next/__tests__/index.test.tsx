import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from './index';

describe('Feed SSR1 Page', () => {
  it('피드 리스트가 정상적으로 렌더링된다', () => {
    render(<Home />);
    expect(screen.getByText('Feed (SSR1)')).toBeInTheDocument();
    expect(screen.getByText('Test 1')).toBeInTheDocument();
    expect(screen.getByText('Test 2')).toBeInTheDocument();
    expect(screen.getByText('1,000원')).toBeInTheDocument();
    expect(screen.getByText('2,000원')).toBeInTheDocument();
  });
});
