'use client';
import ResultProducts from '~/core/components/common/search';
import Filters from '~/core/components/common/search/filters';
import Wrapper from '~/core/components/ui/wrapper';
import useProducts from '~/core/hooks/queries/use-products';
import useQueryParams from '~/core/hooks/use-query-params';

const Search = () => {
  const { params } = useQueryParams();
  const { data, isLoading } = useProducts();

  return (
    <div className='mt-24 w-full bg-slate-50'>
      <Wrapper>
        <Filters />
        <ResultProducts product={data} isLoading={isLoading} />
      </Wrapper>
    </div>
  );
};

export default Search;
