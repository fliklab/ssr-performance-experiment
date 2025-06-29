import { style, styleVariants } from '@vanilla-extract/css';

export const titleWrapper = style({
  marginBottom: '32px',
});

export const title = style({
  fontWeight: '700',
  color: '#1f2937',
  marginBottom: '16px',
});

export const description = style({
  color: '#6b7280',
  marginBottom: '32px',
  maxWidth: '600px',
});

export const alignVariants = styleVariants({
  left: {
    textAlign: 'left',
  },
  center: {
    textAlign: 'center',
    alignItems: 'center',
  },
  right: {
    textAlign: 'right',
  },
});

export const sizeVariants = styleVariants({
  sm: {
    fontSize: '24px',
  },
  md: {
    fontSize: '32px',
  },
  lg: {
    fontSize: '40px',
  },
  xl: {
    fontSize: '48px',
  },
});
