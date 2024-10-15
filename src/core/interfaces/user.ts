import { CityUser } from './location';

export interface UserProps {
  consecutivePayments: number;
  createAt: string;
  dateBirth: string | undefined;
  document: string;
  email: string;
  fullName: string;
  status: boolean;
  subscription: string;
  phone: string;
  password: string;
  addresses: AddressUser[];
  id: string;
}

export interface AddressUser {
  address: string;
  postal?: string;
  postalCode?: string;
  neighborhood: string;
  city: CityUser;
}

export interface sendAddressUser {
  address: string;
  postal?: string;
  postalCode?: string;
  neighborhood: string;
  city: string;
}
