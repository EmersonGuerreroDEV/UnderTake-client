'use client';
// components/Header.tsx
import React, { useEffect, useState } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBanner, setShowBanner] = useState(true);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > 50);
    setShowBanner(scrollY < 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 w-full transition-all duration-300 ease-in-out ${isScrolled ? ' h-16   shadow' : 'h-12 bg-transparent'}`}
    >
      <div
        className={`h-12 transition-transform duration-500 ease-in-out ${showBanner ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className='bg-black p-3 text-center font-light uppercase text-white '>
          ¡Descuento del 20% en tu primera compra!
        </div>
      </div>
      <nav
        className={`flex items-center justify-between px-8  transition-all duration-300 ease-in-out ${isScrolled ? 'h-16 -translate-y-12 bg-[#FCEDE9E6]' : 'h-12 translate-y-0 bg-transparent'}`}
      >
        <div className='text-xl font-light'>Mi Tienda</div>
        <ul className='flex space-x-4 font-light uppercase'>
          <li>Inicio</li>
          <li>Productos</li>
          <li>Contacto</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
