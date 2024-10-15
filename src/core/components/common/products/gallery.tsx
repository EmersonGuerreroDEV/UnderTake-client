import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Variant } from '~/core/interfaces/products';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '../../ui/carousel';

interface GalleryProps {
  variant: Variant[];
  setVariant: (variant: Variant) => void;
}

const Gallery = ({ variant, setVariant }: GalleryProps) => {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));
  const [api, setApi] = useState<CarouselApi>();

  const onDotButtonClick = useCallback(
    (index: number, variant: Variant) => {
      if (!api) return;
      api.scrollTo(index);
      setVariant(variant);
    },
    [api]
  );

  useEffect(() => {
    setVariant(variant[0]);
  }, [variant]);

  return (
    <div className='mx-auto flex w-[800px] space-x-8'>
      <div className='grid w-44 '>
        {variant?.map((item, index) => {
          return (
            <button
              key={item.id}
              className=''
              onClick={() => onDotButtonClick(index, item)}
            >
              <Image
                src={item.image}
                width={100}
                height={100}
                alt={item.image}
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
            {variant?.map((item) => {
              return (
                <CarouselItem key={item?.id} className=' '>
                  <Image
                    src={item.image}
                    width={460}
                    height={460}
                    alt={item.image}
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
