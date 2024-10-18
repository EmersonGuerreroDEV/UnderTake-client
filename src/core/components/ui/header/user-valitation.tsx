import { UserIcon } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { Routes } from '~/core/config/routes';
import { UserContext } from '~/core/providers/user-provider';
import { Button } from '../button';

const UserValidation = () => {
  const { user } = useContext(UserContext);
  const router = useRouter();

  const onUserPathValidation = () => {
    if (!user) {
      router.push(Routes.login);
    } else {
      router.push(Routes.profile + `?tab=account`);
    }
  };
  return (
    <div>
      <Button
        variant={'outline'}
        className='border-none bg-transparent shadow-none hover:bg-transparent'
        onClick={onUserPathValidation}
      >
        {!user ? (
          <UserIcon strokeWidth={1} />
        ) : (
          <div className='items-centers flex flex-col justify-center'>
            <Image
              src='/assets/images/avatar.webp'
              className='mx-auto h-5 w-5 scale-125 transform bg-center object-cover sm:scale-100 md:h-6 md:w-6'
              alt='user avatar'
              width={100}
              height={100}
            />
            <span className='text-xs font-light'>{user?.fullName}</span>
          </div>
        )}
      </Button>
    </div>
  );
};

export default UserValidation;
