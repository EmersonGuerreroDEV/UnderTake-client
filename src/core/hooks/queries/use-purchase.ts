import { useRouter } from 'next/navigation';
import { useMutation } from 'react-query';
import { toast } from 'sonner';
import { PurchaseProps } from '~/core/interfaces/purchase';
import PurchaseRepository from '~/core/repositories/purchase-repository';

const usePurchase = () => {
  const router = useRouter();
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
      return router.push(res?.urlRedirect);
    }
    return res;
  };

  return {
    handleSendPurchase,
    isLoading
  };
};

export default usePurchase;
