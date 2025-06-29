import { createThemeContract, createTheme } from '@vanilla-extract/css';

// 디자인 토큰
export const vars = createThemeContract({
  color: {
    background: null,
    text: null,
    primary: null,
    secondary: null,
    border: null,
  },
  font: {
    family: null,
    size: null,
    weight: null,
  },
  radius: {
    sm: null,
    md: null,
    lg: null,
  },
});

// 기본 테마(Brutalism + Rounded + Minimal)
export const [themeClass, themeVars] = createTheme(vars, {
  color: {
    background: '#fff',
    text: '#111',
    primary: '#111',
    secondary: '#e0e0e0',
    border: '#111',
  },
  font: {
    family: 'Pretendard, sans-serif',
    size: '16px',
    weight: '500',
  },
  radius: {
    sm: '4px',
    md: '8px',
    lg: '16px',
  },
});
