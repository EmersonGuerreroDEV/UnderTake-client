'use client';
import ProfileContent from '~/core/components/common/profile';
import Wrapper from '~/core/components/ui/wrapper';

const Profile = () => {
  return (
    <div className='mt-32 flex h-full  pb-8'>
      <Wrapper className='flex flex-col space-y-4 lg:flex-row lg:space-x-8 lg:space-y-0 lg:px-24 '>
        <ProfileContent />
      </Wrapper>
    </div>
  );
};

export default Profile;
