'use client';
import { useQuery } from 'react-query';
import ResultProducts from '~/core/components/common/search';
import Filters from '~/core/components/common/search/filters';
import Wrapper from '~/core/components/ui/wrapper';
import useQueryParams from '~/core/hooks/use-query-params';
import usePaginationParams from '~/core/hooks/usePaginationParams';
import ProductsRepository from '~/core/repositories/produtcs-repositorio';

const Search = () => {
  const { params } = useQueryParams();
  const { page, limit, search, category, filter } = usePaginationParams();

  const { isLoading, refetch, data } = useQuery({
    queryKey: [`product_all_search`],
    queryFn: () => ProductsRepository.getProducts({ filter, search, category }),
    onError: (err) => console.error(err)
  });

  return (
    <div className='mt-24 w-full bg-slate-50'>
      <Wrapper className='mt-32 space-x-4'>
        <Filters />
        <ResultProducts product={data} isLoading={isLoading} />
      </Wrapper>
    </div>
  );
};

export default Search;
