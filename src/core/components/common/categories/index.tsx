'use client';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import useCategory from '~/core/hooks/queries/use-category';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import Wrapper from '../../ui/wrapper';
import CardCategories from './card';

interface Category {
  id: string;
  nombre: string;
  imagen: string;
}

const Categories: React.FC = () => {
  const { allCategories, isLoadingCategory } = useCategory();

  const responsive = {
    desktop: {
      breakpoint: { max: 1920, min: 1024 },
      items: 5,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1
    }
  };

  if (!allCategories) return;

  return (
    <div className=' flex w-full flex-col bg-white'>
      <Wrapper maxScreen='w-screen-xl'>
        <CardHeader>
          <CardTitle className='text-xl font-medium uppercase text-gray-600'>
            Categorías
          </CardTitle>
        </CardHeader>
      </Wrapper>
      <Card className='w-full border-x-0 shadow-none'>
        <CardContent className='w-full'>
          <Carousel
            responsive={responsive}
            infinite={true}
            containerClass='w-full  pb-12'
            itemClass=''
            autoPlay
            arrows={false}
            autoPlaySpeed={3000}
            showDots
          >
            {allCategories.map((category) => (
              <div key={category.id} className='mx-auto flex justify-center'>
                <CardCategories {...category} />
              </div>
            ))}
          </Carousel>
        </CardContent>
      </Card>
    </div>
  );
};

export default Categories;

interface CardCategoriesProps {
  id: string;
  nombre: string;
}
