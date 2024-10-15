import { useContext } from 'react';
import useCart from '~/core/components/hooks/use-cart';
import { Card } from '~/core/components/ui/card';
import Wrapper from '~/core/components/ui/wrapper';
import usePurchase from '~/core/hooks/queries/use-purchase';
import useCheckout from '~/core/hooks/use-checkout';
import { UserContext } from '~/core/providers/user-provider';
import Details from '../cart/details';
import PaymentMethods from './payment-method';

const PaymentsStep = () => {
  const { user } = useContext(UserContext);
  const { checkout } = useCheckout();
  const { cart, subTotalCalcule } = useCart();
  const { handleSendPurchase } = usePurchase();

  const onPurchase = () => {
    if (!checkout?.paymentMethod) return;
    if (!user?.id) return;
    if (!checkout.sendAddress?.city) return;

    const payload = {
      total: subTotalCalcule(),
      userId: user?.id,
      statusId: 1,
      paymentMethod: parseInt(checkout?.paymentMethod?.id),
      cityId: checkout?.sendAddress?.city,
      address: checkout?.sendAddress?.address,
      orderDetails: cart
    };
    //@ts-ignore
    handleSendPurchase(payload);
  };

  return (
    <div>
      <Wrapper>
        <div className='mt-4 w-full lg:px-24'>
          <h1 className='py-4 text-center text-xl font-semibold'>
            Carro de compra
          </h1>
          <div className='flex w-full flex-col space-x-0 lg:flex-row lg:space-x-8'>
            <Card className='w-full bg-slate-100 px-8'>
              <PaymentMethods />
            </Card>

            <Details onClick={onPurchase} />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default PaymentsStep;
