import { useQuery } from '@tanstack/react-query';

import { getIpInfo } from '../services/getIpInfo';

export const useFetchIpInfo = (ip: string) => {
  const { data, refetch, isLoading, error } = useQuery({
    queryKey: ['ipInfo', ip],
    queryFn: () => getIpInfo(ip),
    enabled: false,
    retry: false,
  });

  return { data, refetch, isLoading, error: (error)?.message };
}
