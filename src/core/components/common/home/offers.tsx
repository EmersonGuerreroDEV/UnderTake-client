import Wrapper from '../../ui/wrapper';
import OfferDay from '../offer/offer-day';
import Other from '../offer/other';

const Offers = () => {
  return (
    <section className='py-8 '>
      <Wrapper>
        <div className='flex w-full space-x-4 overflow-hidden'>
          <OfferDay />
          <Other />
        </div>
      </Wrapper>
    </section>
  );
};

export default Offers;
