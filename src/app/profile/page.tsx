'use client';
import Account from '~/core/components/common/profile/account';
import Addresses from '~/core/components/common/profile/addresses/page';
import ProfileMenu from '~/core/components/common/profile/profile-menu';
import Purchases from '~/core/components/common/profile/purchases/page';
import UserCard from '~/core/components/common/profile/user-card';
import Wrapper from '~/core/components/ui/wrapper';
import useQueryParams from '~/core/hooks/useQueryParams';

const Profile = () => {
  const { params } = useQueryParams();
  const tab = params.get('tab');
  if (!tab) return;

  return (
    <div className='mt-32 flex h-full  pb-8'>
      <Wrapper className='flex flex-col space-y-4 lg:flex-row lg:space-x-8 lg:space-y-0 lg:px-24 '>
        <div className='flex flex-col items-center border border-slate-50 py-8 shadow  lg:w-80'>
          <UserCard />
          <ProfileMenu tab={tab} />
        </div>
        <div className='w-full border border-slate-50 shadow-xl'>
          {tab === 'account' && <Account />}
          {tab === 'addresses' && <Addresses />}
          {tab === 'purchases' && <Purchases />}
        </div>
      </Wrapper>
    </div>
  );
};

export default Profile;
