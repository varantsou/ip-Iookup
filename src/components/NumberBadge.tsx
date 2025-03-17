interface NumberBadgeProps {
  order: number;
  className?: string;
}

export function NumberBadge({ order, className }: NumberBadgeProps) {
  return (
    <div className={`flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-500 ${className}`}>
      {order}
    </div>
  );
}