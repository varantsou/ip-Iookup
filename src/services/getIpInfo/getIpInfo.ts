import { IP_LOOKUP_FAILED } from '../../constants/errors'
import { IpInfo } from '../../types/IP';

const baseUrl = import.meta.env.VITE_API_URL;

export const getIpInfo = async (ip: string): Promise<IpInfo> => {
  const res = await fetch(`${baseUrl}/${ip}`);
  const data = await res.json();

  if (!data.success) throw new Error(data?.message as string || IP_LOOKUP_FAILED);

  return {
    country: data.country,
    iconUrl: data.flag.img,
    timezone: data.timezone.id,
  };
};