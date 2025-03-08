
import React from "react";
import { CartContent } from "@/components/cart/CartContent";
import { Product } from "@/context/CartContext";
import { SoftwarePlan } from "@/components/encoder/SoftwarePlanSelector";
import { EncoderPurchase } from "@/context/CartContext";

interface OrderSummaryProps {
  selectedPlan: SoftwarePlan | null;
  encoderPurchase: EncoderPurchase | null;
  cart: { [key: string]: number };
  products: Product[];
  onRemoveItem: (productId: string) => void;
  onRemovePlan: () => void;
  onRemoveEncoder: () => void;
}

const OrderSummary = ({
  selectedPlan,
  encoderPurchase,
  cart,
  products,
  onRemoveItem,
  onRemovePlan,
  onRemoveEncoder
}: OrderSummaryProps) => {
  return (
    <div className="p-6 border-b border-gray-200 dark:border-gray-800">
      <h2 className="text-xl font-semibold mb-4 text-black dark:text-white">Order Summary</h2>
      
      <div className="bg-gray-50 dark:bg-gray-950 rounded-lg">
        <CartContent 
          selectedPlan={selectedPlan}
          encoderPurchase={encoderPurchase}
          cart={cart}
          products={products}
          onRemoveItem={onRemoveItem}
          onRemovePlan={onRemovePlan}
          onRemoveEncoder={onRemoveEncoder}
        />
      </div>
    </div>
  );
};

export default OrderSummary;
