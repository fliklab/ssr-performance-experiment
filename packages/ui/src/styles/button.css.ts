import { style, styleVariants, keyframes } from '@vanilla-extract/css';

const spin = keyframes({
  '0%': { transform: 'translate(-50%, -50%) rotate(0deg)' },
  '100%': { transform: 'translate(-50%, -50%) rotate(360deg)' },
});

export const baseButton = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '8px',
  border: 'none',
  cursor: 'pointer',
  fontWeight: '500',
  fontSize: '14px',
  lineHeight: '20px',
  transition: 'all 0.2s ease-in-out',
  textDecoration: 'none',
  userSelect: 'none',
  ':disabled': {
    cursor: 'not-allowed',
    opacity: 0.5,
  },
  ':focus': {
    outline: 'none',
    boxShadow: '0 0 0 2px rgba(59, 130, 246, 0.5)',
  },
});

export const buttonVariants = styleVariants({
  primary: {
    backgroundColor: '#3b82f6',
    color: '#ffffff',
    ':hover:not(:disabled)': {
      backgroundColor: '#2563eb',
    },
    ':active:not(:disabled)': {
      backgroundColor: '#1d4ed8',
    },
  },
  secondary: {
    backgroundColor: '#f3f4f6',
    color: '#374151',
    border: '1px solid #d1d5db',
    ':hover:not(:disabled)': {
      backgroundColor: '#e5e7eb',
    },
    ':active:not(:disabled)': {
      backgroundColor: '#d1d5db',
    },
  },
  outline: {
    backgroundColor: 'transparent',
    color: '#3b82f6',
    border: '1px solid #3b82f6',
    ':hover:not(:disabled)': {
      backgroundColor: '#3b82f6',
      color: '#ffffff',
    },
    ':active:not(:disabled)': {
      backgroundColor: '#2563eb',
      color: '#ffffff',
    },
  },
  ghost: {
    backgroundColor: 'transparent',
    color: '#374151',
    ':hover:not(:disabled)': {
      backgroundColor: '#f3f4f6',
    },
    ':active:not(:disabled)': {
      backgroundColor: '#e5e7eb',
    },
  },
  danger: {
    backgroundColor: '#ef4444',
    color: '#ffffff',
    ':hover:not(:disabled)': {
      backgroundColor: '#dc2626',
    },
    ':active:not(:disabled)': {
      backgroundColor: '#b91c1c',
    },
  },
});

export const buttonSizes = styleVariants({
  sm: {
    padding: '6px 12px',
    fontSize: '12px',
    lineHeight: '16px',
    borderRadius: '6px',
  },
  md: {
    padding: '8px 16px',
    fontSize: '14px',
    lineHeight: '20px',
  },
  lg: {
    padding: '12px 24px',
    fontSize: '16px',
    lineHeight: '24px',
    borderRadius: '10px',
  },
});

export const fullWidth = style({
  width: '100%',
});

export const loading = style({
  position: 'relative',
  color: 'transparent',
  ':before': {
    content: '',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '16px',
    height: '16px',
    border: '2px solid currentColor',
    borderTop: '2px solid transparent',
    borderRadius: '50%',
    animation: `${spin} 1s linear infinite`,
  },
});
