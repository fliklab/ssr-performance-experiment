import '@testing-library/jest-dom/vitest';
import { render } from '@testing-library/react';
import Button from './Button';

test('Button renders correctly', () => {
  const { getByText } = render(<Button>Click me</Button>);
  expect(getByText('Click me')).toBeInTheDocument();
});
