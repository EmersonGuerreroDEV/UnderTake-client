import { ProductProp } from '~/core/interfaces/cart';
import LoadingPage from '../../ui/loading/page';
import CardProduct from '../products/card';

interface ResultProductProps {
  product: ProductProp[];
  isLoading: boolean;
}

const ResultProducts = ({ product, isLoading }: ResultProductProps) => {
  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div className=' grid w-full gap-4 md:grid-cols-2 md:gap-8  lg:grid-cols-4'>
      {product.map((product: ProductProp) => {
        return (
          <CardProduct
            key={product.id}
            className='p-0  shadow-none'
            product={product}
          />
        );
      })}
    </div>
  );
};

export default ResultProducts;
