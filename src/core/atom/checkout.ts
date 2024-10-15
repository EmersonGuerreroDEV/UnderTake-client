import { atomWithStorage } from 'jotai/utils';
import { Checkout } from '../interfaces/checkout';

export const checkoutAtom = atomWithStorage<Checkout | null>('checkout', null);
