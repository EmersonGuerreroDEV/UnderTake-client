import InformationItems from '~/core/components/common/home/infomation-items';
import InitialBanner from '~/core/components/common/home/inital-banner';

const HomePage = () => {
  return (
    <main className='w-full'>
      <InitialBanner />
      <InformationItems />
    </main>
  );
};

export default HomePage;
