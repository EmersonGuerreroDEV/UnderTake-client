'use client';
import { offerProducts, responsiveOffers } from '~/core/config/data';
import AltCarousel from '../../ui/alt-carousel';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import CardProduct from '../products/card';

const Other = () => {
  return (
    <Card className='w-full overflow-hidden'>
      <CardHeader>
        <CardTitle className='text-orange-400'>Otras ofertas</CardTitle>
      </CardHeader>
      <CardContent className='w-full '>
        <AltCarousel
          autoPlay
          items={offerProducts}
          element={<ProductsContent />}
          timeSpeed={3000}
          infinite
          responsive={responsiveOffers}
        />
      </CardContent>
    </Card>
  );
};

export default Other;

const ProductsContent = ({ ...src }: any) => {
  return <CardProduct className='padding-0 border-none shadow-none' />;
};
