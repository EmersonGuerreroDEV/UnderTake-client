import { ChevronRightIcon } from 'lucide-react';
import Helpers from '../../../utils/helpers';

const CommandItemCard = ({ picture, name, color, category, price }) => {
  return (
    <div className='group grid cursor-pointer grid-cols-3 p-3 md:grid-cols-5'>
      <div className='col-span-1 flex h-20 w-20 items-center overflow-hidden rounded-md'>
        <img src={picture} alt={name} className='h-full w-full object-cover' />
      </div>

      <div className='col-span-2 flex flex-col justify-center md:col-span-3'>
        <h1 className='text-md font-medium uppercase'>
          {' '}
          {name} {color}{' '}
        </h1>
        <span className='font-wild-soul text-sm font-light text-gray-500'>
          {category}
        </span>
        <span className='font-medium'>{Helpers.formatCurrency(price)}</span>
      </div>

      <div className='col-span-1 hidden flex-1 items-center justify-end text-primary md:flex'>
        <ChevronRightIcon className='mr-4 transition ease-in group-hover:translate-x-4' />
      </div>
    </div>
  );
};

export default CommandItemCard;
