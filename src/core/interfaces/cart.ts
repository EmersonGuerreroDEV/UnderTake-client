export interface CartProp {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  discount: number;
  quantity: number;
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
}
