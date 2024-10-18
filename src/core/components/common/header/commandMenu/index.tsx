import { useDebounce } from '@uidotdev/usehooks';
import { Command } from 'cmdk';
import { SearchIcon, XCircleIcon } from 'lucide-react';
import { useState } from 'react';
import useCommandMenu from './useCommandMenu';
// Importa aquí los tipos de tus datos si es necesario
// import { Product } from './types';

const CommandMenu: React.FC = () => {
  const { open, setOpen } = useCommandMenu();

  const [searchFilter, setSearchFilter] = useState<string>('');
  const debouncedSearchValue = useDebounce<string | undefined>(
    searchFilter,
    500
  );

  // const { data, isLoading } = useQuery({
  //   queryKey: ['products-search', debouncedSearchValue],
  //   queryFn: () =>
  //     StoreRepository.getProducts(1, 20, null, debouncedSearchValue),
  //   keepPreviousData: true,
  //   enabled: !!debouncedSearchValue?.trim()
  // });

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      shouldFilter={false}
      label='Global Command Menu'
    >
      <div className='sticky top-0 z-10 shadow-sm'>
        <SearchIcon
          className='absolute left-3 top-[47%] translate-y-[-50%] transform text-gray-600'
          size={20}
        />
        <Command.Input
          placeholder='Buscar...'
          // onChangeCapture={(e) => setSearchFilter()}
        />
        <XCircleIcon
          className='absolute right-3 top-[47%] translate-y-[-50%] transform cursor-pointer text-gray-600'
          size={20}
          onClick={() => setOpen(false)}
        />
      </div>
      <Command.List className='pb-4'>
        {/* {isLoading && <Command.Loading></Command.Loading>}
        {!isLoading && data?.docs.length === 0 && (
          <Command.Empty>
            <span className='relative top-8'>
              No encontramos lo que buscabas 😢
            </span>
          </Command.Empty>
        )} */}

        <Command.Group>
          {/* {debouncedSearchValue &&
            data?.docs.map((item: Product) => (
              <Link
                href={`${AppRoutes.store}/product/${item.slug}`}
                key={item.id}
              >
                <Command.Item>
                  <CommandItemCard
                    picture={item.gallery[0]?.url ?? item.gallery[0]}
                    name={item.name}
                    color={
                      item.color?.name !== 'Por defecto'
                        ? `(${item.color?.name.trim()})`
                        : null
                    }
                    category={item.category?.name}
                    price={item.price}
                  />
                </Command.Item>
              </Link>
            ))} */}
        </Command.Group>
      </Command.List>
    </Command.Dialog>
  );
};

export default CommandMenu;
