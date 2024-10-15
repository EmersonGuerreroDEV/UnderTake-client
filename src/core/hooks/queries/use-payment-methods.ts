import { useQuery } from 'react-query';
import PaymentsRepository from '~/core/repositories/payments-repository';

const usePaymentMethods = () => {
  const plansQuery = useQuery({
    queryKey: 'payments-methods',
    queryFn: () => PaymentsRepository.getPaymentMethod()
  });

  return {
    paymentsMethods: plansQuery.data,
    isLoadingPayments: plansQuery.isLoading
  };
};

export default usePaymentMethods;
