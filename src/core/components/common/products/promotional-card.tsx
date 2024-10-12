import Image from 'next/image';
import { Card, CardContent } from '../../ui/card';

const PromotionalCard = () => {
  return (
    <Card className='w-full rounded-lg bg-opacity-5 bg-orange bg-no-repeat object-cover px-4 py-8 shadow-lg'>
      <CardContent className='grid w-full grid-cols-2 gap-4 p-0'>
        <div className='w-full'>
          <h2 className=' text-center text-lg font-medium text-gray-500'>
            Celulares
          </h2>
          <div className='flex h-24 w-full flex-col items-center justify-center  rounded-sm bg-orange-400/70 text-3xl text-white'>
            <p className='font-bold'>20%</p>
            <p className='font-extralight'>Dcto</p>
          </div>
        </div>
        <div>
          <Image
            src='/assets/images/products/phone.webp'
            width={100}
            height={100}
            alt='product'
            className=''
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default PromotionalCard;
