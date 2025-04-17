import { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface CartContextType {
  cartItems: any[];
  getItemCount: () => number;
  addToCart: (product: any) => void;
  removeFromCart: (productId: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [hasMounted, setHasMounted] = useState(false); // ⬅️ Add this

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
    setHasMounted(true); // ⬅️ Mark as mounted
  }, []);

  useEffect(() => {
    if (hasMounted) {
      localStorage.setItem('cart', JSON.stringify(cartItems));
    }
  }, [cartItems, hasMounted]);

  const getItemCount = () => cartItems.length;

  const addToCart = (product: any) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (productId: string) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
  };

  // ⛔ Don't render until mounted on client
  if (!hasMounted) return null;

  return (
    <CartContext.Provider value={{ cartItems, getItemCount, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
