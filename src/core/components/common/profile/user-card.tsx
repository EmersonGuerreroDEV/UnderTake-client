'use client';
import { User } from 'lucide-react';
import { useContext } from 'react';
import { UserContext } from '~/core/providers/user-provider';

const UserCard = () => {
  const { user } = useContext(UserContext);
  return (
    <div className='w-full'>
      <div className='mx-auto flex  h-28 w-28 items-center justify-center rounded-full bg-slate-100 p-8 shadow-md'>
        <User strokeWidth={1} size={50} />
      </div>
      <p className='mt-2 w-full text-center font-semibold'>
        Bienvenid@ {user?.fullName}
      </p>
    </div>
  );
};

export default UserCard;
