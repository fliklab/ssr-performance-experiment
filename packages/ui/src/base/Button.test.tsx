import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { Button } from './Button';

describe('Button', () => {
  it('children을 렌더링한다', () => {
    render(<Button>클릭</Button>);
    expect(screen.getByText('클릭')).toBeInTheDocument();
  });

  it('기본 props를 button에 전달한다', () => {
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

  it('variant props가 적용된다', () => {
    const { container } = render(<Button variant="secondary">Secondary</Button>);
    const button = container.firstChild as HTMLElement;
    expect(button.className).toBeTruthy();
  });

  it('size props가 적용된다', () => {
    const { container } = render(<Button size="lg">Large Button</Button>);
    const button = container.firstChild as HTMLElement;
    expect(button.className).toBeTruthy();
  });

  it('fullWidth props가 적용된다', () => {
    const { container } = render(<Button fullWidth>Full Width</Button>);
    const button = container.firstChild as HTMLElement;
    expect(button.className).toBeTruthy();
  });

  it('loading 상태에서 disabled가 된다', () => {
    render(
      <Button loading data-testid="loading-btn">
        Loading
      </Button>,
    );
    const button = screen.getByTestId('loading-btn');
    expect(button).toBeDisabled();
  });

  it('loading 상태에서 onClick이 호출되지 않는다', () => {
    const handleClick = vi.fn();
    render(
      <Button loading onClick={handleClick} data-testid="loading-btn">
        Loading
      </Button>,
    );
    fireEvent.click(screen.getByTestId('loading-btn'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('disabled 상태에서 onClick이 호출되지 않는다', () => {
    const handleClick = vi.fn();
    render(
      <Button disabled onClick={handleClick} data-testid="disabled-btn">
        Disabled
      </Button>,
    );
    fireEvent.click(screen.getByTestId('disabled-btn'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('custom className이 적용된다', () => {
    const { container } = render(<Button className="custom-class">Custom</Button>);
    const button = container.firstChild as HTMLElement;
    expect(button.className).toContain('custom-class');
  });

  it('모든 variant가 렌더링된다', () => {
    const variants = ['primary', 'secondary', 'outline', 'ghost', 'danger'] as const;

    variants.forEach(variant => {
      const { container } = render(<Button variant={variant}>{variant}</Button>);
      const button = container.firstChild as HTMLElement;
      expect(button).toBeInTheDocument();
    });
  });

  it('모든 size가 렌더링된다', () => {
    const sizes = ['sm', 'md', 'lg'] as const;

    sizes.forEach(size => {
      const { container } = render(<Button size={size}>{size}</Button>);
      const button = container.firstChild as HTMLElement;
      expect(button).toBeInTheDocument();
    });
  });
});
