import React, { ReactNode } from 'react';

interface CardProps {
  children?: ReactNode | ReactNode[];
  title?: string;
}

export const Card: React.FC<CardProps> = ({ children, title }) => {
  return (
    <div className='min-w-0 p-4 bg-white border-2 border-gray-300 rounded-lg shadow-xs dark:bg-gray-800'>
      {title && (
        <h4 className='mb-4 font-semibold text-gray-600 dark:text-gray-300'>
          {title}
        </h4>
      )}
      <div className='text-gray-600 dark:text-gray-400'>{children}</div>
    </div>
  );
};
