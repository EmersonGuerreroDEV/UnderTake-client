'use client';
import { ShoppingCartIcon, Star } from 'lucide-react';
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
    addProduct({
      ...product,
      quantity: 1,
      variantId: product.variants[0].id,
      productId: product.id
    });
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

  const discountCalcule = () => {
    if (product.discount <= 0) return product.price;
    const total = (product.price * product.discount) / 100;
    return total;
  };

  const flirtsImage = product?.variants?.[0]?.image;

  if (!product) return;

  return (
    <Card
      className={twMerge(
        className,
        'mx-auto my-2 border border-gray-100 bg-white p-0 shadow-lg'
      )}
    >
      <CardContent
        onClick={() => router.push(`product/${product?.id}`)}
        className='lg:wp-64'
      >
        <div className='relative flex w-full flex-col items-center'>
          {product.discount > 0 && (
            <div className='absolute  right-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-orange-400/80 px-4 font-bold text-white'>
              {product.discount}%
            </div>
          )}
          <div className='absolute bottom-0 flex min-h-8 w-full items-center justify-center rounded-t-lg bg-orange-400/90 text-sm font-normal text-white'>
            Tecnología
          </div>
          <div className='h-52 overflow-hidden'>
            <Image
              src={flirtsImage}
              width={360}
              height={360}
              alt='product'
              className='bg-center object-contain'
            />
          </div>
        </div>
        <span className=' mt-1 text-xs font-light uppercase text-gray-400'>
          {product?.brand?.name}
        </span>
        <h2 className='hideLine2 mt-1 h-10 text-sm font-medium uppercase text-blue-500'>
          {product?.name}{' '}
          {/* Asumiendo que `product` tiene una propiedad `name` */}
        </h2>

        <div className='mt-4 flex h-10 items-end justify-between'>
          <div>
            {product.discount > 0 && (
              <div className='flex items-center space-x-2'>
                <p className='text-sm text-gray-400'>Antes</p>
                <p className='text-sm font-light text-red-300 line-through opacity-80 md:text-sm'>
                  {Helpers.formatCurrency(discountCalcule())}{' '}
                  {/* Asumiendo `oldPrice` en `product` */}
                </p>
              </div>
            )}
            <div className='-mt-1 flex items-center space-x-2'>
              <p className='text-lg font-medium text-gray-600 md:text-2xl'>
                {Helpers.formatCurrency(product.price)}
              </p>
            </div>
          </div>
          <div className='flex items-center space-x-2 pb-1 text-orange-400'>
            <div className='flex items-center'>
              <span>{product.rating || 5}</span>{' '}
              <Star className='pb-1' size={20} />
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className='w-full  px-4'>
        {!validProductCardInclude() ? (
          <Button onClick={handleAddProduct} className='w-full rounded-none'>
            Agregar al carrito{' '}
            <ShoppingCartIcon className='pl-2' size={30} strokeWidth={1} />
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
