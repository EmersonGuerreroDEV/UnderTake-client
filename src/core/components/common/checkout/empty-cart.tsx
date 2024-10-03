'use client';
import { ShoppingCart } from 'lucide-react';
import { useContext } from 'react';
import { CartContext } from '~/core/providers/store-provider';
import { Button } from '../../ui/button';

const EmptyCart = () => {
  const { cart } = useContext(CartContext);

  if (!cart || cart.length > 0) return;

  return (
    <div className=' flex min-h-[500px] items-center justify-center'>
      <div className='flex max-w-sm flex-col items-center space-y-4 rounded-lg  p-6'>
        <div className='flex h-36 w-36 items-center justify-center rounded-full bg-gray-100'>
          <ShoppingCart size={60} />
        </div>
        <h1 className='text-center font-semibold'>Tu carrito esta vació</h1>
        <span className='text-center font-light text-gray-400'>
          Tenemos mas de 100 productos que puedes comprar
        </span>
        <Button className='bg-blue-500 hover:bg-blue-400'>
          Seguir comprando
        </Button>
      </div>
    </div>
  );
};

export default EmptyCart;
