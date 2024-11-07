//@ts-ignore
import Cookies from 'js-cookie';
import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { toast } from 'sonner';
import { RegisterProps } from '~/core/interfaces/auth';
import { UserProps } from '~/core/interfaces/user';
import UserRepository from '~/core/repositories/user-repository';

const useUser = () => {
  const ssid = Cookies.get('ssid');
  const [user, setUser] = useState<UserProps | undefined | null>();

  const { isLoading: isLoadingUser, refetch } = useQuery({
    queryKey: ['user'],
    queryFn: () => UserRepository.getMe(),
    onError: (err) => console.error(err),
    onSuccess: (data: UserProps) => setUser(data),
    enabled: !!ssid
  });

  const handleLogout = () => {
    setUser(null);
  };

  const { isLoading: isLoadingUpdate, mutateAsync } = useMutation(
    (data: RegisterProps) => UserRepository.update(data),
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

  const handleUserUpdate = async (data: RegisterProps) => {
    const res = await mutateAsync(data);
    if (res) {
      refetch();
      return res;
    }
    return res;
  };

  return {
    refetch,
    user: user,
    setUser,
    isLoading: isLoadingUser,
    handleLogout,
    handleUserUpdate,
    isLoadingUpdate
  };
};

export default useUser;
