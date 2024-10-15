'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '~/core/components/ui/card';
import LoadingPage from '~/core/components/ui/loading/page';
import Wrapper from '~/core/components/ui/wrapper';
import useOrder from '~/core/hooks/queries/use-order';
import { CartProp } from '~/core/interfaces/cart';
import Helpers from '~/core/utils/helpers';

const OrderPurchase = () => {
  const { data, isLoading } = useOrder();

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div className='min-h-screen bg-gray-100 py-24'>
      <Wrapper>
        <Card className='mx-auto w-full max-w-xl rounded-xl border border-gray-300 bg-white p-6 shadow-lg'>
          <CardHeader>
            <CardTitle className='text-2xl font-bold text-gray-800'>
              Detalle de Compra
            </CardTitle>
            <CardDescription className='text-gray-600'>
              Información sobre tu compra reciente
            </CardDescription>
          </CardHeader>
          <CardContent className='text-gray-700'>
            <div className='mb-6'>
              <h2 className='mb-2 text-xl font-semibold'>
                Información del Pedido
              </h2>
              <p className='mb-1 text-sm font-extralight'>
                <strong className='font-medium'>ID de Pedido:</strong> {data.id}
              </p>
              <p className='mb-1 font-extralight'>
                <strong className='font-medium'>Estado:</strong>{' '}
                <span className='font-medium text-yellow-600'>Pendiente</span>
              </p>
              <p className='font-extralight'>
                <strong className='font-medium'>Fecha de Creación:</strong>{' '}
                {new Date(data.createdAt).toLocaleDateString()}
              </p>
            </div>

            <div className='mb-6'>
              <h2 className='mb-2 text-xl font-semibold'>
                Detalles del Pedido
              </h2>
              <table className='min-w-full border border-gray-300 bg-gray-50'>
                <thead>
                  <tr className='bg-gray-200'>
                    <th className='border-b px-4 py-2 text-left'>Producto</th>
                    <th className='border-b px-4 py-2 text-left'>Cantidad</th>
                    <th className='border-b px-4 py-2 text-right'>
                      Precio Unitario
                    </th>
                    <th className='border-b px-4 py-2 text-right'>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.orderDetails?.map((product: CartProp) => (
                    <tr key={product.id} className='border-b'>
                      <td className='px-4 py-2'>{product?.product?.name}</td>
                      <td className='px-4 py-2'>{product.quantity}</td>
                      <td className='px-4 py-2 text-right'>
                        {Helpers.formatCurrency(product.price)}
                      </td>
                      <td className='px-4 py-2 text-right'>
                        {Helpers.formatCurrency(
                          product.price * product.quantity
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className='mt-4'>
              <h2 className='text-xl font-semibold'>Total de la Compra</h2>
              <p className='text-2xl font-bold text-gray-800'>
                {Helpers.formatCurrency(data.total)}
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <p className='text-center text-sm text-gray-500'>
              Gracias por tu compra. ¡Vuelve pronto!
            </p>
          </CardFooter>
        </Card>
      </Wrapper>
    </div>
  );
};

export default OrderPurchase;
