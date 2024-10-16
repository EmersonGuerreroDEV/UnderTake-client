// components/Menu.js
import Link from 'next/link';

const ProfileMenu = () => {
  return (
    <nav className=' mt-8 w-full px-8'>
      <ul className='w-full space-y-4 text-start'>
        <li className='font-extralight text-blue-400 underline'>
          <Link href='/'>Inicio</Link>
        </li>
        <li className='font-extralight text-blue-400 underline'>
          <Link href='/about'>Acerca de</Link>
        </li>
        <li className='font-extralight text-blue-400 underline'>
          <Link href='/services'>Servicios</Link>
        </li>
        <li className='font-extralight text-blue-400 underline'>
          <Link href='/contact'>Contacto</Link>
        </li>
      </ul>
    </nav>
  );
};

export default ProfileMenu;
