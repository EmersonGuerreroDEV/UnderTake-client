import Wrapper from '../../ui/wrapper';
import PromotionalCard from '../products/promotional-card';

const More = () => {
  return (
    <div className='more mt-12'>
      <Wrapper>
        <div className='grid w-full grid-cols-4 gap-8'>
          <PromotionalCard />
          <PromotionalCard />
          <PromotionalCard />
          <PromotionalCard />
        </div>
      </Wrapper>
    </div>
  );
};

export default More;
