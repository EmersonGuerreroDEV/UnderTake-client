import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import CardProduct from '../products/card';

function OfferDay() {
  return (
    <Card className='lg:w-72'>
      <CardHeader>
        <CardTitle className='text-orange-400'>Oferta del dia</CardTitle>
      </CardHeader>
      <CardContent>
        <CardProduct className='padding-0 border-none shadow-none' />
      </CardContent>
    </Card>
  );
}

export default OfferDay;
