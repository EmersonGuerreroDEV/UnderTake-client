import Title from '~/core/components/ui/title';
import eventBus from '~/core/hooks/use-event-bust';
import Details from '../cart/details';
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
  return (
    <div className='mt-4 w-full space-y-4'>
      <Title title='Datos de envío' />
      <div className='flex w-full space-x-8 '>
        <div className='w-full'>
          <SendAddressForm
            isLoading={isLoading}
            setIsLoading={(state: boolean) => setIsLoading(state)}
            onSend={setStep}
            widthTitle={false}
          />
          {/* <MyAddresses /> */}
        </div>
        <Details onClick={() => eventBus.emit('sendUserAddress')} />
      </div>
    </div>
  );
};

export default SendAddressStep;
