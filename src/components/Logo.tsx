
import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
}

const Logo = ({ className = '', size = 'md', variant = 'light' }: LogoProps) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl'
  };

  const colorClasses = variant === 'light' ? 'text-white' : 'text-blue-900';

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Logo Icon */}
      <div className={`${sizeClasses[size]} relative`}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-lg transform rotate-3"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
          <div className="text-white font-bold text-xl">AH</div>
        </div>
      </div>
      
      {/* Logo Text */}
      <div className="flex flex-col">
        <span className={`${textSizeClasses[size]} font-bold ${colorClasses} leading-tight`}>
          Azure Haven
        </span>
        <span className={`text-xs ${variant === 'light' ? 'text-blue-200' : 'text-blue-600'} tracking-wider uppercase`}>
          Resort
        </span>
      </div>
    </div>
  );
};

export default Logo;
