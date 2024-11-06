import React from 'react';

const BlackFridayBanner: React.FC = () => {
  return (
    <div className='relative flex w-full items-center justify-center bg-black py-8 text-white'>
      {/* Fondo de ladrillo */}
      <div className='absolute inset-0 bg-black bg-opacity-75'></div>

      {/* Contenido del banner */}
      <div className='relative flex flex-col items-center space-y-4 md:space-y-6'>
        <div className='text-center text-xs uppercase tracking-wider md:text-sm lg:text-base'>
          Productos hasta
        </div>
        <div className='text-6xl font-bold text-pink-500 md:text-8xl lg:text-9xl'>
          30%
        </div>
        <div className='text-center text-xs uppercase tracking-wider md:text-sm lg:text-base'>
          de descuento
        </div>
        <div className='text-5xl font-bold text-white md:text-7xl lg:text-8xl'>
          Black <span className='text-pink-500'>Friday</span>
        </div>
        <div className='text-center text-xs uppercase tracking-wider md:text-sm lg:text-base'>
          Desde <span className='text-5xl text-pink-500'>$199.00</span>
        </div>
      </div>
    </div>
  );
};

export default BlackFridayBanner;
