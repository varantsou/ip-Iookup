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
    <div style={{ width: '520px' }} className="border-1 p-4 border-gray-200 rounded-md">
      <h2 className="text-2xl font-bold text-left mb-1">{title}</h2>
      <div className="text-left">
        <p>{subTitle}</p>
        <Button className="mt-4" variant="sky" onClick={onAddRow}>
          {buttonText}
        </Button>
      </div>
      <hr className="border-t-2 border-gray-200 my-5" />
      {children}
    </div>
  )
}
