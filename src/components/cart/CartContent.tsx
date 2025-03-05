
import React from "react";
import { CartItem } from "./CartItem";
import { Product } from "@/context/CartContext";
import { SoftwarePlan } from "@/components/encoder/SoftwarePlanSelector";
import { EncoderPurchase } from "@/context/CartContext";

interface CartContentProps {
  selectedPlan: SoftwarePlan | null;
  encoderPurchase: EncoderPurchase | null;
  cart: { [key: string]: number };
  products: Product[];
}

export const CartContent = ({ selectedPlan, encoderPurchase, cart, products }: CartContentProps) => {
  const accessoryItems = Object.keys(cart).length;

  return (
    <div className="flex-1 overflow-y-auto p-4">
      {/* Plan selection */}
      {selectedPlan && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Software Plan</h3>
          <CartItem 
            name={selectedPlan.name} 
            description="Software subscription"
            price={selectedPlan.price}
          />
        </div>
      )}
      
      {/* Encoder selection */}
      {encoderPurchase && encoderPurchase.count > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Hardware</h3>
          <CartItem 
            name={`Vitruve Encoder${encoderPurchase.count > 1 ? 's' : ''}`} 
            description={`${encoderPurchase.count} unit${encoderPurchase.count > 1 ? 's' : ''}`}
            price={encoderPurchase.count * encoderPurchase.pricePerUnit}
          />
        </div>
      )}
      
      {/* Accessories */}
      {accessoryItems > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Accessories</h3>
          {Object.entries(cart).map(([productId, quantity]) => {
            const product = products.find(p => p.id === productId);
            if (!product) return null;
            
            return (
              <CartItem 
                key={productId}
                name={product.name}
                description={product.category}
                price={product.price * quantity}
                quantity={quantity}
                image={product.image}
              />
            );
          })}
        </div>
      )}
      
      {/* Empty state */}
      {!selectedPlan && !encoderPurchase && accessoryItems === 0 && (
        <div className="text-center py-8 text-gray-500 dark:text-gray-400">
          Your cart is empty
        </div>
      )}
    </div>
  );
};
