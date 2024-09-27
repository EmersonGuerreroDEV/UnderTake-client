import Categories from '~/core/components/common/categories';
import InformationItems from '~/core/components/common/home/infomation-items';
import InitialBanner from '~/core/components/common/home/inital-banner';
import More from '~/core/components/common/home/more';
import Offers from '~/core/components/common/home/offers';
import Trending from '~/core/components/common/home/trending';
import Payments from '~/core/components/common/payments';
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

      <More title='Celulares' />
      <Wrapper>
        <div className='grid w-full grid-cols-2 gap-6 overflow-hidden'>
          <div className='mt-8 min-h-64 w-full rounded-lg bg-banner1 bg-cover bg-center' />

          <div className='mt-8 min-h-64 w-full rounded-lg bg-banner2 bg-cover bg-center' />
        </div>
      </Wrapper>
      <More title='Computadores' />
      <Payments />
    </main>
  );
};

export default HomePage;
