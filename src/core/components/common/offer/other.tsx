'use client';
import { responsiveOffers } from '~/core/config/data';
import useProducts from '~/core/hooks/queries/use-products';
import AltCarousel from '../../ui/alt-carousel';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import CardProduct from '../products/card';

const Other = () => {
  const { data } = useProducts();

  return (
    <Card className='w-full overflow-hidden'>
      <CardHeader>
        <CardTitle className='text-xl font-medium uppercase text-gray-500'>
          Otras ofertas
        </CardTitle>
      </CardHeader>
      <CardContent className='w-full  px-0'>
        <AltCarousel
          autoPlay
          items={data}
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
