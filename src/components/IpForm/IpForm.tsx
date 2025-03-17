import { IpRow } from './components/IpRow/IpRow';

interface IpFormProps {
  rows: number[];
}

export function IpForm({ rows = [], ...props }: IpFormProps) {
  return (
    <>
      {rows.map((id, index) => {
        return <IpRow key={id} order={index + 1} {...props} />;
      })}
    </>
  );
}
