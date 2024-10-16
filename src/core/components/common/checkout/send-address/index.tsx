import { useContext } from 'react';
import Wrapper from '~/core/components/ui/wrapper';
import eventBus from '~/core/hooks/use-event-bust';
import { UserContext } from '~/core/providers/user-provider';
import Details from '../cart/details';
import MyAddresses from './my-addresses';
import SendAddressForm from './send-address-form';

interface SendAddressProps {
  setStep: () => void;
}

const SendAddressStep = ({ setStep }: SendAddressProps) => {
  const { user } = useContext(UserContext);
  return (
    <div className='mt-8'>
      <Wrapper>
        <div className='flex w-full space-x-8 '>
          <div className='w-full'>
            <SendAddressForm onSend={setStep} />
            <MyAddresses />
          </div>
          <Details onClick={() => eventBus.emit('sendUserAddress')} />
        </div>
      </Wrapper>
    </div>
  );
};

export default SendAddressStep;
