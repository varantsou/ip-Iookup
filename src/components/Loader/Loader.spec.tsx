import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Loader } from './Loader';

describe('Loader Component', () => {
  it('renders without crashing', () => {
    render(<Loader data-testid="loader" />);
    const loader = screen.getByTestId('loader');
    expect(loader).toBeInTheDocument();
  });

  it('applies the default size class when no size prop is provided', () => {
    render(<Loader data-testid="loader" />);
    const loader = screen.getByTestId('loader');
    expect(loader).toHaveClass('h-6 w-6');
  });

  it('applies the correct size class when size prop is provided', () => {
    render(<Loader data-testid="loader" className="h-10 w-10" />);
    const loader = screen.getByTestId('loader');
    expect(loader).toHaveClass('h-10 w-10');
  });
});
