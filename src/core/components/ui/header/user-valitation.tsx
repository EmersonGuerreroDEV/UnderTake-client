import { UserIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { getInitials } from '~/core/config/helpers';
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

  const initialName = getInitials(user?.fullName!);

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
          <div className='items-centers flex  h-8 w-8 flex-col justify-center rounded-full border-2 border-green-400 bg-white text-black'>
            <span>{initialName}</span>
          </div>
        )}
      </Button>
    </div>
  );
};

export default UserValidation;
