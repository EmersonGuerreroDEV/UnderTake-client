'use client';
import { useContext } from 'react';
import { Card, CardContent } from '~/core/components/ui/card';
import Wrapper from '~/core/components/ui/wrapper';
import { CartContext } from '~/core/providers/store-provider';
import Details from './details';
import ItemCart from './item-cart';

const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <div>
      <Wrapper>
        <div className='w-full px-24'>
          <h1>Carro de compra</h1>
          <div className='flex w-full space-x-8'>
            <Card className='w-full bg-slate-100'>
              <CardContent className='space-y-2'>
                {cart?.map((product) => {
                  return <ItemCart key={product.id} {...product} />;
                })}
              </CardContent>
            </Card>
            <Details />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Cart;
