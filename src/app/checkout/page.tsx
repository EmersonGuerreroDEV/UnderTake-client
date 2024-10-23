'use client';
import { useContext, useState } from 'react';
import Cart from '~/core/components/common/checkout/cart';
import CheckoutStep from '~/core/components/common/checkout/checkout-form';
import EmptyCart from '~/core/components/common/checkout/empty-cart';
import PaymentsStep from '~/core/components/common/checkout/payments';
import SendAddressStep from '~/core/components/common/checkout/send-address';
import TimeLine from '~/core/components/common/checkout/time-line/time-line';
import { UserContext } from '~/core/providers/user-provider';

const CheckoutPage = () => {
  const { user } = useContext(UserContext);
  const [step, setStep] = useState<number>(1);
  const [isLoading, setIsLoading] = useState(false)
  return (
    <div className='pb-12'>
      <TimeLine step={step} setStep={(step: number) => setStep(step)} />
      <EmptyCart />
      {step === 1 && <Cart setStep={() => setStep(2)} />}
      {step === 2 && <CheckoutStep isLoading={isLoading} setIsLoading={(state)=>setIsLoading(state)} setStep={() => setStep(3)} />}
      {step === 3 && <SendAddressStep isLoading={isLoading} setIsLoading={(state)=>setIsLoading(state)}  setStep={() => setStep(4)} />}
      {step === 4 && <PaymentsStep />}
    </div>
  );
};

export default CheckoutPage;
