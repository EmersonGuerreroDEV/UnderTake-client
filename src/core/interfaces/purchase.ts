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

export interface PurchaseTable {
  address: string;
  cityId: string;
  createdAt: string;
  id: number;
  total: number;
  updatedAt: string;
  userId: string;
  statusId: Status;
  paymentMethod: PaymentMethod;
}

interface Status {
  id: number;
  name: string;
}
interface PaymentMethod {
  id: number;
  name: string;
}
