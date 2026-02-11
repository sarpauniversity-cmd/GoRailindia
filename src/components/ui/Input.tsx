import React from 'react';
import { cn } from '../../utils/cn';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  icon,
  className,
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-[#0F172A] mb-1.5">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]">
            {icon}
          </div>
        )}
        <input
          className={cn(
            'w-full px-4 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-[#0F172A] placeholder:text-[#94A3B8]',
            'focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent',
            'transition-all duration-200',
            icon && 'pl-10',
            error && 'border-[#EF4444] focus:ring-[#EF4444]',
            className
          )}
          {...props}
        />
      </div>
      {error && (
        <p className="mt-1 text-sm text-[#EF4444]">{error}</p>
      )}
    </div>
  );
};

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
}

export const Select: React.FC<SelectProps> = ({
  label,
  error,
  options,
  className,
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-[#0F172A] mb-1.5">
          {label}
        </label>
      )}
      <select
        className={cn(
          'w-full px-4 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-[#0F172A]',
          'focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent',
          'transition-all duration-200 cursor-pointer appearance-none',
          'bg-[url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%2394A3B8\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E")] bg-no-repeat bg-[length:20px] bg-[right_12px_center]',
          error && 'border-[#EF4444] focus:ring-[#EF4444]',
          className
        )}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-1 text-sm text-[#EF4444]">{error}</p>
      )}
    </div>
  );
};
