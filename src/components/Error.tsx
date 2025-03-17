interface ErrorProps {
  message: string;
}

export function Error({ message }: Readonly<ErrorProps>) {
  return (
    <p className="text-red-500 text-sm text-left mt-1">{message}</p>
  );
}
