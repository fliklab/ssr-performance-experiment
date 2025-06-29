import React from 'react';
import { render, screen } from '@testing-library/react';
import { Navigation } from './Navigation';

// Mock Next.js Link component
jest.mock('next/link', () => {
  return function MockLink({ children, href }: { children: React.ReactNode; href: string }) {
    return <a href={href}>{children}</a>;
  };
});

describe('Navigation', () => {
  it('renders app name correctly', () => {
    render(<Navigation appName="Test App" />);
    expect(screen.getByText('Test App')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<Navigation appName="Test App" />);

    const homeLinks = screen.getAllByText('홈');
    const feedLinks = screen.getAllByText('피드');

    expect(homeLinks).toHaveLength(1);
    expect(feedLinks).toHaveLength(1);
  });

  it('renders login button', () => {
    render(<Navigation appName="Test App" />);
    expect(screen.getByText('로그인')).toBeInTheDocument();
  });

  it('applies custom className when provided', () => {
    const { container } = render(<Navigation appName="Test App" className="custom-nav" />);
    const nav = container.querySelector('nav');
    expect(nav).toHaveClass('custom-nav');
  });
});
