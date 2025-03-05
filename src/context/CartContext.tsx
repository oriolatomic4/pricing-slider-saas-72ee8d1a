
import React, { createContext, useContext, useState, ReactNode } from "react";
import { toast } from "sonner";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: "accessory" | "software";
}

interface CartContextType {
  cart: { [key: string]: number };
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartItemCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<{ [key: string]: number }>({});

  const addToCart = (product: Product) => {
    setCart(prev => ({
      ...prev,
      [product.id]: (prev[product.id] || 0) + 1
    }));
    
    toast.success(`Added ${product.name} to cart`);
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => {
      const newCart = { ...prev };
      delete newCart[productId];
      return newCart;
    });
  };

  const clearCart = () => {
    setCart({});
  };

  const getCartTotal = () => {
    return 0; // Placeholder for future implementation
  };

  const getCartItemCount = () => {
    return Object.values(cart).reduce((acc, count) => acc + count, 0);
  };

  return (
    <CartContext.Provider value={{ 
      cart, 
      addToCart, 
      removeFromCart, 
      clearCart, 
      getCartTotal,
      getCartItemCount
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
