'use client';
import { BadgeCheckIcon, Star, TruckIcon } from 'lucide-react';
import { useContext, useMemo } from 'react';
import Payments from '~/core/components/common/payments';
import Counter from '~/core/components/common/products/counter';
import { Button } from '~/core/components/ui/button';
import { Card, CardContent, CardTitle } from '~/core/components/ui/card';
import Wrapper from '~/core/components/ui/wrapper';
import { CartContext } from '~/core/providers/store-provider';
import Helpers from '~/core/utils/helpers';

const Product = () => {
  const product = {
    id: 2,
    name: 'Xiaomi Redmi Note 13 Lite 4G Dual SIM 128 GB gris 6 GB RAM',
    image: '/assets/images/products/phone.webp',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio accusamus accusantium, eius omnis dolorem quia vitae quidem vero fuga illum exercitationem.',
    price: 700000,
    discount: 10,
    quantity: 1
  };

  const { cart, addProduct, updateQuantity } = useContext(CartContext);
  const handleAddProduct = () => {
    addProduct(product);
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
    <div className='di'>
      <Wrapper className='px-32'>
        <div className='mx-auto mt-24 flex w-full gap-8 '>
          <div className='min-h-[400px] w-full bg-blue-400'>ddsdds</div>
          <div className='flex w-[400px] justify-end '>
            <Card className='w-[400px] rounded-lg border'>
              <CardContent className='space-y-2'>
                <CardTitle className='text-orange-400'>
                  Nombre del producto
                </CardTitle>
                <p className='text-gray-500'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
                  accusamus accusantium, eius omnis dolorem quia vitae quidem
                  vero fuga illum exercitationem.
                </p>
                <div className='flex items-center'>
                  <span>{5}</span> <Star className='pb-1' size={20} />
                  <span className='ml-3 text-xs'>40 opiniones</span>
                </div>
                <div className='space-y-1'>
                  <div className='flex items-center space-x-2'>
                    <div className='rounded-lg bg-orange-400 p-0.5 px-4 text-white'>
                      <span>10%</span>
                    </div>
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
                <div className='space-y-2 py-8'>
                  <h2 className=' font-semibold'>Información de adicional</h2>
                  <div className='flex items-center space-x-1 text-sm font-light'>
                    <BadgeCheckIcon size={16} />
                    <span>Garantía por un año</span>
                  </div>
                  <div className='flex items-center space-x-1 text-sm font-light'>
                    <TruckIcon size={16} />
                    <span>Envío hasta la puerta de tu casa</span>
                  </div>
                </div>
                <Counter
                  onIncrement={handleIncrement}
                  onDecrement={handleDecrement}
                  count={productInCart?.quantity!}
                />
                <Button
                  onClick={handleAddProduct}
                  className='bg-blue-500 hover:bg-blue-400'
                >
                  Agregar al carrito
                </Button>
                <Payments />
              </CardContent>
            </Card>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Product;
