import { LockIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Routes } from '~/core/config/routes';
import Wrapper from '../wrapper';

const CheckoutHeader = () => {
  const router = useRouter();
  return (
    <header
      className={`fixed  left-0 top-0 z-50 flex h-20 w-full items-center justify-between border-b-2 border-red-400 bg-[#343A40]/95 shadow-lg  transition-all duration-300 ease-in-out`}
    >
      <Wrapper className='justify-between'>
        <button onClick={() => router.push(Routes.home)}>
          <p className='text-white'>Logo</p>
        </button>
        <div>
          <p className='font-extralight uppercase text-white'>
            Tu compra es <span className='font-semibold'>100% segura</span>
          </p>
        </div>
        <div className='flex items-center justify-center text-white'>
          <div>
            <LockIcon strokeWidth={1} size={34} />
          </div>

          <div className='flex flex-col text-sm font-light leading-4'>
            <span>Pago</span>
            <span>Seguro</span>
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default CheckoutHeader;
