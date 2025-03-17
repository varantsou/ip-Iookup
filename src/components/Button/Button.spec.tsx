import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Button } from './Button';

describe('Button Component', () => {
  it('renders correctly with default props', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('rounded font-medium transition duration-200 px-4 py-1 text-base bg-blue-500 text-white hover:bg-blue-600');
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<Button size="sm">Small</Button>);
    expect(screen.getByRole('button', { name: /small/i })).toHaveClass('px-1 py-1 text-sm');

    rerender(<Button size="md">Medium</Button>);
    expect(screen.getByRole('button', { name: /medium/i })).toHaveClass('px-4 py-1 text-base');

    rerender(<Button size="lg">Large</Button>);
    expect(screen.getByRole('button', { name: /large/i })).toHaveClass('px-6 py-3 text-lg');
  });

  it('renders with different variants', () => {
    const { rerender } = render(<Button variant="secondary">Secondary</Button>);
    expect(screen.getByRole('button', { name: /secondary/i })).toHaveClass('bg-gray-500 text-white hover:bg-gray-600');

    rerender(<Button variant="outline">Outline</Button>);
    expect(screen.getByRole('button', { name: /outline/i })).toHaveClass('border border-gray-500 text-gray-500 hover:bg-gray-100');

    rerender(<Button variant="danger">Danger</Button>);
    expect(screen.getByRole('button', { name: /danger/i })).toHaveClass('bg-red-500 text-white hover:bg-red-600');

    rerender(<Button variant="sky">Sky</Button>);
    expect(screen.getByRole('button', { name: /sky/i })).toHaveClass('bg-sky-500 text-white hover:bg-sky-600');
  });

  it('allows adding custom classes', () => {
    render(<Button className="custom-class">Custom</Button>);
    const button = screen.getByRole('button', { name: /custom/i });

    expect(button).toHaveClass('custom-class');
  });

  it('triggers onClick event', async () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Click</Button>);

    const button = screen.getByRole('button', { name: /click/i });
    await userEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('renders as disabled', () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByRole('button', { name: /disabled/i });

    expect(button).toBeDisabled();
  });
});
