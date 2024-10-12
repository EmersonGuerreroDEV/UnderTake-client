import Wrapper from '~/core/components/ui/wrapper';
import Details from '../cart/details';
import CheckoutForm from './checkout-form';

const CheckoutStep = () => {
  return (
    <div className='mt-8'>
      <Wrapper>
        <div className='flex w-full space-x-8 '>
          <CheckoutForm />
          <Details onClick={() => {}} />
        </div>
      </Wrapper>
    </div>
  );
};

export default CheckoutStep;
