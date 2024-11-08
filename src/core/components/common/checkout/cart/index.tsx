'use client';
import { useContext } from 'react';
import { Card, CardContent } from '~/core/components/ui/card';
import Title from '~/core/components/ui/title';
import { CartContext } from '~/core/providers/store-provider';
import Details from './details';
import ItemCart from './item-cart';

interface CartProps {
  setStep: () => void;
}
const Cart = ({ setStep }: CartProps) => {
  const { cart } = useContext(CartContext);
  if (!cart || cart.length <= 0) return;
  return (
    <div className='mt-4 w-full'>
      <Title title='Carro de compra' />
      <div className='mt-4 flex w-full flex-col space-x-0 lg:flex-row lg:space-x-8'>
        <Card className='w-full bg-slate-100'>
          <CardContent className='space-y-4'>
            {cart?.map((product) => {
              return <ItemCart key={product.id} {...product} />;
            })}
          </CardContent>
        </Card>
        <Details viewProducts={false} onClick={setStep} />
      </div>
    </div>
  );
};

export default Cart;
