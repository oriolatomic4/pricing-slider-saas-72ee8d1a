
import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { toast } from "sonner";
import { SoftwarePlan } from "@/components/encoder/SoftwarePlanSelector";

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
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<{ [key: string]: number }>({});
  const [selectedPlan, setSelectedPlan] = useState<SoftwarePlan | null>(null);
  const [encoderPurchase, setEncoderPurchase] = useState<EncoderPurchase | null>(null);

  // Try to load cart from localStorage on initial render
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('vitruve-cart');
      const savedPlan = localStorage.getItem('vitruve-plan');
      const savedEncoder = localStorage.getItem('vitruve-encoder');
      
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
      localStorage.setItem('vitruve-cart', JSON.stringify(cart));
      localStorage.setItem('vitruve-plan', JSON.stringify(selectedPlan));
      localStorage.setItem('vitruve-encoder', JSON.stringify(encoderPurchase));
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

  const clearCart = () => {
    setCart({});
    setSelectedPlan(null);
    setEncoderPurchase(null);
    localStorage.removeItem('vitruve-cart');
    localStorage.removeItem('vitruve-plan');
    localStorage.removeItem('vitruve-encoder');
  };

  const getCartTotal = () => {
    // Calculate total from accessories
    const accessoriesTotal = Object.entries(cart).reduce((total, [productId, quantity]) => {
      // Here you would look up the product price from your products data
      // For now, we'll just use a placeholder approach
      const product = window._products?.find(p => p.id === productId);
      return total + (product?.price || 0) * quantity;
    }, 0);

    // Add software plan cost
    const planCost = selectedPlan?.price || 0;

    // Add encoder cost
    const encoderCost = encoderPurchase 
      ? encoderPurchase.count * encoderPurchase.pricePerUnit 
      : 0;

    return accessoriesTotal + planCost + encoderCost;
  };

  const getCartItemCount = () => {
    return Object.values(cart).reduce((acc, count) => acc + count, 0);
  };

  const getSubtotal = () => {
    return getCartTotal();
  };
  
  // Helper function to open cart sidebar
  const setCartSidebarState = (isOpen: boolean) => {
    localStorage.setItem('cart-sidebar-state', JSON.stringify(isOpen));
    window.dispatchEvent(new Event('storage'));
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
      updateCartItemQuantity
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
