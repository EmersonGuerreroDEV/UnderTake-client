'use client'
import { title } from 'process';
import { useQuery } from 'react-query';
import { ProductProp } from '~/core/interfaces/cart';
import ProductsRepository from '~/core/repositories/produtcs-repositorio';
import Title from '../../ui/title';
import Wrapper from '../../ui/wrapper';
import PromotionalCard from '../products/promotional-card';

interface MoreProps {
  title: string;
}
const More = ({ title }: MoreProps) => {

  const filter = title

  const {
    isLoading,
    refetch,
    data } = useQuery({
      queryKey: [`product_${title}`],
      queryFn: () => ProductsRepository.getProducts({filter}),
      onError: (err) => console.error(err)
    });


 
  if (isLoading || !data || data.length <= 0) return

  return (
    <div className='more mt-12'>
      <Wrapper>
        <div className=' w-full space-y-4'>
          <Title title={title} size='xl' />
          <div className=' grid w-full gap-4 md:grid-cols-2 md:gap-8  lg:grid-cols-4'>
            {data.map((product: ProductProp) => {
              return (
                <PromotionalCard product={product} title={title} key={product.id} />
              )
            })

            }
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default More;

const ProductsContent = ({ ...src }: any) => {

  return (
    <PromotionalCard title={title} product={src} className='padding-0 border-none shadow-none' />
  );
};