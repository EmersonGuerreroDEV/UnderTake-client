import { DEFAULT_QUERY_PAGINATION_LIMIT } from '../utils/constanst';
import useQueryParams from './useQueryParams';

interface UsePaginationParamsReturn {
  page: number;
  limit: number;
  search: string | undefined;
  dateInit: string | undefined;
  dateEnd: string | undefined;
  filter: string | undefined;
  category: string | undefined;
  priceInit: string | undefined;
  priceEnd: string | undefined;
}

const usePaginationParams = (): UsePaginationParamsReturn => {
  const { params } = useQueryParams();

  const page = params.get('page') ? parseInt(params.get('page') as string) : 1;
  const limit = params.get('limit')
    ? parseInt(params.get('limit') as string)
    : DEFAULT_QUERY_PAGINATION_LIMIT;
  const search = params.get('search');
  const dateInit = params.get('dateInit');
  const dateEnd = params.get('dateEnd');
  const filter = params.get('filter');
  const category = params.get('category');
  const priceInit = params.get('priceInit');
  const priceEnd = params.get('priceEnd');
  return {
    page,
    limit,
    search,
    dateInit,
    dateEnd,
    filter,
    category,
    priceInit,
    priceEnd
  };
};

export default usePaginationParams;
