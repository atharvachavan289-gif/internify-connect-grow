import React from 'react';
import logoImage from '@/assets/internify-logo.png';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  showText = true, 
  className = '' 
}) => {
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

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className={`${sizeClasses[size]} rounded-xl overflow-hidden bg-gradient-primary p-1`}>
        <img 
          src={logoImage} 
          alt="Internify Logo"
          className="w-full h-full object-contain"
        />
      </div>
      {showText && (
        <div>
          <h1 className={`${textSizeClasses[size]} font-bold text-navy`}>Internify</h1>
          <p className={`text-muted-foreground ${size === 'sm' ? 'text-xs' : 'text-sm'}`}>
            PM Internship Scheme
          </p>
        </div>
      )}
    </div>
  );
};

export default Logo;