import Wrapper from '~/core/components/ui/wrapper';
import eventBus from '~/core/hooks/use-event-bust';
import Details from '../cart/details';
import SendAddressForm from './send-address-form';

interface SendAddressProps {
  setStep: () => void;
}

const SendAddressStep = ({ setStep }: SendAddressProps) => {
  return (
    <div className='mt-8'>
      <Wrapper>
        <div className='flex w-full space-x-8 '>
          <SendAddressForm onSend={setStep} />
          <Details onClick={() => eventBus.emit('sendUserAddress')} />
        </div>
      </Wrapper>
    </div>
  );
};

export default SendAddressStep;
