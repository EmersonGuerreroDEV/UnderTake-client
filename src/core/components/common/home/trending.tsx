'use client';
import { offerProducts, responsiveTrending } from '~/core/config/data';
import AltCarousel from '../../ui/alt-carousel';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import Wrapper from '../../ui/wrapper';
import CardProduct from '../products/card';

const Trending = () => {
  return (
    <div className='mt-8'>
      <Wrapper>
        <Card className='w-full'>
          <CardHeader>
            <CardTitle className='text-orange-400'>Tendencia</CardTitle>
          </CardHeader>
          <CardContent className='w-full '>
            <AltCarousel
              autoPlay
              items={offerProducts}
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
  return <CardProduct className='padding-0 border-none shadow-none' />;
};
