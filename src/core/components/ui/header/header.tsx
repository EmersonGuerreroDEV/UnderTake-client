'use client';
import { ShoppingCartIcon } from 'lucide-react';
// components/Header.tsx
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react';
import { Routes } from '~/core/config/routes';
import { CartContext } from '~/core/providers/store-provider';
import Wrapper from '../wrapper';
import SearchComponent from './search';
import UserValidation from './user-valitation';

const PrincipalHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const { cart } = useContext(CartContext);
  const router = useRouter();

  let productQuantity = cart?.length || 0;

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > 40);
    setShowBanner(scrollY < 40);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ease-in-out ${isScrolled ? ' h-20   shadow' : 'h-12 bg-transparent'}`}
    >
      <div
        className={`h-12 transition-transform duration-500 ease-in-out ${showBanner ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className='border-none bg-[#343A40]/95 p-3 text-center text-sm font-light  uppercase text-white lg:text-xl '>
          ¡Descuento del 20% en tu primera compra!
        </div>
      </div>
      <nav
        className={`flex items-center justify-between px-8  transition-all duration-300 ease-in-out ${isScrolled ? 'h-24 -translate-y-12 border-b-2 border-red-400 bg-[#343A40]/95 text-white' : 'h-20 translate-y-0 bg-white text-black'}`}
      >
        <Wrapper className='flex justify-between '>
          <div className='flex  w-full items-center space-x-12  '>
            <div className='text-xl font-light'>Mi Tienda</div>
            <div className='flex w-[600px] items-center space-x-12'>
              <SearchComponent />
              <div className='hidden lg:block'>
                <ul className='flex space-x-12 text-sm font-light capitalize'>
                  <li>
                    <a role='button' onClick={() => router.push(Routes.home)}>
                      Inicio
                    </a>
                  </li>
                  <li>
                    <a
                      role='button'
                      onClick={() => router.push(Routes.products)}
                    >
                      Productos
                    </a>
                  </li>
                  <li>
                    <a role='button' onClick={() => router.push(Routes.home)}>
                      Contacto
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='flex w-24 items-center justify-between'>
            <UserValidation />
            <button
              onClick={() => router.push(Routes.checkout)}
              className='relative'
            >
              {productQuantity > 0 && (
                <div
                  className='absolute -right-2  flex h-4 w-4 items-center 
                justify-center rounded-full bg-red-400  text-white'
                >
                  <span className=' text-xs font-extralight '>
                    {productQuantity}
                  </span>
                </div>
              )}
              <ShoppingCartIcon strokeWidth={1} />
            </button>
          </div>
        </Wrapper>
      </nav>
    </header>
  );
};

export default PrincipalHeader;
