import {
  cloneElement,
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselNext,
  CarouselPrevious
} from './carousel';

import Autoplay from 'embla-carousel-autoplay';
import { twMerge } from 'tailwind-merge';

interface AltCarouselProps {
  arrows?: boolean;
  autoPlay?: boolean;
  timeSpeed?: number;
  items: any[];
  element: ReactElement;
  dot?: boolean;
}

const AltCarousel = ({
  arrows = false,
  autoPlay = false,
  timeSpeed = 5000,
  items = [],
  element,
  dot = false
}: AltCarouselProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(1);
  const plugin = useRef(
    Autoplay({ delay: timeSpeed, stopOnInteraction: true })
  );

  useEffect(() => {
    if (!api) {
      return;
    }
    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!api) return;
      api.scrollTo(index);
    },
    [api]
  );

  return (
    <div className='min-h-[300px] w-full'>
      <Carousel
        setApi={setApi}
        opts={{
          align: 'start'
        }}
        plugins={autoPlay ? [plugin.current] : []}
        className='xs:max-w-xs md:max-w-screen-xs mx-auto w-full lg:max-w-screen-2xl xl:max-w-screen-2xl'
      >
        <CarouselContent>
          {items.map((item: any, key: number) =>
            cloneElement(element, {
              ...item,
              dataKey: key,
              key
            })
          )}
        </CarouselContent>
        {dot && (
          <div className='mx-auto flex w-full justify-center space-x-4 py-4 md:py-8'>
            {items.map((item, key) => {
              return (
                <button
                  onClick={() => onDotButtonClick(key)}
                  className={twMerge(
                    `${key === current - 1 ? 'border-gray-800 shadow-xl' : 'border-gray-400'} h-3 w-3 rounded-full border-2`
                  )}
                  key={key}
                />
              );
            })}
          </div>
        )}
        {arrows && (
          <>
            <CarouselPrevious className='hidden md:block' />
            <CarouselNext className='hidden md:block' />
          </>
        )}
      </Carousel>
    </div>
  );
};

export default AltCarousel;
