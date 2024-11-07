import React from 'react';

interface TitleProps {
  title: string;
  color?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

const Title: React.FC<TitleProps> = ({
  title,
  color = 'black',
  size = 'xl'
}) => {
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-md',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl'
  };

  return (
    <div
      className={`${sizeClasses[size]} text-${color} text-xl font-medium
          uppercase
        text-gray-500`}
    >
      {title}
    </div>
  );
};

export default Title;
