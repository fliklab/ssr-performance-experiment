import { style } from '@vanilla-extract/css';

export const footer = style({
  textAlign: 'center',
  color: '#6b7280',
  fontSize: '14px',
  padding: '16px 0',
});

export const copyright = style({
  margin: 0,
  marginBottom: '8px',
});

export const details = style({
  display: 'flex',
  justifyContent: 'center',
  gap: '16px',
  flexWrap: 'wrap',
});
