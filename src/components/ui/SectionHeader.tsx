import type React from 'react';

interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description, className = '' }) => {
  return (
    <div className={`text-center ${className}`}>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-white">{title}</h2>
      {description && <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">{description}</p>}
    </div>
  );
};

export default SectionHeader;
