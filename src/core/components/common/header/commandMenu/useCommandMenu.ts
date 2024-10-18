import { useContext } from 'react';

import useRouteChange from '~/core/hooks/useRouteChange';
import { CommandMenuContext } from './CommandMenuProvider';

const useCommandMenu = () => {
  const { open, setOpen } = useContext(CommandMenuContext);
  useRouteChange(() => setOpen(false));

  return { open, setOpen };
};

export default useCommandMenu;
