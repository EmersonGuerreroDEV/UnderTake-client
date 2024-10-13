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
}

export interface AddressUser {
  address: string;
  postal: string;
  neighborhood: string;
  city: string;
}
