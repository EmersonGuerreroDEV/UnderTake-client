'use client';
import { usePathname } from 'next/navigation';
import CheckoutHeader from './checkout-header';
import PrincipalHeader from './header';

const Header = () => {
  const router = usePathname();
  return <div>{router === '/' ? <PrincipalHeader /> : <CheckoutHeader />}</div>;
};

export default Header;
