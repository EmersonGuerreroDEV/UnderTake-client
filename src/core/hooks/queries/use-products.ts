import { useParams } from 'next/navigation';
import { useQuery } from 'react-query';
import ProductsRepository from '~/core/repositories/produtcs-repositorio';

const useProducts = (filter = '', search = '') => {
  const { id } = useParams();

  const {
    isLoading: isLoadingUser,
    refetch,
    data: allProducts
  } = useQuery({
    queryKey: ['products'],
    queryFn: () => ProductsRepository.getProducts(filter, search),
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

  // Filtrar productos si el filtro es "onSale"
  const filteredProducts =
    filter === 'onSale'
      ? allProducts?.filter((product: any) => product.onSale)
      : allProducts;

  return {
    isLoading: isLoadingUser,
    productId,
    data: filteredProducts, // Devolver productos filtrados
    isRefetchId: isFetchingId || isLoadingId
  };
};

export default useProducts;
