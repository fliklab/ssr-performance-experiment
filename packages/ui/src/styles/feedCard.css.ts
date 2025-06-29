import { style } from '@vanilla-extract/css';

export const feedCard = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: '320px',
});

export const imageWrap = style({
  width: '100%',
  aspectRatio: '1.6/1',
  background: '#f5f5f5',
  borderRadius: '12px',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const image = style({
  width: '100%',
  height: 'auto',
  objectFit: 'cover',
  display: 'block',
});

export const skeleton = style({
  width: '100%',
  height: '100%',
  background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
  animation: 'skeleton-loading 1.2s infinite linear',
});
