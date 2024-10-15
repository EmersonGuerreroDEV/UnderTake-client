import Title from '../../ui/title';
import Wrapper from '../../ui/wrapper';

const ListProducts = () => {
  return (
    <div className=' mt-4 w-full space-y-4 pb-8 md:mt-12'>
      <Wrapper>
        <div className='w-full space-y-4'>
          <Title title='Te va a gustar' size='xl' />

          {/* <div className='grid grid-cols-2 md:grid-cols-5'>
            {offerProducts.map((product) => {
              return <CardProduct product={product} key={product.id} />;
            })}
          </div> */}
        </div>
      </Wrapper>
    </div>
  );
};

export default ListProducts;
