'use client';
import { X } from 'lucide-react';
import Image from 'next/image';
import { useContext, useMemo } from 'react';
import { CartProp } from '~/core/interfaces/cart';
import { CartContext } from '~/core/providers/store-provider';
import Helpers from '~/core/utils/helpers';
import Counter from '../../products/counter';

interface ItemCart {
  product: CartProp;
}

const ItemCart = ({ ...resp }: CartProp) => {
  const { updateQuantity, cart, removeProduct } = useContext(CartContext);

  const productInCart = useMemo(() => {
    return cart ? cart.find((item) => item.id === resp?.id) : null;
  }, [cart, resp?.id]);

  const handleIncrement = () => {
    if (!resp?.id) return;
    if (!productInCart) return;
    updateQuantity(resp?.id, productInCart.quantity + 1);
  };

  const handleDecrement = () => {
    if (!productInCart) return;
    updateQuantity(resp?.id, productInCart.quantity - 1);
  };

  const onRemoveProduct = () => {
    removeProduct(resp?.id);
  };

  return (
    <div className='relative flex w-full justify-between rounded-lg border bg-white p-4'>
      <div className='flex w-full items-start space-x-2'>
        <Image
          src='/assets/images/products/phone.webp'
          width={100}
          height={100}
          alt='product'
          className=''
        />
        <div className='w-full space-y-2'>
          <span className='text-sm uppercase text-gray-400'>Samsung</span>
          <h1 className='text-lg font-medium'>{resp?.name}</h1>
          <div className='flex flex-col '>
            <span className='text-sm font-light text-red-300 line-through opacity-80 md:text-sm'>
              {Helpers.formatCurrency(10000)}{' '}
            </span>
            <div className='flex w-full justify-between'>
              <span className='text-lg font-medium text-gray-600 md:text-2xl'>
                {Helpers.formatCurrency(10000)}{' '}
              </span>
              <div className='w-32'>
                <Counter
                  onDecrement={handleDecrement}
                  onIncrement={handleIncrement}
                  count={resp.quantity}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={onRemoveProduct}
        className='absolute -right-2 -top-2 flex items-start justify-center rounded-full bg-gray-300 p-1 hover:bg-red-400 hover:text-white'
      >
        <X size={15} />
      </button>
    </div>
  );
};

export default ItemCart;
