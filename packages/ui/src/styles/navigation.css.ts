import { style } from '@vanilla-extract/css';

export const navigation = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '16px 0',
});

export const logo = style({
  fontSize: '20px',
  fontWeight: '700',
  color: '#1f2937',
  textDecoration: 'none',
  ':hover': {
    color: '#0070f3',
  },
});

export const navLinks = style({
  display: 'flex',
  gap: '24px',
  alignItems: 'center',
});

export const navLink = style({
  color: '#6b7280',
  textDecoration: 'none',
  fontWeight: '500',
  ':hover': {
    color: '#1f2937',
  },
});
