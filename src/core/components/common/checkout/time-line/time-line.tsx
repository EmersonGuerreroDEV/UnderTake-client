'use client';
import { CarIcon, DollarSign, ShoppingCart, User2 } from 'lucide-react';
import { useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import { CartContext } from '~/core/providers/store-provider';
import Wrapper from '../../../ui/wrapper';
import Item from './item';

const TimeLine = () => {
  const { cart } = useContext(CartContext);

  if (!cart || cart?.length <= 0) return;

  return (
    <div className='mt-12'>
      <Wrapper>
        <div className='flex h-24 w-full items-center justify-between px-24 '>
          <Item icon={<ShoppingCart />} title='Carrito' state={true} />
          <div className={twMerge('-mt-5 h-1 w-full bg-green-400')} />
          <Item icon={<User2 />} title='Datos' state={true} />
          <div className={twMerge('-mt-5 h-1 w-full bg-green-400')} />
          <Item icon={<CarIcon />} title='Datos' state={true} />
          <div className={twMerge('-mt-5 h-1 w-full bg-green-400')} />
          <Item icon={<DollarSign />} title='Datos' state={true} finish />
        </div>
      </Wrapper>
    </div>
  );
};

export default TimeLine;
