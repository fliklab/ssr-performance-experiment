import '@testing-library/jest-dom/vitest';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Typography from './Typography';

describe('Typography', () => {
  it('children이 정상적으로 렌더링된다', () => {
    const { getByText } = render(<Typography>hello</Typography>);
    expect(getByText('hello')).toBeInTheDocument();
  });

  it('variant, weight, align, color props가 정상적으로 적용된다', () => {
    const { getByText } = render(
      <Typography variant="heading" weight="bold" align="center" color="red">
        test
      </Typography>,
    );
    const el = getByText('test');
    expect(el).toHaveStyle({ color: 'rgb(255, 0, 0)', textAlign: 'center' });
    expect(el.className).toContain('heading');
    expect(el.className).toContain('bold');
  });
});
