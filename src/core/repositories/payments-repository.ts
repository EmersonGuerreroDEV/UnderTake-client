import { call } from '../config/call';

class PaymentsRepository {
  static readonly getPaymentMethod = async () => {
    const res = await call({
      method: 'GET',
      path: '/payment-methods'
    });

    if (res) {
      return res;
    }

    throw new Error('Error fetching users');
  };
}

export default PaymentsRepository;
