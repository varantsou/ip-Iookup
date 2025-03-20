import { IpRow } from './components/IpRow/IpRow';
import { useGlobalTime } from '../../hooks/useGlobalTime/useGlobalTime';

interface IpFormProps {
  rows: number[];
}

export function IpForm({ rows = [], ...props }: IpFormProps) {
  const { minutes, seconds } = useGlobalTime();

  return (
    <>
      {rows.map((id, index) => {
        return <IpRow key={id} order={index + 1} minutes={minutes} seconds={seconds} {...props} />;
      })}
    </>
  );
}
