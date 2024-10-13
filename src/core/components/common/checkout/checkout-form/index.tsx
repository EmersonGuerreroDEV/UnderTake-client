import Wrapper from '~/core/components/ui/wrapper';
import eventBus from '~/core/hooks/use-event-bust';
import Details from '../cart/details';
import CheckoutForm from './checkout-form';

interface CheckoutStep {
  setStep: () => void;
}

const CheckoutStep = ({ setStep }: CheckoutStep) => {
  return (
    <div className='mt-8'>
      <Wrapper>
        <div className='flex w-full space-x-8 '>
          <CheckoutForm setStep={setStep} />
          <Details onClick={() => eventBus.emit('sendUserData')} />
        </div>
      </Wrapper>
    </div>
  );
};

export default CheckoutStep;
