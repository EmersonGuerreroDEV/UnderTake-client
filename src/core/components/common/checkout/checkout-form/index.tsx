import { useContext } from 'react';
import Title from '~/core/components/ui/title';
import eventBus from '~/core/hooks/use-event-bust';
import { UserContext } from '~/core/providers/user-provider';
import Details from '../cart/details';
import CheckoutForm from './checkout-form';

interface CheckoutStep {
  setStep: () => void;
  isLoading: boolean;
  setIsLoading: (e: boolean) => void;
}

const CheckoutStep = ({ setStep, isLoading, setIsLoading }: CheckoutStep) => {
  const { user } = useContext(UserContext);
  return (
    <div className='mt-4 w-full space-y-4'>
      <Title title={user ? 'Actualiza tus datos' : 'Registra una cuenta'} />
      <div className='flex w-full space-x-8 '>
        <CheckoutForm
          isLoading={(state) => setIsLoading(state)}
          setStep={setStep}
          widthTitle={false}
        />
        <Details
          isLoading={isLoading}
          onClick={() => eventBus.emit('sendUserData')}
        />
      </div>
    </div>
  );
};

export default CheckoutStep;
