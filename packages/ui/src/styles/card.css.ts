import { style } from '@vanilla-extract/css';

export const card = style({
  background: '#fff',
  borderRadius: '16px',
  boxShadow: '0 4px 24px 0 rgba(0,0,0,0.07)',
  padding: '24px',
  transition: 'box-shadow 0.2s',
  width: '100%',
  maxWidth: '360px',
  margin: '0 auto',
  '@media': {
    '(max-width: 600px)': {
      padding: '16px',
      borderRadius: '10px',
    },
  },
});
