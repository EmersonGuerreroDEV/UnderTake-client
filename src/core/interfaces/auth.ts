export interface LoginProps {
  email: string;
  password: string;
}

export interface RegisterProps {
  fullName: string;
  email: string;
  document: number | string;
  password?: string;
  phone: string;
}

export interface ForgotProps {
  email: string;
}

export interface RecoveryPassword {
  password: string;
}
