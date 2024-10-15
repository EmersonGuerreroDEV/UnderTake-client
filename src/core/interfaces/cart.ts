import { Variant } from './products';

export interface CartProp {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  discount: number;
  quantity: number;
  variantId: number;
  variants?: Variant[];
}

export interface ProductProp {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  discount: number;
  category: string;
  rating: number;
  stock: number;
  variants: Variant[];
}
