import { describe, it, expect, vi, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useGlobalTime } from './useGlobalTime';

vi.useFakeTimers();

describe('useGlobalTime', () => {
  afterEach(() => {
    vi.clearAllTimers();
  });

  it('should return correct initial minutes and seconds', () => {
    const now = new Date();
    vi.setSystemTime(now);

    const { result } = renderHook(() => useGlobalTime());

    expect(result.current.minutes).toBe(now.getMinutes());
    expect(result.current.seconds).toBe(now.getSeconds());
  });

  it('should update seconds every second', () => {
    const now = new Date();
    vi.setSystemTime(now);

    const { result } = renderHook(() => useGlobalTime());

    expect(result.current.seconds).toBe(now.getSeconds());

    act(() => {
      vi.advanceTimersByTime(1000);
    });

    expect(result.current.seconds).toBe((now.getSeconds() + 1) % 60);
  });

  it('should correctly update minutes when transitioning from 59:59 to 00:00', () => {
    const now = new Date();
    now.setSeconds(59);
    vi.setSystemTime(now);

    const { result } = renderHook(() => useGlobalTime());

    expect(result.current.seconds).toBe(59);

    act(() => {
      vi.advanceTimersByTime(1000);
    });

    expect(result.current.seconds).toBe(0);
    expect(result.current.minutes).toBe((now.getMinutes() + 1) % 60);
  });

  it('should clean up the interval on unmount', () => {
    const { unmount } = renderHook(() => useGlobalTime());

    unmount();

    expect(vi.getTimerCount()).toBe(0);
  });
});
