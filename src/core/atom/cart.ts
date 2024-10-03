import { atomWithStorage } from 'jotai/utils';
import { CartProp } from '../interfaces/cart';

export const cartAtom = atomWithStorage<CartProp[] | []>('childrenAddress', []);
