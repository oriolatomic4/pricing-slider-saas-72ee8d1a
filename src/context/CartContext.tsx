
import React, { createContext, useContext, ReactNode } from "react";
import { useCartState } from "@/hooks/useCartState";
import { CartContextType, Product, EncoderPurchase } from "@/types/cart";
import { SoftwarePlan } from "@/components/encoder/SoftwarePlanSelector";

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const cartState = useCartState();
  
  return (
    <CartContext.Provider value={cartState}>
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

// Re-export types from types/cart.ts for backward compatibility
export type { Product, EncoderPurchase };
