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
  const discountCalcule = () => {
    if (resp.discount <= 0) return resp.price;
    const total = (resp.price * resp.discount) / 100;
    return total;
  };
  const flirtsImage = resp.variants?.[0]?.image;

  return (
    <div className='relative flex w-full justify-between rounded-lg border border-gray-300 bg-white p-4'>
      <div className='flex w-full items-start space-x-2'>
        <Image
          src={flirtsImage!}
          width={100}
          height={100}
          alt='product'
          className='bg-center object-cover'
        />
        <div className='w-full space-y-4'>
          <span className='text-xs uppercase text-gray-400 '>Samsung</span>
          <h1 className='lg:text-bse text-sm font-medium '>{resp?.name}</h1>
          <div className='flex flex-col '>
            {resp?.discount > 0 && (
              <span className='text-sm font-light text-red-300 line-through opacity-80 md:text-sm'>
                {Helpers.formatCurrency(resp.price)}{' '}
              </span>
            )}
            <div className='flex w-full justify-between'>
              <span className='font-sans text-lg font-medium text-gray-600 md:text-2xl'>
                {Helpers.formatCurrency(discountCalcule())}{' '}
              </span>
              <div className='w-44'>
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
