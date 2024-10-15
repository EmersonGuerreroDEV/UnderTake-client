'use client';

import { setDefaultOptions } from 'date-fns';
import { es } from 'date-fns/locale';
import { createContext, useMemo } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Toaster } from 'sonner';
import TailwindIndicator from '~/components/common/tailwind-indicator';
import useCart from '../components/hooks/use-cart';
import { CartProp } from '../interfaces/cart';
import UserProvider from './user-provider';

setDefaultOptions({
  locale: es
});

interface CartContextProp {
  cart?: CartProp[] | [];
  addProduct: (product: CartProp) => void;
  updateQuantity: (id: number, number: number) => void;
  removeProduct: (id: number) => void;
  subTotalCalcule: () => number;
}

export const CartContext = createContext<CartContextProp>(
  {} as CartContextProp
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchInterval: false,
      cacheTime: 1000 * 60 * 10 // 10 minutes
    }
  }
});

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const { cart, addProduct, removeProduct, updateQuantity, subTotalCalcule } =
    useCart();

  const value = useMemo(() => {
    return { cart, addProduct, removeProduct, updateQuantity, subTotalCalcule };
  }, [cart]);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <TailwindIndicator />
          <Toaster position='top-center' richColors />
          <CartContext.Provider value={value}>{children}</CartContext.Provider>
        </UserProvider>
      </QueryClientProvider>
    </>
  );
};

export default StoreProvider;
