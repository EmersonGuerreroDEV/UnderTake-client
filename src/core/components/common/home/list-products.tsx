import Title from '../../ui/title';
import Wrapper from '../../ui/wrapper';
import CardProduct from '../products/card';

const ListProducts = () => {
  return (
    <div className=' mt-12 w-full space-y-4'>
      <Wrapper>
        <div className='w-full space-y-4'>
          <Title title='Te va a gustar' size='xl' />

          <div className='grid grid-cols-4'>
            {Array.from({ length: 20 }, (_, index) => (
              <CardProduct key={index} />
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default ListProducts;
