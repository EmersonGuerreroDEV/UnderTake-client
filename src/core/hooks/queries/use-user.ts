//@ts-ignore
import Cookies from 'js-cookie';
import { useState } from 'react';
import { useQuery } from 'react-query';
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

  return {
    refetch,
    user: user,
    isLoading: isLoadingUser,
    handleLogout
  };
};

export default useUser;
