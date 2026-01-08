import { ReactNode } from 'react';

interface InputProps {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  icon?: ReactNode;
  placeholder?: string;
}

export default function Input({
  label,
  type,
  value,
  onChange,
  error,
  icon,
  placeholder,
}: InputProps) {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-slate-700">{label}</label>
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
            {icon}
          </div>
        )}
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full ${
            icon ? 'pl-11' : 'pl-4'
          } pr-4 py-3 bg-slate-50 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
            error ? 'border-red-300 bg-red-50' : 'border-slate-200'
          }`}
        />
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
}
