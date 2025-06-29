import React from 'react';
import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer', () => {
  const defaultProps = {
    appName: 'Test App',
    appType: 'CSR 방식',
    renderingMethod: 'Client-side Rendering',
  };

  it('renders copyright text correctly', () => {
    render(<Footer {...defaultProps} />);
    expect(screen.getByText('© 2024 Test App. SSR 성능 실험 프로젝트입니다.')).toBeInTheDocument();
  });

  it('renders app details correctly', () => {
    render(<Footer {...defaultProps} />);

    expect(screen.getByText('CSR 방식')).toBeInTheDocument();
    expect(screen.getByText('Next.js App Router')).toBeInTheDocument();
    expect(screen.getByText('Client-side Rendering')).toBeInTheDocument();
  });

  it('renders custom framework when provided', () => {
    render(<Footer {...defaultProps} framework="Next.js Pages Router" />);

    expect(screen.getByText('Next.js Pages Router')).toBeInTheDocument();
  });

  it('applies custom className when provided', () => {
    const { container } = render(<Footer {...defaultProps} className="custom-footer" />);
    const footer = container.firstChild;
    expect(footer).toHaveClass('custom-footer');
  });
});
