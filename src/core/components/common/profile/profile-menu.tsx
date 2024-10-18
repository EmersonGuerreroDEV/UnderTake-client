'use client';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { Routes } from '~/core/config/routes';

interface ProfileMenuProps {
  tab: string;
}

const ProfileMenu = ({ tab }: ProfileMenuProps) => {
  const pathRouter = Routes.profile;

  return (
    <nav className=' mt-8 w-full px-8'>
      <ul className='w-full space-y-4 text-start'>
        <li
          className={twMerge(
            'font-extralight text-blue-400 underline',
            tab === 'account' ? 'text-blue-800' : ''
          )}
        >
          <Link href={pathRouter + `?tab=account`}>Datos</Link>
        </li>
        <li
          className={twMerge(
            'font-extralight text-blue-400 underline',
            tab === 'purchases' ? 'text-blue-800' : ''
          )}
        >
          <Link href={pathRouter + `?tab=purchases`}>Compras</Link>
        </li>
        <li
          className={twMerge(
            'font-extralight text-blue-400 underline',
            tab === 'addresses' ? 'text-blue-800' : ''
          )}
        >
          <Link href={pathRouter + `?tab=addresses`}>Direcciones</Link>
        </li>
      </ul>
    </nav>
  );
};

export default ProfileMenu;
