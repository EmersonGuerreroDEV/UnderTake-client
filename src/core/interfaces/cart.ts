export interface CartProp {
  id: number;
  name: string;
  price: number;
  quantity: number;
  description?: string;
  discount?: string | number;
  discountedPrice?: number;
  image: string;
}

export interface ProductProp {
  id: number;
  name: string;
  price: number;
  quantity: number;
  description: string;
  image: string;
}
