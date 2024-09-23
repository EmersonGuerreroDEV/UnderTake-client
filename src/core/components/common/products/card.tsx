import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import Helpers from '~/core/utils/helpers';
import { Card, CardContent } from '../../ui/card';

interface CardProps {
  className?: string;
}

const CardProduct = ({ className }: CardProps) => {
  return (
    <Card className={twMerge(className, '')}>
      <CardContent className='relative w-64'>
        <div className='absolute right-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-orange-400 p-4 font-bold text-white'>
          10%
        </div>
        <Image
          src='/assets/images/products/phone.webp'
          width={360}
          height={360}
          alt='product'
        />
        <h2 className=' text-sm font-medium text-blue-500'>
          Xiaomi Redmi Note 13 4G Dual SIM 256 GB negro 8 GB RAM
        </h2>
        <div className='mt-1 flex items-center space-x-2'>
          <p className='text-sm text-gray-400'>Antes</p>
          <p className='font-light text-red-300 line-through opacity-80'>
            {Helpers.formatCurrency(800000)}
          </p>
        </div>{' '}
        <div className='mt-2 flex items-center space-x-2'>
          <p className=' text-2xl font-medium text-gray-600 '>
            {Helpers.formatCurrency(900000)}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardProduct;
