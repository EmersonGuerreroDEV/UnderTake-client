import { useContext } from 'react';
import Wrapper from '~/core/components/ui/wrapper';
import eventBus from '~/core/hooks/use-event-bust';
import { UserContext } from '~/core/providers/user-provider';
import Details from '../cart/details';
import MyAddresses from './my-addresses';
import SendAddressForm from './send-address-form';

interface SendAddressProps {
  setStep: () => void;
  setIsLoading: (state: boolean) => void;
  isLoading: boolean;
}

const SendAddressStep = ({
  setStep,
  setIsLoading,
  isLoading
}: SendAddressProps) => {
  const { user } = useContext(UserContext);
  return (
    <div className='mt-8'>
      <Wrapper>
        <div className='flex w-full space-x-8 '>
          <div className='w-full'>
            <SendAddressForm
              isLoading={isLoading}
              setIsLoading={(state: boolean) => setIsLoading(state)}
              onSend={setStep}
            />
            <MyAddresses />
          </div>
          <Details onClick={() => eventBus.emit('sendUserAddress')} />
        </div>
      </Wrapper>
    </div>
  );
};

export default SendAddressStep;
