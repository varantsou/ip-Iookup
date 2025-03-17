import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { NumberBadge } from './NumberBadge';

describe('NumberBadge', () => {
  it('renders without crashing', () => {
    render(<NumberBadge order={1} />);
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('renders the correct number', () => {
    render(<NumberBadge order={5} />);
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('applies additional className', () => {
    const { container } = render(<NumberBadge order={3} className="custom-class" />);
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('has correct default styles', () => {
    const { container } = render(<NumberBadge order={2} />);
    expect(container.firstChild).toHaveClass('w-8 h-8 rounded-full bg-gray-200 text-gray-500');
  });
});
