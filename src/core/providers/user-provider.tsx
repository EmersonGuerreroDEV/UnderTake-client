'use client';
import { createContext, useMemo } from 'react';
import useUser from '../hooks/queries/use-user';
import { UserProps } from '../interfaces/user';

// // import useUser from "../hooks/useUser";

interface UserProviderProps {
  children: React.ReactNode;
}

interface UserContextProp {
  user?: UserProps | null;
  isLoading: boolean;
  refetch: () => void;
  handleLogout: () => void;
}

export const UserContext = createContext<UserContextProp>(
  {} as UserContextProp
);

const UserProvider = ({ children }: UserProviderProps) => {
  const { user, refetch, isLoading, handleLogout } = useUser();

  const value = useMemo(() => {
    return { user, refetch, isLoading, handleLogout };
  }, [handleLogout, isLoading, refetch, user]);

  return (
    <UserContext.Provider value={value}>
      <div>{children}</div>
    </UserContext.Provider>
  );
};

export default UserProvider;
