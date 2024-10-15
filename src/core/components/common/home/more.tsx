import Title from '../../ui/title';
import Wrapper from '../../ui/wrapper';
import PromotionalCard from '../products/promotional-card';

interface MoreProps {
  title: string;
}
const More = ({ title }: MoreProps) => {
  return (
    <div className='more mt-12'>
      <Wrapper>
        <div className=' w-full space-y-4'>
          <Title title={title} size='xl' />
          <div className=' grid w-full gap-4 md:grid-cols-2 md:gap-8  lg:grid-cols-4'>
            <PromotionalCard />
            <PromotionalCard />
            <PromotionalCard />
            <PromotionalCard />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default More;
