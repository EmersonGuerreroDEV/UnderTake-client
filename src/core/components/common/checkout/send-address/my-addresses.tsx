import { useContext } from 'react';
import { Card, CardContent } from '~/core/components/ui/card';
import useCheckout from '~/core/hooks/use-checkout';
import { AddressUser } from '~/core/interfaces/user';
import { UserContext } from '~/core/providers/user-provider';

const MyAddresses = () => {
  const { user } = useContext(UserContext);
  const { checkout, setCheckout } = useCheckout();

  const onAddressSelected = (address: AddressUser) => {
    setCheckout({
      ...checkout,
      sendAddress: { ...address, city: address.city.id }
    });
  };

  return (
    <Card className='mt-4 w-full rounded-lg border bg-slate-50/40 py-2 shadow-lg'>
      <CardContent>
        <h1 className=' text-center text-sm font-semibold text-primary'>
          Tus direcciones registradas
        </h1>
        <div className='mt-2 grid w-full gap-2'>
          {user?.addresses.map((address, index) => {
            return (
              <button
                key={address.city.id + index}
                onClick={() => onAddressSelected(address)}
                className='w-full border-b p-2 hover:scale-105 hover:border-blue-400 hover:bg-slate-50'
              >
                <p className='w-full text-start'>{address.city.name}</p>
                <div className='flex space-x-2'>
                  <span className='text-sm font-light text-gray-400'>
                    {address.address}
                  </span>
                  <span>{address.neighborhood}</span>
                </div>
              </button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default MyAddresses;
