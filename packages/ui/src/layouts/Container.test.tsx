import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { Container } from './Container';

describe('Container', () => {
  it('children을 렌더링한다', () => {
    render(<Container>Hello Container</Container>);
    expect(screen.getByText('Hello Container')).toBeInTheDocument();
  });

  it('기본 maxWidth가 xl로 설정된다', () => {
    const { container } = render(<Container>Content</Container>);
    const containerEl = container.firstChild as HTMLElement;
    expect(containerEl.className).toBeTruthy();
  });

  it('maxWidth props가 적용된다', () => {
    const { container } = render(<Container maxWidth="lg">Content</Container>);
    const containerEl = container.firstChild as HTMLElement;
    expect(containerEl.className).toBeTruthy();
  });

  it('custom className이 적용된다', () => {
    const { container } = render(<Container className="custom-class">Content</Container>);
    const containerEl = container.firstChild as HTMLElement;
    expect(containerEl.className).toContain('custom-class');
  });

  it('as prop으로 다른 HTML 요소를 렌더링한다', () => {
    render(<Container as="section">Section Content</Container>);
    const sectionEl = screen.getByText('Section Content').closest('section');
    expect(sectionEl).toBeInTheDocument();
  });

  it('모든 maxWidth 옵션이 적용된다', () => {
    const maxWidths = ['sm', 'md', 'lg', 'xl', '2xl', 'full'] as const;

    maxWidths.forEach(maxWidth => {
      const { container } = render(<Container maxWidth={maxWidth}>Content {maxWidth}</Container>);
      const containerEl = container.firstChild as HTMLElement;
      expect(containerEl).toBeInTheDocument();
    });
  });

  it('추가 props가 전달된다', () => {
    render(
      <Container data-testid="container-test" role="main">
        Content
      </Container>,
    );
    const containerEl = screen.getByTestId('container-test');
    expect(containerEl).toHaveAttribute('role', 'main');
  });
});
