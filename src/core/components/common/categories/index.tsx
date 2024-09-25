import { categories } from '~/core/config/data';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import Wrapper from '../../ui/wrapper';
import CardCategories from './card';

const Categories = () => {
  return (
    <div>
      <Wrapper>
        <Card className='w-full'>
          <CardHeader>
            <CardTitle className='text-orange-400'>Categorías</CardTitle>
          </CardHeader>
          <CardContent className='w-full '>
            <div className='grid w-full grid-cols-6 gap-8'>
              {categories.map((category) => {
                return <CardCategories key={category.id} {...category} />;
              })}
            </div>
          </CardContent>
        </Card>
      </Wrapper>
    </div>
  );
};

export default Categories;
