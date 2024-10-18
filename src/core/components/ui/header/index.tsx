'use client';
import { usePathname } from 'next/navigation';
import { pathPrincipalHeaderIncluded } from '~/core/config/helpers';
import CheckoutHeader from './checkout-header';
import PrincipalHeader from './header';

const Header = () => {
  const router = usePathname();

  const pathFooterVisibility = () => {
    if (pathPrincipalHeaderIncluded.includes(router)) {
      return true;
    }
    return false;
  };
  return (
    <div>
      {pathFooterVisibility() ? <PrincipalHeader /> : <CheckoutHeader />}
    </div>
  );
};

export default Header;
