import Image from 'next/image';
import { ProductProp } from '~/core/interfaces/cart';
import { Card, CardContent } from '../../ui/card';

interface CardProps {
  className?: string;
  product: ProductProp;
  title: string;
}

const PromotionalCard = ({ product, className, title }: CardProps) => {
  const flirtsImage = product?.variants?.[0]?.image;

  if (!product) return;
  return (
    <Card className='w-full rounded-lg bg-opacity-5 bg-orange bg-no-repeat object-cover px-4 py-8 shadow-lg'>
      <CardContent className='grid w-full grid-cols-2 gap-4 p-0'>
        <div className='w-full'>
          <h2 className=' text-center text-lg font-medium text-gray-500'>
            {title}
          </h2>

          {product?.discount > 0 && (
            <div className='flex h-24 w-full flex-col items-center justify-center  rounded-sm bg-orange-400/70 text-3xl text-white'>
              <>
                {' '}
                <p className='font-bold'> {product.discount}%</p>
                <p className='font-extralight'>Dcto</p>{' '}
              </>
            </div>
          )}
        </div>
        <div>
          <Image
            src={flirtsImage}
            width={400}
            height={400}
            alt={product.name}
            className='w-full'
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default PromotionalCard;
