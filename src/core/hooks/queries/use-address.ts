import { useMutation } from 'react-query';
import { toast } from 'sonner';
import { sendAddressUser } from '~/core/interfaces/user';
import UserRepository from '~/core/repositories/user-repository';
import useCheckout from '../use-checkout';

const useAddress = () => {
  const { checkout, setCheckout } = useCheckout();
  const { isLoading: isLoadingSendAddress, mutateAsync } = useMutation(
    (data: sendAddressUser) => UserRepository.sendAddress(data),
    {
      onError: (err) => handleError(err),
      onSuccess: (d) => {
        toast.success('Dirección guardada correctamente');
      }
    }
  );

  const handleError = (err: any) => {
    console.error(err.message);
    toast.error(err.message);
  };

  const handleSendAddress = async (data: sendAddressUser) => {
    const res = await mutateAsync(data);
    if (res) {
      return res;
    }
    return res;
  };

  return {
    handleSendAddress,
    isLoadingSendAddress
  };
};

export default useAddress;
