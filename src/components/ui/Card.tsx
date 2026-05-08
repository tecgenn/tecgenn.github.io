import type React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hover = true, glow = false }) => {
  const baseClasses = `bg-gray-900/50 border border-cyan-500/20 rounded-xl p-8 flex flex-col ${
    hover ? 'transform transition-transform duration-300 hover:scale-105 hover:border-cyan-500/50' : ''
  } ${glow ? 'glow-shadow' : ''} ${className}`;

  return <div className={baseClasses}>{children}</div>;
};

export default Card;
