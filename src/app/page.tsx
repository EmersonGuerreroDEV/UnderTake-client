import Categories from '~/core/components/common/categories';
import InformationItems from '~/core/components/common/home/infomation-items';
import InitialBanner from '~/core/components/common/home/inital-banner';
import Offers from '~/core/components/common/home/offers';
import Trending from '~/core/components/common/home/trending';

const HomePage = () => {
  return (
    <main className='w-full bg-slate-100'>
      <InitialBanner />
      <InformationItems />
      <Offers />
      <Categories />
      <Trending />
    </main>
  );
};

export default HomePage;
