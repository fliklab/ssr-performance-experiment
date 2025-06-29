import { style } from '@vanilla-extract/css';

export const reset = style({
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
  border: 0,
  font: 'inherit',
  verticalAlign: 'baseline',
});

export const globalReset = style({
  selectors: {
    '*, *::before, *::after': {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
    },
    'html, body': {
      height: '100%',
      background: '#fff',
      color: '#111',
      fontFamily: 'Pretendard, sans-serif',
      fontSize: '16px',
      lineHeight: 1.5,
      WebkitFontSmoothing: 'antialiased',
    },
    a: {
      color: 'inherit',
      textDecoration: 'none',
    },
    'ul, ol': {
      listStyle: 'none',
    },
    button: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      font: 'inherit',
    },
    img: {
      display: 'block',
      maxWidth: '100%',
      height: 'auto',
    },
  },
});
