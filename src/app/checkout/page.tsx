import Cart from '~/core/components/common/checkout/cart';
import EmptyCart from '~/core/components/common/checkout/empty-cart';
import PurchaseDetails from '~/core/components/common/checkout/purchase-details';
import TimeLine from '~/core/components/common/checkout/time-line/time-line';

const CheckoutPage = () => {
  return (
    <div className=''>
      <TimeLine />
      <EmptyCart />
      <Cart />
      <PurchaseDetails />
    </div>
  );
};

export default CheckoutPage;
