import { cn } from '~/core/config/utils';
import usePaymentMethods from '~/core/hooks/queries/use-payment-methods';
import useCheckout from '~/core/hooks/use-checkout';
import { PaymentsProps } from '~/core/interfaces/interface';
import { Button } from '../../../ui/button';

const PaymentMethods = () => {
  const { paymentsMethods } = usePaymentMethods();
  const { setCheckout, checkout } = useCheckout();

  const handlePaymentSelect = (paymentMethod_: PaymentsProps) => {
    setCheckout({
      ...checkout,
      paymentMethod: paymentMethod_
    });
  };

  return (
    <div className='mt-10 w-full'>
      <p className='text-center text-lg font-semibold text-black'>
        Selecciona método de pago
      </p>
      <fieldset disabled={false}>
        <div className='mt-4 w-full space-y-6'>
          {paymentsMethods?.map((item: PaymentsProps) => {
            return (
              <div key={item.id}>
                <Button
                  type='button'
                  onClick={() => handlePaymentSelect(item)}
                  // className={`${paymentMethodSelected?._id === item._id ? 'border border-opacity-80 bg-slate-100 opacity-80' : 'bg-white text-black'} h-14 w-full rounded-full hover:bg-slate-100 hover:opacity-80`}
                  className={cn(
                    'h-14 w-full rounded-lg capitalize text-black hover:bg-slate-100 hover:opacity-80',
                    checkout?.paymentMethod?.id === item.id
                      ? 'border border-blue-400 bg-slate-200 opacity-80'
                      : 'border-gray-400 bg-white text-black'
                  )}
                >
                  {item.name}
                </Button>
              </div>
            );
          })}
        </div>
      </fieldset>

      <hr className='mt-8 block h-0.5 bg-black lg:hidden' />
    </div>
  );
};

export default PaymentMethods;
