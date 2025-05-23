import { Loader } from 'lucide-react';
import { useContext, useState } from 'react';
import { Button } from '~/core/components/ui/button';
import { Card, CardContent } from '~/core/components/ui/card';
import { Label } from '~/core/components/ui/label';
import { CartContext } from '~/core/providers/store-provider';
import Helpers from '~/core/utils/helpers';
import ItemCartDetail from './item-cart-detail';

interface DetailsProps {
  onClick: () => void;
  isLoading?: boolean;
  viewProducts?: boolean;
}

const Details = ({ onClick, isLoading, viewProducts = true }: DetailsProps) => {
  const { cart, subTotalCalcule } = useContext(CartContext);
  const [discount, setDiscount] = useState(0);

  if (!cart) return;

  const totalCalcule = () => {
    const subTotal = subTotalCalcule();
    const discountAmount = (subTotal * discount) / 100;
    const total = subTotal - discountAmount;
    return total;
  };

  return (
    <Card className='bg-slate-100  lg:w-[500px]'>
      <CardContent className='space-y-2'>
        <h1 className='text-center'>Detalle de la compra</h1>
        {viewProducts && (
          <div className='rounded-lg bg-white p-4'>
            <div className='grid w-full max-w-sm items-center gap-1.5'>
              {cart?.map((product) => {
                return <ItemCartDetail key={product.id} {...product} />;
              })}
            </div>
          </div>
        )}
        <div className='mt-4 space-y-4 rounded-lg bg-white p-4'>
          <div className='flex justify-between'>
            <Label htmlFor='picture' className='text-gray-400'>
              Subtotal:
            </Label>
            <Label htmlFor='picture'>
              {Helpers.formatCurrency(subTotalCalcule())}
            </Label>
          </div>
          <div className='flex justify-between'>
            <Label htmlFor='picture' className='text-gray-400'>
              Descuento:
            </Label>
            <Label htmlFor='picture'>{discount}%</Label>
          </div>
          <div className='flex justify-between bg-slate-100 py-3'>
            <Label htmlFor='picture' className='text-gray-400'>
              Total:
            </Label>
            <Label htmlFor='picture'>
              {Helpers.formatCurrency(totalCalcule())}
            </Label>
          </div>
          <div>
            <Button
              onClick={onClick}
              className='bg-orange-500 font-bold text-white hover:bg-orange-700 '
            >
              {isLoading ? <Loader className='animate-spin' /> : 'Continuar'}
            </Button>

            <Button
              disabled={isLoading}
              onClick={onClick}
              className='mt-4 border border-blue-400 bg-white font-light  text-blue-400 hover:bg-white'
            >
              {isLoading ? (
                <Loader className='animate-spin' />
              ) : (
                'Seguir comprando'
              )}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Details;
