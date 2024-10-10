import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { useCallback, useRef, useState } from 'react';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '../../ui/carousel';
const Gallery = () => {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));
  const [api, setApi] = useState<CarouselApi>();

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!api) return;
      api.scrollTo(index);
    },
    [api]
  );
  return (
    <div className='mx-auto flex w-[800px] space-x-8'>
      <div className='grid w-44 '>
        {[...Array(3)].map((item, index) => {
          return (
            <button
              key={index}
              className=''
              onClick={() => onDotButtonClick(index)}
            >
              <Image
                src='/assets/images/products/phone.webp'
                width={100}
                height={100}
                alt='product'
                className='mx-auto'
              />
            </button>
          );
        })}
      </div>
      <div className='flex w-full justify-center'>
        <Carousel
          setApi={setApi}
          plugins={[plugin.current]}
          className='mx-auto w-full max-w-[450px] xl:max-w-screen-xl'
        >
          <CarouselContent>
            {[...Array(3)].map((item, index) => {
              return (
                <CarouselItem key={index} className=' '>
                  <Image
                    src='/assets/images/products/phone.webp'
                    width={460}
                    height={460}
                    alt='product'
                    className='mx-auto'
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Gallery;
