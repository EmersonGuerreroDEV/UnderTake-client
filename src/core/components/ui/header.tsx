'use client';
import { ShoppingCartIcon, UserIcon } from 'lucide-react';
// components/Header.tsx
import React, { useEffect, useState } from 'react';
import Wrapper from './wrapper';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBanner, setShowBanner] = useState(true);

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
        <div className='border-none bg-black p-3 text-center  font-light uppercase text-white '>
          ¡Descuento del 20% en tu primera compra!
        </div>
      </div>
      <nav
        className={`flex items-center justify-between px-8  transition-all duration-300 ease-in-out ${isScrolled ? 'h-20 -translate-y-12 bg-white text-black' : 'h-12 translate-y-0 bg-transparent text-white'}`}
      >
        <Wrapper className='flex justify-between'>
          <div className='flex h-full items-center space-x-12'>
            <div className='text-xl font-light'>Mi Tienda</div>
            <ul className='flex space-x-12 font-light uppercase '>
              <li>Inicio</li>
              <li>Productos</li>
              <li>Contacto</li>
            </ul>
          </div>
          <div className='flex w-24 justify-between'>
            <UserIcon strokeWidth={1} />
            <ShoppingCartIcon strokeWidth={1} />
          </div>
        </Wrapper>
      </nav>
    </header>
  );
};

export default Header;
