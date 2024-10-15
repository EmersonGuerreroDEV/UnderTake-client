import { useParams } from 'next/navigation';
import { useQuery } from 'react-query';
import OrderRepository from '~/core/repositories/order-repository';

const useOrder = () => {
  const { id } = useParams();
  const {
    data,
    isFetching: isFetchingOrder,
    isLoading: isLoadingOrder
  } = useQuery({
    queryKey: ['order', id],
    queryFn: () => OrderRepository.getOrder(id as string),
    enabled: !!id
  });

  return { data, isLoading: isFetchingOrder || isLoadingOrder };
};

export default useOrder;
