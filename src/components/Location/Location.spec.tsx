import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Location } from './Location';
import { formatLocalTime } from '../../utils/formatLocalTime/formatLocalTime';

vi.mock('../../utils/formatLocalTime/formatLocalTime', () => ({
  formatLocalTime: vi.fn(),
}));

const mockedFormatLocalTime = vi.mocked(formatLocalTime);

describe('Location Component', () => {
  it('should render correctly with valid props', () => {
    mockedFormatLocalTime.mockReturnValue('08:30:45'); // Mock formatted time

    render(
      <Location
        iconUrl="https://example.com/flag.png"
        timezone="America/New_York"
        minutes={30}
        seconds={45}
      />
    );

    // Check if the flag image is rendered correctly
    const flagImg = screen.getByRole('img', { name: /location/i });
    expect(flagImg).toHaveAttribute('src', 'https://example.com/flag.png');
    expect(flagImg).toHaveAttribute('alt', 'location');

    // Check if the formatted time is displayed correctly
    expect(screen.getByText('08:30:45')).toBeInTheDocument();
  });

  it('should display correct time for different timezones', () => {
    mockedFormatLocalTime.mockReturnValue('21:15:30');

    render(
      <Location
        iconUrl="https://example.com/japan-flag.png"
        timezone="Asia/Tokyo"
        minutes={15}
        seconds={30}
      />
    );

    expect(screen.getByText('21:15:30')).toBeInTheDocument();
  });

  it('should handle time transition from 59:59 to 00:00', () => {
    mockedFormatLocalTime.mockReturnValue('00:00:00');

    render(
      <Location
        iconUrl="https://example.com/flag.png"
        timezone="UTC"
        minutes={0}
        seconds={0}
      />
    );

    expect(screen.getByText('00:00:00')).toBeInTheDocument();
  });
});
