'use client';
import { useContext, useState } from 'react';
import RegisterForm from '~/core/components/common/auth/register';
import Cart from '~/core/components/common/checkout/cart';
import Details from '~/core/components/common/checkout/cart/details';
import EmptyCart from '~/core/components/common/checkout/empty-cart';
import TimeLine from '~/core/components/common/checkout/time-line/time-line';
import { UserContext } from '~/core/providers/user-provider';

const CheckoutPage = () => {
  const { user } = useContext(UserContext);
  const [step, setStep] = useState<number>(1);
  return (
    <div className='pb-12'>
      <TimeLine setStep={(step: number) => setStep(step)} />
      <EmptyCart />
      {step === 1 && <Cart setStep={() => setStep(2)} />}
      {step === 2 && (
        <div className='flex w-full justify-center'>
          <RegisterForm />
          <Details />
        </div>
      )}
      {step === 3 && <div>datos de envio</div>}
    </div>
  );
};

export default CheckoutPage;
