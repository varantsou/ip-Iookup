import { IpRow } from './IpRow';

export function IpList({ rows = [] }: { rows: number[] }) {
  return (
    <div>
      {rows.map((id, index) => {
        return <IpRow key={id} order={index + 1} />;
      })}
    </div>
  );
}
