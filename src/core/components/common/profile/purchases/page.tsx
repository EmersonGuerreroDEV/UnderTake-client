import { Eye } from 'lucide-react';
import { useRouter } from 'next/navigation';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '~/core/components/ui/table';
import { Routes } from '~/core/config/routes';
import usePurchase from '~/core/hooks/queries/use-purchase';
import { PurchaseTable } from '~/core/interfaces/purchase';
import Helpers from '~/core/utils/helpers';

const Purchases = () => {
  const { allPurchase, isLoadingPurchase } = usePurchase();
  const router = useRouter();

  return (
    <div className='p-6 lg:p-8'>
      <h1 className='text-start text-xl font-semibold text-primary '>
        Compras
      </h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[100px]'>Invoice</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead>Método de pago</TableHead>
            <TableHead>Fecha de compra</TableHead>
            <TableHead className='text-right'>Total</TableHead>
            <TableHead className='text-right'>Ver</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className=''>
          {allPurchase?.map((invoice: PurchaseTable) => (
            <TableRow className='h-12 text-sm font-light' key={invoice?.id}>
              <TableCell className='font-medium'>INV{invoice?.id}</TableCell>
              <TableCell className='font-medium'>
                {invoice?.statusId?.name}
              </TableCell>
              <TableCell className='font-medium'>
                {invoice?.paymentMethod?.name}
              </TableCell>
              <TableCell className='font-medium'>
                {new Date(invoice?.createdAt).toLocaleDateString()}
              </TableCell>
              <TableCell className='text-right'>
                {Helpers.formatCurrency(invoice.total)}
              </TableCell>
              <TableCell className='text-right'>
                <button
                  onClick={() =>
                    router.push(Routes.purchase + `/${invoice.id}`)
                  }
                  className='text-gray-400'
                >
                  <Eye strokeWidth={1} size={20} />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Purchases;
