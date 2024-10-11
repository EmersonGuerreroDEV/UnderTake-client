//@ts-ignore
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { useMutation } from 'react-query';
import { toast } from 'sonner';
import { Routes } from '~/core/config/routes';

import {
  LoginProps,
  RecoveryPassword,
  RegisterProps
} from '~/core/interfaces/auth';
import { UserContext } from '~/core/providers/user-provider';
import AuthRepository from '~/core/repositories/auth-repository';
import useUser from './use-user';
interface TokenProps {
  [key: string]: string;
}

const useAuth = () => {
  const router = useRouter();
  const { refetch, handleLogout } = useContext(UserContext);
  const { setUser } = useUser();

  const { isLoading: isLoadingSignUp, mutateAsync: doSignUp } = useMutation({
    mutationKey: ['signUp'],
    mutationFn: (data: RegisterProps) => AuthRepository.signUp(data),
    onError: (err: string) => handleSignUpError(err)
  });

  const handleSignUpError = (error: string) => {
    toast.error(error, {
      description: 'Por favor inicie sesión, o comuníquese con soporte'
    });
  };

  const { isLoading: isLoadingSignIn, mutateAsync: doSignIn } = useMutation({
    mutationKey: ['signIn'],
    mutationFn: (data: LoginProps) => AuthRepository.signIn(data)
  });

  const handleSignUp = async (form: RegisterProps) => {
    try {
      const res = await doSignUp(form);
      // toast.success('Registro exitoso', {
      //   description: 'Bienvenido, ya eres parte de nuestra comunidad'
      // });
      const payload = {
        email: form.email,
        password: form.password
      };
      if (res) {
        handleSignIn(payload);
        return res;
      }
    } catch (err) {
      console.error(err);
      // toast.error('Error al registrarte', {
      //   description: 'Por favor, intenta nuevamente.'
      // });
      return false;
    }
  };

  const handleSignIn = async (form: LoginProps) => {
    try {
      const res = await doSignIn(form);
      if (res) {
        Cookies.set('ssid', res.access_token, { expires: 7 });
        setUser(res?.user);
        router.push(Routes.home);
        return res;
      }
    } catch (err) {
      console.error(err);
      toast.error('Error al iniciar sesión', {
        description: 'Por favor, verifica tus credenciales.'
      });
      return false;
    }
  };

  const { isLoading: isLoadingRecovery, mutateAsync: doRecovery } = useMutation(
    {
      mutationKey: ['password-recovery'],
      mutationFn: (data: RecoveryPassword) =>
        AuthRepository.recoveryPassword(data)
    }
  );

  const handleRecovery = async (form: RecoveryPassword) => {
    try {
      const res = await doRecovery(form);
      toast.success('Envío exitoso', {
        description: 'Ya podrás ingresar con tu nueva contraseña'
      });
      router.push(Routes.login);
      return res;
    } catch (err) {
      console.error(err);
      toast.error('Error al enviar nueva contraseña', {
        description: 'Por favor, intenta nuevamente.'
      });
      return false;
    }
  };

  const signOut = () => {
    Cookies.remove('ssid');
    handleLogout();
    router.push(Routes.home);
  };

  return {
    doSignIn: handleSignIn,
    isLoadingSignIn,
    signOut,
    handleSignUp,
    isLoadingSignUp,
    isLoadingRecovery,
    handleRecovery
  };
};

export default useAuth;
