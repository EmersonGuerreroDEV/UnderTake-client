'use client';
import { useState } from 'react';
import Cart from '~/core/components/common/checkout/cart';
import CheckoutStep from '~/core/components/common/checkout/checkout-form';
import EmptyCart from '~/core/components/common/checkout/empty-cart';
import PaymentsStep from '~/core/components/common/checkout/payments';
import SendAddressStep from '~/core/components/common/checkout/send-address';
import TimeLine from '~/core/components/common/checkout/time-line/time-line';
import Payments from '~/core/components/common/payments';
import Wrapper from '~/core/components/ui/wrapper';

const CheckoutPage = () => {
  const [step, setStep] = useState<number>(1);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className='mt-24 pb-12'>
      <TimeLine step={step} setStep={(step: number) => setStep(step)} />
      <EmptyCart />
      <Wrapper>
        <div className='mx-auto w-full lg:px-24'>
          {step === 1 && <Cart setStep={() => setStep(2)} />}
          {step === 2 && (
            <CheckoutStep
              isLoading={isLoading}
              setIsLoading={(state) => setIsLoading(state)}
              setStep={() => setStep(3)}
            />
          )}
          {step === 3 && (
            <SendAddressStep
              isLoading={isLoading}
              setIsLoading={(state) => setIsLoading(state)}
              setStep={() => setStep(4)}
            />
          )}
          {step === 4 && <PaymentsStep />}
          <div className='mt-4'>
            <Payments />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default CheckoutPage;
