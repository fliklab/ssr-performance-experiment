import { globalStyle } from '@vanilla-extract/css';

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
});

// 디버그용: reset.css가 로드되었는지 확인하는 마커
globalStyle('body', {
  vars: {
    '--reset-css-loaded': 'true',
  },
});

globalStyle('html, body', {
  height: '100%',
  background: '#fff',
  color: '#111',
  fontFamily: 'Pretendard, sans-serif',
  fontSize: '16px',
  lineHeight: 1.5,
  WebkitFontSmoothing: 'antialiased',
});

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
});

globalStyle('ul, ol', {
  listStyle: 'none',
});

globalStyle('button', {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  font: 'inherit',
});

globalStyle('img', {
  display: 'block',
  maxWidth: '100%',
  height: 'auto',
});
