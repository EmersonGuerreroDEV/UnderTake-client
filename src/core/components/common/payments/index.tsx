import Image from 'next/image';
import Wrapper from '../../ui/wrapper';

const Payments = () => {
  const visa = '/assets/images/paymethods/credit/visa.svg';
  const mastercard = '/assets/images/paymethods/credit/mastercard.svg';
  const amex = '/assets/images/paymethods/credit/amex.svg';
  const nequi = '/assets/images/paymethods/debit/nequi.svg';
  const bancolombia = '/assets/images/paymethods/debit/bancolombia.svg';
  const pse = '/assets/images/paymethods/debit/pse.svg';
  const daviplata = '/assets/images/paymethods/debit/daviplata.svg';
  const efecty = '/assets/images/paymethods/debit/efecty.png';
  const contraentrega = '/assets/images/paymethods/debit/contraentrega.png';
  const addi = '/assets/images/paymethods/debit/addi.png';

  return (
    <div className='py-8'>
      <Wrapper>
        <div className='w-full space-y-4'>
          <h2 className='font-semibold'>Nuestros métodos de pago</h2>
          <div className='flex w-full justify-between'>
            <Image
              alt='visa'
              src={visa}
              style={{ objectFit: 'contain' }}
              className='bg-center object-cover'
              width={50}
              height={50}
            />
            <Image
              alt='mastercard'
              src={mastercard}
              style={{ objectFit: 'contain' }}
              className='bg-center object-cover'
              width={50}
              height={50}
            />
            <Image
              alt='nequi'
              src={nequi}
              style={{ objectFit: 'contain' }}
              className='bg-center object-cover'
              width={90}
              height={90}
            />{' '}
            <Image
              alt='bancolombia'
              src={bancolombia}
              style={{ objectFit: 'contain' }}
              className='bg-center object-cover'
              width={120}
              height={120}
            />
            <Image
              alt='pse'
              src={pse}
              style={{ objectFit: 'contain' }}
              className='bg-center object-cover'
              width={40}
              height={40}
            />
            <Image
              alt='addi'
              src={addi}
              style={{ objectFit: 'contain' }}
              className='bg-center object-cover'
              width={60}
              height={60}
            />
            <Image
              alt='effecty'
              src={efecty}
              style={{ objectFit: 'contain' }}
              className='bg-center object-cover'
              width={80}
              height={80}
            />
            <Image
              alt='daviplata'
              src={daviplata}
              style={{ objectFit: 'contain' }}
              className='bg-center object-cover'
              width={40}
              height={40}
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Payments;
