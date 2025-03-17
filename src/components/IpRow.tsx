import { useCallback, useState } from 'react';

import { isReservedIP, isValidIP } from '../utils/validators';
import { useFetchIpInfo } from '../hooks/useFetchIpInfo';
import { IpLocation } from './IpLocation';
import { NumberBadge } from './NumberBadge';
import { IpInput } from './IpInput';
import { Loader } from './Loader';
import { INVALID_IP, RESERVED_IP } from '../constants/errors';

interface IpRowProps {
  order: number;
}

export function IpRow({ order }: IpRowProps) {
  const [ip, setIp] = useState<string>('');
  const { data, refetch, error, isLoading } = useFetchIpInfo(ip);

  const [clientError, setClientError] = useState<string | null>(null);

  const handleBlur = useCallback(() => {
    if (!isValidIP(ip)) {
      setClientError(INVALID_IP);
      return;
    } else if (isReservedIP(ip)) {
      setClientError(RESERVED_IP);
    }

    setClientError(null);
    refetch();
  }, [refetch, ip])

  const handleChangeIp = (value: string) => {
    setClientError(null);
    setIp(value);
  }

  return (
    <>
      <div className="grid grid-cols-[40px_1fr_200px] gap-2 w-full mb-2">
        <NumberBadge order={order} className="mt-0.5" />
        <IpInput
          disabled={isLoading}
          ip={ip}
          onChange={handleChangeIp}
          onBlur={handleBlur}
          error={clientError || error}
        />
        {isLoading && <Loader className="mt-2" />}
        {data && (<IpLocation iconUrl={data.iconUrl} timezone={data.timezone} />)}
      </div>
    </>
  );
}
