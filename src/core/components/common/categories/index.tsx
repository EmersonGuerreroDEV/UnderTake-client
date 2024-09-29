'use client';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { categories } from '~/core/config/data';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import Wrapper from '../../ui/wrapper';
import CardCategories from './card';

interface Category {
  id: string;
  nombre: string;
}

const Categories: React.FC = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  return (
    <div className='relative flex w-full bg-white'>
      <div className='absolute flex h-[456px] w-full justify-between bg-white'>
        <div className='z-10 h-full w-52 bg-gradient-to-r from-white via-gray-100 to-transparent' />
        <div className='z-10 h-full w-52 bg-gradient-to-l from-white via-gray-100 to-transparent' />
      </div>
      <Card className='w-full border-x-0 shadow-none'>
        <Wrapper>
          <CardHeader>
            <CardTitle className='t '>Categorías</CardTitle>
          </CardHeader>
        </Wrapper>

        <CardContent className='w-full'>
          <Carousel
            responsive={responsive}
            infinite={true}
            containerClass='w-full overflow-hidden pb-12'
            itemClass=''
            autoPlay
            arrows={false}
            autoPlaySpeed={3000}
            showDots
          >
            {categories
              .reduce<Category[][]>((acc, category, index) => {
                if (index % 2 === 0) {
                  //@ts-ignore
                  acc.push([category]);
                } else {
                  //@ts-ignore
                  acc[acc.length - 1].push(category);
                }
                return acc;
              }, [])
              .map((pair, index) => (
                <div
                  key={index}
                  className='mx-auto flex w-full flex-col items-center space-y-8'
                >
                  {pair.map((category) => (
                    <div key={category.id} className='flex flex-col'>
                      <CardCategories {...category} />
                    </div>
                  ))}
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
