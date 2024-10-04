'use client';
import { useState } from 'react';
import Cart from '~/core/components/common/checkout/cart';
import EmptyCart from '~/core/components/common/checkout/empty-cart';
import TimeLine from '~/core/components/common/checkout/time-line/time-line';

const CheckoutPage = () => {
  const [step, setStep] = useState<number>(1);
  return (
    <div className='pb-12'>
      <TimeLine />
      <EmptyCart />
      {step === 1 && <Cart />}
    </div>
  );
};

export default CheckoutPage;
