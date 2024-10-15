import { PaymentsProps } from './interface';
import { sendAddressUser } from './user';

export interface Checkout {
  sendAddress?: sendAddressUser;
  paymentMethod?: PaymentsProps;
}
