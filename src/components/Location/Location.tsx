import { useRealtimeClock } from '../../hooks/useRealtimeClock/useRealtimeClock';

interface LocationProps {
  iconUrl: string;
  timezone: string;
}

export function Location ({ timezone, iconUrl }: LocationProps) {
  const localTime = useRealtimeClock(timezone);

  return (
    <div className="flex items-center">
      <img className="block mr-2" width="20" src={iconUrl} alt="location"/>
      <span className="text-sm">{localTime}</span>
    </div>
  );
}
