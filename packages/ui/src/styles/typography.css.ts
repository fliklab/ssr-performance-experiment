import { style } from '@vanilla-extract/css';

export const typography = style({
  fontFamily: 'inherit',
  color: '#222',
  margin: 0,
  padding: 0,
});

export const heading = style({
  fontSize: '1.5rem',
  fontWeight: 700,
  lineHeight: 1.3,
});

export const body = style({
  fontSize: '1rem',
  fontWeight: 400,
  lineHeight: 1.6,
});

export const caption = style({
  fontSize: '0.85rem',
  fontWeight: 400,
  lineHeight: 1.4,
  opacity: 0.7,
});

export const bold = style({
  fontWeight: 700,
});
