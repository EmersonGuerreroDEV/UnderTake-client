import React from 'react';

const FirstPurchaseBanner: React.FC = () => {
  return (
    <div className='flex h-64 items-center justify-center bg-black p-8 text-white'>
      <div className='flex flex-col items-center space-y-4 text-center'>
        <p className='text-lg font-light tracking-widest'>OBTÉN</p>
        <p className='text-5xl font-bold text-pink-500'>20% DE DESCUENTO</p>
        <p className='text-lg font-light'>EN TU PRIMERA COMPRA</p>
      </div>
      <div className='mx-10 flex flex-col  items-center justify-center'>
        <div className='relative px-4 py-1 text-center'>
          <span className='text-xl font-extrabold text-white'>primera</span>
          <span className='text-xl font-extrabold text-pink-500'> compra</span>
          <div className='absolute inset-0 animate-pulse rounded-full border-4 border-white'></div>
        </div>
        <div className='mt-2 flex flex-col items-center space-y-4 text-center'>
          <p className='text-lg font-light tracking-widest'>REGÍSTRATE AHORA</p>
          <button className='mt-2 rounded-lg bg-pink-500 px-6 py-2 font-bold text-white transition duration-300 hover:bg-pink-600'>
            Obtener Descuento
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstPurchaseBanner;
