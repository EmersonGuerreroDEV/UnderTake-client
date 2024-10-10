'use client';
import { offerProducts, responsiveOffers } from '~/core/config/data';
import AltCarousel from '../../ui/alt-carousel';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import CardProduct from '../products/card';

const Other = () => {
  return (
    <Card className='w-full overflow-hidden'>
      <CardHeader>
        <CardTitle className='text-xl'>Otras ofertas</CardTitle>
      </CardHeader>
      <CardContent className='w-full  px-0'>
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

const ProductsContent = ({ ...resp }: any) => {
  return <CardProduct className='p-0  shadow-none' product={resp} />;
};
