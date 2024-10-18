import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const useRouteChange = (callback: any) => {
  const router = useRouter();

  useEffect(() => {
    const handleCallback = (url: string) => {
      callback?.(url);
    };
  }, [router, callback]);
};

export default useRouteChange;
