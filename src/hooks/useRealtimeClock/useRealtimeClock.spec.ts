import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { useRealtimeClock } from './useRealtimeClock';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

describe('useRealtimeClock Hook', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('returns initial time in the correct format', () => {
    const tz = 'America/New_York';
    const { result } = renderHook(() => useRealtimeClock(tz));

    expect(result.current).toMatch(/^\d{2}:\d{2}:\d{2}$/);
  });

  it('supports custom time format', () => {
    const tz = 'Europe/London';
    const customFormat = 'YYYY-MM-DD HH:mm';

    const { result } = renderHook(() => useRealtimeClock(tz, customFormat));

    expect(result.current).toBe(dayjs().tz(tz).format(customFormat));
  });

  it('updates time every second', () => {
    const tz = 'Europe/London';
    const { result } = renderHook(() => useRealtimeClock(tz));

    const initialTime = result.current;
    expect(initialTime).toMatch(/^\d{2}:\d{2}:\d{2}$/);

    act(() => {
      vi.advanceTimersByTime(1000);
    });

    expect(result.current).not.toEqual(initialTime);
  });

  it('clears interval on unmount', () => {
    const clearIntervalSpy = vi.spyOn(window, 'clearInterval');

    const { unmount } = renderHook(() => useRealtimeClock('UTC'));

    unmount();

    expect(clearIntervalSpy).toHaveBeenCalled();
    clearIntervalSpy.mockRestore();
  });
});
