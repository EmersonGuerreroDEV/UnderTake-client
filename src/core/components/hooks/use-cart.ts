import { useAtom } from 'jotai';
import { toast } from 'sonner';
import { cartAtom } from '~/core/atom/cart';
import { CartProp } from '~/core/interfaces/cart';

const useCart = () => {
  const [cart, setCart] = useAtom(cartAtom);

  const addProduct = (product: CartProp) => {
    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
      toast.success('Producto agregado al carro de compra');
    }
  };

  const removeProduct = (productId: number) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const updateQuantity = (productId: number, quantity: number) => {
    console.log(productId, quantity);
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity } : item
    );
    setCart(updatedCart);
  };

  return { cart, setCart, addProduct, removeProduct, updateQuantity };
};

export default useCart;
