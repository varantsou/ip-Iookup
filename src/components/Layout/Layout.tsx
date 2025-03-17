import { Button } from '../Button/Button';

interface LayoutProps {
  title: string;
  subTitle: string;
  children: React.ReactNode;
  onAddRow: () => void;
  buttonText?: string;
}

export function Layout({ title, subTitle, onAddRow, children, buttonText }: Readonly<LayoutProps>) {
  return (
    <div>
      <h2 className="text-3xl font-bold">{title}</h2>
      <div className="text-left">
        <p>{subTitle}</p>
        <Button className="my-3" variant="sky" onClick={onAddRow}>
          {buttonText}
        </Button>
      </div>
      {children}
    </div>
  )
}
