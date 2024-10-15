import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useMemo } from 'react';

interface UseQueryParamsReturn {
  params: Map<string, string>;
  addParam: (key: string, value: any) => void;
  addParams: (params: Map<string, string>) => void;
  removeParam: (key: string) => void;
  removeParams: (keys: string[]) => void;
  removeAllParams: () => void;
}

const useQueryParams = (): UseQueryParamsReturn => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const params = useMemo(() => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));

    const currentParams: Map<string, string> = new Map();

    current.forEach((value, key) => {
      currentParams.set(key, value);
    });

    return currentParams;
  }, [searchParams]);

  const addParam = useCallback(
    (key: string, value: any) => {
      const current = new URLSearchParams(Array.from(searchParams.entries()));

      current.set(key, value.toString());
      router.push(`${pathname}?${current.toString()}`);
    },
    [pathname, router, searchParams]
  );

  const addParams = useCallback(
    (params: Map<string, string>) => {
      const current = new URLSearchParams(Array.from(searchParams.entries()));

      params.forEach((value, key) => {
        current.set(key, value);
      });

      router.push(`${pathname}?${current.toString()}`);
    },
    [pathname, router, searchParams]
  );

  const removeParam = useCallback(
    (key: string) => {
      const current = new URLSearchParams(Array.from(searchParams.entries()));

      if (current.has(key)) {
        current.delete(key);
        router.push(`${pathname}?${current.toString()}`);
      }
    },
    [pathname, router, searchParams]
  );

  const removeParams = useCallback(
    (keys: string[]) => {
      const current = new URLSearchParams(Array.from(searchParams.entries()));

      keys.forEach((key) => {
        if (current.has(key)) {
          current.delete(key);
        }
      });

      router.push(`${pathname}?${current.toString()}`);
    },
    [pathname, router, searchParams]
  );

  const removeAllParams = useCallback(() => {
    router.push(pathname);
  }, [pathname, router]);

  return {
    params,
    addParam,
    addParams,
    removeParam,
    removeParams,
    removeAllParams
  };
};

export default useQueryParams;
