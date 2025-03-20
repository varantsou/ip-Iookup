import { formatLocalTime } from '../../utils/formatLocalTime/formatLocalTime';

interface LocationProps {
  iconUrl: string;
  timezone: string;
  minutes: number;
  seconds: number;
}

export function Location ({ timezone, iconUrl, minutes, seconds }: LocationProps) {
  const localTime = formatLocalTime(timezone, minutes, seconds);

  return (
    <div className="flex items-center">
      <img className="block mr-2" width="20" src={iconUrl} alt="location"/>
      <span className="text-sm">{localTime}</span>
    </div>
  );
}
