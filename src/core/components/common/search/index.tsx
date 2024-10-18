import { ProductProp } from '~/core/interfaces/cart';
import { Card, CardContent } from '../../ui/card';
import LoadingPage from '../../ui/loading/page';

interface ResultProductProps {
  product: ProductProp[];
  isLoading: boolean;
}

const ResultProducts = ({ product, isLoading }: ResultProductProps) => {
  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <Card className='mt-4 w-[300px] rounded-lg border bg-slate-50/40 py-2 shadow-lg'>
      <CardContent>sd</CardContent>
    </Card>
  );
};

export default ResultProducts;
