import { useAtom } from 'jotai';
import { checkoutAtom } from '../atom/checkout';
import { Checkout } from '../interfaces/checkout';

const useCheckout = () => {
  const [checkout, setCheckout] = useAtom<Checkout | null>(checkoutAtom);

  return { checkout, setCheckout };
};

export default useCheckout;
