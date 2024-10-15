import { DEFAULT_QUERY_PAGINATION_LIMIT } from '../utils/constanst';
import useQueryParams from './useQueryParams';

interface UsePaginationParamsReturn {
  page: number;
  limit: number;
  search: string | undefined;
  dateInit: string | undefined;
  dateEnd: string | undefined;
  filter: string | undefined;
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

  return {
    page,
    limit,
    search,
    dateInit,
    dateEnd,
    filter
  };
};

export default usePaginationParams;
