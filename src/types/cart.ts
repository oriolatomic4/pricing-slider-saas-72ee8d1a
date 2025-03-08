
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

export interface CartContextType {
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
