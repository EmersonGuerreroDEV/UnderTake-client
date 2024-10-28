import { useState } from 'react';
import { Card, CardContent } from '~/core/components/ui/card';
import useQueryParams from '~/core/hooks/use-query-params';

const Filters: React.FC = () => {
  const { addParam, removeParam } = useQueryParams();
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [priceInit, setPriceInit] = useState<number | null>(null);
  const [priceEnd, setPriceEnd] = useState<number | null>(null);

  interface CategoryChangeProps {
    categoryId: number;
  }

  const handleCategoryChange = ({ categoryId }: CategoryChangeProps) => {
    setSelectedCategories((prev) => {
      if (prev.includes(categoryId)) {
        //@ts-ignore
        removeParam('categories', categoryId?.toString());
        return prev.filter((id) => id !== categoryId);
      } else {
        addParam('categories', categoryId.toString());
        return [...prev, categoryId];
      }
    });
  };

  const handlePriceRangeChange = (range: string) => {
    if (range === '20-100') {
      setPriceInit(20);
      setPriceEnd(100);
      addParam('priceInit', '20');
      addParam('priceEnd', '100');
    } else if (range === '100-500') {
      setPriceInit(100);
      setPriceEnd(500);
      addParam('priceInit', '100');
      addParam('priceEnd', '500');
    } else if (range === 'more-500') {
      setPriceInit(500);
      setPriceEnd(null); // No se necesita priceEnd para "más de 500"
      addParam('priceInit', '500');
      removeParam('priceEnd');
    }
  };

  const handlePriceReset = () => {
    setPriceInit(null);
    setPriceEnd(null);
    removeParam('priceInit');
    removeParam('priceEnd');
  };

  return (
    <Card className='mt-4 w-[300px] rounded-lg border border-gray-200 bg-white py-4 shadow-lg'>
      <CardContent className='p-4'>
        <h2 className='mb-4 text-lg font-semibold text-gray-800'>Filtros</h2>

        <div className='mb-4'>
          <h3 className='text-md mb-2 font-semibold text-gray-700'>
            Categorías:
          </h3>
          {[1, 2, 3, 45].map((categoryId: any) => (
            <div key={categoryId} className='mb-2 flex items-center'>
              <input
                type='checkbox'
                checked={selectedCategories.includes(categoryId)}
                onChange={() => handleCategoryChange(categoryId)}
                className='mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500'
              />
              <label className='text-gray-600'>Categoría {categoryId}</label>
            </div>
          ))}
        </div>

        <div className='mb-4'>
          <h3 className='text-md mb-2 font-semibold text-gray-700'>
            Rango de precios:
          </h3>
          <div className='mb-2 flex items-center'>
            <input
              type='checkbox'
              checked={priceInit === 20 && priceEnd === 100}
              onChange={() => handlePriceRangeChange('20-100')}
              className='mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500'
            />
            <label className='text-gray-600'>$20 - $100</label>
          </div>
          <div className='mb-2 flex items-center'>
            <input
              type='checkbox'
              checked={priceInit === 100 && priceEnd === 500}
              onChange={() => handlePriceRangeChange('100-500')}
              className='mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500'
            />
            <label className='text-gray-600'>$100 - $500</label>
          </div>
          <div className='mb-2 flex items-center'>
            <input
              type='checkbox'
              checked={priceInit === 500 && priceEnd === null}
              onChange={() => handlePriceRangeChange('more-500')}
              className='mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500'
            />
            <label className='text-gray-600'>Más de $500</label>
          </div>
          <button
            onClick={handlePriceReset}
            className='mt-2 text-blue-600 hover:text-blue-800 focus:outline-none'
          >
            Resetear Rango de Precios
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Filters;
