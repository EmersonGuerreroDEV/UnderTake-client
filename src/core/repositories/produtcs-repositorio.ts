import { call } from '../config/call';

class ProductsRepository {
  static readonly getProducts = async (filter: string, search: string) => {
    const res = await call({
      method: 'GET',
      path: `/products?filter=${filter ? filter : null}&search=${search ? search : null}`
    });

    if (res) {
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
