import BlackFridayBanner from '~/core/components/common/banner';
import Categories from '~/core/components/common/categories';
import FirstPurchaseBanner from '~/core/components/common/firts-purchase';
import InformationItems from '~/core/components/common/home/infomation-items';
import InitialBanner from '~/core/components/common/home/inital-banner';
import ListProducts from '~/core/components/common/home/list-products';
import More from '~/core/components/common/home/more';
import Offers from '~/core/components/common/home/offers';
import Trending from '~/core/components/common/home/trending';
import Payments from '~/core/components/common/payments';
import SelectedProducts from '~/core/components/common/profile/account/selected-products';
import Wrapper from '~/core/components/ui/wrapper';

const HomePage = () => {
  return (
    <main className='w-full '>
      <InitialBanner />
      <InformationItems />
      <Offers />
      <Categories />
      <Trending />
      <Wrapper>
        <BlackFridayBanner />
      </Wrapper>

      <More title='Celulares' />
      <Wrapper>
        <div className='mt-8 grid w-full gap-2   overflow-hidden md:grid-cols-2 md:gap-6'>
          <FirstPurchaseBanner />
          <SelectedProducts />
        </div>
      </Wrapper>
      <More title='Computadores' />
      <Payments />
      <ListProducts />
    </main>
  );
};

export default HomePage;
