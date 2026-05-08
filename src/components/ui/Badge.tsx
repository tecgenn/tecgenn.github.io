import type React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning';
  className?: string;
}

const variantClasses: Record<string, string> = {
  default: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
  success: 'bg-green-500/20 text-green-400 border-green-500/30',
  warning: 'bg-yellow-400/20 text-yellow-400 border-yellow-400/30',
};

const Badge: React.FC<BadgeProps> = ({ children, variant = 'default', className = '' }) => {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
