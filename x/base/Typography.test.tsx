import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Typography } from './Typography';

test('Typography style', () => {
  const { getByText } = render(
    <Typography color="red" align="center">
      test
    </Typography>,
  );
  const el = getByText('test');
  expect(el).toHaveStyle({ color: 'rgb(255, 0, 0)', textAlign: 'center' });
});
