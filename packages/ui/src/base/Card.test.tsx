import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('Card', () => {
  it('children이 정상적으로 렌더링된다', () => {
    render(<Card>hello</Card>);
    expect(screen.getByText('hello')).toBeInTheDocument();
  });

  it('여러 children이 정상적으로 렌더링된다', () => {
    render(
      <Card>
        <h1>Title</h1>
        <p>Content</p>
      </Card>,
    );
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('className props가 정상적으로 적용된다', () => {
    const { container } = render(<Card className="test-class">test</Card>);
    const card = container.firstChild as HTMLElement;
    expect(card.className).toContain('test-class');
  });

  it('style props가 정상적으로 적용된다', () => {
    const { container } = render(<Card style={{ background: 'red', margin: '10px' }}>test</Card>);
    const card = container.firstChild as HTMLElement;
    expect(card.style.background).toBe('red');
    expect(card.style.margin).toBe('10px');
  });

  it('className과 style이 동시에 적용된다', () => {
    const { container } = render(
      <Card className="test-class" style={{ background: 'blue' }}>
        test
      </Card>,
    );
    const card = container.firstChild as HTMLElement;
    expect(card.className).toContain('test-class');
    expect(card.style.background).toBe('blue');
  });

  it('기본 카드 스타일 클래스가 적용된다', () => {
    const { container } = render(<Card>test</Card>);
    const card = container.firstChild as HTMLElement;
    expect(card.className).toBeTruthy();
    expect(card.tagName).toBe('DIV');
  });

  it('className이 undefined일 때 정상적으로 렌더링된다', () => {
    const { container } = render(<Card>test</Card>);
    const card = container.firstChild as HTMLElement;
    expect(card).toBeInTheDocument();
    expect(card.className).not.toContain('undefined');
  });

  it('빈 children이 전달되어도 정상적으로 렌더링된다', () => {
    const { container } = render(<Card>{null}</Card>);
    const card = container.firstChild as HTMLElement;
    expect(card).toBeInTheDocument();
  });

  it('ReactNode 타입의 다양한 children을 렌더링한다', () => {
    render(
      <Card>
        <span>Text</span>
        {123}
        {true && <div>Conditional</div>}
      </Card>,
    );
    expect(screen.getByText('Text')).toBeInTheDocument();
    expect(screen.getByText('123')).toBeInTheDocument();
    expect(screen.getByText('Conditional')).toBeInTheDocument();
  });
});
