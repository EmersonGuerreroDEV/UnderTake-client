'use client';

import { usePathname } from 'next/navigation';
import { createContext, ReactNode, useEffect, useState } from 'react';
import CommandMenu from './index';

interface CommandMenuContextType {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const CommandMenuContext = createContext<CommandMenuContextType>({
  open: false,
  setOpen: () => {}
});

interface CommandMenuProviderProps {
  children: ReactNode;
}

const CommandMenuProvider: React.FC<CommandMenuProviderProps> = ({
  children
}) => {
  const pathName = usePathname();

  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [pathName]);

  console.log(open);

  return (
    <CommandMenuContext.Provider value={{ open, setOpen }}>
      <CommandMenu />
      {children}
    </CommandMenuContext.Provider>
  );
};

export default CommandMenuProvider;
