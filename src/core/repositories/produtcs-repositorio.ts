import { call } from '../config/call';

interface ParamsProps {
  filter?: string | undefined;
  search?: string | undefined;
  category?: string | undefined | null;
  priceInit?: string | undefined; 
  priceEnd?: string | undefined; 
}

class ProductsRepository {
  static readonly getProducts = async ({ filter, search, category, priceInit, priceEnd }: ParamsProps) => {
    // Construcción de las query params
    const queryParams = new URLSearchParams();

    if (filter) queryParams.append('filter', filter);
    if (search) queryParams.append('search', search);
    if (category) queryParams.append('category', category);
    if (priceInit) queryParams.append('priceInit', priceInit);
    if (priceEnd) queryParams.append('priceEnd', priceEnd);

    const res = await call({
      method: 'GET',
      path: `/products?${queryParams.toString()}`
    });

    if (res) {
      return res;
    }

    throw new Error('Error fetching products');
  };

  static readonly getProductDetail = async (productId: string) => {
    const res = await call({
      method: 'GET',
      path: `/products/${productId}`
    });

    if (res) {
      return res;
    }

    throw new Error('Error fetching product detail');
  };
}

export default ProductsRepository;
