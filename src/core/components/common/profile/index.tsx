'use client';

import useQueryParams from '~/core/hooks/useQueryParams';
import Account from './account';
import Addresses from './addresses/page';
import ProfileMenu from './profile-menu';
import Purchases from './purchases/page';
import UserCard from './user-card';

const ProfileContent = () => {
  const { params } = useQueryParams();
  const tab = params.get('tab') || 'account';

  return (
    <div className='mt-12 flex w-full flex-col lg:flex-row lg:space-x-4 '>
      <div className='flex flex-col items-center border border-slate-100 py-8 shadow lg:w-96'>
        <UserCard />
        <ProfileMenu tab={tab} />
      </div>
      <div className='w-full border border-slate-100 shadow-xl '>
        {tab === 'account' && <Account />}
        {tab === 'addresses' && <Addresses />}
        {tab === 'purchases' && <Purchases />}
        {tab !== 'account' && tab !== 'addresses' && tab !== 'purchases' && (
          <div>Selecciona una pestaña válida</div>
        )}
      </div>
    </div>
  );
};

export default ProfileContent;
