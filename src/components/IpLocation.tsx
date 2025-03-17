import { useRealtimeClock } from '../hooks/useRealtimeClock';

interface IpLocationProps {
  iconUrl: string;
  timezone: string;
}

export function IpLocation ({ timezone, iconUrl }: IpLocationProps) {
  const localTime = useRealtimeClock(timezone);

  return (
    <div className="flex items-center">
      <img className="block mr-2" width="20" src={iconUrl} alt=""/>
      <span className="text-sm">{localTime}</span>
    </div>
  );
}
