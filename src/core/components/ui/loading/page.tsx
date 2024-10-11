import { LoaderIcon } from 'lucide-react';

const LoadingPage = () => {
  return (
    <div className='grid h-[500px] w-full place-content-center'>
      <LoaderIcon className='animate-spin' />
    </div>
  );
};

export default LoadingPage;
