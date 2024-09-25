import Categories from '~/core/components/common/categories';
import InformationItems from '~/core/components/common/home/infomation-items';
import InitialBanner from '~/core/components/common/home/inital-banner';
import More from '~/core/components/common/home/more';
import Offers from '~/core/components/common/home/offers';
import Trending from '~/core/components/common/home/trending';
import Wrapper from '~/core/components/ui/wrapper';

const HomePage = () => {
  return (
    <main className='w-full bg-slate-100'>
      <InitialBanner />
      <InformationItems />
      <Offers />
      <Categories />
      <Trending />
      <Wrapper>
        <div className='mt-8 grid min-h-64 w-full place-content-center rounded-lg bg-gray-400'>
          <p>Banner publicitario</p>
        </div>
      </Wrapper>
      <More />
    </main>
  );
};

export default HomePage;
