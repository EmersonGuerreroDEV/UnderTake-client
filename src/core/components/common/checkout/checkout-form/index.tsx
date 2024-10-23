import Wrapper from '~/core/components/ui/wrapper';
import eventBus from '~/core/hooks/use-event-bust';
import Details from '../cart/details';
import CheckoutForm from './checkout-form';

interface CheckoutStep {
  setStep: () => void;
  isLoading: boolean;
  setIsLoading: (e:boolean)=>void
} 

const CheckoutStep = ({ setStep , isLoading, setIsLoading}: CheckoutStep) => {
  return (
    <div className='mt-8'>
      <Wrapper>
        <div className='flex w-full space-x-8 '>
          <CheckoutForm isLoading={(state)=>setIsLoading(state)} setStep={setStep} />
          <Details onClick={() => eventBus.emit('sendUserData')} />
        </div>
      </Wrapper>
    </div>
  );
};

export default CheckoutStep;
