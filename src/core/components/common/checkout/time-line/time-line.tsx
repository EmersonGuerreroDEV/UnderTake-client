'use client';
import { CarIcon, DollarSign, ShoppingCart, User2 } from 'lucide-react';
import { useContext } from 'react';
import { CartContext } from '~/core/providers/store-provider';
import Wrapper from '../../../ui/wrapper';
import Item from './item';

const TimeLine = () => {
  const { cart } = useContext(CartContext);
  if (!cart || cart?.length <= 0) return;

  return (
    <div className='mt-8'>
      <Wrapper>
        <div className='flex h-44 w-full items-center justify-between border-b border-slate-100  px-24'>
          <Item icon={<ShoppingCart />} title='Carrito' state={true} />
          <Item icon={<User2 />} title='Datos' state={false} />
          <Item icon={<CarIcon />} title='Datos' state={false} />
          <Item icon={<DollarSign />} title='Datos' state={false} finish />
        </div>
      </Wrapper>
    </div>
  );
};

export default TimeLine;
