import { cloneElement, ReactElement } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

interface AltCarouselProps {
  arrows?: boolean;
  autoPlay?: boolean;
  timeSpeed?: number;
  items: any[];
  element: ReactElement;
  dot?: boolean;
  responsive: any;
  infinite?: boolean;
}

const AltCarousel = ({
  arrows = false,
  autoPlay = false,
  timeSpeed = 5000,
  items = [],
  element,
  responsive,
  infinite = false,
  dot = false
}: AltCarouselProps) => {
  return (
    <div className='min-h-[300px] w-full'>
      <Carousel
        className='w-full'
        responsive={responsive}
        autoPlay={autoPlay}
        autoPlaySpeed={timeSpeed}
        arrows={arrows}
        infinite={infinite}
        containerClass='w-full'
        itemClass='px-1'
      >
        {items.map((item: any, key: number) =>
          cloneElement(element, {
            ...item,
            dataKey: key,
            key
          })
        )}
        {/*   
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
        )} */}
        {/* {arrows && (
          <>
            <CarouselPrevious className='hidden md:block' />
            <CarouselNext className='hidden md:block' />
          </>
        )} */}
      </Carousel>
    </div>
  );
};

export default AltCarousel;
