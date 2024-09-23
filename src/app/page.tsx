import InformationItems from '~/core/components/common/home/infomation-items';
import InitialBanner from '~/core/components/common/home/inital-banner';
import Offers from '~/core/components/common/home/offers';

const HomePage = () => {
  return (
    <main className='w-full'>
      <InitialBanner />
      <InformationItems />
      <Offers />
    </main>
  );
};

export default HomePage;
