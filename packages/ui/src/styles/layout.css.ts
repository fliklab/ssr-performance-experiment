import { style, styleVariants } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: '16px',
  paddingRight: '16px',
  '@media': {
    '(min-width: 640px)': {
      paddingLeft: '24px',
      paddingRight: '24px',
    },
    '(min-width: 1024px)': {
      paddingLeft: '32px',
      paddingRight: '32px',
    },
  },
});

export const maxWidthVariants = styleVariants({
  sm: {
    maxWidth: '640px',
  },
  md: {
    maxWidth: '768px',
  },
  lg: {
    maxWidth: '1024px',
  },
  xl: {
    maxWidth: '1280px',
  },
  '2xl': {
    maxWidth: '1536px',
  },
  full: {
    maxWidth: 'none',
  },
});

export const centerContent = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  minHeight: '100vh',
});

export const mainContent = style({
  width: '100%',
  flex: '1 1 0%',
});

export const pageWrapper = style({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
});

export const header = style({
  width: '100%',
  borderBottom: '1px solid #e5e7eb',
  backgroundColor: '#ffffff',
  position: 'sticky',
  top: 0,
  zIndex: 50,
});

export const footer = style({
  width: '100%',
  borderTop: '1px solid #e5e7eb',
  backgroundColor: '#f9fafb',
  marginTop: 'auto',
});
