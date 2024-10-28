import { zodResolver } from '@hookform/resolvers/zod';
import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '~/core/components/ui/button';
import { Card, CardContent } from '~/core/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '~/core/components/ui/form';
import { Input } from '~/core/components/ui/input';
import { SelectItem } from '~/core/components/ui/select';
import SelectAlt from '~/core/components/ui/select-alt';

import useAddress from '~/core/hooks/queries/use-address';
import UseLocation from '~/core/hooks/queries/use-location';
import useCheckout from '~/core/hooks/use-checkout';
import eventBus from '~/core/hooks/use-event-bust';
import { CityProps, DepartmentsProps } from '~/core/interfaces/location';
import { UserContext } from '~/core/providers/user-provider';

const AddressSchema = z.object({
  address: z.string().min(4, {
    message: 'La dirección no valida'
  }),
  postal: z.string().min(4, {
    message: 'Código postal requerido'
  }),

  city: z.string().min(4, {
    message: 'La ciudad requerida'
  }),
  neighborhood: z.string().min(1, {
    message: 'El barrio requerido'
  })
});

interface SendAddressFormProps {
  onSend: () => void;
  setIsLoading: (state: boolean) => void;
  isLoading: boolean;
}

const SendAddressForm = ({
  onSend,
  isLoading,
  setIsLoading
}: SendAddressFormProps) => {
  const { user } = useContext(UserContext);
  const { checkout, setCheckout } = useCheckout();
  const { city: cities } = UseLocation();
  const [departmentState, setDepartmentState] =
    useState<DepartmentsProps | null>(null);
  const [cityState, setCitySate] = useState<CityProps | null>(null);
  const { handleSendAddress, isLoadingSendAddress } = useAddress();
  const [clean, setClean] = useState(false);

  const form = useForm<z.infer<typeof AddressSchema>>({
    resolver: zodResolver(AddressSchema),
    defaultValues: {
      address: user?.addresses?.[0]?.address || '',
      city: user?.addresses?.[0]?.city?.id || '',
      postal: user?.addresses[0]?.postalCode || '',
      neighborhood: user?.addresses[0]?.neighborhood || ''
    }
  });

  const onSubmit = async (values: z.infer<typeof AddressSchema>) => {
    if (!user?.addresses) return;
    if (user?.addresses?.length <= 0) {
      setIsLoading(true);
      const res = await handleSendAddress(values);
      if (res) {
        onSend();
        setCheckout({
          ...checkout,
          sendAddress: values
        });
        setIsLoading(false);
      }
    } else {
      setCheckout({
        ...checkout,
        sendAddress: values
      });
      onSend();
    }
  };

  const handleChangeCity = (id: string) => {
    if (id) {
      form.setValue('city', id);
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
    eventBus.on('sendUserAddress', manejarEvento);
    return () => {
      eventBus.off('sendUserAddress', manejarEvento);
    };
  }, [form]);

  if (!user) return;

  const onCleanForm = () => {
    form.reset();
    setClean(true);
  };

  return (
    <Card className='w-full rounded-lg border bg-slate-50/40 shadow-lg'>
      <CardContent>
        <Form {...form}>
          <h1 className='text-center text-xl font-semibold text-primary'>
            Datos de envío
          </h1>
          <form onSubmit={form.handleSubmit(onSubmit)} className='w-full'>
            <fieldset
              disabled={isLoadingSendAddress}
              className='group grid grid-cols-2 gap-8'
            >
              <FormField
                control={form.control}
                name='city'
                render={({ field }) => (
                  <FormItem className='mt-3 text-start'>
                    <FormControl>
                      <SelectAlt
                        onChange={(e) => handleChangeCity(e)}
                        defaultValue={form.watch('city')}
                        label='Ciudad'
                      >
                        {cities?.map((city: CityProps) => {
                          return (
                            <SelectItem
                              className='text-lg text-black'
                              key={city.id}
                              value={city.id}
                            >
                              {city.name}
                            </SelectItem>
                          );
                        })}
                      </SelectAlt>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='address'
                render={({ field }) => (
                  <FormItem className='mt-3 text-start'>
                    <FormControl>
                      <Input label='Dirección' type='text' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='neighborhood'
                render={({ field }) => (
                  <FormItem className='mt-3 text-start'>
                    <FormControl>
                      <Input label='Barrio' type='text' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='postal'
                render={({ field }) => (
                  <FormItem className='mt-3 text-start'>
                    <FormControl>
                      <Input label='Código postal' type='text' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {clean && (
                <Button disabled={isLoading}>
                  {isLoading ? 'Guardando información' : 'Guardar dirección'}
                </Button>
              )}
            </fieldset>
          </form>
          <div className='mt-8 grid grid-cols-2 gap-8'>
            {user?.addresses.length >= 0 && !clean && (
              <button
                className='px-0 text-start text-sm font-extralight text-blue-400 underline'
                onClick={onCleanForm}
              >
                Nueva dirección
              </button>
            )}
          </div>
        </Form>
      </CardContent>
    </Card>
  );
};

export default SendAddressForm;
