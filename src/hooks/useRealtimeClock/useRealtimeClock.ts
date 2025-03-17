import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { DEFAULT_DATE_FORMAT } from '../../constants/date';

dayjs.extend(utc);
dayjs.extend(timezone);

export const useRealtimeClock = (tz: string, format = DEFAULT_DATE_FORMAT) => {
  const [time, setTime] = useState(dayjs().tz(tz).format(format));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(dayjs().tz(tz).format(format));
    }, 1000);

    return () => clearInterval(interval);
  }, [tz, format]);

  return time;
};