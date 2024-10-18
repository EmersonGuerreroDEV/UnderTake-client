'use client';
import { Search } from 'lucide-react';
import useCommandMenu from '../../common/header/commandMenu/useCommandMenu';

const SearchComponent = () => {
  const { setOpen } = useCommandMenu();

  return (
    <div className=''>
      <button onClick={() => setOpen(true)} className='flex'>
        Buscar <Search className='ml-2' size={20} />
      </button>
    </div>
  );
};

export default SearchComponent;
