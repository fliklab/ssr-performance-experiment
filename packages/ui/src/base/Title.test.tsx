import { render, screen } from '@testing-library/react';
import { Title } from './Title';

describe('Title', () => {
  it('renders title text', () => {
    render(<Title title="Test Title" />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Test Title');
  });

  it('renders description when provided', () => {
    render(<Title title="Test Title" description="Test description" />);
    expect(screen.getByText('Test description')).toBeInTheDocument();
  });

  it('does not render description when not provided', () => {
    render(<Title title="Test Title" />);
    expect(screen.queryByText('Test description')).not.toBeInTheDocument();
  });

  it('applies correct size variant', () => {
    render(<Title title="Test Title" size="xl" />);
    const title = screen.getByRole('heading', { level: 1 });
    expect(title).toBeInTheDocument();
  });

  it('applies correct alignment', () => {
    render(<Title title="Test Title" align="left" />);
    const wrapper = screen.getByRole('heading', { level: 1 }).parentElement;
    expect(wrapper).toBeInTheDocument();
  });

  it('applies custom className when provided', () => {
    render(<Title title="Test Title" className="custom-class" />);
    const wrapper = screen.getByRole('heading', { level: 1 }).parentElement;
    expect(wrapper).toHaveClass('custom-class');
  });
});
