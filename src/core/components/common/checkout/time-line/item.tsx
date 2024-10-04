import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ItemProps {
  icon: React.ReactNode;
  title: string;
  state: boolean;
  finish?: boolean;
}

const Item = ({ icon, title, state, finish = false }: ItemProps) => {
  return (
    <>
      <div className='flex w-32 items-center justify-center'>
        <div className='mx-4 flex flex-col items-center space-y-1'>
          <div
            className={twMerge(
              'flex h-10 w-10 items-center justify-center rounded-full text-white',
              state ? 'bg-green-700' : 'bg-gray-300'
            )}
          >
            {icon}
          </div>
          <span className='text-sm font-semibold'>{title}</span>
        </div>
      </div>
      {!finish && (
        <div
          className={twMerge(
            '-mt-5 h-1 w-full',
            state ? 'bg-green-400' : 'bg-gray-300'
          )}
        />
      )}
    </>
  );
};

export default Item;
