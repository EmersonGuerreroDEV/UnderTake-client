import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import CardProduct from '../products/card';

function OfferDay() {
  return (
    <Card className=' p-0  xl:w-96'>
      <CardHeader>
        <CardTitle className='text-xl'>Oferta del dia</CardTitle>
      </CardHeader>
      <CardContent className='p-0'>
        <CardProduct className='border-none p-0 shadow-none' />
      </CardContent>
    </Card>
  );
}

export default OfferDay;
