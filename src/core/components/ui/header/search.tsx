'use client';
import { Search } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import useCommandMenu from '../../common/header/commandMenu/useCommandMenu';

interface SearchComponentProps {
  className?: string;
}

const SearchComponent = ({ className }: SearchComponentProps) => {
  const { setOpen } = useCommandMenu();

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className={twMerge(
          `flex text-nowrap rounded-full px-12 py-2`,
          className
        )}
      >
        <span className='font-extralight'>Buscar producto... </span>
        <Search className='ml-2' size={20} strokeWidth={1} />
      </button>
    </div>
  );
};

export default SearchComponent;
