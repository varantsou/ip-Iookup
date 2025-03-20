import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

export const formatLocalTime = (tz: string, minutes: number, seconds: number, format = 'HH:mm:ss') => {
  const now = dayjs().tz(tz);
  const adjustedTime = now.set('minute', minutes).set('second', seconds);

  return adjustedTime.format(format);
};
