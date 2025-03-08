
import { Product, EncoderPurchase } from "@/types/cart";
import { SoftwarePlan } from "@/components/encoder/SoftwarePlanSelector";

// Local storage keys
export const CART_STORAGE_KEY = 'vitruve-cart';
export const PLAN_STORAGE_KEY = 'vitruve-plan';
export const ENCODER_STORAGE_KEY = 'vitruve-encoder';

// Calculate cart total
export const calculateCartTotal = (
  cart: { [key: string]: number },
  selectedPlan: SoftwarePlan | null,
  encoderPurchase: EncoderPurchase | null
): number => {
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

// Calculate cart item count
export const calculateCartItemCount = (
  cart: { [key: string]: number },
  selectedPlan: SoftwarePlan | null,
  encoderPurchase: EncoderPurchase | null
): number => {
  // Count only accessories with quantity > 0
  const accessoriesCount = Object.values(cart).reduce((acc, quantity) => {
    // Only count items with quantity > 0
    return quantity > 0 ? acc + 1 : acc;
  }, 0);
  
  // Count encoder (if any)
  let encoderCount = 0;
  if (encoderPurchase && encoderPurchase.count > 0) {
    encoderCount = 1; // Count as one item regardless of quantity
  }
  
  // Count plan (if any)
  let planCount = 0;
  if (selectedPlan) {
    planCount = 1;
  }
  
  return accessoriesCount + encoderCount + planCount;
};

// Load cart data from localStorage
export const loadCartFromStorage = () => {
  try {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    const savedPlan = localStorage.getItem(PLAN_STORAGE_KEY);
    const savedEncoder = localStorage.getItem(ENCODER_STORAGE_KEY);
    
    return {
      cart: savedCart ? JSON.parse(savedCart) : {},
      selectedPlan: savedPlan ? JSON.parse(savedPlan) : null,
      encoderPurchase: savedEncoder ? JSON.parse(savedEncoder) : null
    };
  } catch (e) {
    console.error('Error loading cart from localStorage', e);
    return {
      cart: {},
      selectedPlan: null,
      encoderPurchase: null
    };
  }
};

// Save cart data to localStorage
export const saveCartToStorage = (
  cart: { [key: string]: number },
  selectedPlan: SoftwarePlan | null,
  encoderPurchase: EncoderPurchase | null
) => {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    localStorage.setItem(PLAN_STORAGE_KEY, JSON.stringify(selectedPlan));
    localStorage.setItem(ENCODER_STORAGE_KEY, JSON.stringify(encoderPurchase));
  } catch (e) {
    console.error('Error saving cart to localStorage', e);
  }
};

// Clear cart data from localStorage
export const clearCartStorage = () => {
  localStorage.removeItem(CART_STORAGE_KEY);
  localStorage.removeItem(PLAN_STORAGE_KEY);
  localStorage.removeItem(ENCODER_STORAGE_KEY);
};
