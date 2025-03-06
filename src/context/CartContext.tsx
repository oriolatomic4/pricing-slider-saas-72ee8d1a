
import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { toast } from "sonner";
import { SoftwarePlan } from "@/components/encoder/SoftwarePlanSelector";
import { setCartSidebarState } from "@/lib/utils";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: "accessory" | "software";
}

export interface EncoderPurchase {
  count: number;
  pricePerUnit: number;
}

interface CartContextType {
  cart: { [key: string]: number };
  selectedPlan: SoftwarePlan | null;
  encoderPurchase: EncoderPurchase | null;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartItemCount: () => number;
  setSelectedPlan: (plan: SoftwarePlan | null) => void;
  setEncoderPurchase: (purchase: EncoderPurchase | null) => void;
  getSubtotal: () => number;
  updateCartItemQuantity: (productId: string, quantity: number) => void;
  completePurchase: () => void;
}

// Local storage keys
const CART_STORAGE_KEY = 'vitruve-cart';
const PLAN_STORAGE_KEY = 'vitruve-plan';
const ENCODER_STORAGE_KEY = 'vitruve-encoder';

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<{ [key: string]: number }>({});
  const [selectedPlan, setSelectedPlan] = useState<SoftwarePlan | null>(null);
  const [encoderPurchase, setEncoderPurchase] = useState<EncoderPurchase | null>(null);

  // Try to load cart from localStorage on initial render
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);
      const savedPlan = localStorage.getItem(PLAN_STORAGE_KEY);
      const savedEncoder = localStorage.getItem(ENCODER_STORAGE_KEY);
      
      if (savedCart) setCart(JSON.parse(savedCart));
      if (savedPlan) setSelectedPlan(JSON.parse(savedPlan));
      if (savedEncoder) setEncoderPurchase(JSON.parse(savedEncoder));
    } catch (e) {
      console.error('Error loading cart from localStorage', e);
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
      localStorage.setItem(PLAN_STORAGE_KEY, JSON.stringify(selectedPlan));
      localStorage.setItem(ENCODER_STORAGE_KEY, JSON.stringify(encoderPurchase));
    } catch (e) {
      console.error('Error saving cart to localStorage', e);
    }
  }, [cart, selectedPlan, encoderPurchase]);

  const addToCart = (product: Product) => {
    setCart(prev => ({
      ...prev,
      [product.id]: (prev[product.id] || 0) + 1
    }));
    
    toast.success(`Added ${product.name} to cart`);
    
    // Auto open the cart when adding items
    setCartSidebarState(true);
  };
  
  const updateCartItemQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setCart(prev => ({
      ...prev,
      [productId]: quantity
    }));
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => {
      const newCart = { ...prev };
      delete newCart[productId];
      return newCart;
    });
    
    toast.success("Item removed from cart");
  };

  // Only used when explicitly clearing the cart (not after purchase)
  const clearCart = () => {
    setCart({});
    setSelectedPlan(null);
    setEncoderPurchase(null);
    localStorage.removeItem(CART_STORAGE_KEY);
    localStorage.removeItem(PLAN_STORAGE_KEY);
    localStorage.removeItem(ENCODER_STORAGE_KEY);
  };

  // Used after completing a purchase
  const completePurchase = () => {
    // Only clear the cart after successful purchase
    setCart({});
    setSelectedPlan(null);
    setEncoderPurchase(null);
    localStorage.removeItem(CART_STORAGE_KEY);
    localStorage.removeItem(PLAN_STORAGE_KEY);
    localStorage.removeItem(ENCODER_STORAGE_KEY);
    
    toast.success("Thank you for your purchase!");
  };

  const getCartTotal = () => {
    // Calculate total from accessories
    const accessoriesTotal = Object.entries(cart).reduce((total, [productId, quantity]) => {
      if (quantity <= 0) return total; // Skip items with 0 or negative quantity
      const product = window._products?.find(p => p.id === productId);
      return total + (product?.price || 0) * quantity;
    }, 0);

    // Add software plan cost
    const planCost = selectedPlan?.price || 0;

    // Add encoder cost
    const encoderCost = encoderPurchase && encoderPurchase.count > 0 
      ? encoderPurchase.count * encoderPurchase.pricePerUnit 
      : 0;

    return accessoriesTotal + planCost + encoderCost;
  };

  const getCartItemCount = () => {
    let totalCount = 0;
    
    // Count accessories with quantity > 0
    const accessoriesCount = Object.values(cart).reduce((acc, quantity) => {
      // Only count items with quantity > 0
      return quantity > 0 ? acc + quantity : acc;
    }, 0);
    totalCount += accessoriesCount;
    
    // Count encoder (if any)
    if (encoderPurchase && encoderPurchase.count > 0) {
      totalCount += encoderPurchase.count;
    }
    
    // Count plan (if any)
    if (selectedPlan) {
      totalCount += 1;
    }
    
    return totalCount;
  };

  const getSubtotal = () => {
    return getCartTotal();
  };

  return (
    <CartContext.Provider value={{ 
      cart, 
      selectedPlan,
      encoderPurchase,
      addToCart, 
      removeFromCart, 
      clearCart, 
      getCartTotal,
      getCartItemCount,
      setSelectedPlan,
      setEncoderPurchase,
      getSubtotal,
      updateCartItemQuantity,
      completePurchase
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
