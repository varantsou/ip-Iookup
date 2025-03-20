import { describe, expect, it, vi } from 'vitest';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { formatLocalTime } from './formatLocalTime';

dayjs.extend(utc);
dayjs.extend(timezone);

describe('formatLocalTime', () => {
  it('should format time correctly for a given timezone', () => {
    vi.setSystemTime(new Date('2024-03-20T12:30:45Z'));

    const result = formatLocalTime('America/New_York', 30, 45, 'HH:mm:ss');
    expect(result).toBe('08:30:45'); // New York is UTC-4 at this date
  });

  it('should correctly update minutes and seconds', () => {
    vi.setSystemTime(new Date('2024-03-20T12:59:59Z'));

    const result = formatLocalTime('Europe/London', 59, 59, 'HH:mm:ss');
    expect(result).toBe('12:59:59'); // London is UTC+0 at this date
  });

  it('should correctly roll over to the next hour when seconds reset', () => {
    vi.setSystemTime(new Date('2024-03-20T12:59:59Z')); // Simulating 59:59

    const result = formatLocalTime('Asia/Tokyo', 0, 0, 'HH:mm:ss');
    expect(result).toBe('21:00:00'); // Tokyo is UTC+9
  });

  it('should support different time formats', () => {
    vi.setSystemTime(new Date('2024-03-20T12:15:30Z'));

    const result = formatLocalTime('America/Los_Angeles', 15, 30, 'hh:mm A');
    expect(result).toBe('05:15 AM'); // Los Angeles is UTC-7
  });
});