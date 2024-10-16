'use client';
import Account from '~/core/components/common/profile/account';
import ProfileMenu from '~/core/components/common/profile/profile-menu';
import UserCard from '~/core/components/common/profile/user-card';
import Wrapper from '~/core/components/ui/wrapper';
import useQueryParams from '~/core/hooks/useQueryParams';

const Profile = () => {
  const { params } = useQueryParams();
  const tab = params.get('tab');
  return (
    <div className='mt-24 flex w-full  pb-8'>
      <Wrapper className='space-x-8 px-24'>
        <div className='flex w-80 flex-col items-center border border-slate-50 py-8  shadow-xl'>
          <UserCard />
          <ProfileMenu />
        </div>
        <div className='w-full border border-slate-50 shadow-xl'>
          {tab === 'account' && <Account />}
        </div>
      </Wrapper>
    </div>
  );
};

export default Profile;
