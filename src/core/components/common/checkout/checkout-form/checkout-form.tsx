import { zodResolver } from '@hookform/resolvers/zod';
import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Card, CardContent } from '~/core/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '~/core/components/ui/form';
import { Input } from '~/core/components/ui/input';
import useAuth from '~/core/hooks/queries/use-auth';
import useUser from '~/core/hooks/queries/use-user';
import eventBus from '~/core/hooks/use-event-bust';
import { UserContext } from '~/core/providers/user-provider';

const RegisterSchema = z.object({
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
    message: 'El número de teléfono no es válido'
  }),
  password: z
    .string()
    .min(8, {
      message: 'La contraseña debe tener al menos 8 caracteres.'
    })
    .optional() // Cambiamos a optional para que no sea requerido si ya existe un usuario
});

interface CheckoutFormProps {
  setStep: () => void;
  isLoading: (state: boolean) => void;
  widthTitle?: boolean;
}

const CheckoutForm = ({
  setStep,
  isLoading,
  widthTitle = true
}: CheckoutFormProps) => {
  const { handleSignUp, isLoadingSignUp } = useAuth();
  const { handleUserUpdate } = useUser();
  const { user } = useContext(UserContext);

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: user?.email || '',
      password: user?.password,
      fullName: user?.fullName || '',
      document: user?.document || '',
      phone: user?.phone || ''
    }
  });

  const onSubmit = async (values: z.infer<typeof RegisterSchema>) => {
    isLoading(true);
    const payload = {
      ...values
    };

    if (user) {
      const res = await handleUserUpdate(payload);
      if (res) {
        setStep();
        isLoading(false);
      }
    } else {
      const res = await handleSignUp(payload, false);
      if (res) {
        setStep();
        isLoading(false);
      }
    }
  };

  useEffect(() => {
    const manejarEvento = async () => {
      const isValid = await form.trigger();
      if (isValid) {
        const values = form.getValues(); // Obtener los valores del formulario
        onSubmit(values); // Pasar los valores a onSubmit
      }
    };
    eventBus.on('sendUserData', manejarEvento);
    return () => {
      eventBus.off('sendUserData', manejarEvento);
    };
  }, [form]);

  return (
    <Card className='w-full rounded-lg border bg-slate-50/40 shadow-lg'>
      <CardContent>
        <Form {...form}>
          {widthTitle && (
            <h1 className='text-center text-xl font-semibold text-primary'>
              {user ? `Tus datos` : 'Registra una cuenta'}
            </h1>
          )}
          <form onSubmit={form.handleSubmit(onSubmit)} className='mt-8'>
            <fieldset
              disabled={isLoadingSignUp}
              className='group grid grid-cols-2 gap-8'
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
                        label='Número telefónico'
                        type='tel'
                        {...field}
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {!user && (
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
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
            </fieldset>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default CheckoutForm;
