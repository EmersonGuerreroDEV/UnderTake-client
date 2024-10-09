'use client';
import { Star } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useContext, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';
import { ProductProp } from '~/core/interfaces/cart';
import { CartContext } from '~/core/providers/store-provider';
import Helpers from '~/core/utils/helpers';
import { Button } from '../../ui/button';
import { Card, CardContent, CardFooter } from '../../ui/card';
import Counter from './counter';

interface CardProps {
  className?: string;
  product: ProductProp;
}

const CardProduct = ({ className, product }: CardProps) => {
  const { cart, addProduct, updateQuantity } = useContext(CartContext);
  const router = useRouter();

  const handleAddProduct = () => {
    addProduct(product);
  };

  const validProductCardInclude = () => {
    return cart ? cart.some((item) => item.id === product?.id) : false;
  };

  const productInCart = useMemo(() => {
    return cart ? cart.find((item) => item.id === product?.id) : null;
  }, [cart, product?.id]);

  const handleIncrement = () => {
    if (!productInCart) return;
    updateQuantity(product.id, productInCart.quantity + 1);
  };

  const handleDecrement = () => {
    if (!productInCart) return;
    updateQuantity(product.id, productInCart.quantity - 1);
  };

  return (
    <Card className={twMerge(className, 'mx-auto p-0 ')}>
      <CardContent
        onClick={() => router.push(`product/${product?.id}`)}
        className='lg:wp-64'
      >
        <div className='relative flex w-full flex-col items-center'>
          <div className='absolute right-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-orange-400 p-4 font-bold text-white'>
            10%
          </div>

          <div className='absolute bottom-0 flex min-h-8 w-full items-center justify-center rounded-t-lg bg-orange-400/90 text-sm font-normal text-white'>
            Tecnología
          </div>

          <Image
            src='/assets/images/products/phone.webp'
            width={360}
            height={360}
            alt='product'
            className=''
          />
        </div>
        <h2 className='mt-1 text-xs font-medium text-blue-500 md:text-sm'>
          {product?.name}{' '}
          {/* Asumiendo que `product` tiene una propiedad `name` */}
        </h2>
        <div className='mt-2 flex items-end justify-between'>
          <div>
            <div className='flex items-center space-x-2'>
              <p className='text-sm text-gray-400'>Antes</p>
              <p className='text-sm font-light text-red-300 line-through opacity-80 md:text-sm'>
                {Helpers.formatCurrency(10000)}{' '}
                {/* Asumiendo `oldPrice` en `product` */}
              </p>
            </div>
            <div className='-mt-1 flex items-center space-x-2'>
              <p className='text-lg font-medium text-gray-600 md:text-2xl'>
                {Helpers.formatCurrency(100000)}{' '}
                {/* Asumiendo `price` en `product` */}
              </p>
            </div>
          </div>
          <div className='flex items-center space-x-2 pb-1 text-orange-400'>
            <div className='flex items-center'>
              <span>{5}</span> <Star className='pb-1' size={20} />
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        {!validProductCardInclude() ? (
          <Button
            onClick={handleAddProduct}
            className='bg-blue-500 hover:bg-blue-400'
          >
            Agregar al carrito
          </Button>
        ) : (
          <Counter
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            count={productInCart?.quantity!}
          />
        )}
        {/* Aquí puedes incluir tu componente Counter si lo necesitas */}
      </CardFooter>
    </Card>
  );
};

export default CardProduct;
