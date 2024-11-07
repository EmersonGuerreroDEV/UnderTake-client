export const pathFooterExcluded = [
  '/auth/sign-in',
  '/auth/sign-up',
  '/auth-password-reset',
  '/auth-password-reset-done',
  '/checkout'
];

export const pathPrincipalHeaderIncluded = [
  '/',
  '/profile',
  '/products',
  '/purchases',
  '/search'
];

export const getInitials = (fullName: string): string => {
  if (!fullName) return '';
  const names = fullName.trim().split(' ');

  if (names.length === 1) {
    return names[0].charAt(0).toUpperCase();
  }

  return `${names[0].charAt(0)}${names[1].charAt(0)}`.toUpperCase();
};
