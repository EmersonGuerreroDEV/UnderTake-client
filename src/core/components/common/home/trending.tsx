'use client';
import { offerProducts } from '~/core/config/data';
import AltCarousel from '../../ui/alt-carousel';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { CarouselItem } from '../../ui/carousel';
import Wrapper from '../../ui/wrapper';
import CardProduct from '../products/card';

const Trending = () => {
  return (
    <div className='mt-12'>
      <Wrapper>
        <Card className='w-ful'>
          <CardHeader>
            <CardTitle>Tendencia</CardTitle>
          </CardHeader>
          <CardContent className='w-full '>
            <AltCarousel
              autoPlay
              items={offerProducts}
              element={<ProductsContent />}
              timeSpeed={3000}
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
    <CarouselItem className='basis-1/5'>
      <CardProduct className='padding-0 border-none shadow-none' />
    </CarouselItem>
  );
};
