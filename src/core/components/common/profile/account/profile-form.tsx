'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '~/core/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '~/core/components/ui/form';
import { Input } from '~/core/components/ui/input';
import useUser from '~/core/hooks/queries/use-user';
import { UserContext } from '~/core/providers/user-provider';

const LoginSchema = z.object({
  fullName: z.string().min(1, {
    message: 'El nombre es requerido'
  }),
  email: z.string().email({
    message: 'El correo electrónico no es válido.'
  }),
  document: z.string().min(1, {
    message: 'El numero de teléfono no es valido'
  }),
  phone: z.string().min(1, {
    message: 'El numero de teléfono no es valido'
  })
});

const ProfileForm = () => {
  const { handleUserUpdate, isLoadingUpdate } = useUser();
  const { user } = useContext(UserContext);

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: user?.email || '',
      document: user?.document || '',
      fullName: user?.fullName,
      phone: user?.phone || ''
    }
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    const payload = {
      ...values
    };
    handleUserUpdate(payload);
  };

  if (!user) return;

  return (
    <div className=' w-full bg-white  px-8  font-sans md:max-w-xl lg:rounded-lg'>
      <Form {...form}>
        <h1 className='text-start text-xl font-semibold uppercase text-gray-500 '>
          Datos del usuario
        </h1>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='mt-8 lg:min-w-[400px]'
        >
          <fieldset
            disabled={isLoadingUpdate}
            className='group grid w-full grid-cols-2 gap-8'
          >
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
              name='document'
              render={({ field }) => (
                <FormItem className='text-start'>
                  <FormControl>
                    <Input
                      label='N documento'
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

            <div className='flex w-full justify-center pt-4'>
              <Button
                disabled={isLoadingUpdate}
                type='submit'
                className='h-11 w-full rounded-lg '
              >
                {isLoadingUpdate ? 'Validando...' : 'Actualizar'}
              </Button>
            </div>
          </fieldset>
        </form>
      </Form>
    </div>
  );
};

export default ProfileForm;
