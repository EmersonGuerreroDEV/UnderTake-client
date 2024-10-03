'use client';
import { ShoppingCartIcon, UserIcon } from 'lucide-react';
// components/Header.tsx
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react';
import { Routes } from '~/core/config/routes';
import { CartContext } from '~/core/providers/store-provider';
import Wrapper from './wrapper';

const Header: React.FC = () => {
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
        <div className='border-none bg-black p-3 text-center text-sm font-light  uppercase text-white lg:text-xl '>
          ¡Descuento del 20% en tu primera compra!
        </div>
      </div>
      <nav
        className={`flex items-center justify-between px-8  transition-all duration-300 ease-in-out ${isScrolled ? 'h-20 -translate-y-12 bg-white text-black' : 'h-12 translate-y-0 bg-transparent text-white'}`}
      >
        <Wrapper className='flex justify-between '>
          <div className='flex hidden h-full items-center space-x-12 lg:block'>
            <div className='text-xl font-light'>Mi Tienda</div>
            <ul className='flex space-x-12 font-light uppercase '>
              <li>Inicio</li>
              <li>Productos</li>
              <li>Contacto</li>
            </ul>
          </div>
          <div className='flex w-24 justify-between'>
            <UserIcon strokeWidth={1} />
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

export default Header;
