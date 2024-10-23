'use client';
import { responsiveTrending } from '~/core/config/data';
import useProducts from '~/core/hooks/queries/use-products';
import AltCarousel from '../../ui/alt-carousel';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import Wrapper from '../../ui/wrapper';
import CardProduct from '../products/card';

const Trending = () => {

  const { data, isLoading } = useProducts('trending')

  if (isLoading) return

  return (
    <div className='mt-8'>
      <Wrapper>
        <Card className='w-full'>
          <CardHeader>
            <CardTitle className='text-xl'>Tendencia</CardTitle>
          </CardHeader>
          <CardContent className='w-full '>
            <AltCarousel
              autoPlay
              items={data}
              element={<ProductsContent />}
              timeSpeed={3000}
              infinite
              responsive={responsiveTrending}
            />
          </CardContent>
        </Card>
      </Wrapper>
    </div>
  );
};

export default Trending;

const ProductsContent = ({ ...src }: any) => {
  return (
    <CardProduct product={src} className='padding-0 border-none shadow-none' />
  );
};
