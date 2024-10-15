import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';

function OfferDay() {
  const product = {
    id: 2,
    name: 'Xiaomi Redmi Note 13 Lite 4G Dual SIM 128 GB gris 6 GB RAM',
    image: '/assets/images/products/phone.webp',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio accusamus accusantium, eius omnis dolorem quia vitae quidem vero fuga illum exercitationem.',
    price: 700000,
    discount: 10,
    quantity: 1
  };
  return (
    <Card className=' p-0  xl:w-96'>
      <CardHeader>
        <CardTitle className='text-xl'>Oferta del dia</CardTitle>
      </CardHeader>
      <CardContent className='p-0'>
        {/* <CardProduct
          product={product}
          className='border-none p-0 shadow-none'
        /> */}
      </CardContent>
    </Card>
  );
}

export default OfferDay;
