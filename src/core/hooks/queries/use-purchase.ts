import { useRouter } from 'next/navigation';
import { useMutation, useQuery } from 'react-query';
import { toast } from 'sonner';
import useCart from '~/core/components/hooks/use-cart';
import { PurchaseProps } from '~/core/interfaces/purchase';
import PurchaseRepository from '~/core/repositories/purchase-repository';
import useCheckout from '../use-checkout';

const usePurchase = () => {
  const router = useRouter();
  const { setCart } = useCart();
  const { setCheckout } = useCheckout();
  const { isLoading, mutateAsync } = useMutation(
    (data: PurchaseProps) => PurchaseRepository.sendPurchase(data),
    {
      onError: (err) => handleError(err),
      onSuccess: (d) => {
        toast.success('Compra realizada correctamente');
      }
    }
  );

  const handleError = (err: any) => {
    console.error(err.message);
    toast.error(err.message);
  };

  const handleSendPurchase = async (data: PurchaseProps) => {
    const res = await mutateAsync(data);
    if (res) {
      setCart([]);
      setCheckout({});
      if (res?.noRedirect) {
        window.open(res?.urlRedirect, '_blank');
        return router.push(`purchases/${res?.order}`);
      }else{
          return router.push(`purchases/${res?.urlRedirect}`);
      }

  
    }
    return res;
  };

  const {
    isLoading: isLoadingPurchase,
    refetch,
    data: allPurchase
  } = useQuery({
    queryKey: ['purchases'],
    queryFn: () => PurchaseRepository.getPurchase(),
    onError: (err) => console.error(err)
  });

  return {
    handleSendPurchase,
    isLoading,
    allPurchase,
    isLoadingPurchase
  };
};

export default usePurchase;
