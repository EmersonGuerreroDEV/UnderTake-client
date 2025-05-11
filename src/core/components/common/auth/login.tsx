'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { HelpCircle } from 'lucide-react';
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
  email: z.string().email({
    message: 'El correo electrónico no es válido.'
  }),
  password: z.string().min(8, {
    message: 'La contraseña debe tener al menos 8 caracteres.'
  })
});

const LoginForm = () => {
  const router = useRouter();

  const { doSignIn, isLoadingSignIn } = useAuth();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
  doSignIn(values, "/dashboard");
  };

  return (
    <Form {...form}>
      <h1 className='text-center text-[35px] font-bold text-black'>
        INICIA SESIÓN
      </h1>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='mx-auto mt-8 flex flex-col justify-center md:w-[360px]'
      >
        <fieldset disabled={isLoadingSignIn} className='group grid gap-3'>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem className='text-start'>
                <FormControl>
                  <Input
                    type='email'
                    label='Correo electrónico'
                    className='rounded-none'
                    {...field}
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
                    type='password'
                    label='Contraseña'
                    {...field}
                    className='rounded-none'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit' className='h-9 w-full rounded text-lg'>
            {isLoadingSignIn ? 'Iniciando sesión...' : 'Iniciar sesión'}
          </Button>
        </fieldset>
      </form>
      <a
        href={Routes.home}
        className='mt-4 flex items-center justify-center space-x-1 text-center text-lg font-light text-blue-600'
      >
        <HelpCircle size={15} />
        <span className='text-center text-base '>Olvide mi contraseña</span>
      </a>
      <div className='mx-auto mt-6 w-full    md:w-[360px] '>
        <p className='text-center font-sans text-lg font-semibold'>
          ¿NO TIENES CUENTA?
        </p>
        <Button
          variant={'link'}
          onClick={() => router.push(Routes.register)}
          className=' h-6 w-full text-base font-light  text-blue-600 underline'
        >
          Registrarme
        </Button>
      </div>
    </Form>
  );
};

export default LoginForm;
