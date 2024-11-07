'use client';
import useProducts from '~/core/hooks/queries/use-products';
import { ProductProp } from '~/core/interfaces/cart';
import Title from '../../ui/title';
import Wrapper from '../../ui/wrapper';
import CardProduct from '../products/card';

const ListProducts = () => {
  const { data } = useProducts();
  if (!data) return;
  return (
    <div className=' mt-4 w-full space-y-4 pb-8 md:mt-12'>
      <Wrapper>
        <div className='w-full space-y-4'>
          <Title title='Te va a gustar' size='xl' />

          <div className='grid grid-cols-2 gap-6 md:grid-cols-5'>
            {data.map((product: ProductProp) => {
              return <CardProduct product={product} key={product.id} />;
            })}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default ListProducts;
