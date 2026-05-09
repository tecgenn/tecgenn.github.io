import type React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  as?: 'button' | 'a';
  href?: string;
  target?: string;
  rel?: string;
}

const variantClasses: Record<string, string> = {
  primary:
    'bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/50 hover:brightness-110',
  secondary:
    'bg-gray-800/50 border border-cyan-500/30 text-white font-semibold hover:bg-cyan-500/20 hover:border-cyan-400/60 transition-all',
  outline:
    'bg-transparent border-2 border-cyan-500 text-cyan-400 font-bold hover:bg-cyan-500 hover:text-white hover:shadow-lg hover:shadow-cyan-500/40 transition-all',
  ghost: 'bg-transparent text-gray-400 hover:text-white transition-colors',
};

const sizeClasses: Record<string, string> = {
  sm: 'py-2 px-4 text-sm rounded-lg',
  md: 'py-3 px-6 text-base rounded-lg',
  lg: 'py-4 px-10 text-lg rounded-full',
};

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  as = 'button',
  href,
  target,
  rel,
  ...props
}) => {
  const baseClasses = `inline-flex items-center justify-center font-poppins transition-all duration-300 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (as === 'a' && href) {
    return (
      <a href={href} target={target} rel={rel} className={baseClasses}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={baseClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
