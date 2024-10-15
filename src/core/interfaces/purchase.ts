import { CartProp } from './cart';

export interface PurchaseProps {
  total: number;
  userId: string;
  statusId: number;
  paymentMethod: number;
  cityId: string;
  address: string;
  orderDetails: CartProp;
}
