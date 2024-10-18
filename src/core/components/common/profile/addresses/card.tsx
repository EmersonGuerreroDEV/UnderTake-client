import { Trash } from 'lucide-react';
import { AddressUser } from '~/core/interfaces/user';

interface CardProps {
  address: AddressUser;
}

const CardAddresses = ({ address }: CardProps) => {
  return (
    <div className='max-w-screen-xs relative grid rounded-lg p-4 shadow-lg'>
      <h2 className='font-semibold text-gray-800'>{address?.city.name}</h2>
      <p className='text-sm text-gray-500'>{address?.address}</p>
      <p>{address?.neighborhood}</p>
      <button className='absolute bottom-4 right-4 rounded-full bg-slate-100 p-1 shadow-xl hover:scale-105 hover:border hover:border-red-50'>
        <Trash size={20} strokeWidth={1} />
      </button>
    </div>
  );
};

export default CardAddresses;
