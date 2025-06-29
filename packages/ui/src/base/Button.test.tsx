import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { Button } from './Button';

describe('Button', () => {
  it('children을 렌더링한다', () => {
    render(<Button>클릭</Button>);
    expect(screen.getByText('클릭')).toBeInTheDocument();
  });

  it('props를 button에 전달한다', () => {
    render(
      <Button type="submit" data-testid="my-btn">
        버튼
      </Button>,
    );
    const btn = screen.getByTestId('my-btn');
    expect(btn).toHaveAttribute('type', 'submit');
  });

  it('onClick 이벤트가 동작한다', () => {
    const handleClick = vi.fn();
    render(
      <Button onClick={handleClick} data-testid="click-btn">
        클릭
      </Button>,
    );
    fireEvent.click(screen.getByTestId('click-btn'));
    expect(handleClick).toHaveBeenCalled();
  });
});
