'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Routes } from '~/core/config/routes';
import useAuth from '~/core/hooks/queries/use-auth';
import { Button } from '../../ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '../../ui/form';
import { Input } from '../../ui/input';

const LoginSchema = z.object({
  fullName: z.string().min(1, {
    message: 'El nombre es requerido'
  }),
  document: z.string().min(1, {
    message: 'Cédula es requerida'
  }),
  email: z.string().email({
    message: 'El correo electrónico no es válido.'
  }),
  phone: z.string().min(1, {
    message: 'El numero de teléfono no es valido'
  }),
  password: z.string().min(1, {
    message: 'La contraseña debe tener al menos 8 caracteres.'
  })
});

const RegisterForm = () => {
  const { handleSignUp, isLoadingSignUp } = useAuth();
  const router = useRouter();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
      fullName: '',
      document: '',
      phone: ''
    }
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    const payload = {
      ...values
    };
    handleSignUp(payload);
  };

  return (
    <div className=' w-full bg-white  px-6 py-16 font-sans md:max-w-xl lg:rounded-lg xl:px-20'>
      <Form {...form}>
        <h1 className='text-center text-[23px] font-semibold text-primary lg:text-[35px]'>
          Registra una cuenta
        </h1>
        <form onSubmit={form.handleSubmit(onSubmit)} className='mt-8'>
          <fieldset disabled={isLoadingSignUp} className='group grid gap-3'>
            <FormField
              control={form.control}
              name='fullName'
              render={({ field }) => (
                <FormItem className='text-start'>
                  <FormControl>
                    <Input
                      label='Nombre completo'
                      type='text'
                      className=''
                      {...field}
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem className='text-start'>
                  <FormControl>
                    <Input
                      label='Correo electrónico'
                      type='email'
                      className=''
                      {...field}
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='phone'
              render={({ field }) => (
                <FormItem className='text-start'>
                  <FormControl>
                    <Input
                      label='Numero telefónico'
                      type='number'
                      className=''
                      {...field}
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem className='text-start'>
                  <FormControl>
                    <Input
                      label='Contraseña'
                      type='password'
                      {...field}
                      className=''
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='flex w-full justify-center pt-4'>
              <Button
                disabled={isLoadingSignUp}
                type='submit'
                className='h-11 w-full rounded-lg '
              >
                {isLoadingSignUp ? 'Validando...' : 'Registrarme'}
              </Button>
            </div>
          </fieldset>
        </form>
        <div className='mx-auto mt-6 flex w-full flex-col items-center justify-between  lg:flex-row'>
          <p className='text-end font-sans text-[16px] font-light text-[#929292]'>
            ¿Ya tienes una cuenta?
          </p>
          <Button
            variant={'link'}
            onClick={() => router.push(Routes.login)}
            className='text-[16px] font-light underline'
          >
            Iniciar sesión
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default RegisterForm;
