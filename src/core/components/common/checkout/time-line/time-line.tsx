'use client';
import { CarIcon, DollarSign, ShoppingCart, User2 } from 'lucide-react';
import { useContext } from 'react';
import { CartContext } from '~/core/providers/store-provider';
import Wrapper from '../../../ui/wrapper';
import Item from './item';

interface Props {
  setStep: (step: number) => void;
}

const TimeLine = ({ setStep }: Props) => {
  const { cart } = useContext(CartContext);
  if (!cart || cart?.length <= 0) return;

  return (
    <div className='mt-8'>
      <Wrapper>
        <div className='flex h-44 w-full items-center justify-between border-b border-slate-100  px-24'>
          <Item
            icon={<ShoppingCart strokeWidth={1} />}
            title='Carrito'
            state={true}
            onClick={() => setStep(1)}
          />
          <Item
            icon={<User2 strokeWidth={1} />}
            title='Datos'
            state={false}
            onClick={() => setStep(2)}
          />
          <Item
            icon={<CarIcon strokeWidth={1} />}
            title='Datos'
            state={false}
            onClick={() => setStep(3)}
          />
          <Item
            icon={<DollarSign strokeWidth={1} />}
            title='Datos'
            state={false}
            finish
            onClick={() => setStep(4)}
          />
        </div>
      </Wrapper>
    </div>
  );
};

export default TimeLine;
