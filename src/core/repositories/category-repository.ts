import { call } from '../config/call';

interface Category {
  id: number;
  image: string;
  name: string;
}

class CategoryRepository {
  static readonly getCategory = async (): Promise<Category[]> => {
    try {
      const res = await call({
        method: 'GET',
        path: '/products/categories'
      });

      if (res) {
        return res as Category[]; // Aseguramos que el tipo de res es Category[]
      }

      throw new Error('No categories found');
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw new Error('Error fetching categories');
    }
  };
}

export default CategoryRepository;
