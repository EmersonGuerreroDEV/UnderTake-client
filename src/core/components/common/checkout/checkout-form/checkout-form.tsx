import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
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
    message: 'El numero de teléfono no es valido'
  }),
  password: z.string().min(1, {
    message: 'La contraseña debe tener al menos 8 caracteres.'
  })
});

const CheckoutForm = () => {
  const { handleSignUp, isLoadingSignUp } = useAuth();
  const router = useRouter();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: '',
      password: '',
      fullName: '',
      document: '',
      phone: ''
    }
  });

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    const payload = {
      ...values
    };
    handleSignUp(payload);
  };

  return (
    <Card className='w-[500px]  bg-slate-100'>
      <CardContent>
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
            </fieldset>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default CheckoutForm;
