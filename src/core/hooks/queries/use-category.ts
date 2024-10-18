import { useQuery } from 'react-query';
import CategoryRepository from '~/core/repositories/category-repository';

const useCategory = () => {
  const {
    isLoading: isLoadingCategory,
    refetch,
    data: allCategories
  } = useQuery({
    queryKey: ['categories'],
    queryFn: () => CategoryRepository.getCategory(),
    onError: (err) => console.error(err)
  });

  return { allCategories, isLoadingCategory };
};

export default useCategory;
