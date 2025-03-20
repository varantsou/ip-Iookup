import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'outline' | 'danger' | 'sky';
}

const baseStyles = 'rounded font-medium transition duration-200 cursor-pointer';
const sizeStyles = {
  sm: 'px-1 py-1 text-sm',
  md: 'px-4 py-1 text-base',
  lg: 'px-6 py-3 text-lg',
};

const variantStyles = {
  primary: 'bg-blue-500 text-white hover:bg-blue-600',
  secondary: 'bg-gray-500 text-white hover:bg-gray-600',
  outline: 'border border-gray-500 text-gray-500 hover:bg-gray-100',
  danger: 'bg-red-500 text-white hover:bg-red-600',
  sky: 'bg-sky-500 text-white hover:bg-sky-600',
};

export function Button({
  size = 'md',
  variant = 'primary',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
