import { useContext } from 'react';
import { AddressUser } from '~/core/interfaces/user';
import { UserContext } from '~/core/providers/user-provider';
import CardAddresses from './card';

const Addresses = () => {
  const { user } = useContext(UserContext);

  return (
    <div className='p-6 lg:p-8'>
      <h1 className='text-start text-xl font-semibold text-primary '>
        Direcciones del usuario
      </h1>
      <div className='mt-8 grid  gap-8 md:grid-cols-2'>
        {user?.addresses.map((address: AddressUser, index) => {
          return (
            <CardAddresses key={address.address + index} address={address} />
          );
        })}
      </div>
    </div>
  );
};

export default Addresses;
