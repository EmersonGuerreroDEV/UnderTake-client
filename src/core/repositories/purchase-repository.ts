import { call } from '../config/call';
import { PurchaseProps } from '../interfaces/purchase';

class PurchaseRepository {
  static readonly sendPurchase = async (data: PurchaseProps) => {
    const res = await call({
      method: 'POST',
      path: '/orders',
      data: data
    });
    if (res) {
      return res;
    }

    throw new Error('Error fetching users');
  };

  static readonly getPurchase = async () => {
    const res = await call({
      method: 'GET',
      path: `/orders/me`
    });

    if (res) {
      return res;
    }

    throw new Error('Error fetching restore password');
  };
}

export default PurchaseRepository;
