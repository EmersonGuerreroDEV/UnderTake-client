import { useParams } from 'next/navigation';
import { useQuery } from 'react-query';
import ProductsRepository from '~/core/repositories/produtcs-repositorio';

const useProducts = () => {
  const { id } = useParams();

  const {
    isLoading: isLoadingUser,
    refetch,
    data
  } = useQuery({
    queryKey: ['products'],
    queryFn: () => ProductsRepository.getProducts(),
    onError: (err) => console.error(err)
  });

  const {
    data: productId,
    isFetching: isFetchingId,
    isLoading: isLoadingId
  } = useQuery({
    queryKey: ['subscription', id],
    queryFn: () => ProductsRepository.getProductDetail(id as string),
    enabled: !!id
  });

  return {
    isLoading: isLoadingUser,
    productId,
    data,
    isRefetchId: isFetchingId || isLoadingId
  };
};

export default useProducts;
