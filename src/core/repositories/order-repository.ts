import { call } from '../config/call';

class OrderRepository {
  static readonly getOrder = async (id: string) => {
    const res = await call({
      method: 'GET',
      path: `/orders/detail/${id}`
    });

    if (res) {
      return res;
    }

    throw new Error('Error fetching users');
  };
}

export default OrderRepository;
