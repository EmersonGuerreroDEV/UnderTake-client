'use client';
import useProducts from '~/core/hooks/queries/use-products';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import CardProduct from '../products/card';

function OfferDay() {
  const { data } = useProducts();
  return (
    <Card className=' p-0  xl:w-96'>
      <CardHeader>
        <CardTitle className='text-xl'>Oferta del dia</CardTitle>
      </CardHeader>
      <CardContent className='p-0'>
        <CardProduct
          product={data?.[0]}
          className='border-none p-0 shadow-none'
        />
      </CardContent>
    </Card>
  );
}

export default OfferDay;
