import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Location } from './Location';


// mock useRealtimeClock
vi.mock('../../hooks/useRealtimeClock/useRealtimeClock', () => ({
  useRealtimeClock: vi.fn(() => '12:34:56'),
}));

describe('Location', () => {
  const props = {
    iconUrl: 'https://example.com/icon.png',
    timezone: 'UTC',
  };

  it('renders without crashing', () => {
    render(<Location {...props} />);
  });

  it('displays the correct time from useRealtimeClock', () => {
    render(<Location {...props} />);
    expect(screen.getByText('12:34:56')).toBeInTheDocument();
  });

  it('renders the provided icon', () => {
    render(<Location {...props} />);
    const image = screen.getByAltText('location');
    expect(image).toHaveAttribute('src', props.iconUrl);
  });

  it('applies correct styles', () => {
    render(<Location {...props} />);
    const container = screen.getByText('12:34:56').closest('div');
    expect(container).toHaveClass('flex items-center');
  });
});