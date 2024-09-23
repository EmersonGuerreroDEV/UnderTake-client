'use client';
import { offerProducts } from '~/core/config/data';
import AltCarousel from '../../ui/alt-carousel';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { CarouselItem } from '../../ui/carousel';
import CardProduct from '../products/card';

const Other = () => {
  return (
    <Card className='w-ful'>
      <CardHeader>
        <CardTitle>Otras ofertas</CardTitle>
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
  );
};

export default Other;

const ProductsContent = ({ ...src }: any) => {
  return (
    <CarouselItem className='basis-1/5'>
      <CardProduct className='padding-0 border-none shadow-none' />
    </CarouselItem>
  );
};
