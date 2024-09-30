import { FacebookIcon, MailIcon, PhoneIcon, TwitterIcon } from 'lucide-react';
import Image from 'next/image';
import Wrapper from '../ui/wrapper';

const Footer = () => {
  const visa = '/assets/images/paymethods/credit/visa.svg';
  const mastercard = '/assets/images/paymethods/credit/mastercard.svg';
  const nequi = '/assets/images/paymethods/debit/nequi.svg';
  const bancolombia = '/assets/images/paymethods/debit/bancolombia.svg';
  const pse = '/assets/images/paymethods/debit/pse.svg';
  const daviplata = '/assets/images/paymethods/debit/daviplata.svg';
  const efecty = '/assets/images/paymethods/debit/efecty.png';
  const addi = '/assets/images/paymethods/debit/addi.png';

  return (
    <div className=' bg-black'>
      <Wrapper>
        <div className='grid w-full grid-cols-2 gap-8 py-12 text-white md:grid-cols-4 lg:gap-0'>
          <div className='grid text-sm font-extralight text-gray-50 md:place-content-center'>
            <ul className='space-y-2'>
              <h3 className='text-base font-semibold'>Atención al cliente</h3>
              <li className='underline'>Contacto</li>
              <li className='underline'>Términos y condiciones</li>
              <li className='underline'>Servicios</li>
              <li className='underline'>Políticas de seguridad</li>
            </ul>
          </div>
          <div className='grid text-sm font-extralight text-gray-50 lg:place-content-center'>
            <ul className='space-y-2'>
              <h3 className='text-base font-semibold'>Guía de compra</h3>
              <li className='underline'>Crea una cuenta</li>
              <li className='underline'>Paga</li>
              <li className='underline'>Envío</li>
            </ul>
          </div>
          <div className='grid  lg:place-content-center'>
            <ul className='space-y-2'>
              <h3 className='text-base font-semibold'>Métodos de pago</h3>
              <div className='grid grid-cols-3 gap-4'>
                <Image
                  alt='visa'
                  src={visa}
                  style={{ objectFit: 'contain' }}
                  className='bg-center object-cover'
                  width={30}
                  height={30}
                />
                <Image
                  alt='mastercard'
                  src={mastercard}
                  style={{ objectFit: 'contain' }}
                  className='bg-center object-cover'
                  width={30}
                  height={30}
                />
                <Image
                  alt='nequi'
                  src={nequi}
                  style={{ objectFit: 'contain' }}
                  className='bg-white bg-center object-cover p-1'
                  width={70}
                  height={70}
                />{' '}
                <Image
                  alt='bancolombia'
                  src={bancolombia}
                  style={{ objectFit: 'contain' }}
                  className='bg-white bg-center object-cover p-1'
                  width={90}
                  height={90}
                />
                <Image
                  alt='pse'
                  src={pse}
                  style={{ objectFit: 'contain' }}
                  className='bg-center object-cover'
                  width={30}
                  height={30}
                />
                <Image
                  alt='addi'
                  src={addi}
                  style={{ objectFit: 'contain' }}
                  className='bg-center object-cover'
                  width={40}
                  height={40}
                />
                <Image
                  alt='effecty'
                  src={efecty}
                  style={{ objectFit: 'contain' }}
                  className='bg-white bg-center object-cover p-1'
                  width={60}
                  height={60}
                />
                <Image
                  alt='daviplata'
                  src={daviplata}
                  style={{ objectFit: 'contain' }}
                  className='bg-center object-cover'
                  width={30}
                  height={30}
                />
              </div>
            </ul>
          </div>
          <div className='grid  lg:place-content-center'>
            <ul className='space-y-2'>
              <h3 className='text-base font-semibold'>Redes sociales</h3>
              <div className='grid  gap-4'>
                <div className='flex space-x-4'>
                  <FacebookIcon />
                  <TwitterIcon />
                </div>

                <div className='flex items-center space-x-1'>
                  <MailIcon />
                  <span className='text-xs'>undertake@gmail.com</span>
                </div>

                <div className='flex items-center space-x-1'>
                  <PhoneIcon />
                  <span className='text-xs'>31000000000 </span>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Footer;
