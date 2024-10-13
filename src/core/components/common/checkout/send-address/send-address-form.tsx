import { zodResolver } from '@hookform/resolvers/zod';
import { useContext, useEffect, useState } from 'react';
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
import { SelectItem } from '~/core/components/ui/select';
import SelectAlt from '~/core/components/ui/select-alt';

import useAddress from '~/core/hooks/queries/use-address';
import UseLocation from '~/core/hooks/queries/use-location';
import eventBus from '~/core/hooks/use-event-bust';
import { CityProps, DepartmentsProps } from '~/core/interfaces/location';
import { UserContext } from '~/core/providers/user-provider';

const AddressSchema = z.object({
  address: z.string().min(4, {
    message: 'La dirección no valida'
  }),
  postal: z.string().min(0, {}),

  city: z.string().min(4, {
    message: 'La ciudad requerida'
  }),
  neighborhood: z.string().min(1, {
    message: 'El barrio requerido'
  })
});

interface SendAddressFormProps {
  onSend: () => void;
}

const SendAddressForm = ({ onSend }: SendAddressFormProps) => {
  const { user } = useContext(UserContext);
  const { city: cities } = UseLocation();
  const [departmentState, setDepartmentState] =
    useState<DepartmentsProps | null>(null);
  const [cityState, setCitySate] = useState<CityProps | null>(null);
  const { handleSendAddress, isLoadingSendAddress } = useAddress();

  const form = useForm<z.infer<typeof AddressSchema>>({
    resolver: zodResolver(AddressSchema),
    defaultValues: {
      address: '',
      city: '',
      postal: '',
      neighborhood: ''
    }
  });

  const onSubmit = async (values: z.infer<typeof AddressSchema>) => {
    const res = await handleSendAddress(values);
    if (res) {
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
            </fieldset>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default SendAddressForm;
