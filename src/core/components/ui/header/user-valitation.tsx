import { UserIcon } from 'lucide-react';
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
      router.push(Routes.profile);
    }
  };
  return (
    <div>
      <Button
        variant={'outline'}
        className='border-none bg-transparent shadow-none hover:bg-transparent'
        onClick={onUserPathValidation}
      >
        <UserIcon strokeWidth={1} />
      </Button>
    </div>
  );
};

export default UserValidation;
