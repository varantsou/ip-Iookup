import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { IpInput } from './IpInput';

vi.mock('../Error', () => ({
  Error: ({ message }: { message: string }) => <span>{message}</span>,
}));

const mockOnBlur = vi.fn();
const mockOnChange = vi.fn();

describe('IpInput Component', () => {
  it('renders without crashing', () => {
    render(<IpInput ip="" onChange={mockOnChange} onBlur={mockOnBlur} />);
    const input = screen.getByPlaceholderText('Enter IP');
    expect(input).toBeInTheDocument();
  });

  it('renders the correct value', () => {
    render(<IpInput ip="192.168.1.1" onChange={mockOnChange} onBlur={mockOnBlur} />);
    const input = screen.getByPlaceholderText('Enter IP');
    expect(input).toHaveValue('192.168.1.1');
  });

  it('calls onChange when the user types', () => {
    render(<IpInput ip="" onChange={mockOnChange} onBlur={mockOnBlur} />);

    const input = screen.getByPlaceholderText('Enter IP');
    fireEvent.change(input, { target: { value: '8.8.8.8' } });

    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith('8.8.8.8');
  });

  it('calls onBlur when input loses focus', () => {
    render(<IpInput ip="" onChange={mockOnChange} onBlur={mockOnBlur} />);

    const input = screen.getByPlaceholderText('Enter IP');
    fireEvent.blur(input);

    expect(mockOnBlur).toHaveBeenCalledTimes(1);
  });

  it('displays an error message when there is an error', () => {
    render(<IpInput ip="" onChange={mockOnChange} onBlur={mockOnBlur} error="Invalid IP" />);

    expect(screen.getByText('Invalid IP')).toBeInTheDocument();
  });

  it('disables input when disabled prop is true', () => {
    render(<IpInput ip="" onChange={mockOnChange} onBlur={mockOnBlur} disabled />);

    const input = screen.getByPlaceholderText('Enter IP');
    expect(input).toBeDisabled();
  });

  it('applies error styles when an error is present', () => {
    render(<IpInput ip="" onChange={mockOnChange} onBlur={mockOnBlur} error="Error" />);

    const input = screen.getByPlaceholderText('Enter IP');
    expect(input).toHaveClass('outline-2 outline-red-500 text-red-500');
  });

  it('applies focus styles when focused', () => {
    render(<IpInput ip="" onChange={mockOnChange} onBlur={mockOnBlur} />);

    const input = screen.getByPlaceholderText('Enter IP');
    fireEvent.focus(input);
    expect(input).toHaveClass('focus:outline-2 focus:outline-sky-500 focus:border-sky-500');
  });
});
