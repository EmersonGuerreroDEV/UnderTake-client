import Image from 'next/image';
import Title from '../../ui/title';
import Wrapper from '../../ui/wrapper';

const Payments = () => {
  const visa = '/assets/images/paymethods/credit/visa.svg';
  const mastercard = '/assets/images/paymethods/credit/mastercard.svg';
  const nequi = '/assets/images/paymethods/debit/nequi.svg';
  const bancolombia = '/assets/images/paymethods/debit/bancolombia.svg';
  const pse = '/assets/images/paymethods/debit/pse.svg';
  const daviplata = '/assets/images/paymethods/debit/daviplata.svg';
  const efecty = '/assets/images/paymethods/debit/efecty.png';
  const addi = '/assets/images/paymethods/debit/addi.png';

  return (
    <div className='mt-12 py-8'>
      <Wrapper>
        <div className='w-full space-y-8'>
          <Title title='Métodos de pago' size='xl' />

          <div className='flex w-full flex-wrap justify-between gap-2 lg:flex-row'>
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
