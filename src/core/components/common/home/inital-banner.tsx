'use client';
import { bannerHome } from '~/core/config/data';
import AltCarousel from '../../ui/alt-carousel';
import { CarouselItem } from '../../ui/carousel';

const InitialBanner = () => {
  return (
    <div className=' w-full lg:min-h-[758px]'>
      <AltCarousel autoPlay items={bannerHome} element={<BannerImage />} />
    </div>
  );
};

export default InitialBanner;

const BannerImage = ({ ...src }: any) => {
  return (
    <CarouselItem className='w-full'>
      <img
        alt={src?.image}
        src={src?.image}
        style={{ objectFit: 'contain' }}
        className='hidden w-full md:block'
        width={1920}
        height={800}
      />
    </CarouselItem>
  );
};
