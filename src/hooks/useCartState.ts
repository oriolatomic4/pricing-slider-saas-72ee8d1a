
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Product, EncoderPurchase } from "@/types/cart";
import { SoftwarePlan } from "@/components/encoder/SoftwarePlanSelector";
import { setCartSidebarState } from "@/lib/utils";
import { 
  loadCartFromStorage, 
  saveCartToStorage, 
  clearCartStorage,
  calculateCartTotal,
  calculateCartItemCount
} from "@/utils/cartUtils";

export const useCartState = () => {
  const [cart, setCart] = useState<{ [key: string]: number }>({});
  const [selectedPlan, setSelectedPlan] = useState<SoftwarePlan | null>(null);
  const [encoderPurchase, setEncoderPurchase] = useState<EncoderPurchase | null>(null);

  // Try to load cart from localStorage on initial render
  useEffect(() => {
    const { cart: savedCart, selectedPlan: savedPlan, encoderPurchase: savedEncoder } = loadCartFromStorage();
    setCart(savedCart);
    setSelectedPlan(savedPlan);
    setEncoderPurchase(savedEncoder);
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    saveCartToStorage(cart, selectedPlan, encoderPurchase);
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
    clearCartStorage();
  };

  // Used after completing a purchase
  const completePurchase = () => {
    // Only clear the cart after successful purchase
    setCart({});
    setSelectedPlan(null);
    setEncoderPurchase(null);
    clearCartStorage();
    
    toast.success("Thank you for your purchase!");
  };

  const getCartTotal = () => {
    return calculateCartTotal(cart, selectedPlan, encoderPurchase);
  };

  const getCartItemCount = () => {
    return calculateCartItemCount(cart, selectedPlan, encoderPurchase);
  };

  const getSubtotal = getCartTotal;

  return {
    cart,
    selectedPlan,
    encoderPurchase,
    setSelectedPlan,
    setEncoderPurchase,
    addToCart,
    removeFromCart,
    updateCartItemQuantity,
    clearCart,
    completePurchase,
    getCartTotal,
    getCartItemCount,
    getSubtotal
  };
};
