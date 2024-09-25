'use client';
import { bannerHome, responsiveBannerHome } from '~/core/config/data';
import AltCarousel from '../../ui/alt-carousel';

const InitialBanner = () => {
  return (
    <div className=' w-full lg:min-h-[758px]'>
      <AltCarousel
        autoPlay
        timeSpeed={5000}
        items={bannerHome}
        element={<BannerImage />}
        responsive={responsiveBannerHome}
        infinite
      />
    </div>
  );
};

export default InitialBanner;

const BannerImage = ({ ...src }: any) => {
  return (
    <img
      alt={src?.image}
      src={src?.image}
      style={{ objectFit: 'contain' }}
      className='hidden w-full md:block'
      width={1920}
      height={800}
    />
  );
};
