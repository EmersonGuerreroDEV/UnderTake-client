'use client';

import useQueryParams from '~/core/hooks/useQueryParams';
import ProfileMenu from './profile-menu';
import UserCard from './user-card';

const ProfileContent = () => {
  const { params } = useQueryParams();
  const tab = params.get('tab') || 'account';

  return (
    <div>
      <div className='flex flex-col items-center border border-slate-50 py-8 shadow lg:w-80'>
        <UserCard />
        <ProfileMenu tab={tab} />
      </div>
      {/* <div className='w-full border border-slate-50 shadow-xl'>
        {tab === 'account' && <Account />}
        {tab === 'addresses' && <Addresses />}
        {tab === 'purchases' && <Purchases />}
        {tab !== 'account' && tab !== 'addresses' && tab !== 'purchases' && (
          <div>Selecciona una pestaña válida</div>
        )}
      </div> */}
    </div>
  );
};

export default ProfileContent;
