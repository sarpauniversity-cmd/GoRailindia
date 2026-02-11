import React from 'react';
import { cn } from '../../utils/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className, 
  hover = false,
  glass = false,
  onClick
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        'bg-white rounded-[20px] p-6 shadow-sm border border-[#E2E8F0]/50',
        hover && 'transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer',
        glass && 'bg-white/80 backdrop-blur-xl',
        className
      )}
    >
      {children}
    </div>
  );
};

export const StatCard: React.FC<{
  title: string;
  value: string | number;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  icon?: React.ReactNode;
}> = ({ title, value, change, changeType = 'positive', icon }) => {
  const changeColors = {
    positive: 'text-[#10B981] bg-green-50',
    negative: 'text-[#EF4444] bg-red-50',
    neutral: 'text-[#94A3B8] bg-gray-50'
  };

  return (
    <Card className="relative overflow-hidden" hover>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-[#475569]">{title}</p>
          <p className="text-[28px] font-bold text-[#0F172A] mt-1">{value}</p>
          {change && (
            <div className={cn(
              'inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium mt-2',
              changeColors[changeType]
            )}>
              {changeType === 'positive' ? '↑' : changeType === 'negative' ? '↓' : '→'}
              {change}
            </div>
          )}
        </div>
        {icon && (
          <div className="p-3 bg-[#E5EDFF] rounded-xl text-[#2563EB]">
            {icon}
          </div>
        )}
      </div>
    </Card>
  );
};
