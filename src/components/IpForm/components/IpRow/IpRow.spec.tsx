import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { IpRow } from './IpRow';
import { INVALID_IP } from '../../../../constants/errors';

vi.mock('../../../../hooks/useFetchIpInfo/useFetchIpInfo', () => ({
  useFetchIpInfo: vi.fn(() => ({
    data: null,
    refetch: vi.fn(),
    error: null,
    isLoading: false,
  })),
}));

vi.mock('../../../../utils/validators', () => ({
  isValidIP: vi.fn((ip) => ip === '192.168.1.1'), // let's consider this IP valid only
  isReservedIP: vi.fn((ip) => ip === '127.0.0.1'), // let's consider this IP reserved
}));

describe('IpRow', () => {
  it('renders without crashing', () => {
    render(<IpRow order={1} />);
  });

  it('displays correct order number', () => {
    render(<IpRow order={3} />);
    expect(screen.getByText('3')).toBeInTheDocument();
  });

  it('shows error message for invalid IP', async () => {
    render(<IpRow order={1} />);
    const input = screen.getByPlaceholderText('Enter IP');

    fireEvent.change(input, { target: { value: 'invalid-ip' } });
    fireEvent.blur(input);

    await waitFor(() => {
      expect(screen.getByText(INVALID_IP)).toBeInTheDocument();
    });
  });
});
