import Wrapper from '../../ui/wrapper';
import OfferDay from '../offer/offer-day';
import Other from '../offer/other';

const Offers = () => {
  return (
    <section className='py-8'>
      <Wrapper>
        <div className='flex w-full flex-col space-y-4 overflow-hidden lg:flex-row lg:space-x-4 lg:space-y-0'>
          <OfferDay />
          <Other />
        </div>
      </Wrapper>
    </section>
  );
};

export default Offers;
