import { describe, it, expect, vi, beforeEach } from 'vitest';
import { getIpInfo } from './getIpInfo';
import { IP_LOOKUP_FAILED } from '../../constants/errors';

describe('getIpInfo', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('fetches IP info successfully', async () => {
    const mockResponse = {
      success: true,
      country: 'USA',
      flag: { img: 'https://example.com/flag.png' },
      timezone: { id: 'America/New_York' },
    };

    window.fetch = vi.fn().mockResolvedValue({
      json: vi.fn().mockResolvedValue(mockResponse),
    });

    const ipInfo = await getIpInfo('8.8.8.8');

    expect(ipInfo).toEqual({
      country: 'USA',
      iconUrl: 'https://example.com/flag.png',
      timezone: 'America/New_York',
    });

    expect(fetch).toHaveBeenCalledWith(`${import.meta.env.VITE_API_URL}/8.8.8.8`);
  });

  it('throws an error when API fails', async () => {
    const mockResponse = {
      success: false,
      message: 'Invalid IP',
    };

    window.fetch = vi.fn().mockResolvedValue({
      json: vi.fn().mockResolvedValue(mockResponse),
    });

    await expect(getIpInfo('999.999.999.999')).rejects.toThrow('Invalid IP');
  });

  it('throws a default error message when API response has no message', async () => {
    const mockResponse = {
      success: false,
    };

    window.fetch = vi.fn().mockResolvedValue({
      json: vi.fn().mockResolvedValue(mockResponse),
    });

    await expect(getIpInfo('999.999.999.999')).rejects.toThrow(IP_LOOKUP_FAILED);
  });
});
