import { call } from '../config/call';

class ProductsRepository {
  static readonly getProducts = async () => {
    const res = await call({
      method: 'GET',
      path: '/products'
    });

    if (res.success) {
      return res;
    }

    throw new Error('Error fetching users');
  };

  static readonly getProductDetail = async (productId: string) => {
    const res = await call({
      method: 'GET',
      path: `/products/${productId}`
    });

    if (res) {
      return res;
    }

    throw new Error('Error fetching users');
  };
}

export default ProductsRepository;
