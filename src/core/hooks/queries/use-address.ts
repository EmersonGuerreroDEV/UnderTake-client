import { useMutation } from 'react-query';
import { toast } from 'sonner';
import { AddressUser } from '~/core/interfaces/user';
import UserRepository from '~/core/repositories/user-repository';

const useAddress = () => {
  const { isLoading: isLoadingSendAddress, mutateAsync } = useMutation(
    (data: AddressUser) => UserRepository.sendAddress(data),
    {
      onError: (err) => handleError(err),
      onSuccess: (d) => {
        toast.success('Datos guardados correctamente');
      }
    }
  );

  const handleError = (err: any) => {
    console.error(err.message);
    toast.error(err.message);
  };

  const handleSendAddress = async (data: AddressUser) => {
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
