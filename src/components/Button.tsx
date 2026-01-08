import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'danger';
  fullWidth?: boolean;
  disabled?: boolean;
}

export default function Button({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  fullWidth = false,
  disabled = false,
}: ButtonProps) {
  const baseClasses = 'px-6 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none';

  const variantClasses = {
    primary: 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-slate-200 hover:bg-slate-300 text-slate-700',
    danger: 'bg-red-500 hover:bg-red-600 text-white',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${widthClass}`}
    >
      {children}
    </button>
  );
}
